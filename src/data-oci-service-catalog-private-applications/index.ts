// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciServiceCatalogPrivateApplicationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#compartment_id DataOciServiceCatalogPrivateApplications#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#display_name DataOciServiceCatalogPrivateApplications#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#id DataOciServiceCatalogPrivateApplications#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#private_application_id DataOciServiceCatalogPrivateApplications#private_application_id}
  */
  readonly privateApplicationId?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#filter DataOciServiceCatalogPrivateApplications#filter}
  */
  readonly filter?: DataOciServiceCatalogPrivateApplicationsFilter[] | cdktf.IResolvable;
}
export interface DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo {
}

export function dataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoToTerraform(struct?: DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoToHclTerraform(struct?: DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_url - computed: true, optional: false, required: false
  public get contentUrl() {
    return this.getStringAttribute('content_url');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // mime_type - computed: true, optional: false, required: false
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }
}

export class DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference {
    return new DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails {
}

export function dataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsToTerraform(struct?: DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsToHclTerraform(struct?: DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // package_type - computed: true, optional: false, required: false
  public get packageType() {
    return this.getStringAttribute('package_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // zip_file_base64encoded - computed: true, optional: false, required: false
  public get zipFileBase64Encoded() {
    return this.getStringAttribute('zip_file_base64encoded');
  }
}

export class DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference {
    return new DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems {
}

export function dataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsToTerraform(struct?: DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsToHclTerraform(struct?: DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems | undefined) {
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

  // logo - computed: true, optional: false, required: false
  private _logo = new DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList(this, "logo", false);
  public get logo() {
    return this._logo;
  }

  // logo_file_base64encoded - computed: true, optional: false, required: false
  public get logoFileBase64Encoded() {
    return this.getStringAttribute('logo_file_base64encoded');
  }

  // long_description - computed: true, optional: false, required: false
  public get longDescription() {
    return this.getStringAttribute('long_description');
  }

  // package_details - computed: true, optional: false, required: false
  private _packageDetails = new DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList(this, "package_details", false);
  public get packageDetails() {
    return this._packageDetails;
  }

  // package_type - computed: true, optional: false, required: false
  public get packageType() {
    return this.getStringAttribute('package_type');
  }

  // short_description - computed: true, optional: false, required: false
  public get shortDescription() {
    return this.getStringAttribute('short_description');
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

export class DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference {
    return new DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection {
}

export function dataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionToTerraform(struct?: DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionToHclTerraform(struct?: DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference {
    return new DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciServiceCatalogPrivateApplicationsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#name DataOciServiceCatalogPrivateApplications#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#regex DataOciServiceCatalogPrivateApplications#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#values DataOciServiceCatalogPrivateApplications#values}
  */
  readonly values: string[];
}

export function dataOciServiceCatalogPrivateApplicationsFilterToTerraform(struct?: DataOciServiceCatalogPrivateApplicationsFilter | cdktf.IResolvable): any {
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


export function dataOciServiceCatalogPrivateApplicationsFilterToHclTerraform(struct?: DataOciServiceCatalogPrivateApplicationsFilter | cdktf.IResolvable): any {
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

export class DataOciServiceCatalogPrivateApplicationsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciServiceCatalogPrivateApplicationsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciServiceCatalogPrivateApplicationsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciServiceCatalogPrivateApplicationsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciServiceCatalogPrivateApplicationsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciServiceCatalogPrivateApplicationsFilterOutputReference {
    return new DataOciServiceCatalogPrivateApplicationsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications oci_service_catalog_private_applications}
*/
export class DataOciServiceCatalogPrivateApplications extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_service_catalog_private_applications";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciServiceCatalogPrivateApplications resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciServiceCatalogPrivateApplications to import
  * @param importFromId The id of the existing DataOciServiceCatalogPrivateApplications that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciServiceCatalogPrivateApplications to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_service_catalog_private_applications", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications oci_service_catalog_private_applications} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciServiceCatalogPrivateApplicationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciServiceCatalogPrivateApplicationsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_service_catalog_private_applications',
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
    this._privateApplicationId = config.privateApplicationId;
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

  // private_application_collection - computed: true, optional: false, required: false
  private _privateApplicationCollection = new DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList(this, "private_application_collection", false);
  public get privateApplicationCollection() {
    return this._privateApplicationCollection;
  }

  // private_application_id - computed: false, optional: true, required: false
  private _privateApplicationId?: string; 
  public get privateApplicationId() {
    return this.getStringAttribute('private_application_id');
  }
  public set privateApplicationId(value: string) {
    this._privateApplicationId = value;
  }
  public resetPrivateApplicationId() {
    this._privateApplicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateApplicationIdInput() {
    return this._privateApplicationId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciServiceCatalogPrivateApplicationsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciServiceCatalogPrivateApplicationsFilter[] | cdktf.IResolvable) {
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
      private_application_id: cdktf.stringToTerraform(this._privateApplicationId),
      filter: cdktf.listMapper(dataOciServiceCatalogPrivateApplicationsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      private_application_id: {
        value: cdktf.stringToHclTerraform(this._privateApplicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciServiceCatalogPrivateApplicationsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciServiceCatalogPrivateApplicationsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
