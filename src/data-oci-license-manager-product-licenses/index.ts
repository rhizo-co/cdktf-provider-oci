// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciLicenseManagerProductLicensesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#compartment_id DataOciLicenseManagerProductLicenses#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#id DataOciLicenseManagerProductLicenses#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#is_compartment_id_in_subtree DataOciLicenseManagerProductLicenses#is_compartment_id_in_subtree}
  */
  readonly isCompartmentIdInSubtree?: boolean | cdktf.IResolvable;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#filter DataOciLicenseManagerProductLicenses#filter}
  */
  readonly filter?: DataOciLicenseManagerProductLicensesFilter[] | cdktf.IResolvable;
}
export interface DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImages {
}

export function dataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesToTerraform(struct?: DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // listing_id - computed: true, optional: false, required: false
  public get listingId() {
    return this.getStringAttribute('listing_id');
  }

  // listing_name - computed: true, optional: false, required: false
  public get listingName() {
    return this.getStringAttribute('listing_name');
  }

  // package_version - computed: true, optional: false, required: false
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }

  // publisher - computed: true, optional: false, required: false
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
}

export class DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference {
    return new DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLicenseManagerProductLicensesProductLicenseCollectionItems {
}

export function dataOciLicenseManagerProductLicensesProductLicenseCollectionItemsToTerraform(struct?: DataOciLicenseManagerProductLicensesProductLicenseCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLicenseManagerProductLicensesProductLicenseCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLicenseManagerProductLicensesProductLicenseCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_license_record_count - computed: true, optional: false, required: false
  public get activeLicenseRecordCount() {
    return this.getNumberAttribute('active_license_record_count');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
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

  // images - computed: true, optional: false, required: false
  private _images = new DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList(this, "images", false);
  public get images() {
    return this._images;
  }

  // is_over_subscribed - computed: true, optional: false, required: false
  public get isOverSubscribed() {
    return this.getBooleanAttribute('is_over_subscribed');
  }

  // is_unlimited - computed: true, optional: false, required: false
  public get isUnlimited() {
    return this.getBooleanAttribute('is_unlimited');
  }

  // is_vendor_oracle - computed: true, optional: false, required: false
  public get isVendorOracle() {
    return this.getBooleanAttribute('is_vendor_oracle');
  }

  // license_unit - computed: true, optional: false, required: false
  public get licenseUnit() {
    return this.getStringAttribute('license_unit');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_description - computed: true, optional: false, required: false
  public get statusDescription() {
    return this.getStringAttribute('status_description');
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

  // total_active_license_unit_count - computed: true, optional: false, required: false
  public get totalActiveLicenseUnitCount() {
    return this.getNumberAttribute('total_active_license_unit_count');
  }

  // total_license_record_count - computed: true, optional: false, required: false
  public get totalLicenseRecordCount() {
    return this.getNumberAttribute('total_license_record_count');
  }

  // total_license_units_consumed - computed: true, optional: false, required: false
  public get totalLicenseUnitsConsumed() {
    return this.getNumberAttribute('total_license_units_consumed');
  }

  // vendor_name - computed: true, optional: false, required: false
  public get vendorName() {
    return this.getStringAttribute('vendor_name');
  }
}

export class DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference {
    return new DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLicenseManagerProductLicensesProductLicenseCollection {
}

export function dataOciLicenseManagerProductLicensesProductLicenseCollectionToTerraform(struct?: DataOciLicenseManagerProductLicensesProductLicenseCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLicenseManagerProductLicensesProductLicenseCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLicenseManagerProductLicensesProductLicenseCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciLicenseManagerProductLicensesProductLicenseCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference {
    return new DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLicenseManagerProductLicensesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#name DataOciLicenseManagerProductLicenses#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#regex DataOciLicenseManagerProductLicenses#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#values DataOciLicenseManagerProductLicenses#values}
  */
  readonly values: string[];
}

export function dataOciLicenseManagerProductLicensesFilterToTerraform(struct?: DataOciLicenseManagerProductLicensesFilter | cdktf.IResolvable): any {
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

export class DataOciLicenseManagerProductLicensesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLicenseManagerProductLicensesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciLicenseManagerProductLicensesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciLicenseManagerProductLicensesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciLicenseManagerProductLicensesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciLicenseManagerProductLicensesFilterOutputReference {
    return new DataOciLicenseManagerProductLicensesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses oci_license_manager_product_licenses}
*/
export class DataOciLicenseManagerProductLicenses extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_license_manager_product_licenses";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses oci_license_manager_product_licenses} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciLicenseManagerProductLicensesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciLicenseManagerProductLicensesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_license_manager_product_licenses',
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
    this._isCompartmentIdInSubtree = config.isCompartmentIdInSubtree;
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

  // product_license_collection - computed: true, optional: false, required: false
  private _productLicenseCollection = new DataOciLicenseManagerProductLicensesProductLicenseCollectionList(this, "product_license_collection", false);
  public get productLicenseCollection() {
    return this._productLicenseCollection;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciLicenseManagerProductLicensesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciLicenseManagerProductLicensesFilter[] | cdktf.IResolvable) {
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
      is_compartment_id_in_subtree: cdktf.booleanToTerraform(this._isCompartmentIdInSubtree),
      filter: cdktf.listMapper(dataOciLicenseManagerProductLicensesFilterToTerraform, true)(this._filter.internalValue),
    };
  }
}