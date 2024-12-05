// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_property
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFleetAppsManagementFleetPropertyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_property#fleet_id DataOciFleetAppsManagementFleetProperty#fleet_id}
  */
  readonly fleetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_property#fleet_property_id DataOciFleetAppsManagementFleetProperty#fleet_property_id}
  */
  readonly fleetPropertyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_property oci_fleet_apps_management_fleet_property}
*/
export class DataOciFleetAppsManagementFleetProperty extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_fleet_property";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_property oci_fleet_apps_management_fleet_property} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFleetAppsManagementFleetPropertyConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFleetAppsManagementFleetPropertyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_fleet_property',
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
    this._fleetPropertyId = config.fleetPropertyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // fleet_property_id - computed: false, optional: false, required: true
  private _fleetPropertyId?: string; 
  public get fleetPropertyId() {
    return this.getStringAttribute('fleet_property_id');
  }
  public set fleetPropertyId(value: string) {
    this._fleetPropertyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetPropertyIdInput() {
    return this._fleetPropertyId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // property_id - computed: true, optional: false, required: false
  public get propertyId() {
    return this.getStringAttribute('property_id');
  }

  // selection_type - computed: true, optional: false, required: false
  public get selectionType() {
    return this.getStringAttribute('selection_type');
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // value_type - computed: true, optional: false, required: false
  public get valueType() {
    return this.getStringAttribute('value_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fleet_id: cdktf.stringToTerraform(this._fleetId),
      fleet_property_id: cdktf.stringToTerraform(this._fleetPropertyId),
    };
  }
}
