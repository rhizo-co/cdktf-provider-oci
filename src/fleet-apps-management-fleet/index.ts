// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FleetAppsManagementFleetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#application_type FleetAppsManagementFleet#application_type}
  */
  readonly applicationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#defined_tags FleetAppsManagementFleet#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#description FleetAppsManagementFleet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#display_name FleetAppsManagementFleet#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#environment_type FleetAppsManagementFleet#environment_type}
  */
  readonly environmentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#fleet_type FleetAppsManagementFleet#fleet_type}
  */
  readonly fleetType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#freeform_tags FleetAppsManagementFleet#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#group_type FleetAppsManagementFleet#group_type}
  */
  readonly groupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#id FleetAppsManagementFleet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#is_target_auto_confirm FleetAppsManagementFleet#is_target_auto_confirm}
  */
  readonly isTargetAutoConfirm?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#products FleetAppsManagementFleet#products}
  */
  readonly products?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#resource_selection_type FleetAppsManagementFleet#resource_selection_type}
  */
  readonly resourceSelectionType?: string;
  /**
  * notification_preferences block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#notification_preferences FleetAppsManagementFleet#notification_preferences}
  */
  readonly notificationPreferences?: FleetAppsManagementFleetNotificationPreferences;
  /**
  * rule_selection_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#rule_selection_criteria FleetAppsManagementFleet#rule_selection_criteria}
  */
  readonly ruleSelectionCriteria?: FleetAppsManagementFleetRuleSelectionCriteria;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#timeouts FleetAppsManagementFleet#timeouts}
  */
  readonly timeouts?: FleetAppsManagementFleetTimeouts;
}
export interface FleetAppsManagementFleetNotificationPreferencesPreferences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#on_job_failure FleetAppsManagementFleet#on_job_failure}
  */
  readonly onJobFailure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#on_topology_modification FleetAppsManagementFleet#on_topology_modification}
  */
  readonly onTopologyModification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#on_upcoming_schedule FleetAppsManagementFleet#on_upcoming_schedule}
  */
  readonly onUpcomingSchedule?: boolean | cdktf.IResolvable;
}

export function fleetAppsManagementFleetNotificationPreferencesPreferencesToTerraform(struct?: FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference | FleetAppsManagementFleetNotificationPreferencesPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_job_failure: cdktf.booleanToTerraform(struct!.onJobFailure),
    on_topology_modification: cdktf.booleanToTerraform(struct!.onTopologyModification),
    on_upcoming_schedule: cdktf.booleanToTerraform(struct!.onUpcomingSchedule),
  }
}


