// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeDiscoveryAnalyticsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#compartment_id DataOciDataSafeDiscoveryAnalytics#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#compartment_id_in_subtree DataOciDataSafeDiscoveryAnalytics#compartment_id_in_subtree}
  */
  readonly compartmentIdInSubtree?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#group_by DataOciDataSafeDiscoveryAnalytics#group_by}
  */
  readonly groupBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#id DataOciDataSafeDiscoveryAnalytics#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#is_common DataOciDataSafeDiscoveryAnalytics#is_common}
  */
  readonly isCommon?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#sensitive_data_model_id DataOciDataSafeDiscoveryAnalytics#sensitive_data_model_id}
  */
  readonly sensitiveDataModelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#sensitive_type_id DataOciDataSafeDiscoveryAnalytics#sensitive_type_id}
  */
  readonly sensitiveTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#target_id DataOciDataSafeDiscoveryAnalytics#target_id}
  */
  readonly targetId?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#filter DataOciDataSafeDiscoveryAnalytics#filter}
  */
  readonly filter?: DataOciDataSafeDiscoveryAnalyticsFilter[] | cdktf.IResolvable;
}
export interface DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensions {
}

export function dataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsToTerraform(struct?: DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sensitive_data_model_id - computed: true, optional: false, required: false
  public get sensitiveDataModelId() {
    return this.getStringAttribute('sensitive_data_model_id');
  }

  // sensitive_type_id - computed: true, optional: false, required: false
  public get sensitiveTypeId() {
    return this.getStringAttribute('sensitive_type_id');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
}

export class DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference {
    return new DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItems {
}

export function dataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsToTerraform(struct?: DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
}

export class DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference {
    return new DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollection {
}

export function dataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionToTerraform(struct?: DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference {
    return new DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeDiscoveryAnalyticsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#name DataOciDataSafeDiscoveryAnalytics#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#regex DataOciDataSafeDiscoveryAnalytics#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#values DataOciDataSafeDiscoveryAnalytics#values}
  */
  readonly values: string[];
}

export function dataOciDataSafeDiscoveryAnalyticsFilterToTerraform(struct?: DataOciDataSafeDiscoveryAnalyticsFilter | cdktf.IResolvable): any {
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

export class DataOciDataSafeDiscoveryAnalyticsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeDiscoveryAnalyticsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDataSafeDiscoveryAnalyticsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDataSafeDiscoveryAnalyticsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataSafeDiscoveryAnalyticsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataSafeDiscoveryAnalyticsFilterOutputReference {
    return new DataOciDataSafeDiscoveryAnalyticsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics oci_data_safe_discovery_analytics}
*/
export class DataOciDataSafeDiscoveryAnalytics extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_discovery_analytics";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics oci_data_safe_discovery_analytics} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeDiscoveryAnalyticsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeDiscoveryAnalyticsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_discovery_analytics',
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
    this._compartmentIdInSubtree = config.compartmentIdInSubtree;
    this._groupBy = config.groupBy;
    this._id = config.id;
    this._isCommon = config.isCommon;
    this._sensitiveDataModelId = config.sensitiveDataModelId;
    this._sensitiveTypeId = config.sensitiveTypeId;
    this._targetId = config.targetId;
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

  // compartment_id_in_subtree - computed: false, optional: true, required: false
  private _compartmentIdInSubtree?: boolean | cdktf.IResolvable; 
  public get compartmentIdInSubtree() {
    return this.getBooleanAttribute('compartment_id_in_subtree');
  }
  public set compartmentIdInSubtree(value: boolean | cdktf.IResolvable) {
    this._compartmentIdInSubtree = value;
  }
  public resetCompartmentIdInSubtree() {
    this._compartmentIdInSubtree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInSubtreeInput() {
    return this._compartmentIdInSubtree;
  }

  // discovery_analytics_collection - computed: true, optional: false, required: false
  private _discoveryAnalyticsCollection = new DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList(this, "discovery_analytics_collection", false);
  public get discoveryAnalyticsCollection() {
    return this._discoveryAnalyticsCollection;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string; 
  public get groupBy() {
    return this.getStringAttribute('group_by');
  }
  public set groupBy(value: string) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
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

  // is_common - computed: false, optional: true, required: false
  private _isCommon?: boolean | cdktf.IResolvable; 
  public get isCommon() {
    return this.getBooleanAttribute('is_common');
  }
  public set isCommon(value: boolean | cdktf.IResolvable) {
    this._isCommon = value;
  }
  public resetIsCommon() {
    this._isCommon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCommonInput() {
    return this._isCommon;
  }

  // sensitive_data_model_id - computed: false, optional: true, required: false
  private _sensitiveDataModelId?: string; 
  public get sensitiveDataModelId() {
    return this.getStringAttribute('sensitive_data_model_id');
  }
  public set sensitiveDataModelId(value: string) {
    this._sensitiveDataModelId = value;
  }
  public resetSensitiveDataModelId() {
    this._sensitiveDataModelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataModelIdInput() {
    return this._sensitiveDataModelId;
  }

  // sensitive_type_id - computed: false, optional: true, required: false
  private _sensitiveTypeId?: string; 
  public get sensitiveTypeId() {
    return this.getStringAttribute('sensitive_type_id');
  }
  public set sensitiveTypeId(value: string) {
    this._sensitiveTypeId = value;
  }
  public resetSensitiveTypeId() {
    this._sensitiveTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveTypeIdInput() {
    return this._sensitiveTypeId;
  }

  // target_id - computed: false, optional: true, required: false
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataSafeDiscoveryAnalyticsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataSafeDiscoveryAnalyticsFilter[] | cdktf.IResolvable) {
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
      compartment_id_in_subtree: cdktf.booleanToTerraform(this._compartmentIdInSubtree),
      group_by: cdktf.stringToTerraform(this._groupBy),
      id: cdktf.stringToTerraform(this._id),
      is_common: cdktf.booleanToTerraform(this._isCommon),
      sensitive_data_model_id: cdktf.stringToTerraform(this._sensitiveDataModelId),
      sensitive_type_id: cdktf.stringToTerraform(this._sensitiveTypeId),
      target_id: cdktf.stringToTerraform(this._targetId),
      filter: cdktf.listMapper(dataOciDataSafeDiscoveryAnalyticsFilterToTerraform, true)(this._filter.internalValue),
    };
  }
}
