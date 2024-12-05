// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciUsageProxySubscriptionProductConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#id DataOciUsageProxySubscriptionProduct#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#producttype DataOciUsageProxySubscriptionProduct#producttype}
  */
  readonly producttype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#subscription_id DataOciUsageProxySubscriptionProduct#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#tenancy_id DataOciUsageProxySubscriptionProduct#tenancy_id}
  */
  readonly tenancyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#usage_period_key DataOciUsageProxySubscriptionProduct#usage_period_key}
  */
  readonly usagePeriodKey: string;
}
export interface DataOciUsageProxySubscriptionProductItems {
}

export function dataOciUsageProxySubscriptionProductItemsToTerraform(struct?: DataOciUsageProxySubscriptionProductItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciUsageProxySubscriptionProductItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciUsageProxySubscriptionProductItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciUsageProxySubscriptionProductItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // earned_rewards - computed: true, optional: false, required: false
  public get earnedRewards() {
    return this.getNumberAttribute('earned_rewards');
  }

  // is_eligible_to_earn_rewards - computed: true, optional: false, required: false
  public get isEligibleToEarnRewards() {
    return this.getBooleanAttribute('is_eligible_to_earn_rewards');
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // product_number - computed: true, optional: false, required: false
  public get productNumber() {
    return this.getStringAttribute('product_number');
  }

  // usage_amount - computed: true, optional: false, required: false
  public get usageAmount() {
    return this.getNumberAttribute('usage_amount');
  }
}

export class DataOciUsageProxySubscriptionProductItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciUsageProxySubscriptionProductItemsOutputReference {
    return new DataOciUsageProxySubscriptionProductItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product oci_usage_proxy_subscription_product}
*/
export class DataOciUsageProxySubscriptionProduct extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_usage_proxy_subscription_product";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product oci_usage_proxy_subscription_product} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciUsageProxySubscriptionProductConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciUsageProxySubscriptionProductConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_usage_proxy_subscription_product',
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
    this._id = config.id;
    this._producttype = config.producttype;
    this._subscriptionId = config.subscriptionId;
    this._tenancyId = config.tenancyId;
    this._usagePeriodKey = config.usagePeriodKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // items - computed: true, optional: false, required: false
  private _items = new DataOciUsageProxySubscriptionProductItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // producttype - computed: false, optional: true, required: false
  private _producttype?: string; 
  public get producttype() {
    return this.getStringAttribute('producttype');
  }
  public set producttype(value: string) {
    this._producttype = value;
  }
  public resetProducttype() {
    this._producttype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producttypeInput() {
    return this._producttype;
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

  // tenancy_id - computed: false, optional: false, required: true
  private _tenancyId?: string; 
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }
  public set tenancyId(value: string) {
    this._tenancyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyIdInput() {
    return this._tenancyId;
  }

  // usage_period_key - computed: false, optional: false, required: true
  private _usagePeriodKey?: string; 
  public get usagePeriodKey() {
    return this.getStringAttribute('usage_period_key');
  }
  public set usagePeriodKey(value: string) {
    this._usagePeriodKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usagePeriodKeyInput() {
    return this._usagePeriodKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      producttype: cdktf.stringToTerraform(this._producttype),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      tenancy_id: cdktf.stringToTerraform(this._tenancyId),
      usage_period_key: cdktf.stringToTerraform(this._usagePeriodKey),
    };
  }
}
