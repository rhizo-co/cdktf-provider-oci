// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedule#ccc_upgrade_schedule_id DataOciComputeCloudAtCustomerCccUpgradeSchedule#ccc_upgrade_schedule_id}
  */
  readonly cccUpgradeScheduleId: string;
}
export interface DataOciComputeCloudAtCustomerCccUpgradeScheduleEvents {
}

export function dataOciComputeCloudAtCustomerCccUpgradeScheduleEventsToTerraform(struct?: DataOciComputeCloudAtCustomerCccUpgradeScheduleEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciComputeCloudAtCustomerCccUpgradeScheduleEventsToHclTerraform(struct?: DataOciComputeCloudAtCustomerCccUpgradeScheduleEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciComputeCloudAtCustomerCccUpgradeScheduleEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciComputeCloudAtCustomerCccUpgradeScheduleEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // schedule_event_duration - computed: true, optional: false, required: false
  public get scheduleEventDuration() {
    return this.getStringAttribute('schedule_event_duration');
  }

  // schedule_event_recurrences - computed: true, optional: false, required: false
  public get scheduleEventRecurrences() {
    return this.getStringAttribute('schedule_event_recurrences');
  }

  // time_start - computed: true, optional: false, required: false
  public get timeStart() {
    return this.getStringAttribute('time_start');
  }
}

export class DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference {
    return new DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedule oci_compute_cloud_at_customer_ccc_upgrade_schedule}
*/
export class DataOciComputeCloudAtCustomerCccUpgradeSchedule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_compute_cloud_at_customer_ccc_upgrade_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciComputeCloudAtCustomerCccUpgradeSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciComputeCloudAtCustomerCccUpgradeSchedule to import
  * @param importFromId The id of the existing DataOciComputeCloudAtCustomerCccUpgradeSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciComputeCloudAtCustomerCccUpgradeSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_compute_cloud_at_customer_ccc_upgrade_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedule oci_compute_cloud_at_customer_ccc_upgrade_schedule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_compute_cloud_at_customer_ccc_upgrade_schedule',
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
    this._cccUpgradeScheduleId = config.cccUpgradeScheduleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ccc_upgrade_schedule_id - computed: false, optional: false, required: true
  private _cccUpgradeScheduleId?: string; 
  public get cccUpgradeScheduleId() {
    return this.getStringAttribute('ccc_upgrade_schedule_id');
  }
  public set cccUpgradeScheduleId(value: string) {
    this._cccUpgradeScheduleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cccUpgradeScheduleIdInput() {
    return this._cccUpgradeScheduleId;
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // events - computed: true, optional: false, required: false
  private _events = new DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList(this, "events", false);
  public get events() {
    return this._events;
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

  // infrastructure_ids - computed: true, optional: false, required: false
  public get infrastructureIds() {
    return this.getListAttribute('infrastructure_ids');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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
      ccc_upgrade_schedule_id: cdktf.stringToTerraform(this._cccUpgradeScheduleId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ccc_upgrade_schedule_id: {
        value: cdktf.stringToHclTerraform(this._cccUpgradeScheduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
