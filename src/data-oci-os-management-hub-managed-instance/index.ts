// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOsManagementHubManagedInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance#managed_instance_id DataOciOsManagementHubManagedInstance#managed_instance_id}
  */
  readonly managedInstanceId: string;
}
export interface DataOciOsManagementHubManagedInstanceAutonomousSettings {
}

export function dataOciOsManagementHubManagedInstanceAutonomousSettingsToTerraform(struct?: DataOciOsManagementHubManagedInstanceAutonomousSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciOsManagementHubManagedInstanceAutonomousSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubManagedInstanceAutonomousSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubManagedInstanceAutonomousSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_data_collection_authorized - computed: true, optional: false, required: false
  public get isDataCollectionAuthorized() {
    return this.getBooleanAttribute('is_data_collection_authorized');
  }

  // scheduled_job_id - computed: true, optional: false, required: false
  public get scheduledJobId() {
    return this.getStringAttribute('scheduled_job_id');
  }
}

export class DataOciOsManagementHubManagedInstanceAutonomousSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubManagedInstanceAutonomousSettingsOutputReference {
    return new DataOciOsManagementHubManagedInstanceAutonomousSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubManagedInstanceLifecycleEnvironment {
}

export function dataOciOsManagementHubManagedInstanceLifecycleEnvironmentToTerraform(struct?: DataOciOsManagementHubManagedInstanceLifecycleEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciOsManagementHubManagedInstanceLifecycleEnvironmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubManagedInstanceLifecycleEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubManagedInstanceLifecycleEnvironment | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataOciOsManagementHubManagedInstanceLifecycleEnvironmentList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubManagedInstanceLifecycleEnvironmentOutputReference {
    return new DataOciOsManagementHubManagedInstanceLifecycleEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubManagedInstanceLifecycleStage {
}

export function dataOciOsManagementHubManagedInstanceLifecycleStageToTerraform(struct?: DataOciOsManagementHubManagedInstanceLifecycleStage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciOsManagementHubManagedInstanceLifecycleStageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubManagedInstanceLifecycleStage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubManagedInstanceLifecycleStage | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataOciOsManagementHubManagedInstanceLifecycleStageList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubManagedInstanceLifecycleStageOutputReference {
    return new DataOciOsManagementHubManagedInstanceLifecycleStageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubManagedInstanceManagedInstanceGroup {
}

export function dataOciOsManagementHubManagedInstanceManagedInstanceGroupToTerraform(struct?: DataOciOsManagementHubManagedInstanceManagedInstanceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciOsManagementHubManagedInstanceManagedInstanceGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubManagedInstanceManagedInstanceGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubManagedInstanceManagedInstanceGroup | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataOciOsManagementHubManagedInstanceManagedInstanceGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubManagedInstanceManagedInstanceGroupOutputReference {
    return new DataOciOsManagementHubManagedInstanceManagedInstanceGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubManagedInstanceSoftwareSources {
}

export function dataOciOsManagementHubManagedInstanceSoftwareSourcesToTerraform(struct?: DataOciOsManagementHubManagedInstanceSoftwareSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciOsManagementHubManagedInstanceSoftwareSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubManagedInstanceSoftwareSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubManagedInstanceSoftwareSources | undefined) {
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_mandatory_for_autonomous_linux - computed: true, optional: false, required: false
  public get isMandatoryForAutonomousLinux() {
    return this.getBooleanAttribute('is_mandatory_for_autonomous_linux');
  }

  // software_source_type - computed: true, optional: false, required: false
  public get softwareSourceType() {
    return this.getStringAttribute('software_source_type');
  }
}

export class DataOciOsManagementHubManagedInstanceSoftwareSourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubManagedInstanceSoftwareSourcesOutputReference {
    return new DataOciOsManagementHubManagedInstanceSoftwareSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance oci_os_management_hub_managed_instance}
*/
export class DataOciOsManagementHubManagedInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_os_management_hub_managed_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance oci_os_management_hub_managed_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOsManagementHubManagedInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOsManagementHubManagedInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_os_management_hub_managed_instance',
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
    this._managedInstanceId = config.managedInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // architecture - computed: true, optional: false, required: false
  public get architecture() {
    return this.getStringAttribute('architecture');
  }

  // autonomous_settings - computed: true, optional: false, required: false
  private _autonomousSettings = new DataOciOsManagementHubManagedInstanceAutonomousSettingsList(this, "autonomous_settings", false);
  public get autonomousSettings() {
    return this._autonomousSettings;
  }

  // bug_updates_available - computed: true, optional: false, required: false
  public get bugUpdatesAvailable() {
    return this.getNumberAttribute('bug_updates_available');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // enhancement_updates_available - computed: true, optional: false, required: false
  public get enhancementUpdatesAvailable() {
    return this.getNumberAttribute('enhancement_updates_available');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // installed_packages - computed: true, optional: false, required: false
  public get installedPackages() {
    return this.getNumberAttribute('installed_packages');
  }

  // installed_windows_updates - computed: true, optional: false, required: false
  public get installedWindowsUpdates() {
    return this.getNumberAttribute('installed_windows_updates');
  }

  // is_managed_by_autonomous_linux - computed: true, optional: false, required: false
  public get isManagedByAutonomousLinux() {
    return this.getBooleanAttribute('is_managed_by_autonomous_linux');
  }

  // is_management_station - computed: true, optional: false, required: false
  public get isManagementStation() {
    return this.getBooleanAttribute('is_management_station');
  }

  // is_reboot_required - computed: true, optional: false, required: false
  public get isRebootRequired() {
    return this.getBooleanAttribute('is_reboot_required');
  }

  // ksplice_effective_kernel_version - computed: true, optional: false, required: false
  public get kspliceEffectiveKernelVersion() {
    return this.getStringAttribute('ksplice_effective_kernel_version');
  }

  // lifecycle_environment - computed: true, optional: false, required: false
  private _lifecycleEnvironment = new DataOciOsManagementHubManagedInstanceLifecycleEnvironmentList(this, "lifecycle_environment", false);
  public get lifecycleEnvironment() {
    return this._lifecycleEnvironment;
  }

  // lifecycle_stage - computed: true, optional: false, required: false
  private _lifecycleStage = new DataOciOsManagementHubManagedInstanceLifecycleStageList(this, "lifecycle_stage", false);
  public get lifecycleStage() {
    return this._lifecycleStage;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // managed_instance_group - computed: true, optional: false, required: false
  private _managedInstanceGroup = new DataOciOsManagementHubManagedInstanceManagedInstanceGroupList(this, "managed_instance_group", false);
  public get managedInstanceGroup() {
    return this._managedInstanceGroup;
  }

  // managed_instance_id - computed: false, optional: false, required: true
  private _managedInstanceId?: string; 
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }
  public set managedInstanceId(value: string) {
    this._managedInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceIdInput() {
    return this._managedInstanceId;
  }

  // notification_topic_id - computed: true, optional: false, required: false
  public get notificationTopicId() {
    return this.getStringAttribute('notification_topic_id');
  }

  // os_family - computed: true, optional: false, required: false
  public get osFamily() {
    return this.getStringAttribute('os_family');
  }

  // os_kernel_version - computed: true, optional: false, required: false
  public get osKernelVersion() {
    return this.getStringAttribute('os_kernel_version');
  }

  // os_name - computed: true, optional: false, required: false
  public get osName() {
    return this.getStringAttribute('os_name');
  }

  // os_version - computed: true, optional: false, required: false
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }

  // other_updates_available - computed: true, optional: false, required: false
  public get otherUpdatesAvailable() {
    return this.getNumberAttribute('other_updates_available');
  }

  // primary_management_station_id - computed: true, optional: false, required: false
  public get primaryManagementStationId() {
    return this.getStringAttribute('primary_management_station_id');
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }

  // scheduled_job_count - computed: true, optional: false, required: false
  public get scheduledJobCount() {
    return this.getNumberAttribute('scheduled_job_count');
  }

  // secondary_management_station_id - computed: true, optional: false, required: false
  public get secondaryManagementStationId() {
    return this.getStringAttribute('secondary_management_station_id');
  }

  // security_updates_available - computed: true, optional: false, required: false
  public get securityUpdatesAvailable() {
    return this.getNumberAttribute('security_updates_available');
  }

  // software_sources - computed: true, optional: false, required: false
  private _softwareSources = new DataOciOsManagementHubManagedInstanceSoftwareSourcesList(this, "software_sources", false);
  public get softwareSources() {
    return this._softwareSources;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tenancy_id - computed: true, optional: false, required: false
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_boot - computed: true, optional: false, required: false
  public get timeLastBoot() {
    return this.getStringAttribute('time_last_boot');
  }

  // time_last_checkin - computed: true, optional: false, required: false
  public get timeLastCheckin() {
    return this.getStringAttribute('time_last_checkin');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // updates_available - computed: true, optional: false, required: false
  public get updatesAvailable() {
    return this.getNumberAttribute('updates_available');
  }

  // work_request_count - computed: true, optional: false, required: false
  public get workRequestCount() {
    return this.getNumberAttribute('work_request_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      managed_instance_id: cdktf.stringToTerraform(this._managedInstanceId),
    };
  }
}
