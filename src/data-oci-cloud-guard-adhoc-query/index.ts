// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_query
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCloudGuardAdhocQueryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_query#adhoc_query_id DataOciCloudGuardAdhocQuery#adhoc_query_id}
  */
  readonly adhocQueryId: string;
}
export interface DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources {
}

export function dataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesToTerraform(struct?: DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // resource_ids - computed: true, optional: false, required: false
  public get resourceIds() {
    return this.getListAttribute('resource_ids');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
}

export class DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference {
    return new DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardAdhocQueryAdhocQueryDetails {
}

export function dataOciCloudGuardAdhocQueryAdhocQueryDetailsToTerraform(struct?: DataOciCloudGuardAdhocQueryAdhocQueryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardAdhocQueryAdhocQueryDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardAdhocQueryAdhocQueryDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // adhoc_query_resources - computed: true, optional: false, required: false
  private _adhocQueryResources = new DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList(this, "adhoc_query_resources", false);
  public get adhocQueryResources() {
    return this._adhocQueryResources;
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }
}

export class DataOciCloudGuardAdhocQueryAdhocQueryDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference {
    return new DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetails {
}

export function dataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsToTerraform(struct?: DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expected_count - computed: true, optional: false, required: false
  public get expectedCount() {
    return this.getStringAttribute('expected_count');
  }

  // expired_count - computed: true, optional: false, required: false
  public get expiredCount() {
    return this.getStringAttribute('expired_count');
  }

  // failed_count - computed: true, optional: false, required: false
  public get failedCount() {
    return this.getStringAttribute('failed_count');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // regional_error - computed: true, optional: false, required: false
  public get regionalError() {
    return this.getStringAttribute('regional_error');
  }

  // regional_status - computed: true, optional: false, required: false
  public get regionalStatus() {
    return this.getStringAttribute('regional_status');
  }

  // succeeded_count - computed: true, optional: false, required: false
  public get succeededCount() {
    return this.getStringAttribute('succeeded_count');
  }
}

export class DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference {
    return new DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_query oci_cloud_guard_adhoc_query}
*/
export class DataOciCloudGuardAdhocQuery extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_cloud_guard_adhoc_query";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_query oci_cloud_guard_adhoc_query} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCloudGuardAdhocQueryConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCloudGuardAdhocQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_cloud_guard_adhoc_query',
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
    this._adhocQueryId = config.adhocQueryId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adhoc_query_details - computed: true, optional: false, required: false
  private _adhocQueryDetails = new DataOciCloudGuardAdhocQueryAdhocQueryDetailsList(this, "adhoc_query_details", false);
  public get adhocQueryDetails() {
    return this._adhocQueryDetails;
  }

  // adhoc_query_id - computed: false, optional: false, required: true
  private _adhocQueryId?: string; 
  public get adhocQueryId() {
    return this.getStringAttribute('adhoc_query_id');
  }
  public set adhocQueryId(value: string) {
    this._adhocQueryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adhocQueryIdInput() {
    return this._adhocQueryId;
  }

  // adhoc_query_regional_details - computed: true, optional: false, required: false
  private _adhocQueryRegionalDetails = new DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList(this, "adhoc_query_regional_details", false);
  public get adhocQueryRegionalDetails() {
    return this._adhocQueryRegionalDetails;
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

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adhoc_query_id: cdktf.stringToTerraform(this._adhocQueryId),
    };
  }
}
