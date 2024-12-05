# `databaseAutonomousDatabase` Submodule <a name="`databaseAutonomousDatabase` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousDatabase <a name="DatabaseAutonomousDatabase" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database oci_database_autonomous_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabase;

DatabaseAutonomousDatabase.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
    .dbName(java.lang.String)
//  .adminPassword(java.lang.String)
//  .arePrimaryWhitelistedIpsUsed(java.lang.Boolean)
//  .arePrimaryWhitelistedIpsUsed(IResolvable)
//  .autonomousContainerDatabaseId(java.lang.String)
//  .autonomousDatabaseBackupId(java.lang.String)
//  .autonomousDatabaseId(java.lang.String)
//  .autonomousMaintenanceScheduleType(java.lang.String)
//  .autoRefreshFrequencyInSeconds(java.lang.Number)
//  .autoRefreshPointLagInSeconds(java.lang.Number)
//  .backupRetentionPeriodInDays(java.lang.Number)
//  .byolComputeCountLimit(java.lang.Number)
//  .characterSet(java.lang.String)
//  .cloneType(java.lang.String)
//  .computeCount(java.lang.Number)
//  .computeModel(java.lang.String)
//  .cpuCoreCount(java.lang.Number)
//  .customerContacts(IResolvable)
//  .customerContacts(java.util.List<DatabaseAutonomousDatabaseCustomerContacts>)
//  .databaseEdition(java.lang.String)
//  .databaseManagementStatus(java.lang.String)
//  .dataSafeStatus(java.lang.String)
//  .dataStorageSizeInGb(java.lang.Number)
//  .dataStorageSizeInTbs(java.lang.Number)
//  .dbToolsDetails(IResolvable)
//  .dbToolsDetails(java.util.List<DatabaseAutonomousDatabaseDbToolsDetails>)
//  .dbVersion(java.lang.String)
//  .dbWorkload(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .disasterRecoveryType(java.lang.String)
//  .displayName(java.lang.String)
//  .encryptionKey(DatabaseAutonomousDatabaseEncryptionKey)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .inMemoryPercentage(java.lang.Number)
//  .isAccessControlEnabled(java.lang.Boolean)
//  .isAccessControlEnabled(IResolvable)
//  .isAutoScalingEnabled(java.lang.Boolean)
//  .isAutoScalingEnabled(IResolvable)
//  .isAutoScalingForStorageEnabled(java.lang.Boolean)
//  .isAutoScalingForStorageEnabled(IResolvable)
//  .isDataGuardEnabled(java.lang.Boolean)
//  .isDataGuardEnabled(IResolvable)
//  .isDedicated(java.lang.Boolean)
//  .isDedicated(IResolvable)
//  .isDevTier(java.lang.Boolean)
//  .isDevTier(IResolvable)
//  .isFreeTier(java.lang.Boolean)
//  .isFreeTier(IResolvable)
//  .isLocalDataGuardEnabled(java.lang.Boolean)
//  .isLocalDataGuardEnabled(IResolvable)
//  .isMtlsConnectionRequired(java.lang.Boolean)
//  .isMtlsConnectionRequired(IResolvable)
//  .isPreviewVersionWithServiceTermsAccepted(java.lang.Boolean)
//  .isPreviewVersionWithServiceTermsAccepted(IResolvable)
//  .isRefreshableClone(java.lang.Boolean)
//  .isRefreshableClone(IResolvable)
//  .isReplicateAutomaticBackups(java.lang.Boolean)
//  .isReplicateAutomaticBackups(IResolvable)
//  .isShrinkOnly(java.lang.Boolean)
//  .isShrinkOnly(IResolvable)
//  .kmsKeyId(java.lang.String)
//  .licenseModel(java.lang.String)
//  .localAdgAutoFailoverMaxDataLossLimit(java.lang.Number)
//  .longTermBackupSchedule(IResolvable)
//  .longTermBackupSchedule(java.util.List<DatabaseAutonomousDatabaseLongTermBackupSchedule>)
//  .maxCpuCoreCount(java.lang.Number)
//  .ncharacterSet(java.lang.String)
//  .nsgIds(java.util.List<java.lang.String>)
//  .ocpuCount(java.lang.Number)
//  .openMode(java.lang.String)
//  .operationsInsightsStatus(java.lang.String)
//  .permissionLevel(java.lang.String)
//  .privateEndpointIp(java.lang.String)
//  .privateEndpointLabel(java.lang.String)
//  .refreshableMode(java.lang.String)
//  .remoteDisasterRecoveryType(java.lang.String)
//  .resourcePoolLeaderId(java.lang.String)
//  .resourcePoolSummary(DatabaseAutonomousDatabaseResourcePoolSummary)
//  .rotateKeyTrigger(java.lang.Boolean)
//  .rotateKeyTrigger(IResolvable)
//  .scheduledOperations(IResolvable)
//  .scheduledOperations(java.util.List<DatabaseAutonomousDatabaseScheduledOperations>)
//  .secretId(java.lang.String)
//  .secretVersionNumber(java.lang.Number)
//  .securityAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .shrinkAdbTrigger(java.lang.Number)
//  .source(java.lang.String)
//  .sourceId(java.lang.String)
//  .standbyWhitelistedIps(java.util.List<java.lang.String>)
//  .state(java.lang.String)
//  .subnetId(java.lang.String)
//  .subscriptionId(java.lang.String)
//  .switchoverTo(java.lang.String)
//  .switchoverToRemotePeerId(java.lang.String)
//  .timeOfAutoRefreshStart(java.lang.String)
//  .timeouts(DatabaseAutonomousDatabaseTimeouts)
//  .timestamp(java.lang.String)
//  .useLatestAvailableBackupTimeStamp(java.lang.Boolean)
//  .useLatestAvailableBackupTimeStamp(IResolvable)
//  .vaultId(java.lang.String)
//  .whitelistedIps(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compartment_id DatabaseAutonomousDatabase#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dbName">dbName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_name DatabaseAutonomousDatabase#db_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#admin_password DatabaseAutonomousDatabase#admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.arePrimaryWhitelistedIpsUsed">arePrimaryWhitelistedIpsUsed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#are_primary_whitelisted_ips_used DatabaseAutonomousDatabase#are_primary_whitelisted_ips_used}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.autonomousContainerDatabaseId">autonomousContainerDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_container_database_id DatabaseAutonomousDatabase#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.autonomousDatabaseBackupId">autonomousDatabaseBackupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_database_backup_id DatabaseAutonomousDatabase#autonomous_database_backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_database_id DatabaseAutonomousDatabase#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.autonomousMaintenanceScheduleType">autonomousMaintenanceScheduleType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_maintenance_schedule_type DatabaseAutonomousDatabase#autonomous_maintenance_schedule_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.autoRefreshFrequencyInSeconds">autoRefreshFrequencyInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#auto_refresh_frequency_in_seconds DatabaseAutonomousDatabase#auto_refresh_frequency_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.autoRefreshPointLagInSeconds">autoRefreshPointLagInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#auto_refresh_point_lag_in_seconds DatabaseAutonomousDatabase#auto_refresh_point_lag_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.backupRetentionPeriodInDays">backupRetentionPeriodInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#backup_retention_period_in_days DatabaseAutonomousDatabase#backup_retention_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.byolComputeCountLimit">byolComputeCountLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#byol_compute_count_limit DatabaseAutonomousDatabase#byol_compute_count_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.characterSet">characterSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#character_set DatabaseAutonomousDatabase#character_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.cloneType">cloneType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#clone_type DatabaseAutonomousDatabase#clone_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compute_count DatabaseAutonomousDatabase#compute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.computeModel">computeModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compute_model DatabaseAutonomousDatabase#compute_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#cpu_core_count DatabaseAutonomousDatabase#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.customerContacts">customerContacts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>></code> | customer_contacts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.databaseEdition">databaseEdition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#database_edition DatabaseAutonomousDatabase#database_edition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.databaseManagementStatus">databaseManagementStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#database_management_status DatabaseAutonomousDatabase#database_management_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dataSafeStatus">dataSafeStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_safe_status DatabaseAutonomousDatabase#data_safe_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_storage_size_in_gb DatabaseAutonomousDatabase#data_storage_size_in_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_storage_size_in_tbs DatabaseAutonomousDatabase#data_storage_size_in_tbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dbToolsDetails">dbToolsDetails</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>></code> | db_tools_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_version DatabaseAutonomousDatabase#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dbWorkload">dbWorkload</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_workload DatabaseAutonomousDatabase#db_workload}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#defined_tags DatabaseAutonomousDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.disasterRecoveryType">disasterRecoveryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#disaster_recovery_type DatabaseAutonomousDatabase#disaster_recovery_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#display_name DatabaseAutonomousDatabase#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.encryptionKey">encryptionKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey">DatabaseAutonomousDatabaseEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#freeform_tags DatabaseAutonomousDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#id DatabaseAutonomousDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.inMemoryPercentage">inMemoryPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#in_memory_percentage DatabaseAutonomousDatabase#in_memory_percentage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isAccessControlEnabled">isAccessControlEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_access_control_enabled DatabaseAutonomousDatabase#is_access_control_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_auto_scaling_enabled DatabaseAutonomousDatabase#is_auto_scaling_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isAutoScalingForStorageEnabled">isAutoScalingForStorageEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_auto_scaling_for_storage_enabled DatabaseAutonomousDatabase#is_auto_scaling_for_storage_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isDataGuardEnabled">isDataGuardEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_data_guard_enabled DatabaseAutonomousDatabase#is_data_guard_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isDedicated">isDedicated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_dedicated DatabaseAutonomousDatabase#is_dedicated}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isDevTier">isDevTier</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_dev_tier DatabaseAutonomousDatabase#is_dev_tier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isFreeTier">isFreeTier</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_free_tier DatabaseAutonomousDatabase#is_free_tier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isLocalDataGuardEnabled">isLocalDataGuardEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_local_data_guard_enabled DatabaseAutonomousDatabase#is_local_data_guard_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isMtlsConnectionRequired">isMtlsConnectionRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_mtls_connection_required DatabaseAutonomousDatabase#is_mtls_connection_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isPreviewVersionWithServiceTermsAccepted">isPreviewVersionWithServiceTermsAccepted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_preview_version_with_service_terms_accepted DatabaseAutonomousDatabase#is_preview_version_with_service_terms_accepted}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isRefreshableClone">isRefreshableClone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_refreshable_clone DatabaseAutonomousDatabase#is_refreshable_clone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isReplicateAutomaticBackups">isReplicateAutomaticBackups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_replicate_automatic_backups DatabaseAutonomousDatabase#is_replicate_automatic_backups}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isShrinkOnly">isShrinkOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_shrink_only DatabaseAutonomousDatabase#is_shrink_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#kms_key_id DatabaseAutonomousDatabase#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#license_model DatabaseAutonomousDatabase#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.localAdgAutoFailoverMaxDataLossLimit">localAdgAutoFailoverMaxDataLossLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#local_adg_auto_failover_max_data_loss_limit DatabaseAutonomousDatabase#local_adg_auto_failover_max_data_loss_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.longTermBackupSchedule">longTermBackupSchedule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>></code> | long_term_backup_schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.maxCpuCoreCount">maxCpuCoreCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#max_cpu_core_count DatabaseAutonomousDatabase#max_cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.ncharacterSet">ncharacterSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#ncharacter_set DatabaseAutonomousDatabase#ncharacter_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#nsg_ids DatabaseAutonomousDatabase#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.ocpuCount">ocpuCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#ocpu_count DatabaseAutonomousDatabase#ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.openMode">openMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#open_mode DatabaseAutonomousDatabase#open_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.operationsInsightsStatus">operationsInsightsStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#operations_insights_status DatabaseAutonomousDatabase#operations_insights_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.permissionLevel">permissionLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#permission_level DatabaseAutonomousDatabase#permission_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.privateEndpointIp">privateEndpointIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#private_endpoint_ip DatabaseAutonomousDatabase#private_endpoint_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.privateEndpointLabel">privateEndpointLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#private_endpoint_label DatabaseAutonomousDatabase#private_endpoint_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.refreshableMode">refreshableMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#refreshable_mode DatabaseAutonomousDatabase#refreshable_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.remoteDisasterRecoveryType">remoteDisasterRecoveryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#remote_disaster_recovery_type DatabaseAutonomousDatabase#remote_disaster_recovery_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.resourcePoolLeaderId">resourcePoolLeaderId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#resource_pool_leader_id DatabaseAutonomousDatabase#resource_pool_leader_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.resourcePoolSummary">resourcePoolSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary">DatabaseAutonomousDatabaseResourcePoolSummary</a></code> | resource_pool_summary block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.rotateKeyTrigger">rotateKeyTrigger</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#rotate_key_trigger DatabaseAutonomousDatabase#rotate_key_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.scheduledOperations">scheduledOperations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>></code> | scheduled_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.secretId">secretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#secret_id DatabaseAutonomousDatabase#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.secretVersionNumber">secretVersionNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#secret_version_number DatabaseAutonomousDatabase#secret_version_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.securityAttributes">securityAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#security_attributes DatabaseAutonomousDatabase#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.shrinkAdbTrigger">shrinkAdbTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#shrink_adb_trigger DatabaseAutonomousDatabase#shrink_adb_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#source DatabaseAutonomousDatabase#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.sourceId">sourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#source_id DatabaseAutonomousDatabase#source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.standbyWhitelistedIps">standbyWhitelistedIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#standby_whitelisted_ips DatabaseAutonomousDatabase#standby_whitelisted_ips}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#state DatabaseAutonomousDatabase#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#subnet_id DatabaseAutonomousDatabase#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#subscription_id DatabaseAutonomousDatabase#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.switchoverTo">switchoverTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#switchover_to DatabaseAutonomousDatabase#switchover_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.switchoverToRemotePeerId">switchoverToRemotePeerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#switchover_to_remote_peer_id DatabaseAutonomousDatabase#switchover_to_remote_peer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.timeOfAutoRefreshStart">timeOfAutoRefreshStart</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#time_of_auto_refresh_start DatabaseAutonomousDatabase#time_of_auto_refresh_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts">DatabaseAutonomousDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.timestamp">timestamp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#timestamp DatabaseAutonomousDatabase#timestamp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.useLatestAvailableBackupTimeStamp">useLatestAvailableBackupTimeStamp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#use_latest_available_backup_time_stamp DatabaseAutonomousDatabase#use_latest_available_backup_time_stamp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.vaultId">vaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#vault_id DatabaseAutonomousDatabase#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.whitelistedIps">whitelistedIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#whitelisted_ips DatabaseAutonomousDatabase#whitelisted_ips}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compartment_id DatabaseAutonomousDatabase#compartment_id}.

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dbName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_name DatabaseAutonomousDatabase#db_name}.

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.adminPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#admin_password DatabaseAutonomousDatabase#admin_password}.

---

##### `arePrimaryWhitelistedIpsUsed`<sup>Optional</sup> <a name="arePrimaryWhitelistedIpsUsed" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.arePrimaryWhitelistedIpsUsed"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#are_primary_whitelisted_ips_used DatabaseAutonomousDatabase#are_primary_whitelisted_ips_used}.

---

##### `autonomousContainerDatabaseId`<sup>Optional</sup> <a name="autonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.autonomousContainerDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_container_database_id DatabaseAutonomousDatabase#autonomous_container_database_id}.

---

##### `autonomousDatabaseBackupId`<sup>Optional</sup> <a name="autonomousDatabaseBackupId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.autonomousDatabaseBackupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_database_backup_id DatabaseAutonomousDatabase#autonomous_database_backup_id}.

---

##### `autonomousDatabaseId`<sup>Optional</sup> <a name="autonomousDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.autonomousDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_database_id DatabaseAutonomousDatabase#autonomous_database_id}.

---

##### `autonomousMaintenanceScheduleType`<sup>Optional</sup> <a name="autonomousMaintenanceScheduleType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.autonomousMaintenanceScheduleType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_maintenance_schedule_type DatabaseAutonomousDatabase#autonomous_maintenance_schedule_type}.

---

##### `autoRefreshFrequencyInSeconds`<sup>Optional</sup> <a name="autoRefreshFrequencyInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.autoRefreshFrequencyInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#auto_refresh_frequency_in_seconds DatabaseAutonomousDatabase#auto_refresh_frequency_in_seconds}.

---

##### `autoRefreshPointLagInSeconds`<sup>Optional</sup> <a name="autoRefreshPointLagInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.autoRefreshPointLagInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#auto_refresh_point_lag_in_seconds DatabaseAutonomousDatabase#auto_refresh_point_lag_in_seconds}.

---

##### `backupRetentionPeriodInDays`<sup>Optional</sup> <a name="backupRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.backupRetentionPeriodInDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#backup_retention_period_in_days DatabaseAutonomousDatabase#backup_retention_period_in_days}.

---

##### `byolComputeCountLimit`<sup>Optional</sup> <a name="byolComputeCountLimit" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.byolComputeCountLimit"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#byol_compute_count_limit DatabaseAutonomousDatabase#byol_compute_count_limit}.

---

##### `characterSet`<sup>Optional</sup> <a name="characterSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.characterSet"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#character_set DatabaseAutonomousDatabase#character_set}.

---

##### `cloneType`<sup>Optional</sup> <a name="cloneType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.cloneType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#clone_type DatabaseAutonomousDatabase#clone_type}.

---

##### `computeCount`<sup>Optional</sup> <a name="computeCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.computeCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compute_count DatabaseAutonomousDatabase#compute_count}.

---

##### `computeModel`<sup>Optional</sup> <a name="computeModel" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.computeModel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compute_model DatabaseAutonomousDatabase#compute_model}.

---

##### `cpuCoreCount`<sup>Optional</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.cpuCoreCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#cpu_core_count DatabaseAutonomousDatabase#cpu_core_count}.

---

##### `customerContacts`<sup>Optional</sup> <a name="customerContacts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.customerContacts"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>>

customer_contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#customer_contacts DatabaseAutonomousDatabase#customer_contacts}

---

##### `databaseEdition`<sup>Optional</sup> <a name="databaseEdition" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.databaseEdition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#database_edition DatabaseAutonomousDatabase#database_edition}.

---

##### `databaseManagementStatus`<sup>Optional</sup> <a name="databaseManagementStatus" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.databaseManagementStatus"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#database_management_status DatabaseAutonomousDatabase#database_management_status}.

---

##### `dataSafeStatus`<sup>Optional</sup> <a name="dataSafeStatus" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dataSafeStatus"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_safe_status DatabaseAutonomousDatabase#data_safe_status}.

---

##### `dataStorageSizeInGb`<sup>Optional</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dataStorageSizeInGb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_storage_size_in_gb DatabaseAutonomousDatabase#data_storage_size_in_gb}.

---

##### `dataStorageSizeInTbs`<sup>Optional</sup> <a name="dataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dataStorageSizeInTbs"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_storage_size_in_tbs DatabaseAutonomousDatabase#data_storage_size_in_tbs}.

---

##### `dbToolsDetails`<sup>Optional</sup> <a name="dbToolsDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dbToolsDetails"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>>

db_tools_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_tools_details DatabaseAutonomousDatabase#db_tools_details}

---

##### `dbVersion`<sup>Optional</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dbVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_version DatabaseAutonomousDatabase#db_version}.

---

##### `dbWorkload`<sup>Optional</sup> <a name="dbWorkload" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dbWorkload"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_workload DatabaseAutonomousDatabase#db_workload}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#defined_tags DatabaseAutonomousDatabase#defined_tags}.

---

##### `disasterRecoveryType`<sup>Optional</sup> <a name="disasterRecoveryType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.disasterRecoveryType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#disaster_recovery_type DatabaseAutonomousDatabase#disaster_recovery_type}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#display_name DatabaseAutonomousDatabase#display_name}.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.encryptionKey"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey">DatabaseAutonomousDatabaseEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#encryption_key DatabaseAutonomousDatabase#encryption_key}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#freeform_tags DatabaseAutonomousDatabase#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#id DatabaseAutonomousDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inMemoryPercentage`<sup>Optional</sup> <a name="inMemoryPercentage" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.inMemoryPercentage"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#in_memory_percentage DatabaseAutonomousDatabase#in_memory_percentage}.

---

##### `isAccessControlEnabled`<sup>Optional</sup> <a name="isAccessControlEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isAccessControlEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_access_control_enabled DatabaseAutonomousDatabase#is_access_control_enabled}.

---

##### `isAutoScalingEnabled`<sup>Optional</sup> <a name="isAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isAutoScalingEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_auto_scaling_enabled DatabaseAutonomousDatabase#is_auto_scaling_enabled}.

---

##### `isAutoScalingForStorageEnabled`<sup>Optional</sup> <a name="isAutoScalingForStorageEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isAutoScalingForStorageEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_auto_scaling_for_storage_enabled DatabaseAutonomousDatabase#is_auto_scaling_for_storage_enabled}.

---

##### `isDataGuardEnabled`<sup>Optional</sup> <a name="isDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isDataGuardEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_data_guard_enabled DatabaseAutonomousDatabase#is_data_guard_enabled}.

---

##### `isDedicated`<sup>Optional</sup> <a name="isDedicated" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isDedicated"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_dedicated DatabaseAutonomousDatabase#is_dedicated}.

---

##### `isDevTier`<sup>Optional</sup> <a name="isDevTier" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isDevTier"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_dev_tier DatabaseAutonomousDatabase#is_dev_tier}.

---

##### `isFreeTier`<sup>Optional</sup> <a name="isFreeTier" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isFreeTier"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_free_tier DatabaseAutonomousDatabase#is_free_tier}.

---

##### `isLocalDataGuardEnabled`<sup>Optional</sup> <a name="isLocalDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isLocalDataGuardEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_local_data_guard_enabled DatabaseAutonomousDatabase#is_local_data_guard_enabled}.

---

##### `isMtlsConnectionRequired`<sup>Optional</sup> <a name="isMtlsConnectionRequired" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isMtlsConnectionRequired"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_mtls_connection_required DatabaseAutonomousDatabase#is_mtls_connection_required}.

---

##### `isPreviewVersionWithServiceTermsAccepted`<sup>Optional</sup> <a name="isPreviewVersionWithServiceTermsAccepted" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isPreviewVersionWithServiceTermsAccepted"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_preview_version_with_service_terms_accepted DatabaseAutonomousDatabase#is_preview_version_with_service_terms_accepted}.

---

##### `isRefreshableClone`<sup>Optional</sup> <a name="isRefreshableClone" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isRefreshableClone"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_refreshable_clone DatabaseAutonomousDatabase#is_refreshable_clone}.

---

