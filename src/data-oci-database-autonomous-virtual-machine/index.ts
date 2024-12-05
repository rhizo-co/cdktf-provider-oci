// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseAutonomousVirtualMachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machine#autonomous_virtual_machine_id DataOciDatabaseAutonomousVirtualMachine#autonomous_virtual_machine_id}
  */
  readonly autonomousVirtualMachineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machine#id DataOciDatabaseAutonomousVirtualMachine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machine oci_database_autonomous_virtual_machine}
*/
export class DataOciDatabaseAutonomousVirtualMachine extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_autonomous_virtual_machine";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machine oci_database_autonomous_virtual_machine} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseAutonomousVirtualMachineConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousVirtualMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_virtual_machine',
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
    this._autonomousVirtualMachineId = config.autonomousVirtualMachineId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_virtual_machine_id - computed: false, optional: false, required: true
  private _autonomousVirtualMachineId?: string; 
  public get autonomousVirtualMachineId() {
    return this.getStringAttribute('autonomous_virtual_machine_id');
  }
  public set autonomousVirtualMachineId(value: string) {
    this._autonomousVirtualMachineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousVirtualMachineIdInput() {
    return this._autonomousVirtualMachineId;
  }

  // autonomous_vm_cluster_id - computed: true, optional: false, required: false
  public get autonomousVmClusterId() {
    return this.getStringAttribute('autonomous_vm_cluster_id');
  }

  // client_ip_address - computed: true, optional: false, required: false
  public get clientIpAddress() {
    return this.getStringAttribute('client_ip_address');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // cpu_core_count - computed: true, optional: false, required: false
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }

  // db_node_storage_size_in_gbs - computed: true, optional: false, required: false
  public get dbNodeStorageSizeInGbs() {
    return this.getNumberAttribute('db_node_storage_size_in_gbs');
  }

  // db_server_display_name - computed: true, optional: false, required: false
  public get dbServerDisplayName() {
    return this.getStringAttribute('db_server_display_name');
  }

  // db_server_id - computed: true, optional: false, required: false
  public get dbServerId() {
    return this.getStringAttribute('db_server_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // memory_size_in_gbs - computed: true, optional: false, required: false
  public get memorySizeInGbs() {
    return this.getNumberAttribute('memory_size_in_gbs');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // vm_name - computed: true, optional: false, required: false
  public get vmName() {
    return this.getStringAttribute('vm_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autonomous_virtual_machine_id: cdktf.stringToTerraform(this._autonomousVirtualMachineId),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
