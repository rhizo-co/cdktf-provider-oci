// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreAppCatalogSubscriptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#compartment_id DataOciCoreAppCatalogSubscriptions#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#id DataOciCoreAppCatalogSubscriptions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#listing_id DataOciCoreAppCatalogSubscriptions#listing_id}
  */
  readonly listingId?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#filter DataOciCoreAppCatalogSubscriptions#filter}
  */
  readonly filter?: DataOciCoreAppCatalogSubscriptionsFilter[] | cdktf.IResolvable;
}
export interface DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptions {
}

export function dataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsToTerraform(struct?: DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptions | undefined) {
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // eula_link - computed: true, optional: false, required: false
  public get eulaLink() {
    return this.getStringAttribute('eula_link');
  }

  // listing_id - computed: true, optional: false, required: false
  public get listingId() {
    return this.getStringAttribute('listing_id');
  }

  // listing_resource_id - computed: true, optional: false, required: false
  public get listingResourceId() {
    return this.getStringAttribute('listing_resource_id');
  }

  // listing_resource_version - computed: true, optional: false, required: false
  public get listingResourceVersion() {
    return this.getStringAttribute('listing_resource_version');
  }

  // oracle_terms_of_use_link - computed: true, optional: false, required: false
  public get oracleTermsOfUseLink() {
    return this.getStringAttribute('oracle_terms_of_use_link');
  }

  // publisher_name - computed: true, optional: false, required: false
  public get publisherName() {
    return this.getStringAttribute('publisher_name');
  }

  // signature - computed: true, optional: false, required: false
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_retrieved - computed: true, optional: false, required: false
  public get timeRetrieved() {
    return this.getStringAttribute('time_retrieved');
  }
}

export class DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference {
    return new DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreAppCatalogSubscriptionsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#name DataOciCoreAppCatalogSubscriptions#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#regex DataOciCoreAppCatalogSubscriptions#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#values DataOciCoreAppCatalogSubscriptions#values}
  */
  readonly values: string[];
}

export function dataOciCoreAppCatalogSubscriptionsFilterToTerraform(struct?: DataOciCoreAppCatalogSubscriptionsFilter | cdktf.IResolvable): any {
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

export class DataOciCoreAppCatalogSubscriptionsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreAppCatalogSubscriptionsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciCoreAppCatalogSubscriptionsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciCoreAppCatalogSubscriptionsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciCoreAppCatalogSubscriptionsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciCoreAppCatalogSubscriptionsFilterOutputReference {
    return new DataOciCoreAppCatalogSubscriptionsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions oci_core_app_catalog_subscriptions}
*/
export class DataOciCoreAppCatalogSubscriptions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_app_catalog_subscriptions";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions oci_core_app_catalog_subscriptions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreAppCatalogSubscriptionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreAppCatalogSubscriptionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_app_catalog_subscriptions',
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
    this._id = config.id;
    this._listingId = config.listingId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_catalog_subscriptions - computed: true, optional: false, required: false
  private _appCatalogSubscriptions = new DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList(this, "app_catalog_subscriptions", false);
  public get appCatalogSubscriptions() {
    return this._appCatalogSubscriptions;
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

  // listing_id - computed: false, optional: true, required: false
  private _listingId?: string; 
  public get listingId() {
    return this.getStringAttribute('listing_id');
  }
  public set listingId(value: string) {
    this._listingId = value;
  }
  public resetListingId() {
    this._listingId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listingIdInput() {
    return this._listingId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciCoreAppCatalogSubscriptionsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciCoreAppCatalogSubscriptionsFilter[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      listing_id: cdktf.stringToTerraform(this._listingId),
      filter: cdktf.listMapper(dataOciCoreAppCatalogSubscriptionsFilterToTerraform, true)(this._filter.internalValue),
    };
  }
}
