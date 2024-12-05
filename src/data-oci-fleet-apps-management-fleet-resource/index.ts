// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFleetAppsManagementFleetResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resource#fleet_id DataOciFleetAppsManagementFleetResource#fleet_id}
  */
  readonly fleetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resource#fleet_resource_id DataOciFleetAppsManagementFleetResource#fleet_resource_id}
  */
  readonly fleetResourceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resource oci_fleet_apps_management_fleet_resource}
*/
export class DataOciFleetAppsManagementFleetResource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_fleet_resource";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resource oci_fleet_apps_management_fleet_resource} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFleetAppsManagementFleetResourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFleetAppsManagementFleetResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_fleet_resource',
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
    this._fleetId = config.fleetId;
    this._fleetResourceId = config.fleetResourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_type - computed: true, optional: false, required: false
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }

  // compartment - computed: true, optional: false, required: false
  public get compartment() {
    return this.getStringAttribute('compartment');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compliance_state - computed: true, optional: false, required: false
  public get complianceState() {
    return this.getStringAttribute('compliance_state');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // environment_type - computed: true, optional: false, required: false
  public get environmentType() {
    return this.getStringAttribute('environment_type');
  }

  // fleet_id - computed: false, optional: false, required: true
  private _fleetId?: string; 
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
  }
  public set fleetId(value: string) {
    this._fleetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetIdInput() {
    return this._fleetId;
  }

  // fleet_resource_id - computed: false, optional: false, required: true
  private _fleetResourceId?: string; 
  public get fleetResourceId() {
    return this.getStringAttribute('fleet_resource_id');
  }
  public set fleetResourceId(value: string) {
    this._fleetResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetResourceIdInput() {
    return this._fleetResourceId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // product - computed: true, optional: false, required: false
  public get product() {
    return this.getStringAttribute('product');
  }

  // product_count - computed: true, optional: false, required: false
  public get productCount() {
    return this.getNumberAttribute('product_count');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_region - computed: true, optional: false, required: false
  public get resourceRegion() {
    return this.getStringAttribute('resource_region');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
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

  // target_count - computed: true, optional: false, required: false
  public get targetCount() {
    return this.getNumberAttribute('target_count');
  }

  // tenancy_id - computed: true, optional: false, required: false
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }

  // tenancy_name - computed: true, optional: false, required: false
  public get tenancyName() {
    return this.getStringAttribute('tenancy_name');
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
      fleet_id: cdktf.stringToTerraform(this._fleetId),
      fleet_resource_id: cdktf.stringToTerraform(this._fleetResourceId),
    };
  }
}
