// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementExternalAsmInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_instance#external_asm_instance_id DataOciDatabaseManagementExternalAsmInstance#external_asm_instance_id}
  */
  readonly externalAsmInstanceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_instance oci_database_management_external_asm_instance}
*/
export class DataOciDatabaseManagementExternalAsmInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_external_asm_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_instance oci_database_management_external_asm_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementExternalAsmInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementExternalAsmInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_external_asm_instance',
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
    this._externalAsmInstanceId = config.externalAsmInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adr_home_directory - computed: true, optional: false, required: false
  public get adrHomeDirectory() {
    return this.getStringAttribute('adr_home_directory');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // component_name - computed: true, optional: false, required: false
  public get componentName() {
    return this.getStringAttribute('component_name');
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

  // external_asm_id - computed: true, optional: false, required: false
  public get externalAsmId() {
    return this.getStringAttribute('external_asm_id');
  }

  // external_asm_instance_id - computed: false, optional: false, required: true
  private _externalAsmInstanceId?: string; 
  public get externalAsmInstanceId() {
    return this.getStringAttribute('external_asm_instance_id');
  }
  public set externalAsmInstanceId(value: string) {
    this._externalAsmInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAsmInstanceIdInput() {
    return this._externalAsmInstanceId;
  }

  // external_db_node_id - computed: true, optional: false, required: false
  public get externalDbNodeId() {
    return this.getStringAttribute('external_db_node_id');
  }

  // external_db_system_id - computed: true, optional: false, required: false
  public get externalDbSystemId() {
    return this.getStringAttribute('external_db_system_id');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
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
      external_asm_instance_id: cdktf.stringToTerraform(this._externalAsmInstanceId),
    };
  }
}
