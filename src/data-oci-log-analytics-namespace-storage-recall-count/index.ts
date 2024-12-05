// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recall_count
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciLogAnalyticsNamespaceStorageRecallCountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recall_count#id DataOciLogAnalyticsNamespaceStorageRecallCount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recall_count#namespace DataOciLogAnalyticsNamespaceStorageRecallCount#namespace}
  */
  readonly namespace: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recall_count oci_log_analytics_namespace_storage_recall_count}
*/
export class DataOciLogAnalyticsNamespaceStorageRecallCount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_log_analytics_namespace_storage_recall_count";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recall_count oci_log_analytics_namespace_storage_recall_count} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciLogAnalyticsNamespaceStorageRecallCountConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciLogAnalyticsNamespaceStorageRecallCountConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_log_analytics_namespace_storage_recall_count',
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
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // recall_count - computed: true, optional: false, required: false
  public get recallCount() {
    return this.getNumberAttribute('recall_count');
  }

  // recall_failed - computed: true, optional: false, required: false
  public get recallFailed() {
    return this.getNumberAttribute('recall_failed');
  }

  // recall_limit - computed: true, optional: false, required: false
  public get recallLimit() {
    return this.getNumberAttribute('recall_limit');
  }

  // recall_pending - computed: true, optional: false, required: false
  public get recallPending() {
    return this.getNumberAttribute('recall_pending');
  }

  // recall_succeeded - computed: true, optional: false, required: false
  public get recallSucceeded() {
    return this.getNumberAttribute('recall_succeeded');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }
}
