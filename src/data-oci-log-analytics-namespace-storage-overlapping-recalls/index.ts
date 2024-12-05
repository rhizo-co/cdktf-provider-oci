// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#id DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#namespace DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#time_data_ended DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#time_data_ended}
  */
  readonly timeDataEnded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#time_data_started DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#time_data_started}
  */
  readonly timeDataStarted?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#filter DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#filter}
  */
  readonly filter?: DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter[] | cdktf.IResolvable;
}
export interface DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems {
}

export function dataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsToTerraform(struct?: DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // collection_id - computed: true, optional: false, required: false
  public get collectionId() {
    return this.getStringAttribute('collection_id');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // log_sets - computed: true, optional: false, required: false
  public get logSets() {
    return this.getStringAttribute('log_sets');
  }

  // purpose - computed: true, optional: false, required: false
  public get purpose() {
    return this.getStringAttribute('purpose');
  }

  // query_string - computed: true, optional: false, required: false
  public get queryString() {
    return this.getStringAttribute('query_string');
  }

  // recall_id - computed: true, optional: false, required: false
  public get recallId() {
    return this.getStringAttribute('recall_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_data_ended - computed: true, optional: false, required: false
  public get timeDataEnded() {
    return this.getStringAttribute('time_data_ended');
  }

  // time_data_started - computed: true, optional: false, required: false
  public get timeDataStarted() {
    return this.getStringAttribute('time_data_started');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }
}

export class DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference {
    return new DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection {
}

export function dataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionToTerraform(struct?: DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference {
    return new DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#name DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#regex DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#values DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#values}
  */
  readonly values: string[];
}

export function dataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterToTerraform(struct?: DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter | cdktf.IResolvable): any {
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

export class DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference {
    return new DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls oci_log_analytics_namespace_storage_overlapping_recalls}
*/
export class DataOciLogAnalyticsNamespaceStorageOverlappingRecalls extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_log_analytics_namespace_storage_overlapping_recalls";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls oci_log_analytics_namespace_storage_overlapping_recalls} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_log_analytics_namespace_storage_overlapping_recalls',
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
    this._id = config.id;
    this._namespace = config.namespace;
    this._timeDataEnded = config.timeDataEnded;
    this._timeDataStarted = config.timeDataStarted;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // overlapping_recall_collection - computed: true, optional: false, required: false
  private _overlappingRecallCollection = new DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList(this, "overlapping_recall_collection", false);
  public get overlappingRecallCollection() {
    return this._overlappingRecallCollection;
  }

  // time_data_ended - computed: false, optional: true, required: false
  private _timeDataEnded?: string; 
  public get timeDataEnded() {
    return this.getStringAttribute('time_data_ended');
  }
  public set timeDataEnded(value: string) {
    this._timeDataEnded = value;
  }
  public resetTimeDataEnded() {
    this._timeDataEnded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeDataEndedInput() {
    return this._timeDataEnded;
  }

  // time_data_started - computed: false, optional: true, required: false
  private _timeDataStarted?: string; 
  public get timeDataStarted() {
    return this.getStringAttribute('time_data_started');
  }
  public set timeDataStarted(value: string) {
    this._timeDataStarted = value;
  }
  public resetTimeDataStarted() {
    this._timeDataStarted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeDataStartedInput() {
    return this._timeDataStarted;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      time_data_ended: cdktf.stringToTerraform(this._timeDataEnded),
      time_data_started: cdktf.stringToTerraform(this._timeDataStarted),
      filter: cdktf.listMapper(dataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterToTerraform, true)(this._filter.internalValue),
    };
  }
}
