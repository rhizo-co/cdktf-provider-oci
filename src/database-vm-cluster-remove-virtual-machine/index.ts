// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseVmClusterRemoveVirtualMachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#id DatabaseVmClusterRemoveVirtualMachine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#vm_cluster_id DatabaseVmClusterRemoveVirtualMachine#vm_cluster_id}
  */
  readonly vmClusterId: string;
  /**
  * db_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#db_servers DatabaseVmClusterRemoveVirtualMachine#db_servers}
  */
  readonly dbServers: DatabaseVmClusterRemoveVirtualMachineDbServers[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#timeouts DatabaseVmClusterRemoveVirtualMachine#timeouts}
  */
  readonly timeouts?: DatabaseVmClusterRemoveVirtualMachineTimeouts;
}
export interface DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference {
}

export function databaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceToTerraform(struct?: DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceToHclTerraform(struct?: DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apply_update_preferred_end_time - computed: true, optional: false, required: false
  public get applyUpdatePreferredEndTime() {
    return this.getStringAttribute('apply_update_preferred_end_time');
  }

  // apply_update_preferred_start_time - computed: true, optional: false, required: false
  public get applyUpdatePreferredStartTime() {
    return this.getStringAttribute('apply_update_preferred_start_time');
  }
}

export class DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference {
    return new DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod {
}

export function databaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodToTerraform(struct?: DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodToHclTerraform(struct?: DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // freeze_period_end_time - computed: true, optional: false, required: false
  public get freezePeriodEndTime() {
    return this.getStringAttribute('freeze_period_end_time');
  }

  // freeze_period_start_time - computed: true, optional: false, required: false
  public get freezePeriodStartTime() {
    return this.getStringAttribute('freeze_period_start_time');
  }
}

export class DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference {
    return new DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails {
}

export function databaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsToTerraform(struct?: DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsToHclTerraform(struct?: DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apply_update_time_preference - computed: true, optional: false, required: false
  private _applyUpdateTimePreference = new DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList(this, "apply_update_time_preference", false);
  public get applyUpdateTimePreference() {
    return this._applyUpdateTimePreference;
  }

  // freeze_period - computed: true, optional: false, required: false
  private _freezePeriod = new DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList(this, "freeze_period", false);
  public get freezePeriod() {
    return this._freezePeriod;
  }

  // is_early_adoption_enabled - computed: true, optional: false, required: false
  public get isEarlyAdoptionEnabled() {
    return this.getBooleanAttribute('is_early_adoption_enabled');
  }

  // is_freeze_period_enabled - computed: true, optional: false, required: false
  public get isFreezePeriodEnabled() {
    return this.getBooleanAttribute('is_freeze_period_enabled');
  }
}

export class DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference {
    return new DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions {
}

export function databaseVmClusterRemoveVirtualMachineDataCollectionOptionsToTerraform(struct?: DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseVmClusterRemoveVirtualMachineDataCollectionOptionsToHclTerraform(struct?: DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_diagnostics_events_enabled - computed: true, optional: false, required: false
  public get isDiagnosticsEventsEnabled() {
    return this.getBooleanAttribute('is_diagnostics_events_enabled');
  }

  // is_health_monitoring_enabled - computed: true, optional: false, required: false
  public get isHealthMonitoringEnabled() {
    return this.getBooleanAttribute('is_health_monitoring_enabled');
  }

  // is_incident_logs_enabled - computed: true, optional: false, required: false
  public get isIncidentLogsEnabled() {
    return this.getBooleanAttribute('is_incident_logs_enabled');
  }
}

export class DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference {
    return new DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails {
}

export function databaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsToTerraform(struct?: DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsToHclTerraform(struct?: DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_system_size_gb - computed: true, optional: false, required: false
  public get fileSystemSizeGb() {
    return this.getNumberAttribute('file_system_size_gb');
  }

  // mount_point - computed: true, optional: false, required: false
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
}

export class DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference {
    return new DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseVmClusterRemoveVirtualMachineDbServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#db_server_id DatabaseVmClusterRemoveVirtualMachine#db_server_id}
  */
  readonly dbServerId: string;
}

export function databaseVmClusterRemoveVirtualMachineDbServersToTerraform(struct?: DatabaseVmClusterRemoveVirtualMachineDbServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_server_id: cdktf.stringToTerraform(struct!.dbServerId),
  }
}


export function databaseVmClusterRemoveVirtualMachineDbServersToHclTerraform(struct?: DatabaseVmClusterRemoveVirtualMachineDbServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_server_id: {
      value: cdktf.stringToHclTerraform(struct!.dbServerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseVmClusterRemoveVirtualMachineDbServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbServerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbServerId = this._dbServerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseVmClusterRemoveVirtualMachineDbServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbServerId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbServerId = value.dbServerId;
    }
  }

  // db_server_id - computed: false, optional: false, required: true
  private _dbServerId?: string; 
  public get dbServerId() {
    return this.getStringAttribute('db_server_id');
  }
  public set dbServerId(value: string) {
    this._dbServerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbServerIdInput() {
    return this._dbServerId;
  }
}

export class DatabaseVmClusterRemoveVirtualMachineDbServersList extends cdktf.ComplexList {
  public internalValue? : DatabaseVmClusterRemoveVirtualMachineDbServers[] | cdktf.IResolvable

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
  public get(index: number): DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference {
    return new DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseVmClusterRemoveVirtualMachineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#create DatabaseVmClusterRemoveVirtualMachine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#delete DatabaseVmClusterRemoveVirtualMachine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#update DatabaseVmClusterRemoveVirtualMachine#update}
  */
  readonly update?: string;
}

export function databaseVmClusterRemoveVirtualMachineTimeoutsToTerraform(struct?: DatabaseVmClusterRemoveVirtualMachineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function databaseVmClusterRemoveVirtualMachineTimeoutsToHclTerraform(struct?: DatabaseVmClusterRemoveVirtualMachineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseVmClusterRemoveVirtualMachineTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseVmClusterRemoveVirtualMachineTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine oci_database_vm_cluster_remove_virtual_machine}
*/
export class DatabaseVmClusterRemoveVirtualMachine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_vm_cluster_remove_virtual_machine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseVmClusterRemoveVirtualMachine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseVmClusterRemoveVirtualMachine to import
  * @param importFromId The id of the existing DatabaseVmClusterRemoveVirtualMachine that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseVmClusterRemoveVirtualMachine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_vm_cluster_remove_virtual_machine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine oci_database_vm_cluster_remove_virtual_machine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseVmClusterRemoveVirtualMachineConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseVmClusterRemoveVirtualMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_vm_cluster_remove_virtual_machine',
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
    this._vmClusterId = config.vmClusterId;
    this._dbServers.internalValue = config.dbServers;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // cloud_automation_update_details - computed: true, optional: false, required: false
  private _cloudAutomationUpdateDetails = new DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList(this, "cloud_automation_update_details", false);
  public get cloudAutomationUpdateDetails() {
    return this._cloudAutomationUpdateDetails;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // cpus_enabled - computed: true, optional: false, required: false
  public get cpusEnabled() {
    return this.getNumberAttribute('cpus_enabled');
  }

  // data_collection_options - computed: true, optional: false, required: false
  private _dataCollectionOptions = new DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList(this, "data_collection_options", false);
  public get dataCollectionOptions() {
    return this._dataCollectionOptions;
  }

  // data_storage_size_in_tbs - computed: true, optional: false, required: false
  public get dataStorageSizeInTbs() {
    return this.getNumberAttribute('data_storage_size_in_tbs');
  }

  // db_node_storage_size_in_gbs - computed: true, optional: false, required: false
  public get dbNodeStorageSizeInGbs() {
    return this.getNumberAttribute('db_node_storage_size_in_gbs');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // exadata_infrastructure_id - computed: true, optional: false, required: false
  public get exadataInfrastructureId() {
    return this.getStringAttribute('exadata_infrastructure_id');
  }

  // file_system_configuration_details - computed: true, optional: false, required: false
  private _fileSystemConfigurationDetails = new DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList(this, "file_system_configuration_details", false);
  public get fileSystemConfigurationDetails() {
    return this._fileSystemConfigurationDetails;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // gi_version - computed: true, optional: false, required: false
  public get giVersion() {
    return this.getStringAttribute('gi_version');
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

  // is_local_backup_enabled - computed: true, optional: false, required: false
  public get isLocalBackupEnabled() {
    return this.getBooleanAttribute('is_local_backup_enabled');
  }

  // is_sparse_diskgroup_enabled - computed: true, optional: false, required: false
  public get isSparseDiskgroupEnabled() {
    return this.getBooleanAttribute('is_sparse_diskgroup_enabled');
  }

  // last_patch_history_entry_id - computed: true, optional: false, required: false
  public get lastPatchHistoryEntryId() {
    return this.getStringAttribute('last_patch_history_entry_id');
  }

  // license_model - computed: true, optional: false, required: false
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // memory_size_in_gbs - computed: true, optional: false, required: false
  public get memorySizeInGbs() {
    return this.getNumberAttribute('memory_size_in_gbs');
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // ssh_public_keys - computed: true, optional: false, required: false
  public get sshPublicKeys() {
    return this.getListAttribute('ssh_public_keys');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_version - computed: true, optional: false, required: false
  public get systemVersion() {
    return this.getStringAttribute('system_version');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // vm_cluster_id - computed: false, optional: false, required: true
  private _vmClusterId?: string; 
  public get vmClusterId() {
    return this.getStringAttribute('vm_cluster_id');
  }
  public set vmClusterId(value: string) {
    this._vmClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmClusterIdInput() {
    return this._vmClusterId;
  }

  // vm_cluster_network_id - computed: true, optional: false, required: false
  public get vmClusterNetworkId() {
    return this.getStringAttribute('vm_cluster_network_id');
  }

  // db_servers - computed: false, optional: false, required: true
  private _dbServers = new DatabaseVmClusterRemoveVirtualMachineDbServersList(this, "db_servers", false);
  public get dbServers() {
    return this._dbServers;
  }
  public putDbServers(value: DatabaseVmClusterRemoveVirtualMachineDbServers[] | cdktf.IResolvable) {
    this._dbServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbServersInput() {
    return this._dbServers.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseVmClusterRemoveVirtualMachineTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      vm_cluster_id: cdktf.stringToTerraform(this._vmClusterId),
      db_servers: cdktf.listMapper(databaseVmClusterRemoveVirtualMachineDbServersToTerraform, true)(this._dbServers.internalValue),
      timeouts: databaseVmClusterRemoveVirtualMachineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_cluster_id: {
        value: cdktf.stringToHclTerraform(this._vmClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_servers: {
        value: cdktf.listMapperHcl(databaseVmClusterRemoveVirtualMachineDbServersToHclTerraform, true)(this._dbServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseVmClusterRemoveVirtualMachineDbServersList",
      },
      timeouts: {
        value: databaseVmClusterRemoveVirtualMachineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseVmClusterRemoveVirtualMachineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
