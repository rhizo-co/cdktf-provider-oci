// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOnesubscriptionRatecardsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#compartment_id DataOciOnesubscriptionRatecards#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#id DataOciOnesubscriptionRatecards#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#part_number DataOciOnesubscriptionRatecards#part_number}
  */
  readonly partNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#subscription_id DataOciOnesubscriptionRatecards#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#time_from DataOciOnesubscriptionRatecards#time_from}
  */
  readonly timeFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#time_to DataOciOnesubscriptionRatecards#time_to}
  */
  readonly timeTo?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#filter DataOciOnesubscriptionRatecards#filter}
  */
  readonly filter?: DataOciOnesubscriptionRatecardsFilter[] | cdktf.IResolvable;
}
export interface DataOciOnesubscriptionRatecardsRateCardsCurrency {
}

export function dataOciOnesubscriptionRatecardsRateCardsCurrencyToTerraform(struct?: DataOciOnesubscriptionRatecardsRateCardsCurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionRatecardsRateCardsCurrencyToHclTerraform(struct?: DataOciOnesubscriptionRatecardsRateCardsCurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionRatecardsRateCardsCurrency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionRatecardsRateCardsCurrency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iso_code - computed: true, optional: false, required: false
  public get isoCode() {
    return this.getStringAttribute('iso_code');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // std_precision - computed: true, optional: false, required: false
  public get stdPrecision() {
    return this.getStringAttribute('std_precision');
  }
}

export class DataOciOnesubscriptionRatecardsRateCardsCurrencyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference {
    return new DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionRatecardsRateCardsProduct {
}

export function dataOciOnesubscriptionRatecardsRateCardsProductToTerraform(struct?: DataOciOnesubscriptionRatecardsRateCardsProduct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionRatecardsRateCardsProductToHclTerraform(struct?: DataOciOnesubscriptionRatecardsRateCardsProduct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionRatecardsRateCardsProductOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionRatecardsRateCardsProduct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionRatecardsRateCardsProduct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // billing_category - computed: true, optional: false, required: false
  public get billingCategory() {
    return this.getStringAttribute('billing_category');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // part_number - computed: true, optional: false, required: false
  public get partNumber() {
    return this.getStringAttribute('part_number');
  }

  // product_category - computed: true, optional: false, required: false
  public get productCategory() {
    return this.getStringAttribute('product_category');
  }

  // ucm_rate_card_part_type - computed: true, optional: false, required: false
  public get ucmRateCardPartType() {
    return this.getStringAttribute('ucm_rate_card_part_type');
  }

  // unit_of_measure - computed: true, optional: false, required: false
  public get unitOfMeasure() {
    return this.getStringAttribute('unit_of_measure');
  }
}

export class DataOciOnesubscriptionRatecardsRateCardsProductList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionRatecardsRateCardsProductOutputReference {
    return new DataOciOnesubscriptionRatecardsRateCardsProductOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionRatecardsRateCardsRateCardTiers {
}

export function dataOciOnesubscriptionRatecardsRateCardsRateCardTiersToTerraform(struct?: DataOciOnesubscriptionRatecardsRateCardsRateCardTiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionRatecardsRateCardsRateCardTiersToHclTerraform(struct?: DataOciOnesubscriptionRatecardsRateCardsRateCardTiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionRatecardsRateCardsRateCardTiers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionRatecardsRateCardsRateCardTiers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // net_unit_price - computed: true, optional: false, required: false
  public get netUnitPrice() {
    return this.getStringAttribute('net_unit_price');
  }

  // overage_price - computed: true, optional: false, required: false
  public get overagePrice() {
    return this.getStringAttribute('overage_price');
  }

  // up_to_quantity - computed: true, optional: false, required: false
  public get upToQuantity() {
    return this.getStringAttribute('up_to_quantity');
  }
}

export class DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference {
    return new DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionRatecardsRateCards {
}

export function dataOciOnesubscriptionRatecardsRateCardsToTerraform(struct?: DataOciOnesubscriptionRatecardsRateCards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionRatecardsRateCardsToHclTerraform(struct?: DataOciOnesubscriptionRatecardsRateCards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionRatecardsRateCardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionRatecardsRateCards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionRatecardsRateCards | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency - computed: true, optional: false, required: false
  private _currency = new DataOciOnesubscriptionRatecardsRateCardsCurrencyList(this, "currency", false);
  public get currency() {
    return this._currency;
  }

  // discretionary_discount_percentage - computed: true, optional: false, required: false
  public get discretionaryDiscountPercentage() {
    return this.getStringAttribute('discretionary_discount_percentage');
  }

  // is_tier - computed: true, optional: false, required: false
  public get isTier() {
    return this.getBooleanAttribute('is_tier');
  }

  // net_unit_price - computed: true, optional: false, required: false
  public get netUnitPrice() {
    return this.getStringAttribute('net_unit_price');
  }

  // overage_price - computed: true, optional: false, required: false
  public get overagePrice() {
    return this.getStringAttribute('overage_price');
  }

  // product - computed: true, optional: false, required: false
  private _product = new DataOciOnesubscriptionRatecardsRateCardsProductList(this, "product", false);
  public get product() {
    return this._product;
  }

  // rate_card_tiers - computed: true, optional: false, required: false
  private _rateCardTiers = new DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList(this, "rate_card_tiers", false);
  public get rateCardTiers() {
    return this._rateCardTiers;
  }

  // subscribed_service_id - computed: true, optional: false, required: false
  public get subscribedServiceId() {
    return this.getStringAttribute('subscribed_service_id');
  }

  // time_end - computed: true, optional: false, required: false
  public get timeEnd() {
    return this.getStringAttribute('time_end');
  }

  // time_start - computed: true, optional: false, required: false
  public get timeStart() {
    return this.getStringAttribute('time_start');
  }
}

export class DataOciOnesubscriptionRatecardsRateCardsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionRatecardsRateCardsOutputReference {
    return new DataOciOnesubscriptionRatecardsRateCardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionRatecardsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#name DataOciOnesubscriptionRatecards#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#regex DataOciOnesubscriptionRatecards#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#values DataOciOnesubscriptionRatecards#values}
  */
  readonly values: string[];
}

export function dataOciOnesubscriptionRatecardsFilterToTerraform(struct?: DataOciOnesubscriptionRatecardsFilter | cdktf.IResolvable): any {
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


export function dataOciOnesubscriptionRatecardsFilterToHclTerraform(struct?: DataOciOnesubscriptionRatecardsFilter | cdktf.IResolvable): any {
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

export class DataOciOnesubscriptionRatecardsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionRatecardsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciOnesubscriptionRatecardsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciOnesubscriptionRatecardsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciOnesubscriptionRatecardsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciOnesubscriptionRatecardsFilterOutputReference {
    return new DataOciOnesubscriptionRatecardsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards oci_onesubscription_ratecards}
*/
export class DataOciOnesubscriptionRatecards extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_onesubscription_ratecards";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOnesubscriptionRatecards resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOnesubscriptionRatecards to import
  * @param importFromId The id of the existing DataOciOnesubscriptionRatecards that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOnesubscriptionRatecards to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_onesubscription_ratecards", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards oci_onesubscription_ratecards} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOnesubscriptionRatecardsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOnesubscriptionRatecardsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_onesubscription_ratecards',
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
    this._partNumber = config.partNumber;
    this._subscriptionId = config.subscriptionId;
    this._timeFrom = config.timeFrom;
    this._timeTo = config.timeTo;
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

  // part_number - computed: false, optional: true, required: false
  private _partNumber?: string; 
  public get partNumber() {
    return this.getStringAttribute('part_number');
  }
  public set partNumber(value: string) {
    this._partNumber = value;
  }
  public resetPartNumber() {
    this._partNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partNumberInput() {
    return this._partNumber;
  }

  // rate_cards - computed: true, optional: false, required: false
  private _rateCards = new DataOciOnesubscriptionRatecardsRateCardsList(this, "rate_cards", false);
  public get rateCards() {
    return this._rateCards;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // time_from - computed: false, optional: true, required: false
  private _timeFrom?: string; 
  public get timeFrom() {
    return this.getStringAttribute('time_from');
  }
  public set timeFrom(value: string) {
    this._timeFrom = value;
  }
  public resetTimeFrom() {
    this._timeFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFromInput() {
    return this._timeFrom;
  }

  // time_to - computed: false, optional: true, required: false
  private _timeTo?: string; 
  public get timeTo() {
    return this.getStringAttribute('time_to');
  }
  public set timeTo(value: string) {
    this._timeTo = value;
  }
  public resetTimeTo() {
    this._timeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToInput() {
    return this._timeTo;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciOnesubscriptionRatecardsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciOnesubscriptionRatecardsFilter[] | cdktf.IResolvable) {
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
      part_number: cdktf.stringToTerraform(this._partNumber),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      time_from: cdktf.stringToTerraform(this._timeFrom),
      time_to: cdktf.stringToTerraform(this._timeTo),
      filter: cdktf.listMapper(dataOciOnesubscriptionRatecardsFilterToTerraform, true)(this._filter.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      part_number: {
        value: cdktf.stringToHclTerraform(this._partNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_from: {
        value: cdktf.stringToHclTerraform(this._timeFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_to: {
        value: cdktf.stringToHclTerraform(this._timeTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciOnesubscriptionRatecardsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciOnesubscriptionRatecardsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
