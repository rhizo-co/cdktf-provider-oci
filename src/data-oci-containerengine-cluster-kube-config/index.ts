// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_kube_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciContainerengineClusterKubeConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_kube_config#cluster_id DataOciContainerengineClusterKubeConfig#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_kube_config#endpoint DataOciContainerengineClusterKubeConfig#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_kube_config#expiration DataOciContainerengineClusterKubeConfig#expiration}
  */
  readonly expiration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_kube_config#id DataOciContainerengineClusterKubeConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_kube_config#token_version DataOciContainerengineClusterKubeConfig#token_version}
  */
  readonly tokenVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_kube_config oci_containerengine_cluster_kube_config}
*/
export class DataOciContainerengineClusterKubeConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_containerengine_cluster_kube_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_kube_config oci_containerengine_cluster_kube_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciContainerengineClusterKubeConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciContainerengineClusterKubeConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_containerengine_cluster_kube_config',
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
    this._clusterId = config.clusterId;
    this._endpoint = config.endpoint;
    this._expiration = config.expiration;
    this._id = config.id;
    this._tokenVersion = config.tokenVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration?: number; 
  public get expiration() {
    return this.getNumberAttribute('expiration');
  }
  public set expiration(value: number) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
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

  // token_version - computed: false, optional: true, required: false
  private _tokenVersion?: string; 
  public get tokenVersion() {
    return this.getStringAttribute('token_version');
  }
  public set tokenVersion(value: string) {
    this._tokenVersion = value;
  }
  public resetTokenVersion() {
    this._tokenVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenVersionInput() {
    return this._tokenVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      expiration: cdktf.numberToTerraform(this._expiration),
      id: cdktf.stringToTerraform(this._id),
      token_version: cdktf.stringToTerraform(this._tokenVersion),
    };
  }
}
