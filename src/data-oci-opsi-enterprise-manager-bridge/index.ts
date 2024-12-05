// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOpsiEnterpriseManagerBridgeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridge#enterprise_manager_bridge_id DataOciOpsiEnterpriseManagerBridge#enterprise_manager_bridge_id}
  */
  readonly enterpriseManagerBridgeId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridge oci_opsi_enterprise_manager_bridge}
*/
export class DataOciOpsiEnterpriseManagerBridge extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opsi_enterprise_manager_bridge";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridge oci_opsi_enterprise_manager_bridge} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOpsiEnterpriseManagerBridgeConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOpsiEnterpriseManagerBridgeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opsi_enterprise_manager_bridge',
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
    this._enterpriseManagerBridgeId = config.enterpriseManagerBridgeId;
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

  // enterprise_manager_bridge_id - computed: false, optional: false, required: true
  private _enterpriseManagerBridgeId?: string; 
  public get enterpriseManagerBridgeId() {
    return this.getStringAttribute('enterprise_manager_bridge_id');
  }
  public set enterpriseManagerBridgeId(value: string) {
    this._enterpriseManagerBridgeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseManagerBridgeIdInput() {
    return this._enterpriseManagerBridgeId;
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

  // object_storage_bucket_name - computed: true, optional: false, required: false
  public get objectStorageBucketName() {
    return this.getStringAttribute('object_storage_bucket_name');
  }

  // object_storage_bucket_status_details - computed: true, optional: false, required: false
  public get objectStorageBucketStatusDetails() {
    return this.getStringAttribute('object_storage_bucket_status_details');
  }

  // object_storage_namespace_name - computed: true, optional: false, required: false
  public get objectStorageNamespaceName() {
    return this.getStringAttribute('object_storage_namespace_name');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enterprise_manager_bridge_id: cdktf.stringToTerraform(this._enterpriseManagerBridgeId),
    };
  }
}
