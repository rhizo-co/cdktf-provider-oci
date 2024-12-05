// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreAppCatalogListingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listings#display_name DataOciCoreAppCatalogListings#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listings#id DataOciCoreAppCatalogListings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listings#publisher_name DataOciCoreAppCatalogListings#publisher_name}
  */
  readonly publisherName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listings#publisher_type DataOciCoreAppCatalogListings#publisher_type}
  */
  readonly publisherType?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listings#filter DataOciCoreAppCatalogListings#filter}
  */
  readonly filter?: DataOciCoreAppCatalogListingsFilter[] | cdktf.IResolvable;
}
export interface DataOciCoreAppCatalogListingsAppCatalogListings {
}

export function dataOciCoreAppCatalogListingsAppCatalogListingsToTerraform(struct?: DataOciCoreAppCatalogListingsAppCatalogListings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciCoreAppCatalogListingsAppCatalogListingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreAppCatalogListingsAppCatalogListings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreAppCatalogListingsAppCatalogListings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // contact_url - computed: true, optional: false, required: false
  public get contactUrl() {
    return this.getStringAttribute('contact_url');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // listing_id - computed: true, optional: false, required: false
  public get listingId() {
    return this.getStringAttribute('listing_id');
  }

  // publisher_logo_url - computed: true, optional: false, required: false
  public get publisherLogoUrl() {
    return this.getStringAttribute('publisher_logo_url');
  }

  // publisher_name - computed: true, optional: false, required: false
  public get publisherName() {
    return this.getStringAttribute('publisher_name');
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // time_published - computed: true, optional: false, required: false
  public get timePublished() {
    return this.getStringAttribute('time_published');
  }
}

export class DataOciCoreAppCatalogListingsAppCatalogListingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreAppCatalogListingsAppCatalogListingsOutputReference {
    return new DataOciCoreAppCatalogListingsAppCatalogListingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreAppCatalogListingsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listings#name DataOciCoreAppCatalogListings#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listings#regex DataOciCoreAppCatalogListings#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listings#values DataOciCoreAppCatalogListings#values}
  */
  readonly values: string[];
}

export function dataOciCoreAppCatalogListingsFilterToTerraform(struct?: DataOciCoreAppCatalogListingsFilter | cdktf.IResolvable): any {
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

export class DataOciCoreAppCatalogListingsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreAppCatalogListingsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciCoreAppCatalogListingsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciCoreAppCatalogListingsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciCoreAppCatalogListingsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciCoreAppCatalogListingsFilterOutputReference {
    return new DataOciCoreAppCatalogListingsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listings oci_core_app_catalog_listings}
*/
export class DataOciCoreAppCatalogListings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_app_catalog_listings";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listings oci_core_app_catalog_listings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreAppCatalogListingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreAppCatalogListingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_core_app_catalog_listings',
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
    this._publisherName = config.publisherName;
    this._publisherType = config.publisherType;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_catalog_listings - computed: true, optional: false, required: false
  private _appCatalogListings = new DataOciCoreAppCatalogListingsAppCatalogListingsList(this, "app_catalog_listings", false);
  public get appCatalogListings() {
    return this._appCatalogListings;
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

  // publisher_name - computed: false, optional: true, required: false
  private _publisherName?: string; 
  public get publisherName() {
    return this.getStringAttribute('publisher_name');
  }
  public set publisherName(value: string) {
    this._publisherName = value;
  }
  public resetPublisherName() {
    this._publisherName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherNameInput() {
    return this._publisherName;
  }

  // publisher_type - computed: false, optional: true, required: false
  private _publisherType?: string; 
  public get publisherType() {
    return this.getStringAttribute('publisher_type');
  }
  public set publisherType(value: string) {
    this._publisherType = value;
  }
  public resetPublisherType() {
    this._publisherType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherTypeInput() {
    return this._publisherType;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciCoreAppCatalogListingsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciCoreAppCatalogListingsFilter[] | cdktf.IResolvable) {
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
      publisher_name: cdktf.stringToTerraform(this._publisherName),
      publisher_type: cdktf.stringToTerraform(this._publisherType),
      filter: cdktf.listMapper(dataOciCoreAppCatalogListingsFilterToTerraform, true)(this._filter.internalValue),
    };
  }
}