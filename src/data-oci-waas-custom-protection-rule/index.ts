// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciWaasCustomProtectionRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rule#custom_protection_rule_id DataOciWaasCustomProtectionRule#custom_protection_rule_id}
  */
  readonly customProtectionRuleId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rule oci_waas_custom_protection_rule}
*/
export class DataOciWaasCustomProtectionRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_waas_custom_protection_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rule oci_waas_custom_protection_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciWaasCustomProtectionRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciWaasCustomProtectionRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_waas_custom_protection_rule',
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
    this._customProtectionRuleId = config.customProtectionRuleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // custom_protection_rule_id - computed: false, optional: false, required: true
  private _customProtectionRuleId?: string; 
  public get customProtectionRuleId() {
    return this.getStringAttribute('custom_protection_rule_id');
  }
  public set customProtectionRuleId(value: string) {
    this._customProtectionRuleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customProtectionRuleIdInput() {
    return this._customProtectionRuleId;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // mod_security_rule_ids - computed: true, optional: false, required: false
  public get modSecurityRuleIds() {
    return this.getListAttribute('mod_security_rule_ids');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // template - computed: true, optional: false, required: false
  public get template() {
    return this.getStringAttribute('template');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_protection_rule_id: cdktf.stringToTerraform(this._customProtectionRuleId),
    };
  }
}
