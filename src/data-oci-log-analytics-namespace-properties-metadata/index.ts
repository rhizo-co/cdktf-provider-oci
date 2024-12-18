// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciLogAnalyticsNamespacePropertiesMetadataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#constraints DataOciLogAnalyticsNamespacePropertiesMetadata#constraints}
  */
  readonly constraints?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#display_text DataOciLogAnalyticsNamespacePropertiesMetadata#display_text}
  */
  readonly displayText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#id DataOciLogAnalyticsNamespacePropertiesMetadata#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#level DataOciLogAnalyticsNamespacePropertiesMetadata#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#name DataOciLogAnalyticsNamespacePropertiesMetadata#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#namespace DataOciLogAnalyticsNamespacePropertiesMetadata#namespace}
  */
  readonly namespace: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#filter DataOciLogAnalyticsNamespacePropertiesMetadata#filter}
  */
  readonly filter?: DataOciLogAnalyticsNamespacePropertiesMetadataFilter[] | cdktf.IResolvable;
}
export interface DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels {
}

export function dataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsToTerraform(struct?: DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsToHclTerraform(struct?: DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // constraints - computed: true, optional: false, required: false
  public get constraints() {
    return this.getStringAttribute('constraints');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference {
    return new DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems {
}

export function dataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsToTerraform(struct?: DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsToHclTerraform(struct?: DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // levels - computed: true, optional: false, required: false
  private _levels = new DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList(this, "levels", false);
  public get levels() {
    return this._levels;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference {
    return new DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection {
}

export function dataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionToTerraform(struct?: DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionToHclTerraform(struct?: DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference {
    return new DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLogAnalyticsNamespacePropertiesMetadataFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#name DataOciLogAnalyticsNamespacePropertiesMetadata#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#regex DataOciLogAnalyticsNamespacePropertiesMetadata#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#values DataOciLogAnalyticsNamespacePropertiesMetadata#values}
  */
  readonly values: string[];
}

export function dataOciLogAnalyticsNamespacePropertiesMetadataFilterToTerraform(struct?: DataOciLogAnalyticsNamespacePropertiesMetadataFilter | cdktf.IResolvable): any {
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


export function dataOciLogAnalyticsNamespacePropertiesMetadataFilterToHclTerraform(struct?: DataOciLogAnalyticsNamespacePropertiesMetadataFilter | cdktf.IResolvable): any {
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

export class DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLogAnalyticsNamespacePropertiesMetadataFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciLogAnalyticsNamespacePropertiesMetadataFilter | cdktf.IResolvable | undefined) {
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

export class DataOciLogAnalyticsNamespacePropertiesMetadataFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciLogAnalyticsNamespacePropertiesMetadataFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference {
    return new DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata oci_log_analytics_namespace_properties_metadata}
*/
export class DataOciLogAnalyticsNamespacePropertiesMetadata extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_log_analytics_namespace_properties_metadata";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciLogAnalyticsNamespacePropertiesMetadata resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciLogAnalyticsNamespacePropertiesMetadata to import
  * @param importFromId The id of the existing DataOciLogAnalyticsNamespacePropertiesMetadata that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciLogAnalyticsNamespacePropertiesMetadata to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_log_analytics_namespace_properties_metadata", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata oci_log_analytics_namespace_properties_metadata} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciLogAnalyticsNamespacePropertiesMetadataConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciLogAnalyticsNamespacePropertiesMetadataConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_log_analytics_namespace_properties_metadata',
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
    this._constraints = config.constraints;
    this._displayText = config.displayText;
    this._id = config.id;
    this._level = config.level;
    this._name = config.name;
    this._namespace = config.namespace;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // constraints - computed: false, optional: true, required: false
  private _constraints?: string; 
  public get constraints() {
    return this.getStringAttribute('constraints');
  }
  public set constraints(value: string) {
    this._constraints = value;
  }
  public resetConstraints() {
    this._constraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints;
  }

  // display_text - computed: false, optional: true, required: false
  private _displayText?: string; 
  public get displayText() {
    return this.getStringAttribute('display_text');
  }
  public set displayText(value: string) {
    this._displayText = value;
  }
  public resetDisplayText() {
    this._displayText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayTextInput() {
    return this._displayText;
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

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // property_metadata_summary_collection - computed: true, optional: false, required: false
  private _propertyMetadataSummaryCollection = new DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList(this, "property_metadata_summary_collection", false);
  public get propertyMetadataSummaryCollection() {
    return this._propertyMetadataSummaryCollection;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciLogAnalyticsNamespacePropertiesMetadataFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciLogAnalyticsNamespacePropertiesMetadataFilter[] | cdktf.IResolvable) {
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
      constraints: cdktf.stringToTerraform(this._constraints),
      display_text: cdktf.stringToTerraform(this._displayText),
      id: cdktf.stringToTerraform(this._id),
      level: cdktf.stringToTerraform(this._level),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      filter: cdktf.listMapper(dataOciLogAnalyticsNamespacePropertiesMetadataFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      constraints: {
        value: cdktf.stringToHclTerraform(this._constraints),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_text: {
        value: cdktf.stringToHclTerraform(this._displayText),
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
      level: {
        value: cdktf.stringToHclTerraform(this._level),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciLogAnalyticsNamespacePropertiesMetadataFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciLogAnalyticsNamespacePropertiesMetadataFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
