// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseDatabaseSoftwareImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_image#database_software_image_id DataOciDatabaseDatabaseSoftwareImage#database_software_image_id}
  */
  readonly databaseSoftwareImageId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_image oci_database_database_software_image}
*/
export class DataOciDatabaseDatabaseSoftwareImage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_database_software_image";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_image oci_database_database_software_image} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseDatabaseSoftwareImageConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseDatabaseSoftwareImageConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_database_software_image',
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
    this._databaseSoftwareImageId = config.databaseSoftwareImageId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // database_software_image_id - computed: false, optional: false, required: true
  private _databaseSoftwareImageId?: string; 
  public get databaseSoftwareImageId() {
    return this.getStringAttribute('database_software_image_id');
  }
  public set databaseSoftwareImageId(value: string) {
    this._databaseSoftwareImageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseSoftwareImageIdInput() {
    return this._databaseSoftwareImageId;
  }

  // database_software_image_included_patches - computed: true, optional: false, required: false
  public get databaseSoftwareImageIncludedPatches() {
    return this.getListAttribute('database_software_image_included_patches');
  }

  // database_software_image_one_off_patches - computed: true, optional: false, required: false
  public get databaseSoftwareImageOneOffPatches() {
    return this.getListAttribute('database_software_image_one_off_patches');
  }

  // database_version - computed: true, optional: false, required: false
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
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

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_shape_family - computed: true, optional: false, required: false
  public get imageShapeFamily() {
    return this.getStringAttribute('image_shape_family');
  }

  // image_type - computed: true, optional: false, required: false
  public get imageType() {
    return this.getStringAttribute('image_type');
  }

  // included_patches_summary - computed: true, optional: false, required: false
  public get includedPatchesSummary() {
    return this.getStringAttribute('included_patches_summary');
  }

  // is_upgrade_supported - computed: true, optional: false, required: false
  public get isUpgradeSupported() {
    return this.getBooleanAttribute('is_upgrade_supported');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // ls_inventory - computed: true, optional: false, required: false
  public get lsInventory() {
    return this.getStringAttribute('ls_inventory');
  }

  // patch_set - computed: true, optional: false, required: false
  public get patchSet() {
    return this.getStringAttribute('patch_set');
  }

  // source_db_home_id - computed: true, optional: false, required: false
  public get sourceDbHomeId() {
    return this.getStringAttribute('source_db_home_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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
      database_software_image_id: cdktf.stringToTerraform(this._databaseSoftwareImageId),
    };
  }
}
