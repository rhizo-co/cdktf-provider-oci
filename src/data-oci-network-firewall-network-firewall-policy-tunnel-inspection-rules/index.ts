// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#display_name DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#id DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#network_firewall_policy_id}
  */
  readonly networkFirewallPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#tunnel_inspection_rule_priority_order DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#tunnel_inspection_rule_priority_order}
  */
  readonly tunnelInspectionRulePriorityOrder?: number;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#filter DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#filter}
  */
  readonly filter?: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter[] | cdktf.IResolvable;
}
export interface DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsCondition {
}

export function dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionToTerraform(struct?: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionToHclTerraform(struct?: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_address - computed: true, optional: false, required: false
  public get destinationAddress() {
    return this.getListAttribute('destination_address');
  }

  // source_address - computed: true, optional: false, required: false
  public get sourceAddress() {
    return this.getListAttribute('source_address');
  }
}

export class DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference {
    return new DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPosition {
}

export function dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionToTerraform(struct?: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPosition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionToHclTerraform(struct?: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPosition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPosition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPosition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // after_rule - computed: true, optional: false, required: false
  public get afterRule() {
    return this.getStringAttribute('after_rule');
  }

  // before_rule - computed: true, optional: false, required: false
  public get beforeRule() {
    return this.getStringAttribute('before_rule');
  }
}

export class DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference {
    return new DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfile {
}

export function dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileToTerraform(struct?: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileToHclTerraform(struct?: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // must_return_traffic_to_source - computed: true, optional: false, required: false
  public get mustReturnTrafficToSource() {
    return this.getBooleanAttribute('must_return_traffic_to_source');
  }
}

export class DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference {
    return new DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItems {
}

export function dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsToTerraform(struct?: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsToHclTerraform(struct?: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_firewall_policy_id - computed: true, optional: false, required: false
  public get networkFirewallPolicyId() {
    return this.getStringAttribute('network_firewall_policy_id');
  }

  // parent_resource_id - computed: true, optional: false, required: false
  public get parentResourceId() {
    return this.getStringAttribute('parent_resource_id');
  }

  // position - computed: true, optional: false, required: false
  private _position = new DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList(this, "position", false);
  public get position() {
    return this._position;
  }

  // priority_order - computed: true, optional: false, required: false
  public get priorityOrder() {
    return this.getStringAttribute('priority_order');
  }

  // profile - computed: true, optional: false, required: false
  private _profile = new DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList(this, "profile", false);
  public get profile() {
    return this._profile;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference {
    return new DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollection {
}

export function dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionToTerraform(struct?: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionToHclTerraform(struct?: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference {
    return new DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#name DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#regex DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#values DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#values}
  */
  readonly values: string[];
}

export function dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterToTerraform(struct?: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterToHclTerraform(struct?: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference {
    return new DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules oci_network_firewall_network_firewall_policy_tunnel_inspection_rules}
*/
export class DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_network_firewall_network_firewall_policy_tunnel_inspection_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules to import
  * @param importFromId The id of the existing DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_network_firewall_network_firewall_policy_tunnel_inspection_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules oci_network_firewall_network_firewall_policy_tunnel_inspection_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_network_firewall_network_firewall_policy_tunnel_inspection_rules',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._networkFirewallPolicyId = config.networkFirewallPolicyId;
    this._tunnelInspectionRulePriorityOrder = config.tunnelInspectionRulePriorityOrder;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: true, required: false
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

  // tunnel_inspection_rule_priority_order - computed: false, optional: true, required: false
  private _tunnelInspectionRulePriorityOrder?: number; 
  public get tunnelInspectionRulePriorityOrder() {
    return this.getNumberAttribute('tunnel_inspection_rule_priority_order');
  }
  public set tunnelInspectionRulePriorityOrder(value: number) {
    this._tunnelInspectionRulePriorityOrder = value;
  }
  public resetTunnelInspectionRulePriorityOrder() {
    this._tunnelInspectionRulePriorityOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInspectionRulePriorityOrderInput() {
    return this._tunnelInspectionRulePriorityOrder;
  }

  // tunnel_inspection_rule_summary_collection - computed: true, optional: false, required: false
  private _tunnelInspectionRuleSummaryCollection = new DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList(this, "tunnel_inspection_rule_summary_collection", false);
  public get tunnelInspectionRuleSummaryCollection() {
    return this._tunnelInspectionRuleSummaryCollection;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      network_firewall_policy_id: cdktf.stringToTerraform(this._networkFirewallPolicyId),
      tunnel_inspection_rule_priority_order: cdktf.numberToTerraform(this._tunnelInspectionRulePriorityOrder),
      filter: cdktf.listMapper(dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      network_firewall_policy_id: {
        value: cdktf.stringToHclTerraform(this._networkFirewallPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_inspection_rule_priority_order: {
        value: cdktf.numberToHclTerraform(this._tunnelInspectionRulePriorityOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
