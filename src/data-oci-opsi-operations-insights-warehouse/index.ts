// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOpsiOperationsInsightsWarehouseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse#operations_insights_warehouse_id DataOciOpsiOperationsInsightsWarehouse#operations_insights_warehouse_id}
  */
  readonly operationsInsightsWarehouseId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse oci_opsi_operations_insights_warehouse}
*/
export class DataOciOpsiOperationsInsightsWarehouse extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opsi_operations_insights_warehouse";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse oci_opsi_operations_insights_warehouse} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOpsiOperationsInsightsWarehouseConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOpsiOperationsInsightsWarehouseConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opsi_operations_insights_warehouse',
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
    this._operationsInsightsWarehouseId = config.operationsInsightsWarehouseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // cpu_allocated - computed: true, optional: false, required: false
  public get cpuAllocated() {
    return this.getNumberAttribute('cpu_allocated');
  }

  // cpu_used - computed: true, optional: false, required: false
  public get cpuUsed() {
    return this.getNumberAttribute('cpu_used');
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

  // dynamic_group_id - computed: true, optional: false, required: false
  public get dynamicGroupId() {
    return this.getStringAttribute('dynamic_group_id');
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

  // operations_insights_tenancy_id - computed: true, optional: false, required: false
  public get operationsInsightsTenancyId() {
    return this.getStringAttribute('operations_insights_tenancy_id');
  }

  // operations_insights_warehouse_id - computed: false, optional: false, required: true
  private _operationsInsightsWarehouseId?: string; 
  public get operationsInsightsWarehouseId() {
    return this.getStringAttribute('operations_insights_warehouse_id');
  }
  public set operationsInsightsWarehouseId(value: string) {
    this._operationsInsightsWarehouseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInsightsWarehouseIdInput() {
    return this._operationsInsightsWarehouseId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // storage_allocated_in_gbs - computed: true, optional: false, required: false
  public get storageAllocatedInGbs() {
    return this.getNumberAttribute('storage_allocated_in_gbs');
  }

  // storage_used_in_gbs - computed: true, optional: false, required: false
  public get storageUsedInGbs() {
    return this.getNumberAttribute('storage_used_in_gbs');
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

  // time_last_wallet_rotated - computed: true, optional: false, required: false
  public get timeLastWalletRotated() {
    return this.getStringAttribute('time_last_wallet_rotated');
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
      operations_insights_warehouse_id: cdktf.stringToTerraform(this._operationsInsightsWarehouseId),
    };
  }
}