export function fleetAppsManagementFleetNotificationPreferencesPreferencesToHclTerraform(struct?: FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference | FleetAppsManagementFleetNotificationPreferencesPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_job_failure: {
      value: cdktf.booleanToHclTerraform(struct!.onJobFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    on_topology_modification: {
      value: cdktf.booleanToHclTerraform(struct!.onTopologyModification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    on_upcoming_schedule: {
      value: cdktf.booleanToHclTerraform(struct!.onUpcomingSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementFleetNotificationPreferencesPreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onJobFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.onJobFailure = this._onJobFailure;
    }
    if (this._onTopologyModification !== undefined) {
      hasAnyValues = true;
      internalValueResult.onTopologyModification = this._onTopologyModification;
    }
    if (this._onUpcomingSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.onUpcomingSchedule = this._onUpcomingSchedule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementFleetNotificationPreferencesPreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onJobFailure = undefined;
      this._onTopologyModification = undefined;
      this._onUpcomingSchedule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onJobFailure = value.onJobFailure;
      this._onTopologyModification = value.onTopologyModification;
      this._onUpcomingSchedule = value.onUpcomingSchedule;
    }
  }

  // on_job_failure - computed: true, optional: true, required: false
  private _onJobFailure?: boolean | cdktf.IResolvable; 
  public get onJobFailure() {
    return this.getBooleanAttribute('on_job_failure');
  }
  public set onJobFailure(value: boolean | cdktf.IResolvable) {
    this._onJobFailure = value;
  }
  public resetOnJobFailure() {
    this._onJobFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onJobFailureInput() {
    return this._onJobFailure;
  }

  // on_topology_modification - computed: true, optional: true, required: false
  private _onTopologyModification?: boolean | cdktf.IResolvable; 
  public get onTopologyModification() {
    return this.getBooleanAttribute('on_topology_modification');
  }
  public set onTopologyModification(value: boolean | cdktf.IResolvable) {
    this._onTopologyModification = value;
  }
  public resetOnTopologyModification() {
    this._onTopologyModification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onTopologyModificationInput() {
    return this._onTopologyModification;
  }

  // on_upcoming_schedule - computed: true, optional: true, required: false
  private _onUpcomingSchedule?: boolean | cdktf.IResolvable; 
  public get onUpcomingSchedule() {
    return this.getBooleanAttribute('on_upcoming_schedule');
  }
  public set onUpcomingSchedule(value: boolean | cdktf.IResolvable) {
    this._onUpcomingSchedule = value;
  }
  public resetOnUpcomingSchedule() {
    this._onUpcomingSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onUpcomingScheduleInput() {
    return this._onUpcomingSchedule;
  }
}
export interface FleetAppsManagementFleetNotificationPreferences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#topic_id FleetAppsManagementFleet#topic_id}
  */
  readonly topicId: string;
  /**
  * preferences block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#preferences FleetAppsManagementFleet#preferences}
  */
  readonly preferences?: FleetAppsManagementFleetNotificationPreferencesPreferences;
}

export function fleetAppsManagementFleetNotificationPreferencesToTerraform(struct?: FleetAppsManagementFleetNotificationPreferencesOutputReference | FleetAppsManagementFleetNotificationPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    topic_id: cdktf.stringToTerraform(struct!.topicId),
    preferences: fleetAppsManagementFleetNotificationPreferencesPreferencesToTerraform(struct!.preferences),
  }
}


export function fleetAppsManagementFleetNotificationPreferencesToHclTerraform(struct?: FleetAppsManagementFleetNotificationPreferencesOutputReference | FleetAppsManagementFleetNotificationPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_id: {
      value: cdktf.stringToHclTerraform(struct!.topicId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferences: {
      value: fleetAppsManagementFleetNotificationPreferencesPreferencesToHclTerraform(struct!.preferences),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementFleetNotificationPreferencesPreferencesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementFleetNotificationPreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementFleetNotificationPreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._topicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicId = this._topicId;
    }
    if (this._preferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferences = this._preferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementFleetNotificationPreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compartmentId = undefined;
      this._topicId = undefined;
      this._preferences.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compartmentId = value.compartmentId;
      this._topicId = value.topicId;
      this._preferences.internalValue = value.preferences;
    }
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // topic_id - computed: false, optional: false, required: true
  private _topicId?: string; 
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
  public set topicId(value: string) {
    this._topicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicIdInput() {
    return this._topicId;
  }

  // preferences - computed: false, optional: true, required: false
  private _preferences = new FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference(this, "preferences");
  public get preferences() {
    return this._preferences;
  }
  public putPreferences(value: FleetAppsManagementFleetNotificationPreferencesPreferences) {
    this._preferences.internalValue = value;
  }
  public resetPreferences() {
    this._preferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferencesInput() {
    return this._preferences.internalValue;
  }
}
export interface FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#attr_group FleetAppsManagementFleet#attr_group}
  */
  readonly attrGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#attr_key FleetAppsManagementFleet#attr_key}
  */
  readonly attrKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#attr_value FleetAppsManagementFleet#attr_value}
  */
  readonly attrValue: string;
}

export function fleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsToTerraform(struct?: FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attr_group: cdktf.stringToTerraform(struct!.attrGroup),
    attr_key: cdktf.stringToTerraform(struct!.attrKey),
    attr_value: cdktf.stringToTerraform(struct!.attrValue),
  }
}


export function fleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsToHclTerraform(struct?: FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attr_group: {
      value: cdktf.stringToHclTerraform(struct!.attrGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attr_key: {
      value: cdktf.stringToHclTerraform(struct!.attrKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attr_value: {
      value: cdktf.stringToHclTerraform(struct!.attrValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrGroup = this._attrGroup;
    }
    if (this._attrKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrKey = this._attrKey;
    }
    if (this._attrValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrValue = this._attrValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attrGroup = undefined;
      this._attrKey = undefined;
      this._attrValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attrGroup = value.attrGroup;
      this._attrKey = value.attrKey;
      this._attrValue = value.attrValue;
    }
  }

  // attr_group - computed: false, optional: false, required: true
  private _attrGroup?: string; 
  public get attrGroup() {
    return this.getStringAttribute('attr_group');
  }
  public set attrGroup(value: string) {
    this._attrGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attrGroupInput() {
    return this._attrGroup;
  }

  // attr_key - computed: false, optional: false, required: true
  private _attrKey?: string; 
  public get attrKey() {
    return this.getStringAttribute('attr_key');
  }
  public set attrKey(value: string) {
    this._attrKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attrKeyInput() {
    return this._attrKey;
  }

  // attr_value - computed: false, optional: false, required: true
  private _attrValue?: string; 
  public get attrValue() {
    return this.getStringAttribute('attr_value');
  }
  public set attrValue(value: string) {
    this._attrValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attrValueInput() {
    return this._attrValue;
  }
}

export class FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference {
    return new FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementFleetRuleSelectionCriteriaRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#basis FleetAppsManagementFleet#basis}
  */
  readonly basis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#resource_compartment_id FleetAppsManagementFleet#resource_compartment_id}
  */
  readonly resourceCompartmentId: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#conditions FleetAppsManagementFleet#conditions}
  */
  readonly conditions: FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions[] | cdktf.IResolvable;
}

export function fleetAppsManagementFleetRuleSelectionCriteriaRulesToTerraform(struct?: FleetAppsManagementFleetRuleSelectionCriteriaRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basis: cdktf.stringToTerraform(struct!.basis),
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    resource_compartment_id: cdktf.stringToTerraform(struct!.resourceCompartmentId),
    conditions: cdktf.listMapper(fleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsToTerraform, true)(struct!.conditions),
  }
}


export function fleetAppsManagementFleetRuleSelectionCriteriaRulesToHclTerraform(struct?: FleetAppsManagementFleetRuleSelectionCriteriaRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basis: {
      value: cdktf.stringToHclTerraform(struct!.basis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceCompartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: cdktf.listMapperHcl(fleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FleetAppsManagementFleetRuleSelectionCriteriaRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basis !== undefined) {
      hasAnyValues = true;
      internalValueResult.basis = this._basis;
    }
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._resourceCompartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceCompartmentId = this._resourceCompartmentId;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementFleetRuleSelectionCriteriaRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basis = undefined;
      this._compartmentId = undefined;
      this._resourceCompartmentId = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basis = value.basis;
      this._compartmentId = value.compartmentId;
      this._resourceCompartmentId = value.resourceCompartmentId;
      this._conditions.internalValue = value.conditions;
    }
  }

  // basis - computed: true, optional: true, required: false
  private _basis?: string; 
  public get basis() {
    return this.getStringAttribute('basis');
  }
  public set basis(value: string) {
    this._basis = value;
  }
  public resetBasis() {
    this._basis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basisInput() {
    return this._basis;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // resource_compartment_id - computed: false, optional: false, required: true
  private _resourceCompartmentId?: string; 
  public get resourceCompartmentId() {
    return this.getStringAttribute('resource_compartment_id');
  }
  public set resourceCompartmentId(value: string) {
    this._resourceCompartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceCompartmentIdInput() {
    return this._resourceCompartmentId;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class FleetAppsManagementFleetRuleSelectionCriteriaRulesList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementFleetRuleSelectionCriteriaRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference {
    return new FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementFleetRuleSelectionCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#match_condition FleetAppsManagementFleet#match_condition}
  */
  readonly matchCondition: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#rules FleetAppsManagementFleet#rules}
  */
  readonly rules: FleetAppsManagementFleetRuleSelectionCriteriaRules[] | cdktf.IResolvable;
}

export function fleetAppsManagementFleetRuleSelectionCriteriaToTerraform(struct?: FleetAppsManagementFleetRuleSelectionCriteriaOutputReference | FleetAppsManagementFleetRuleSelectionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_condition: cdktf.stringToTerraform(struct!.matchCondition),
    rules: cdktf.listMapper(fleetAppsManagementFleetRuleSelectionCriteriaRulesToTerraform, true)(struct!.rules),
  }
}


export function fleetAppsManagementFleetRuleSelectionCriteriaToHclTerraform(struct?: FleetAppsManagementFleetRuleSelectionCriteriaOutputReference | FleetAppsManagementFleetRuleSelectionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_condition: {
      value: cdktf.stringToHclTerraform(struct!.matchCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktf.listMapperHcl(fleetAppsManagementFleetRuleSelectionCriteriaRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementFleetRuleSelectionCriteriaRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementFleetRuleSelectionCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementFleetRuleSelectionCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCondition = this._matchCondition;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementFleetRuleSelectionCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchCondition = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchCondition = value.matchCondition;
      this._rules.internalValue = value.rules;
    }
  }

  // match_condition - computed: false, optional: false, required: true
  private _matchCondition?: string; 
  public get matchCondition() {
    return this.getStringAttribute('match_condition');
  }
  public set matchCondition(value: string) {
    this._matchCondition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchConditionInput() {
    return this._matchCondition;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new FleetAppsManagementFleetRuleSelectionCriteriaRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: FleetAppsManagementFleetRuleSelectionCriteriaRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface FleetAppsManagementFleetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#create FleetAppsManagementFleet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#delete FleetAppsManagementFleet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#update FleetAppsManagementFleet#update}
  */
  readonly update?: string;
}

export function fleetAppsManagementFleetTimeoutsToTerraform(struct?: FleetAppsManagementFleetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function fleetAppsManagementFleetTimeoutsToHclTerraform(struct?: FleetAppsManagementFleetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementFleetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FleetAppsManagementFleetTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementFleetTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet oci_fleet_apps_management_fleet}
*/
export class FleetAppsManagementFleet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_fleet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FleetAppsManagementFleet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FleetAppsManagementFleet to import
  * @param importFromId The id of the existing FleetAppsManagementFleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FleetAppsManagementFleet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_apps_management_fleet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet oci_fleet_apps_management_fleet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FleetAppsManagementFleetConfig
  */
  public constructor(scope: Construct, id: string, config: FleetAppsManagementFleetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_fleet',
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
    this._applicationType = config.applicationType;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._environmentType = config.environmentType;
    this._fleetType = config.fleetType;
    this._freeformTags = config.freeformTags;
    this._groupType = config.groupType;
    this._id = config.id;
    this._isTargetAutoConfirm = config.isTargetAutoConfirm;
    this._products = config.products;
    this._resourceSelectionType = config.resourceSelectionType;
    this._notificationPreferences.internalValue = config.notificationPreferences;
    this._ruleSelectionCriteria.internalValue = config.ruleSelectionCriteria;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_type - computed: true, optional: true, required: false
  private _applicationType?: string; 
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }
  public set applicationType(value: string) {
    this._applicationType = value;
  }
  public resetApplicationType() {
    this._applicationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTypeInput() {
    return this._applicationType;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // environment_type - computed: true, optional: true, required: false
  private _environmentType?: string; 
  public get environmentType() {
    return this.getStringAttribute('environment_type');
  }
  public set environmentType(value: string) {
    this._environmentType = value;
  }
  public resetEnvironmentType() {
    this._environmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentTypeInput() {
    return this._environmentType;
  }

  // fleet_type - computed: false, optional: false, required: true
  private _fleetType?: string; 
  public get fleetType() {
    return this.getStringAttribute('fleet_type');
  }
  public set fleetType(value: string) {
    this._fleetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetTypeInput() {
    return this._fleetType;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // group_type - computed: true, optional: true, required: false
  private _groupType?: string; 
  public get groupType() {
    return this.getStringAttribute('group_type');
  }
  public set groupType(value: string) {
    this._groupType = value;
  }
  public resetGroupType() {
    this._groupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTypeInput() {
    return this._groupType;
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

  // is_target_auto_confirm - computed: true, optional: true, required: false
  private _isTargetAutoConfirm?: boolean | cdktf.IResolvable; 
  public get isTargetAutoConfirm() {
    return this.getBooleanAttribute('is_target_auto_confirm');
  }
  public set isTargetAutoConfirm(value: boolean | cdktf.IResolvable) {
    this._isTargetAutoConfirm = value;
  }
  public resetIsTargetAutoConfirm() {
    this._isTargetAutoConfirm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTargetAutoConfirmInput() {
    return this._isTargetAutoConfirm;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // products - computed: true, optional: true, required: false
  private _products?: string[]; 
  public get products() {
    return this.getListAttribute('products');
  }
  public set products(value: string[]) {
    this._products = value;
  }
  public resetProducts() {
    this._products = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsInput() {
    return this._products;
  }

  // resource_region - computed: true, optional: false, required: false
  public get resourceRegion() {
    return this.getStringAttribute('resource_region');
  }

  // resource_selection_type - computed: true, optional: true, required: false
  private _resourceSelectionType?: string; 
  public get resourceSelectionType() {
    return this.getStringAttribute('resource_selection_type');
  }
  public set resourceSelectionType(value: string) {
    this._resourceSelectionType = value;
  }
  public resetResourceSelectionType() {
    this._resourceSelectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSelectionTypeInput() {
    return this._resourceSelectionType;
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

  // notification_preferences - computed: false, optional: true, required: false
  private _notificationPreferences = new FleetAppsManagementFleetNotificationPreferencesOutputReference(this, "notification_preferences");
  public get notificationPreferences() {
    return this._notificationPreferences;
  }
  public putNotificationPreferences(value: FleetAppsManagementFleetNotificationPreferences) {
    this._notificationPreferences.internalValue = value;
  }
  public resetNotificationPreferences() {
    this._notificationPreferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPreferencesInput() {
    return this._notificationPreferences.internalValue;
  }

  // rule_selection_criteria - computed: false, optional: true, required: false
  private _ruleSelectionCriteria = new FleetAppsManagementFleetRuleSelectionCriteriaOutputReference(this, "rule_selection_criteria");
  public get ruleSelectionCriteria() {
    return this._ruleSelectionCriteria;
  }
  public putRuleSelectionCriteria(value: FleetAppsManagementFleetRuleSelectionCriteria) {
    this._ruleSelectionCriteria.internalValue = value;
  }
  public resetRuleSelectionCriteria() {
    this._ruleSelectionCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSelectionCriteriaInput() {
    return this._ruleSelectionCriteria.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FleetAppsManagementFleetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FleetAppsManagementFleetTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_type: cdktf.stringToTerraform(this._applicationType),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      environment_type: cdktf.stringToTerraform(this._environmentType),
      fleet_type: cdktf.stringToTerraform(this._fleetType),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      group_type: cdktf.stringToTerraform(this._groupType),
      id: cdktf.stringToTerraform(this._id),
      is_target_auto_confirm: cdktf.booleanToTerraform(this._isTargetAutoConfirm),
      products: cdktf.listMapper(cdktf.stringToTerraform, false)(this._products),
      resource_selection_type: cdktf.stringToTerraform(this._resourceSelectionType),
      notification_preferences: fleetAppsManagementFleetNotificationPreferencesToTerraform(this._notificationPreferences.internalValue),
      rule_selection_criteria: fleetAppsManagementFleetRuleSelectionCriteriaToTerraform(this._ruleSelectionCriteria.internalValue),
      timeouts: fleetAppsManagementFleetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_type: {
        value: cdktf.stringToHclTerraform(this._applicationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_type: {
        value: cdktf.stringToHclTerraform(this._environmentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fleet_type: {
        value: cdktf.stringToHclTerraform(this._fleetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      group_type: {
        value: cdktf.stringToHclTerraform(this._groupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_target_auto_confirm: {
        value: cdktf.booleanToHclTerraform(this._isTargetAutoConfirm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      products: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._products),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resource_selection_type: {
        value: cdktf.stringToHclTerraform(this._resourceSelectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_preferences: {
        value: fleetAppsManagementFleetNotificationPreferencesToHclTerraform(this._notificationPreferences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetAppsManagementFleetNotificationPreferencesList",
      },
      rule_selection_criteria: {
        value: fleetAppsManagementFleetRuleSelectionCriteriaToHclTerraform(this._ruleSelectionCriteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetAppsManagementFleetRuleSelectionCriteriaList",
      },
      timeouts: {
        value: fleetAppsManagementFleetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FleetAppsManagementFleetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
