// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_mapped_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciNetworkFirewallNetworkFirewallPolicyMappedSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_mapped_secret#name DataOciNetworkFirewallNetworkFirewallPolicyMappedSecret#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_mapped_secret#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyMappedSecret#network_firewall_policy_id}
  */
  readonly networkFirewallPolicyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_mapped_secret oci_network_firewall_network_firewall_policy_mapped_secret}
*/
export class DataOciNetworkFirewallNetworkFirewallPolicyMappedSecret extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_network_firewall_network_firewall_policy_mapped_secret";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_mapped_secret oci_network_firewall_network_firewall_policy_mapped_secret} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciNetworkFirewallNetworkFirewallPolicyMappedSecretConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciNetworkFirewallNetworkFirewallPolicyMappedSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_network_firewall_network_firewall_policy_mapped_secret',
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
    this._name = config.name;
    this._networkFirewallPolicyId = config.networkFirewallPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // network_firewall_policy_id - computed: false, optional: false, required: true
  private _networkFirewallPolicyId?: string; 
  public get networkFirewallPolicyId() {
    return this.getStringAttribute('network_firewall_policy_id');
  }
  public set networkFirewallPolicyId(value: string) {
    this._networkFirewallPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFirewallPolicyIdInput() {
    return this._networkFirewallPolicyId;
  }

  // parent_resource_id - computed: true, optional: false, required: false
  public get parentResourceId() {
    return this.getStringAttribute('parent_resource_id');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vault_secret_id - computed: true, optional: false, required: false
  public get vaultSecretId() {
    return this.getStringAttribute('vault_secret_id');
  }

  // version_number - computed: true, optional: false, required: false
  public get versionNumber() {
    return this.getNumberAttribute('version_number');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      network_firewall_policy_id: cdktf.stringToTerraform(this._networkFirewallPolicyId),
    };
  }
}