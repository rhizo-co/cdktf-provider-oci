// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciLoggingUnifiedAgentConfigurationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#compartment_id DataOciLoggingUnifiedAgentConfigurations#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#display_name DataOciLoggingUnifiedAgentConfigurations#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#group_id DataOciLoggingUnifiedAgentConfigurations#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#id DataOciLoggingUnifiedAgentConfigurations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#is_compartment_id_in_subtree DataOciLoggingUnifiedAgentConfigurations#is_compartment_id_in_subtree}
  */
  readonly isCompartmentIdInSubtree?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#log_id DataOciLoggingUnifiedAgentConfigurations#log_id}
  */
  readonly logId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#state DataOciLoggingUnifiedAgentConfigurations#state}
  */
  readonly state?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#filter DataOciLoggingUnifiedAgentConfigurations#filter}
  */
  readonly filter?: DataOciLoggingUnifiedAgentConfigurationsFilter[] | cdktf.IResolvable;
}
export interface DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems {
}

export function dataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems | undefined) {
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

  // configuration_state - computed: true, optional: false, required: false
  public get configurationState() {
    return this.getStringAttribute('configuration_state');
  }

  // configuration_type - computed: true, optional: false, required: false
  public get configurationType() {
    return this.getStringAttribute('configuration_type');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_modified - computed: true, optional: false, required: false
  public get timeLastModified() {
    return this.getStringAttribute('time_last_modified');
  }
}

export class DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection {
}

export function dataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#name DataOciLoggingUnifiedAgentConfigurations#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#regex DataOciLoggingUnifiedAgentConfigurations#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#values DataOciLoggingUnifiedAgentConfigurations#values}
  */
  readonly values: string[];
}

export function dataOciLoggingUnifiedAgentConfigurationsFilterToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationsFilter | cdktf.IResolvable): any {
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

export class DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciLoggingUnifiedAgentConfigurationsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciLoggingUnifiedAgentConfigurationsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations oci_logging_unified_agent_configurations}
*/
export class DataOciLoggingUnifiedAgentConfigurations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_logging_unified_agent_configurations";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations oci_logging_unified_agent_configurations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciLoggingUnifiedAgentConfigurationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciLoggingUnifiedAgentConfigurationsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_logging_unified_agent_configurations',
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
    this._displayName = config.displayName;
    this._groupId = config.groupId;
    this._id = config.id;
    this._isCompartmentIdInSubtree = config.isCompartmentIdInSubtree;
    this._logId = config.logId;
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

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // is_compartment_id_in_subtree - computed: false, optional: true, required: false
  private _isCompartmentIdInSubtree?: boolean | cdktf.IResolvable; 
  public get isCompartmentIdInSubtree() {
    return this.getBooleanAttribute('is_compartment_id_in_subtree');
  }
  public set isCompartmentIdInSubtree(value: boolean | cdktf.IResolvable) {
    this._isCompartmentIdInSubtree = value;
  }
  public resetIsCompartmentIdInSubtree() {
    this._isCompartmentIdInSubtree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCompartmentIdInSubtreeInput() {
    return this._isCompartmentIdInSubtree;
  }

  // log_id - computed: false, optional: true, required: false
  private _logId?: string; 
  public get logId() {
    return this.getStringAttribute('log_id');
  }
  public set logId(value: string) {
    this._logId = value;
  }
  public resetLogId() {
    this._logId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIdInput() {
    return this._logId;
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

  // unified_agent_configuration_collection - computed: true, optional: false, required: false
  private _unifiedAgentConfigurationCollection = new DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList(this, "unified_agent_configuration_collection", false);
  public get unifiedAgentConfigurationCollection() {
    return this._unifiedAgentConfigurationCollection;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciLoggingUnifiedAgentConfigurationsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciLoggingUnifiedAgentConfigurationsFilter[] | cdktf.IResolvable) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      is_compartment_id_in_subtree: cdktf.booleanToTerraform(this._isCompartmentIdInSubtree),
      log_id: cdktf.stringToTerraform(this._logId),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciLoggingUnifiedAgentConfigurationsFilterToTerraform, true)(this._filter.internalValue),
    };
  }
}