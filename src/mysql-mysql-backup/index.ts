// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlMysqlBackupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#backup_type MysqlMysqlBackup#backup_type}
  */
  readonly backupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#compartment_id MysqlMysqlBackup#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#db_system_id MysqlMysqlBackup#db_system_id}
  */
  readonly dbSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#defined_tags MysqlMysqlBackup#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#description MysqlMysqlBackup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#display_name MysqlMysqlBackup#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#freeform_tags MysqlMysqlBackup#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#id MysqlMysqlBackup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#retention_in_days MysqlMysqlBackup#retention_in_days}
  */
  readonly retentionInDays?: number;
  /**
  * db_system_snapshot_summary block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#db_system_snapshot_summary MysqlMysqlBackup#db_system_snapshot_summary}
  */
  readonly dbSystemSnapshotSummary?: MysqlMysqlBackupDbSystemSnapshotSummary[] | cdktf.IResolvable;
  /**
  * source_details block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#source_details MysqlMysqlBackup#source_details}
  */
  readonly sourceDetails?: MysqlMysqlBackupSourceDetails;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#timeouts MysqlMysqlBackup#timeouts}
  */
  readonly timeouts?: MysqlMysqlBackupTimeouts;
}
export interface MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy {
}

export function mysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyToTerraform(struct?: MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
}

