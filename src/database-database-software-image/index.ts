// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseDatabaseSoftwareImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#compartment_id DatabaseDatabaseSoftwareImage#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#database_software_image_one_off_patches DatabaseDatabaseSoftwareImage#database_software_image_one_off_patches}
  */
  readonly databaseSoftwareImageOneOffPatches?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#database_version DatabaseDatabaseSoftwareImage#database_version}
  */
  readonly databaseVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#defined_tags DatabaseDatabaseSoftwareImage#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#display_name DatabaseDatabaseSoftwareImage#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#freeform_tags DatabaseDatabaseSoftwareImage#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#id DatabaseDatabaseSoftwareImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#image_shape_family DatabaseDatabaseSoftwareImage#image_shape_family}
  */
  readonly imageShapeFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#image_type DatabaseDatabaseSoftwareImage#image_type}
  */
  readonly imageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#ls_inventory DatabaseDatabaseSoftwareImage#ls_inventory}
  */
  readonly lsInventory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#patch_set DatabaseDatabaseSoftwareImage#patch_set}
  */
  readonly patchSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#source_db_home_id DatabaseDatabaseSoftwareImage#source_db_home_id}
  */
  readonly sourceDbHomeId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#timeouts DatabaseDatabaseSoftwareImage#timeouts}
  */
  readonly timeouts?: DatabaseDatabaseSoftwareImageTimeouts;
}
export interface DatabaseDatabaseSoftwareImageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#create DatabaseDatabaseSoftwareImage#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#delete DatabaseDatabaseSoftwareImage#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#update DatabaseDatabaseSoftwareImage#update}
  */
  readonly update?: string;
}

export function databaseDatabaseSoftwareImageTimeoutsToTerraform(struct?: DatabaseDatabaseSoftwareImageTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function databaseDatabaseSoftwareImageTimeoutsToHclTerraform(struct?: DatabaseDatabaseSoftwareImageTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseDatabaseSoftwareImageTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseDatabaseSoftwareImageTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDatabaseSoftwareImageTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image oci_database_database_software_image}
*/
export class DatabaseDatabaseSoftwareImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_database_software_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseDatabaseSoftwareImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseDatabaseSoftwareImage to import
  * @param importFromId The id of the existing DatabaseDatabaseSoftwareImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseDatabaseSoftwareImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_database_software_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image oci_database_database_software_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseDatabaseSoftwareImageConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseDatabaseSoftwareImageConfig) {
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
    this._compartmentId = config.compartmentId;
    this._databaseSoftwareImageOneOffPatches = config.databaseSoftwareImageOneOffPatches;
    this._databaseVersion = config.databaseVersion;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._imageShapeFamily = config.imageShapeFamily;
    this._imageType = config.imageType;
    this._lsInventory = config.lsInventory;
    this._patchSet = config.patchSet;
    this._sourceDbHomeId = config.sourceDbHomeId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // database_software_image_included_patches - computed: true, optional: false, required: false
  public get databaseSoftwareImageIncludedPatches() {
    return this.getListAttribute('database_software_image_included_patches');
  }

  // database_software_image_one_off_patches - computed: true, optional: true, required: false
  private _databaseSoftwareImageOneOffPatches?: string[]; 
  public get databaseSoftwareImageOneOffPatches() {
    return this.getListAttribute('database_software_image_one_off_patches');
  }
  public set databaseSoftwareImageOneOffPatches(value: string[]) {
    this._databaseSoftwareImageOneOffPatches = value;
  }
  public resetDatabaseSoftwareImageOneOffPatches() {
    this._databaseSoftwareImageOneOffPatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseSoftwareImageOneOffPatchesInput() {
    return this._databaseSoftwareImageOneOffPatches;
  }

  // database_version - computed: true, optional: true, required: false
  private _databaseVersion?: string; 
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
  }
  public set databaseVersion(value: string) {
    this._databaseVersion = value;
  }
  public resetDatabaseVersion() {
    this._databaseVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseVersionInput() {
    return this._databaseVersion;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
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

  // image_shape_family - computed: true, optional: true, required: false
  private _imageShapeFamily?: string; 
  public get imageShapeFamily() {
    return this.getStringAttribute('image_shape_family');
  }
  public set imageShapeFamily(value: string) {
    this._imageShapeFamily = value;
  }
  public resetImageShapeFamily() {
    this._imageShapeFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageShapeFamilyInput() {
    return this._imageShapeFamily;
  }

  // image_type - computed: true, optional: true, required: false
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
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

  // ls_inventory - computed: true, optional: true, required: false
  private _lsInventory?: string; 
  public get lsInventory() {
    return this.getStringAttribute('ls_inventory');
  }
  public set lsInventory(value: string) {
    this._lsInventory = value;
  }
  public resetLsInventory() {
    this._lsInventory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsInventoryInput() {
    return this._lsInventory;
  }

  // patch_set - computed: true, optional: true, required: false
  private _patchSet?: string; 
  public get patchSet() {
    return this.getStringAttribute('patch_set');
  }
  public set patchSet(value: string) {
    this._patchSet = value;
  }
  public resetPatchSet() {
    this._patchSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchSetInput() {
    return this._patchSet;
  }

  // source_db_home_id - computed: true, optional: true, required: false
  private _sourceDbHomeId?: string; 
  public get sourceDbHomeId() {
    return this.getStringAttribute('source_db_home_id');
  }
  public set sourceDbHomeId(value: string) {
    this._sourceDbHomeId = value;
  }
  public resetSourceDbHomeId() {
    this._sourceDbHomeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDbHomeIdInput() {
    return this._sourceDbHomeId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseDatabaseSoftwareImageTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseDatabaseSoftwareImageTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      database_software_image_one_off_patches: cdktf.listMapper(cdktf.stringToTerraform, false)(this._databaseSoftwareImageOneOffPatches),
      database_version: cdktf.stringToTerraform(this._databaseVersion),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      image_shape_family: cdktf.stringToTerraform(this._imageShapeFamily),
      image_type: cdktf.stringToTerraform(this._imageType),
      ls_inventory: cdktf.stringToTerraform(this._lsInventory),
      patch_set: cdktf.stringToTerraform(this._patchSet),
      source_db_home_id: cdktf.stringToTerraform(this._sourceDbHomeId),
      timeouts: databaseDatabaseSoftwareImageTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_software_image_one_off_patches: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._databaseSoftwareImageOneOffPatches),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      database_version: {
        value: cdktf.stringToHclTerraform(this._databaseVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_shape_family: {
        value: cdktf.stringToHclTerraform(this._imageShapeFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_type: {
        value: cdktf.stringToHclTerraform(this._imageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ls_inventory: {
        value: cdktf.stringToHclTerraform(this._lsInventory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      patch_set: {
        value: cdktf.stringToHclTerraform(this._patchSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_db_home_id: {
        value: cdktf.stringToHclTerraform(this._sourceDbHomeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: databaseDatabaseSoftwareImageTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseDatabaseSoftwareImageTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
