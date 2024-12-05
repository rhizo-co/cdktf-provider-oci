// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciWafWebAppFirewallConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall#web_app_firewall_id DataOciWafWebAppFirewall#web_app_firewall_id}
  */
  readonly webAppFirewallId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall oci_waf_web_app_firewall}
*/
export class DataOciWafWebAppFirewall extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_waf_web_app_firewall";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall oci_waf_web_app_firewall} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciWafWebAppFirewallConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciWafWebAppFirewallConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_waf_web_app_firewall',
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
    this._webAppFirewallId = config.webAppFirewallId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_type - computed: true, optional: false, required: false
  public get backendType() {
    return this.getStringAttribute('backend_type');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // load_balancer_id - computed: true, optional: false, required: false
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // web_app_firewall_id - computed: false, optional: false, required: true
  private _webAppFirewallId?: string; 
  public get webAppFirewallId() {
    return this.getStringAttribute('web_app_firewall_id');
  }
  public set webAppFirewallId(value: string) {
    this._webAppFirewallId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webAppFirewallIdInput() {
    return this._webAppFirewallId;
  }

  // web_app_firewall_policy_id - computed: true, optional: false, required: false
  public get webAppFirewallPolicyId() {
    return this.getStringAttribute('web_app_firewall_policy_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      web_app_firewall_id: cdktf.stringToTerraform(this._webAppFirewallId),
    };
  }
}
