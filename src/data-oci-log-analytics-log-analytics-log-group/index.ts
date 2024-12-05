// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciLogAnalyticsLogAnalyticsLogGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_group#log_analytics_log_group_id DataOciLogAnalyticsLogAnalyticsLogGroup#log_analytics_log_group_id}
  */
  readonly logAnalyticsLogGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_group#namespace DataOciLogAnalyticsLogAnalyticsLogGroup#namespace}
  */
  readonly namespace: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_group oci_log_analytics_log_analytics_log_group}
*/
export class DataOciLogAnalyticsLogAnalyticsLogGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_log_analytics_log_analytics_log_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_group oci_log_analytics_log_analytics_log_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciLogAnalyticsLogAnalyticsLogGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciLogAnalyticsLogAnalyticsLogGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_log_analytics_log_analytics_log_group',
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
    this._logAnalyticsLogGroupId = config.logAnalyticsLogGroupId;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // log_analytics_log_group_id - computed: false, optional: false, required: true
  private _logAnalyticsLogGroupId?: string; 
  public get logAnalyticsLogGroupId() {
    return this.getStringAttribute('log_analytics_log_group_id');
  }
  public set logAnalyticsLogGroupId(value: string) {
    this._logAnalyticsLogGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsLogGroupIdInput() {
    return this._logAnalyticsLogGroupId;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      log_analytics_log_group_id: cdktf.stringToTerraform(this._logAnalyticsLogGroupId),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }
}
