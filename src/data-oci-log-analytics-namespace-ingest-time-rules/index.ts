// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciLogAnalyticsNamespaceIngestTimeRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#compartment_id DataOciLogAnalyticsNamespaceIngestTimeRules#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#condition_kind DataOciLogAnalyticsNamespaceIngestTimeRules#condition_kind}
  */
  readonly conditionKind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#display_name DataOciLogAnalyticsNamespaceIngestTimeRules#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#field_name DataOciLogAnalyticsNamespaceIngestTimeRules#field_name}
  */
  readonly fieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#field_value DataOciLogAnalyticsNamespaceIngestTimeRules#field_value}
  */
  readonly fieldValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#id DataOciLogAnalyticsNamespaceIngestTimeRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#namespace DataOciLogAnalyticsNamespaceIngestTimeRules#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#state DataOciLogAnalyticsNamespaceIngestTimeRules#state}
  */
  readonly state?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#filter DataOciLogAnalyticsNamespaceIngestTimeRules#filter}
  */
  readonly filter?: DataOciLogAnalyticsNamespaceIngestTimeRulesFilter[] | cdktf.IResolvable;
}
export interface DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems {
}

export function dataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsToTerraform(struct?: DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // condition_kind - computed: true, optional: false, required: false
  public get conditionKind() {
    return this.getStringAttribute('condition_kind');
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

  // field_name - computed: true, optional: false, required: false
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }

  // field_value - computed: true, optional: false, required: false
  public get fieldValue() {
    return this.getStringAttribute('field_value');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference {
    return new DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection {
}

export function dataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionToTerraform(struct?: DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference {
    return new DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLogAnalyticsNamespaceIngestTimeRulesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#name DataOciLogAnalyticsNamespaceIngestTimeRules#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#regex DataOciLogAnalyticsNamespaceIngestTimeRules#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#values DataOciLogAnalyticsNamespaceIngestTimeRules#values}
  */
  readonly values: string[];
}

export function dataOciLogAnalyticsNamespaceIngestTimeRulesFilterToTerraform(struct?: DataOciLogAnalyticsNamespaceIngestTimeRulesFilter | cdktf.IResolvable): any {
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

export class DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLogAnalyticsNamespaceIngestTimeRulesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciLogAnalyticsNamespaceIngestTimeRulesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciLogAnalyticsNamespaceIngestTimeRulesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference {
    return new DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules oci_log_analytics_namespace_ingest_time_rules}
*/
export class DataOciLogAnalyticsNamespaceIngestTimeRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_log_analytics_namespace_ingest_time_rules";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules oci_log_analytics_namespace_ingest_time_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciLogAnalyticsNamespaceIngestTimeRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciLogAnalyticsNamespaceIngestTimeRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_log_analytics_namespace_ingest_time_rules',
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
    this._compartmentId = config.compartmentId;
    this._conditionKind = config.conditionKind;
    this._displayName = config.displayName;
    this._fieldName = config.fieldName;
    this._fieldValue = config.fieldValue;
    this._id = config.id;
    this._namespace = config.namespace;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // condition_kind - computed: false, optional: true, required: false
  private _conditionKind?: string; 
  public get conditionKind() {
    return this.getStringAttribute('condition_kind');
  }
  public set conditionKind(value: string) {
    this._conditionKind = value;
  }
  public resetConditionKind() {
    this._conditionKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionKindInput() {
    return this._conditionKind;
  }

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

  // field_name - computed: false, optional: true, required: false
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  public resetFieldName() {
    this._fieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // field_value - computed: false, optional: true, required: false
  private _fieldValue?: string; 
  public get fieldValue() {
    return this.getStringAttribute('field_value');
  }
  public set fieldValue(value: string) {
    this._fieldValue = value;
  }
  public resetFieldValue() {
    this._fieldValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldValueInput() {
    return this._fieldValue;
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

  // ingest_time_rule_summary_collection - computed: true, optional: false, required: false
  private _ingestTimeRuleSummaryCollection = new DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList(this, "ingest_time_rule_summary_collection", false);
  public get ingestTimeRuleSummaryCollection() {
    return this._ingestTimeRuleSummaryCollection;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciLogAnalyticsNamespaceIngestTimeRulesFilter[] | cdktf.IResolvable) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      condition_kind: cdktf.stringToTerraform(this._conditionKind),
      display_name: cdktf.stringToTerraform(this._displayName),
      field_name: cdktf.stringToTerraform(this._fieldName),
      field_value: cdktf.stringToTerraform(this._fieldValue),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciLogAnalyticsNamespaceIngestTimeRulesFilterToTerraform, true)(this._filter.internalValue),
    };
  }
}