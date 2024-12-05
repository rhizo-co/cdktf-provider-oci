// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeTargetAlertPolicyAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_association#target_alert_policy_association_id DataOciDataSafeTargetAlertPolicyAssociation#target_alert_policy_association_id}
  */
  readonly targetAlertPolicyAssociationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_association oci_data_safe_target_alert_policy_association}
*/
export class DataOciDataSafeTargetAlertPolicyAssociation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_target_alert_policy_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_association oci_data_safe_target_alert_policy_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeTargetAlertPolicyAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeTargetAlertPolicyAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_target_alert_policy_association',
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
    this._targetAlertPolicyAssociationId = config.targetAlertPolicyAssociationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
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

  // target_alert_policy_association_id - computed: false, optional: false, required: true
  private _targetAlertPolicyAssociationId?: string; 
  public get targetAlertPolicyAssociationId() {
    return this.getStringAttribute('target_alert_policy_association_id');
  }
  public set targetAlertPolicyAssociationId(value: string) {
    this._targetAlertPolicyAssociationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAlertPolicyAssociationIdInput() {
    return this._targetAlertPolicyAssociationId;
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      target_alert_policy_association_id: cdktf.stringToTerraform(this._targetAlertPolicyAssociationId),
    };
  }
}
