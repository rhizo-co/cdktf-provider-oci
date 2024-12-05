// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/email_suppression
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciEmailSuppressionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/email_suppression#suppression_id DataOciEmailSuppression#suppression_id}
  */
  readonly suppressionId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/email_suppression oci_email_suppression}
*/
export class DataOciEmailSuppression extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_email_suppression";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/email_suppression oci_email_suppression} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciEmailSuppressionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciEmailSuppressionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_email_suppression',
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
    this._suppressionId = config.suppressionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // email_address - computed: true, optional: false, required: false
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // error_detail - computed: true, optional: false, required: false
  public get errorDetail() {
    return this.getStringAttribute('error_detail');
  }

  // error_source - computed: true, optional: false, required: false
  public get errorSource() {
    return this.getStringAttribute('error_source');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message_id - computed: true, optional: false, required: false
  public get messageId() {
    return this.getStringAttribute('message_id');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // suppression_id - computed: false, optional: false, required: true
  private _suppressionId?: string; 
  public get suppressionId() {
    return this.getStringAttribute('suppression_id');
  }
  public set suppressionId(value: string) {
    this._suppressionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressionIdInput() {
    return this._suppressionId;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_suppressed - computed: true, optional: false, required: false
  public get timeLastSuppressed() {
    return this.getStringAttribute('time_last_suppressed');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      suppression_id: cdktf.stringToTerraform(this._suppressionId),
    };
  }
}
