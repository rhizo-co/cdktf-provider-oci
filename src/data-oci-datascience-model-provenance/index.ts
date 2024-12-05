// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_provenance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatascienceModelProvenanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_provenance#model_id DataOciDatascienceModelProvenance#model_id}
  */
  readonly modelId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_provenance oci_datascience_model_provenance}
*/
export class DataOciDatascienceModelProvenance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_datascience_model_provenance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_provenance oci_datascience_model_provenance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatascienceModelProvenanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatascienceModelProvenanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datascience_model_provenance',
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
    this._modelId = config.modelId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // git_branch - computed: true, optional: false, required: false
  public get gitBranch() {
    return this.getStringAttribute('git_branch');
  }

  // git_commit - computed: true, optional: false, required: false
  public get gitCommit() {
    return this.getStringAttribute('git_commit');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // model_id - computed: false, optional: false, required: true
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }

  // repository_url - computed: true, optional: false, required: false
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }

  // script_dir - computed: true, optional: false, required: false
  public get scriptDir() {
    return this.getStringAttribute('script_dir');
  }

  // training_id - computed: true, optional: false, required: false
  public get trainingId() {
    return this.getStringAttribute('training_id');
  }

  // training_script - computed: true, optional: false, required: false
  public get trainingScript() {
    return this.getStringAttribute('training_script');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      model_id: cdktf.stringToTerraform(this._modelId),
    };
  }
}
