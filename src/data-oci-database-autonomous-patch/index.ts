// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_patch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseAutonomousPatchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_patch#autonomous_patch_id DataOciDatabaseAutonomousPatch#autonomous_patch_id}
  */
  readonly autonomousPatchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_patch#id DataOciDatabaseAutonomousPatch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_patch oci_database_autonomous_patch}
*/
export class DataOciDatabaseAutonomousPatch extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_autonomous_patch";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_patch oci_database_autonomous_patch} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseAutonomousPatchConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousPatchConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_patch',
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
    this._autonomousPatchId = config.autonomousPatchId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_patch_id - computed: false, optional: false, required: true
  private _autonomousPatchId?: string; 
  public get autonomousPatchId() {
    return this.getStringAttribute('autonomous_patch_id');
  }
  public set autonomousPatchId(value: string) {
    this._autonomousPatchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousPatchIdInput() {
    return this._autonomousPatchId;
  }

  // autonomous_patch_type - computed: true, optional: false, required: false
  public get autonomousPatchType() {
    return this.getStringAttribute('autonomous_patch_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // patch_model - computed: true, optional: false, required: false
  public get patchModel() {
    return this.getStringAttribute('patch_model');
  }

  // quarter - computed: true, optional: false, required: false
  public get quarter() {
    return this.getStringAttribute('quarter');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_released - computed: true, optional: false, required: false
  public get timeReleased() {
    return this.getStringAttribute('time_released');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // year - computed: true, optional: false, required: false
  public get year() {
    return this.getStringAttribute('year');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autonomous_patch_id: cdktf.stringToTerraform(this._autonomousPatchId),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
