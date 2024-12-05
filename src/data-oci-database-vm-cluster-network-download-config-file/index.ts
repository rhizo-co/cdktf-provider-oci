// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network_download_config_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network_download_config_file#base64_encode_content DataOciDatabaseVmClusterNetworkDownloadConfigFile#base64_encode_content}
  */
  readonly base64EncodeContent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network_download_config_file#exadata_infrastructure_id DataOciDatabaseVmClusterNetworkDownloadConfigFile#exadata_infrastructure_id}
  */
  readonly exadataInfrastructureId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network_download_config_file#id DataOciDatabaseVmClusterNetworkDownloadConfigFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network_download_config_file#vm_cluster_network_id DataOciDatabaseVmClusterNetworkDownloadConfigFile#vm_cluster_network_id}
  */
  readonly vmClusterNetworkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network_download_config_file oci_database_vm_cluster_network_download_config_file}
*/
export class DataOciDatabaseVmClusterNetworkDownloadConfigFile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_vm_cluster_network_download_config_file";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network_download_config_file oci_database_vm_cluster_network_download_config_file} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_vm_cluster_network_download_config_file',
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
    this._exadataInfrastructureId = config.exadataInfrastructureId;
    this._id = config.id;
    this._vmClusterNetworkId = config.vmClusterNetworkId;
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

  // exadata_infrastructure_id - computed: false, optional: false, required: true
  private _exadataInfrastructureId?: string; 
  public get exadataInfrastructureId() {
    return this.getStringAttribute('exadata_infrastructure_id');
  }
  public set exadataInfrastructureId(value: string) {
    this._exadataInfrastructureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exadataInfrastructureIdInput() {
    return this._exadataInfrastructureId;
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

  // vm_cluster_network_id - computed: false, optional: false, required: true
  private _vmClusterNetworkId?: string; 
  public get vmClusterNetworkId() {
    return this.getStringAttribute('vm_cluster_network_id');
  }
  public set vmClusterNetworkId(value: string) {
    this._vmClusterNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmClusterNetworkIdInput() {
    return this._vmClusterNetworkId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base64_encode_content: cdktf.booleanToTerraform(this._base64EncodeContent),
      exadata_infrastructure_id: cdktf.stringToTerraform(this._exadataInfrastructureId),
      id: cdktf.stringToTerraform(this._id),
      vm_cluster_network_id: cdktf.stringToTerraform(this._vmClusterNetworkId),
    };
  }
}