export class MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList extends cdktf.ComplexList {

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
  public get(index: number): MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference {
    return new MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlMysqlBackupDbSystemSnapshotBackupPolicy {
}

export function mysqlMysqlBackupDbSystemSnapshotBackupPolicyToTerraform(struct?: MysqlMysqlBackupDbSystemSnapshotBackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlMysqlBackupDbSystemSnapshotBackupPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlBackupDbSystemSnapshotBackupPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // pitr_policy - computed: true, optional: false, required: false
  private _pitrPolicy = new MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList(this, "pitr_policy", false);
  public get pitrPolicy() {
    return this._pitrPolicy;
  }

  // retention_in_days - computed: true, optional: false, required: false
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }

  // window_start_time - computed: true, optional: false, required: false
  public get windowStartTime() {
    return this.getStringAttribute('window_start_time');
  }
}

export class MysqlMysqlBackupDbSystemSnapshotBackupPolicyList extends cdktf.ComplexList {

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
  public get(index: number): MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference {
    return new MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlMysqlBackupDbSystemSnapshotDataStorage {
}

export function mysqlMysqlBackupDbSystemSnapshotDataStorageToTerraform(struct?: MysqlMysqlBackupDbSystemSnapshotDataStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlMysqlBackupDbSystemSnapshotDataStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlBackupDbSystemSnapshotDataStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocated_storage_size_in_gbs - computed: true, optional: false, required: false
  public get allocatedStorageSizeInGbs() {
    return this.getNumberAttribute('allocated_storage_size_in_gbs');
  }

  // data_storage_size_in_gb - computed: true, optional: false, required: false
  public get dataStorageSizeInGb() {
    return this.getNumberAttribute('data_storage_size_in_gb');
  }

  // data_storage_size_limit_in_gbs - computed: true, optional: false, required: false
  public get dataStorageSizeLimitInGbs() {
    return this.getNumberAttribute('data_storage_size_limit_in_gbs');
  }

  // is_auto_expand_storage_enabled - computed: true, optional: false, required: false
  public get isAutoExpandStorageEnabled() {
    return this.getBooleanAttribute('is_auto_expand_storage_enabled');
  }

  // max_storage_size_in_gbs - computed: true, optional: false, required: false
  public get maxStorageSizeInGbs() {
    return this.getNumberAttribute('max_storage_size_in_gbs');
  }
}

export class MysqlMysqlBackupDbSystemSnapshotDataStorageList extends cdktf.ComplexList {

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
  public get(index: number): MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference {
    return new MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlMysqlBackupDbSystemSnapshotDeletionPolicy {
}

export function mysqlMysqlBackupDbSystemSnapshotDeletionPolicyToTerraform(struct?: MysqlMysqlBackupDbSystemSnapshotDeletionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlMysqlBackupDbSystemSnapshotDeletionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlBackupDbSystemSnapshotDeletionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automatic_backup_retention - computed: true, optional: false, required: false
  public get automaticBackupRetention() {
    return this.getStringAttribute('automatic_backup_retention');
  }

  // final_backup - computed: true, optional: false, required: false
  public get finalBackup() {
    return this.getStringAttribute('final_backup');
  }

  // is_delete_protected - computed: true, optional: false, required: false
  public get isDeleteProtected() {
    return this.getBooleanAttribute('is_delete_protected');
  }
}

export class MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList extends cdktf.ComplexList {

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
  public get(index: number): MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference {
    return new MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlMysqlBackupDbSystemSnapshotEndpoints {
}

export function mysqlMysqlBackupDbSystemSnapshotEndpointsToTerraform(struct?: MysqlMysqlBackupDbSystemSnapshotEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlMysqlBackupDbSystemSnapshotEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlBackupDbSystemSnapshotEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // modes - computed: true, optional: false, required: false
  public get modes() {
    return this.getListAttribute('modes');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_x - computed: true, optional: false, required: false
  public get portX() {
    return this.getNumberAttribute('port_x');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_details - computed: true, optional: false, required: false
  public get statusDetails() {
    return this.getStringAttribute('status_details');
  }
}

export class MysqlMysqlBackupDbSystemSnapshotEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference {
    return new MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlMysqlBackupDbSystemSnapshotMaintenance {
}

export function mysqlMysqlBackupDbSystemSnapshotMaintenanceToTerraform(struct?: MysqlMysqlBackupDbSystemSnapshotMaintenance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlMysqlBackupDbSystemSnapshotMaintenance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlBackupDbSystemSnapshotMaintenance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // window_start_time - computed: true, optional: false, required: false
  public get windowStartTime() {
    return this.getStringAttribute('window_start_time');
  }
}

export class MysqlMysqlBackupDbSystemSnapshotMaintenanceList extends cdktf.ComplexList {

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
  public get(index: number): MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference {
    return new MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlMysqlBackupDbSystemSnapshotSecureConnections {
}

export function mysqlMysqlBackupDbSystemSnapshotSecureConnectionsToTerraform(struct?: MysqlMysqlBackupDbSystemSnapshotSecureConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlMysqlBackupDbSystemSnapshotSecureConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlBackupDbSystemSnapshotSecureConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_generation_type - computed: true, optional: false, required: false
  public get certificateGenerationType() {
    return this.getStringAttribute('certificate_generation_type');
  }

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
}

export class MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList extends cdktf.ComplexList {

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
  public get(index: number): MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference {
    return new MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlMysqlBackupDbSystemSnapshot {
}

export function mysqlMysqlBackupDbSystemSnapshotToTerraform(struct?: MysqlMysqlBackupDbSystemSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class MysqlMysqlBackupDbSystemSnapshotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlMysqlBackupDbSystemSnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlBackupDbSystemSnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_username - computed: true, optional: false, required: false
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // backup_policy - computed: true, optional: false, required: false
  private _backupPolicy = new MysqlMysqlBackupDbSystemSnapshotBackupPolicyList(this, "backup_policy", false);
  public get backupPolicy() {
    return this._backupPolicy;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // configuration_id - computed: true, optional: false, required: false
  public get configurationId() {
    return this.getStringAttribute('configuration_id');
  }

  // crash_recovery - computed: true, optional: false, required: false
  public get crashRecovery() {
    return this.getStringAttribute('crash_recovery');
  }

  // data_storage - computed: true, optional: false, required: false
  private _dataStorage = new MysqlMysqlBackupDbSystemSnapshotDataStorageList(this, "data_storage", false);
  public get dataStorage() {
    return this._dataStorage;
  }

  // data_storage_size_in_gb - computed: true, optional: false, required: false
  public get dataStorageSizeInGb() {
    return this.getNumberAttribute('data_storage_size_in_gb');
  }

  // database_management - computed: true, optional: false, required: false
  public get databaseManagement() {
    return this.getStringAttribute('database_management');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // deletion_policy - computed: true, optional: false, required: false
  private _deletionPolicy = new MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList(this, "deletion_policy", false);
  public get deletionPolicy() {
    return this._deletionPolicy;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new MysqlMysqlBackupDbSystemSnapshotEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }

  // fault_domain - computed: true, optional: false, required: false
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // hostname_label - computed: true, optional: false, required: false
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // is_highly_available - computed: true, optional: false, required: false
  public get isHighlyAvailable() {
    return this.getBooleanAttribute('is_highly_available');
  }

  // maintenance - computed: true, optional: false, required: false
  private _maintenance = new MysqlMysqlBackupDbSystemSnapshotMaintenanceList(this, "maintenance", false);
  public get maintenance() {
    return this._maintenance;
  }

  // mysql_version - computed: true, optional: false, required: false
  public get mysqlVersion() {
    return this.getStringAttribute('mysql_version');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_x - computed: true, optional: false, required: false
  public get portX() {
    return this.getNumberAttribute('port_x');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // secure_connections - computed: true, optional: false, required: false
  private _secureConnections = new MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList(this, "secure_connections", false);
  public get secureConnections() {
    return this._secureConnections;
  }

  // shape_name - computed: true, optional: false, required: false
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class MysqlMysqlBackupDbSystemSnapshotList extends cdktf.ComplexList {

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
  public get(index: number): MysqlMysqlBackupDbSystemSnapshotOutputReference {
    return new MysqlMysqlBackupDbSystemSnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlMysqlBackupDbSystemSnapshotSummary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#display_name MysqlMysqlBackup#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#id MysqlMysqlBackup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#region MysqlMysqlBackup#region}
  */
  readonly region?: string;
}

export function mysqlMysqlBackupDbSystemSnapshotSummaryToTerraform(struct?: MysqlMysqlBackupDbSystemSnapshotSummary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    id: cdktf.stringToTerraform(struct!.id),
    region: cdktf.stringToTerraform(struct!.region),
  }
}

export class MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlMysqlBackupDbSystemSnapshotSummary | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlBackupDbSystemSnapshotSummary | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._id = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._id = value.id;
      this._region = value.region;
    }
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class MysqlMysqlBackupDbSystemSnapshotSummaryList extends cdktf.ComplexList {
  public internalValue? : MysqlMysqlBackupDbSystemSnapshotSummary[] | cdktf.IResolvable

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
  public get(index: number): MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference {
    return new MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlMysqlBackupSourceDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#backup_id MysqlMysqlBackup#backup_id}
  */
  readonly backupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#compartment_id MysqlMysqlBackup#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#region MysqlMysqlBackup#region}
  */
  readonly region: string;
}

export function mysqlMysqlBackupSourceDetailsToTerraform(struct?: MysqlMysqlBackupSourceDetailsOutputReference | MysqlMysqlBackupSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_id: cdktf.stringToTerraform(struct!.backupId),
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    region: cdktf.stringToTerraform(struct!.region),
  }
}

export class MysqlMysqlBackupSourceDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlMysqlBackupSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupId = this._backupId;
    }
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlBackupSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupId = undefined;
      this._compartmentId = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupId = value.backupId;
      this._compartmentId = value.compartmentId;
      this._region = value.region;
    }
  }

  // backup_id - computed: false, optional: false, required: true
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface MysqlMysqlBackupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#create MysqlMysqlBackup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#delete MysqlMysqlBackup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#update MysqlMysqlBackup#update}
  */
  readonly update?: string;
}

export function mysqlMysqlBackupTimeoutsToTerraform(struct?: MysqlMysqlBackupTimeouts | cdktf.IResolvable): any {
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

export class MysqlMysqlBackupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MysqlMysqlBackupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MysqlMysqlBackupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup oci_mysql_mysql_backup}
*/
export class MysqlMysqlBackup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_mysql_mysql_backup";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup oci_mysql_mysql_backup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlMysqlBackupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MysqlMysqlBackupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_mysql_mysql_backup',
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
    this._backupType = config.backupType;
    this._compartmentId = config.compartmentId;
    this._dbSystemId = config.dbSystemId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._retentionInDays = config.retentionInDays;
    this._dbSystemSnapshotSummary.internalValue = config.dbSystemSnapshotSummary;
    this._sourceDetails.internalValue = config.sourceDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_size_in_gbs - computed: true, optional: false, required: false
  public get backupSizeInGbs() {
    return this.getNumberAttribute('backup_size_in_gbs');
  }

  // backup_type - computed: true, optional: true, required: false
  private _backupType?: string; 
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }
  public set backupType(value: string) {
    this._backupType = value;
  }
  public resetBackupType() {
    this._backupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTypeInput() {
    return this._backupType;
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // creation_type - computed: true, optional: false, required: false
  public get creationType() {
    return this.getStringAttribute('creation_type');
  }

  // data_storage_size_in_gb - computed: true, optional: false, required: false
  public get dataStorageSizeInGb() {
    return this.getNumberAttribute('data_storage_size_in_gb');
  }

  // db_system_id - computed: true, optional: true, required: false
  private _dbSystemId?: string; 
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }
  public set dbSystemId(value: string) {
    this._dbSystemId = value;
  }
  public resetDbSystemId() {
    this._dbSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSystemIdInput() {
    return this._dbSystemId;
  }

  // db_system_snapshot - computed: true, optional: false, required: false
  private _dbSystemSnapshot = new MysqlMysqlBackupDbSystemSnapshotList(this, "db_system_snapshot", false);
  public get dbSystemSnapshot() {
    return this._dbSystemSnapshot;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // immediate_source_backup_id - computed: true, optional: false, required: false
  public get immediateSourceBackupId() {
    return this.getStringAttribute('immediate_source_backup_id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // mysql_version - computed: true, optional: false, required: false
  public get mysqlVersion() {
    return this.getStringAttribute('mysql_version');
  }

  // original_source_backup_id - computed: true, optional: false, required: false
  public get originalSourceBackupId() {
    return this.getStringAttribute('original_source_backup_id');
  }

  // retention_in_days - computed: true, optional: true, required: false
  private _retentionInDays?: number; 
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }
  public set retentionInDays(value: number) {
    this._retentionInDays = value;
  }
  public resetRetentionInDays() {
    this._retentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInDaysInput() {
    return this._retentionInDays;
  }

  // shape_name - computed: true, optional: false, required: false
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_copy_created - computed: true, optional: false, required: false
  public get timeCopyCreated() {
    return this.getStringAttribute('time_copy_created');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // db_system_snapshot_summary - computed: false, optional: true, required: false
  private _dbSystemSnapshotSummary = new MysqlMysqlBackupDbSystemSnapshotSummaryList(this, "db_system_snapshot_summary", false);
  public get dbSystemSnapshotSummary() {
    return this._dbSystemSnapshotSummary;
  }
  public putDbSystemSnapshotSummary(value: MysqlMysqlBackupDbSystemSnapshotSummary[] | cdktf.IResolvable) {
    this._dbSystemSnapshotSummary.internalValue = value;
  }
  public resetDbSystemSnapshotSummary() {
    this._dbSystemSnapshotSummary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSystemSnapshotSummaryInput() {
    return this._dbSystemSnapshotSummary.internalValue;
  }

  // source_details - computed: false, optional: true, required: false
  private _sourceDetails = new MysqlMysqlBackupSourceDetailsOutputReference(this, "source_details");
  public get sourceDetails() {
    return this._sourceDetails;
  }
  public putSourceDetails(value: MysqlMysqlBackupSourceDetails) {
    this._sourceDetails.internalValue = value;
  }
  public resetSourceDetails() {
    this._sourceDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDetailsInput() {
    return this._sourceDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MysqlMysqlBackupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MysqlMysqlBackupTimeouts) {
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
      backup_type: cdktf.stringToTerraform(this._backupType),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      db_system_id: cdktf.stringToTerraform(this._dbSystemId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      retention_in_days: cdktf.numberToTerraform(this._retentionInDays),
      db_system_snapshot_summary: cdktf.listMapper(mysqlMysqlBackupDbSystemSnapshotSummaryToTerraform, true)(this._dbSystemSnapshotSummary.internalValue),
      source_details: mysqlMysqlBackupSourceDetailsToTerraform(this._sourceDetails.internalValue),
      timeouts: mysqlMysqlBackupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
