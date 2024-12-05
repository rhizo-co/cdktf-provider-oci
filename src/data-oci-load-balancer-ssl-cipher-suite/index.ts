// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_ssl_cipher_suite
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciLoadBalancerSslCipherSuiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_ssl_cipher_suite#load_balancer_id DataOciLoadBalancerSslCipherSuite#load_balancer_id}
  */
  readonly loadBalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_ssl_cipher_suite#name DataOciLoadBalancerSslCipherSuite#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_ssl_cipher_suite oci_load_balancer_ssl_cipher_suite}
*/
export class DataOciLoadBalancerSslCipherSuite extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_load_balancer_ssl_cipher_suite";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_ssl_cipher_suite oci_load_balancer_ssl_cipher_suite} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciLoadBalancerSslCipherSuiteConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciLoadBalancerSslCipherSuiteConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_load_balancer_ssl_cipher_suite',
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
    this._loadBalancerId = config.loadBalancerId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ciphers - computed: true, optional: false, required: false
  public get ciphers() {
    return this.getListAttribute('ciphers');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
