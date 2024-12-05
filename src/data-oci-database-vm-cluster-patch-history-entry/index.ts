// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseVmClusterPatchHistoryEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entry#id DataOciDatabaseVmClusterPatchHistoryEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entry#patch_history_entry_id DataOciDatabaseVmClusterPatchHistoryEntry#patch_history_entry_id}
  */
  readonly patchHistoryEntryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entry#vm_cluster_id DataOciDatabaseVmClusterPatchHistoryEntry#vm_cluster_id}
  */
  readonly vmClusterId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entry oci_database_vm_cluster_patch_history_entry}
*/
export class DataOciDatabaseVmClusterPatchHistoryEntry extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_vm_cluster_patch_history_entry";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entry oci_database_vm_cluster_patch_history_entry} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseVmClusterPatchHistoryEntryConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseVmClusterPatchHistoryEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_vm_cluster_patch_history_entry',
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
    this._id = config.id;
    this._patchHistoryEntryId = config.patchHistoryEntryId;
    this._vmClusterId = config.vmClusterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // patch_history_entry_id - computed: false, optional: false, required: true
  private _patchHistoryEntryId?: string; 
  public get patchHistoryEntryId() {
    return this.getStringAttribute('patch_history_entry_id');
  }
  public set patchHistoryEntryId(value: string) {
    this._patchHistoryEntryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patchHistoryEntryIdInput() {
    return this._patchHistoryEntryId;
  }

  // patch_id - computed: true, optional: false, required: false
  public get patchId() {
    return this.getStringAttribute('patch_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_ended - computed: true, optional: false, required: false
  public get timeEnded() {
    return this.getStringAttribute('time_ended');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // vm_cluster_id - computed: false, optional: false, required: true
  private _vmClusterId?: string; 
  public get vmClusterId() {
    return this.getStringAttribute('vm_cluster_id');
  }
  public set vmClusterId(value: string) {
    this._vmClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmClusterIdInput() {
    return this._vmClusterId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      patch_history_entry_id: cdktf.stringToTerraform(this._patchHistoryEntryId),
      vm_cluster_id: cdktf.stringToTerraform(this._vmClusterId),
    };
  }
}
