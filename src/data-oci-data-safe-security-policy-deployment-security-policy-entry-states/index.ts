// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#deployment_status DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#deployment_status}
  */
  readonly deploymentStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#security_policy_deployment_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#security_policy_deployment_id}
  */
  readonly securityPolicyDeploymentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#security_policy_entry_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#security_policy_entry_id}
  */
  readonly securityPolicyEntryId?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#filter DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#filter}
  */
  readonly filter?: DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter[] | cdktf.IResolvable;
}
export interface DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails {
}

export function dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsToTerraform(struct?: DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entry_type - computed: true, optional: false, required: false
  public get entryType() {
    return this.getStringAttribute('entry_type');
  }

  // time_generated - computed: true, optional: false, required: false
  public get timeGenerated() {
    return this.getStringAttribute('time_generated');
  }

  // time_status_updated - computed: true, optional: false, required: false
  public get timeStatusUpdated() {
    return this.getStringAttribute('time_status_updated');
  }
}

export class DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference {
    return new DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems {
}

export function dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsToTerraform(struct?: DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployment_status - computed: true, optional: false, required: false
  public get deploymentStatus() {
    return this.getStringAttribute('deployment_status');
  }

  // entry_details - computed: true, optional: false, required: false
  private _entryDetails = new DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList(this, "entry_details", false);
  public get entryDetails() {
    return this._entryDetails;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // security_policy_deployment_id - computed: true, optional: false, required: false
  public get securityPolicyDeploymentId() {
    return this.getStringAttribute('security_policy_deployment_id');
  }

  // security_policy_entry_id - computed: true, optional: false, required: false
  public get securityPolicyEntryId() {
    return this.getStringAttribute('security_policy_entry_id');
  }
}

export class DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference {
    return new DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection {
}

export function dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionToTerraform(struct?: DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference {
    return new DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#name DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#regex DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#values DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#values}
  */
  readonly values: string[];
}

export function dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterToTerraform(struct?: DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter | cdktf.IResolvable): any {
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

export class DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference {
    return new DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states oci_data_safe_security_policy_deployment_security_policy_entry_states}
*/
export class DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_security_policy_deployment_security_policy_entry_states";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states oci_data_safe_security_policy_deployment_security_policy_entry_states} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_security_policy_deployment_security_policy_entry_states',
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
    this._deploymentStatus = config.deploymentStatus;
    this._id = config.id;
    this._securityPolicyDeploymentId = config.securityPolicyDeploymentId;
    this._securityPolicyEntryId = config.securityPolicyEntryId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployment_status - computed: false, optional: true, required: false
  private _deploymentStatus?: string; 
  public get deploymentStatus() {
    return this.getStringAttribute('deployment_status');
  }
  public set deploymentStatus(value: string) {
    this._deploymentStatus = value;
  }
  public resetDeploymentStatus() {
    this._deploymentStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentStatusInput() {
    return this._deploymentStatus;
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

  // security_policy_deployment_id - computed: false, optional: false, required: true
  private _securityPolicyDeploymentId?: string; 
  public get securityPolicyDeploymentId() {
    return this.getStringAttribute('security_policy_deployment_id');
  }
  public set securityPolicyDeploymentId(value: string) {
    this._securityPolicyDeploymentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyDeploymentIdInput() {
    return this._securityPolicyDeploymentId;
  }

  // security_policy_entry_id - computed: false, optional: true, required: false
  private _securityPolicyEntryId?: string; 
  public get securityPolicyEntryId() {
    return this.getStringAttribute('security_policy_entry_id');
  }
  public set securityPolicyEntryId(value: string) {
    this._securityPolicyEntryId = value;
  }
  public resetSecurityPolicyEntryId() {
    this._securityPolicyEntryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyEntryIdInput() {
    return this._securityPolicyEntryId;
  }

  // security_policy_entry_state_collection - computed: true, optional: false, required: false
  private _securityPolicyEntryStateCollection = new DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList(this, "security_policy_entry_state_collection", false);
  public get securityPolicyEntryStateCollection() {
    return this._securityPolicyEntryStateCollection;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter[] | cdktf.IResolvable) {
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
      deployment_status: cdktf.stringToTerraform(this._deploymentStatus),
      id: cdktf.stringToTerraform(this._id),
      security_policy_deployment_id: cdktf.stringToTerraform(this._securityPolicyDeploymentId),
      security_policy_entry_id: cdktf.stringToTerraform(this._securityPolicyEntryId),
      filter: cdktf.listMapper(dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterToTerraform, true)(this._filter.internalValue),
    };
  }
}
