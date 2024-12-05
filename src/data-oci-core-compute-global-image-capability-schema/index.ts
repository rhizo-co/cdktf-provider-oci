// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schema
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreComputeGlobalImageCapabilitySchemaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schema#compute_global_image_capability_schema_id DataOciCoreComputeGlobalImageCapabilitySchema#compute_global_image_capability_schema_id}
  */
  readonly computeGlobalImageCapabilitySchemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schema#id DataOciCoreComputeGlobalImageCapabilitySchema#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schema oci_core_compute_global_image_capability_schema}
*/
export class DataOciCoreComputeGlobalImageCapabilitySchema extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_compute_global_image_capability_schema";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schema oci_core_compute_global_image_capability_schema} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreComputeGlobalImageCapabilitySchemaConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreComputeGlobalImageCapabilitySchemaConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_compute_global_image_capability_schema',
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
    this._computeGlobalImageCapabilitySchemaId = config.computeGlobalImageCapabilitySchemaId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_global_image_capability_schema_id - computed: false, optional: false, required: true
  private _computeGlobalImageCapabilitySchemaId?: string; 
  public get computeGlobalImageCapabilitySchemaId() {
    return this.getStringAttribute('compute_global_image_capability_schema_id');
  }
  public set computeGlobalImageCapabilitySchemaId(value: string) {
    this._computeGlobalImageCapabilitySchemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeGlobalImageCapabilitySchemaIdInput() {
    return this._computeGlobalImageCapabilitySchemaId;
  }

  // current_version_name - computed: true, optional: false, required: false
  public get currentVersionName() {
    return this.getStringAttribute('current_version_name');
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

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_global_image_capability_schema_id: cdktf.stringToTerraform(this._computeGlobalImageCapabilitySchemaId),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
