// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_generic_artifacts_content
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciGenericArtifactsContentGenericArtifactsContentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_generic_artifacts_content#artifact_id DataOciGenericArtifactsContentGenericArtifactsContent#artifact_id}
  */
  readonly artifactId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_generic_artifacts_content#id DataOciGenericArtifactsContentGenericArtifactsContent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_generic_artifacts_content oci_generic_artifacts_content_generic_artifacts_content}
*/
export class DataOciGenericArtifactsContentGenericArtifactsContent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_generic_artifacts_content_generic_artifacts_content";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_generic_artifacts_content oci_generic_artifacts_content_generic_artifacts_content} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciGenericArtifactsContentGenericArtifactsContentConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciGenericArtifactsContentGenericArtifactsContentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_generic_artifacts_content_generic_artifacts_content',
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
    this._artifactId = config.artifactId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      artifact_id: cdktf.stringToTerraform(this._artifactId),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
