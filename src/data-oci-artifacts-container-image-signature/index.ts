// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciArtifactsContainerImageSignatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signature#image_signature_id DataOciArtifactsContainerImageSignature#image_signature_id}
  */
  readonly imageSignatureId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signature oci_artifacts_container_image_signature}
*/
export class DataOciArtifactsContainerImageSignature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_artifacts_container_image_signature";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signature oci_artifacts_container_image_signature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciArtifactsContainerImageSignatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciArtifactsContainerImageSignatureConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_artifacts_container_image_signature',
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
    this._imageSignatureId = config.imageSignatureId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // image_signature_id - computed: false, optional: false, required: true
  private _imageSignatureId?: string; 
  public get imageSignatureId() {
    return this.getStringAttribute('image_signature_id');
  }
  public set imageSignatureId(value: string) {
    this._imageSignatureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSignatureIdInput() {
    return this._imageSignatureId;
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // kms_key_version_id - computed: true, optional: false, required: false
  public get kmsKeyVersionId() {
    return this.getStringAttribute('kms_key_version_id');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // signature - computed: true, optional: false, required: false
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // signing_algorithm - computed: true, optional: false, required: false
  public get signingAlgorithm() {
    return this.getStringAttribute('signing_algorithm');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      image_signature_id: cdktf.stringToTerraform(this._imageSignatureId),
    };
  }
}
