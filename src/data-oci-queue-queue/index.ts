// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/queue_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciQueueQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/queue_queue#queue_id DataOciQueueQueue#queue_id}
  */
  readonly queueId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/queue_queue oci_queue_queue}
*/
export class DataOciQueueQueue extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_queue_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciQueueQueue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciQueueQueue to import
  * @param importFromId The id of the existing DataOciQueueQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/queue_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciQueueQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_queue_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/queue_queue oci_queue_queue} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciQueueQueueConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciQueueQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_queue_queue',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '6.18.0',
        providerVersionConstraint: '~> 6.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._queueId = config.queueId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel_consumption_limit - computed: true, optional: false, required: false
  public get channelConsumptionLimit() {
    return this.getNumberAttribute('channel_consumption_limit');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // custom_encryption_key_id - computed: true, optional: false, required: false
  public get customEncryptionKeyId() {
    return this.getStringAttribute('custom_encryption_key_id');
  }

  // dead_letter_queue_delivery_count - computed: true, optional: false, required: false
  public get deadLetterQueueDeliveryCount() {
    return this.getNumberAttribute('dead_letter_queue_delivery_count');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // messages_endpoint - computed: true, optional: false, required: false
  public get messagesEndpoint() {
    return this.getStringAttribute('messages_endpoint');
  }

  // purge_trigger - computed: true, optional: false, required: false
  public get purgeTrigger() {
    return this.getNumberAttribute('purge_trigger');
  }

  // purge_type - computed: true, optional: false, required: false
  public get purgeType() {
    return this.getStringAttribute('purge_type');
  }

  // queue_id - computed: false, optional: false, required: true
  private _queueId?: string; 
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }
  public set queueId(value: string) {
    this._queueId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueIdInput() {
    return this._queueId;
  }

  // retention_in_seconds - computed: true, optional: false, required: false
  public get retentionInSeconds() {
    return this.getNumberAttribute('retention_in_seconds');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // timeout_in_seconds - computed: true, optional: false, required: false
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }

  // visibility_in_seconds - computed: true, optional: false, required: false
  public get visibilityInSeconds() {
    return this.getNumberAttribute('visibility_in_seconds');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      queue_id: cdktf.stringToTerraform(this._queueId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      queue_id: {
        value: cdktf.stringToHclTerraform(this._queueId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
