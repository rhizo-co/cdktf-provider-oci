// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOspGatewayInvoicesInvoiceLinesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#compartment_id DataOciOspGatewayInvoicesInvoiceLines#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#id DataOciOspGatewayInvoicesInvoiceLines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#internal_invoice_id DataOciOspGatewayInvoicesInvoiceLines#internal_invoice_id}
  */
  readonly internalInvoiceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#osp_home_region DataOciOspGatewayInvoicesInvoiceLines#osp_home_region}
  */
  readonly ospHomeRegion: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#filter DataOciOspGatewayInvoicesInvoiceLines#filter}
  */
  readonly filter?: DataOciOspGatewayInvoicesInvoiceLinesFilter[] | cdktf.IResolvable;
}
export interface DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrency {
}

export function dataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyToTerraform(struct?: DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // currency_symbol - computed: true, optional: false, required: false
  public get currencySymbol() {
    return this.getStringAttribute('currency_symbol');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // round_decimal_point - computed: true, optional: false, required: false
  public get roundDecimalPoint() {
    return this.getNumberAttribute('round_decimal_point');
  }

  // usd_conversion - computed: true, optional: false, required: false
  public get usdConversion() {
    return this.getNumberAttribute('usd_conversion');
  }
}

export class DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference {
    return new DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItems {
}

export function dataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsToTerraform(struct?: DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency - computed: true, optional: false, required: false
  private _currency = new DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsCurrencyList(this, "currency", false);
  public get currency() {
    return this._currency;
  }

  // net_unit_price - computed: true, optional: false, required: false
  public get netUnitPrice() {
    return this.getNumberAttribute('net_unit_price');
  }

  // order_no - computed: true, optional: false, required: false
  public get orderNo() {
    return this.getStringAttribute('order_no');
  }

  // part_number - computed: true, optional: false, required: false
  public get partNumber() {
    return this.getStringAttribute('part_number');
  }

  // product - computed: true, optional: false, required: false
  public get product() {
    return this.getStringAttribute('product');
  }

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }

  // time_end - computed: true, optional: false, required: false
  public get timeEnd() {
    return this.getStringAttribute('time_end');
  }

  // time_start - computed: true, optional: false, required: false
  public get timeStart() {
    return this.getStringAttribute('time_start');
  }

  // total_price - computed: true, optional: false, required: false
  public get totalPrice() {
    return this.getNumberAttribute('total_price');
  }
}

export class DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference {
    return new DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollection {
}

export function dataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionToTerraform(struct?: DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference {
    return new DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOspGatewayInvoicesInvoiceLinesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#name DataOciOspGatewayInvoicesInvoiceLines#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#regex DataOciOspGatewayInvoicesInvoiceLines#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines#values DataOciOspGatewayInvoicesInvoiceLines#values}
  */
  readonly values: string[];
}

export function dataOciOspGatewayInvoicesInvoiceLinesFilterToTerraform(struct?: DataOciOspGatewayInvoicesInvoiceLinesFilter | cdktf.IResolvable): any {
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

export class DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOspGatewayInvoicesInvoiceLinesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciOspGatewayInvoicesInvoiceLinesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciOspGatewayInvoicesInvoiceLinesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciOspGatewayInvoicesInvoiceLinesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference {
    return new DataOciOspGatewayInvoicesInvoiceLinesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines oci_osp_gateway_invoices_invoice_lines}
*/
export class DataOciOspGatewayInvoicesInvoiceLines extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_osp_gateway_invoices_invoice_lines";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_lines oci_osp_gateway_invoices_invoice_lines} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOspGatewayInvoicesInvoiceLinesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOspGatewayInvoicesInvoiceLinesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_osp_gateway_invoices_invoice_lines',
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
    this._internalInvoiceId = config.internalInvoiceId;
    this._ospHomeRegion = config.ospHomeRegion;
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

  // internal_invoice_id - computed: false, optional: false, required: true
  private _internalInvoiceId?: string; 
  public get internalInvoiceId() {
    return this.getStringAttribute('internal_invoice_id');
  }
  public set internalInvoiceId(value: string) {
    this._internalInvoiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInvoiceIdInput() {
    return this._internalInvoiceId;
  }

  // invoice_line_collection - computed: true, optional: false, required: false
  private _invoiceLineCollection = new DataOciOspGatewayInvoicesInvoiceLinesInvoiceLineCollectionList(this, "invoice_line_collection", false);
  public get invoiceLineCollection() {
    return this._invoiceLineCollection;
  }

  // osp_home_region - computed: false, optional: false, required: true
  private _ospHomeRegion?: string; 
  public get ospHomeRegion() {
    return this.getStringAttribute('osp_home_region');
  }
  public set ospHomeRegion(value: string) {
    this._ospHomeRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ospHomeRegionInput() {
    return this._ospHomeRegion;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciOspGatewayInvoicesInvoiceLinesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciOspGatewayInvoicesInvoiceLinesFilter[] | cdktf.IResolvable) {
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
      internal_invoice_id: cdktf.stringToTerraform(this._internalInvoiceId),
      osp_home_region: cdktf.stringToTerraform(this._ospHomeRegion),
      filter: cdktf.listMapper(dataOciOspGatewayInvoicesInvoiceLinesFilterToTerraform, true)(this._filter.internalValue),
    };
  }
}
