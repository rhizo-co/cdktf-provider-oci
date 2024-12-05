// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciApmSyntheticsPublicVantagePointsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#apm_domain_id DataOciApmSyntheticsPublicVantagePoints#apm_domain_id}
  */
  readonly apmDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#display_name DataOciApmSyntheticsPublicVantagePoints#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#id DataOciApmSyntheticsPublicVantagePoints#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#name DataOciApmSyntheticsPublicVantagePoints#name}
  */
  readonly name?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#filter DataOciApmSyntheticsPublicVantagePoints#filter}
  */
  readonly filter?: DataOciApmSyntheticsPublicVantagePointsFilter[] | cdktf.IResolvable;
}
export interface DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo {
}

export function dataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoToTerraform(struct?: DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_div_code - computed: true, optional: false, required: false
  public get adminDivCode() {
    return this.getStringAttribute('admin_div_code');
  }

  // city_name - computed: true, optional: false, required: false
  public get cityName() {
    return this.getStringAttribute('city_name');
  }

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }

  // country_name - computed: true, optional: false, required: false
  public get countryName() {
    return this.getStringAttribute('country_name');
  }

  // latitude - computed: true, optional: false, required: false
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }

  // longitude - computed: true, optional: false, required: false
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }
}

export class DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference {
    return new DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems {
}

export function dataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsToTerraform(struct?: DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // geo - computed: true, optional: false, required: false
  private _geo = new DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList(this, "geo", false);
  public get geo() {
    return this._geo;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference {
    return new DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection {
}

export function dataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionToTerraform(struct?: DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference {
    return new DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsPublicVantagePointsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#name DataOciApmSyntheticsPublicVantagePoints#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#regex DataOciApmSyntheticsPublicVantagePoints#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#values DataOciApmSyntheticsPublicVantagePoints#values}
  */
  readonly values: string[];
}

export function dataOciApmSyntheticsPublicVantagePointsFilterToTerraform(struct?: DataOciApmSyntheticsPublicVantagePointsFilter | cdktf.IResolvable): any {
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

export class DataOciApmSyntheticsPublicVantagePointsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsPublicVantagePointsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciApmSyntheticsPublicVantagePointsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciApmSyntheticsPublicVantagePointsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciApmSyntheticsPublicVantagePointsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciApmSyntheticsPublicVantagePointsFilterOutputReference {
    return new DataOciApmSyntheticsPublicVantagePointsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points oci_apm_synthetics_public_vantage_points}
*/
export class DataOciApmSyntheticsPublicVantagePoints extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_apm_synthetics_public_vantage_points";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points oci_apm_synthetics_public_vantage_points} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciApmSyntheticsPublicVantagePointsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciApmSyntheticsPublicVantagePointsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_apm_synthetics_public_vantage_points',
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
    this._apmDomainId = config.apmDomainId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._name = config.name;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apm_domain_id - computed: false, optional: false, required: true
  private _apmDomainId?: string; 
  public get apmDomainId() {
    return this.getStringAttribute('apm_domain_id');
  }
  public set apmDomainId(value: string) {
    this._apmDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apmDomainIdInput() {
    return this._apmDomainId;
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

  // public_vantage_point_collection - computed: true, optional: false, required: false
  private _publicVantagePointCollection = new DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList(this, "public_vantage_point_collection", false);
  public get publicVantagePointCollection() {
    return this._publicVantagePointCollection;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciApmSyntheticsPublicVantagePointsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciApmSyntheticsPublicVantagePointsFilter[] | cdktf.IResolvable) {
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
      apm_domain_id: cdktf.stringToTerraform(this._apmDomainId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      filter: cdktf.listMapper(dataOciApmSyntheticsPublicVantagePointsFilterToTerraform, true)(this._filter.internalValue),
    };
  }
}
