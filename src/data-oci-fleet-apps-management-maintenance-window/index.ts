// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_window
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFleetAppsManagementMaintenanceWindowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_window#maintenance_window_id DataOciFleetAppsManagementMaintenanceWindow#maintenance_window_id}
  */
  readonly maintenanceWindowId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_window oci_fleet_apps_management_maintenance_window}
*/
export class DataOciFleetAppsManagementMaintenanceWindow extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_maintenance_window";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_window oci_fleet_apps_management_maintenance_window} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFleetAppsManagementMaintenanceWindowConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFleetAppsManagementMaintenanceWindowConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_maintenance_window',
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
    this._maintenanceWindowId = config.maintenanceWindowId;
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

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
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

  // is_outage - computed: true, optional: false, required: false
  public get isOutage() {
    return this.getBooleanAttribute('is_outage');
  }

  // is_recurring - computed: true, optional: false, required: false
  public get isRecurring() {
    return this.getBooleanAttribute('is_recurring');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // maintenance_window_id - computed: false, optional: false, required: true
  private _maintenanceWindowId?: string; 
  public get maintenanceWindowId() {
    return this.getStringAttribute('maintenance_window_id');
  }
  public set maintenanceWindowId(value: string) {
    this._maintenanceWindowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowIdInput() {
    return this._maintenanceWindowId;
  }

  // maintenance_window_type - computed: true, optional: false, required: false
  public get maintenanceWindowType() {
    return this.getStringAttribute('maintenance_window_type');
  }

  // recurrences - computed: true, optional: false, required: false
  public get recurrences() {
    return this.getStringAttribute('recurrences');
  }

  // resource_region - computed: true, optional: false, required: false
  public get resourceRegion() {
    return this.getStringAttribute('resource_region');
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

  // task_initiation_cutoff - computed: true, optional: false, required: false
  public get taskInitiationCutoff() {
    return this.getNumberAttribute('task_initiation_cutoff');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_schedule_start - computed: true, optional: false, required: false
  public get timeScheduleStart() {
    return this.getStringAttribute('time_schedule_start');
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
      maintenance_window_id: cdktf.stringToTerraform(this._maintenanceWindowId),
    };
  }
}
