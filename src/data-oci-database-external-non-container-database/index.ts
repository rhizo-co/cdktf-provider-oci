// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseExternalNonContainerDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_database#external_non_container_database_id DataOciDatabaseExternalNonContainerDatabase#external_non_container_database_id}
  */
  readonly externalNonContainerDatabaseId: string;
}
export interface DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfig {
}

export function dataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigToTerraform(struct?: DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_management_connection_id - computed: true, optional: false, required: false
  public get databaseManagementConnectionId() {
    return this.getStringAttribute('database_management_connection_id');
  }

  // database_management_status - computed: true, optional: false, required: false
  public get databaseManagementStatus() {
    return this.getStringAttribute('database_management_status');
  }

  // license_model - computed: true, optional: false, required: false
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }
}

export class DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference {
    return new DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfig {
}

export function dataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigToTerraform(struct?: DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operations_insights_connector_id - computed: true, optional: false, required: false
  public get operationsInsightsConnectorId() {
    return this.getStringAttribute('operations_insights_connector_id');
  }

  // operations_insights_status - computed: true, optional: false, required: false
  public get operationsInsightsStatus() {
    return this.getStringAttribute('operations_insights_status');
  }
}

export class DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference {
    return new DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfig {
}

export function dataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigToTerraform(struct?: DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // stack_monitoring_connector_id - computed: true, optional: false, required: false
  public get stackMonitoringConnectorId() {
    return this.getStringAttribute('stack_monitoring_connector_id');
  }

  // stack_monitoring_status - computed: true, optional: false, required: false
  public get stackMonitoringStatus() {
    return this.getStringAttribute('stack_monitoring_status');
  }
}

export class DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference {
    return new DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_database oci_database_external_non_container_database}
*/
export class DataOciDatabaseExternalNonContainerDatabase extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_external_non_container_database";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_database oci_database_external_non_container_database} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseExternalNonContainerDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseExternalNonContainerDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_external_non_container_database',
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
    this._externalNonContainerDatabaseId = config.externalNonContainerDatabaseId;
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

  // database_configuration - computed: true, optional: false, required: false
  public get databaseConfiguration() {
    return this.getStringAttribute('database_configuration');
  }

  // database_edition - computed: true, optional: false, required: false
  public get databaseEdition() {
    return this.getStringAttribute('database_edition');
  }

  // database_management_config - computed: true, optional: false, required: false
  private _databaseManagementConfig = new DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList(this, "database_management_config", false);
  public get databaseManagementConfig() {
    return this._databaseManagementConfig;
  }

  // database_version - computed: true, optional: false, required: false
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
  }

  // db_id - computed: true, optional: false, required: false
  public get dbId() {
    return this.getStringAttribute('db_id');
  }

  // db_packs - computed: true, optional: false, required: false
  public get dbPacks() {
    return this.getStringAttribute('db_packs');
  }

  // db_unique_name - computed: true, optional: false, required: false
  public get dbUniqueName() {
    return this.getStringAttribute('db_unique_name');
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

  // external_non_container_database_id - computed: false, optional: false, required: true
  private _externalNonContainerDatabaseId?: string; 
  public get externalNonContainerDatabaseId() {
    return this.getStringAttribute('external_non_container_database_id');
  }
  public set externalNonContainerDatabaseId(value: string) {
    this._externalNonContainerDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNonContainerDatabaseIdInput() {
    return this._externalNonContainerDatabaseId;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // ncharacter_set - computed: true, optional: false, required: false
  public get ncharacterSet() {
    return this.getStringAttribute('ncharacter_set');
  }

  // operations_insights_config - computed: true, optional: false, required: false
  private _operationsInsightsConfig = new DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList(this, "operations_insights_config", false);
  public get operationsInsightsConfig() {
    return this._operationsInsightsConfig;
  }

  // stack_monitoring_config - computed: true, optional: false, required: false
  private _stackMonitoringConfig = new DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList(this, "stack_monitoring_config", false);
  public get stackMonitoringConfig() {
    return this._stackMonitoringConfig;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_non_container_database_id: cdktf.stringToTerraform(this._externalNonContainerDatabaseId),
    };
  }
}