##### `isReplicateAutomaticBackups`<sup>Optional</sup> <a name="isReplicateAutomaticBackups" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isReplicateAutomaticBackups"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_replicate_automatic_backups DatabaseAutonomousDatabase#is_replicate_automatic_backups}.

---

##### `isShrinkOnly`<sup>Optional</sup> <a name="isShrinkOnly" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isShrinkOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_shrink_only DatabaseAutonomousDatabase#is_shrink_only}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#kms_key_id DatabaseAutonomousDatabase#kms_key_id}.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.licenseModel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#license_model DatabaseAutonomousDatabase#license_model}.

---

##### `localAdgAutoFailoverMaxDataLossLimit`<sup>Optional</sup> <a name="localAdgAutoFailoverMaxDataLossLimit" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.localAdgAutoFailoverMaxDataLossLimit"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#local_adg_auto_failover_max_data_loss_limit DatabaseAutonomousDatabase#local_adg_auto_failover_max_data_loss_limit}.

---

##### `longTermBackupSchedule`<sup>Optional</sup> <a name="longTermBackupSchedule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.longTermBackupSchedule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>>

long_term_backup_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#long_term_backup_schedule DatabaseAutonomousDatabase#long_term_backup_schedule}

---

##### `maxCpuCoreCount`<sup>Optional</sup> <a name="maxCpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.maxCpuCoreCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#max_cpu_core_count DatabaseAutonomousDatabase#max_cpu_core_count}.

---

##### `ncharacterSet`<sup>Optional</sup> <a name="ncharacterSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.ncharacterSet"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#ncharacter_set DatabaseAutonomousDatabase#ncharacter_set}.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.nsgIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#nsg_ids DatabaseAutonomousDatabase#nsg_ids}.

---

##### `ocpuCount`<sup>Optional</sup> <a name="ocpuCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.ocpuCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#ocpu_count DatabaseAutonomousDatabase#ocpu_count}.

---

##### `openMode`<sup>Optional</sup> <a name="openMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.openMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#open_mode DatabaseAutonomousDatabase#open_mode}.

---

##### `operationsInsightsStatus`<sup>Optional</sup> <a name="operationsInsightsStatus" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.operationsInsightsStatus"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#operations_insights_status DatabaseAutonomousDatabase#operations_insights_status}.

---

##### `permissionLevel`<sup>Optional</sup> <a name="permissionLevel" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.permissionLevel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#permission_level DatabaseAutonomousDatabase#permission_level}.

---

##### `privateEndpointIp`<sup>Optional</sup> <a name="privateEndpointIp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.privateEndpointIp"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#private_endpoint_ip DatabaseAutonomousDatabase#private_endpoint_ip}.

---

##### `privateEndpointLabel`<sup>Optional</sup> <a name="privateEndpointLabel" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.privateEndpointLabel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#private_endpoint_label DatabaseAutonomousDatabase#private_endpoint_label}.

---

##### `refreshableMode`<sup>Optional</sup> <a name="refreshableMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.refreshableMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#refreshable_mode DatabaseAutonomousDatabase#refreshable_mode}.

---

##### `remoteDisasterRecoveryType`<sup>Optional</sup> <a name="remoteDisasterRecoveryType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.remoteDisasterRecoveryType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#remote_disaster_recovery_type DatabaseAutonomousDatabase#remote_disaster_recovery_type}.

---

##### `resourcePoolLeaderId`<sup>Optional</sup> <a name="resourcePoolLeaderId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.resourcePoolLeaderId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#resource_pool_leader_id DatabaseAutonomousDatabase#resource_pool_leader_id}.

---

##### `resourcePoolSummary`<sup>Optional</sup> <a name="resourcePoolSummary" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.resourcePoolSummary"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary">DatabaseAutonomousDatabaseResourcePoolSummary</a>

resource_pool_summary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#resource_pool_summary DatabaseAutonomousDatabase#resource_pool_summary}

---

##### `rotateKeyTrigger`<sup>Optional</sup> <a name="rotateKeyTrigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.rotateKeyTrigger"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#rotate_key_trigger DatabaseAutonomousDatabase#rotate_key_trigger}.

---

##### `scheduledOperations`<sup>Optional</sup> <a name="scheduledOperations" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.scheduledOperations"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>>

scheduled_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#scheduled_operations DatabaseAutonomousDatabase#scheduled_operations}

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.secretId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#secret_id DatabaseAutonomousDatabase#secret_id}.

---

##### `secretVersionNumber`<sup>Optional</sup> <a name="secretVersionNumber" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.secretVersionNumber"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#secret_version_number DatabaseAutonomousDatabase#secret_version_number}.

---

##### `securityAttributes`<sup>Optional</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.securityAttributes"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#security_attributes DatabaseAutonomousDatabase#security_attributes}.

---

##### `shrinkAdbTrigger`<sup>Optional</sup> <a name="shrinkAdbTrigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.shrinkAdbTrigger"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#shrink_adb_trigger DatabaseAutonomousDatabase#shrink_adb_trigger}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.source"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#source DatabaseAutonomousDatabase#source}.

---

##### `sourceId`<sup>Optional</sup> <a name="sourceId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.sourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#source_id DatabaseAutonomousDatabase#source_id}.

---

##### `standbyWhitelistedIps`<sup>Optional</sup> <a name="standbyWhitelistedIps" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.standbyWhitelistedIps"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#standby_whitelisted_ips DatabaseAutonomousDatabase#standby_whitelisted_ips}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#state DatabaseAutonomousDatabase#state}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#subnet_id DatabaseAutonomousDatabase#subnet_id}.

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.subscriptionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#subscription_id DatabaseAutonomousDatabase#subscription_id}.

---

##### `switchoverTo`<sup>Optional</sup> <a name="switchoverTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.switchoverTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#switchover_to DatabaseAutonomousDatabase#switchover_to}.

---

##### `switchoverToRemotePeerId`<sup>Optional</sup> <a name="switchoverToRemotePeerId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.switchoverToRemotePeerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#switchover_to_remote_peer_id DatabaseAutonomousDatabase#switchover_to_remote_peer_id}.

---

##### `timeOfAutoRefreshStart`<sup>Optional</sup> <a name="timeOfAutoRefreshStart" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.timeOfAutoRefreshStart"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#time_of_auto_refresh_start DatabaseAutonomousDatabase#time_of_auto_refresh_start}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts">DatabaseAutonomousDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#timeouts DatabaseAutonomousDatabase#timeouts}

---

##### `timestamp`<sup>Optional</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.timestamp"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#timestamp DatabaseAutonomousDatabase#timestamp}.

---

##### `useLatestAvailableBackupTimeStamp`<sup>Optional</sup> <a name="useLatestAvailableBackupTimeStamp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.useLatestAvailableBackupTimeStamp"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#use_latest_available_backup_time_stamp DatabaseAutonomousDatabase#use_latest_available_backup_time_stamp}.

---

##### `vaultId`<sup>Optional</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.vaultId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#vault_id DatabaseAutonomousDatabase#vault_id}.

---

##### `whitelistedIps`<sup>Optional</sup> <a name="whitelistedIps" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.whitelistedIps"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#whitelisted_ips DatabaseAutonomousDatabase#whitelisted_ips}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putCustomerContacts">putCustomerContacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putDbToolsDetails">putDbToolsDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putEncryptionKey">putEncryptionKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putLongTermBackupSchedule">putLongTermBackupSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putResourcePoolSummary">putResourcePoolSummary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putScheduledOperations">putScheduledOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAdminPassword">resetAdminPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetArePrimaryWhitelistedIpsUsed">resetArePrimaryWhitelistedIpsUsed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutonomousContainerDatabaseId">resetAutonomousContainerDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutonomousDatabaseBackupId">resetAutonomousDatabaseBackupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutonomousDatabaseId">resetAutonomousDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutonomousMaintenanceScheduleType">resetAutonomousMaintenanceScheduleType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutoRefreshFrequencyInSeconds">resetAutoRefreshFrequencyInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutoRefreshPointLagInSeconds">resetAutoRefreshPointLagInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetBackupRetentionPeriodInDays">resetBackupRetentionPeriodInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetByolComputeCountLimit">resetByolComputeCountLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetCharacterSet">resetCharacterSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetCloneType">resetCloneType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetComputeCount">resetComputeCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetComputeModel">resetComputeModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetCpuCoreCount">resetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetCustomerContacts">resetCustomerContacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDatabaseEdition">resetDatabaseEdition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDatabaseManagementStatus">resetDatabaseManagementStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDataSafeStatus">resetDataSafeStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDataStorageSizeInGb">resetDataStorageSizeInGb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDataStorageSizeInTbs">resetDataStorageSizeInTbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDbToolsDetails">resetDbToolsDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDbVersion">resetDbVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDbWorkload">resetDbWorkload</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDisasterRecoveryType">resetDisasterRecoveryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetInMemoryPercentage">resetInMemoryPercentage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsAccessControlEnabled">resetIsAccessControlEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsAutoScalingEnabled">resetIsAutoScalingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsAutoScalingForStorageEnabled">resetIsAutoScalingForStorageEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsDataGuardEnabled">resetIsDataGuardEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsDedicated">resetIsDedicated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsDevTier">resetIsDevTier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsFreeTier">resetIsFreeTier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsLocalDataGuardEnabled">resetIsLocalDataGuardEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsMtlsConnectionRequired">resetIsMtlsConnectionRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsPreviewVersionWithServiceTermsAccepted">resetIsPreviewVersionWithServiceTermsAccepted</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsRefreshableClone">resetIsRefreshableClone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsReplicateAutomaticBackups">resetIsReplicateAutomaticBackups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsShrinkOnly">resetIsShrinkOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetLocalAdgAutoFailoverMaxDataLossLimit">resetLocalAdgAutoFailoverMaxDataLossLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetLongTermBackupSchedule">resetLongTermBackupSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetMaxCpuCoreCount">resetMaxCpuCoreCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetNcharacterSet">resetNcharacterSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetOcpuCount">resetOcpuCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetOpenMode">resetOpenMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetOperationsInsightsStatus">resetOperationsInsightsStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetPermissionLevel">resetPermissionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetPrivateEndpointIp">resetPrivateEndpointIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetPrivateEndpointLabel">resetPrivateEndpointLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetRefreshableMode">resetRefreshableMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetRemoteDisasterRecoveryType">resetRemoteDisasterRecoveryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetResourcePoolLeaderId">resetResourcePoolLeaderId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetResourcePoolSummary">resetResourcePoolSummary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetRotateKeyTrigger">resetRotateKeyTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetScheduledOperations">resetScheduledOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSecretId">resetSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSecretVersionNumber">resetSecretVersionNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSecurityAttributes">resetSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetShrinkAdbTrigger">resetShrinkAdbTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSourceId">resetSourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetStandbyWhitelistedIps">resetStandbyWhitelistedIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSwitchoverTo">resetSwitchoverTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSwitchoverToRemotePeerId">resetSwitchoverToRemotePeerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetTimeOfAutoRefreshStart">resetTimeOfAutoRefreshStart</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetTimestamp">resetTimestamp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetUseLatestAvailableBackupTimeStamp">resetUseLatestAvailableBackupTimeStamp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetVaultId">resetVaultId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetWhitelistedIps">resetWhitelistedIps</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomerContacts` <a name="putCustomerContacts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putCustomerContacts"></a>

