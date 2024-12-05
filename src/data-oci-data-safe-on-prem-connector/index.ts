// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeOnPremConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connector#on_prem_connector_id DataOciDataSafeOnPremConnector#on_prem_connector_id}
  */
  readonly onPremConnectorId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connector oci_data_safe_on_prem_connector}
*/
export class DataOciDataSafeOnPremConnector extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_on_prem_connector";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connector oci_data_safe_on_prem_connector} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeOnPremConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeOnPremConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_on_prem_connector',
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
    this._onPremConnectorId = config.onPremConnectorId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_version - computed: true, optional: false, required: false
  public get availableVersion() {
    return this.getStringAttribute('available_version');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // created_version - computed: true, optional: false, required: false
  public get createdVersion() {
    return this.getStringAttribute('created_version');
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // on_prem_connector_id - computed: false, optional: false, required: true
  private _onPremConnectorId?: string; 
  public get onPremConnectorId() {
    return this.getStringAttribute('on_prem_connector_id');
  }
  public set onPremConnectorId(value: string) {
    this._onPremConnectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremConnectorIdInput() {
    return this._onPremConnectorId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      on_prem_connector_id: cdktf.stringToTerraform(this._onPremConnectorId),
    };
  }
}
