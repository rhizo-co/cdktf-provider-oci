// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOnesubscriptionComputedUsagesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#compartment_id DataOciOnesubscriptionComputedUsages#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#computed_product DataOciOnesubscriptionComputedUsages#computed_product}
  */
  readonly computedProduct?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#id DataOciOnesubscriptionComputedUsages#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#parent_product DataOciOnesubscriptionComputedUsages#parent_product}
  */
  readonly parentProduct?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#subscription_id DataOciOnesubscriptionComputedUsages#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#time_from DataOciOnesubscriptionComputedUsages#time_from}
  */
  readonly timeFrom: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#time_to DataOciOnesubscriptionComputedUsages#time_to}
  */
  readonly timeTo: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#filter DataOciOnesubscriptionComputedUsages#filter}
  */
  readonly filter?: DataOciOnesubscriptionComputedUsagesFilter[] | cdktf.IResolvable;
}
export interface DataOciOnesubscriptionComputedUsagesComputedUsagesParentProduct {
}

export function dataOciOnesubscriptionComputedUsagesComputedUsagesParentProductToTerraform(struct?: DataOciOnesubscriptionComputedUsagesComputedUsagesParentProduct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionComputedUsagesComputedUsagesParentProduct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionComputedUsagesComputedUsagesParentProduct | undefined) {
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

  // provisioning_group - computed: true, optional: false, required: false
  public get provisioningGroup() {
    return this.getStringAttribute('provisioning_group');
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

export class DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference {
    return new DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionComputedUsagesComputedUsagesProduct {
}

export function dataOciOnesubscriptionComputedUsagesComputedUsagesProductToTerraform(struct?: DataOciOnesubscriptionComputedUsagesComputedUsagesProduct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionComputedUsagesComputedUsagesProduct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionComputedUsagesComputedUsagesProduct | undefined) {
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

  // provisioning_group - computed: true, optional: false, required: false
  public get provisioningGroup() {
    return this.getStringAttribute('provisioning_group');
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

export class DataOciOnesubscriptionComputedUsagesComputedUsagesProductList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference {
    return new DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionComputedUsagesComputedUsages {
}

export function dataOciOnesubscriptionComputedUsagesComputedUsagesToTerraform(struct?: DataOciOnesubscriptionComputedUsagesComputedUsages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionComputedUsagesComputedUsages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionComputedUsagesComputedUsages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // commitment_service_id - computed: true, optional: false, required: false
  public get commitmentServiceId() {
    return this.getStringAttribute('commitment_service_id');
  }

  // compute_source - computed: true, optional: false, required: false
  public get computeSource() {
    return this.getStringAttribute('compute_source');
  }

  // computed_usage_id - computed: true, optional: false, required: false
  public get computedUsageId() {
    return this.getStringAttribute('computed_usage_id');
  }

  // cost - computed: true, optional: false, required: false
  public get cost() {
    return this.getStringAttribute('cost');
  }

  // cost_rounded - computed: true, optional: false, required: false
  public get costRounded() {
    return this.getStringAttribute('cost_rounded');
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // data_center - computed: true, optional: false, required: false
  public get dataCenter() {
    return this.getStringAttribute('data_center');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_invoiced - computed: true, optional: false, required: false
  public get isInvoiced() {
    return this.getBooleanAttribute('is_invoiced');
  }

  // mqs_message_id - computed: true, optional: false, required: false
  public get mqsMessageId() {
    return this.getStringAttribute('mqs_message_id');
  }

  // net_unit_price - computed: true, optional: false, required: false
  public get netUnitPrice() {
    return this.getStringAttribute('net_unit_price');
  }

  // original_usage_number - computed: true, optional: false, required: false
  public get originalUsageNumber() {
    return this.getStringAttribute('original_usage_number');
  }

  // parent_product - computed: true, optional: false, required: false
  private _parentProduct = new DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList(this, "parent_product", false);
  public get parentProduct() {
    return this._parentProduct;
  }

  // parent_subscribed_service_id - computed: true, optional: false, required: false
  public get parentSubscribedServiceId() {
    return this.getStringAttribute('parent_subscribed_service_id');
  }

  // plan_number - computed: true, optional: false, required: false
  public get planNumber() {
    return this.getStringAttribute('plan_number');
  }

  // product - computed: true, optional: false, required: false
  private _product = new DataOciOnesubscriptionComputedUsagesComputedUsagesProductList(this, "product", false);
  public get product() {
    return this._product;
  }

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getStringAttribute('quantity');
  }

  // rate_card_id - computed: true, optional: false, required: false
  public get rateCardId() {
    return this.getStringAttribute('rate_card_id');
  }

  // rate_card_tierd_id - computed: true, optional: false, required: false
  public get rateCardTierdId() {
    return this.getStringAttribute('rate_card_tierd_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_metered_on - computed: true, optional: false, required: false
  public get timeMeteredOn() {
    return this.getStringAttribute('time_metered_on');
  }

  // time_of_arrival - computed: true, optional: false, required: false
  public get timeOfArrival() {
    return this.getStringAttribute('time_of_arrival');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unit_of_measure - computed: true, optional: false, required: false
  public get unitOfMeasure() {
    return this.getStringAttribute('unit_of_measure');
  }

  // usage_number - computed: true, optional: false, required: false
  public get usageNumber() {
    return this.getStringAttribute('usage_number');
  }
}

export class DataOciOnesubscriptionComputedUsagesComputedUsagesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference {
    return new DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionComputedUsagesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#name DataOciOnesubscriptionComputedUsages#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#regex DataOciOnesubscriptionComputedUsages#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#values DataOciOnesubscriptionComputedUsages#values}
  */
  readonly values: string[];
}

export function dataOciOnesubscriptionComputedUsagesFilterToTerraform(struct?: DataOciOnesubscriptionComputedUsagesFilter | cdktf.IResolvable): any {
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

export class DataOciOnesubscriptionComputedUsagesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionComputedUsagesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciOnesubscriptionComputedUsagesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciOnesubscriptionComputedUsagesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciOnesubscriptionComputedUsagesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciOnesubscriptionComputedUsagesFilterOutputReference {
    return new DataOciOnesubscriptionComputedUsagesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages oci_onesubscription_computed_usages}
*/
export class DataOciOnesubscriptionComputedUsages extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_onesubscription_computed_usages";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages oci_onesubscription_computed_usages} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOnesubscriptionComputedUsagesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOnesubscriptionComputedUsagesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_onesubscription_computed_usages',
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
    this._computedProduct = config.computedProduct;
    this._id = config.id;
    this._parentProduct = config.parentProduct;
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

  // computed_product - computed: false, optional: true, required: false
  private _computedProduct?: string; 
  public get computedProduct() {
    return this.getStringAttribute('computed_product');
  }
  public set computedProduct(value: string) {
    this._computedProduct = value;
  }
  public resetComputedProduct() {
    this._computedProduct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computedProductInput() {
    return this._computedProduct;
  }

  // computed_usages - computed: true, optional: false, required: false
  private _computedUsages = new DataOciOnesubscriptionComputedUsagesComputedUsagesList(this, "computed_usages", false);
  public get computedUsages() {
    return this._computedUsages;
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

  // parent_product - computed: false, optional: true, required: false
  private _parentProduct?: string; 
  public get parentProduct() {
    return this.getStringAttribute('parent_product');
  }
  public set parentProduct(value: string) {
    this._parentProduct = value;
  }
  public resetParentProduct() {
    this._parentProduct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentProductInput() {
    return this._parentProduct;
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

  // time_from - computed: false, optional: false, required: true
  private _timeFrom?: string; 
  public get timeFrom() {
    return this.getStringAttribute('time_from');
  }
  public set timeFrom(value: string) {
    this._timeFrom = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFromInput() {
    return this._timeFrom;
  }

  // time_to - computed: false, optional: false, required: true
  private _timeTo?: string; 
  public get timeTo() {
    return this.getStringAttribute('time_to');
  }
  public set timeTo(value: string) {
    this._timeTo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToInput() {
    return this._timeTo;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciOnesubscriptionComputedUsagesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciOnesubscriptionComputedUsagesFilter[] | cdktf.IResolvable) {
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
      computed_product: cdktf.stringToTerraform(this._computedProduct),
      id: cdktf.stringToTerraform(this._id),
      parent_product: cdktf.stringToTerraform(this._parentProduct),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      time_from: cdktf.stringToTerraform(this._timeFrom),
      time_to: cdktf.stringToTerraform(this._timeTo),
      filter: cdktf.listMapper(dataOciOnesubscriptionComputedUsagesFilterToTerraform, true)(this._filter.internalValue),
    };
  }
}