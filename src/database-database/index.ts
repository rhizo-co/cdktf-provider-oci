// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_home_id DatabaseDatabase#db_home_id}
  */
  readonly dbHomeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_version DatabaseDatabase#db_version}
  */
  readonly dbVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#id DatabaseDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#key_store_id DatabaseDatabase#key_store_id}
  */
  readonly keyStoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_id DatabaseDatabase#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_migration DatabaseDatabase#kms_key_migration}
  */
  readonly kmsKeyMigration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_rotation DatabaseDatabase#kms_key_rotation}
  */
  readonly kmsKeyRotation?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_version_id DatabaseDatabase#kms_key_version_id}
  */
  readonly kmsKeyVersionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#source DatabaseDatabase#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#vault_id DatabaseDatabase#vault_id}
  */
  readonly vaultId?: string;
  /**
  * database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#database DatabaseDatabase#database}
  */
  readonly database: DatabaseDatabaseDatabase;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#timeouts DatabaseDatabase#timeouts}
  */
  readonly timeouts?: DatabaseDatabaseTimeouts;
}
export interface DatabaseDatabaseConnectionStrings {
}

export function databaseDatabaseConnectionStringsToTerraform(struct?: DatabaseDatabaseConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseDatabaseConnectionStringsToHclTerraform(struct?: DatabaseDatabaseConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseDatabaseConnectionStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseDatabaseConnectionStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDatabaseConnectionStrings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_connection_strings - computed: true, optional: false, required: false
  private _allConnectionStrings = new cdktf.StringMap(this, "all_connection_strings");
  public get allConnectionStrings() {
    return this._allConnectionStrings;
  }

  // cdb_default - computed: true, optional: false, required: false
  public get cdbDefault() {
    return this.getStringAttribute('cdb_default');
  }

  // cdb_ip_default - computed: true, optional: false, required: false
  public get cdbIpDefault() {
    return this.getStringAttribute('cdb_ip_default');
  }
}

export class DatabaseDatabaseConnectionStringsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseDatabaseConnectionStringsOutputReference {
    return new DatabaseDatabaseConnectionStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseDatabaseDatabaseManagementConfig {
}

export function databaseDatabaseDatabaseManagementConfigToTerraform(struct?: DatabaseDatabaseDatabaseManagementConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseDatabaseDatabaseManagementConfigToHclTerraform(struct?: DatabaseDatabaseDatabaseManagementConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseDatabaseDatabaseManagementConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseDatabaseDatabaseManagementConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDatabaseDatabaseManagementConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // management_status - computed: true, optional: false, required: false
  public get managementStatus() {
    return this.getStringAttribute('management_status');
  }

  // management_type - computed: true, optional: false, required: false
  public get managementType() {
    return this.getStringAttribute('management_type');
  }
}

export class DatabaseDatabaseDatabaseManagementConfigList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseDatabaseDatabaseManagementConfigOutputReference {
    return new DatabaseDatabaseDatabaseManagementConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseDatabaseDbBackupConfigBackupDestinationDetails {
}

export function databaseDatabaseDbBackupConfigBackupDestinationDetailsToTerraform(struct?: DatabaseDatabaseDbBackupConfigBackupDestinationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseDatabaseDbBackupConfigBackupDestinationDetailsToHclTerraform(struct?: DatabaseDatabaseDbBackupConfigBackupDestinationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseDatabaseDbBackupConfigBackupDestinationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDatabaseDbBackupConfigBackupDestinationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dbrs_policy_id - computed: true, optional: false, required: false
  public get dbrsPolicyId() {
    return this.getStringAttribute('dbrs_policy_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vpc_user - computed: true, optional: false, required: false
  public get vpcUser() {
    return this.getStringAttribute('vpc_user');
  }
}

export class DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference {
    return new DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseDatabaseDbBackupConfig {
}

export function databaseDatabaseDbBackupConfigToTerraform(struct?: DatabaseDatabaseDbBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseDatabaseDbBackupConfigToHclTerraform(struct?: DatabaseDatabaseDbBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseDatabaseDbBackupConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseDatabaseDbBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDatabaseDbBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_backup_enabled - computed: true, optional: false, required: false
  public get autoBackupEnabled() {
    return this.getBooleanAttribute('auto_backup_enabled');
  }

  // auto_backup_window - computed: true, optional: false, required: false
  public get autoBackupWindow() {
    return this.getStringAttribute('auto_backup_window');
  }

  // auto_full_backup_day - computed: true, optional: false, required: false
  public get autoFullBackupDay() {
    return this.getStringAttribute('auto_full_backup_day');
  }

  // auto_full_backup_window - computed: true, optional: false, required: false
  public get autoFullBackupWindow() {
    return this.getStringAttribute('auto_full_backup_window');
  }

  // backup_deletion_policy - computed: true, optional: false, required: false
  public get backupDeletionPolicy() {
    return this.getStringAttribute('backup_deletion_policy');
  }

  // backup_destination_details - computed: true, optional: false, required: false
  private _backupDestinationDetails = new DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList(this, "backup_destination_details", false);
  public get backupDestinationDetails() {
    return this._backupDestinationDetails;
  }

  // recovery_window_in_days - computed: true, optional: false, required: false
  public get recoveryWindowInDays() {
    return this.getNumberAttribute('recovery_window_in_days');
  }

  // run_immediate_full_backup - computed: true, optional: false, required: false
  public get runImmediateFullBackup() {
    return this.getBooleanAttribute('run_immediate_full_backup');
  }
}

export class DatabaseDatabaseDbBackupConfigList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseDatabaseDbBackupConfigOutputReference {
    return new DatabaseDatabaseDbBackupConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#dbrs_policy_id DatabaseDatabase#dbrs_policy_id}
  */
  readonly dbrsPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#id DatabaseDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#type DatabaseDatabase#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#vpc_user DatabaseDatabase#vpc_user}
  */
  readonly vpcUser?: string;
}

export function databaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsToTerraform(struct?: DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbrs_policy_id: cdktf.stringToTerraform(struct!.dbrsPolicyId),
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
    vpc_user: cdktf.stringToTerraform(struct!.vpcUser),
  }
}


export function databaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsToHclTerraform(struct?: DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbrs_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.dbrsPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_user: {
      value: cdktf.stringToHclTerraform(struct!.vpcUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbrsPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbrsPolicyId = this._dbrsPolicyId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vpcUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcUser = this._vpcUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbrsPolicyId = undefined;
      this._id = undefined;
      this._type = undefined;
      this._vpcUser = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbrsPolicyId = value.dbrsPolicyId;
      this._id = value.id;
      this._type = value.type;
      this._vpcUser = value.vpcUser;
    }
  }

  // dbrs_policy_id - computed: true, optional: true, required: false
  private _dbrsPolicyId?: string; 
  public get dbrsPolicyId() {
    return this.getStringAttribute('dbrs_policy_id');
  }
  public set dbrsPolicyId(value: string) {
    this._dbrsPolicyId = value;
  }
  public resetDbrsPolicyId() {
    this._dbrsPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbrsPolicyIdInput() {
    return this._dbrsPolicyId;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vpc_user - computed: false, optional: true, required: false
  private _vpcUser?: string; 
  public get vpcUser() {
    return this.getStringAttribute('vpc_user');
  }
  public set vpcUser(value: string) {
    this._vpcUser = value;
  }
  public resetVpcUser() {
    this._vpcUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcUserInput() {
    return this._vpcUser;
  }
}

export class DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList extends cdktf.ComplexList {
  public internalValue? : DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails[] | cdktf.IResolvable

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
  public get(index: number): DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference {
    return new DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseDatabaseDatabaseDbBackupConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#auto_backup_enabled DatabaseDatabase#auto_backup_enabled}
  */
  readonly autoBackupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#auto_backup_window DatabaseDatabase#auto_backup_window}
  */
  readonly autoBackupWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#auto_full_backup_day DatabaseDatabase#auto_full_backup_day}
  */
  readonly autoFullBackupDay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#auto_full_backup_window DatabaseDatabase#auto_full_backup_window}
  */
  readonly autoFullBackupWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#backup_deletion_policy DatabaseDatabase#backup_deletion_policy}
  */
  readonly backupDeletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#recovery_window_in_days DatabaseDatabase#recovery_window_in_days}
  */
  readonly recoveryWindowInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#run_immediate_full_backup DatabaseDatabase#run_immediate_full_backup}
  */
  readonly runImmediateFullBackup?: boolean | cdktf.IResolvable;
  /**
  * backup_destination_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#backup_destination_details DatabaseDatabase#backup_destination_details}
  */
  readonly backupDestinationDetails?: DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails[] | cdktf.IResolvable;
}

export function databaseDatabaseDatabaseDbBackupConfigToTerraform(struct?: DatabaseDatabaseDatabaseDbBackupConfigOutputReference | DatabaseDatabaseDatabaseDbBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_backup_enabled: cdktf.booleanToTerraform(struct!.autoBackupEnabled),
    auto_backup_window: cdktf.stringToTerraform(struct!.autoBackupWindow),
    auto_full_backup_day: cdktf.stringToTerraform(struct!.autoFullBackupDay),
    auto_full_backup_window: cdktf.stringToTerraform(struct!.autoFullBackupWindow),
    backup_deletion_policy: cdktf.stringToTerraform(struct!.backupDeletionPolicy),
    recovery_window_in_days: cdktf.numberToTerraform(struct!.recoveryWindowInDays),
    run_immediate_full_backup: cdktf.booleanToTerraform(struct!.runImmediateFullBackup),
    backup_destination_details: cdktf.listMapper(databaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsToTerraform, true)(struct!.backupDestinationDetails),
  }
}


export function databaseDatabaseDatabaseDbBackupConfigToHclTerraform(struct?: DatabaseDatabaseDatabaseDbBackupConfigOutputReference | DatabaseDatabaseDatabaseDbBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_backup_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.autoBackupEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_backup_window: {
      value: cdktf.stringToHclTerraform(struct!.autoBackupWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_full_backup_day: {
      value: cdktf.stringToHclTerraform(struct!.autoFullBackupDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_full_backup_window: {
      value: cdktf.stringToHclTerraform(struct!.autoFullBackupWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_deletion_policy: {
      value: cdktf.stringToHclTerraform(struct!.backupDeletionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recovery_window_in_days: {
      value: cdktf.numberToHclTerraform(struct!.recoveryWindowInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_immediate_full_backup: {
      value: cdktf.booleanToHclTerraform(struct!.runImmediateFullBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backup_destination_details: {
      value: cdktf.listMapperHcl(databaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsToHclTerraform, true)(struct!.backupDestinationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseDatabaseDatabaseDbBackupConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseDatabaseDatabaseDbBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoBackupEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoBackupEnabled = this._autoBackupEnabled;
    }
    if (this._autoBackupWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoBackupWindow = this._autoBackupWindow;
    }
    if (this._autoFullBackupDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoFullBackupDay = this._autoFullBackupDay;
    }
    if (this._autoFullBackupWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoFullBackupWindow = this._autoFullBackupWindow;
    }
    if (this._backupDeletionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupDeletionPolicy = this._backupDeletionPolicy;
    }
    if (this._recoveryWindowInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryWindowInDays = this._recoveryWindowInDays;
    }
    if (this._runImmediateFullBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runImmediateFullBackup = this._runImmediateFullBackup;
    }
    if (this._backupDestinationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupDestinationDetails = this._backupDestinationDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDatabaseDatabaseDbBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoBackupEnabled = undefined;
      this._autoBackupWindow = undefined;
      this._autoFullBackupDay = undefined;
      this._autoFullBackupWindow = undefined;
      this._backupDeletionPolicy = undefined;
      this._recoveryWindowInDays = undefined;
      this._runImmediateFullBackup = undefined;
      this._backupDestinationDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoBackupEnabled = value.autoBackupEnabled;
      this._autoBackupWindow = value.autoBackupWindow;
      this._autoFullBackupDay = value.autoFullBackupDay;
      this._autoFullBackupWindow = value.autoFullBackupWindow;
      this._backupDeletionPolicy = value.backupDeletionPolicy;
      this._recoveryWindowInDays = value.recoveryWindowInDays;
      this._runImmediateFullBackup = value.runImmediateFullBackup;
      this._backupDestinationDetails.internalValue = value.backupDestinationDetails;
    }
  }

  // auto_backup_enabled - computed: true, optional: true, required: false
  private _autoBackupEnabled?: boolean | cdktf.IResolvable; 
  public get autoBackupEnabled() {
    return this.getBooleanAttribute('auto_backup_enabled');
  }
  public set autoBackupEnabled(value: boolean | cdktf.IResolvable) {
    this._autoBackupEnabled = value;
  }
  public resetAutoBackupEnabled() {
    this._autoBackupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBackupEnabledInput() {
    return this._autoBackupEnabled;
  }

  // auto_backup_window - computed: true, optional: true, required: false
  private _autoBackupWindow?: string; 
  public get autoBackupWindow() {
    return this.getStringAttribute('auto_backup_window');
  }
  public set autoBackupWindow(value: string) {
    this._autoBackupWindow = value;
  }
  public resetAutoBackupWindow() {
    this._autoBackupWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBackupWindowInput() {
    return this._autoBackupWindow;
  }

  // auto_full_backup_day - computed: false, optional: true, required: false
  private _autoFullBackupDay?: string; 
  public get autoFullBackupDay() {
    return this.getStringAttribute('auto_full_backup_day');
  }
  public set autoFullBackupDay(value: string) {
    this._autoFullBackupDay = value;
  }
  public resetAutoFullBackupDay() {
    this._autoFullBackupDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFullBackupDayInput() {
    return this._autoFullBackupDay;
  }

  // auto_full_backup_window - computed: true, optional: true, required: false
  private _autoFullBackupWindow?: string; 
  public get autoFullBackupWindow() {
    return this.getStringAttribute('auto_full_backup_window');
  }
  public set autoFullBackupWindow(value: string) {
    this._autoFullBackupWindow = value;
  }
  public resetAutoFullBackupWindow() {
    this._autoFullBackupWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFullBackupWindowInput() {
    return this._autoFullBackupWindow;
  }

  // backup_deletion_policy - computed: true, optional: true, required: false
  private _backupDeletionPolicy?: string; 
  public get backupDeletionPolicy() {
    return this.getStringAttribute('backup_deletion_policy');
  }
  public set backupDeletionPolicy(value: string) {
    this._backupDeletionPolicy = value;
  }
  public resetBackupDeletionPolicy() {
    this._backupDeletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDeletionPolicyInput() {
    return this._backupDeletionPolicy;
  }

  // recovery_window_in_days - computed: true, optional: true, required: false
  private _recoveryWindowInDays?: number; 
  public get recoveryWindowInDays() {
    return this.getNumberAttribute('recovery_window_in_days');
  }
  public set recoveryWindowInDays(value: number) {
    this._recoveryWindowInDays = value;
  }
  public resetRecoveryWindowInDays() {
    this._recoveryWindowInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryWindowInDaysInput() {
    return this._recoveryWindowInDays;
  }

  // run_immediate_full_backup - computed: true, optional: true, required: false
  private _runImmediateFullBackup?: boolean | cdktf.IResolvable; 
  public get runImmediateFullBackup() {
    return this.getBooleanAttribute('run_immediate_full_backup');
  }
  public set runImmediateFullBackup(value: boolean | cdktf.IResolvable) {
    this._runImmediateFullBackup = value;
  }
  public resetRunImmediateFullBackup() {
    this._runImmediateFullBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runImmediateFullBackupInput() {
    return this._runImmediateFullBackup;
  }

  // backup_destination_details - computed: false, optional: true, required: false
  private _backupDestinationDetails = new DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList(this, "backup_destination_details", false);
  public get backupDestinationDetails() {
    return this._backupDestinationDetails;
  }
  public putBackupDestinationDetails(value: DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails[] | cdktf.IResolvable) {
    this._backupDestinationDetails.internalValue = value;
  }
  public resetBackupDestinationDetails() {
    this._backupDestinationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDestinationDetailsInput() {
    return this._backupDestinationDetails.internalValue;
  }
}
export interface DatabaseDatabaseDatabase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#admin_password DatabaseDatabase#admin_password}
  */
  readonly adminPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#backup_id DatabaseDatabase#backup_id}
  */
  readonly backupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#backup_tde_password DatabaseDatabase#backup_tde_password}
  */
  readonly backupTdePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#character_set DatabaseDatabase#character_set}
  */
  readonly characterSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#database_software_image_id DatabaseDatabase#database_software_image_id}
  */
  readonly databaseSoftwareImageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_name DatabaseDatabase#db_name}
  */
  readonly dbName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_unique_name DatabaseDatabase#db_unique_name}
  */
  readonly dbUniqueName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_workload DatabaseDatabase#db_workload}
  */
  readonly dbWorkload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#defined_tags DatabaseDatabase#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#freeform_tags DatabaseDatabase#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_id DatabaseDatabase#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_version_id DatabaseDatabase#kms_key_version_id}
  */
  readonly kmsKeyVersionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#ncharacter_set DatabaseDatabase#ncharacter_set}
  */
  readonly ncharacterSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#pdb_name DatabaseDatabase#pdb_name}
  */
  readonly pdbName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#pluggable_databases DatabaseDatabase#pluggable_databases}
  */
  readonly pluggableDatabases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#sid_prefix DatabaseDatabase#sid_prefix}
  */
  readonly sidPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#tde_wallet_password DatabaseDatabase#tde_wallet_password}
  */
  readonly tdeWalletPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#vault_id DatabaseDatabase#vault_id}
  */
  readonly vaultId?: string;
  /**
  * db_backup_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_backup_config DatabaseDatabase#db_backup_config}
  */
  readonly dbBackupConfig?: DatabaseDatabaseDatabaseDbBackupConfig;
}

export function databaseDatabaseDatabaseToTerraform(struct?: DatabaseDatabaseDatabaseOutputReference | DatabaseDatabaseDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    backup_id: cdktf.stringToTerraform(struct!.backupId),
    backup_tde_password: cdktf.stringToTerraform(struct!.backupTdePassword),
    character_set: cdktf.stringToTerraform(struct!.characterSet),
    database_software_image_id: cdktf.stringToTerraform(struct!.databaseSoftwareImageId),
    db_name: cdktf.stringToTerraform(struct!.dbName),
    db_unique_name: cdktf.stringToTerraform(struct!.dbUniqueName),
    db_workload: cdktf.stringToTerraform(struct!.dbWorkload),
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    kms_key_version_id: cdktf.stringToTerraform(struct!.kmsKeyVersionId),
    ncharacter_set: cdktf.stringToTerraform(struct!.ncharacterSet),
    pdb_name: cdktf.stringToTerraform(struct!.pdbName),
    pluggable_databases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pluggableDatabases),
    sid_prefix: cdktf.stringToTerraform(struct!.sidPrefix),
    tde_wallet_password: cdktf.stringToTerraform(struct!.tdeWalletPassword),
    vault_id: cdktf.stringToTerraform(struct!.vaultId),
    db_backup_config: databaseDatabaseDatabaseDbBackupConfigToTerraform(struct!.dbBackupConfig),
  }
}


export function databaseDatabaseDatabaseToHclTerraform(struct?: DatabaseDatabaseDatabaseOutputReference | DatabaseDatabaseDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_id: {
      value: cdktf.stringToHclTerraform(struct!.backupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_tde_password: {
      value: cdktf.stringToHclTerraform(struct!.backupTdePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    character_set: {
      value: cdktf.stringToHclTerraform(struct!.characterSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_software_image_id: {
      value: cdktf.stringToHclTerraform(struct!.databaseSoftwareImageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_name: {
      value: cdktf.stringToHclTerraform(struct!.dbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_unique_name: {
      value: cdktf.stringToHclTerraform(struct!.dbUniqueName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_workload: {
      value: cdktf.stringToHclTerraform(struct!.dbWorkload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    defined_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    freeform_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.freeformTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_version_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyVersionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ncharacter_set: {
      value: cdktf.stringToHclTerraform(struct!.ncharacterSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdb_name: {
      value: cdktf.stringToHclTerraform(struct!.pdbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pluggable_databases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pluggableDatabases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sid_prefix: {
      value: cdktf.stringToHclTerraform(struct!.sidPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tde_wallet_password: {
      value: cdktf.stringToHclTerraform(struct!.tdeWalletPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_id: {
      value: cdktf.stringToHclTerraform(struct!.vaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_backup_config: {
      value: databaseDatabaseDatabaseDbBackupConfigToHclTerraform(struct!.dbBackupConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseDatabaseDatabaseDbBackupConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseDatabaseDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseDatabaseDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._backupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupId = this._backupId;
    }
    if (this._backupTdePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupTdePassword = this._backupTdePassword;
    }
    if (this._characterSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.characterSet = this._characterSet;
    }
    if (this._databaseSoftwareImageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseSoftwareImageId = this._databaseSoftwareImageId;
    }
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    if (this._dbUniqueName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbUniqueName = this._dbUniqueName;
    }
    if (this._dbWorkload !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbWorkload = this._dbWorkload;
    }
    if (this._definedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags;
    }
    if (this._freeformTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._kmsKeyVersionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyVersionId = this._kmsKeyVersionId;
    }
    if (this._ncharacterSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ncharacterSet = this._ncharacterSet;
    }
    if (this._pdbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdbName = this._pdbName;
    }
    if (this._pluggableDatabases !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluggableDatabases = this._pluggableDatabases;
    }
    if (this._sidPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.sidPrefix = this._sidPrefix;
    }
    if (this._tdeWalletPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.tdeWalletPassword = this._tdeWalletPassword;
    }
    if (this._vaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultId = this._vaultId;
    }
    if (this._dbBackupConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbBackupConfig = this._dbBackupConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDatabaseDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminPassword = undefined;
      this._backupId = undefined;
      this._backupTdePassword = undefined;
      this._characterSet = undefined;
      this._databaseSoftwareImageId = undefined;
      this._dbName = undefined;
      this._dbUniqueName = undefined;
      this._dbWorkload = undefined;
      this._definedTags = undefined;
      this._freeformTags = undefined;
      this._kmsKeyId = undefined;
      this._kmsKeyVersionId = undefined;
      this._ncharacterSet = undefined;
      this._pdbName = undefined;
      this._pluggableDatabases = undefined;
      this._sidPrefix = undefined;
      this._tdeWalletPassword = undefined;
      this._vaultId = undefined;
      this._dbBackupConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminPassword = value.adminPassword;
      this._backupId = value.backupId;
      this._backupTdePassword = value.backupTdePassword;
      this._characterSet = value.characterSet;
      this._databaseSoftwareImageId = value.databaseSoftwareImageId;
      this._dbName = value.dbName;
      this._dbUniqueName = value.dbUniqueName;
      this._dbWorkload = value.dbWorkload;
      this._definedTags = value.definedTags;
      this._freeformTags = value.freeformTags;
      this._kmsKeyId = value.kmsKeyId;
      this._kmsKeyVersionId = value.kmsKeyVersionId;
      this._ncharacterSet = value.ncharacterSet;
      this._pdbName = value.pdbName;
      this._pluggableDatabases = value.pluggableDatabases;
      this._sidPrefix = value.sidPrefix;
      this._tdeWalletPassword = value.tdeWalletPassword;
      this._vaultId = value.vaultId;
      this._dbBackupConfig.internalValue = value.dbBackupConfig;
    }
  }

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // backup_id - computed: false, optional: true, required: false
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  public resetBackupId() {
    this._backupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // backup_tde_password - computed: false, optional: true, required: false
  private _backupTdePassword?: string; 
  public get backupTdePassword() {
    return this.getStringAttribute('backup_tde_password');
  }
  public set backupTdePassword(value: string) {
    this._backupTdePassword = value;
  }
  public resetBackupTdePassword() {
    this._backupTdePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTdePasswordInput() {
    return this._backupTdePassword;
  }

  // character_set - computed: true, optional: true, required: false
  private _characterSet?: string; 
  public get characterSet() {
    return this.getStringAttribute('character_set');
  }
  public set characterSet(value: string) {
    this._characterSet = value;
  }
  public resetCharacterSet() {
    this._characterSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterSetInput() {
    return this._characterSet;
  }

  // database_software_image_id - computed: true, optional: true, required: false
  private _databaseSoftwareImageId?: string; 
  public get databaseSoftwareImageId() {
    return this.getStringAttribute('database_software_image_id');
  }
  public set databaseSoftwareImageId(value: string) {
    this._databaseSoftwareImageId = value;
  }
  public resetDatabaseSoftwareImageId() {
    this._databaseSoftwareImageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseSoftwareImageIdInput() {
    return this._databaseSoftwareImageId;
  }

  // db_name - computed: false, optional: false, required: true
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // db_unique_name - computed: true, optional: true, required: false
  private _dbUniqueName?: string; 
  public get dbUniqueName() {
    return this.getStringAttribute('db_unique_name');
  }
  public set dbUniqueName(value: string) {
    this._dbUniqueName = value;
  }
  public resetDbUniqueName() {
    this._dbUniqueName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbUniqueNameInput() {
    return this._dbUniqueName;
  }

  // db_workload - computed: true, optional: true, required: false
  private _dbWorkload?: string; 
  public get dbWorkload() {
    return this.getStringAttribute('db_workload');
  }
  public set dbWorkload(value: string) {
    this._dbWorkload = value;
  }
  public resetDbWorkload() {
    this._dbWorkload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbWorkloadInput() {
    return this._dbWorkload;
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

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // kms_key_version_id - computed: true, optional: true, required: false
  private _kmsKeyVersionId?: string; 
  public get kmsKeyVersionId() {
    return this.getStringAttribute('kms_key_version_id');
  }
  public set kmsKeyVersionId(value: string) {
    this._kmsKeyVersionId = value;
  }
  public resetKmsKeyVersionId() {
    this._kmsKeyVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyVersionIdInput() {
    return this._kmsKeyVersionId;
  }

  // ncharacter_set - computed: true, optional: true, required: false
  private _ncharacterSet?: string; 
  public get ncharacterSet() {
    return this.getStringAttribute('ncharacter_set');
  }
  public set ncharacterSet(value: string) {
    this._ncharacterSet = value;
  }
  public resetNcharacterSet() {
    this._ncharacterSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ncharacterSetInput() {
    return this._ncharacterSet;
  }

  // pdb_name - computed: true, optional: true, required: false
  private _pdbName?: string; 
  public get pdbName() {
    return this.getStringAttribute('pdb_name');
  }
  public set pdbName(value: string) {
    this._pdbName = value;
  }
  public resetPdbName() {
    this._pdbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdbNameInput() {
    return this._pdbName;
  }

  // pluggable_databases - computed: true, optional: true, required: false
  private _pluggableDatabases?: string[]; 
  public get pluggableDatabases() {
    return this.getListAttribute('pluggable_databases');
  }
  public set pluggableDatabases(value: string[]) {
    this._pluggableDatabases = value;
  }
  public resetPluggableDatabases() {
    this._pluggableDatabases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluggableDatabasesInput() {
    return this._pluggableDatabases;
  }

  // sid_prefix - computed: true, optional: true, required: false
  private _sidPrefix?: string; 
  public get sidPrefix() {
    return this.getStringAttribute('sid_prefix');
  }
  public set sidPrefix(value: string) {
    this._sidPrefix = value;
  }
  public resetSidPrefix() {
    this._sidPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidPrefixInput() {
    return this._sidPrefix;
  }

  // tde_wallet_password - computed: true, optional: true, required: false
  private _tdeWalletPassword?: string; 
  public get tdeWalletPassword() {
    return this.getStringAttribute('tde_wallet_password');
  }
  public set tdeWalletPassword(value: string) {
    this._tdeWalletPassword = value;
  }
  public resetTdeWalletPassword() {
    this._tdeWalletPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdeWalletPasswordInput() {
    return this._tdeWalletPassword;
  }

  // vault_id - computed: true, optional: true, required: false
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  public resetVaultId() {
    this._vaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }

  // db_backup_config - computed: false, optional: true, required: false
  private _dbBackupConfig = new DatabaseDatabaseDatabaseDbBackupConfigOutputReference(this, "db_backup_config");
  public get dbBackupConfig() {
    return this._dbBackupConfig;
  }
  public putDbBackupConfig(value: DatabaseDatabaseDatabaseDbBackupConfig) {
    this._dbBackupConfig.internalValue = value;
  }
  public resetDbBackupConfig() {
    this._dbBackupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbBackupConfigInput() {
    return this._dbBackupConfig.internalValue;
  }
}
export interface DatabaseDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#create DatabaseDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#delete DatabaseDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#update DatabaseDatabase#update}
  */
  readonly update?: string;
}

export function databaseDatabaseTimeoutsToTerraform(struct?: DatabaseDatabaseTimeouts | cdktf.IResolvable): any {
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


export function databaseDatabaseTimeoutsToHclTerraform(struct?: DatabaseDatabaseTimeouts | cdktf.IResolvable): any {
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

export class DatabaseDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseDatabaseTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseDatabaseTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database oci_database_database}
*/
export class DatabaseDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseDatabase to import
  * @param importFromId The id of the existing DatabaseDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database oci_database_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_database',
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
    this._dbHomeId = config.dbHomeId;
    this._dbVersion = config.dbVersion;
    this._id = config.id;
    this._keyStoreId = config.keyStoreId;
    this._kmsKeyId = config.kmsKeyId;
    this._kmsKeyMigration = config.kmsKeyMigration;
    this._kmsKeyRotation = config.kmsKeyRotation;
    this._kmsKeyVersionId = config.kmsKeyVersionId;
    this._source = config.source;
    this._vaultId = config.vaultId;
    this._database.internalValue = config.database;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // character_set - computed: true, optional: false, required: false
  public get characterSet() {
    return this.getStringAttribute('character_set');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connection_strings - computed: true, optional: false, required: false
  private _connectionStrings = new DatabaseDatabaseConnectionStringsList(this, "connection_strings", false);
  public get connectionStrings() {
    return this._connectionStrings;
  }

  // database_management_config - computed: true, optional: false, required: false
  private _databaseManagementConfig = new DatabaseDatabaseDatabaseManagementConfigList(this, "database_management_config", false);
  public get databaseManagementConfig() {
    return this._databaseManagementConfig;
  }

  // database_software_image_id - computed: true, optional: false, required: false
  public get databaseSoftwareImageId() {
    return this.getStringAttribute('database_software_image_id');
  }

  // db_backup_config - computed: true, optional: false, required: false
  private _dbBackupConfig = new DatabaseDatabaseDbBackupConfigList(this, "db_backup_config", false);
  public get dbBackupConfig() {
    return this._dbBackupConfig;
  }

  // db_home_id - computed: false, optional: false, required: true
  private _dbHomeId?: string; 
  public get dbHomeId() {
    return this.getStringAttribute('db_home_id');
  }
  public set dbHomeId(value: string) {
    this._dbHomeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbHomeIdInput() {
    return this._dbHomeId;
  }

  // db_name - computed: true, optional: false, required: false
  public get dbName() {
    return this.getStringAttribute('db_name');
  }

  // db_system_id - computed: true, optional: false, required: false
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }

  // db_unique_name - computed: true, optional: false, required: false
  public get dbUniqueName() {
    return this.getStringAttribute('db_unique_name');
  }

  // db_version - computed: true, optional: true, required: false
  private _dbVersion?: string; 
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }
  public set dbVersion(value: string) {
    this._dbVersion = value;
  }
  public resetDbVersion() {
    this._dbVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbVersionInput() {
    return this._dbVersion;
  }

  // db_workload - computed: true, optional: false, required: false
  public get dbWorkload() {
    return this.getStringAttribute('db_workload');
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

  // is_cdb - computed: true, optional: false, required: false
  public get isCdb() {
    return this.getBooleanAttribute('is_cdb');
  }

  // key_store_id - computed: true, optional: true, required: false
  private _keyStoreId?: string; 
  public get keyStoreId() {
    return this.getStringAttribute('key_store_id');
  }
  public set keyStoreId(value: string) {
    this._keyStoreId = value;
  }
  public resetKeyStoreId() {
    this._keyStoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStoreIdInput() {
    return this._keyStoreId;
  }

  // key_store_wallet_name - computed: true, optional: false, required: false
  public get keyStoreWalletName() {
    return this.getStringAttribute('key_store_wallet_name');
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // kms_key_migration - computed: false, optional: true, required: false
  private _kmsKeyMigration?: boolean | cdktf.IResolvable; 
  public get kmsKeyMigration() {
    return this.getBooleanAttribute('kms_key_migration');
  }
  public set kmsKeyMigration(value: boolean | cdktf.IResolvable) {
    this._kmsKeyMigration = value;
  }
  public resetKmsKeyMigration() {
    this._kmsKeyMigration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyMigrationInput() {
    return this._kmsKeyMigration;
  }

  // kms_key_rotation - computed: false, optional: true, required: false
  private _kmsKeyRotation?: number; 
  public get kmsKeyRotation() {
    return this.getNumberAttribute('kms_key_rotation');
  }
  public set kmsKeyRotation(value: number) {
    this._kmsKeyRotation = value;
  }
  public resetKmsKeyRotation() {
    this._kmsKeyRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyRotationInput() {
    return this._kmsKeyRotation;
  }

  // kms_key_version_id - computed: false, optional: true, required: false
  private _kmsKeyVersionId?: string; 
  public get kmsKeyVersionId() {
    return this.getStringAttribute('kms_key_version_id');
  }
  public set kmsKeyVersionId(value: string) {
    this._kmsKeyVersionId = value;
  }
  public resetKmsKeyVersionId() {
    this._kmsKeyVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyVersionIdInput() {
    return this._kmsKeyVersionId;
  }

  // last_backup_duration_in_seconds - computed: true, optional: false, required: false
  public get lastBackupDurationInSeconds() {
    return this.getNumberAttribute('last_backup_duration_in_seconds');
  }

  // last_backup_timestamp - computed: true, optional: false, required: false
  public get lastBackupTimestamp() {
    return this.getStringAttribute('last_backup_timestamp');
  }

  // last_failed_backup_timestamp - computed: true, optional: false, required: false
  public get lastFailedBackupTimestamp() {
    return this.getStringAttribute('last_failed_backup_timestamp');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // ncharacter_set - computed: true, optional: false, required: false
  public get ncharacterSet() {
    return this.getStringAttribute('ncharacter_set');
  }

  // pdb_name - computed: true, optional: false, required: false
  public get pdbName() {
    return this.getStringAttribute('pdb_name');
  }

  // sid_prefix - computed: true, optional: false, required: false
  public get sidPrefix() {
    return this.getStringAttribute('sid_prefix');
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_database_point_in_time_recovery_timestamp - computed: true, optional: false, required: false
  public get sourceDatabasePointInTimeRecoveryTimestamp() {
    return this.getStringAttribute('source_database_point_in_time_recovery_timestamp');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // vault_id - computed: true, optional: true, required: false
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  public resetVaultId() {
    this._vaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }

  // vm_cluster_id - computed: true, optional: false, required: false
  public get vmClusterId() {
    return this.getStringAttribute('vm_cluster_id');
  }

  // database - computed: false, optional: false, required: true
  private _database = new DatabaseDatabaseDatabaseOutputReference(this, "database");
  public get database() {
    return this._database;
  }
  public putDatabase(value: DatabaseDatabaseDatabase) {
    this._database.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseDatabaseTimeouts) {
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
      db_home_id: cdktf.stringToTerraform(this._dbHomeId),
      db_version: cdktf.stringToTerraform(this._dbVersion),
      id: cdktf.stringToTerraform(this._id),
      key_store_id: cdktf.stringToTerraform(this._keyStoreId),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      kms_key_migration: cdktf.booleanToTerraform(this._kmsKeyMigration),
      kms_key_rotation: cdktf.numberToTerraform(this._kmsKeyRotation),
      kms_key_version_id: cdktf.stringToTerraform(this._kmsKeyVersionId),
      source: cdktf.stringToTerraform(this._source),
      vault_id: cdktf.stringToTerraform(this._vaultId),
      database: databaseDatabaseDatabaseToTerraform(this._database.internalValue),
      timeouts: databaseDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_home_id: {
        value: cdktf.stringToHclTerraform(this._dbHomeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_version: {
        value: cdktf.stringToHclTerraform(this._dbVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_store_id: {
        value: cdktf.stringToHclTerraform(this._keyStoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_migration: {
        value: cdktf.booleanToHclTerraform(this._kmsKeyMigration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kms_key_rotation: {
        value: cdktf.numberToHclTerraform(this._kmsKeyRotation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kms_key_version_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyVersionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_id: {
        value: cdktf.stringToHclTerraform(this._vaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database: {
        value: databaseDatabaseDatabaseToHclTerraform(this._database.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseDatabaseDatabaseList",
      },
      timeouts: {
        value: databaseDatabaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseDatabaseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
