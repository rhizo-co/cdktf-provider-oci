// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_run_log
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataflowRunLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_run_log#base64_encode_content DataOciDataflowRunLog#base64_encode_content}
  */
  readonly base64EncodeContent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_run_log#id DataOciDataflowRunLog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_run_log#name DataOciDataflowRunLog#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_run_log#run_id DataOciDataflowRunLog#run_id}
  */
  readonly runId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_run_log oci_dataflow_run_log}
*/
export class DataOciDataflowRunLog extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dataflow_run_log";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_run_log oci_dataflow_run_log} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataflowRunLogConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataflowRunLogConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dataflow_run_log',
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
    this._base64EncodeContent = config.base64EncodeContent;
    this._id = config.id;
    this._name = config.name;
    this._runId = config.runId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base64_encode_content - computed: false, optional: true, required: false
  private _base64EncodeContent?: boolean | cdktf.IResolvable; 
  public get base64EncodeContent() {
    return this.getBooleanAttribute('base64_encode_content');
  }
  public set base64EncodeContent(value: boolean | cdktf.IResolvable) {
    this._base64EncodeContent = value;
  }
  public resetBase64EncodeContent() {
    this._base64EncodeContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64EncodeContentInput() {
    return this._base64EncodeContent;
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // run_id - computed: false, optional: false, required: true
  private _runId?: string; 
  public get runId() {
    return this.getStringAttribute('run_id');
  }
  public set runId(value: string) {
    this._runId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runIdInput() {
    return this._runId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base64_encode_content: cdktf.booleanToTerraform(this._base64EncodeContent),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      run_id: cdktf.stringToTerraform(this._runId),
    };
  }
}
