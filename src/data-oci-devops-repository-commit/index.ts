// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDevopsRepositoryCommitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commit#commit_id DataOciDevopsRepositoryCommit#commit_id}
  */
  readonly commitId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commit#id DataOciDevopsRepositoryCommit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commit#repository_id DataOciDevopsRepositoryCommit#repository_id}
  */
  readonly repositoryId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commit oci_devops_repository_commit}
*/
export class DataOciDevopsRepositoryCommit extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_devops_repository_commit";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commit oci_devops_repository_commit} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDevopsRepositoryCommitConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDevopsRepositoryCommitConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_devops_repository_commit',
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
    this._commitId = config.commitId;
    this._id = config.id;
    this._repositoryId = config.repositoryId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // author_email - computed: true, optional: false, required: false
  public get authorEmail() {
    return this.getStringAttribute('author_email');
  }

  // author_name - computed: true, optional: false, required: false
  public get authorName() {
    return this.getStringAttribute('author_name');
  }

  // commit_id - computed: false, optional: false, required: true
  private _commitId?: string; 
  public get commitId() {
    return this.getStringAttribute('commit_id');
  }
  public set commitId(value: string) {
    this._commitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commitIdInput() {
    return this._commitId;
  }

  // commit_message - computed: true, optional: false, required: false
  public get commitMessage() {
    return this.getStringAttribute('commit_message');
  }

  // committer_email - computed: true, optional: false, required: false
  public get committerEmail() {
    return this.getStringAttribute('committer_email');
  }

  // committer_name - computed: true, optional: false, required: false
  public get committerName() {
    return this.getStringAttribute('committer_name');
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

  // parent_commit_ids - computed: true, optional: false, required: false
  public get parentCommitIds() {
    return this.getListAttribute('parent_commit_ids');
  }

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // tree_id - computed: true, optional: false, required: false
  public get treeId() {
    return this.getStringAttribute('tree_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      commit_id: cdktf.stringToTerraform(this._commitId),
      id: cdktf.stringToTerraform(this._id),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
    };
  }
}
