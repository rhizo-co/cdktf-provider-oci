// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/budget_alert_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciBudgetAlertRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/budget_alert_rule#alert_rule_id DataOciBudgetAlertRule#alert_rule_id}
  */
  readonly alertRuleId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/budget_alert_rule#budget_id DataOciBudgetAlertRule#budget_id}
  */
  readonly budgetId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/budget_alert_rule oci_budget_alert_rule}
*/
export class DataOciBudgetAlertRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_budget_alert_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/budget_alert_rule oci_budget_alert_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciBudgetAlertRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciBudgetAlertRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_budget_alert_rule',
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
    this._alertRuleId = config.alertRuleId;
    this._budgetId = config.budgetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_rule_id - computed: false, optional: false, required: true
  private _alertRuleId?: string; 
  public get alertRuleId() {
    return this.getStringAttribute('alert_rule_id');
  }
  public set alertRuleId(value: string) {
    this._alertRuleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRuleIdInput() {
    return this._alertRuleId;
  }

  // budget_id - computed: false, optional: false, required: true
  private _budgetId?: string; 
  public get budgetId() {
    return this.getStringAttribute('budget_id');
  }
  public set budgetId(value: string) {
    this._budgetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetIdInput() {
    return this._budgetId;
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

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // recipients - computed: true, optional: false, required: false
  public get recipients() {
    return this.getStringAttribute('recipients');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // threshold_type - computed: true, optional: false, required: false
  public get thresholdType() {
    return this.getStringAttribute('threshold_type');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_rule_id: cdktf.stringToTerraform(this._alertRuleId),
      budget_id: cdktf.stringToTerraform(this._budgetId),
    };
  }
}
