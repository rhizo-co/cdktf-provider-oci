// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciResourcemanagerPrivateEndpointReachableIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip#id DataOciResourcemanagerPrivateEndpointReachableIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip#private_endpoint_id DataOciResourcemanagerPrivateEndpointReachableIp#private_endpoint_id}
  */
  readonly privateEndpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip#private_ip DataOciResourcemanagerPrivateEndpointReachableIp#private_ip}
  */
  readonly privateIp: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip oci_resourcemanager_private_endpoint_reachable_ip}
*/
export class DataOciResourcemanagerPrivateEndpointReachableIp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_resourcemanager_private_endpoint_reachable_ip";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip oci_resourcemanager_private_endpoint_reachable_ip} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciResourcemanagerPrivateEndpointReachableIpConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciResourcemanagerPrivateEndpointReachableIpConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_resourcemanager_private_endpoint_reachable_ip',
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
    this._privateEndpointId = config.privateEndpointId;
    this._privateIp = config.privateIp;
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

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // private_endpoint_id - computed: false, optional: false, required: true
  private _privateEndpointId?: string; 
  public get privateEndpointId() {
    return this.getStringAttribute('private_endpoint_id');
  }
  public set privateEndpointId(value: string) {
    this._privateEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointIdInput() {
    return this._privateEndpointId;
  }

  // private_ip - computed: false, optional: false, required: true
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      private_endpoint_id: cdktf.stringToTerraform(this._privateEndpointId),
      private_ip: cdktf.stringToTerraform(this._privateIp),
    };
  }
}
