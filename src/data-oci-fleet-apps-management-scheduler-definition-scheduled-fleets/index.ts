// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#compartment_id DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#display_name DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#id DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#scheduler_definition_id DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#scheduler_definition_id}
  */
  readonly schedulerDefinitionId: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#filter DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#filter}
  */
  readonly filter?: DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter[] | cdktf.IResolvable;
}
export interface DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems {
}

export function dataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsToTerraform(struct?: DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_group_types - computed: true, optional: false, required: false
  public get actionGroupTypes() {
    return this.getListAttribute('action_group_types');
  }

  // application_types - computed: true, optional: false, required: false
  public get applicationTypes() {
    return this.getListAttribute('application_types');
  }

  // count_of_affected_resources - computed: true, optional: false, required: false
  public get countOfAffectedResources() {
    return this.getNumberAttribute('count_of_affected_resources');
  }

  // count_of_affected_targets - computed: true, optional: false, required: false
  public get countOfAffectedTargets() {
    return this.getNumberAttribute('count_of_affected_targets');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // tenancy_id - computed: true, optional: false, required: false
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }
}

export class DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference {
    return new DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection {
}

export function dataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionToTerraform(struct?: DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference {
    return new DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#name DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#regex DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#values DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#values}
  */
  readonly values: string[];
}

export function dataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterToTerraform(struct?: DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter | cdktf.IResolvable): any {
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

export class DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference {
    return new DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets oci_fleet_apps_management_scheduler_definition_scheduled_fleets}
*/
export class DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_scheduler_definition_scheduled_fleets";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets oci_fleet_apps_management_scheduler_definition_scheduled_fleets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_scheduler_definition_scheduled_fleets',
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
    this._id = config.id;
    this._schedulerDefinitionId = config.schedulerDefinitionId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
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

  // scheduled_fleet_collection - computed: true, optional: false, required: false
  private _scheduledFleetCollection = new DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList(this, "scheduled_fleet_collection", false);
  public get scheduledFleetCollection() {
    return this._scheduledFleetCollection;
  }

  // scheduler_definition_id - computed: false, optional: false, required: true
  private _schedulerDefinitionId?: string; 
  public get schedulerDefinitionId() {
    return this.getStringAttribute('scheduler_definition_id');
  }
  public set schedulerDefinitionId(value: string) {
    this._schedulerDefinitionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerDefinitionIdInput() {
    return this._schedulerDefinitionId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      scheduler_definition_id: cdktf.stringToTerraform(this._schedulerDefinitionId),
      filter: cdktf.listMapper(dataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterToTerraform, true)(this._filter.internalValue),
    };
  }
}
