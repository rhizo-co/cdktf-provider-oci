// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciAiLanguageModelTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_type#id DataOciAiLanguageModelType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_type#model_type DataOciAiLanguageModelType#model_type}
  */
  readonly modelType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_type oci_ai_language_model_type}
*/
export class DataOciAiLanguageModelType extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ai_language_model_type";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_type oci_ai_language_model_type} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciAiLanguageModelTypeConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciAiLanguageModelTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ai_language_model_type',
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
    this._id = config.id;
    this._modelType = config.modelType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return this.getStringAttribute('capabilities');
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

  // model_type - computed: false, optional: false, required: true
  private _modelType?: string; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string) {
    this._modelType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType;
  }

  // versions - computed: true, optional: false, required: false
  public get versions() {
    return this.getListAttribute('versions');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      model_type: cdktf.stringToTerraform(this._modelType),
    };
  }
}
