// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object_lifecycle_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciObjectstorageObjectLifecyclePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object_lifecycle_policy#bucket DataOciObjectstorageObjectLifecyclePolicy#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object_lifecycle_policy#namespace DataOciObjectstorageObjectLifecyclePolicy#namespace}
  */
  readonly namespace: string;
}
export interface DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilter {
}

export function dataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterToTerraform(struct?: DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclusion_patterns - computed: true, optional: false, required: false
  public get exclusionPatterns() {
    return this.getListAttribute('exclusion_patterns');
  }

  // inclusion_patterns - computed: true, optional: false, required: false
  public get inclusionPatterns() {
    return this.getListAttribute('inclusion_patterns');
  }

  // inclusion_prefixes - computed: true, optional: false, required: false
  public get inclusionPrefixes() {
    return this.getListAttribute('inclusion_prefixes');
  }
}

export class DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference {
    return new DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciObjectstorageObjectLifecyclePolicyRules {
}

export function dataOciObjectstorageObjectLifecyclePolicyRulesToTerraform(struct?: DataOciObjectstorageObjectLifecyclePolicyRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciObjectstorageObjectLifecyclePolicyRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciObjectstorageObjectLifecyclePolicyRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_name_filter - computed: true, optional: false, required: false
  private _objectNameFilter = new DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList(this, "object_name_filter", false);
  public get objectNameFilter() {
    return this._objectNameFilter;
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // time_amount - computed: true, optional: false, required: false
  public get timeAmount() {
    return this.getStringAttribute('time_amount');
  }

  // time_unit - computed: true, optional: false, required: false
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
}

export class DataOciObjectstorageObjectLifecyclePolicyRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference {
    return new DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object_lifecycle_policy oci_objectstorage_object_lifecycle_policy}
*/
export class DataOciObjectstorageObjectLifecyclePolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_objectstorage_object_lifecycle_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object_lifecycle_policy oci_objectstorage_object_lifecycle_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciObjectstorageObjectLifecyclePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciObjectstorageObjectLifecyclePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_objectstorage_object_lifecycle_policy',
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
    this._bucket = config.bucket;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataOciObjectstorageObjectLifecyclePolicyRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }
}
