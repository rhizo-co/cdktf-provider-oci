// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseDbNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node#db_node_id DataOciDatabaseDbNode#db_node_id}
  */
  readonly dbNodeId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node oci_database_db_node}
*/
export class DataOciDatabaseDbNode extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_db_node";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node oci_database_db_node} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseDbNodeConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseDbNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_db_node',
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
    this._dbNodeId = config.dbNodeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_details - computed: true, optional: false, required: false
  public get additionalDetails() {
    return this.getStringAttribute('additional_details');
  }

  // backup_ip_id - computed: true, optional: false, required: false
  public get backupIpId() {
    return this.getStringAttribute('backup_ip_id');
  }

  // backup_vnic2id - computed: true, optional: false, required: false
  public get backupVnic2Id() {
    return this.getStringAttribute('backup_vnic2id');
  }

  // backup_vnic_id - computed: true, optional: false, required: false
  public get backupVnicId() {
    return this.getStringAttribute('backup_vnic_id');
  }

  // cpu_core_count - computed: true, optional: false, required: false
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }

  // db_node_id - computed: false, optional: false, required: true
  private _dbNodeId?: string; 
  public get dbNodeId() {
    return this.getStringAttribute('db_node_id');
  }
  public set dbNodeId(value: string) {
    this._dbNodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNodeIdInput() {
    return this._dbNodeId;
  }

  // db_node_storage_size_in_gbs - computed: true, optional: false, required: false
  public get dbNodeStorageSizeInGbs() {
    return this.getNumberAttribute('db_node_storage_size_in_gbs');
  }

  // db_server_id - computed: true, optional: false, required: false
  public get dbServerId() {
    return this.getStringAttribute('db_server_id');
  }

  // db_system_id - computed: true, optional: false, required: false
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // fault_domain - computed: true, optional: false, required: false
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // host_ip_id - computed: true, optional: false, required: false
  public get hostIpId() {
    return this.getStringAttribute('host_ip_id');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // maintenance_type - computed: true, optional: false, required: false
  public get maintenanceType() {
    return this.getStringAttribute('maintenance_type');
  }

  // memory_size_in_gbs - computed: true, optional: false, required: false
  public get memorySizeInGbs() {
    return this.getNumberAttribute('memory_size_in_gbs');
  }

  // software_storage_size_in_gb - computed: true, optional: false, required: false
  public get softwareStorageSizeInGb() {
    return this.getNumberAttribute('software_storage_size_in_gb');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_maintenance_window_end - computed: true, optional: false, required: false
  public get timeMaintenanceWindowEnd() {
    return this.getStringAttribute('time_maintenance_window_end');
  }

  // time_maintenance_window_start - computed: true, optional: false, required: false
  public get timeMaintenanceWindowStart() {
    return this.getStringAttribute('time_maintenance_window_start');
  }

  // total_cpu_core_count - computed: true, optional: false, required: false
  public get totalCpuCoreCount() {
    return this.getNumberAttribute('total_cpu_core_count');
  }

  // vnic2id - computed: true, optional: false, required: false
  public get vnic2Id() {
    return this.getStringAttribute('vnic2id');
  }

  // vnic_id - computed: true, optional: false, required: false
  public get vnicId() {
    return this.getStringAttribute('vnic_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_node_id: cdktf.stringToTerraform(this._dbNodeId),
    };
  }
}