```java
public void putCustomerContacts(IResolvable OR java.util.List<DatabaseAutonomousDatabaseCustomerContacts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putCustomerContacts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>>

---

##### `putDbToolsDetails` <a name="putDbToolsDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putDbToolsDetails"></a>

```java
public void putDbToolsDetails(IResolvable OR java.util.List<DatabaseAutonomousDatabaseDbToolsDetails> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putDbToolsDetails.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>>

---

##### `putEncryptionKey` <a name="putEncryptionKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putEncryptionKey"></a>

```java
public void putEncryptionKey(DatabaseAutonomousDatabaseEncryptionKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey">DatabaseAutonomousDatabaseEncryptionKey</a>

---

##### `putLongTermBackupSchedule` <a name="putLongTermBackupSchedule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putLongTermBackupSchedule"></a>

```java
public void putLongTermBackupSchedule(IResolvable OR java.util.List<DatabaseAutonomousDatabaseLongTermBackupSchedule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putLongTermBackupSchedule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>>

---

##### `putResourcePoolSummary` <a name="putResourcePoolSummary" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putResourcePoolSummary"></a>

```java
public void putResourcePoolSummary(DatabaseAutonomousDatabaseResourcePoolSummary value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putResourcePoolSummary.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary">DatabaseAutonomousDatabaseResourcePoolSummary</a>

---

##### `putScheduledOperations` <a name="putScheduledOperations" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putScheduledOperations"></a>

```java
public void putScheduledOperations(IResolvable OR java.util.List<DatabaseAutonomousDatabaseScheduledOperations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putScheduledOperations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putTimeouts"></a>

```java
public void putTimeouts(DatabaseAutonomousDatabaseTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts">DatabaseAutonomousDatabaseTimeouts</a>

---

##### `resetAdminPassword` <a name="resetAdminPassword" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAdminPassword"></a>

```java
public void resetAdminPassword()
```

##### `resetArePrimaryWhitelistedIpsUsed` <a name="resetArePrimaryWhitelistedIpsUsed" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetArePrimaryWhitelistedIpsUsed"></a>

```java
public void resetArePrimaryWhitelistedIpsUsed()
```

##### `resetAutonomousContainerDatabaseId` <a name="resetAutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutonomousContainerDatabaseId"></a>

```java
public void resetAutonomousContainerDatabaseId()
```

##### `resetAutonomousDatabaseBackupId` <a name="resetAutonomousDatabaseBackupId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutonomousDatabaseBackupId"></a>

```java
public void resetAutonomousDatabaseBackupId()
```

##### `resetAutonomousDatabaseId` <a name="resetAutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutonomousDatabaseId"></a>

```java
public void resetAutonomousDatabaseId()
```

##### `resetAutonomousMaintenanceScheduleType` <a name="resetAutonomousMaintenanceScheduleType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutonomousMaintenanceScheduleType"></a>

```java
public void resetAutonomousMaintenanceScheduleType()
```

##### `resetAutoRefreshFrequencyInSeconds` <a name="resetAutoRefreshFrequencyInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutoRefreshFrequencyInSeconds"></a>

```java
public void resetAutoRefreshFrequencyInSeconds()
```

##### `resetAutoRefreshPointLagInSeconds` <a name="resetAutoRefreshPointLagInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutoRefreshPointLagInSeconds"></a>

```java
public void resetAutoRefreshPointLagInSeconds()
```

##### `resetBackupRetentionPeriodInDays` <a name="resetBackupRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetBackupRetentionPeriodInDays"></a>

```java
public void resetBackupRetentionPeriodInDays()
```

##### `resetByolComputeCountLimit` <a name="resetByolComputeCountLimit" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetByolComputeCountLimit"></a>

```java
public void resetByolComputeCountLimit()
```

##### `resetCharacterSet` <a name="resetCharacterSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetCharacterSet"></a>

```java
public void resetCharacterSet()
```

##### `resetCloneType` <a name="resetCloneType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetCloneType"></a>

```java
public void resetCloneType()
```

##### `resetComputeCount` <a name="resetComputeCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetComputeCount"></a>

```java
public void resetComputeCount()
```

##### `resetComputeModel` <a name="resetComputeModel" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetComputeModel"></a>

```java
public void resetComputeModel()
```

##### `resetCpuCoreCount` <a name="resetCpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetCpuCoreCount"></a>

```java
public void resetCpuCoreCount()
```

##### `resetCustomerContacts` <a name="resetCustomerContacts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetCustomerContacts"></a>

```java
public void resetCustomerContacts()
```

##### `resetDatabaseEdition` <a name="resetDatabaseEdition" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDatabaseEdition"></a>

```java
public void resetDatabaseEdition()
```

##### `resetDatabaseManagementStatus` <a name="resetDatabaseManagementStatus" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDatabaseManagementStatus"></a>

```java
public void resetDatabaseManagementStatus()
```

##### `resetDataSafeStatus` <a name="resetDataSafeStatus" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDataSafeStatus"></a>

```java
public void resetDataSafeStatus()
```

##### `resetDataStorageSizeInGb` <a name="resetDataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDataStorageSizeInGb"></a>

```java
public void resetDataStorageSizeInGb()
```

##### `resetDataStorageSizeInTbs` <a name="resetDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDataStorageSizeInTbs"></a>

```java
public void resetDataStorageSizeInTbs()
```

##### `resetDbToolsDetails` <a name="resetDbToolsDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDbToolsDetails"></a>

```java
public void resetDbToolsDetails()
```

##### `resetDbVersion` <a name="resetDbVersion" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDbVersion"></a>

```java
public void resetDbVersion()
```

##### `resetDbWorkload` <a name="resetDbWorkload" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDbWorkload"></a>

```java
public void resetDbWorkload()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisasterRecoveryType` <a name="resetDisasterRecoveryType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDisasterRecoveryType"></a>

```java
public void resetDisasterRecoveryType()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetEncryptionKey"></a>

```java
public void resetEncryptionKey()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetId"></a>

```java
public void resetId()
```

##### `resetInMemoryPercentage` <a name="resetInMemoryPercentage" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetInMemoryPercentage"></a>

```java
public void resetInMemoryPercentage()
```

##### `resetIsAccessControlEnabled` <a name="resetIsAccessControlEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsAccessControlEnabled"></a>

```java
public void resetIsAccessControlEnabled()
```

##### `resetIsAutoScalingEnabled` <a name="resetIsAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsAutoScalingEnabled"></a>

```java
public void resetIsAutoScalingEnabled()
```

##### `resetIsAutoScalingForStorageEnabled` <a name="resetIsAutoScalingForStorageEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsAutoScalingForStorageEnabled"></a>

```java
public void resetIsAutoScalingForStorageEnabled()
```

##### `resetIsDataGuardEnabled` <a name="resetIsDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsDataGuardEnabled"></a>

```java
public void resetIsDataGuardEnabled()
```

##### `resetIsDedicated` <a name="resetIsDedicated" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsDedicated"></a>

```java
public void resetIsDedicated()
```

##### `resetIsDevTier` <a name="resetIsDevTier" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsDevTier"></a>

```java
public void resetIsDevTier()
```

##### `resetIsFreeTier` <a name="resetIsFreeTier" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsFreeTier"></a>

```java
public void resetIsFreeTier()
```

##### `resetIsLocalDataGuardEnabled` <a name="resetIsLocalDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsLocalDataGuardEnabled"></a>

```java
public void resetIsLocalDataGuardEnabled()
```

##### `resetIsMtlsConnectionRequired` <a name="resetIsMtlsConnectionRequired" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsMtlsConnectionRequired"></a>

```java
public void resetIsMtlsConnectionRequired()
```

##### `resetIsPreviewVersionWithServiceTermsAccepted` <a name="resetIsPreviewVersionWithServiceTermsAccepted" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsPreviewVersionWithServiceTermsAccepted"></a>

```java
public void resetIsPreviewVersionWithServiceTermsAccepted()
```

##### `resetIsRefreshableClone` <a name="resetIsRefreshableClone" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsRefreshableClone"></a>

```java
public void resetIsRefreshableClone()
```

##### `resetIsReplicateAutomaticBackups` <a name="resetIsReplicateAutomaticBackups" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsReplicateAutomaticBackups"></a>

```java
public void resetIsReplicateAutomaticBackups()
```

##### `resetIsShrinkOnly` <a name="resetIsShrinkOnly" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsShrinkOnly"></a>

```java
public void resetIsShrinkOnly()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetLicenseModel"></a>

```java
public void resetLicenseModel()
```

##### `resetLocalAdgAutoFailoverMaxDataLossLimit` <a name="resetLocalAdgAutoFailoverMaxDataLossLimit" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetLocalAdgAutoFailoverMaxDataLossLimit"></a>

```java
public void resetLocalAdgAutoFailoverMaxDataLossLimit()
```

##### `resetLongTermBackupSchedule` <a name="resetLongTermBackupSchedule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetLongTermBackupSchedule"></a>

```java
public void resetLongTermBackupSchedule()
```

##### `resetMaxCpuCoreCount` <a name="resetMaxCpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetMaxCpuCoreCount"></a>

```java
public void resetMaxCpuCoreCount()
```

##### `resetNcharacterSet` <a name="resetNcharacterSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetNcharacterSet"></a>

```java
public void resetNcharacterSet()
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetNsgIds"></a>

```java
public void resetNsgIds()
```

##### `resetOcpuCount` <a name="resetOcpuCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetOcpuCount"></a>

```java
public void resetOcpuCount()
```

##### `resetOpenMode` <a name="resetOpenMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetOpenMode"></a>

```java
public void resetOpenMode()
```

##### `resetOperationsInsightsStatus` <a name="resetOperationsInsightsStatus" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetOperationsInsightsStatus"></a>

```java
public void resetOperationsInsightsStatus()
```

##### `resetPermissionLevel` <a name="resetPermissionLevel" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetPermissionLevel"></a>

```java
public void resetPermissionLevel()
```

##### `resetPrivateEndpointIp` <a name="resetPrivateEndpointIp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetPrivateEndpointIp"></a>

```java
public void resetPrivateEndpointIp()
```

##### `resetPrivateEndpointLabel` <a name="resetPrivateEndpointLabel" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetPrivateEndpointLabel"></a>

```java
public void resetPrivateEndpointLabel()
```

##### `resetRefreshableMode` <a name="resetRefreshableMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetRefreshableMode"></a>

```java
public void resetRefreshableMode()
```

##### `resetRemoteDisasterRecoveryType` <a name="resetRemoteDisasterRecoveryType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetRemoteDisasterRecoveryType"></a>

```java
public void resetRemoteDisasterRecoveryType()
```

##### `resetResourcePoolLeaderId` <a name="resetResourcePoolLeaderId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetResourcePoolLeaderId"></a>

```java
public void resetResourcePoolLeaderId()
```

##### `resetResourcePoolSummary` <a name="resetResourcePoolSummary" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetResourcePoolSummary"></a>

```java
public void resetResourcePoolSummary()
```

##### `resetRotateKeyTrigger` <a name="resetRotateKeyTrigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetRotateKeyTrigger"></a>

```java
public void resetRotateKeyTrigger()
```

##### `resetScheduledOperations` <a name="resetScheduledOperations" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetScheduledOperations"></a>

```java
public void resetScheduledOperations()
```

##### `resetSecretId` <a name="resetSecretId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSecretId"></a>

```java
public void resetSecretId()
```

##### `resetSecretVersionNumber` <a name="resetSecretVersionNumber" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSecretVersionNumber"></a>

```java
public void resetSecretVersionNumber()
```

##### `resetSecurityAttributes` <a name="resetSecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSecurityAttributes"></a>

```java
public void resetSecurityAttributes()
```

##### `resetShrinkAdbTrigger` <a name="resetShrinkAdbTrigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetShrinkAdbTrigger"></a>

```java
public void resetShrinkAdbTrigger()
```

##### `resetSource` <a name="resetSource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSource"></a>

```java
public void resetSource()
```

##### `resetSourceId` <a name="resetSourceId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSourceId"></a>

```java
public void resetSourceId()
```

##### `resetStandbyWhitelistedIps` <a name="resetStandbyWhitelistedIps" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetStandbyWhitelistedIps"></a>

```java
public void resetStandbyWhitelistedIps()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetState"></a>

```java
public void resetState()
```

##### `resetSubnetId` <a name="resetSubnetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSubscriptionId"></a>

```java
public void resetSubscriptionId()
```

##### `resetSwitchoverTo` <a name="resetSwitchoverTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSwitchoverTo"></a>

```java
public void resetSwitchoverTo()
```

##### `resetSwitchoverToRemotePeerId` <a name="resetSwitchoverToRemotePeerId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSwitchoverToRemotePeerId"></a>

```java
public void resetSwitchoverToRemotePeerId()
```

##### `resetTimeOfAutoRefreshStart` <a name="resetTimeOfAutoRefreshStart" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetTimeOfAutoRefreshStart"></a>

```java
public void resetTimeOfAutoRefreshStart()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimestamp` <a name="resetTimestamp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetTimestamp"></a>

```java
public void resetTimestamp()
```

##### `resetUseLatestAvailableBackupTimeStamp` <a name="resetUseLatestAvailableBackupTimeStamp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetUseLatestAvailableBackupTimeStamp"></a>

```java
public void resetUseLatestAvailableBackupTimeStamp()
```

##### `resetVaultId` <a name="resetVaultId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetVaultId"></a>

```java
public void resetVaultId()
```

##### `resetWhitelistedIps` <a name="resetWhitelistedIps" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetWhitelistedIps"></a>

```java
public void resetWhitelistedIps()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseAutonomousDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabase;

DatabaseAutonomousDatabase.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabase;

DatabaseAutonomousDatabase.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabase;

DatabaseAutonomousDatabase.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabase;

DatabaseAutonomousDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseAutonomousDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseAutonomousDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseAutonomousDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseAutonomousDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.actualUsedDataStorageSizeInTbs">actualUsedDataStorageSizeInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.allocatedStorageSizeInTbs">allocatedStorageSizeInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.apexDetails">apexDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList">DatabaseAutonomousDatabaseApexDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.availableUpgradeVersions">availableUpgradeVersions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.backupConfig">backupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList">DatabaseAutonomousDatabaseBackupConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.clusterPlacementGroupId">clusterPlacementGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.connectionStrings">connectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList">DatabaseAutonomousDatabaseConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.connectionUrls">connectionUrls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList">DatabaseAutonomousDatabaseConnectionUrlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.customerContacts">customerContacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList">DatabaseAutonomousDatabaseCustomerContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataguardRegionType">dataguardRegionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbToolsDetails">dbToolsDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList">DatabaseAutonomousDatabaseDbToolsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.disasterRecoveryRegionType">disasterRecoveryRegionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.encryptionKey">encryptionKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference">DatabaseAutonomousDatabaseEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.encryptionKeyHistoryEntry">encryptionKeyHistoryEntry</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList">DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.failedDataRecoveryInSeconds">failedDataRecoveryInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.infrastructureType">infrastructureType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.inMemoryAreaInGbs">inMemoryAreaInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isPreview">isPreview</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isReconnectCloneEnabled">isReconnectCloneEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isRemoteDataGuardEnabled">isRemoteDataGuardEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.keyHistoryEntry">keyHistoryEntry</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList">DatabaseAutonomousDatabaseKeyHistoryEntryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.keyStoreId">keyStoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.keyStoreWalletName">keyStoreWalletName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.kmsKeyLifecycleDetails">kmsKeyLifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.localDisasterRecoveryType">localDisasterRecoveryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.localStandbyDb">localStandbyDb</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList">DatabaseAutonomousDatabaseLocalStandbyDbList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.longTermBackupSchedule">longTermBackupSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList">DatabaseAutonomousDatabaseLongTermBackupScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.memoryPerOracleComputeUnitInGbs">memoryPerOracleComputeUnitInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.netServicesArchitecture">netServicesArchitecture</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.nextLongTermBackupTimeStamp">nextLongTermBackupTimeStamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.peerDbIds">peerDbIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpoint">privateEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.provisionableCpus">provisionableCpus</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.publicConnectionUrls">publicConnectionUrls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList">DatabaseAutonomousDatabasePublicConnectionUrlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.publicEndpoint">publicEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.refreshableStatus">refreshableStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.remoteDisasterRecoveryConfiguration">remoteDisasterRecoveryConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList">DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.resourcePoolSummary">resourcePoolSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference">DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.scheduledOperations">scheduledOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList">DatabaseAutonomousDatabaseScheduledOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.serviceConsoleUrl">serviceConsoleUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.standbyDb">standbyDb</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList">DatabaseAutonomousDatabaseStandbyDbList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.supportedRegionsToCloneTo">supportedRegionsToCloneTo</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeDataGuardRoleChanged">timeDataGuardRoleChanged</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeDeletionOfFreeAutonomousDatabase">timeDeletionOfFreeAutonomousDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeDisasterRecoveryRoleChanged">timeDisasterRecoveryRoleChanged</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeLocalDataGuardEnabled">timeLocalDataGuardEnabled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeMaintenanceBegin">timeMaintenanceBegin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeMaintenanceEnd">timeMaintenanceEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfJoiningResourcePool">timeOfJoiningResourcePool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfLastFailover">timeOfLastFailover</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfLastRefresh">timeOfLastRefresh</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfLastRefreshPoint">timeOfLastRefreshPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfLastSwitchover">timeOfLastSwitchover</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfNextRefresh">timeOfNextRefresh</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference">DatabaseAutonomousDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeReclamationOfFreeAutonomousDatabase">timeReclamationOfFreeAutonomousDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeUndeleted">timeUndeleted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeUntilReconnectCloneEnabled">timeUntilReconnectCloneEnabled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.totalBackupStorageSizeInGbs">totalBackupStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.usedDataStorageSizeInGbs">usedDataStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.usedDataStorageSizeInTbs">usedDataStorageSizeInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.adminPasswordInput">adminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.arePrimaryWhitelistedIpsUsedInput">arePrimaryWhitelistedIpsUsedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousContainerDatabaseIdInput">autonomousContainerDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousDatabaseBackupIdInput">autonomousDatabaseBackupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousDatabaseIdInput">autonomousDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousMaintenanceScheduleTypeInput">autonomousMaintenanceScheduleTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autoRefreshFrequencyInSecondsInput">autoRefreshFrequencyInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autoRefreshPointLagInSecondsInput">autoRefreshPointLagInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.backupRetentionPeriodInDaysInput">backupRetentionPeriodInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.byolComputeCountLimitInput">byolComputeCountLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.characterSetInput">characterSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cloneTypeInput">cloneTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.computeCountInput">computeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.computeModelInput">computeModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cpuCoreCountInput">cpuCoreCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.customerContactsInput">customerContactsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.databaseEditionInput">databaseEditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.databaseManagementStatusInput">databaseManagementStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataSafeStatusInput">dataSafeStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataStorageSizeInGbInput">dataStorageSizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataStorageSizeInTbsInput">dataStorageSizeInTbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbNameInput">dbNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbToolsDetailsInput">dbToolsDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbVersionInput">dbVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbWorkloadInput">dbWorkloadInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.disasterRecoveryTypeInput">disasterRecoveryTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey">DatabaseAutonomousDatabaseEncryptionKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.inMemoryPercentageInput">inMemoryPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAccessControlEnabledInput">isAccessControlEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAutoScalingEnabledInput">isAutoScalingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAutoScalingForStorageEnabledInput">isAutoScalingForStorageEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDataGuardEnabledInput">isDataGuardEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDedicatedInput">isDedicatedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDevTierInput">isDevTierInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isFreeTierInput">isFreeTierInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isLocalDataGuardEnabledInput">isLocalDataGuardEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isMtlsConnectionRequiredInput">isMtlsConnectionRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isPreviewVersionWithServiceTermsAcceptedInput">isPreviewVersionWithServiceTermsAcceptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isRefreshableCloneInput">isRefreshableCloneInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isReplicateAutomaticBackupsInput">isReplicateAutomaticBackupsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isShrinkOnlyInput">isShrinkOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.licenseModelInput">licenseModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimitInput">localAdgAutoFailoverMaxDataLossLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.longTermBackupScheduleInput">longTermBackupScheduleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.maxCpuCoreCountInput">maxCpuCoreCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.ncharacterSetInput">ncharacterSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.nsgIdsInput">nsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.ocpuCountInput">ocpuCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.openModeInput">openModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.operationsInsightsStatusInput">operationsInsightsStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.permissionLevelInput">permissionLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpointIpInput">privateEndpointIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpointLabelInput">privateEndpointLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.refreshableModeInput">refreshableModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.remoteDisasterRecoveryTypeInput">remoteDisasterRecoveryTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.resourcePoolLeaderIdInput">resourcePoolLeaderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.resourcePoolSummaryInput">resourcePoolSummaryInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary">DatabaseAutonomousDatabaseResourcePoolSummary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.rotateKeyTriggerInput">rotateKeyTriggerInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.scheduledOperationsInput">scheduledOperationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.secretVersionNumberInput">secretVersionNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.securityAttributesInput">securityAttributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.shrinkAdbTriggerInput">shrinkAdbTriggerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.sourceIdInput">sourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.standbyWhitelistedIpsInput">standbyWhitelistedIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.switchoverToInput">switchoverToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.switchoverToRemotePeerIdInput">switchoverToRemotePeerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfAutoRefreshStartInput">timeOfAutoRefreshStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts">DatabaseAutonomousDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timestampInput">timestampInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.useLatestAvailableBackupTimeStampInput">useLatestAvailableBackupTimeStampInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.vaultIdInput">vaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.whitelistedIpsInput">whitelistedIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.arePrimaryWhitelistedIpsUsed">arePrimaryWhitelistedIpsUsed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousContainerDatabaseId">autonomousContainerDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousDatabaseBackupId">autonomousDatabaseBackupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousMaintenanceScheduleType">autonomousMaintenanceScheduleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autoRefreshFrequencyInSeconds">autoRefreshFrequencyInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autoRefreshPointLagInSeconds">autoRefreshPointLagInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.backupRetentionPeriodInDays">backupRetentionPeriodInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.byolComputeCountLimit">byolComputeCountLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.characterSet">characterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cloneType">cloneType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.computeModel">computeModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.databaseEdition">databaseEdition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.databaseManagementStatus">databaseManagementStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataSafeStatus">dataSafeStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbName">dbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbWorkload">dbWorkload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.disasterRecoveryType">disasterRecoveryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.inMemoryPercentage">inMemoryPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAccessControlEnabled">isAccessControlEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAutoScalingForStorageEnabled">isAutoScalingForStorageEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDataGuardEnabled">isDataGuardEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDedicated">isDedicated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDevTier">isDevTier</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isFreeTier">isFreeTier</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isLocalDataGuardEnabled">isLocalDataGuardEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isMtlsConnectionRequired">isMtlsConnectionRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isPreviewVersionWithServiceTermsAccepted">isPreviewVersionWithServiceTermsAccepted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isRefreshableClone">isRefreshableClone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isReplicateAutomaticBackups">isReplicateAutomaticBackups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isShrinkOnly">isShrinkOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit">localAdgAutoFailoverMaxDataLossLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.maxCpuCoreCount">maxCpuCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.ncharacterSet">ncharacterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.ocpuCount">ocpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.openMode">openMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.operationsInsightsStatus">operationsInsightsStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.permissionLevel">permissionLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpointIp">privateEndpointIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpointLabel">privateEndpointLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.refreshableMode">refreshableMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.remoteDisasterRecoveryType">remoteDisasterRecoveryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.resourcePoolLeaderId">resourcePoolLeaderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.rotateKeyTrigger">rotateKeyTrigger</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.secretVersionNumber">secretVersionNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.securityAttributes">securityAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.shrinkAdbTrigger">shrinkAdbTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.sourceId">sourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.standbyWhitelistedIps">standbyWhitelistedIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.switchoverTo">switchoverTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.switchoverToRemotePeerId">switchoverToRemotePeerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfAutoRefreshStart">timeOfAutoRefreshStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.useLatestAvailableBackupTimeStamp">useLatestAvailableBackupTimeStamp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.whitelistedIps">whitelistedIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actualUsedDataStorageSizeInTbs`<sup>Required</sup> <a name="actualUsedDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.actualUsedDataStorageSizeInTbs"></a>

```java
public java.lang.Number getActualUsedDataStorageSizeInTbs();
```

- *Type:* java.lang.Number

---

##### `allocatedStorageSizeInTbs`<sup>Required</sup> <a name="allocatedStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.allocatedStorageSizeInTbs"></a>

```java
public java.lang.Number getAllocatedStorageSizeInTbs();
```

- *Type:* java.lang.Number

---

##### `apexDetails`<sup>Required</sup> <a name="apexDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.apexDetails"></a>

```java
public DatabaseAutonomousDatabaseApexDetailsList getApexDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList">DatabaseAutonomousDatabaseApexDetailsList</a>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `availableUpgradeVersions`<sup>Required</sup> <a name="availableUpgradeVersions" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.availableUpgradeVersions"></a>

```java
public java.util.List<java.lang.String> getAvailableUpgradeVersions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backupConfig`<sup>Required</sup> <a name="backupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.backupConfig"></a>

```java
public DatabaseAutonomousDatabaseBackupConfigList getBackupConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList">DatabaseAutonomousDatabaseBackupConfigList</a>

---

##### `clusterPlacementGroupId`<sup>Required</sup> <a name="clusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.clusterPlacementGroupId"></a>

```java
public java.lang.String getClusterPlacementGroupId();
```

- *Type:* java.lang.String

---

##### `connectionStrings`<sup>Required</sup> <a name="connectionStrings" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.connectionStrings"></a>

```java
public DatabaseAutonomousDatabaseConnectionStringsList getConnectionStrings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList">DatabaseAutonomousDatabaseConnectionStringsList</a>

---

##### `connectionUrls`<sup>Required</sup> <a name="connectionUrls" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.connectionUrls"></a>

```java
public DatabaseAutonomousDatabaseConnectionUrlsList getConnectionUrls();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList">DatabaseAutonomousDatabaseConnectionUrlsList</a>

---

##### `customerContacts`<sup>Required</sup> <a name="customerContacts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.customerContacts"></a>

```java
public DatabaseAutonomousDatabaseCustomerContactsList getCustomerContacts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList">DatabaseAutonomousDatabaseCustomerContactsList</a>

---

##### `dataguardRegionType`<sup>Required</sup> <a name="dataguardRegionType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataguardRegionType"></a>

```java
public java.lang.String getDataguardRegionType();
```

- *Type:* java.lang.String

---

##### `dbToolsDetails`<sup>Required</sup> <a name="dbToolsDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbToolsDetails"></a>

```java
public DatabaseAutonomousDatabaseDbToolsDetailsList getDbToolsDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList">DatabaseAutonomousDatabaseDbToolsDetailsList</a>

---

##### `disasterRecoveryRegionType`<sup>Required</sup> <a name="disasterRecoveryRegionType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.disasterRecoveryRegionType"></a>

```java
public java.lang.String getDisasterRecoveryRegionType();
```

- *Type:* java.lang.String

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.encryptionKey"></a>

```java
public DatabaseAutonomousDatabaseEncryptionKeyOutputReference getEncryptionKey();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference">DatabaseAutonomousDatabaseEncryptionKeyOutputReference</a>

---

##### `encryptionKeyHistoryEntry`<sup>Required</sup> <a name="encryptionKeyHistoryEntry" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.encryptionKeyHistoryEntry"></a>

```java
public DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList getEncryptionKeyHistoryEntry();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList">DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList</a>

---

##### `failedDataRecoveryInSeconds`<sup>Required</sup> <a name="failedDataRecoveryInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.failedDataRecoveryInSeconds"></a>

```java
public java.lang.Number getFailedDataRecoveryInSeconds();
```

- *Type:* java.lang.Number

---

##### `infrastructureType`<sup>Required</sup> <a name="infrastructureType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.infrastructureType"></a>

```java
public java.lang.String getInfrastructureType();
```

- *Type:* java.lang.String

---

##### `inMemoryAreaInGbs`<sup>Required</sup> <a name="inMemoryAreaInGbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.inMemoryAreaInGbs"></a>

```java
public java.lang.Number getInMemoryAreaInGbs();
```

- *Type:* java.lang.Number

---

##### `isPreview`<sup>Required</sup> <a name="isPreview" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isPreview"></a>

```java
public IResolvable getIsPreview();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isReconnectCloneEnabled`<sup>Required</sup> <a name="isReconnectCloneEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isReconnectCloneEnabled"></a>

```java
public IResolvable getIsReconnectCloneEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isRemoteDataGuardEnabled`<sup>Required</sup> <a name="isRemoteDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isRemoteDataGuardEnabled"></a>

```java
public IResolvable getIsRemoteDataGuardEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `keyHistoryEntry`<sup>Required</sup> <a name="keyHistoryEntry" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.keyHistoryEntry"></a>

```java
public DatabaseAutonomousDatabaseKeyHistoryEntryList getKeyHistoryEntry();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList">DatabaseAutonomousDatabaseKeyHistoryEntryList</a>

---

##### `keyStoreId`<sup>Required</sup> <a name="keyStoreId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.keyStoreId"></a>

```java
public java.lang.String getKeyStoreId();
```

- *Type:* java.lang.String

---

##### `keyStoreWalletName`<sup>Required</sup> <a name="keyStoreWalletName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.keyStoreWalletName"></a>

```java
public java.lang.String getKeyStoreWalletName();
```

- *Type:* java.lang.String

---

##### `kmsKeyLifecycleDetails`<sup>Required</sup> <a name="kmsKeyLifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.kmsKeyLifecycleDetails"></a>

```java
public java.lang.String getKmsKeyLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `kmsKeyVersionId`<sup>Required</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.kmsKeyVersionId"></a>

```java
public java.lang.String getKmsKeyVersionId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `localDisasterRecoveryType`<sup>Required</sup> <a name="localDisasterRecoveryType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.localDisasterRecoveryType"></a>

```java
public java.lang.String getLocalDisasterRecoveryType();
```

- *Type:* java.lang.String

---

##### `localStandbyDb`<sup>Required</sup> <a name="localStandbyDb" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.localStandbyDb"></a>

```java
public DatabaseAutonomousDatabaseLocalStandbyDbList getLocalStandbyDb();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList">DatabaseAutonomousDatabaseLocalStandbyDbList</a>

---

##### `longTermBackupSchedule`<sup>Required</sup> <a name="longTermBackupSchedule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.longTermBackupSchedule"></a>

```java
public DatabaseAutonomousDatabaseLongTermBackupScheduleList getLongTermBackupSchedule();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList">DatabaseAutonomousDatabaseLongTermBackupScheduleList</a>

---

##### `memoryPerOracleComputeUnitInGbs`<sup>Required</sup> <a name="memoryPerOracleComputeUnitInGbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.memoryPerOracleComputeUnitInGbs"></a>

```java
public java.lang.Number getMemoryPerOracleComputeUnitInGbs();
```

- *Type:* java.lang.Number

---

##### `netServicesArchitecture`<sup>Required</sup> <a name="netServicesArchitecture" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.netServicesArchitecture"></a>

```java
public java.lang.String getNetServicesArchitecture();
```

- *Type:* java.lang.String

---

##### `nextLongTermBackupTimeStamp`<sup>Required</sup> <a name="nextLongTermBackupTimeStamp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.nextLongTermBackupTimeStamp"></a>

```java
public java.lang.String getNextLongTermBackupTimeStamp();
```

- *Type:* java.lang.String

---

##### `peerDbIds`<sup>Required</sup> <a name="peerDbIds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.peerDbIds"></a>

```java
public java.util.List<java.lang.String> getPeerDbIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateEndpoint`<sup>Required</sup> <a name="privateEndpoint" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpoint"></a>

```java
public java.lang.String getPrivateEndpoint();
```

- *Type:* java.lang.String

---

##### `provisionableCpus`<sup>Required</sup> <a name="provisionableCpus" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.provisionableCpus"></a>

```java
public java.util.List<java.lang.Number> getProvisionableCpus();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `publicConnectionUrls`<sup>Required</sup> <a name="publicConnectionUrls" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.publicConnectionUrls"></a>

```java
public DatabaseAutonomousDatabasePublicConnectionUrlsList getPublicConnectionUrls();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList">DatabaseAutonomousDatabasePublicConnectionUrlsList</a>

---

##### `publicEndpoint`<sup>Required</sup> <a name="publicEndpoint" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.publicEndpoint"></a>

```java
public java.lang.String getPublicEndpoint();
```

- *Type:* java.lang.String

---

##### `refreshableStatus`<sup>Required</sup> <a name="refreshableStatus" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.refreshableStatus"></a>

```java
public java.lang.String getRefreshableStatus();
```

- *Type:* java.lang.String

---

##### `remoteDisasterRecoveryConfiguration`<sup>Required</sup> <a name="remoteDisasterRecoveryConfiguration" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.remoteDisasterRecoveryConfiguration"></a>

```java
public DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList getRemoteDisasterRecoveryConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList">DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList</a>

---

##### `resourcePoolSummary`<sup>Required</sup> <a name="resourcePoolSummary" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.resourcePoolSummary"></a>

```java
public DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference getResourcePoolSummary();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference">DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference</a>

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `scheduledOperations`<sup>Required</sup> <a name="scheduledOperations" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.scheduledOperations"></a>

```java
public DatabaseAutonomousDatabaseScheduledOperationsList getScheduledOperations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList">DatabaseAutonomousDatabaseScheduledOperationsList</a>

---

##### `serviceConsoleUrl`<sup>Required</sup> <a name="serviceConsoleUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.serviceConsoleUrl"></a>

```java
public java.lang.String getServiceConsoleUrl();
```

- *Type:* java.lang.String

---

##### `standbyDb`<sup>Required</sup> <a name="standbyDb" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.standbyDb"></a>

```java
public DatabaseAutonomousDatabaseStandbyDbList getStandbyDb();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList">DatabaseAutonomousDatabaseStandbyDbList</a>

---

##### `supportedRegionsToCloneTo`<sup>Required</sup> <a name="supportedRegionsToCloneTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.supportedRegionsToCloneTo"></a>

```java
public java.util.List<java.lang.String> getSupportedRegionsToCloneTo();
```

- *Type:* java.util.List<java.lang.String>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeDataGuardRoleChanged`<sup>Required</sup> <a name="timeDataGuardRoleChanged" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeDataGuardRoleChanged"></a>

```java
public java.lang.String getTimeDataGuardRoleChanged();
```

- *Type:* java.lang.String

---

##### `timeDeletionOfFreeAutonomousDatabase`<sup>Required</sup> <a name="timeDeletionOfFreeAutonomousDatabase" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeDeletionOfFreeAutonomousDatabase"></a>

```java
public java.lang.String getTimeDeletionOfFreeAutonomousDatabase();
```

- *Type:* java.lang.String

---

##### `timeDisasterRecoveryRoleChanged`<sup>Required</sup> <a name="timeDisasterRecoveryRoleChanged" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeDisasterRecoveryRoleChanged"></a>

```java
public java.lang.String getTimeDisasterRecoveryRoleChanged();
```

- *Type:* java.lang.String

---

##### `timeLocalDataGuardEnabled`<sup>Required</sup> <a name="timeLocalDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeLocalDataGuardEnabled"></a>

```java
public java.lang.String getTimeLocalDataGuardEnabled();
```

- *Type:* java.lang.String

---

##### `timeMaintenanceBegin`<sup>Required</sup> <a name="timeMaintenanceBegin" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeMaintenanceBegin"></a>

```java
public java.lang.String getTimeMaintenanceBegin();
```

- *Type:* java.lang.String

---

##### `timeMaintenanceEnd`<sup>Required</sup> <a name="timeMaintenanceEnd" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeMaintenanceEnd"></a>

```java
public java.lang.String getTimeMaintenanceEnd();
```

- *Type:* java.lang.String

---

##### `timeOfJoiningResourcePool`<sup>Required</sup> <a name="timeOfJoiningResourcePool" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfJoiningResourcePool"></a>

```java
public java.lang.String getTimeOfJoiningResourcePool();
```

- *Type:* java.lang.String

---

##### `timeOfLastFailover`<sup>Required</sup> <a name="timeOfLastFailover" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfLastFailover"></a>

```java
public java.lang.String getTimeOfLastFailover();
```

- *Type:* java.lang.String

---

##### `timeOfLastRefresh`<sup>Required</sup> <a name="timeOfLastRefresh" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfLastRefresh"></a>

```java
public java.lang.String getTimeOfLastRefresh();
```

- *Type:* java.lang.String

---

##### `timeOfLastRefreshPoint`<sup>Required</sup> <a name="timeOfLastRefreshPoint" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfLastRefreshPoint"></a>

```java
public java.lang.String getTimeOfLastRefreshPoint();
```

- *Type:* java.lang.String

---

##### `timeOfLastSwitchover`<sup>Required</sup> <a name="timeOfLastSwitchover" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfLastSwitchover"></a>

```java
public java.lang.String getTimeOfLastSwitchover();
```

- *Type:* java.lang.String

---

##### `timeOfNextRefresh`<sup>Required</sup> <a name="timeOfNextRefresh" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfNextRefresh"></a>

```java
public java.lang.String getTimeOfNextRefresh();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeouts"></a>

```java
public DatabaseAutonomousDatabaseTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference">DatabaseAutonomousDatabaseTimeoutsOutputReference</a>

---

##### `timeReclamationOfFreeAutonomousDatabase`<sup>Required</sup> <a name="timeReclamationOfFreeAutonomousDatabase" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeReclamationOfFreeAutonomousDatabase"></a>

```java
public java.lang.String getTimeReclamationOfFreeAutonomousDatabase();
```

- *Type:* java.lang.String

---

##### `timeUndeleted`<sup>Required</sup> <a name="timeUndeleted" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeUndeleted"></a>

```java
public java.lang.String getTimeUndeleted();
```

- *Type:* java.lang.String

---

##### `timeUntilReconnectCloneEnabled`<sup>Required</sup> <a name="timeUntilReconnectCloneEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeUntilReconnectCloneEnabled"></a>

```java
public java.lang.String getTimeUntilReconnectCloneEnabled();
```

- *Type:* java.lang.String

---

##### `totalBackupStorageSizeInGbs`<sup>Required</sup> <a name="totalBackupStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.totalBackupStorageSizeInGbs"></a>

```java
public java.lang.Number getTotalBackupStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `usedDataStorageSizeInGbs`<sup>Required</sup> <a name="usedDataStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.usedDataStorageSizeInGbs"></a>

```java
public java.lang.Number getUsedDataStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `usedDataStorageSizeInTbs`<sup>Required</sup> <a name="usedDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.usedDataStorageSizeInTbs"></a>

```java
public java.lang.Number getUsedDataStorageSizeInTbs();
```

- *Type:* java.lang.Number

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.adminPasswordInput"></a>

```java
public java.lang.String getAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `arePrimaryWhitelistedIpsUsedInput`<sup>Optional</sup> <a name="arePrimaryWhitelistedIpsUsedInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.arePrimaryWhitelistedIpsUsedInput"></a>

```java
public java.lang.Object getArePrimaryWhitelistedIpsUsedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autonomousContainerDatabaseIdInput`<sup>Optional</sup> <a name="autonomousContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousContainerDatabaseIdInput"></a>

```java
public java.lang.String getAutonomousContainerDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `autonomousDatabaseBackupIdInput`<sup>Optional</sup> <a name="autonomousDatabaseBackupIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousDatabaseBackupIdInput"></a>

```java
public java.lang.String getAutonomousDatabaseBackupIdInput();
```

- *Type:* java.lang.String

---

##### `autonomousDatabaseIdInput`<sup>Optional</sup> <a name="autonomousDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousDatabaseIdInput"></a>

```java
public java.lang.String getAutonomousDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `autonomousMaintenanceScheduleTypeInput`<sup>Optional</sup> <a name="autonomousMaintenanceScheduleTypeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousMaintenanceScheduleTypeInput"></a>

```java
public java.lang.String getAutonomousMaintenanceScheduleTypeInput();
```

- *Type:* java.lang.String

---

##### `autoRefreshFrequencyInSecondsInput`<sup>Optional</sup> <a name="autoRefreshFrequencyInSecondsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autoRefreshFrequencyInSecondsInput"></a>

```java
public java.lang.Number getAutoRefreshFrequencyInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `autoRefreshPointLagInSecondsInput`<sup>Optional</sup> <a name="autoRefreshPointLagInSecondsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autoRefreshPointLagInSecondsInput"></a>

```java
public java.lang.Number getAutoRefreshPointLagInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `backupRetentionPeriodInDaysInput`<sup>Optional</sup> <a name="backupRetentionPeriodInDaysInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.backupRetentionPeriodInDaysInput"></a>

```java
public java.lang.Number getBackupRetentionPeriodInDaysInput();
```

- *Type:* java.lang.Number

---

##### `byolComputeCountLimitInput`<sup>Optional</sup> <a name="byolComputeCountLimitInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.byolComputeCountLimitInput"></a>

```java
public java.lang.Number getByolComputeCountLimitInput();
```

- *Type:* java.lang.Number

---

##### `characterSetInput`<sup>Optional</sup> <a name="characterSetInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.characterSetInput"></a>

```java
public java.lang.String getCharacterSetInput();
```

- *Type:* java.lang.String

---

##### `cloneTypeInput`<sup>Optional</sup> <a name="cloneTypeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cloneTypeInput"></a>

```java
public java.lang.String getCloneTypeInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `computeCountInput`<sup>Optional</sup> <a name="computeCountInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.computeCountInput"></a>

```java
public java.lang.Number getComputeCountInput();
```

- *Type:* java.lang.Number

---

##### `computeModelInput`<sup>Optional</sup> <a name="computeModelInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.computeModelInput"></a>

```java
public java.lang.String getComputeModelInput();
```

- *Type:* java.lang.String

---

##### `cpuCoreCountInput`<sup>Optional</sup> <a name="cpuCoreCountInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cpuCoreCountInput"></a>

```java
public java.lang.Number getCpuCoreCountInput();
```

- *Type:* java.lang.Number

---

##### `customerContactsInput`<sup>Optional</sup> <a name="customerContactsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.customerContactsInput"></a>

```java
public java.lang.Object getCustomerContactsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>>

---

##### `databaseEditionInput`<sup>Optional</sup> <a name="databaseEditionInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.databaseEditionInput"></a>

```java
public java.lang.String getDatabaseEditionInput();
```

- *Type:* java.lang.String

---

##### `databaseManagementStatusInput`<sup>Optional</sup> <a name="databaseManagementStatusInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.databaseManagementStatusInput"></a>

```java
public java.lang.String getDatabaseManagementStatusInput();
```

- *Type:* java.lang.String

---

##### `dataSafeStatusInput`<sup>Optional</sup> <a name="dataSafeStatusInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataSafeStatusInput"></a>

```java
public java.lang.String getDataSafeStatusInput();
```

- *Type:* java.lang.String

---

##### `dataStorageSizeInGbInput`<sup>Optional</sup> <a name="dataStorageSizeInGbInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataStorageSizeInGbInput"></a>

```java
public java.lang.Number getDataStorageSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeInTbsInput`<sup>Optional</sup> <a name="dataStorageSizeInTbsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataStorageSizeInTbsInput"></a>

```java
public java.lang.Number getDataStorageSizeInTbsInput();
```

- *Type:* java.lang.Number

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbNameInput"></a>

```java
public java.lang.String getDbNameInput();
```

- *Type:* java.lang.String

---

##### `dbToolsDetailsInput`<sup>Optional</sup> <a name="dbToolsDetailsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbToolsDetailsInput"></a>

```java
public java.lang.Object getDbToolsDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>>

---

##### `dbVersionInput`<sup>Optional</sup> <a name="dbVersionInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbVersionInput"></a>

```java
public java.lang.String getDbVersionInput();
```

- *Type:* java.lang.String

---

##### `dbWorkloadInput`<sup>Optional</sup> <a name="dbWorkloadInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbWorkloadInput"></a>

```java
public java.lang.String getDbWorkloadInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `disasterRecoveryTypeInput`<sup>Optional</sup> <a name="disasterRecoveryTypeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.disasterRecoveryTypeInput"></a>

```java
public java.lang.String getDisasterRecoveryTypeInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.encryptionKeyInput"></a>

```java
public DatabaseAutonomousDatabaseEncryptionKey getEncryptionKeyInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey">DatabaseAutonomousDatabaseEncryptionKey</a>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inMemoryPercentageInput`<sup>Optional</sup> <a name="inMemoryPercentageInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.inMemoryPercentageInput"></a>

```java
public java.lang.Number getInMemoryPercentageInput();
```

- *Type:* java.lang.Number

---

##### `isAccessControlEnabledInput`<sup>Optional</sup> <a name="isAccessControlEnabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAccessControlEnabledInput"></a>

```java
public java.lang.Object getIsAccessControlEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isAutoScalingEnabledInput`<sup>Optional</sup> <a name="isAutoScalingEnabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAutoScalingEnabledInput"></a>

```java
public java.lang.Object getIsAutoScalingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isAutoScalingForStorageEnabledInput`<sup>Optional</sup> <a name="isAutoScalingForStorageEnabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAutoScalingForStorageEnabledInput"></a>

```java
public java.lang.Object getIsAutoScalingForStorageEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isDataGuardEnabledInput`<sup>Optional</sup> <a name="isDataGuardEnabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDataGuardEnabledInput"></a>

```java
public java.lang.Object getIsDataGuardEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isDedicatedInput`<sup>Optional</sup> <a name="isDedicatedInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDedicatedInput"></a>

```java
public java.lang.Object getIsDedicatedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isDevTierInput`<sup>Optional</sup> <a name="isDevTierInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDevTierInput"></a>

```java
public java.lang.Object getIsDevTierInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isFreeTierInput`<sup>Optional</sup> <a name="isFreeTierInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isFreeTierInput"></a>

```java
public java.lang.Object getIsFreeTierInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isLocalDataGuardEnabledInput`<sup>Optional</sup> <a name="isLocalDataGuardEnabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isLocalDataGuardEnabledInput"></a>

```java
public java.lang.Object getIsLocalDataGuardEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isMtlsConnectionRequiredInput`<sup>Optional</sup> <a name="isMtlsConnectionRequiredInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isMtlsConnectionRequiredInput"></a>

```java
public java.lang.Object getIsMtlsConnectionRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPreviewVersionWithServiceTermsAcceptedInput`<sup>Optional</sup> <a name="isPreviewVersionWithServiceTermsAcceptedInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isPreviewVersionWithServiceTermsAcceptedInput"></a>

```java
public java.lang.Object getIsPreviewVersionWithServiceTermsAcceptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRefreshableCloneInput`<sup>Optional</sup> <a name="isRefreshableCloneInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isRefreshableCloneInput"></a>

```java
public java.lang.Object getIsRefreshableCloneInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isReplicateAutomaticBackupsInput`<sup>Optional</sup> <a name="isReplicateAutomaticBackupsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isReplicateAutomaticBackupsInput"></a>

```java
public java.lang.Object getIsReplicateAutomaticBackupsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isShrinkOnlyInput`<sup>Optional</sup> <a name="isShrinkOnlyInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isShrinkOnlyInput"></a>

```java
public java.lang.Object getIsShrinkOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.licenseModelInput"></a>

```java
public java.lang.String getLicenseModelInput();
```

- *Type:* java.lang.String

---

##### `localAdgAutoFailoverMaxDataLossLimitInput`<sup>Optional</sup> <a name="localAdgAutoFailoverMaxDataLossLimitInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimitInput"></a>

```java
public java.lang.Number getLocalAdgAutoFailoverMaxDataLossLimitInput();
```

- *Type:* java.lang.Number

---

##### `longTermBackupScheduleInput`<sup>Optional</sup> <a name="longTermBackupScheduleInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.longTermBackupScheduleInput"></a>

```java
public java.lang.Object getLongTermBackupScheduleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>>

---

##### `maxCpuCoreCountInput`<sup>Optional</sup> <a name="maxCpuCoreCountInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.maxCpuCoreCountInput"></a>

```java
public java.lang.Number getMaxCpuCoreCountInput();
```

- *Type:* java.lang.Number

---

##### `ncharacterSetInput`<sup>Optional</sup> <a name="ncharacterSetInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.ncharacterSetInput"></a>

```java
public java.lang.String getNcharacterSetInput();
```

- *Type:* java.lang.String

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.nsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ocpuCountInput`<sup>Optional</sup> <a name="ocpuCountInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.ocpuCountInput"></a>

```java
public java.lang.Number getOcpuCountInput();
```

- *Type:* java.lang.Number

---

##### `openModeInput`<sup>Optional</sup> <a name="openModeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.openModeInput"></a>

```java
public java.lang.String getOpenModeInput();
```

- *Type:* java.lang.String

---

##### `operationsInsightsStatusInput`<sup>Optional</sup> <a name="operationsInsightsStatusInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.operationsInsightsStatusInput"></a>

```java
public java.lang.String getOperationsInsightsStatusInput();
```

- *Type:* java.lang.String

---

##### `permissionLevelInput`<sup>Optional</sup> <a name="permissionLevelInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.permissionLevelInput"></a>

```java
public java.lang.String getPermissionLevelInput();
```

- *Type:* java.lang.String

---

##### `privateEndpointIpInput`<sup>Optional</sup> <a name="privateEndpointIpInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpointIpInput"></a>

```java
public java.lang.String getPrivateEndpointIpInput();
```

- *Type:* java.lang.String

---

##### `privateEndpointLabelInput`<sup>Optional</sup> <a name="privateEndpointLabelInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpointLabelInput"></a>

```java
public java.lang.String getPrivateEndpointLabelInput();
```

- *Type:* java.lang.String

---

##### `refreshableModeInput`<sup>Optional</sup> <a name="refreshableModeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.refreshableModeInput"></a>

```java
public java.lang.String getRefreshableModeInput();
```

- *Type:* java.lang.String

---

##### `remoteDisasterRecoveryTypeInput`<sup>Optional</sup> <a name="remoteDisasterRecoveryTypeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.remoteDisasterRecoveryTypeInput"></a>

```java
public java.lang.String getRemoteDisasterRecoveryTypeInput();
```

- *Type:* java.lang.String

---

##### `resourcePoolLeaderIdInput`<sup>Optional</sup> <a name="resourcePoolLeaderIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.resourcePoolLeaderIdInput"></a>

```java
public java.lang.String getResourcePoolLeaderIdInput();
```

- *Type:* java.lang.String

---

##### `resourcePoolSummaryInput`<sup>Optional</sup> <a name="resourcePoolSummaryInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.resourcePoolSummaryInput"></a>

```java
public DatabaseAutonomousDatabaseResourcePoolSummary getResourcePoolSummaryInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary">DatabaseAutonomousDatabaseResourcePoolSummary</a>

---

##### `rotateKeyTriggerInput`<sup>Optional</sup> <a name="rotateKeyTriggerInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.rotateKeyTriggerInput"></a>

```java
public java.lang.Object getRotateKeyTriggerInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scheduledOperationsInput`<sup>Optional</sup> <a name="scheduledOperationsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.scheduledOperationsInput"></a>

```java
public java.lang.Object getScheduledOperationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>>

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `secretVersionNumberInput`<sup>Optional</sup> <a name="secretVersionNumberInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.secretVersionNumberInput"></a>

```java
public java.lang.Number getSecretVersionNumberInput();
```

- *Type:* java.lang.Number

---

##### `securityAttributesInput`<sup>Optional</sup> <a name="securityAttributesInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.securityAttributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `shrinkAdbTriggerInput`<sup>Optional</sup> <a name="shrinkAdbTriggerInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.shrinkAdbTriggerInput"></a>

```java
public java.lang.Number getShrinkAdbTriggerInput();
```

- *Type:* java.lang.Number

---

##### `sourceIdInput`<sup>Optional</sup> <a name="sourceIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.sourceIdInput"></a>

```java
public java.lang.String getSourceIdInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `standbyWhitelistedIpsInput`<sup>Optional</sup> <a name="standbyWhitelistedIpsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.standbyWhitelistedIpsInput"></a>

```java
public java.util.List<java.lang.String> getStandbyWhitelistedIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `switchoverToInput`<sup>Optional</sup> <a name="switchoverToInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.switchoverToInput"></a>

```java
public java.lang.String getSwitchoverToInput();
```

- *Type:* java.lang.String

---

##### `switchoverToRemotePeerIdInput`<sup>Optional</sup> <a name="switchoverToRemotePeerIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.switchoverToRemotePeerIdInput"></a>

```java
public java.lang.String getSwitchoverToRemotePeerIdInput();
```

- *Type:* java.lang.String

---

##### `timeOfAutoRefreshStartInput`<sup>Optional</sup> <a name="timeOfAutoRefreshStartInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfAutoRefreshStartInput"></a>

```java
public java.lang.String getTimeOfAutoRefreshStartInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts">DatabaseAutonomousDatabaseTimeouts</a>

---

##### `timestampInput`<sup>Optional</sup> <a name="timestampInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timestampInput"></a>

```java
public java.lang.String getTimestampInput();
```

- *Type:* java.lang.String

---

##### `useLatestAvailableBackupTimeStampInput`<sup>Optional</sup> <a name="useLatestAvailableBackupTimeStampInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.useLatestAvailableBackupTimeStampInput"></a>

```java
public java.lang.Object getUseLatestAvailableBackupTimeStampInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.vaultIdInput"></a>

```java
public java.lang.String getVaultIdInput();
```

- *Type:* java.lang.String

---

##### `whitelistedIpsInput`<sup>Optional</sup> <a name="whitelistedIpsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.whitelistedIpsInput"></a>

```java
public java.util.List<java.lang.String> getWhitelistedIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

---

##### `arePrimaryWhitelistedIpsUsed`<sup>Required</sup> <a name="arePrimaryWhitelistedIpsUsed" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.arePrimaryWhitelistedIpsUsed"></a>

```java
public java.lang.Object getArePrimaryWhitelistedIpsUsed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autonomousContainerDatabaseId`<sup>Required</sup> <a name="autonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousContainerDatabaseId"></a>

```java
public java.lang.String getAutonomousContainerDatabaseId();
```

- *Type:* java.lang.String

---

##### `autonomousDatabaseBackupId`<sup>Required</sup> <a name="autonomousDatabaseBackupId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousDatabaseBackupId"></a>

```java
public java.lang.String getAutonomousDatabaseBackupId();
```

- *Type:* java.lang.String

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousDatabaseId"></a>

```java
public java.lang.String getAutonomousDatabaseId();
```

- *Type:* java.lang.String

---

##### `autonomousMaintenanceScheduleType`<sup>Required</sup> <a name="autonomousMaintenanceScheduleType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousMaintenanceScheduleType"></a>

```java
public java.lang.String getAutonomousMaintenanceScheduleType();
```

- *Type:* java.lang.String

---

##### `autoRefreshFrequencyInSeconds`<sup>Required</sup> <a name="autoRefreshFrequencyInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autoRefreshFrequencyInSeconds"></a>

```java
public java.lang.Number getAutoRefreshFrequencyInSeconds();
```

- *Type:* java.lang.Number

---

##### `autoRefreshPointLagInSeconds`<sup>Required</sup> <a name="autoRefreshPointLagInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autoRefreshPointLagInSeconds"></a>

```java
public java.lang.Number getAutoRefreshPointLagInSeconds();
```

- *Type:* java.lang.Number

---

##### `backupRetentionPeriodInDays`<sup>Required</sup> <a name="backupRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.backupRetentionPeriodInDays"></a>

```java
public java.lang.Number getBackupRetentionPeriodInDays();
```

- *Type:* java.lang.Number

---

##### `byolComputeCountLimit`<sup>Required</sup> <a name="byolComputeCountLimit" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.byolComputeCountLimit"></a>

```java
public java.lang.Number getByolComputeCountLimit();
```

- *Type:* java.lang.Number

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.characterSet"></a>

```java
public java.lang.String getCharacterSet();
```

- *Type:* java.lang.String

---

##### `cloneType`<sup>Required</sup> <a name="cloneType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cloneType"></a>

```java
public java.lang.String getCloneType();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.computeModel"></a>

```java
public java.lang.String getComputeModel();
```

- *Type:* java.lang.String

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

---

##### `databaseEdition`<sup>Required</sup> <a name="databaseEdition" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.databaseEdition"></a>

```java
public java.lang.String getDatabaseEdition();
```

- *Type:* java.lang.String

---

##### `databaseManagementStatus`<sup>Required</sup> <a name="databaseManagementStatus" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.databaseManagementStatus"></a>

```java
public java.lang.String getDatabaseManagementStatus();
```

- *Type:* java.lang.String

---

##### `dataSafeStatus`<sup>Required</sup> <a name="dataSafeStatus" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataSafeStatus"></a>

```java
public java.lang.String getDataSafeStatus();
```

- *Type:* java.lang.String

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataStorageSizeInGb"></a>

```java
public java.lang.Number getDataStorageSizeInGb();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeInTbs`<sup>Required</sup> <a name="dataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataStorageSizeInTbs"></a>

```java
public java.lang.Number getDataStorageSizeInTbs();
```

- *Type:* java.lang.Number

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbVersion"></a>

```java
public java.lang.String getDbVersion();
```

- *Type:* java.lang.String

---

##### `dbWorkload`<sup>Required</sup> <a name="dbWorkload" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbWorkload"></a>

```java
public java.lang.String getDbWorkload();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `disasterRecoveryType`<sup>Required</sup> <a name="disasterRecoveryType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.disasterRecoveryType"></a>

```java
public java.lang.String getDisasterRecoveryType();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inMemoryPercentage`<sup>Required</sup> <a name="inMemoryPercentage" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.inMemoryPercentage"></a>

```java
public java.lang.Number getInMemoryPercentage();
```

- *Type:* java.lang.Number

---

##### `isAccessControlEnabled`<sup>Required</sup> <a name="isAccessControlEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAccessControlEnabled"></a>

```java
public java.lang.Object getIsAccessControlEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isAutoScalingEnabled`<sup>Required</sup> <a name="isAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAutoScalingEnabled"></a>

```java
public java.lang.Object getIsAutoScalingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isAutoScalingForStorageEnabled`<sup>Required</sup> <a name="isAutoScalingForStorageEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAutoScalingForStorageEnabled"></a>

```java
public java.lang.Object getIsAutoScalingForStorageEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isDataGuardEnabled`<sup>Required</sup> <a name="isDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDataGuardEnabled"></a>

```java
public java.lang.Object getIsDataGuardEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isDedicated`<sup>Required</sup> <a name="isDedicated" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDedicated"></a>

```java
public java.lang.Object getIsDedicated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isDevTier`<sup>Required</sup> <a name="isDevTier" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDevTier"></a>

```java
public java.lang.Object getIsDevTier();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isFreeTier`<sup>Required</sup> <a name="isFreeTier" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isFreeTier"></a>

```java
public java.lang.Object getIsFreeTier();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isLocalDataGuardEnabled`<sup>Required</sup> <a name="isLocalDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isLocalDataGuardEnabled"></a>

```java
public java.lang.Object getIsLocalDataGuardEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isMtlsConnectionRequired`<sup>Required</sup> <a name="isMtlsConnectionRequired" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isMtlsConnectionRequired"></a>

```java
public java.lang.Object getIsMtlsConnectionRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPreviewVersionWithServiceTermsAccepted`<sup>Required</sup> <a name="isPreviewVersionWithServiceTermsAccepted" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isPreviewVersionWithServiceTermsAccepted"></a>

```java
public java.lang.Object getIsPreviewVersionWithServiceTermsAccepted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRefreshableClone`<sup>Required</sup> <a name="isRefreshableClone" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isRefreshableClone"></a>

```java
public java.lang.Object getIsRefreshableClone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isReplicateAutomaticBackups`<sup>Required</sup> <a name="isReplicateAutomaticBackups" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isReplicateAutomaticBackups"></a>

```java
public java.lang.Object getIsReplicateAutomaticBackups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isShrinkOnly`<sup>Required</sup> <a name="isShrinkOnly" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isShrinkOnly"></a>

```java
public java.lang.Object getIsShrinkOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `localAdgAutoFailoverMaxDataLossLimit`<sup>Required</sup> <a name="localAdgAutoFailoverMaxDataLossLimit" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```java
public java.lang.Number getLocalAdgAutoFailoverMaxDataLossLimit();
```

- *Type:* java.lang.Number

---

##### `maxCpuCoreCount`<sup>Required</sup> <a name="maxCpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.maxCpuCoreCount"></a>

```java
public java.lang.Number getMaxCpuCoreCount();
```

- *Type:* java.lang.Number

---

##### `ncharacterSet`<sup>Required</sup> <a name="ncharacterSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.ncharacterSet"></a>

```java
public java.lang.String getNcharacterSet();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ocpuCount`<sup>Required</sup> <a name="ocpuCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.ocpuCount"></a>

```java
public java.lang.Number getOcpuCount();
```

- *Type:* java.lang.Number

---

##### `openMode`<sup>Required</sup> <a name="openMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.openMode"></a>

```java
public java.lang.String getOpenMode();
```

- *Type:* java.lang.String

---

##### `operationsInsightsStatus`<sup>Required</sup> <a name="operationsInsightsStatus" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.operationsInsightsStatus"></a>

```java
public java.lang.String getOperationsInsightsStatus();
```

- *Type:* java.lang.String

---

##### `permissionLevel`<sup>Required</sup> <a name="permissionLevel" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.permissionLevel"></a>

```java
public java.lang.String getPermissionLevel();
```

- *Type:* java.lang.String

---

##### `privateEndpointIp`<sup>Required</sup> <a name="privateEndpointIp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpointIp"></a>

```java
public java.lang.String getPrivateEndpointIp();
```

- *Type:* java.lang.String

---

##### `privateEndpointLabel`<sup>Required</sup> <a name="privateEndpointLabel" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpointLabel"></a>

```java
public java.lang.String getPrivateEndpointLabel();
```

- *Type:* java.lang.String

---

##### `refreshableMode`<sup>Required</sup> <a name="refreshableMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.refreshableMode"></a>

```java
public java.lang.String getRefreshableMode();
```

- *Type:* java.lang.String

---

##### `remoteDisasterRecoveryType`<sup>Required</sup> <a name="remoteDisasterRecoveryType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.remoteDisasterRecoveryType"></a>

```java
public java.lang.String getRemoteDisasterRecoveryType();
```

- *Type:* java.lang.String

---

##### `resourcePoolLeaderId`<sup>Required</sup> <a name="resourcePoolLeaderId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.resourcePoolLeaderId"></a>

```java
public java.lang.String getResourcePoolLeaderId();
```

- *Type:* java.lang.String

---

##### `rotateKeyTrigger`<sup>Required</sup> <a name="rotateKeyTrigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.rotateKeyTrigger"></a>

```java
public java.lang.Object getRotateKeyTrigger();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `secretVersionNumber`<sup>Required</sup> <a name="secretVersionNumber" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.secretVersionNumber"></a>

```java
public java.lang.Number getSecretVersionNumber();
```

- *Type:* java.lang.Number

---

##### `securityAttributes`<sup>Required</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.securityAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `shrinkAdbTrigger`<sup>Required</sup> <a name="shrinkAdbTrigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.shrinkAdbTrigger"></a>

```java
public java.lang.Number getShrinkAdbTrigger();
```

- *Type:* java.lang.Number

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.sourceId"></a>

```java
public java.lang.String getSourceId();
```

- *Type:* java.lang.String

---

##### `standbyWhitelistedIps`<sup>Required</sup> <a name="standbyWhitelistedIps" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.standbyWhitelistedIps"></a>

```java
public java.util.List<java.lang.String> getStandbyWhitelistedIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `switchoverTo`<sup>Required</sup> <a name="switchoverTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.switchoverTo"></a>

```java
public java.lang.String getSwitchoverTo();
```

- *Type:* java.lang.String

---

##### `switchoverToRemotePeerId`<sup>Required</sup> <a name="switchoverToRemotePeerId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.switchoverToRemotePeerId"></a>

```java
public java.lang.String getSwitchoverToRemotePeerId();
```

- *Type:* java.lang.String

---

##### `timeOfAutoRefreshStart`<sup>Required</sup> <a name="timeOfAutoRefreshStart" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfAutoRefreshStart"></a>

```java
public java.lang.String getTimeOfAutoRefreshStart();
```

- *Type:* java.lang.String

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

---

##### `useLatestAvailableBackupTimeStamp`<sup>Required</sup> <a name="useLatestAvailableBackupTimeStamp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.useLatestAvailableBackupTimeStamp"></a>

```java
public java.lang.Object getUseLatestAvailableBackupTimeStamp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

---

##### `whitelistedIps`<sup>Required</sup> <a name="whitelistedIps" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.whitelistedIps"></a>

```java
public java.util.List<java.lang.String> getWhitelistedIps();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousDatabaseApexDetails <a name="DatabaseAutonomousDatabaseApexDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseApexDetails;

DatabaseAutonomousDatabaseApexDetails.builder()
    .build();
```


### DatabaseAutonomousDatabaseBackupConfig <a name="DatabaseAutonomousDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseBackupConfig;

DatabaseAutonomousDatabaseBackupConfig.builder()
    .build();
```


### DatabaseAutonomousDatabaseConfig <a name="DatabaseAutonomousDatabaseConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseConfig;

DatabaseAutonomousDatabaseConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
    .dbName(java.lang.String)
//  .adminPassword(java.lang.String)
//  .arePrimaryWhitelistedIpsUsed(java.lang.Boolean)
//  .arePrimaryWhitelistedIpsUsed(IResolvable)
//  .autonomousContainerDatabaseId(java.lang.String)
//  .autonomousDatabaseBackupId(java.lang.String)
//  .autonomousDatabaseId(java.lang.String)
//  .autonomousMaintenanceScheduleType(java.lang.String)
//  .autoRefreshFrequencyInSeconds(java.lang.Number)
//  .autoRefreshPointLagInSeconds(java.lang.Number)
//  .backupRetentionPeriodInDays(java.lang.Number)
//  .byolComputeCountLimit(java.lang.Number)
//  .characterSet(java.lang.String)
//  .cloneType(java.lang.String)
//  .computeCount(java.lang.Number)
//  .computeModel(java.lang.String)
//  .cpuCoreCount(java.lang.Number)
//  .customerContacts(IResolvable)
//  .customerContacts(java.util.List<DatabaseAutonomousDatabaseCustomerContacts>)
//  .databaseEdition(java.lang.String)
//  .databaseManagementStatus(java.lang.String)
//  .dataSafeStatus(java.lang.String)
//  .dataStorageSizeInGb(java.lang.Number)
//  .dataStorageSizeInTbs(java.lang.Number)
//  .dbToolsDetails(IResolvable)
//  .dbToolsDetails(java.util.List<DatabaseAutonomousDatabaseDbToolsDetails>)
//  .dbVersion(java.lang.String)
//  .dbWorkload(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .disasterRecoveryType(java.lang.String)
//  .displayName(java.lang.String)
//  .encryptionKey(DatabaseAutonomousDatabaseEncryptionKey)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .inMemoryPercentage(java.lang.Number)
//  .isAccessControlEnabled(java.lang.Boolean)
//  .isAccessControlEnabled(IResolvable)
//  .isAutoScalingEnabled(java.lang.Boolean)
//  .isAutoScalingEnabled(IResolvable)
//  .isAutoScalingForStorageEnabled(java.lang.Boolean)
//  .isAutoScalingForStorageEnabled(IResolvable)
//  .isDataGuardEnabled(java.lang.Boolean)
//  .isDataGuardEnabled(IResolvable)
//  .isDedicated(java.lang.Boolean)
//  .isDedicated(IResolvable)
//  .isDevTier(java.lang.Boolean)
//  .isDevTier(IResolvable)
//  .isFreeTier(java.lang.Boolean)
//  .isFreeTier(IResolvable)
//  .isLocalDataGuardEnabled(java.lang.Boolean)
//  .isLocalDataGuardEnabled(IResolvable)
//  .isMtlsConnectionRequired(java.lang.Boolean)
//  .isMtlsConnectionRequired(IResolvable)
//  .isPreviewVersionWithServiceTermsAccepted(java.lang.Boolean)
//  .isPreviewVersionWithServiceTermsAccepted(IResolvable)
//  .isRefreshableClone(java.lang.Boolean)
//  .isRefreshableClone(IResolvable)
//  .isReplicateAutomaticBackups(java.lang.Boolean)
//  .isReplicateAutomaticBackups(IResolvable)
//  .isShrinkOnly(java.lang.Boolean)
//  .isShrinkOnly(IResolvable)
//  .kmsKeyId(java.lang.String)
//  .licenseModel(java.lang.String)
//  .localAdgAutoFailoverMaxDataLossLimit(java.lang.Number)
//  .longTermBackupSchedule(IResolvable)
//  .longTermBackupSchedule(java.util.List<DatabaseAutonomousDatabaseLongTermBackupSchedule>)
//  .maxCpuCoreCount(java.lang.Number)
//  .ncharacterSet(java.lang.String)
//  .nsgIds(java.util.List<java.lang.String>)
//  .ocpuCount(java.lang.Number)
//  .openMode(java.lang.String)
//  .operationsInsightsStatus(java.lang.String)
//  .permissionLevel(java.lang.String)
//  .privateEndpointIp(java.lang.String)
//  .privateEndpointLabel(java.lang.String)
//  .refreshableMode(java.lang.String)
//  .remoteDisasterRecoveryType(java.lang.String)
//  .resourcePoolLeaderId(java.lang.String)
//  .resourcePoolSummary(DatabaseAutonomousDatabaseResourcePoolSummary)
//  .rotateKeyTrigger(java.lang.Boolean)
//  .rotateKeyTrigger(IResolvable)
//  .scheduledOperations(IResolvable)
//  .scheduledOperations(java.util.List<DatabaseAutonomousDatabaseScheduledOperations>)
//  .secretId(java.lang.String)
//  .secretVersionNumber(java.lang.Number)
//  .securityAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .shrinkAdbTrigger(java.lang.Number)
//  .source(java.lang.String)
//  .sourceId(java.lang.String)
//  .standbyWhitelistedIps(java.util.List<java.lang.String>)
//  .state(java.lang.String)
//  .subnetId(java.lang.String)
//  .subscriptionId(java.lang.String)
//  .switchoverTo(java.lang.String)
//  .switchoverToRemotePeerId(java.lang.String)
//  .timeOfAutoRefreshStart(java.lang.String)
//  .timeouts(DatabaseAutonomousDatabaseTimeouts)
//  .timestamp(java.lang.String)
//  .useLatestAvailableBackupTimeStamp(java.lang.Boolean)
//  .useLatestAvailableBackupTimeStamp(IResolvable)
//  .vaultId(java.lang.String)
//  .whitelistedIps(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compartment_id DatabaseAutonomousDatabase#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dbName">dbName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_name DatabaseAutonomousDatabase#db_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#admin_password DatabaseAutonomousDatabase#admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.arePrimaryWhitelistedIpsUsed">arePrimaryWhitelistedIpsUsed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#are_primary_whitelisted_ips_used DatabaseAutonomousDatabase#are_primary_whitelisted_ips_used}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autonomousContainerDatabaseId">autonomousContainerDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_container_database_id DatabaseAutonomousDatabase#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autonomousDatabaseBackupId">autonomousDatabaseBackupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_database_backup_id DatabaseAutonomousDatabase#autonomous_database_backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_database_id DatabaseAutonomousDatabase#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autonomousMaintenanceScheduleType">autonomousMaintenanceScheduleType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_maintenance_schedule_type DatabaseAutonomousDatabase#autonomous_maintenance_schedule_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autoRefreshFrequencyInSeconds">autoRefreshFrequencyInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#auto_refresh_frequency_in_seconds DatabaseAutonomousDatabase#auto_refresh_frequency_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autoRefreshPointLagInSeconds">autoRefreshPointLagInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#auto_refresh_point_lag_in_seconds DatabaseAutonomousDatabase#auto_refresh_point_lag_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.backupRetentionPeriodInDays">backupRetentionPeriodInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#backup_retention_period_in_days DatabaseAutonomousDatabase#backup_retention_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.byolComputeCountLimit">byolComputeCountLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#byol_compute_count_limit DatabaseAutonomousDatabase#byol_compute_count_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.characterSet">characterSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#character_set DatabaseAutonomousDatabase#character_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.cloneType">cloneType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#clone_type DatabaseAutonomousDatabase#clone_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compute_count DatabaseAutonomousDatabase#compute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.computeModel">computeModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compute_model DatabaseAutonomousDatabase#compute_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#cpu_core_count DatabaseAutonomousDatabase#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.customerContacts">customerContacts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>></code> | customer_contacts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.databaseEdition">databaseEdition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#database_edition DatabaseAutonomousDatabase#database_edition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.databaseManagementStatus">databaseManagementStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#database_management_status DatabaseAutonomousDatabase#database_management_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dataSafeStatus">dataSafeStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_safe_status DatabaseAutonomousDatabase#data_safe_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_storage_size_in_gb DatabaseAutonomousDatabase#data_storage_size_in_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_storage_size_in_tbs DatabaseAutonomousDatabase#data_storage_size_in_tbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dbToolsDetails">dbToolsDetails</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>></code> | db_tools_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_version DatabaseAutonomousDatabase#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dbWorkload">dbWorkload</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_workload DatabaseAutonomousDatabase#db_workload}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#defined_tags DatabaseAutonomousDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.disasterRecoveryType">disasterRecoveryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#disaster_recovery_type DatabaseAutonomousDatabase#disaster_recovery_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#display_name DatabaseAutonomousDatabase#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.encryptionKey">encryptionKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey">DatabaseAutonomousDatabaseEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#freeform_tags DatabaseAutonomousDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#id DatabaseAutonomousDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.inMemoryPercentage">inMemoryPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#in_memory_percentage DatabaseAutonomousDatabase#in_memory_percentage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isAccessControlEnabled">isAccessControlEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_access_control_enabled DatabaseAutonomousDatabase#is_access_control_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_auto_scaling_enabled DatabaseAutonomousDatabase#is_auto_scaling_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isAutoScalingForStorageEnabled">isAutoScalingForStorageEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_auto_scaling_for_storage_enabled DatabaseAutonomousDatabase#is_auto_scaling_for_storage_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isDataGuardEnabled">isDataGuardEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_data_guard_enabled DatabaseAutonomousDatabase#is_data_guard_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isDedicated">isDedicated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_dedicated DatabaseAutonomousDatabase#is_dedicated}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isDevTier">isDevTier</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_dev_tier DatabaseAutonomousDatabase#is_dev_tier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isFreeTier">isFreeTier</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_free_tier DatabaseAutonomousDatabase#is_free_tier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isLocalDataGuardEnabled">isLocalDataGuardEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_local_data_guard_enabled DatabaseAutonomousDatabase#is_local_data_guard_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isMtlsConnectionRequired">isMtlsConnectionRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_mtls_connection_required DatabaseAutonomousDatabase#is_mtls_connection_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isPreviewVersionWithServiceTermsAccepted">isPreviewVersionWithServiceTermsAccepted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_preview_version_with_service_terms_accepted DatabaseAutonomousDatabase#is_preview_version_with_service_terms_accepted}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isRefreshableClone">isRefreshableClone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_refreshable_clone DatabaseAutonomousDatabase#is_refreshable_clone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isReplicateAutomaticBackups">isReplicateAutomaticBackups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_replicate_automatic_backups DatabaseAutonomousDatabase#is_replicate_automatic_backups}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isShrinkOnly">isShrinkOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_shrink_only DatabaseAutonomousDatabase#is_shrink_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#kms_key_id DatabaseAutonomousDatabase#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#license_model DatabaseAutonomousDatabase#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.localAdgAutoFailoverMaxDataLossLimit">localAdgAutoFailoverMaxDataLossLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#local_adg_auto_failover_max_data_loss_limit DatabaseAutonomousDatabase#local_adg_auto_failover_max_data_loss_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.longTermBackupSchedule">longTermBackupSchedule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>></code> | long_term_backup_schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.maxCpuCoreCount">maxCpuCoreCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#max_cpu_core_count DatabaseAutonomousDatabase#max_cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.ncharacterSet">ncharacterSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#ncharacter_set DatabaseAutonomousDatabase#ncharacter_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#nsg_ids DatabaseAutonomousDatabase#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.ocpuCount">ocpuCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#ocpu_count DatabaseAutonomousDatabase#ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.openMode">openMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#open_mode DatabaseAutonomousDatabase#open_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.operationsInsightsStatus">operationsInsightsStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#operations_insights_status DatabaseAutonomousDatabase#operations_insights_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.permissionLevel">permissionLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#permission_level DatabaseAutonomousDatabase#permission_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.privateEndpointIp">privateEndpointIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#private_endpoint_ip DatabaseAutonomousDatabase#private_endpoint_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.privateEndpointLabel">privateEndpointLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#private_endpoint_label DatabaseAutonomousDatabase#private_endpoint_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.refreshableMode">refreshableMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#refreshable_mode DatabaseAutonomousDatabase#refreshable_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.remoteDisasterRecoveryType">remoteDisasterRecoveryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#remote_disaster_recovery_type DatabaseAutonomousDatabase#remote_disaster_recovery_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.resourcePoolLeaderId">resourcePoolLeaderId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#resource_pool_leader_id DatabaseAutonomousDatabase#resource_pool_leader_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.resourcePoolSummary">resourcePoolSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary">DatabaseAutonomousDatabaseResourcePoolSummary</a></code> | resource_pool_summary block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.rotateKeyTrigger">rotateKeyTrigger</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#rotate_key_trigger DatabaseAutonomousDatabase#rotate_key_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.scheduledOperations">scheduledOperations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>></code> | scheduled_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.secretId">secretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#secret_id DatabaseAutonomousDatabase#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.secretVersionNumber">secretVersionNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#secret_version_number DatabaseAutonomousDatabase#secret_version_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.securityAttributes">securityAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#security_attributes DatabaseAutonomousDatabase#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.shrinkAdbTrigger">shrinkAdbTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#shrink_adb_trigger DatabaseAutonomousDatabase#shrink_adb_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#source DatabaseAutonomousDatabase#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.sourceId">sourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#source_id DatabaseAutonomousDatabase#source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.standbyWhitelistedIps">standbyWhitelistedIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#standby_whitelisted_ips DatabaseAutonomousDatabase#standby_whitelisted_ips}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#state DatabaseAutonomousDatabase#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#subnet_id DatabaseAutonomousDatabase#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#subscription_id DatabaseAutonomousDatabase#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.switchoverTo">switchoverTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#switchover_to DatabaseAutonomousDatabase#switchover_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.switchoverToRemotePeerId">switchoverToRemotePeerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#switchover_to_remote_peer_id DatabaseAutonomousDatabase#switchover_to_remote_peer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.timeOfAutoRefreshStart">timeOfAutoRefreshStart</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#time_of_auto_refresh_start DatabaseAutonomousDatabase#time_of_auto_refresh_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts">DatabaseAutonomousDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#timestamp DatabaseAutonomousDatabase#timestamp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.useLatestAvailableBackupTimeStamp">useLatestAvailableBackupTimeStamp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#use_latest_available_backup_time_stamp DatabaseAutonomousDatabase#use_latest_available_backup_time_stamp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#vault_id DatabaseAutonomousDatabase#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.whitelistedIps">whitelistedIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#whitelisted_ips DatabaseAutonomousDatabase#whitelisted_ips}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compartment_id DatabaseAutonomousDatabase#compartment_id}.

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_name DatabaseAutonomousDatabase#db_name}.

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#admin_password DatabaseAutonomousDatabase#admin_password}.

---

##### `arePrimaryWhitelistedIpsUsed`<sup>Optional</sup> <a name="arePrimaryWhitelistedIpsUsed" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.arePrimaryWhitelistedIpsUsed"></a>

```java
public java.lang.Object getArePrimaryWhitelistedIpsUsed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#are_primary_whitelisted_ips_used DatabaseAutonomousDatabase#are_primary_whitelisted_ips_used}.

---

##### `autonomousContainerDatabaseId`<sup>Optional</sup> <a name="autonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autonomousContainerDatabaseId"></a>

```java
public java.lang.String getAutonomousContainerDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_container_database_id DatabaseAutonomousDatabase#autonomous_container_database_id}.

---

##### `autonomousDatabaseBackupId`<sup>Optional</sup> <a name="autonomousDatabaseBackupId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autonomousDatabaseBackupId"></a>

```java
public java.lang.String getAutonomousDatabaseBackupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_database_backup_id DatabaseAutonomousDatabase#autonomous_database_backup_id}.

---

##### `autonomousDatabaseId`<sup>Optional</sup> <a name="autonomousDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autonomousDatabaseId"></a>

```java
public java.lang.String getAutonomousDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_database_id DatabaseAutonomousDatabase#autonomous_database_id}.

---

##### `autonomousMaintenanceScheduleType`<sup>Optional</sup> <a name="autonomousMaintenanceScheduleType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autonomousMaintenanceScheduleType"></a>

```java
public java.lang.String getAutonomousMaintenanceScheduleType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_maintenance_schedule_type DatabaseAutonomousDatabase#autonomous_maintenance_schedule_type}.

---

##### `autoRefreshFrequencyInSeconds`<sup>Optional</sup> <a name="autoRefreshFrequencyInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autoRefreshFrequencyInSeconds"></a>

```java
public java.lang.Number getAutoRefreshFrequencyInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#auto_refresh_frequency_in_seconds DatabaseAutonomousDatabase#auto_refresh_frequency_in_seconds}.

---

##### `autoRefreshPointLagInSeconds`<sup>Optional</sup> <a name="autoRefreshPointLagInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autoRefreshPointLagInSeconds"></a>

```java
public java.lang.Number getAutoRefreshPointLagInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#auto_refresh_point_lag_in_seconds DatabaseAutonomousDatabase#auto_refresh_point_lag_in_seconds}.

---

##### `backupRetentionPeriodInDays`<sup>Optional</sup> <a name="backupRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.backupRetentionPeriodInDays"></a>

```java
public java.lang.Number getBackupRetentionPeriodInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#backup_retention_period_in_days DatabaseAutonomousDatabase#backup_retention_period_in_days}.

---

##### `byolComputeCountLimit`<sup>Optional</sup> <a name="byolComputeCountLimit" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.byolComputeCountLimit"></a>

```java
public java.lang.Number getByolComputeCountLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#byol_compute_count_limit DatabaseAutonomousDatabase#byol_compute_count_limit}.

---

##### `characterSet`<sup>Optional</sup> <a name="characterSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.characterSet"></a>

```java
public java.lang.String getCharacterSet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#character_set DatabaseAutonomousDatabase#character_set}.

---

##### `cloneType`<sup>Optional</sup> <a name="cloneType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.cloneType"></a>

```java
public java.lang.String getCloneType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#clone_type DatabaseAutonomousDatabase#clone_type}.

---

##### `computeCount`<sup>Optional</sup> <a name="computeCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compute_count DatabaseAutonomousDatabase#compute_count}.

---

##### `computeModel`<sup>Optional</sup> <a name="computeModel" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.computeModel"></a>

```java
public java.lang.String getComputeModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compute_model DatabaseAutonomousDatabase#compute_model}.

---

##### `cpuCoreCount`<sup>Optional</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#cpu_core_count DatabaseAutonomousDatabase#cpu_core_count}.

---

##### `customerContacts`<sup>Optional</sup> <a name="customerContacts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.customerContacts"></a>

```java
public java.lang.Object getCustomerContacts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>>

customer_contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#customer_contacts DatabaseAutonomousDatabase#customer_contacts}

---

##### `databaseEdition`<sup>Optional</sup> <a name="databaseEdition" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.databaseEdition"></a>

```java
public java.lang.String getDatabaseEdition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#database_edition DatabaseAutonomousDatabase#database_edition}.

---

##### `databaseManagementStatus`<sup>Optional</sup> <a name="databaseManagementStatus" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.databaseManagementStatus"></a>

```java
public java.lang.String getDatabaseManagementStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#database_management_status DatabaseAutonomousDatabase#database_management_status}.

---

##### `dataSafeStatus`<sup>Optional</sup> <a name="dataSafeStatus" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dataSafeStatus"></a>

```java
public java.lang.String getDataSafeStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_safe_status DatabaseAutonomousDatabase#data_safe_status}.

---

##### `dataStorageSizeInGb`<sup>Optional</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dataStorageSizeInGb"></a>

```java
public java.lang.Number getDataStorageSizeInGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_storage_size_in_gb DatabaseAutonomousDatabase#data_storage_size_in_gb}.

---

##### `dataStorageSizeInTbs`<sup>Optional</sup> <a name="dataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dataStorageSizeInTbs"></a>

```java
public java.lang.Number getDataStorageSizeInTbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_storage_size_in_tbs DatabaseAutonomousDatabase#data_storage_size_in_tbs}.

---

##### `dbToolsDetails`<sup>Optional</sup> <a name="dbToolsDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dbToolsDetails"></a>

```java
public java.lang.Object getDbToolsDetails();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>>

db_tools_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_tools_details DatabaseAutonomousDatabase#db_tools_details}

---

##### `dbVersion`<sup>Optional</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dbVersion"></a>

```java
public java.lang.String getDbVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_version DatabaseAutonomousDatabase#db_version}.

---

##### `dbWorkload`<sup>Optional</sup> <a name="dbWorkload" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dbWorkload"></a>

```java
public java.lang.String getDbWorkload();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_workload DatabaseAutonomousDatabase#db_workload}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#defined_tags DatabaseAutonomousDatabase#defined_tags}.

---

##### `disasterRecoveryType`<sup>Optional</sup> <a name="disasterRecoveryType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.disasterRecoveryType"></a>

```java
public java.lang.String getDisasterRecoveryType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#disaster_recovery_type DatabaseAutonomousDatabase#disaster_recovery_type}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#display_name DatabaseAutonomousDatabase#display_name}.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.encryptionKey"></a>

```java
public DatabaseAutonomousDatabaseEncryptionKey getEncryptionKey();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey">DatabaseAutonomousDatabaseEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#encryption_key DatabaseAutonomousDatabase#encryption_key}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#freeform_tags DatabaseAutonomousDatabase#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#id DatabaseAutonomousDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inMemoryPercentage`<sup>Optional</sup> <a name="inMemoryPercentage" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.inMemoryPercentage"></a>

```java
public java.lang.Number getInMemoryPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#in_memory_percentage DatabaseAutonomousDatabase#in_memory_percentage}.

---

##### `isAccessControlEnabled`<sup>Optional</sup> <a name="isAccessControlEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isAccessControlEnabled"></a>

```java
public java.lang.Object getIsAccessControlEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_access_control_enabled DatabaseAutonomousDatabase#is_access_control_enabled}.

---

##### `isAutoScalingEnabled`<sup>Optional</sup> <a name="isAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isAutoScalingEnabled"></a>

```java
public java.lang.Object getIsAutoScalingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_auto_scaling_enabled DatabaseAutonomousDatabase#is_auto_scaling_enabled}.

---

##### `isAutoScalingForStorageEnabled`<sup>Optional</sup> <a name="isAutoScalingForStorageEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isAutoScalingForStorageEnabled"></a>

```java
public java.lang.Object getIsAutoScalingForStorageEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_auto_scaling_for_storage_enabled DatabaseAutonomousDatabase#is_auto_scaling_for_storage_enabled}.

---

##### `isDataGuardEnabled`<sup>Optional</sup> <a name="isDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isDataGuardEnabled"></a>

```java
public java.lang.Object getIsDataGuardEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_data_guard_enabled DatabaseAutonomousDatabase#is_data_guard_enabled}.

---

##### `isDedicated`<sup>Optional</sup> <a name="isDedicated" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isDedicated"></a>

```java
public java.lang.Object getIsDedicated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_dedicated DatabaseAutonomousDatabase#is_dedicated}.

---

##### `isDevTier`<sup>Optional</sup> <a name="isDevTier" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isDevTier"></a>

```java
public java.lang.Object getIsDevTier();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_dev_tier DatabaseAutonomousDatabase#is_dev_tier}.

---

##### `isFreeTier`<sup>Optional</sup> <a name="isFreeTier" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isFreeTier"></a>

```java
public java.lang.Object getIsFreeTier();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_free_tier DatabaseAutonomousDatabase#is_free_tier}.

---

##### `isLocalDataGuardEnabled`<sup>Optional</sup> <a name="isLocalDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isLocalDataGuardEnabled"></a>

```java
public java.lang.Object getIsLocalDataGuardEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_local_data_guard_enabled DatabaseAutonomousDatabase#is_local_data_guard_enabled}.

---

##### `isMtlsConnectionRequired`<sup>Optional</sup> <a name="isMtlsConnectionRequired" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isMtlsConnectionRequired"></a>

```java
public java.lang.Object getIsMtlsConnectionRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_mtls_connection_required DatabaseAutonomousDatabase#is_mtls_connection_required}.

---

##### `isPreviewVersionWithServiceTermsAccepted`<sup>Optional</sup> <a name="isPreviewVersionWithServiceTermsAccepted" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isPreviewVersionWithServiceTermsAccepted"></a>

```java
public java.lang.Object getIsPreviewVersionWithServiceTermsAccepted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_preview_version_with_service_terms_accepted DatabaseAutonomousDatabase#is_preview_version_with_service_terms_accepted}.

---

##### `isRefreshableClone`<sup>Optional</sup> <a name="isRefreshableClone" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isRefreshableClone"></a>

```java
public java.lang.Object getIsRefreshableClone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_refreshable_clone DatabaseAutonomousDatabase#is_refreshable_clone}.

---

##### `isReplicateAutomaticBackups`<sup>Optional</sup> <a name="isReplicateAutomaticBackups" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isReplicateAutomaticBackups"></a>

```java
public java.lang.Object getIsReplicateAutomaticBackups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_replicate_automatic_backups DatabaseAutonomousDatabase#is_replicate_automatic_backups}.

---

##### `isShrinkOnly`<sup>Optional</sup> <a name="isShrinkOnly" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isShrinkOnly"></a>

```java
public java.lang.Object getIsShrinkOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_shrink_only DatabaseAutonomousDatabase#is_shrink_only}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#kms_key_id DatabaseAutonomousDatabase#kms_key_id}.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#license_model DatabaseAutonomousDatabase#license_model}.

---

##### `localAdgAutoFailoverMaxDataLossLimit`<sup>Optional</sup> <a name="localAdgAutoFailoverMaxDataLossLimit" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```java
public java.lang.Number getLocalAdgAutoFailoverMaxDataLossLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#local_adg_auto_failover_max_data_loss_limit DatabaseAutonomousDatabase#local_adg_auto_failover_max_data_loss_limit}.

---

##### `longTermBackupSchedule`<sup>Optional</sup> <a name="longTermBackupSchedule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.longTermBackupSchedule"></a>

```java
public java.lang.Object getLongTermBackupSchedule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>>

long_term_backup_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#long_term_backup_schedule DatabaseAutonomousDatabase#long_term_backup_schedule}

---

##### `maxCpuCoreCount`<sup>Optional</sup> <a name="maxCpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.maxCpuCoreCount"></a>

```java
public java.lang.Number getMaxCpuCoreCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#max_cpu_core_count DatabaseAutonomousDatabase#max_cpu_core_count}.

---

##### `ncharacterSet`<sup>Optional</sup> <a name="ncharacterSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.ncharacterSet"></a>

```java
public java.lang.String getNcharacterSet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#ncharacter_set DatabaseAutonomousDatabase#ncharacter_set}.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#nsg_ids DatabaseAutonomousDatabase#nsg_ids}.

---

##### `ocpuCount`<sup>Optional</sup> <a name="ocpuCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.ocpuCount"></a>

```java
public java.lang.Number getOcpuCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#ocpu_count DatabaseAutonomousDatabase#ocpu_count}.

---

##### `openMode`<sup>Optional</sup> <a name="openMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.openMode"></a>

```java
public java.lang.String getOpenMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#open_mode DatabaseAutonomousDatabase#open_mode}.

---

##### `operationsInsightsStatus`<sup>Optional</sup> <a name="operationsInsightsStatus" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.operationsInsightsStatus"></a>

```java
public java.lang.String getOperationsInsightsStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#operations_insights_status DatabaseAutonomousDatabase#operations_insights_status}.

---

##### `permissionLevel`<sup>Optional</sup> <a name="permissionLevel" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.permissionLevel"></a>

```java
public java.lang.String getPermissionLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#permission_level DatabaseAutonomousDatabase#permission_level}.

---

##### `privateEndpointIp`<sup>Optional</sup> <a name="privateEndpointIp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.privateEndpointIp"></a>

```java
public java.lang.String getPrivateEndpointIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#private_endpoint_ip DatabaseAutonomousDatabase#private_endpoint_ip}.

---

##### `privateEndpointLabel`<sup>Optional</sup> <a name="privateEndpointLabel" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.privateEndpointLabel"></a>

```java
public java.lang.String getPrivateEndpointLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#private_endpoint_label DatabaseAutonomousDatabase#private_endpoint_label}.

---

##### `refreshableMode`<sup>Optional</sup> <a name="refreshableMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.refreshableMode"></a>

```java
public java.lang.String getRefreshableMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#refreshable_mode DatabaseAutonomousDatabase#refreshable_mode}.

---

##### `remoteDisasterRecoveryType`<sup>Optional</sup> <a name="remoteDisasterRecoveryType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.remoteDisasterRecoveryType"></a>

```java
public java.lang.String getRemoteDisasterRecoveryType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#remote_disaster_recovery_type DatabaseAutonomousDatabase#remote_disaster_recovery_type}.

---

##### `resourcePoolLeaderId`<sup>Optional</sup> <a name="resourcePoolLeaderId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.resourcePoolLeaderId"></a>

```java
public java.lang.String getResourcePoolLeaderId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#resource_pool_leader_id DatabaseAutonomousDatabase#resource_pool_leader_id}.

---

##### `resourcePoolSummary`<sup>Optional</sup> <a name="resourcePoolSummary" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.resourcePoolSummary"></a>

```java
public DatabaseAutonomousDatabaseResourcePoolSummary getResourcePoolSummary();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary">DatabaseAutonomousDatabaseResourcePoolSummary</a>

resource_pool_summary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#resource_pool_summary DatabaseAutonomousDatabase#resource_pool_summary}

---

##### `rotateKeyTrigger`<sup>Optional</sup> <a name="rotateKeyTrigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.rotateKeyTrigger"></a>

```java
public java.lang.Object getRotateKeyTrigger();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#rotate_key_trigger DatabaseAutonomousDatabase#rotate_key_trigger}.

---

##### `scheduledOperations`<sup>Optional</sup> <a name="scheduledOperations" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.scheduledOperations"></a>

```java
public java.lang.Object getScheduledOperations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>>

scheduled_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#scheduled_operations DatabaseAutonomousDatabase#scheduled_operations}

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#secret_id DatabaseAutonomousDatabase#secret_id}.

---

##### `secretVersionNumber`<sup>Optional</sup> <a name="secretVersionNumber" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.secretVersionNumber"></a>

```java
public java.lang.Number getSecretVersionNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#secret_version_number DatabaseAutonomousDatabase#secret_version_number}.

---

##### `securityAttributes`<sup>Optional</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.securityAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#security_attributes DatabaseAutonomousDatabase#security_attributes}.

---

##### `shrinkAdbTrigger`<sup>Optional</sup> <a name="shrinkAdbTrigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.shrinkAdbTrigger"></a>

```java
public java.lang.Number getShrinkAdbTrigger();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#shrink_adb_trigger DatabaseAutonomousDatabase#shrink_adb_trigger}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#source DatabaseAutonomousDatabase#source}.

---

##### `sourceId`<sup>Optional</sup> <a name="sourceId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.sourceId"></a>

```java
public java.lang.String getSourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#source_id DatabaseAutonomousDatabase#source_id}.

---

##### `standbyWhitelistedIps`<sup>Optional</sup> <a name="standbyWhitelistedIps" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.standbyWhitelistedIps"></a>

```java
public java.util.List<java.lang.String> getStandbyWhitelistedIps();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#standby_whitelisted_ips DatabaseAutonomousDatabase#standby_whitelisted_ips}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#state DatabaseAutonomousDatabase#state}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#subnet_id DatabaseAutonomousDatabase#subnet_id}.

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#subscription_id DatabaseAutonomousDatabase#subscription_id}.

---

##### `switchoverTo`<sup>Optional</sup> <a name="switchoverTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.switchoverTo"></a>

```java
public java.lang.String getSwitchoverTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#switchover_to DatabaseAutonomousDatabase#switchover_to}.

---

##### `switchoverToRemotePeerId`<sup>Optional</sup> <a name="switchoverToRemotePeerId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.switchoverToRemotePeerId"></a>

```java
public java.lang.String getSwitchoverToRemotePeerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#switchover_to_remote_peer_id DatabaseAutonomousDatabase#switchover_to_remote_peer_id}.

---

##### `timeOfAutoRefreshStart`<sup>Optional</sup> <a name="timeOfAutoRefreshStart" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.timeOfAutoRefreshStart"></a>

```java
public java.lang.String getTimeOfAutoRefreshStart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#time_of_auto_refresh_start DatabaseAutonomousDatabase#time_of_auto_refresh_start}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.timeouts"></a>

```java
public DatabaseAutonomousDatabaseTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts">DatabaseAutonomousDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#timeouts DatabaseAutonomousDatabase#timeouts}

---

##### `timestamp`<sup>Optional</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#timestamp DatabaseAutonomousDatabase#timestamp}.

---

##### `useLatestAvailableBackupTimeStamp`<sup>Optional</sup> <a name="useLatestAvailableBackupTimeStamp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.useLatestAvailableBackupTimeStamp"></a>

```java
public java.lang.Object getUseLatestAvailableBackupTimeStamp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#use_latest_available_backup_time_stamp DatabaseAutonomousDatabase#use_latest_available_backup_time_stamp}.

---

##### `vaultId`<sup>Optional</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#vault_id DatabaseAutonomousDatabase#vault_id}.

---

##### `whitelistedIps`<sup>Optional</sup> <a name="whitelistedIps" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.whitelistedIps"></a>

```java
public java.util.List<java.lang.String> getWhitelistedIps();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#whitelisted_ips DatabaseAutonomousDatabase#whitelisted_ips}.

---

### DatabaseAutonomousDatabaseConnectionStrings <a name="DatabaseAutonomousDatabaseConnectionStrings" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStrings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseConnectionStrings;

DatabaseAutonomousDatabaseConnectionStrings.builder()
    .build();
```


### DatabaseAutonomousDatabaseConnectionStringsProfiles <a name="DatabaseAutonomousDatabaseConnectionStringsProfiles" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfiles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseConnectionStringsProfiles;

DatabaseAutonomousDatabaseConnectionStringsProfiles.builder()
    .build();
```


### DatabaseAutonomousDatabaseConnectionUrls <a name="DatabaseAutonomousDatabaseConnectionUrls" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseConnectionUrls;

DatabaseAutonomousDatabaseConnectionUrls.builder()
    .build();
```


### DatabaseAutonomousDatabaseCustomerContacts <a name="DatabaseAutonomousDatabaseCustomerContacts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseCustomerContacts;

DatabaseAutonomousDatabaseCustomerContacts.builder()
//  .email(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#email DatabaseAutonomousDatabase#email}. |

---

##### `email`<sup>Optional</sup> <a name="email" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#email DatabaseAutonomousDatabase#email}.

---

### DatabaseAutonomousDatabaseDbToolsDetails <a name="DatabaseAutonomousDatabaseDbToolsDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseDbToolsDetails;

DatabaseAutonomousDatabaseDbToolsDetails.builder()
    .name(java.lang.String)
//  .computeCount(java.lang.Number)
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
//  .maxIdleTimeInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#name DatabaseAutonomousDatabase#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compute_count DatabaseAutonomousDatabase#compute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_enabled DatabaseAutonomousDatabase#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails.property.maxIdleTimeInMinutes">maxIdleTimeInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#max_idle_time_in_minutes DatabaseAutonomousDatabase#max_idle_time_in_minutes}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#name DatabaseAutonomousDatabase#name}.

---

##### `computeCount`<sup>Optional</sup> <a name="computeCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compute_count DatabaseAutonomousDatabase#compute_count}.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_enabled DatabaseAutonomousDatabase#is_enabled}.

---

##### `maxIdleTimeInMinutes`<sup>Optional</sup> <a name="maxIdleTimeInMinutes" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails.property.maxIdleTimeInMinutes"></a>

```java
public java.lang.Number getMaxIdleTimeInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#max_idle_time_in_minutes DatabaseAutonomousDatabase#max_idle_time_in_minutes}.

---

### DatabaseAutonomousDatabaseEncryptionKey <a name="DatabaseAutonomousDatabaseEncryptionKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseEncryptionKey;

DatabaseAutonomousDatabaseEncryptionKey.builder()
//  .arnRole(java.lang.String)
//  .autonomousDatabaseProvider(java.lang.String)
//  .certificateDirectoryName(java.lang.String)
//  .certificateId(java.lang.String)
//  .directoryName(java.lang.String)
//  .externalId(java.lang.String)
//  .keyArn(java.lang.String)
//  .keyName(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .okvKmsKey(java.lang.String)
//  .okvUri(java.lang.String)
//  .serviceEndpointUri(java.lang.String)
//  .vaultId(java.lang.String)
//  .vaultUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.arnRole">arnRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#arn_role DatabaseAutonomousDatabase#arn_role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.autonomousDatabaseProvider">autonomousDatabaseProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_database_provider DatabaseAutonomousDatabase#autonomous_database_provider}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.certificateDirectoryName">certificateDirectoryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#certificate_directory_name DatabaseAutonomousDatabase#certificate_directory_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#certificate_id DatabaseAutonomousDatabase#certificate_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.directoryName">directoryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#directory_name DatabaseAutonomousDatabase#directory_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#external_id DatabaseAutonomousDatabase#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.keyArn">keyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#key_arn DatabaseAutonomousDatabase#key_arn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.keyName">keyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#key_name DatabaseAutonomousDatabase#key_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#kms_key_id DatabaseAutonomousDatabase#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.okvKmsKey">okvKmsKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#okv_kms_key DatabaseAutonomousDatabase#okv_kms_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.okvUri">okvUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#okv_uri DatabaseAutonomousDatabase#okv_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.serviceEndpointUri">serviceEndpointUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#service_endpoint_uri DatabaseAutonomousDatabase#service_endpoint_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#vault_id DatabaseAutonomousDatabase#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.vaultUri">vaultUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#vault_uri DatabaseAutonomousDatabase#vault_uri}. |

---

##### `arnRole`<sup>Optional</sup> <a name="arnRole" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.arnRole"></a>

```java
public java.lang.String getArnRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#arn_role DatabaseAutonomousDatabase#arn_role}.

---

##### `autonomousDatabaseProvider`<sup>Optional</sup> <a name="autonomousDatabaseProvider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.autonomousDatabaseProvider"></a>

```java
public java.lang.String getAutonomousDatabaseProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_database_provider DatabaseAutonomousDatabase#autonomous_database_provider}.

---

##### `certificateDirectoryName`<sup>Optional</sup> <a name="certificateDirectoryName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.certificateDirectoryName"></a>

```java
public java.lang.String getCertificateDirectoryName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#certificate_directory_name DatabaseAutonomousDatabase#certificate_directory_name}.

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#certificate_id DatabaseAutonomousDatabase#certificate_id}.

---

##### `directoryName`<sup>Optional</sup> <a name="directoryName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.directoryName"></a>

```java
public java.lang.String getDirectoryName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#directory_name DatabaseAutonomousDatabase#directory_name}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#external_id DatabaseAutonomousDatabase#external_id}.

---

##### `keyArn`<sup>Optional</sup> <a name="keyArn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.keyArn"></a>

```java
public java.lang.String getKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#key_arn DatabaseAutonomousDatabase#key_arn}.

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#key_name DatabaseAutonomousDatabase#key_name}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#kms_key_id DatabaseAutonomousDatabase#kms_key_id}.

---

##### `okvKmsKey`<sup>Optional</sup> <a name="okvKmsKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.okvKmsKey"></a>

```java
public java.lang.String getOkvKmsKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#okv_kms_key DatabaseAutonomousDatabase#okv_kms_key}.

---

##### `okvUri`<sup>Optional</sup> <a name="okvUri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.okvUri"></a>

```java
public java.lang.String getOkvUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#okv_uri DatabaseAutonomousDatabase#okv_uri}.

---

##### `serviceEndpointUri`<sup>Optional</sup> <a name="serviceEndpointUri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.serviceEndpointUri"></a>

```java
public java.lang.String getServiceEndpointUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#service_endpoint_uri DatabaseAutonomousDatabase#service_endpoint_uri}.

---

##### `vaultId`<sup>Optional</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#vault_id DatabaseAutonomousDatabase#vault_id}.

---

##### `vaultUri`<sup>Optional</sup> <a name="vaultUri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.vaultUri"></a>

```java
public java.lang.String getVaultUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#vault_uri DatabaseAutonomousDatabase#vault_uri}.

---

### DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry <a name="DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry;

DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry.builder()
    .build();
```


### DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey <a name="DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey;

DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey.builder()
    .build();
```


### DatabaseAutonomousDatabaseKeyHistoryEntry <a name="DatabaseAutonomousDatabaseKeyHistoryEntry" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntry"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseKeyHistoryEntry;

DatabaseAutonomousDatabaseKeyHistoryEntry.builder()
    .build();
```


### DatabaseAutonomousDatabaseLocalStandbyDb <a name="DatabaseAutonomousDatabaseLocalStandbyDb" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDb"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseLocalStandbyDb;

DatabaseAutonomousDatabaseLocalStandbyDb.builder()
    .build();
```


### DatabaseAutonomousDatabaseLongTermBackupSchedule <a name="DatabaseAutonomousDatabaseLongTermBackupSchedule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseLongTermBackupSchedule;

DatabaseAutonomousDatabaseLongTermBackupSchedule.builder()
//  .isDisabled(java.lang.Boolean)
//  .isDisabled(IResolvable)
//  .repeatCadence(java.lang.String)
//  .retentionPeriodInDays(java.lang.Number)
//  .timeOfBackup(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule.property.isDisabled">isDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_disabled DatabaseAutonomousDatabase#is_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule.property.repeatCadence">repeatCadence</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#repeat_cadence DatabaseAutonomousDatabase#repeat_cadence}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#retention_period_in_days DatabaseAutonomousDatabase#retention_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule.property.timeOfBackup">timeOfBackup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#time_of_backup DatabaseAutonomousDatabase#time_of_backup}. |

---

##### `isDisabled`<sup>Optional</sup> <a name="isDisabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule.property.isDisabled"></a>

```java
public java.lang.Object getIsDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_disabled DatabaseAutonomousDatabase#is_disabled}.

---

##### `repeatCadence`<sup>Optional</sup> <a name="repeatCadence" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule.property.repeatCadence"></a>

```java
public java.lang.String getRepeatCadence();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#repeat_cadence DatabaseAutonomousDatabase#repeat_cadence}.

---

##### `retentionPeriodInDays`<sup>Optional</sup> <a name="retentionPeriodInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule.property.retentionPeriodInDays"></a>

```java
public java.lang.Number getRetentionPeriodInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#retention_period_in_days DatabaseAutonomousDatabase#retention_period_in_days}.

---

##### `timeOfBackup`<sup>Optional</sup> <a name="timeOfBackup" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule.property.timeOfBackup"></a>

```java
public java.lang.String getTimeOfBackup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#time_of_backup DatabaseAutonomousDatabase#time_of_backup}.

---

### DatabaseAutonomousDatabasePublicConnectionUrls <a name="DatabaseAutonomousDatabasePublicConnectionUrls" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabasePublicConnectionUrls;

DatabaseAutonomousDatabasePublicConnectionUrls.builder()
    .build();
```


### DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration <a name="DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration;

DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration.builder()
    .build();
```


### DatabaseAutonomousDatabaseResourcePoolSummary <a name="DatabaseAutonomousDatabaseResourcePoolSummary" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseResourcePoolSummary;

DatabaseAutonomousDatabaseResourcePoolSummary.builder()
//  .isDisabled(java.lang.Boolean)
//  .isDisabled(IResolvable)
//  .poolSize(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary.property.isDisabled">isDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_disabled DatabaseAutonomousDatabase#is_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary.property.poolSize">poolSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#pool_size DatabaseAutonomousDatabase#pool_size}. |

---

##### `isDisabled`<sup>Optional</sup> <a name="isDisabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary.property.isDisabled"></a>

```java
public java.lang.Object getIsDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_disabled DatabaseAutonomousDatabase#is_disabled}.

---

##### `poolSize`<sup>Optional</sup> <a name="poolSize" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary.property.poolSize"></a>

```java
public java.lang.Number getPoolSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#pool_size DatabaseAutonomousDatabase#pool_size}.

---

### DatabaseAutonomousDatabaseScheduledOperations <a name="DatabaseAutonomousDatabaseScheduledOperations" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseScheduledOperations;

DatabaseAutonomousDatabaseScheduledOperations.builder()
    .dayOfWeek(DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek)
//  .scheduledStartTime(java.lang.String)
//  .scheduledStopTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations.property.dayOfWeek">dayOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek">DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek</a></code> | day_of_week block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations.property.scheduledStartTime">scheduledStartTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#scheduled_start_time DatabaseAutonomousDatabase#scheduled_start_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations.property.scheduledStopTime">scheduledStopTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#scheduled_stop_time DatabaseAutonomousDatabase#scheduled_stop_time}. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations.property.dayOfWeek"></a>

```java
public DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek getDayOfWeek();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek">DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek</a>

day_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#day_of_week DatabaseAutonomousDatabase#day_of_week}

---

##### `scheduledStartTime`<sup>Optional</sup> <a name="scheduledStartTime" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations.property.scheduledStartTime"></a>

```java
public java.lang.String getScheduledStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#scheduled_start_time DatabaseAutonomousDatabase#scheduled_start_time}.

---

##### `scheduledStopTime`<sup>Optional</sup> <a name="scheduledStopTime" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations.property.scheduledStopTime"></a>

```java
public java.lang.String getScheduledStopTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#scheduled_stop_time DatabaseAutonomousDatabase#scheduled_stop_time}.

---

### DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek <a name="DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek;

DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#name DatabaseAutonomousDatabase#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#name DatabaseAutonomousDatabase#name}.

---

### DatabaseAutonomousDatabaseStandbyDb <a name="DatabaseAutonomousDatabaseStandbyDb" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDb"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseStandbyDb;

DatabaseAutonomousDatabaseStandbyDb.builder()
    .build();
```


### DatabaseAutonomousDatabaseTimeouts <a name="DatabaseAutonomousDatabaseTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseTimeouts;

DatabaseAutonomousDatabaseTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#create DatabaseAutonomousDatabase#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#delete DatabaseAutonomousDatabase#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#update DatabaseAutonomousDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#create DatabaseAutonomousDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#delete DatabaseAutonomousDatabase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#update DatabaseAutonomousDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousDatabaseApexDetailsList <a name="DatabaseAutonomousDatabaseApexDetailsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseApexDetailsList;

new DatabaseAutonomousDatabaseApexDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.get"></a>

```java
public DatabaseAutonomousDatabaseApexDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseAutonomousDatabaseApexDetailsOutputReference <a name="DatabaseAutonomousDatabaseApexDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseApexDetailsOutputReference;

new DatabaseAutonomousDatabaseApexDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.apexVersion">apexVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.ordsVersion">ordsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetails">DatabaseAutonomousDatabaseApexDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apexVersion`<sup>Required</sup> <a name="apexVersion" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.apexVersion"></a>

```java
public java.lang.String getApexVersion();
```

- *Type:* java.lang.String

---

##### `ordsVersion`<sup>Required</sup> <a name="ordsVersion" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.ordsVersion"></a>

```java
public java.lang.String getOrdsVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.internalValue"></a>

```java
public DatabaseAutonomousDatabaseApexDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetails">DatabaseAutonomousDatabaseApexDetails</a>

---


### DatabaseAutonomousDatabaseBackupConfigList <a name="DatabaseAutonomousDatabaseBackupConfigList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseBackupConfigList;

new DatabaseAutonomousDatabaseBackupConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.get"></a>

```java
public DatabaseAutonomousDatabaseBackupConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseAutonomousDatabaseBackupConfigOutputReference <a name="DatabaseAutonomousDatabaseBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseBackupConfigOutputReference;

new DatabaseAutonomousDatabaseBackupConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.manualBackupBucketName">manualBackupBucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.manualBackupType">manualBackupType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfig">DatabaseAutonomousDatabaseBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `manualBackupBucketName`<sup>Required</sup> <a name="manualBackupBucketName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.manualBackupBucketName"></a>

```java
public java.lang.String getManualBackupBucketName();
```

- *Type:* java.lang.String

---

##### `manualBackupType`<sup>Required</sup> <a name="manualBackupType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.manualBackupType"></a>

```java
public java.lang.String getManualBackupType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.internalValue"></a>

```java
public DatabaseAutonomousDatabaseBackupConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfig">DatabaseAutonomousDatabaseBackupConfig</a>

---


### DatabaseAutonomousDatabaseConnectionStringsList <a name="DatabaseAutonomousDatabaseConnectionStringsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseConnectionStringsList;

new DatabaseAutonomousDatabaseConnectionStringsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.get"></a>

```java
public DatabaseAutonomousDatabaseConnectionStringsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseAutonomousDatabaseConnectionStringsOutputReference <a name="DatabaseAutonomousDatabaseConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseConnectionStringsOutputReference;

new DatabaseAutonomousDatabaseConnectionStringsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.allConnectionStrings">allConnectionStrings</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.dedicated">dedicated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.high">high</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.low">low</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.medium">medium</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.profiles">profiles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList">DatabaseAutonomousDatabaseConnectionStringsProfilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStrings">DatabaseAutonomousDatabaseConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allConnectionStrings`<sup>Required</sup> <a name="allConnectionStrings" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.allConnectionStrings"></a>

```java
public StringMap getAllConnectionStrings();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `dedicated`<sup>Required</sup> <a name="dedicated" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.dedicated"></a>

```java
public java.lang.String getDedicated();
```

- *Type:* java.lang.String

---

##### `high`<sup>Required</sup> <a name="high" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.high"></a>

```java
public java.lang.String getHigh();
```

- *Type:* java.lang.String

---

##### `low`<sup>Required</sup> <a name="low" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.low"></a>

```java
public java.lang.String getLow();
```

- *Type:* java.lang.String

---

##### `medium`<sup>Required</sup> <a name="medium" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.medium"></a>

```java
public java.lang.String getMedium();
```

- *Type:* java.lang.String

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.profiles"></a>

```java
public DatabaseAutonomousDatabaseConnectionStringsProfilesList getProfiles();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList">DatabaseAutonomousDatabaseConnectionStringsProfilesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.internalValue"></a>

```java
public DatabaseAutonomousDatabaseConnectionStrings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStrings">DatabaseAutonomousDatabaseConnectionStrings</a>

---


### DatabaseAutonomousDatabaseConnectionStringsProfilesList <a name="DatabaseAutonomousDatabaseConnectionStringsProfilesList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseConnectionStringsProfilesList;

new DatabaseAutonomousDatabaseConnectionStringsProfilesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.get"></a>

```java
public DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference <a name="DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference;

new DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.consumerGroup">consumerGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.hostFormat">hostFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.isRegional">isRegional</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.sessionMode">sessionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.syntaxFormat">syntaxFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.tlsAuthentication">tlsAuthentication</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfiles">DatabaseAutonomousDatabaseConnectionStringsProfiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consumerGroup`<sup>Required</sup> <a name="consumerGroup" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.consumerGroup"></a>

```java
public java.lang.String getConsumerGroup();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `hostFormat`<sup>Required</sup> <a name="hostFormat" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.hostFormat"></a>

```java
public java.lang.String getHostFormat();
```

- *Type:* java.lang.String

---

##### `isRegional`<sup>Required</sup> <a name="isRegional" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.isRegional"></a>

```java
public IResolvable getIsRegional();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `sessionMode`<sup>Required</sup> <a name="sessionMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.sessionMode"></a>

```java
public java.lang.String getSessionMode();
```

- *Type:* java.lang.String

---

##### `syntaxFormat`<sup>Required</sup> <a name="syntaxFormat" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.syntaxFormat"></a>

```java
public java.lang.String getSyntaxFormat();
```

- *Type:* java.lang.String

---

##### `tlsAuthentication`<sup>Required</sup> <a name="tlsAuthentication" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.tlsAuthentication"></a>

```java
public java.lang.String getTlsAuthentication();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.internalValue"></a>

```java
public DatabaseAutonomousDatabaseConnectionStringsProfiles getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfiles">DatabaseAutonomousDatabaseConnectionStringsProfiles</a>

---


### DatabaseAutonomousDatabaseConnectionUrlsList <a name="DatabaseAutonomousDatabaseConnectionUrlsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseConnectionUrlsList;

new DatabaseAutonomousDatabaseConnectionUrlsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.get"></a>

```java
public DatabaseAutonomousDatabaseConnectionUrlsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseAutonomousDatabaseConnectionUrlsOutputReference <a name="DatabaseAutonomousDatabaseConnectionUrlsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseConnectionUrlsOutputReference;

new DatabaseAutonomousDatabaseConnectionUrlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.apexUrl">apexUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.databaseTransformsUrl">databaseTransformsUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.graphStudioUrl">graphStudioUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.machineLearningNotebookUrl">machineLearningNotebookUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.machineLearningUserManagementUrl">machineLearningUserManagementUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.mongoDbUrl">mongoDbUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.ordsUrl">ordsUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.sqlDevWebUrl">sqlDevWebUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrls">DatabaseAutonomousDatabaseConnectionUrls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apexUrl`<sup>Required</sup> <a name="apexUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.apexUrl"></a>

```java
public java.lang.String getApexUrl();
```

- *Type:* java.lang.String

---

##### `databaseTransformsUrl`<sup>Required</sup> <a name="databaseTransformsUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.databaseTransformsUrl"></a>

```java
public java.lang.String getDatabaseTransformsUrl();
```

- *Type:* java.lang.String

---

##### `graphStudioUrl`<sup>Required</sup> <a name="graphStudioUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.graphStudioUrl"></a>

```java
public java.lang.String getGraphStudioUrl();
```

- *Type:* java.lang.String

---

##### `machineLearningNotebookUrl`<sup>Required</sup> <a name="machineLearningNotebookUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.machineLearningNotebookUrl"></a>

```java
public java.lang.String getMachineLearningNotebookUrl();
```

- *Type:* java.lang.String

---

##### `machineLearningUserManagementUrl`<sup>Required</sup> <a name="machineLearningUserManagementUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.machineLearningUserManagementUrl"></a>

```java
public java.lang.String getMachineLearningUserManagementUrl();
```

- *Type:* java.lang.String

---

##### `mongoDbUrl`<sup>Required</sup> <a name="mongoDbUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.mongoDbUrl"></a>

```java
public java.lang.String getMongoDbUrl();
```

- *Type:* java.lang.String

---

##### `ordsUrl`<sup>Required</sup> <a name="ordsUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.ordsUrl"></a>

```java
public java.lang.String getOrdsUrl();
```

- *Type:* java.lang.String

---

##### `sqlDevWebUrl`<sup>Required</sup> <a name="sqlDevWebUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.sqlDevWebUrl"></a>

```java
public java.lang.String getSqlDevWebUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.internalValue"></a>

```java
public DatabaseAutonomousDatabaseConnectionUrls getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrls">DatabaseAutonomousDatabaseConnectionUrls</a>

---


### DatabaseAutonomousDatabaseCustomerContactsList <a name="DatabaseAutonomousDatabaseCustomerContactsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseCustomerContactsList;

new DatabaseAutonomousDatabaseCustomerContactsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.get"></a>

```java
public DatabaseAutonomousDatabaseCustomerContactsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>>

---


### DatabaseAutonomousDatabaseCustomerContactsOutputReference <a name="DatabaseAutonomousDatabaseCustomerContactsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseCustomerContactsOutputReference;

new DatabaseAutonomousDatabaseCustomerContactsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.resetEmail">resetEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.resetEmail"></a>

```java
public void resetEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>

---


### DatabaseAutonomousDatabaseDbToolsDetailsList <a name="DatabaseAutonomousDatabaseDbToolsDetailsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseDbToolsDetailsList;

new DatabaseAutonomousDatabaseDbToolsDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.get"></a>

```java
public DatabaseAutonomousDatabaseDbToolsDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>>

---


### DatabaseAutonomousDatabaseDbToolsDetailsOutputReference <a name="DatabaseAutonomousDatabaseDbToolsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference;

new DatabaseAutonomousDatabaseDbToolsDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resetComputeCount">resetComputeCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resetMaxIdleTimeInMinutes">resetMaxIdleTimeInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComputeCount` <a name="resetComputeCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resetComputeCount"></a>

```java
public void resetComputeCount()
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```

##### `resetMaxIdleTimeInMinutes` <a name="resetMaxIdleTimeInMinutes" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resetMaxIdleTimeInMinutes"></a>

```java
public void resetMaxIdleTimeInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCountInput">computeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutesInput">maxIdleTimeInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes">maxIdleTimeInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `computeCountInput`<sup>Optional</sup> <a name="computeCountInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCountInput"></a>

```java
public java.lang.Number getComputeCountInput();
```

- *Type:* java.lang.Number

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxIdleTimeInMinutesInput`<sup>Optional</sup> <a name="maxIdleTimeInMinutesInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutesInput"></a>

```java
public java.lang.Number getMaxIdleTimeInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxIdleTimeInMinutes`<sup>Required</sup> <a name="maxIdleTimeInMinutes" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes"></a>

```java
public java.lang.Number getMaxIdleTimeInMinutes();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>

---


### DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList <a name="DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList;

new DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.get"></a>

```java
public DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference <a name="DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference;

new DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.arnRole">arnRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.autonomousDatabaseProvider">autonomousDatabaseProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateDirectoryName">certificateDirectoryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.directoryName">directoryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyArn">keyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvKmsKey">okvKmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvUri">okvUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.serviceEndpointUri">serviceEndpointUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultUri">vaultUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey">DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnRole`<sup>Required</sup> <a name="arnRole" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.arnRole"></a>

```java
public java.lang.String getArnRole();
```

- *Type:* java.lang.String

---

##### `autonomousDatabaseProvider`<sup>Required</sup> <a name="autonomousDatabaseProvider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.autonomousDatabaseProvider"></a>

```java
public java.lang.String getAutonomousDatabaseProvider();
```

- *Type:* java.lang.String

---

##### `certificateDirectoryName`<sup>Required</sup> <a name="certificateDirectoryName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateDirectoryName"></a>

```java
public java.lang.String getCertificateDirectoryName();
```

- *Type:* java.lang.String

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `directoryName`<sup>Required</sup> <a name="directoryName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.directoryName"></a>

```java
public java.lang.String getDirectoryName();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `keyArn`<sup>Required</sup> <a name="keyArn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyArn"></a>

```java
public java.lang.String getKeyArn();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `okvKmsKey`<sup>Required</sup> <a name="okvKmsKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvKmsKey"></a>

```java
public java.lang.String getOkvKmsKey();
```

- *Type:* java.lang.String

---

##### `okvUri`<sup>Required</sup> <a name="okvUri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvUri"></a>

```java
public java.lang.String getOkvUri();
```

- *Type:* java.lang.String

---

##### `serviceEndpointUri`<sup>Required</sup> <a name="serviceEndpointUri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.serviceEndpointUri"></a>

```java
public java.lang.String getServiceEndpointUri();
```

- *Type:* java.lang.String

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

---

##### `vaultUri`<sup>Required</sup> <a name="vaultUri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultUri"></a>

```java
public java.lang.String getVaultUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.internalValue"></a>

```java
public DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey">DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey</a>

---


### DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList <a name="DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList;

new DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.get"></a>

```java
public DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference <a name="DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference;

new DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.encryptionKey">encryptionKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList">DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.timeActivated">timeActivated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry">DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.encryptionKey"></a>

```java
public DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList getEncryptionKey();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList">DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList</a>

---

##### `timeActivated`<sup>Required</sup> <a name="timeActivated" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.timeActivated"></a>

```java
public java.lang.String getTimeActivated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.internalValue"></a>

```java
public DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry">DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry</a>

---


### DatabaseAutonomousDatabaseEncryptionKeyOutputReference <a name="DatabaseAutonomousDatabaseEncryptionKeyOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseEncryptionKeyOutputReference;

new DatabaseAutonomousDatabaseEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetArnRole">resetArnRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetAutonomousDatabaseProvider">resetAutonomousDatabaseProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetCertificateDirectoryName">resetCertificateDirectoryName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetCertificateId">resetCertificateId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetDirectoryName">resetDirectoryName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetKeyArn">resetKeyArn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetOkvKmsKey">resetOkvKmsKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetOkvUri">resetOkvUri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetServiceEndpointUri">resetServiceEndpointUri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetVaultId">resetVaultId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetVaultUri">resetVaultUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArnRole` <a name="resetArnRole" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetArnRole"></a>

```java
public void resetArnRole()
```

##### `resetAutonomousDatabaseProvider` <a name="resetAutonomousDatabaseProvider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetAutonomousDatabaseProvider"></a>

```java
public void resetAutonomousDatabaseProvider()
```

##### `resetCertificateDirectoryName` <a name="resetCertificateDirectoryName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetCertificateDirectoryName"></a>

```java
public void resetCertificateDirectoryName()
```

##### `resetCertificateId` <a name="resetCertificateId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetCertificateId"></a>

```java
public void resetCertificateId()
```

##### `resetDirectoryName` <a name="resetDirectoryName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetDirectoryName"></a>

```java
public void resetDirectoryName()
```

##### `resetExternalId` <a name="resetExternalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetExternalId"></a>

```java
public void resetExternalId()
```

##### `resetKeyArn` <a name="resetKeyArn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetKeyArn"></a>

```java
public void resetKeyArn()
```

##### `resetKeyName` <a name="resetKeyName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetKeyName"></a>

```java
public void resetKeyName()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetOkvKmsKey` <a name="resetOkvKmsKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetOkvKmsKey"></a>

```java
public void resetOkvKmsKey()
```

##### `resetOkvUri` <a name="resetOkvUri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetOkvUri"></a>

```java
public void resetOkvUri()
```

##### `resetServiceEndpointUri` <a name="resetServiceEndpointUri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetServiceEndpointUri"></a>

```java
public void resetServiceEndpointUri()
```

##### `resetVaultId` <a name="resetVaultId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetVaultId"></a>

```java
public void resetVaultId()
```

##### `resetVaultUri` <a name="resetVaultUri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetVaultUri"></a>

```java
public void resetVaultUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.arnRoleInput">arnRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.autonomousDatabaseProviderInput">autonomousDatabaseProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateDirectoryNameInput">certificateDirectoryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateIdInput">certificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.directoryNameInput">directoryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyArnInput">keyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvKmsKeyInput">okvKmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvUriInput">okvUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.serviceEndpointUriInput">serviceEndpointUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultIdInput">vaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultUriInput">vaultUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.arnRole">arnRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.autonomousDatabaseProvider">autonomousDatabaseProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateDirectoryName">certificateDirectoryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.directoryName">directoryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyArn">keyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvKmsKey">okvKmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvUri">okvUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.serviceEndpointUri">serviceEndpointUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultUri">vaultUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey">DatabaseAutonomousDatabaseEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnRoleInput`<sup>Optional</sup> <a name="arnRoleInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.arnRoleInput"></a>

```java
public java.lang.String getArnRoleInput();
```

- *Type:* java.lang.String

---

##### `autonomousDatabaseProviderInput`<sup>Optional</sup> <a name="autonomousDatabaseProviderInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.autonomousDatabaseProviderInput"></a>

```java
public java.lang.String getAutonomousDatabaseProviderInput();
```

- *Type:* java.lang.String

---

##### `certificateDirectoryNameInput`<sup>Optional</sup> <a name="certificateDirectoryNameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateDirectoryNameInput"></a>

```java
public java.lang.String getCertificateDirectoryNameInput();
```

- *Type:* java.lang.String

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateIdInput"></a>

```java
public java.lang.String getCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `directoryNameInput`<sup>Optional</sup> <a name="directoryNameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.directoryNameInput"></a>

```java
public java.lang.String getDirectoryNameInput();
```

- *Type:* java.lang.String

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `keyArnInput`<sup>Optional</sup> <a name="keyArnInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyArnInput"></a>

```java
public java.lang.String getKeyArnInput();
```

- *Type:* java.lang.String

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `okvKmsKeyInput`<sup>Optional</sup> <a name="okvKmsKeyInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvKmsKeyInput"></a>

```java
public java.lang.String getOkvKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `okvUriInput`<sup>Optional</sup> <a name="okvUriInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvUriInput"></a>

```java
public java.lang.String getOkvUriInput();
```

- *Type:* java.lang.String

---

##### `serviceEndpointUriInput`<sup>Optional</sup> <a name="serviceEndpointUriInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.serviceEndpointUriInput"></a>

```java
public java.lang.String getServiceEndpointUriInput();
```

- *Type:* java.lang.String

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultIdInput"></a>

```java
public java.lang.String getVaultIdInput();
```

- *Type:* java.lang.String

---

##### `vaultUriInput`<sup>Optional</sup> <a name="vaultUriInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultUriInput"></a>

```java
public java.lang.String getVaultUriInput();
```

- *Type:* java.lang.String

---

##### `arnRole`<sup>Required</sup> <a name="arnRole" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.arnRole"></a>

```java
public java.lang.String getArnRole();
```

- *Type:* java.lang.String

---

##### `autonomousDatabaseProvider`<sup>Required</sup> <a name="autonomousDatabaseProvider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.autonomousDatabaseProvider"></a>

```java
public java.lang.String getAutonomousDatabaseProvider();
```

- *Type:* java.lang.String

---

##### `certificateDirectoryName`<sup>Required</sup> <a name="certificateDirectoryName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateDirectoryName"></a>

```java
public java.lang.String getCertificateDirectoryName();
```

- *Type:* java.lang.String

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `directoryName`<sup>Required</sup> <a name="directoryName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.directoryName"></a>

```java
public java.lang.String getDirectoryName();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `keyArn`<sup>Required</sup> <a name="keyArn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyArn"></a>

```java
public java.lang.String getKeyArn();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `okvKmsKey`<sup>Required</sup> <a name="okvKmsKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvKmsKey"></a>

```java
public java.lang.String getOkvKmsKey();
```

- *Type:* java.lang.String

---

##### `okvUri`<sup>Required</sup> <a name="okvUri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvUri"></a>

```java
public java.lang.String getOkvUri();
```

- *Type:* java.lang.String

---

##### `serviceEndpointUri`<sup>Required</sup> <a name="serviceEndpointUri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.serviceEndpointUri"></a>

```java
public java.lang.String getServiceEndpointUri();
```

- *Type:* java.lang.String

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

---

##### `vaultUri`<sup>Required</sup> <a name="vaultUri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultUri"></a>

```java
public java.lang.String getVaultUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.internalValue"></a>

```java
public DatabaseAutonomousDatabaseEncryptionKey getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey">DatabaseAutonomousDatabaseEncryptionKey</a>

---


### DatabaseAutonomousDatabaseKeyHistoryEntryList <a name="DatabaseAutonomousDatabaseKeyHistoryEntryList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseKeyHistoryEntryList;

new DatabaseAutonomousDatabaseKeyHistoryEntryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.get"></a>

```java
public DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference <a name="DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference;

new DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.timeActivated">timeActivated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntry">DatabaseAutonomousDatabaseKeyHistoryEntry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyVersionId`<sup>Required</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.kmsKeyVersionId"></a>

```java
public java.lang.String getKmsKeyVersionId();
```

- *Type:* java.lang.String

---

##### `timeActivated`<sup>Required</sup> <a name="timeActivated" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.timeActivated"></a>

```java
public java.lang.String getTimeActivated();
```

- *Type:* java.lang.String

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.internalValue"></a>

```java
public DatabaseAutonomousDatabaseKeyHistoryEntry getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntry">DatabaseAutonomousDatabaseKeyHistoryEntry</a>

---


### DatabaseAutonomousDatabaseLocalStandbyDbList <a name="DatabaseAutonomousDatabaseLocalStandbyDbList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseLocalStandbyDbList;

new DatabaseAutonomousDatabaseLocalStandbyDbList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.get"></a>

```java
public DatabaseAutonomousDatabaseLocalStandbyDbOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseAutonomousDatabaseLocalStandbyDbOutputReference <a name="DatabaseAutonomousDatabaseLocalStandbyDbOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference;

new DatabaseAutonomousDatabaseLocalStandbyDbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.lagTimeInSeconds">lagTimeInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.timeDataGuardRoleChanged">timeDataGuardRoleChanged</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged">timeDisasterRecoveryRoleChanged</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDb">DatabaseAutonomousDatabaseLocalStandbyDb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `lagTimeInSeconds`<sup>Required</sup> <a name="lagTimeInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.lagTimeInSeconds"></a>

```java
public java.lang.Number getLagTimeInSeconds();
```

- *Type:* java.lang.Number

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeDataGuardRoleChanged`<sup>Required</sup> <a name="timeDataGuardRoleChanged" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.timeDataGuardRoleChanged"></a>

```java
public java.lang.String getTimeDataGuardRoleChanged();
```

- *Type:* java.lang.String

---

##### `timeDisasterRecoveryRoleChanged`<sup>Required</sup> <a name="timeDisasterRecoveryRoleChanged" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged"></a>

```java
public java.lang.String getTimeDisasterRecoveryRoleChanged();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.internalValue"></a>

```java
public DatabaseAutonomousDatabaseLocalStandbyDb getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDb">DatabaseAutonomousDatabaseLocalStandbyDb</a>

---


### DatabaseAutonomousDatabaseLongTermBackupScheduleList <a name="DatabaseAutonomousDatabaseLongTermBackupScheduleList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseLongTermBackupScheduleList;

new DatabaseAutonomousDatabaseLongTermBackupScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.get"></a>

```java
public DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>>

---


### DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference <a name="DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference;

new DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resetIsDisabled">resetIsDisabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRepeatCadence">resetRepeatCadence</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRetentionPeriodInDays">resetRetentionPeriodInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resetTimeOfBackup">resetTimeOfBackup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsDisabled` <a name="resetIsDisabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resetIsDisabled"></a>

```java
public void resetIsDisabled()
```

##### `resetRepeatCadence` <a name="resetRepeatCadence" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRepeatCadence"></a>

```java
public void resetRepeatCadence()
```

##### `resetRetentionPeriodInDays` <a name="resetRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRetentionPeriodInDays"></a>

```java
public void resetRetentionPeriodInDays()
```

##### `resetTimeOfBackup` <a name="resetTimeOfBackup" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resetTimeOfBackup"></a>

```java
public void resetTimeOfBackup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabledInput">isDisabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadenceInput">repeatCadenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDaysInput">retentionPeriodInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackupInput">timeOfBackupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabled">isDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence">repeatCadence</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup">timeOfBackup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isDisabledInput`<sup>Optional</sup> <a name="isDisabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabledInput"></a>

```java
public java.lang.Object getIsDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `repeatCadenceInput`<sup>Optional</sup> <a name="repeatCadenceInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadenceInput"></a>

```java
public java.lang.String getRepeatCadenceInput();
```

- *Type:* java.lang.String

---

##### `retentionPeriodInDaysInput`<sup>Optional</sup> <a name="retentionPeriodInDaysInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDaysInput"></a>

```java
public java.lang.Number getRetentionPeriodInDaysInput();
```

- *Type:* java.lang.Number

---

##### `timeOfBackupInput`<sup>Optional</sup> <a name="timeOfBackupInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackupInput"></a>

```java
public java.lang.String getTimeOfBackupInput();
```

- *Type:* java.lang.String

---

##### `isDisabled`<sup>Required</sup> <a name="isDisabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabled"></a>

```java
public java.lang.Object getIsDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `repeatCadence`<sup>Required</sup> <a name="repeatCadence" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence"></a>

```java
public java.lang.String getRepeatCadence();
```

- *Type:* java.lang.String

---

##### `retentionPeriodInDays`<sup>Required</sup> <a name="retentionPeriodInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays"></a>

```java
public java.lang.Number getRetentionPeriodInDays();
```

- *Type:* java.lang.Number

---

##### `timeOfBackup`<sup>Required</sup> <a name="timeOfBackup" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup"></a>

```java
public java.lang.String getTimeOfBackup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>

---


### DatabaseAutonomousDatabasePublicConnectionUrlsList <a name="DatabaseAutonomousDatabasePublicConnectionUrlsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabasePublicConnectionUrlsList;

new DatabaseAutonomousDatabasePublicConnectionUrlsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.get"></a>

```java
public DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference <a name="DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference;

new DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.apexUrl">apexUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.databaseTransformsUrl">databaseTransformsUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.graphStudioUrl">graphStudioUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.machineLearningNotebookUrl">machineLearningNotebookUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.machineLearningUserManagementUrl">machineLearningUserManagementUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.mongoDbUrl">mongoDbUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.ordsUrl">ordsUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.sqlDevWebUrl">sqlDevWebUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrls">DatabaseAutonomousDatabasePublicConnectionUrls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apexUrl`<sup>Required</sup> <a name="apexUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.apexUrl"></a>

```java
public java.lang.String getApexUrl();
```

- *Type:* java.lang.String

---

##### `databaseTransformsUrl`<sup>Required</sup> <a name="databaseTransformsUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.databaseTransformsUrl"></a>

```java
public java.lang.String getDatabaseTransformsUrl();
```

- *Type:* java.lang.String

---

##### `graphStudioUrl`<sup>Required</sup> <a name="graphStudioUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.graphStudioUrl"></a>

```java
public java.lang.String getGraphStudioUrl();
```

- *Type:* java.lang.String

---

##### `machineLearningNotebookUrl`<sup>Required</sup> <a name="machineLearningNotebookUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.machineLearningNotebookUrl"></a>

```java
public java.lang.String getMachineLearningNotebookUrl();
```

- *Type:* java.lang.String

---

##### `machineLearningUserManagementUrl`<sup>Required</sup> <a name="machineLearningUserManagementUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.machineLearningUserManagementUrl"></a>

```java
public java.lang.String getMachineLearningUserManagementUrl();
```

- *Type:* java.lang.String

---

##### `mongoDbUrl`<sup>Required</sup> <a name="mongoDbUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.mongoDbUrl"></a>

```java
public java.lang.String getMongoDbUrl();
```

- *Type:* java.lang.String

---

##### `ordsUrl`<sup>Required</sup> <a name="ordsUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.ordsUrl"></a>

```java
public java.lang.String getOrdsUrl();
```

- *Type:* java.lang.String

---

##### `sqlDevWebUrl`<sup>Required</sup> <a name="sqlDevWebUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.sqlDevWebUrl"></a>

```java
public java.lang.String getSqlDevWebUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.internalValue"></a>

```java
public DatabaseAutonomousDatabasePublicConnectionUrls getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrls">DatabaseAutonomousDatabasePublicConnectionUrls</a>

---


### DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList <a name="DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList;

new DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.get"></a>

```java
public DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference <a name="DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference;

new DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.disasterRecoveryType">disasterRecoveryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.isReplicateAutomaticBackups">isReplicateAutomaticBackups</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.isSnapshotStandby">isSnapshotStandby</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.timeSnapshotStandbyEnabledTill">timeSnapshotStandbyEnabledTill</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration">DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disasterRecoveryType`<sup>Required</sup> <a name="disasterRecoveryType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.disasterRecoveryType"></a>

```java
public java.lang.String getDisasterRecoveryType();
```

- *Type:* java.lang.String

---

##### `isReplicateAutomaticBackups`<sup>Required</sup> <a name="isReplicateAutomaticBackups" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.isReplicateAutomaticBackups"></a>

```java
public IResolvable getIsReplicateAutomaticBackups();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isSnapshotStandby`<sup>Required</sup> <a name="isSnapshotStandby" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.isSnapshotStandby"></a>

```java
public IResolvable getIsSnapshotStandby();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `timeSnapshotStandbyEnabledTill`<sup>Required</sup> <a name="timeSnapshotStandbyEnabledTill" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.timeSnapshotStandbyEnabledTill"></a>

```java
public java.lang.String getTimeSnapshotStandbyEnabledTill();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.internalValue"></a>

```java
public DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration">DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration</a>

---


### DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference <a name="DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference;

new DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.resetIsDisabled">resetIsDisabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.resetPoolSize">resetPoolSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsDisabled` <a name="resetIsDisabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.resetIsDisabled"></a>

```java
public void resetIsDisabled()
```

##### `resetPoolSize` <a name="resetPoolSize" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.resetPoolSize"></a>

```java
public void resetPoolSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabledInput">isDisabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSizeInput">poolSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabled">isDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSize">poolSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary">DatabaseAutonomousDatabaseResourcePoolSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isDisabledInput`<sup>Optional</sup> <a name="isDisabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabledInput"></a>

```java
public java.lang.Object getIsDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `poolSizeInput`<sup>Optional</sup> <a name="poolSizeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSizeInput"></a>

```java
public java.lang.Number getPoolSizeInput();
```

- *Type:* java.lang.Number

---

##### `isDisabled`<sup>Required</sup> <a name="isDisabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabled"></a>

```java
public java.lang.Object getIsDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `poolSize`<sup>Required</sup> <a name="poolSize" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSize"></a>

```java
public java.lang.Number getPoolSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.internalValue"></a>

```java
public DatabaseAutonomousDatabaseResourcePoolSummary getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary">DatabaseAutonomousDatabaseResourcePoolSummary</a>

---


### DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference <a name="DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference;

new DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek">DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.internalValue"></a>

```java
public DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek">DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek</a>

---


### DatabaseAutonomousDatabaseScheduledOperationsList <a name="DatabaseAutonomousDatabaseScheduledOperationsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseScheduledOperationsList;

new DatabaseAutonomousDatabaseScheduledOperationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.get"></a>

```java
public DatabaseAutonomousDatabaseScheduledOperationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>>

---


### DatabaseAutonomousDatabaseScheduledOperationsOutputReference <a name="DatabaseAutonomousDatabaseScheduledOperationsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseScheduledOperationsOutputReference;

new DatabaseAutonomousDatabaseScheduledOperationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.putDayOfWeek">putDayOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStartTime">resetScheduledStartTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStopTime">resetScheduledStopTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDayOfWeek` <a name="putDayOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.putDayOfWeek"></a>

```java
public void putDayOfWeek(DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.putDayOfWeek.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek">DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek</a>

---

##### `resetScheduledStartTime` <a name="resetScheduledStartTime" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStartTime"></a>

```java
public void resetScheduledStartTime()
```

##### `resetScheduledStopTime` <a name="resetScheduledStopTime" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStopTime"></a>

```java
public void resetScheduledStopTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference">DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek">DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTimeInput">scheduledStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTimeInput">scheduledStopTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTime">scheduledStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTime">scheduledStopTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeek"></a>

```java
public DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference getDayOfWeek();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference">DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference</a>

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeekInput"></a>

```java
public DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek getDayOfWeekInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek">DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek</a>

---

##### `scheduledStartTimeInput`<sup>Optional</sup> <a name="scheduledStartTimeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTimeInput"></a>

```java
public java.lang.String getScheduledStartTimeInput();
```

- *Type:* java.lang.String

---

##### `scheduledStopTimeInput`<sup>Optional</sup> <a name="scheduledStopTimeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTimeInput"></a>

```java
public java.lang.String getScheduledStopTimeInput();
```

- *Type:* java.lang.String

---

##### `scheduledStartTime`<sup>Required</sup> <a name="scheduledStartTime" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTime"></a>

```java
public java.lang.String getScheduledStartTime();
```

- *Type:* java.lang.String

---

##### `scheduledStopTime`<sup>Required</sup> <a name="scheduledStopTime" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTime"></a>

```java
public java.lang.String getScheduledStopTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>

---


### DatabaseAutonomousDatabaseStandbyDbList <a name="DatabaseAutonomousDatabaseStandbyDbList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseStandbyDbList;

new DatabaseAutonomousDatabaseStandbyDbList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.get"></a>

```java
public DatabaseAutonomousDatabaseStandbyDbOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseAutonomousDatabaseStandbyDbOutputReference <a name="DatabaseAutonomousDatabaseStandbyDbOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseStandbyDbOutputReference;

new DatabaseAutonomousDatabaseStandbyDbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.lagTimeInSeconds">lagTimeInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.timeDataGuardRoleChanged">timeDataGuardRoleChanged</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged">timeDisasterRecoveryRoleChanged</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDb">DatabaseAutonomousDatabaseStandbyDb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `lagTimeInSeconds`<sup>Required</sup> <a name="lagTimeInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.lagTimeInSeconds"></a>

```java
public java.lang.Number getLagTimeInSeconds();
```

- *Type:* java.lang.Number

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeDataGuardRoleChanged`<sup>Required</sup> <a name="timeDataGuardRoleChanged" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.timeDataGuardRoleChanged"></a>

```java
public java.lang.String getTimeDataGuardRoleChanged();
```

- *Type:* java.lang.String

---

##### `timeDisasterRecoveryRoleChanged`<sup>Required</sup> <a name="timeDisasterRecoveryRoleChanged" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged"></a>

```java
public java.lang.String getTimeDisasterRecoveryRoleChanged();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.internalValue"></a>

```java
public DatabaseAutonomousDatabaseStandbyDb getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDb">DatabaseAutonomousDatabaseStandbyDb</a>

---


### DatabaseAutonomousDatabaseTimeoutsOutputReference <a name="DatabaseAutonomousDatabaseTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_database.DatabaseAutonomousDatabaseTimeoutsOutputReference;

new DatabaseAutonomousDatabaseTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts">DatabaseAutonomousDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts">DatabaseAutonomousDatabaseTimeouts</a>

---



