// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_fact
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciMediaServicesMediaWorkflowJobFactConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_fact#id DataOciMediaServicesMediaWorkflowJobFact#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_fact#key DataOciMediaServicesMediaWorkflowJobFact#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_fact#media_workflow_job_id DataOciMediaServicesMediaWorkflowJobFact#media_workflow_job_id}
  */
  readonly mediaWorkflowJobId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_fact oci_media_services_media_workflow_job_fact}
*/
export class DataOciMediaServicesMediaWorkflowJobFact extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_media_services_media_workflow_job_fact";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_fact oci_media_services_media_workflow_job_fact} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciMediaServicesMediaWorkflowJobFactConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciMediaServicesMediaWorkflowJobFactConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_media_services_media_workflow_job_fact',
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
    this._key = config.key;
    this._mediaWorkflowJobId = config.mediaWorkflowJobId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // detail - computed: true, optional: false, required: false
  public get detail() {
    return this.getStringAttribute('detail');
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // media_workflow_job_id - computed: false, optional: false, required: true
  private _mediaWorkflowJobId?: string; 
  public get mediaWorkflowJobId() {
    return this.getStringAttribute('media_workflow_job_id');
  }
  public set mediaWorkflowJobId(value: string) {
    this._mediaWorkflowJobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaWorkflowJobIdInput() {
    return this._mediaWorkflowJobId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      media_workflow_job_id: cdktf.stringToTerraform(this._mediaWorkflowJobId),
    };
  }
}
