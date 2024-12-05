// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeAuditProfileAvailableAuditVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#audit_profile_id DataOciDataSafeAuditProfileAvailableAuditVolume#audit_profile_id}
  */
  readonly auditProfileId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#id DataOciDataSafeAuditProfileAvailableAuditVolume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#month_in_consideration_greater_than DataOciDataSafeAuditProfileAvailableAuditVolume#month_in_consideration_greater_than}
  */
  readonly monthInConsiderationGreaterThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#month_in_consideration_less_than DataOciDataSafeAuditProfileAvailableAuditVolume#month_in_consideration_less_than}
  */
  readonly monthInConsiderationLessThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#trail_location DataOciDataSafeAuditProfileAvailableAuditVolume#trail_location}
  */
  readonly trailLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#work_request_id DataOciDataSafeAuditProfileAvailableAuditVolume#work_request_id}
  */
  readonly workRequestId: string;
}
export interface DataOciDataSafeAuditProfileAvailableAuditVolumeItems {
}

export function dataOciDataSafeAuditProfileAvailableAuditVolumeItemsToTerraform(struct?: DataOciDataSafeAuditProfileAvailableAuditVolumeItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeAuditProfileAvailableAuditVolumeItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeAuditProfileAvailableAuditVolumeItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audit_profile_id - computed: true, optional: false, required: false
  public get auditProfileId() {
    return this.getStringAttribute('audit_profile_id');
  }

  // month_in_consideration - computed: true, optional: false, required: false
  public get monthInConsideration() {
    return this.getStringAttribute('month_in_consideration');
  }

  // trail_location - computed: true, optional: false, required: false
  public get trailLocation() {
    return this.getStringAttribute('trail_location');
  }

  // volume - computed: true, optional: false, required: false
  public get volume() {
    return this.getStringAttribute('volume');
  }
}

export class DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference {
    return new DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume oci_data_safe_audit_profile_available_audit_volume}
*/
export class DataOciDataSafeAuditProfileAvailableAuditVolume extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_audit_profile_available_audit_volume";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume oci_data_safe_audit_profile_available_audit_volume} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeAuditProfileAvailableAuditVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeAuditProfileAvailableAuditVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_audit_profile_available_audit_volume',
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
    this._auditProfileId = config.auditProfileId;
    this._id = config.id;
    this._monthInConsiderationGreaterThan = config.monthInConsiderationGreaterThan;
    this._monthInConsiderationLessThan = config.monthInConsiderationLessThan;
    this._trailLocation = config.trailLocation;
    this._workRequestId = config.workRequestId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_profile_id - computed: false, optional: false, required: true
  private _auditProfileId?: string; 
  public get auditProfileId() {
    return this.getStringAttribute('audit_profile_id');
  }
  public set auditProfileId(value: string) {
    this._auditProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditProfileIdInput() {
    return this._auditProfileId;
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

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // month_in_consideration_greater_than - computed: false, optional: true, required: false
  private _monthInConsiderationGreaterThan?: string; 
  public get monthInConsiderationGreaterThan() {
    return this.getStringAttribute('month_in_consideration_greater_than');
  }
  public set monthInConsiderationGreaterThan(value: string) {
    this._monthInConsiderationGreaterThan = value;
  }
  public resetMonthInConsiderationGreaterThan() {
    this._monthInConsiderationGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInConsiderationGreaterThanInput() {
    return this._monthInConsiderationGreaterThan;
  }

  // month_in_consideration_less_than - computed: false, optional: true, required: false
  private _monthInConsiderationLessThan?: string; 
  public get monthInConsiderationLessThan() {
    return this.getStringAttribute('month_in_consideration_less_than');
  }
  public set monthInConsiderationLessThan(value: string) {
    this._monthInConsiderationLessThan = value;
  }
  public resetMonthInConsiderationLessThan() {
    this._monthInConsiderationLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInConsiderationLessThanInput() {
    return this._monthInConsiderationLessThan;
  }

  // trail_location - computed: false, optional: true, required: false
  private _trailLocation?: string; 
  public get trailLocation() {
    return this.getStringAttribute('trail_location');
  }
  public set trailLocation(value: string) {
    this._trailLocation = value;
  }
  public resetTrailLocation() {
    this._trailLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trailLocationInput() {
    return this._trailLocation;
  }

  // work_request_id - computed: false, optional: false, required: true
  private _workRequestId?: string; 
  public get workRequestId() {
    return this.getStringAttribute('work_request_id');
  }
  public set workRequestId(value: string) {
    this._workRequestId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workRequestIdInput() {
    return this._workRequestId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_profile_id: cdktf.stringToTerraform(this._auditProfileId),
      id: cdktf.stringToTerraform(this._id),
      month_in_consideration_greater_than: cdktf.stringToTerraform(this._monthInConsiderationGreaterThan),
      month_in_consideration_less_than: cdktf.stringToTerraform(this._monthInConsiderationLessThan),
      trail_location: cdktf.stringToTerraform(this._trailLocation),
      work_request_id: cdktf.stringToTerraform(this._workRequestId),
    };
  }
}
