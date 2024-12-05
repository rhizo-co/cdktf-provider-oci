// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_oneoff_patch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseOneoffPatchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_oneoff_patch#oneoff_patch_id DataOciDatabaseOneoffPatch#oneoff_patch_id}
  */
  readonly oneoffPatchId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_oneoff_patch oci_database_oneoff_patch}
*/
export class DataOciDatabaseOneoffPatch extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_oneoff_patch";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_oneoff_patch oci_database_oneoff_patch} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseOneoffPatchConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseOneoffPatchConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_oneoff_patch',
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
    this._oneoffPatchId = config.oneoffPatchId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // db_version - computed: true, optional: false, required: false
  public get dbVersion() {
    return this.getStringAttribute('db_version');
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

  // download_oneoff_patch_trigger - computed: true, optional: false, required: false
  public get downloadOneoffPatchTrigger() {
    return this.getNumberAttribute('download_oneoff_patch_trigger');
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

  // one_off_patches - computed: true, optional: false, required: false
  public get oneOffPatches() {
    return this.getListAttribute('one_off_patches');
  }

  // oneoff_patch_id - computed: false, optional: false, required: true
  private _oneoffPatchId?: string; 
  public get oneoffPatchId() {
    return this.getStringAttribute('oneoff_patch_id');
  }
  public set oneoffPatchId(value: string) {
    this._oneoffPatchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oneoffPatchIdInput() {
    return this._oneoffPatchId;
  }

  // release_update - computed: true, optional: false, required: false
  public get releaseUpdate() {
    return this.getStringAttribute('release_update');
  }

  // sha256sum - computed: true, optional: false, required: false
  public get sha256Sum() {
    return this.getStringAttribute('sha256sum');
  }

  // size_in_kbs - computed: true, optional: false, required: false
  public get sizeInKbs() {
    return this.getNumberAttribute('size_in_kbs');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_of_expiration - computed: true, optional: false, required: false
  public get timeOfExpiration() {
    return this.getStringAttribute('time_of_expiration');
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
      oneoff_patch_id: cdktf.stringToTerraform(this._oneoffPatchId),
    };
  }
}
