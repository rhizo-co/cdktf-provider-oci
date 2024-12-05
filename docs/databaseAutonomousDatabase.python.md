# `databaseAutonomousDatabase` Submodule <a name="`databaseAutonomousDatabase` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousDatabase <a name="DatabaseAutonomousDatabase" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database oci_database_autonomous_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabase(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  db_name: str,
  admin_password: str = None,
  are_primary_whitelisted_ips_used: typing.Union[bool, IResolvable] = None,
  autonomous_container_database_id: str = None,
  autonomous_database_backup_id: str = None,
  autonomous_database_id: str = None,
  autonomous_maintenance_schedule_type: str = None,
  auto_refresh_frequency_in_seconds: typing.Union[int, float] = None,
  auto_refresh_point_lag_in_seconds: typing.Union[int, float] = None,
  backup_retention_period_in_days: typing.Union[int, float] = None,
  byol_compute_count_limit: typing.Union[int, float] = None,
  character_set: str = None,
  clone_type: str = None,
  compute_count: typing.Union[int, float] = None,
  compute_model: str = None,
  cpu_core_count: typing.Union[int, float] = None,
  customer_contacts: typing.Union[IResolvable, typing.List[DatabaseAutonomousDatabaseCustomerContacts]] = None,
  database_edition: str = None,
  database_management_status: str = None,
  data_safe_status: str = None,
  data_storage_size_in_gb: typing.Union[int, float] = None,
  data_storage_size_in_tbs: typing.Union[int, float] = None,
  db_tools_details: typing.Union[IResolvable, typing.List[DatabaseAutonomousDatabaseDbToolsDetails]] = None,
  db_version: str = None,
  db_workload: str = None,
  defined_tags: typing.Mapping[str] = None,
  disaster_recovery_type: str = None,
  display_name: str = None,
  encryption_key: DatabaseAutonomousDatabaseEncryptionKey = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  in_memory_percentage: typing.Union[int, float] = None,
  is_access_control_enabled: typing.Union[bool, IResolvable] = None,
  is_auto_scaling_enabled: typing.Union[bool, IResolvable] = None,
  is_auto_scaling_for_storage_enabled: typing.Union[bool, IResolvable] = None,
  is_data_guard_enabled: typing.Union[bool, IResolvable] = None,
  is_dedicated: typing.Union[bool, IResolvable] = None,
  is_dev_tier: typing.Union[bool, IResolvable] = None,
  is_free_tier: typing.Union[bool, IResolvable] = None,
  is_local_data_guard_enabled: typing.Union[bool, IResolvable] = None,
  is_mtls_connection_required: typing.Union[bool, IResolvable] = None,
  is_preview_version_with_service_terms_accepted: typing.Union[bool, IResolvable] = None,
  is_refreshable_clone: typing.Union[bool, IResolvable] = None,
  is_replicate_automatic_backups: typing.Union[bool, IResolvable] = None,
  is_shrink_only: typing.Union[bool, IResolvable] = None,
  kms_key_id: str = None,
  license_model: str = None,
  local_adg_auto_failover_max_data_loss_limit: typing.Union[int, float] = None,
  long_term_backup_schedule: typing.Union[IResolvable, typing.List[DatabaseAutonomousDatabaseLongTermBackupSchedule]] = None,
  max_cpu_core_count: typing.Union[int, float] = None,
  ncharacter_set: str = None,
  nsg_ids: typing.List[str] = None,
  ocpu_count: typing.Union[int, float] = None,
  open_mode: str = None,
  operations_insights_status: str = None,
  permission_level: str = None,
  private_endpoint_ip: str = None,
  private_endpoint_label: str = None,
  refreshable_mode: str = None,
  remote_disaster_recovery_type: str = None,
  resource_pool_leader_id: str = None,
  resource_pool_summary: DatabaseAutonomousDatabaseResourcePoolSummary = None,
  rotate_key_trigger: typing.Union[bool, IResolvable] = None,
  scheduled_operations: typing.Union[IResolvable, typing.List[DatabaseAutonomousDatabaseScheduledOperations]] = None,
  secret_id: str = None,
  secret_version_number: typing.Union[int, float] = None,
  security_attributes: typing.Mapping[str] = None,
  shrink_adb_trigger: typing.Union[int, float] = None,
  source: str = None,
  source_id: str = None,
  standby_whitelisted_ips: typing.List[str] = None,
  state: str = None,
  subnet_id: str = None,
  subscription_id: str = None,
  switchover_to: str = None,
  switchover_to_remote_peer_id: str = None,
  time_of_auto_refresh_start: str = None,
  timeouts: DatabaseAutonomousDatabaseTimeouts = None,
  timestamp: str = None,
  use_latest_available_backup_time_stamp: typing.Union[bool, IResolvable] = None,
  vault_id: str = None,
  whitelisted_ips: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compartment_id DatabaseAutonomousDatabase#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dbName">db_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_name DatabaseAutonomousDatabase#db_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.adminPassword">admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#admin_password DatabaseAutonomousDatabase#admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.arePrimaryWhitelistedIpsUsed">are_primary_whitelisted_ips_used</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#are_primary_whitelisted_ips_used DatabaseAutonomousDatabase#are_primary_whitelisted_ips_used}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.autonomousContainerDatabaseId">autonomous_container_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_container_database_id DatabaseAutonomousDatabase#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.autonomousDatabaseBackupId">autonomous_database_backup_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_database_backup_id DatabaseAutonomousDatabase#autonomous_database_backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_database_id DatabaseAutonomousDatabase#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.autonomousMaintenanceScheduleType">autonomous_maintenance_schedule_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_maintenance_schedule_type DatabaseAutonomousDatabase#autonomous_maintenance_schedule_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.autoRefreshFrequencyInSeconds">auto_refresh_frequency_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#auto_refresh_frequency_in_seconds DatabaseAutonomousDatabase#auto_refresh_frequency_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.autoRefreshPointLagInSeconds">auto_refresh_point_lag_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#auto_refresh_point_lag_in_seconds DatabaseAutonomousDatabase#auto_refresh_point_lag_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.backupRetentionPeriodInDays">backup_retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#backup_retention_period_in_days DatabaseAutonomousDatabase#backup_retention_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.byolComputeCountLimit">byol_compute_count_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#byol_compute_count_limit DatabaseAutonomousDatabase#byol_compute_count_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.characterSet">character_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#character_set DatabaseAutonomousDatabase#character_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.cloneType">clone_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#clone_type DatabaseAutonomousDatabase#clone_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compute_count DatabaseAutonomousDatabase#compute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.computeModel">compute_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compute_model DatabaseAutonomousDatabase#compute_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#cpu_core_count DatabaseAutonomousDatabase#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.customerContacts">customer_contacts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>]]</code> | customer_contacts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.databaseEdition">database_edition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#database_edition DatabaseAutonomousDatabase#database_edition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.databaseManagementStatus">database_management_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#database_management_status DatabaseAutonomousDatabase#database_management_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dataSafeStatus">data_safe_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_safe_status DatabaseAutonomousDatabase#data_safe_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dataStorageSizeInGb">data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_storage_size_in_gb DatabaseAutonomousDatabase#data_storage_size_in_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dataStorageSizeInTbs">data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_storage_size_in_tbs DatabaseAutonomousDatabase#data_storage_size_in_tbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dbToolsDetails">db_tools_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>]]</code> | db_tools_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dbVersion">db_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_version DatabaseAutonomousDatabase#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dbWorkload">db_workload</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_workload DatabaseAutonomousDatabase#db_workload}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#defined_tags DatabaseAutonomousDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.disasterRecoveryType">disaster_recovery_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#disaster_recovery_type DatabaseAutonomousDatabase#disaster_recovery_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#display_name DatabaseAutonomousDatabase#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.encryptionKey">encryption_key</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey">DatabaseAutonomousDatabaseEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#freeform_tags DatabaseAutonomousDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#id DatabaseAutonomousDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.inMemoryPercentage">in_memory_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#in_memory_percentage DatabaseAutonomousDatabase#in_memory_percentage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isAccessControlEnabled">is_access_control_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_access_control_enabled DatabaseAutonomousDatabase#is_access_control_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isAutoScalingEnabled">is_auto_scaling_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_auto_scaling_enabled DatabaseAutonomousDatabase#is_auto_scaling_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isAutoScalingForStorageEnabled">is_auto_scaling_for_storage_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_auto_scaling_for_storage_enabled DatabaseAutonomousDatabase#is_auto_scaling_for_storage_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isDataGuardEnabled">is_data_guard_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_data_guard_enabled DatabaseAutonomousDatabase#is_data_guard_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isDedicated">is_dedicated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_dedicated DatabaseAutonomousDatabase#is_dedicated}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isDevTier">is_dev_tier</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_dev_tier DatabaseAutonomousDatabase#is_dev_tier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isFreeTier">is_free_tier</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_free_tier DatabaseAutonomousDatabase#is_free_tier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isLocalDataGuardEnabled">is_local_data_guard_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_local_data_guard_enabled DatabaseAutonomousDatabase#is_local_data_guard_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isMtlsConnectionRequired">is_mtls_connection_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_mtls_connection_required DatabaseAutonomousDatabase#is_mtls_connection_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isPreviewVersionWithServiceTermsAccepted">is_preview_version_with_service_terms_accepted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_preview_version_with_service_terms_accepted DatabaseAutonomousDatabase#is_preview_version_with_service_terms_accepted}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isRefreshableClone">is_refreshable_clone</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_refreshable_clone DatabaseAutonomousDatabase#is_refreshable_clone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isReplicateAutomaticBackups">is_replicate_automatic_backups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_replicate_automatic_backups DatabaseAutonomousDatabase#is_replicate_automatic_backups}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isShrinkOnly">is_shrink_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_shrink_only DatabaseAutonomousDatabase#is_shrink_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#kms_key_id DatabaseAutonomousDatabase#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#license_model DatabaseAutonomousDatabase#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.localAdgAutoFailoverMaxDataLossLimit">local_adg_auto_failover_max_data_loss_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#local_adg_auto_failover_max_data_loss_limit DatabaseAutonomousDatabase#local_adg_auto_failover_max_data_loss_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.longTermBackupSchedule">long_term_backup_schedule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>]]</code> | long_term_backup_schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.maxCpuCoreCount">max_cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#max_cpu_core_count DatabaseAutonomousDatabase#max_cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.ncharacterSet">ncharacter_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#ncharacter_set DatabaseAutonomousDatabase#ncharacter_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#nsg_ids DatabaseAutonomousDatabase#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.ocpuCount">ocpu_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#ocpu_count DatabaseAutonomousDatabase#ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.openMode">open_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#open_mode DatabaseAutonomousDatabase#open_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.operationsInsightsStatus">operations_insights_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#operations_insights_status DatabaseAutonomousDatabase#operations_insights_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.permissionLevel">permission_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#permission_level DatabaseAutonomousDatabase#permission_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.privateEndpointIp">private_endpoint_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#private_endpoint_ip DatabaseAutonomousDatabase#private_endpoint_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.privateEndpointLabel">private_endpoint_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#private_endpoint_label DatabaseAutonomousDatabase#private_endpoint_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.refreshableMode">refreshable_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#refreshable_mode DatabaseAutonomousDatabase#refreshable_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.remoteDisasterRecoveryType">remote_disaster_recovery_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#remote_disaster_recovery_type DatabaseAutonomousDatabase#remote_disaster_recovery_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.resourcePoolLeaderId">resource_pool_leader_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#resource_pool_leader_id DatabaseAutonomousDatabase#resource_pool_leader_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.resourcePoolSummary">resource_pool_summary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary">DatabaseAutonomousDatabaseResourcePoolSummary</a></code> | resource_pool_summary block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.rotateKeyTrigger">rotate_key_trigger</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#rotate_key_trigger DatabaseAutonomousDatabase#rotate_key_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.scheduledOperations">scheduled_operations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>]]</code> | scheduled_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.secretId">secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#secret_id DatabaseAutonomousDatabase#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.secretVersionNumber">secret_version_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#secret_version_number DatabaseAutonomousDatabase#secret_version_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.securityAttributes">security_attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#security_attributes DatabaseAutonomousDatabase#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.shrinkAdbTrigger">shrink_adb_trigger</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#shrink_adb_trigger DatabaseAutonomousDatabase#shrink_adb_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#source DatabaseAutonomousDatabase#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.sourceId">source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#source_id DatabaseAutonomousDatabase#source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.standbyWhitelistedIps">standby_whitelisted_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#standby_whitelisted_ips DatabaseAutonomousDatabase#standby_whitelisted_ips}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#state DatabaseAutonomousDatabase#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#subnet_id DatabaseAutonomousDatabase#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#subscription_id DatabaseAutonomousDatabase#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.switchoverTo">switchover_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#switchover_to DatabaseAutonomousDatabase#switchover_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.switchoverToRemotePeerId">switchover_to_remote_peer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#switchover_to_remote_peer_id DatabaseAutonomousDatabase#switchover_to_remote_peer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.timeOfAutoRefreshStart">time_of_auto_refresh_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#time_of_auto_refresh_start DatabaseAutonomousDatabase#time_of_auto_refresh_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts">DatabaseAutonomousDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.timestamp">timestamp</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#timestamp DatabaseAutonomousDatabase#timestamp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.useLatestAvailableBackupTimeStamp">use_latest_available_backup_time_stamp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#use_latest_available_backup_time_stamp DatabaseAutonomousDatabase#use_latest_available_backup_time_stamp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.vaultId">vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#vault_id DatabaseAutonomousDatabase#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.whitelistedIps">whitelisted_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#whitelisted_ips DatabaseAutonomousDatabase#whitelisted_ips}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compartment_id DatabaseAutonomousDatabase#compartment_id}.

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dbName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_name DatabaseAutonomousDatabase#db_name}.

---

##### `admin_password`<sup>Optional</sup> <a name="admin_password" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.adminPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#admin_password DatabaseAutonomousDatabase#admin_password}.

---

##### `are_primary_whitelisted_ips_used`<sup>Optional</sup> <a name="are_primary_whitelisted_ips_used" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.arePrimaryWhitelistedIpsUsed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#are_primary_whitelisted_ips_used DatabaseAutonomousDatabase#are_primary_whitelisted_ips_used}.

---

##### `autonomous_container_database_id`<sup>Optional</sup> <a name="autonomous_container_database_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.autonomousContainerDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_container_database_id DatabaseAutonomousDatabase#autonomous_container_database_id}.

---

##### `autonomous_database_backup_id`<sup>Optional</sup> <a name="autonomous_database_backup_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.autonomousDatabaseBackupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_database_backup_id DatabaseAutonomousDatabase#autonomous_database_backup_id}.

---

##### `autonomous_database_id`<sup>Optional</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.autonomousDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_database_id DatabaseAutonomousDatabase#autonomous_database_id}.

---

##### `autonomous_maintenance_schedule_type`<sup>Optional</sup> <a name="autonomous_maintenance_schedule_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.autonomousMaintenanceScheduleType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_maintenance_schedule_type DatabaseAutonomousDatabase#autonomous_maintenance_schedule_type}.

---

##### `auto_refresh_frequency_in_seconds`<sup>Optional</sup> <a name="auto_refresh_frequency_in_seconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.autoRefreshFrequencyInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#auto_refresh_frequency_in_seconds DatabaseAutonomousDatabase#auto_refresh_frequency_in_seconds}.

---

##### `auto_refresh_point_lag_in_seconds`<sup>Optional</sup> <a name="auto_refresh_point_lag_in_seconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.autoRefreshPointLagInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#auto_refresh_point_lag_in_seconds DatabaseAutonomousDatabase#auto_refresh_point_lag_in_seconds}.

---

##### `backup_retention_period_in_days`<sup>Optional</sup> <a name="backup_retention_period_in_days" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.backupRetentionPeriodInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#backup_retention_period_in_days DatabaseAutonomousDatabase#backup_retention_period_in_days}.

---

##### `byol_compute_count_limit`<sup>Optional</sup> <a name="byol_compute_count_limit" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.byolComputeCountLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#byol_compute_count_limit DatabaseAutonomousDatabase#byol_compute_count_limit}.

---

##### `character_set`<sup>Optional</sup> <a name="character_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.characterSet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#character_set DatabaseAutonomousDatabase#character_set}.

---

##### `clone_type`<sup>Optional</sup> <a name="clone_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.cloneType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#clone_type DatabaseAutonomousDatabase#clone_type}.

---

##### `compute_count`<sup>Optional</sup> <a name="compute_count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.computeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compute_count DatabaseAutonomousDatabase#compute_count}.

---

##### `compute_model`<sup>Optional</sup> <a name="compute_model" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.computeModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compute_model DatabaseAutonomousDatabase#compute_model}.

---

##### `cpu_core_count`<sup>Optional</sup> <a name="cpu_core_count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.cpuCoreCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#cpu_core_count DatabaseAutonomousDatabase#cpu_core_count}.

---

##### `customer_contacts`<sup>Optional</sup> <a name="customer_contacts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.customerContacts"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>]]

customer_contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#customer_contacts DatabaseAutonomousDatabase#customer_contacts}

---

##### `database_edition`<sup>Optional</sup> <a name="database_edition" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.databaseEdition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#database_edition DatabaseAutonomousDatabase#database_edition}.

---

##### `database_management_status`<sup>Optional</sup> <a name="database_management_status" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.databaseManagementStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#database_management_status DatabaseAutonomousDatabase#database_management_status}.

---

##### `data_safe_status`<sup>Optional</sup> <a name="data_safe_status" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dataSafeStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_safe_status DatabaseAutonomousDatabase#data_safe_status}.

---

##### `data_storage_size_in_gb`<sup>Optional</sup> <a name="data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dataStorageSizeInGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_storage_size_in_gb DatabaseAutonomousDatabase#data_storage_size_in_gb}.

---

##### `data_storage_size_in_tbs`<sup>Optional</sup> <a name="data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dataStorageSizeInTbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_storage_size_in_tbs DatabaseAutonomousDatabase#data_storage_size_in_tbs}.

---

##### `db_tools_details`<sup>Optional</sup> <a name="db_tools_details" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dbToolsDetails"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>]]

db_tools_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_tools_details DatabaseAutonomousDatabase#db_tools_details}

---

##### `db_version`<sup>Optional</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dbVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_version DatabaseAutonomousDatabase#db_version}.

---

##### `db_workload`<sup>Optional</sup> <a name="db_workload" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.dbWorkload"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_workload DatabaseAutonomousDatabase#db_workload}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#defined_tags DatabaseAutonomousDatabase#defined_tags}.

---

##### `disaster_recovery_type`<sup>Optional</sup> <a name="disaster_recovery_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.disasterRecoveryType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#disaster_recovery_type DatabaseAutonomousDatabase#disaster_recovery_type}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#display_name DatabaseAutonomousDatabase#display_name}.

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.encryptionKey"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey">DatabaseAutonomousDatabaseEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#encryption_key DatabaseAutonomousDatabase#encryption_key}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#freeform_tags DatabaseAutonomousDatabase#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#id DatabaseAutonomousDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in_memory_percentage`<sup>Optional</sup> <a name="in_memory_percentage" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.inMemoryPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#in_memory_percentage DatabaseAutonomousDatabase#in_memory_percentage}.

---

##### `is_access_control_enabled`<sup>Optional</sup> <a name="is_access_control_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isAccessControlEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_access_control_enabled DatabaseAutonomousDatabase#is_access_control_enabled}.

---

##### `is_auto_scaling_enabled`<sup>Optional</sup> <a name="is_auto_scaling_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isAutoScalingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_auto_scaling_enabled DatabaseAutonomousDatabase#is_auto_scaling_enabled}.

---

##### `is_auto_scaling_for_storage_enabled`<sup>Optional</sup> <a name="is_auto_scaling_for_storage_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isAutoScalingForStorageEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_auto_scaling_for_storage_enabled DatabaseAutonomousDatabase#is_auto_scaling_for_storage_enabled}.

---

##### `is_data_guard_enabled`<sup>Optional</sup> <a name="is_data_guard_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isDataGuardEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_data_guard_enabled DatabaseAutonomousDatabase#is_data_guard_enabled}.

---

##### `is_dedicated`<sup>Optional</sup> <a name="is_dedicated" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isDedicated"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_dedicated DatabaseAutonomousDatabase#is_dedicated}.

---

##### `is_dev_tier`<sup>Optional</sup> <a name="is_dev_tier" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isDevTier"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_dev_tier DatabaseAutonomousDatabase#is_dev_tier}.

---

##### `is_free_tier`<sup>Optional</sup> <a name="is_free_tier" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isFreeTier"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_free_tier DatabaseAutonomousDatabase#is_free_tier}.

---

##### `is_local_data_guard_enabled`<sup>Optional</sup> <a name="is_local_data_guard_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isLocalDataGuardEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_local_data_guard_enabled DatabaseAutonomousDatabase#is_local_data_guard_enabled}.

---

##### `is_mtls_connection_required`<sup>Optional</sup> <a name="is_mtls_connection_required" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isMtlsConnectionRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_mtls_connection_required DatabaseAutonomousDatabase#is_mtls_connection_required}.

---

##### `is_preview_version_with_service_terms_accepted`<sup>Optional</sup> <a name="is_preview_version_with_service_terms_accepted" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isPreviewVersionWithServiceTermsAccepted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_preview_version_with_service_terms_accepted DatabaseAutonomousDatabase#is_preview_version_with_service_terms_accepted}.

---

##### `is_refreshable_clone`<sup>Optional</sup> <a name="is_refreshable_clone" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isRefreshableClone"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_refreshable_clone DatabaseAutonomousDatabase#is_refreshable_clone}.

---

##### `is_replicate_automatic_backups`<sup>Optional</sup> <a name="is_replicate_automatic_backups" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isReplicateAutomaticBackups"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_replicate_automatic_backups DatabaseAutonomousDatabase#is_replicate_automatic_backups}.

---

##### `is_shrink_only`<sup>Optional</sup> <a name="is_shrink_only" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.isShrinkOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_shrink_only DatabaseAutonomousDatabase#is_shrink_only}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#kms_key_id DatabaseAutonomousDatabase#kms_key_id}.

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.licenseModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#license_model DatabaseAutonomousDatabase#license_model}.

---

##### `local_adg_auto_failover_max_data_loss_limit`<sup>Optional</sup> <a name="local_adg_auto_failover_max_data_loss_limit" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.localAdgAutoFailoverMaxDataLossLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#local_adg_auto_failover_max_data_loss_limit DatabaseAutonomousDatabase#local_adg_auto_failover_max_data_loss_limit}.

---

##### `long_term_backup_schedule`<sup>Optional</sup> <a name="long_term_backup_schedule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.longTermBackupSchedule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>]]

long_term_backup_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#long_term_backup_schedule DatabaseAutonomousDatabase#long_term_backup_schedule}

---

##### `max_cpu_core_count`<sup>Optional</sup> <a name="max_cpu_core_count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.maxCpuCoreCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#max_cpu_core_count DatabaseAutonomousDatabase#max_cpu_core_count}.

---

##### `ncharacter_set`<sup>Optional</sup> <a name="ncharacter_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.ncharacterSet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#ncharacter_set DatabaseAutonomousDatabase#ncharacter_set}.

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.nsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#nsg_ids DatabaseAutonomousDatabase#nsg_ids}.

---

##### `ocpu_count`<sup>Optional</sup> <a name="ocpu_count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.ocpuCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#ocpu_count DatabaseAutonomousDatabase#ocpu_count}.

---

##### `open_mode`<sup>Optional</sup> <a name="open_mode" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.openMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#open_mode DatabaseAutonomousDatabase#open_mode}.

---

##### `operations_insights_status`<sup>Optional</sup> <a name="operations_insights_status" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.operationsInsightsStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#operations_insights_status DatabaseAutonomousDatabase#operations_insights_status}.

---

##### `permission_level`<sup>Optional</sup> <a name="permission_level" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.permissionLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#permission_level DatabaseAutonomousDatabase#permission_level}.

---

##### `private_endpoint_ip`<sup>Optional</sup> <a name="private_endpoint_ip" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.privateEndpointIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#private_endpoint_ip DatabaseAutonomousDatabase#private_endpoint_ip}.

---

##### `private_endpoint_label`<sup>Optional</sup> <a name="private_endpoint_label" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.privateEndpointLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#private_endpoint_label DatabaseAutonomousDatabase#private_endpoint_label}.

---

##### `refreshable_mode`<sup>Optional</sup> <a name="refreshable_mode" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.refreshableMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#refreshable_mode DatabaseAutonomousDatabase#refreshable_mode}.

---

##### `remote_disaster_recovery_type`<sup>Optional</sup> <a name="remote_disaster_recovery_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.remoteDisasterRecoveryType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#remote_disaster_recovery_type DatabaseAutonomousDatabase#remote_disaster_recovery_type}.

---

##### `resource_pool_leader_id`<sup>Optional</sup> <a name="resource_pool_leader_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.resourcePoolLeaderId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#resource_pool_leader_id DatabaseAutonomousDatabase#resource_pool_leader_id}.

---

##### `resource_pool_summary`<sup>Optional</sup> <a name="resource_pool_summary" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.resourcePoolSummary"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary">DatabaseAutonomousDatabaseResourcePoolSummary</a>

resource_pool_summary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#resource_pool_summary DatabaseAutonomousDatabase#resource_pool_summary}

---

##### `rotate_key_trigger`<sup>Optional</sup> <a name="rotate_key_trigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.rotateKeyTrigger"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#rotate_key_trigger DatabaseAutonomousDatabase#rotate_key_trigger}.

---

##### `scheduled_operations`<sup>Optional</sup> <a name="scheduled_operations" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.scheduledOperations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>]]

scheduled_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#scheduled_operations DatabaseAutonomousDatabase#scheduled_operations}

---

##### `secret_id`<sup>Optional</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.secretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#secret_id DatabaseAutonomousDatabase#secret_id}.

---

##### `secret_version_number`<sup>Optional</sup> <a name="secret_version_number" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.secretVersionNumber"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#secret_version_number DatabaseAutonomousDatabase#secret_version_number}.

---

##### `security_attributes`<sup>Optional</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.securityAttributes"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#security_attributes DatabaseAutonomousDatabase#security_attributes}.

---

##### `shrink_adb_trigger`<sup>Optional</sup> <a name="shrink_adb_trigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.shrinkAdbTrigger"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#shrink_adb_trigger DatabaseAutonomousDatabase#shrink_adb_trigger}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#source DatabaseAutonomousDatabase#source}.

---

##### `source_id`<sup>Optional</sup> <a name="source_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.sourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#source_id DatabaseAutonomousDatabase#source_id}.

---

##### `standby_whitelisted_ips`<sup>Optional</sup> <a name="standby_whitelisted_ips" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.standbyWhitelistedIps"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#standby_whitelisted_ips DatabaseAutonomousDatabase#standby_whitelisted_ips}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#state DatabaseAutonomousDatabase#state}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#subnet_id DatabaseAutonomousDatabase#subnet_id}.

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#subscription_id DatabaseAutonomousDatabase#subscription_id}.

---

##### `switchover_to`<sup>Optional</sup> <a name="switchover_to" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.switchoverTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#switchover_to DatabaseAutonomousDatabase#switchover_to}.

---

##### `switchover_to_remote_peer_id`<sup>Optional</sup> <a name="switchover_to_remote_peer_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.switchoverToRemotePeerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#switchover_to_remote_peer_id DatabaseAutonomousDatabase#switchover_to_remote_peer_id}.

---

##### `time_of_auto_refresh_start`<sup>Optional</sup> <a name="time_of_auto_refresh_start" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.timeOfAutoRefreshStart"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#time_of_auto_refresh_start DatabaseAutonomousDatabase#time_of_auto_refresh_start}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts">DatabaseAutonomousDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#timeouts DatabaseAutonomousDatabase#timeouts}

---

##### `timestamp`<sup>Optional</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.timestamp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#timestamp DatabaseAutonomousDatabase#timestamp}.

---

##### `use_latest_available_backup_time_stamp`<sup>Optional</sup> <a name="use_latest_available_backup_time_stamp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.useLatestAvailableBackupTimeStamp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#use_latest_available_backup_time_stamp DatabaseAutonomousDatabase#use_latest_available_backup_time_stamp}.

---

##### `vault_id`<sup>Optional</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.vaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#vault_id DatabaseAutonomousDatabase#vault_id}.

---

##### `whitelisted_ips`<sup>Optional</sup> <a name="whitelisted_ips" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.whitelistedIps"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#whitelisted_ips DatabaseAutonomousDatabase#whitelisted_ips}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putCustomerContacts">put_customer_contacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putDbToolsDetails">put_db_tools_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putEncryptionKey">put_encryption_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putLongTermBackupSchedule">put_long_term_backup_schedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putResourcePoolSummary">put_resource_pool_summary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putScheduledOperations">put_scheduled_operations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAdminPassword">reset_admin_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetArePrimaryWhitelistedIpsUsed">reset_are_primary_whitelisted_ips_used</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutonomousContainerDatabaseId">reset_autonomous_container_database_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutonomousDatabaseBackupId">reset_autonomous_database_backup_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutonomousDatabaseId">reset_autonomous_database_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutonomousMaintenanceScheduleType">reset_autonomous_maintenance_schedule_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutoRefreshFrequencyInSeconds">reset_auto_refresh_frequency_in_seconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutoRefreshPointLagInSeconds">reset_auto_refresh_point_lag_in_seconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetBackupRetentionPeriodInDays">reset_backup_retention_period_in_days</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetByolComputeCountLimit">reset_byol_compute_count_limit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetCharacterSet">reset_character_set</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetCloneType">reset_clone_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetComputeCount">reset_compute_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetComputeModel">reset_compute_model</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetCpuCoreCount">reset_cpu_core_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetCustomerContacts">reset_customer_contacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDatabaseEdition">reset_database_edition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDatabaseManagementStatus">reset_database_management_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDataSafeStatus">reset_data_safe_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDataStorageSizeInGb">reset_data_storage_size_in_gb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDataStorageSizeInTbs">reset_data_storage_size_in_tbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDbToolsDetails">reset_db_tools_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDbVersion">reset_db_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDbWorkload">reset_db_workload</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDisasterRecoveryType">reset_disaster_recovery_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetEncryptionKey">reset_encryption_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetInMemoryPercentage">reset_in_memory_percentage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsAccessControlEnabled">reset_is_access_control_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsAutoScalingEnabled">reset_is_auto_scaling_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsAutoScalingForStorageEnabled">reset_is_auto_scaling_for_storage_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsDataGuardEnabled">reset_is_data_guard_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsDedicated">reset_is_dedicated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsDevTier">reset_is_dev_tier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsFreeTier">reset_is_free_tier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsLocalDataGuardEnabled">reset_is_local_data_guard_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsMtlsConnectionRequired">reset_is_mtls_connection_required</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsPreviewVersionWithServiceTermsAccepted">reset_is_preview_version_with_service_terms_accepted</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsRefreshableClone">reset_is_refreshable_clone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsReplicateAutomaticBackups">reset_is_replicate_automatic_backups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsShrinkOnly">reset_is_shrink_only</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetLicenseModel">reset_license_model</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetLocalAdgAutoFailoverMaxDataLossLimit">reset_local_adg_auto_failover_max_data_loss_limit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetLongTermBackupSchedule">reset_long_term_backup_schedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetMaxCpuCoreCount">reset_max_cpu_core_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetNcharacterSet">reset_ncharacter_set</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetNsgIds">reset_nsg_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetOcpuCount">reset_ocpu_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetOpenMode">reset_open_mode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetOperationsInsightsStatus">reset_operations_insights_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetPermissionLevel">reset_permission_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetPrivateEndpointIp">reset_private_endpoint_ip</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetPrivateEndpointLabel">reset_private_endpoint_label</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetRefreshableMode">reset_refreshable_mode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetRemoteDisasterRecoveryType">reset_remote_disaster_recovery_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetResourcePoolLeaderId">reset_resource_pool_leader_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetResourcePoolSummary">reset_resource_pool_summary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetRotateKeyTrigger">reset_rotate_key_trigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetScheduledOperations">reset_scheduled_operations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSecretId">reset_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSecretVersionNumber">reset_secret_version_number</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSecurityAttributes">reset_security_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetShrinkAdbTrigger">reset_shrink_adb_trigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSourceId">reset_source_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetStandbyWhitelistedIps">reset_standby_whitelisted_ips</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSubscriptionId">reset_subscription_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSwitchoverTo">reset_switchover_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSwitchoverToRemotePeerId">reset_switchover_to_remote_peer_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetTimeOfAutoRefreshStart">reset_time_of_auto_refresh_start</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetTimestamp">reset_timestamp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetUseLatestAvailableBackupTimeStamp">reset_use_latest_available_backup_time_stamp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetVaultId">reset_vault_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetWhitelistedIps">reset_whitelisted_ips</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_customer_contacts` <a name="put_customer_contacts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putCustomerContacts"></a>

```python
def put_customer_contacts(
  value: typing.Union[IResolvable, typing.List[DatabaseAutonomousDatabaseCustomerContacts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putCustomerContacts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>]]

---

##### `put_db_tools_details` <a name="put_db_tools_details" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putDbToolsDetails"></a>

```python
def put_db_tools_details(
  value: typing.Union[IResolvable, typing.List[DatabaseAutonomousDatabaseDbToolsDetails]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putDbToolsDetails.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>]]

---

##### `put_encryption_key` <a name="put_encryption_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putEncryptionKey"></a>

```python
def put_encryption_key(
  arn_role: str = None,
  autonomous_database_provider: str = None,
  certificate_directory_name: str = None,
  certificate_id: str = None,
  directory_name: str = None,
  external_id: str = None,
  key_arn: str = None,
  key_name: str = None,
  kms_key_id: str = None,
  okv_kms_key: str = None,
  okv_uri: str = None,
  service_endpoint_uri: str = None,
  vault_id: str = None,
  vault_uri: str = None
) -> None
```

###### `arn_role`<sup>Optional</sup> <a name="arn_role" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putEncryptionKey.parameter.arnRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#arn_role DatabaseAutonomousDatabase#arn_role}.

---

###### `autonomous_database_provider`<sup>Optional</sup> <a name="autonomous_database_provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putEncryptionKey.parameter.autonomousDatabaseProvider"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_database_provider DatabaseAutonomousDatabase#autonomous_database_provider}.

---

###### `certificate_directory_name`<sup>Optional</sup> <a name="certificate_directory_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putEncryptionKey.parameter.certificateDirectoryName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#certificate_directory_name DatabaseAutonomousDatabase#certificate_directory_name}.

---

###### `certificate_id`<sup>Optional</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putEncryptionKey.parameter.certificateId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#certificate_id DatabaseAutonomousDatabase#certificate_id}.

---

###### `directory_name`<sup>Optional</sup> <a name="directory_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putEncryptionKey.parameter.directoryName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#directory_name DatabaseAutonomousDatabase#directory_name}.

---

###### `external_id`<sup>Optional</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putEncryptionKey.parameter.externalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#external_id DatabaseAutonomousDatabase#external_id}.

---

###### `key_arn`<sup>Optional</sup> <a name="key_arn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putEncryptionKey.parameter.keyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#key_arn DatabaseAutonomousDatabase#key_arn}.

---

###### `key_name`<sup>Optional</sup> <a name="key_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putEncryptionKey.parameter.keyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#key_name DatabaseAutonomousDatabase#key_name}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putEncryptionKey.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#kms_key_id DatabaseAutonomousDatabase#kms_key_id}.

---

###### `okv_kms_key`<sup>Optional</sup> <a name="okv_kms_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putEncryptionKey.parameter.okvKmsKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#okv_kms_key DatabaseAutonomousDatabase#okv_kms_key}.

---

###### `okv_uri`<sup>Optional</sup> <a name="okv_uri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putEncryptionKey.parameter.okvUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#okv_uri DatabaseAutonomousDatabase#okv_uri}.

---

###### `service_endpoint_uri`<sup>Optional</sup> <a name="service_endpoint_uri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putEncryptionKey.parameter.serviceEndpointUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#service_endpoint_uri DatabaseAutonomousDatabase#service_endpoint_uri}.

---

###### `vault_id`<sup>Optional</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putEncryptionKey.parameter.vaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#vault_id DatabaseAutonomousDatabase#vault_id}.

---

###### `vault_uri`<sup>Optional</sup> <a name="vault_uri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putEncryptionKey.parameter.vaultUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#vault_uri DatabaseAutonomousDatabase#vault_uri}.

---

##### `put_long_term_backup_schedule` <a name="put_long_term_backup_schedule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putLongTermBackupSchedule"></a>

```python
def put_long_term_backup_schedule(
  value: typing.Union[IResolvable, typing.List[DatabaseAutonomousDatabaseLongTermBackupSchedule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putLongTermBackupSchedule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>]]

---

##### `put_resource_pool_summary` <a name="put_resource_pool_summary" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putResourcePoolSummary"></a>

```python
def put_resource_pool_summary(
  is_disabled: typing.Union[bool, IResolvable] = None,
  pool_size: typing.Union[int, float] = None
) -> None
```

###### `is_disabled`<sup>Optional</sup> <a name="is_disabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putResourcePoolSummary.parameter.isDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_disabled DatabaseAutonomousDatabase#is_disabled}.

---

###### `pool_size`<sup>Optional</sup> <a name="pool_size" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putResourcePoolSummary.parameter.poolSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#pool_size DatabaseAutonomousDatabase#pool_size}.

---

##### `put_scheduled_operations` <a name="put_scheduled_operations" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putScheduledOperations"></a>

```python
def put_scheduled_operations(
  value: typing.Union[IResolvable, typing.List[DatabaseAutonomousDatabaseScheduledOperations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putScheduledOperations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#create DatabaseAutonomousDatabase#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#delete DatabaseAutonomousDatabase#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#update DatabaseAutonomousDatabase#update}.

---

##### `reset_admin_password` <a name="reset_admin_password" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAdminPassword"></a>

```python
def reset_admin_password() -> None
```

##### `reset_are_primary_whitelisted_ips_used` <a name="reset_are_primary_whitelisted_ips_used" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetArePrimaryWhitelistedIpsUsed"></a>

```python
def reset_are_primary_whitelisted_ips_used() -> None
```

##### `reset_autonomous_container_database_id` <a name="reset_autonomous_container_database_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutonomousContainerDatabaseId"></a>

```python
def reset_autonomous_container_database_id() -> None
```

##### `reset_autonomous_database_backup_id` <a name="reset_autonomous_database_backup_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutonomousDatabaseBackupId"></a>

```python
def reset_autonomous_database_backup_id() -> None
```

##### `reset_autonomous_database_id` <a name="reset_autonomous_database_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutonomousDatabaseId"></a>

```python
def reset_autonomous_database_id() -> None
```

##### `reset_autonomous_maintenance_schedule_type` <a name="reset_autonomous_maintenance_schedule_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutonomousMaintenanceScheduleType"></a>

```python
def reset_autonomous_maintenance_schedule_type() -> None
```

##### `reset_auto_refresh_frequency_in_seconds` <a name="reset_auto_refresh_frequency_in_seconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutoRefreshFrequencyInSeconds"></a>

```python
def reset_auto_refresh_frequency_in_seconds() -> None
```

##### `reset_auto_refresh_point_lag_in_seconds` <a name="reset_auto_refresh_point_lag_in_seconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutoRefreshPointLagInSeconds"></a>

```python
def reset_auto_refresh_point_lag_in_seconds() -> None
```

##### `reset_backup_retention_period_in_days` <a name="reset_backup_retention_period_in_days" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetBackupRetentionPeriodInDays"></a>

```python
def reset_backup_retention_period_in_days() -> None
```

##### `reset_byol_compute_count_limit` <a name="reset_byol_compute_count_limit" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetByolComputeCountLimit"></a>

```python
def reset_byol_compute_count_limit() -> None
```

##### `reset_character_set` <a name="reset_character_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetCharacterSet"></a>

```python
def reset_character_set() -> None
```

##### `reset_clone_type` <a name="reset_clone_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetCloneType"></a>

```python
def reset_clone_type() -> None
```

##### `reset_compute_count` <a name="reset_compute_count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetComputeCount"></a>

```python
def reset_compute_count() -> None
```

##### `reset_compute_model` <a name="reset_compute_model" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetComputeModel"></a>

```python
def reset_compute_model() -> None
```

##### `reset_cpu_core_count` <a name="reset_cpu_core_count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetCpuCoreCount"></a>

```python
def reset_cpu_core_count() -> None
```

##### `reset_customer_contacts` <a name="reset_customer_contacts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetCustomerContacts"></a>

```python
def reset_customer_contacts() -> None
```

##### `reset_database_edition` <a name="reset_database_edition" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDatabaseEdition"></a>

```python
def reset_database_edition() -> None
```

##### `reset_database_management_status` <a name="reset_database_management_status" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDatabaseManagementStatus"></a>

```python
def reset_database_management_status() -> None
```

##### `reset_data_safe_status` <a name="reset_data_safe_status" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDataSafeStatus"></a>

```python
def reset_data_safe_status() -> None
```

##### `reset_data_storage_size_in_gb` <a name="reset_data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDataStorageSizeInGb"></a>

```python
def reset_data_storage_size_in_gb() -> None
```

##### `reset_data_storage_size_in_tbs` <a name="reset_data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDataStorageSizeInTbs"></a>

```python
def reset_data_storage_size_in_tbs() -> None
```

##### `reset_db_tools_details` <a name="reset_db_tools_details" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDbToolsDetails"></a>

```python
def reset_db_tools_details() -> None
```

##### `reset_db_version` <a name="reset_db_version" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDbVersion"></a>

```python
def reset_db_version() -> None
```

##### `reset_db_workload` <a name="reset_db_workload" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDbWorkload"></a>

```python
def reset_db_workload() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_disaster_recovery_type` <a name="reset_disaster_recovery_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDisasterRecoveryType"></a>

```python
def reset_disaster_recovery_type() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_encryption_key` <a name="reset_encryption_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetEncryptionKey"></a>

```python
def reset_encryption_key() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_in_memory_percentage` <a name="reset_in_memory_percentage" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetInMemoryPercentage"></a>

```python
def reset_in_memory_percentage() -> None
```

##### `reset_is_access_control_enabled` <a name="reset_is_access_control_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsAccessControlEnabled"></a>

```python
def reset_is_access_control_enabled() -> None
```

##### `reset_is_auto_scaling_enabled` <a name="reset_is_auto_scaling_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsAutoScalingEnabled"></a>

```python
def reset_is_auto_scaling_enabled() -> None
```

##### `reset_is_auto_scaling_for_storage_enabled` <a name="reset_is_auto_scaling_for_storage_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsAutoScalingForStorageEnabled"></a>

```python
def reset_is_auto_scaling_for_storage_enabled() -> None
```

##### `reset_is_data_guard_enabled` <a name="reset_is_data_guard_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsDataGuardEnabled"></a>

```python
def reset_is_data_guard_enabled() -> None
```

##### `reset_is_dedicated` <a name="reset_is_dedicated" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsDedicated"></a>

```python
def reset_is_dedicated() -> None
```

##### `reset_is_dev_tier` <a name="reset_is_dev_tier" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsDevTier"></a>

```python
def reset_is_dev_tier() -> None
```

##### `reset_is_free_tier` <a name="reset_is_free_tier" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsFreeTier"></a>

```python
def reset_is_free_tier() -> None
```

##### `reset_is_local_data_guard_enabled` <a name="reset_is_local_data_guard_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsLocalDataGuardEnabled"></a>

```python
def reset_is_local_data_guard_enabled() -> None
```

##### `reset_is_mtls_connection_required` <a name="reset_is_mtls_connection_required" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsMtlsConnectionRequired"></a>

```python
def reset_is_mtls_connection_required() -> None
```

##### `reset_is_preview_version_with_service_terms_accepted` <a name="reset_is_preview_version_with_service_terms_accepted" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsPreviewVersionWithServiceTermsAccepted"></a>

```python
def reset_is_preview_version_with_service_terms_accepted() -> None
```

##### `reset_is_refreshable_clone` <a name="reset_is_refreshable_clone" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsRefreshableClone"></a>

```python
def reset_is_refreshable_clone() -> None
```

##### `reset_is_replicate_automatic_backups` <a name="reset_is_replicate_automatic_backups" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsReplicateAutomaticBackups"></a>

```python
def reset_is_replicate_automatic_backups() -> None
```

##### `reset_is_shrink_only` <a name="reset_is_shrink_only" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsShrinkOnly"></a>

```python
def reset_is_shrink_only() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_license_model` <a name="reset_license_model" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetLicenseModel"></a>

```python
def reset_license_model() -> None
```

##### `reset_local_adg_auto_failover_max_data_loss_limit` <a name="reset_local_adg_auto_failover_max_data_loss_limit" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetLocalAdgAutoFailoverMaxDataLossLimit"></a>

```python
def reset_local_adg_auto_failover_max_data_loss_limit() -> None
```

##### `reset_long_term_backup_schedule` <a name="reset_long_term_backup_schedule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetLongTermBackupSchedule"></a>

```python
def reset_long_term_backup_schedule() -> None
```

##### `reset_max_cpu_core_count` <a name="reset_max_cpu_core_count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetMaxCpuCoreCount"></a>

```python
def reset_max_cpu_core_count() -> None
```

##### `reset_ncharacter_set` <a name="reset_ncharacter_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetNcharacterSet"></a>

```python
def reset_ncharacter_set() -> None
```

##### `reset_nsg_ids` <a name="reset_nsg_ids" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetNsgIds"></a>

```python
def reset_nsg_ids() -> None
```

##### `reset_ocpu_count` <a name="reset_ocpu_count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetOcpuCount"></a>

```python
def reset_ocpu_count() -> None
```

##### `reset_open_mode` <a name="reset_open_mode" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetOpenMode"></a>

```python
def reset_open_mode() -> None
```

##### `reset_operations_insights_status` <a name="reset_operations_insights_status" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetOperationsInsightsStatus"></a>

```python
def reset_operations_insights_status() -> None
```

##### `reset_permission_level` <a name="reset_permission_level" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetPermissionLevel"></a>

```python
def reset_permission_level() -> None
```

##### `reset_private_endpoint_ip` <a name="reset_private_endpoint_ip" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetPrivateEndpointIp"></a>

```python
def reset_private_endpoint_ip() -> None
```

##### `reset_private_endpoint_label` <a name="reset_private_endpoint_label" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetPrivateEndpointLabel"></a>

```python
def reset_private_endpoint_label() -> None
```

##### `reset_refreshable_mode` <a name="reset_refreshable_mode" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetRefreshableMode"></a>

```python
def reset_refreshable_mode() -> None
```

##### `reset_remote_disaster_recovery_type` <a name="reset_remote_disaster_recovery_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetRemoteDisasterRecoveryType"></a>

```python
def reset_remote_disaster_recovery_type() -> None
```

##### `reset_resource_pool_leader_id` <a name="reset_resource_pool_leader_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetResourcePoolLeaderId"></a>

```python
def reset_resource_pool_leader_id() -> None
```

##### `reset_resource_pool_summary` <a name="reset_resource_pool_summary" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetResourcePoolSummary"></a>

```python
def reset_resource_pool_summary() -> None
```

##### `reset_rotate_key_trigger` <a name="reset_rotate_key_trigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetRotateKeyTrigger"></a>

```python
def reset_rotate_key_trigger() -> None
```

##### `reset_scheduled_operations` <a name="reset_scheduled_operations" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetScheduledOperations"></a>

```python
def reset_scheduled_operations() -> None
```

##### `reset_secret_id` <a name="reset_secret_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSecretId"></a>

```python
def reset_secret_id() -> None
```

##### `reset_secret_version_number` <a name="reset_secret_version_number" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSecretVersionNumber"></a>

```python
def reset_secret_version_number() -> None
```

##### `reset_security_attributes` <a name="reset_security_attributes" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSecurityAttributes"></a>

```python
def reset_security_attributes() -> None
```

##### `reset_shrink_adb_trigger` <a name="reset_shrink_adb_trigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetShrinkAdbTrigger"></a>

```python
def reset_shrink_adb_trigger() -> None
```

##### `reset_source` <a name="reset_source" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_source_id` <a name="reset_source_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSourceId"></a>

```python
def reset_source_id() -> None
```

##### `reset_standby_whitelisted_ips` <a name="reset_standby_whitelisted_ips" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetStandbyWhitelistedIps"></a>

```python
def reset_standby_whitelisted_ips() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_subscription_id` <a name="reset_subscription_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSubscriptionId"></a>

```python
def reset_subscription_id() -> None
```

##### `reset_switchover_to` <a name="reset_switchover_to" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSwitchoverTo"></a>

```python
def reset_switchover_to() -> None
```

##### `reset_switchover_to_remote_peer_id` <a name="reset_switchover_to_remote_peer_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSwitchoverToRemotePeerId"></a>

```python
def reset_switchover_to_remote_peer_id() -> None
```

##### `reset_time_of_auto_refresh_start` <a name="reset_time_of_auto_refresh_start" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetTimeOfAutoRefreshStart"></a>

```python
def reset_time_of_auto_refresh_start() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_timestamp` <a name="reset_timestamp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetTimestamp"></a>

```python
def reset_timestamp() -> None
```

##### `reset_use_latest_available_backup_time_stamp` <a name="reset_use_latest_available_backup_time_stamp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetUseLatestAvailableBackupTimeStamp"></a>

```python
def reset_use_latest_available_backup_time_stamp() -> None
```

##### `reset_vault_id` <a name="reset_vault_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetVaultId"></a>

```python
def reset_vault_id() -> None
```

##### `reset_whitelisted_ips` <a name="reset_whitelisted_ips" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetWhitelistedIps"></a>

```python
def reset_whitelisted_ips() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseAutonomousDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabase.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabase.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseAutonomousDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseAutonomousDatabase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseAutonomousDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.actualUsedDataStorageSizeInTbs">actual_used_data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.allocatedStorageSizeInTbs">allocated_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.apexDetails">apex_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList">DatabaseAutonomousDatabaseApexDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.availableUpgradeVersions">available_upgrade_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.backupConfig">backup_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList">DatabaseAutonomousDatabaseBackupConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.clusterPlacementGroupId">cluster_placement_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.connectionStrings">connection_strings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList">DatabaseAutonomousDatabaseConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.connectionUrls">connection_urls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList">DatabaseAutonomousDatabaseConnectionUrlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.customerContacts">customer_contacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList">DatabaseAutonomousDatabaseCustomerContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataguardRegionType">dataguard_region_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbToolsDetails">db_tools_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList">DatabaseAutonomousDatabaseDbToolsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.disasterRecoveryRegionType">disaster_recovery_region_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.encryptionKey">encryption_key</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference">DatabaseAutonomousDatabaseEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.encryptionKeyHistoryEntry">encryption_key_history_entry</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList">DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.failedDataRecoveryInSeconds">failed_data_recovery_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.infrastructureType">infrastructure_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.inMemoryAreaInGbs">in_memory_area_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isPreview">is_preview</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isReconnectCloneEnabled">is_reconnect_clone_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isRemoteDataGuardEnabled">is_remote_data_guard_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.keyHistoryEntry">key_history_entry</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList">DatabaseAutonomousDatabaseKeyHistoryEntryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.keyStoreId">key_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.keyStoreWalletName">key_store_wallet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.kmsKeyLifecycleDetails">kms_key_lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.localDisasterRecoveryType">local_disaster_recovery_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.localStandbyDb">local_standby_db</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList">DatabaseAutonomousDatabaseLocalStandbyDbList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.longTermBackupSchedule">long_term_backup_schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList">DatabaseAutonomousDatabaseLongTermBackupScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.memoryPerOracleComputeUnitInGbs">memory_per_oracle_compute_unit_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.netServicesArchitecture">net_services_architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.nextLongTermBackupTimeStamp">next_long_term_backup_time_stamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.peerDbIds">peer_db_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpoint">private_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.provisionableCpus">provisionable_cpus</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.publicConnectionUrls">public_connection_urls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList">DatabaseAutonomousDatabasePublicConnectionUrlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.publicEndpoint">public_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.refreshableStatus">refreshable_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.remoteDisasterRecoveryConfiguration">remote_disaster_recovery_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList">DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.resourcePoolSummary">resource_pool_summary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference">DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.scheduledOperations">scheduled_operations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList">DatabaseAutonomousDatabaseScheduledOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.serviceConsoleUrl">service_console_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.standbyDb">standby_db</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList">DatabaseAutonomousDatabaseStandbyDbList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.supportedRegionsToCloneTo">supported_regions_to_clone_to</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeDataGuardRoleChanged">time_data_guard_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeDeletionOfFreeAutonomousDatabase">time_deletion_of_free_autonomous_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeDisasterRecoveryRoleChanged">time_disaster_recovery_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeLocalDataGuardEnabled">time_local_data_guard_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeMaintenanceBegin">time_maintenance_begin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeMaintenanceEnd">time_maintenance_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfJoiningResourcePool">time_of_joining_resource_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfLastFailover">time_of_last_failover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfLastRefresh">time_of_last_refresh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfLastRefreshPoint">time_of_last_refresh_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfLastSwitchover">time_of_last_switchover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfNextRefresh">time_of_next_refresh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference">DatabaseAutonomousDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeReclamationOfFreeAutonomousDatabase">time_reclamation_of_free_autonomous_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeUndeleted">time_undeleted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeUntilReconnectCloneEnabled">time_until_reconnect_clone_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.totalBackupStorageSizeInGbs">total_backup_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.usedDataStorageSizeInGbs">used_data_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.usedDataStorageSizeInTbs">used_data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.adminPasswordInput">admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.arePrimaryWhitelistedIpsUsedInput">are_primary_whitelisted_ips_used_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousContainerDatabaseIdInput">autonomous_container_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousDatabaseBackupIdInput">autonomous_database_backup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousDatabaseIdInput">autonomous_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousMaintenanceScheduleTypeInput">autonomous_maintenance_schedule_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autoRefreshFrequencyInSecondsInput">auto_refresh_frequency_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autoRefreshPointLagInSecondsInput">auto_refresh_point_lag_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.backupRetentionPeriodInDaysInput">backup_retention_period_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.byolComputeCountLimitInput">byol_compute_count_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.characterSetInput">character_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cloneTypeInput">clone_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.computeCountInput">compute_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.computeModelInput">compute_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cpuCoreCountInput">cpu_core_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.customerContactsInput">customer_contacts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.databaseEditionInput">database_edition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.databaseManagementStatusInput">database_management_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataSafeStatusInput">data_safe_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataStorageSizeInGbInput">data_storage_size_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataStorageSizeInTbsInput">data_storage_size_in_tbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbNameInput">db_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbToolsDetailsInput">db_tools_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbVersionInput">db_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbWorkloadInput">db_workload_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.disasterRecoveryTypeInput">disaster_recovery_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.encryptionKeyInput">encryption_key_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey">DatabaseAutonomousDatabaseEncryptionKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.inMemoryPercentageInput">in_memory_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAccessControlEnabledInput">is_access_control_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAutoScalingEnabledInput">is_auto_scaling_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAutoScalingForStorageEnabledInput">is_auto_scaling_for_storage_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDataGuardEnabledInput">is_data_guard_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDedicatedInput">is_dedicated_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDevTierInput">is_dev_tier_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isFreeTierInput">is_free_tier_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isLocalDataGuardEnabledInput">is_local_data_guard_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isMtlsConnectionRequiredInput">is_mtls_connection_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isPreviewVersionWithServiceTermsAcceptedInput">is_preview_version_with_service_terms_accepted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isRefreshableCloneInput">is_refreshable_clone_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isReplicateAutomaticBackupsInput">is_replicate_automatic_backups_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isShrinkOnlyInput">is_shrink_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.licenseModelInput">license_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimitInput">local_adg_auto_failover_max_data_loss_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.longTermBackupScheduleInput">long_term_backup_schedule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.maxCpuCoreCountInput">max_cpu_core_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.ncharacterSetInput">ncharacter_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.nsgIdsInput">nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.ocpuCountInput">ocpu_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.openModeInput">open_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.operationsInsightsStatusInput">operations_insights_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.permissionLevelInput">permission_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpointIpInput">private_endpoint_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpointLabelInput">private_endpoint_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.refreshableModeInput">refreshable_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.remoteDisasterRecoveryTypeInput">remote_disaster_recovery_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.resourcePoolLeaderIdInput">resource_pool_leader_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.resourcePoolSummaryInput">resource_pool_summary_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary">DatabaseAutonomousDatabaseResourcePoolSummary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.rotateKeyTriggerInput">rotate_key_trigger_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.scheduledOperationsInput">scheduled_operations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.secretVersionNumberInput">secret_version_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.securityAttributesInput">security_attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.shrinkAdbTriggerInput">shrink_adb_trigger_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.sourceIdInput">source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.standbyWhitelistedIpsInput">standby_whitelisted_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.switchoverToInput">switchover_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.switchoverToRemotePeerIdInput">switchover_to_remote_peer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfAutoRefreshStartInput">time_of_auto_refresh_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts">DatabaseAutonomousDatabaseTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timestampInput">timestamp_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.useLatestAvailableBackupTimeStampInput">use_latest_available_backup_time_stamp_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.vaultIdInput">vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.whitelistedIpsInput">whitelisted_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.adminPassword">admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.arePrimaryWhitelistedIpsUsed">are_primary_whitelisted_ips_used</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousContainerDatabaseId">autonomous_container_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousDatabaseBackupId">autonomous_database_backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousMaintenanceScheduleType">autonomous_maintenance_schedule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autoRefreshFrequencyInSeconds">auto_refresh_frequency_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autoRefreshPointLagInSeconds">auto_refresh_point_lag_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.backupRetentionPeriodInDays">backup_retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.byolComputeCountLimit">byol_compute_count_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.characterSet">character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cloneType">clone_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.computeModel">compute_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.databaseEdition">database_edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.databaseManagementStatus">database_management_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataSafeStatus">data_safe_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataStorageSizeInGb">data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataStorageSizeInTbs">data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbWorkload">db_workload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.disasterRecoveryType">disaster_recovery_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.inMemoryPercentage">in_memory_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAccessControlEnabled">is_access_control_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAutoScalingEnabled">is_auto_scaling_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAutoScalingForStorageEnabled">is_auto_scaling_for_storage_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDataGuardEnabled">is_data_guard_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDedicated">is_dedicated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDevTier">is_dev_tier</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isFreeTier">is_free_tier</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isLocalDataGuardEnabled">is_local_data_guard_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isMtlsConnectionRequired">is_mtls_connection_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isPreviewVersionWithServiceTermsAccepted">is_preview_version_with_service_terms_accepted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isRefreshableClone">is_refreshable_clone</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isReplicateAutomaticBackups">is_replicate_automatic_backups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isShrinkOnly">is_shrink_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit">local_adg_auto_failover_max_data_loss_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.maxCpuCoreCount">max_cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.ncharacterSet">ncharacter_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.ocpuCount">ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.openMode">open_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.operationsInsightsStatus">operations_insights_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.permissionLevel">permission_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpointIp">private_endpoint_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpointLabel">private_endpoint_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.refreshableMode">refreshable_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.remoteDisasterRecoveryType">remote_disaster_recovery_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.resourcePoolLeaderId">resource_pool_leader_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.rotateKeyTrigger">rotate_key_trigger</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.secretVersionNumber">secret_version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.securityAttributes">security_attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.shrinkAdbTrigger">shrink_adb_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.sourceId">source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.standbyWhitelistedIps">standby_whitelisted_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.switchoverTo">switchover_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.switchoverToRemotePeerId">switchover_to_remote_peer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfAutoRefreshStart">time_of_auto_refresh_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timestamp">timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.useLatestAvailableBackupTimeStamp">use_latest_available_backup_time_stamp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.whitelistedIps">whitelisted_ips</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `actual_used_data_storage_size_in_tbs`<sup>Required</sup> <a name="actual_used_data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.actualUsedDataStorageSizeInTbs"></a>

```python
actual_used_data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allocated_storage_size_in_tbs`<sup>Required</sup> <a name="allocated_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.allocatedStorageSizeInTbs"></a>

```python
allocated_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `apex_details`<sup>Required</sup> <a name="apex_details" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.apexDetails"></a>

```python
apex_details: DatabaseAutonomousDatabaseApexDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList">DatabaseAutonomousDatabaseApexDetailsList</a>

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `available_upgrade_versions`<sup>Required</sup> <a name="available_upgrade_versions" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.availableUpgradeVersions"></a>

```python
available_upgrade_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_config`<sup>Required</sup> <a name="backup_config" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.backupConfig"></a>

```python
backup_config: DatabaseAutonomousDatabaseBackupConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList">DatabaseAutonomousDatabaseBackupConfigList</a>

---

##### `cluster_placement_group_id`<sup>Required</sup> <a name="cluster_placement_group_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.clusterPlacementGroupId"></a>

```python
cluster_placement_group_id: str
```

- *Type:* str

---

##### `connection_strings`<sup>Required</sup> <a name="connection_strings" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.connectionStrings"></a>

```python
connection_strings: DatabaseAutonomousDatabaseConnectionStringsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList">DatabaseAutonomousDatabaseConnectionStringsList</a>

---

##### `connection_urls`<sup>Required</sup> <a name="connection_urls" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.connectionUrls"></a>

```python
connection_urls: DatabaseAutonomousDatabaseConnectionUrlsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList">DatabaseAutonomousDatabaseConnectionUrlsList</a>

---

##### `customer_contacts`<sup>Required</sup> <a name="customer_contacts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.customerContacts"></a>

```python
customer_contacts: DatabaseAutonomousDatabaseCustomerContactsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList">DatabaseAutonomousDatabaseCustomerContactsList</a>

---

##### `dataguard_region_type`<sup>Required</sup> <a name="dataguard_region_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataguardRegionType"></a>

```python
dataguard_region_type: str
```

- *Type:* str

---

##### `db_tools_details`<sup>Required</sup> <a name="db_tools_details" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbToolsDetails"></a>

```python
db_tools_details: DatabaseAutonomousDatabaseDbToolsDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList">DatabaseAutonomousDatabaseDbToolsDetailsList</a>

---

##### `disaster_recovery_region_type`<sup>Required</sup> <a name="disaster_recovery_region_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.disasterRecoveryRegionType"></a>

```python
disaster_recovery_region_type: str
```

- *Type:* str

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.encryptionKey"></a>

```python
encryption_key: DatabaseAutonomousDatabaseEncryptionKeyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference">DatabaseAutonomousDatabaseEncryptionKeyOutputReference</a>

---

##### `encryption_key_history_entry`<sup>Required</sup> <a name="encryption_key_history_entry" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.encryptionKeyHistoryEntry"></a>

```python
encryption_key_history_entry: DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList">DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList</a>

---

##### `failed_data_recovery_in_seconds`<sup>Required</sup> <a name="failed_data_recovery_in_seconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.failedDataRecoveryInSeconds"></a>

```python
failed_data_recovery_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `infrastructure_type`<sup>Required</sup> <a name="infrastructure_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.infrastructureType"></a>

```python
infrastructure_type: str
```

- *Type:* str

---

##### `in_memory_area_in_gbs`<sup>Required</sup> <a name="in_memory_area_in_gbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.inMemoryAreaInGbs"></a>

```python
in_memory_area_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_preview`<sup>Required</sup> <a name="is_preview" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isPreview"></a>

```python
is_preview: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_reconnect_clone_enabled`<sup>Required</sup> <a name="is_reconnect_clone_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isReconnectCloneEnabled"></a>

```python
is_reconnect_clone_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_remote_data_guard_enabled`<sup>Required</sup> <a name="is_remote_data_guard_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isRemoteDataGuardEnabled"></a>

```python
is_remote_data_guard_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key_history_entry`<sup>Required</sup> <a name="key_history_entry" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.keyHistoryEntry"></a>

```python
key_history_entry: DatabaseAutonomousDatabaseKeyHistoryEntryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList">DatabaseAutonomousDatabaseKeyHistoryEntryList</a>

---

##### `key_store_id`<sup>Required</sup> <a name="key_store_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.keyStoreId"></a>

```python
key_store_id: str
```

- *Type:* str

---

##### `key_store_wallet_name`<sup>Required</sup> <a name="key_store_wallet_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.keyStoreWalletName"></a>

```python
key_store_wallet_name: str
```

- *Type:* str

---

##### `kms_key_lifecycle_details`<sup>Required</sup> <a name="kms_key_lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.kmsKeyLifecycleDetails"></a>

```python
kms_key_lifecycle_details: str
```

- *Type:* str

---

##### `kms_key_version_id`<sup>Required</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.kmsKeyVersionId"></a>

```python
kms_key_version_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `local_disaster_recovery_type`<sup>Required</sup> <a name="local_disaster_recovery_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.localDisasterRecoveryType"></a>

```python
local_disaster_recovery_type: str
```

- *Type:* str

---

##### `local_standby_db`<sup>Required</sup> <a name="local_standby_db" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.localStandbyDb"></a>

```python
local_standby_db: DatabaseAutonomousDatabaseLocalStandbyDbList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList">DatabaseAutonomousDatabaseLocalStandbyDbList</a>

---

##### `long_term_backup_schedule`<sup>Required</sup> <a name="long_term_backup_schedule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.longTermBackupSchedule"></a>

```python
long_term_backup_schedule: DatabaseAutonomousDatabaseLongTermBackupScheduleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList">DatabaseAutonomousDatabaseLongTermBackupScheduleList</a>

---

##### `memory_per_oracle_compute_unit_in_gbs`<sup>Required</sup> <a name="memory_per_oracle_compute_unit_in_gbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.memoryPerOracleComputeUnitInGbs"></a>

```python
memory_per_oracle_compute_unit_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_services_architecture`<sup>Required</sup> <a name="net_services_architecture" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.netServicesArchitecture"></a>

```python
net_services_architecture: str
```

- *Type:* str

---

##### `next_long_term_backup_time_stamp`<sup>Required</sup> <a name="next_long_term_backup_time_stamp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.nextLongTermBackupTimeStamp"></a>

```python
next_long_term_backup_time_stamp: str
```

- *Type:* str

---

##### `peer_db_ids`<sup>Required</sup> <a name="peer_db_ids" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.peerDbIds"></a>

```python
peer_db_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_endpoint`<sup>Required</sup> <a name="private_endpoint" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpoint"></a>

```python
private_endpoint: str
```

- *Type:* str

---

##### `provisionable_cpus`<sup>Required</sup> <a name="provisionable_cpus" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.provisionableCpus"></a>

```python
provisionable_cpus: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `public_connection_urls`<sup>Required</sup> <a name="public_connection_urls" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.publicConnectionUrls"></a>

```python
public_connection_urls: DatabaseAutonomousDatabasePublicConnectionUrlsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList">DatabaseAutonomousDatabasePublicConnectionUrlsList</a>

---

##### `public_endpoint`<sup>Required</sup> <a name="public_endpoint" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.publicEndpoint"></a>

```python
public_endpoint: str
```

- *Type:* str

---

##### `refreshable_status`<sup>Required</sup> <a name="refreshable_status" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.refreshableStatus"></a>

```python
refreshable_status: str
```

- *Type:* str

---

##### `remote_disaster_recovery_configuration`<sup>Required</sup> <a name="remote_disaster_recovery_configuration" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.remoteDisasterRecoveryConfiguration"></a>

```python
remote_disaster_recovery_configuration: DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList">DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList</a>

---

##### `resource_pool_summary`<sup>Required</sup> <a name="resource_pool_summary" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.resourcePoolSummary"></a>

```python
resource_pool_summary: DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference">DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference</a>

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `scheduled_operations`<sup>Required</sup> <a name="scheduled_operations" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.scheduledOperations"></a>

```python
scheduled_operations: DatabaseAutonomousDatabaseScheduledOperationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList">DatabaseAutonomousDatabaseScheduledOperationsList</a>

---

##### `service_console_url`<sup>Required</sup> <a name="service_console_url" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.serviceConsoleUrl"></a>

```python
service_console_url: str
```

- *Type:* str

---

##### `standby_db`<sup>Required</sup> <a name="standby_db" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.standbyDb"></a>

```python
standby_db: DatabaseAutonomousDatabaseStandbyDbList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList">DatabaseAutonomousDatabaseStandbyDbList</a>

---

##### `supported_regions_to_clone_to`<sup>Required</sup> <a name="supported_regions_to_clone_to" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.supportedRegionsToCloneTo"></a>

```python
supported_regions_to_clone_to: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_data_guard_role_changed`<sup>Required</sup> <a name="time_data_guard_role_changed" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeDataGuardRoleChanged"></a>

```python
time_data_guard_role_changed: str
```

- *Type:* str

---

##### `time_deletion_of_free_autonomous_database`<sup>Required</sup> <a name="time_deletion_of_free_autonomous_database" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeDeletionOfFreeAutonomousDatabase"></a>

```python
time_deletion_of_free_autonomous_database: str
```

- *Type:* str

---

##### `time_disaster_recovery_role_changed`<sup>Required</sup> <a name="time_disaster_recovery_role_changed" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeDisasterRecoveryRoleChanged"></a>

```python
time_disaster_recovery_role_changed: str
```

- *Type:* str

---

##### `time_local_data_guard_enabled`<sup>Required</sup> <a name="time_local_data_guard_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeLocalDataGuardEnabled"></a>

```python
time_local_data_guard_enabled: str
```

- *Type:* str

---

##### `time_maintenance_begin`<sup>Required</sup> <a name="time_maintenance_begin" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeMaintenanceBegin"></a>

```python
time_maintenance_begin: str
```

- *Type:* str

---

##### `time_maintenance_end`<sup>Required</sup> <a name="time_maintenance_end" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeMaintenanceEnd"></a>

```python
time_maintenance_end: str
```

- *Type:* str

---

##### `time_of_joining_resource_pool`<sup>Required</sup> <a name="time_of_joining_resource_pool" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfJoiningResourcePool"></a>

```python
time_of_joining_resource_pool: str
```

- *Type:* str

---

##### `time_of_last_failover`<sup>Required</sup> <a name="time_of_last_failover" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfLastFailover"></a>

```python
time_of_last_failover: str
```

- *Type:* str

---

##### `time_of_last_refresh`<sup>Required</sup> <a name="time_of_last_refresh" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfLastRefresh"></a>

```python
time_of_last_refresh: str
```

- *Type:* str

---

##### `time_of_last_refresh_point`<sup>Required</sup> <a name="time_of_last_refresh_point" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfLastRefreshPoint"></a>

```python
time_of_last_refresh_point: str
```

- *Type:* str

---

##### `time_of_last_switchover`<sup>Required</sup> <a name="time_of_last_switchover" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfLastSwitchover"></a>

```python
time_of_last_switchover: str
```

- *Type:* str

---

##### `time_of_next_refresh`<sup>Required</sup> <a name="time_of_next_refresh" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfNextRefresh"></a>

```python
time_of_next_refresh: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeouts"></a>

```python
timeouts: DatabaseAutonomousDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference">DatabaseAutonomousDatabaseTimeoutsOutputReference</a>

---

##### `time_reclamation_of_free_autonomous_database`<sup>Required</sup> <a name="time_reclamation_of_free_autonomous_database" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeReclamationOfFreeAutonomousDatabase"></a>

```python
time_reclamation_of_free_autonomous_database: str
```

- *Type:* str

---

##### `time_undeleted`<sup>Required</sup> <a name="time_undeleted" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeUndeleted"></a>

```python
time_undeleted: str
```

- *Type:* str

---

##### `time_until_reconnect_clone_enabled`<sup>Required</sup> <a name="time_until_reconnect_clone_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeUntilReconnectCloneEnabled"></a>

```python
time_until_reconnect_clone_enabled: str
```

- *Type:* str

---

##### `total_backup_storage_size_in_gbs`<sup>Required</sup> <a name="total_backup_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.totalBackupStorageSizeInGbs"></a>

```python
total_backup_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `used_data_storage_size_in_gbs`<sup>Required</sup> <a name="used_data_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.usedDataStorageSizeInGbs"></a>

```python
used_data_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `used_data_storage_size_in_tbs`<sup>Required</sup> <a name="used_data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.usedDataStorageSizeInTbs"></a>

```python
used_data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `admin_password_input`<sup>Optional</sup> <a name="admin_password_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.adminPasswordInput"></a>

```python
admin_password_input: str
```

- *Type:* str

---

##### `are_primary_whitelisted_ips_used_input`<sup>Optional</sup> <a name="are_primary_whitelisted_ips_used_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.arePrimaryWhitelistedIpsUsedInput"></a>

```python
are_primary_whitelisted_ips_used_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `autonomous_container_database_id_input`<sup>Optional</sup> <a name="autonomous_container_database_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousContainerDatabaseIdInput"></a>

```python
autonomous_container_database_id_input: str
```

- *Type:* str

---

##### `autonomous_database_backup_id_input`<sup>Optional</sup> <a name="autonomous_database_backup_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousDatabaseBackupIdInput"></a>

```python
autonomous_database_backup_id_input: str
```

- *Type:* str

---

##### `autonomous_database_id_input`<sup>Optional</sup> <a name="autonomous_database_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousDatabaseIdInput"></a>

```python
autonomous_database_id_input: str
```

- *Type:* str

---

##### `autonomous_maintenance_schedule_type_input`<sup>Optional</sup> <a name="autonomous_maintenance_schedule_type_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousMaintenanceScheduleTypeInput"></a>

```python
autonomous_maintenance_schedule_type_input: str
```

- *Type:* str

---

##### `auto_refresh_frequency_in_seconds_input`<sup>Optional</sup> <a name="auto_refresh_frequency_in_seconds_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autoRefreshFrequencyInSecondsInput"></a>

```python
auto_refresh_frequency_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_refresh_point_lag_in_seconds_input`<sup>Optional</sup> <a name="auto_refresh_point_lag_in_seconds_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autoRefreshPointLagInSecondsInput"></a>

```python
auto_refresh_point_lag_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_retention_period_in_days_input`<sup>Optional</sup> <a name="backup_retention_period_in_days_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.backupRetentionPeriodInDaysInput"></a>

```python
backup_retention_period_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `byol_compute_count_limit_input`<sup>Optional</sup> <a name="byol_compute_count_limit_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.byolComputeCountLimitInput"></a>

```python
byol_compute_count_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `character_set_input`<sup>Optional</sup> <a name="character_set_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.characterSetInput"></a>

```python
character_set_input: str
```

- *Type:* str

---

##### `clone_type_input`<sup>Optional</sup> <a name="clone_type_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cloneTypeInput"></a>

```python
clone_type_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compute_count_input`<sup>Optional</sup> <a name="compute_count_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.computeCountInput"></a>

```python
compute_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_model_input`<sup>Optional</sup> <a name="compute_model_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.computeModelInput"></a>

```python
compute_model_input: str
```

- *Type:* str

---

##### `cpu_core_count_input`<sup>Optional</sup> <a name="cpu_core_count_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cpuCoreCountInput"></a>

```python
cpu_core_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `customer_contacts_input`<sup>Optional</sup> <a name="customer_contacts_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.customerContactsInput"></a>

```python
customer_contacts_input: typing.Union[IResolvable, typing.List[DatabaseAutonomousDatabaseCustomerContacts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>]]

---

##### `database_edition_input`<sup>Optional</sup> <a name="database_edition_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.databaseEditionInput"></a>

```python
database_edition_input: str
```

- *Type:* str

---

##### `database_management_status_input`<sup>Optional</sup> <a name="database_management_status_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.databaseManagementStatusInput"></a>

```python
database_management_status_input: str
```

- *Type:* str

---

##### `data_safe_status_input`<sup>Optional</sup> <a name="data_safe_status_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataSafeStatusInput"></a>

```python
data_safe_status_input: str
```

- *Type:* str

---

##### `data_storage_size_in_gb_input`<sup>Optional</sup> <a name="data_storage_size_in_gb_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataStorageSizeInGbInput"></a>

```python
data_storage_size_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_tbs_input`<sup>Optional</sup> <a name="data_storage_size_in_tbs_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataStorageSizeInTbsInput"></a>

```python
data_storage_size_in_tbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_name_input`<sup>Optional</sup> <a name="db_name_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbNameInput"></a>

```python
db_name_input: str
```

- *Type:* str

---

##### `db_tools_details_input`<sup>Optional</sup> <a name="db_tools_details_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbToolsDetailsInput"></a>

```python
db_tools_details_input: typing.Union[IResolvable, typing.List[DatabaseAutonomousDatabaseDbToolsDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>]]

---

##### `db_version_input`<sup>Optional</sup> <a name="db_version_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbVersionInput"></a>

```python
db_version_input: str
```

- *Type:* str

---

##### `db_workload_input`<sup>Optional</sup> <a name="db_workload_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbWorkloadInput"></a>

```python
db_workload_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `disaster_recovery_type_input`<sup>Optional</sup> <a name="disaster_recovery_type_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.disasterRecoveryTypeInput"></a>

```python
disaster_recovery_type_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `encryption_key_input`<sup>Optional</sup> <a name="encryption_key_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.encryptionKeyInput"></a>

```python
encryption_key_input: DatabaseAutonomousDatabaseEncryptionKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey">DatabaseAutonomousDatabaseEncryptionKey</a>

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `in_memory_percentage_input`<sup>Optional</sup> <a name="in_memory_percentage_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.inMemoryPercentageInput"></a>

```python
in_memory_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_access_control_enabled_input`<sup>Optional</sup> <a name="is_access_control_enabled_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAccessControlEnabledInput"></a>

```python
is_access_control_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_auto_scaling_enabled_input`<sup>Optional</sup> <a name="is_auto_scaling_enabled_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAutoScalingEnabledInput"></a>

```python
is_auto_scaling_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_auto_scaling_for_storage_enabled_input`<sup>Optional</sup> <a name="is_auto_scaling_for_storage_enabled_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAutoScalingForStorageEnabledInput"></a>

```python
is_auto_scaling_for_storage_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_data_guard_enabled_input`<sup>Optional</sup> <a name="is_data_guard_enabled_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDataGuardEnabledInput"></a>

```python
is_data_guard_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_dedicated_input`<sup>Optional</sup> <a name="is_dedicated_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDedicatedInput"></a>

```python
is_dedicated_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_dev_tier_input`<sup>Optional</sup> <a name="is_dev_tier_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDevTierInput"></a>

```python
is_dev_tier_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_free_tier_input`<sup>Optional</sup> <a name="is_free_tier_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isFreeTierInput"></a>

```python
is_free_tier_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_local_data_guard_enabled_input`<sup>Optional</sup> <a name="is_local_data_guard_enabled_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isLocalDataGuardEnabledInput"></a>

```python
is_local_data_guard_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_mtls_connection_required_input`<sup>Optional</sup> <a name="is_mtls_connection_required_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isMtlsConnectionRequiredInput"></a>

```python
is_mtls_connection_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_preview_version_with_service_terms_accepted_input`<sup>Optional</sup> <a name="is_preview_version_with_service_terms_accepted_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isPreviewVersionWithServiceTermsAcceptedInput"></a>

```python
is_preview_version_with_service_terms_accepted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_refreshable_clone_input`<sup>Optional</sup> <a name="is_refreshable_clone_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isRefreshableCloneInput"></a>

```python
is_refreshable_clone_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_replicate_automatic_backups_input`<sup>Optional</sup> <a name="is_replicate_automatic_backups_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isReplicateAutomaticBackupsInput"></a>

```python
is_replicate_automatic_backups_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_shrink_only_input`<sup>Optional</sup> <a name="is_shrink_only_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isShrinkOnlyInput"></a>

```python
is_shrink_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `license_model_input`<sup>Optional</sup> <a name="license_model_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.licenseModelInput"></a>

```python
license_model_input: str
```

- *Type:* str

---

##### `local_adg_auto_failover_max_data_loss_limit_input`<sup>Optional</sup> <a name="local_adg_auto_failover_max_data_loss_limit_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimitInput"></a>

```python
local_adg_auto_failover_max_data_loss_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_term_backup_schedule_input`<sup>Optional</sup> <a name="long_term_backup_schedule_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.longTermBackupScheduleInput"></a>

```python
long_term_backup_schedule_input: typing.Union[IResolvable, typing.List[DatabaseAutonomousDatabaseLongTermBackupSchedule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>]]

---

##### `max_cpu_core_count_input`<sup>Optional</sup> <a name="max_cpu_core_count_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.maxCpuCoreCountInput"></a>

```python
max_cpu_core_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ncharacter_set_input`<sup>Optional</sup> <a name="ncharacter_set_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.ncharacterSetInput"></a>

```python
ncharacter_set_input: str
```

- *Type:* str

---

##### `nsg_ids_input`<sup>Optional</sup> <a name="nsg_ids_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.nsgIdsInput"></a>

```python
nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ocpu_count_input`<sup>Optional</sup> <a name="ocpu_count_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.ocpuCountInput"></a>

```python
ocpu_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `open_mode_input`<sup>Optional</sup> <a name="open_mode_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.openModeInput"></a>

```python
open_mode_input: str
```

- *Type:* str

---

##### `operations_insights_status_input`<sup>Optional</sup> <a name="operations_insights_status_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.operationsInsightsStatusInput"></a>

```python
operations_insights_status_input: str
```

- *Type:* str

---

##### `permission_level_input`<sup>Optional</sup> <a name="permission_level_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.permissionLevelInput"></a>

```python
permission_level_input: str
```

- *Type:* str

---

##### `private_endpoint_ip_input`<sup>Optional</sup> <a name="private_endpoint_ip_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpointIpInput"></a>

```python
private_endpoint_ip_input: str
```

- *Type:* str

---

##### `private_endpoint_label_input`<sup>Optional</sup> <a name="private_endpoint_label_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpointLabelInput"></a>

```python
private_endpoint_label_input: str
```

- *Type:* str

---

##### `refreshable_mode_input`<sup>Optional</sup> <a name="refreshable_mode_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.refreshableModeInput"></a>

```python
refreshable_mode_input: str
```

- *Type:* str

---

##### `remote_disaster_recovery_type_input`<sup>Optional</sup> <a name="remote_disaster_recovery_type_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.remoteDisasterRecoveryTypeInput"></a>

```python
remote_disaster_recovery_type_input: str
```

- *Type:* str

---

##### `resource_pool_leader_id_input`<sup>Optional</sup> <a name="resource_pool_leader_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.resourcePoolLeaderIdInput"></a>

```python
resource_pool_leader_id_input: str
```

- *Type:* str

---

##### `resource_pool_summary_input`<sup>Optional</sup> <a name="resource_pool_summary_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.resourcePoolSummaryInput"></a>

```python
resource_pool_summary_input: DatabaseAutonomousDatabaseResourcePoolSummary
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary">DatabaseAutonomousDatabaseResourcePoolSummary</a>

---

##### `rotate_key_trigger_input`<sup>Optional</sup> <a name="rotate_key_trigger_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.rotateKeyTriggerInput"></a>

```python
rotate_key_trigger_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scheduled_operations_input`<sup>Optional</sup> <a name="scheduled_operations_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.scheduledOperationsInput"></a>

```python
scheduled_operations_input: typing.Union[IResolvable, typing.List[DatabaseAutonomousDatabaseScheduledOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>]]

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `secret_version_number_input`<sup>Optional</sup> <a name="secret_version_number_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.secretVersionNumberInput"></a>

```python
secret_version_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_attributes_input`<sup>Optional</sup> <a name="security_attributes_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.securityAttributesInput"></a>

```python
security_attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `shrink_adb_trigger_input`<sup>Optional</sup> <a name="shrink_adb_trigger_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.shrinkAdbTriggerInput"></a>

```python
shrink_adb_trigger_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_id_input`<sup>Optional</sup> <a name="source_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.sourceIdInput"></a>

```python
source_id_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `standby_whitelisted_ips_input`<sup>Optional</sup> <a name="standby_whitelisted_ips_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.standbyWhitelistedIpsInput"></a>

```python
standby_whitelisted_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `switchover_to_input`<sup>Optional</sup> <a name="switchover_to_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.switchoverToInput"></a>

```python
switchover_to_input: str
```

- *Type:* str

---

##### `switchover_to_remote_peer_id_input`<sup>Optional</sup> <a name="switchover_to_remote_peer_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.switchoverToRemotePeerIdInput"></a>

```python
switchover_to_remote_peer_id_input: str
```

- *Type:* str

---

##### `time_of_auto_refresh_start_input`<sup>Optional</sup> <a name="time_of_auto_refresh_start_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfAutoRefreshStartInput"></a>

```python
time_of_auto_refresh_start_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseAutonomousDatabaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts">DatabaseAutonomousDatabaseTimeouts</a>]

---

##### `timestamp_input`<sup>Optional</sup> <a name="timestamp_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timestampInput"></a>

```python
timestamp_input: str
```

- *Type:* str

---

##### `use_latest_available_backup_time_stamp_input`<sup>Optional</sup> <a name="use_latest_available_backup_time_stamp_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.useLatestAvailableBackupTimeStampInput"></a>

```python
use_latest_available_backup_time_stamp_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vault_id_input`<sup>Optional</sup> <a name="vault_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.vaultIdInput"></a>

```python
vault_id_input: str
```

- *Type:* str

---

##### `whitelisted_ips_input`<sup>Optional</sup> <a name="whitelisted_ips_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.whitelistedIpsInput"></a>

```python
whitelisted_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

---

##### `are_primary_whitelisted_ips_used`<sup>Required</sup> <a name="are_primary_whitelisted_ips_used" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.arePrimaryWhitelistedIpsUsed"></a>

```python
are_primary_whitelisted_ips_used: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `autonomous_container_database_id`<sup>Required</sup> <a name="autonomous_container_database_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousContainerDatabaseId"></a>

```python
autonomous_container_database_id: str
```

- *Type:* str

---

##### `autonomous_database_backup_id`<sup>Required</sup> <a name="autonomous_database_backup_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousDatabaseBackupId"></a>

```python
autonomous_database_backup_id: str
```

- *Type:* str

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousDatabaseId"></a>

```python
autonomous_database_id: str
```

- *Type:* str

---

##### `autonomous_maintenance_schedule_type`<sup>Required</sup> <a name="autonomous_maintenance_schedule_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousMaintenanceScheduleType"></a>

```python
autonomous_maintenance_schedule_type: str
```

- *Type:* str

---

##### `auto_refresh_frequency_in_seconds`<sup>Required</sup> <a name="auto_refresh_frequency_in_seconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autoRefreshFrequencyInSeconds"></a>

```python
auto_refresh_frequency_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_refresh_point_lag_in_seconds`<sup>Required</sup> <a name="auto_refresh_point_lag_in_seconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autoRefreshPointLagInSeconds"></a>

```python
auto_refresh_point_lag_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_retention_period_in_days`<sup>Required</sup> <a name="backup_retention_period_in_days" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.backupRetentionPeriodInDays"></a>

```python
backup_retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `byol_compute_count_limit`<sup>Required</sup> <a name="byol_compute_count_limit" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.byolComputeCountLimit"></a>

```python
byol_compute_count_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `character_set`<sup>Required</sup> <a name="character_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

---

##### `clone_type`<sup>Required</sup> <a name="clone_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cloneType"></a>

```python
clone_type: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compute_count`<sup>Required</sup> <a name="compute_count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_model`<sup>Required</sup> <a name="compute_model" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.computeModel"></a>

```python
compute_model: str
```

- *Type:* str

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database_edition`<sup>Required</sup> <a name="database_edition" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.databaseEdition"></a>

```python
database_edition: str
```

- *Type:* str

---

##### `database_management_status`<sup>Required</sup> <a name="database_management_status" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.databaseManagementStatus"></a>

```python
database_management_status: str
```

- *Type:* str

---

##### `data_safe_status`<sup>Required</sup> <a name="data_safe_status" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataSafeStatus"></a>

```python
data_safe_status: str
```

- *Type:* str

---

##### `data_storage_size_in_gb`<sup>Required</sup> <a name="data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataStorageSizeInGb"></a>

```python
data_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_tbs`<sup>Required</sup> <a name="data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataStorageSizeInTbs"></a>

```python
data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `db_workload`<sup>Required</sup> <a name="db_workload" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbWorkload"></a>

```python
db_workload: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `disaster_recovery_type`<sup>Required</sup> <a name="disaster_recovery_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.disasterRecoveryType"></a>

```python
disaster_recovery_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `in_memory_percentage`<sup>Required</sup> <a name="in_memory_percentage" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.inMemoryPercentage"></a>

```python
in_memory_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_access_control_enabled`<sup>Required</sup> <a name="is_access_control_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAccessControlEnabled"></a>

```python
is_access_control_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_auto_scaling_enabled`<sup>Required</sup> <a name="is_auto_scaling_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAutoScalingEnabled"></a>

```python
is_auto_scaling_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_auto_scaling_for_storage_enabled`<sup>Required</sup> <a name="is_auto_scaling_for_storage_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAutoScalingForStorageEnabled"></a>

```python
is_auto_scaling_for_storage_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_data_guard_enabled`<sup>Required</sup> <a name="is_data_guard_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDataGuardEnabled"></a>

```python
is_data_guard_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_dedicated`<sup>Required</sup> <a name="is_dedicated" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDedicated"></a>

```python
is_dedicated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_dev_tier`<sup>Required</sup> <a name="is_dev_tier" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDevTier"></a>

```python
is_dev_tier: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_free_tier`<sup>Required</sup> <a name="is_free_tier" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isFreeTier"></a>

```python
is_free_tier: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_local_data_guard_enabled`<sup>Required</sup> <a name="is_local_data_guard_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isLocalDataGuardEnabled"></a>

```python
is_local_data_guard_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_mtls_connection_required`<sup>Required</sup> <a name="is_mtls_connection_required" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isMtlsConnectionRequired"></a>

```python
is_mtls_connection_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_preview_version_with_service_terms_accepted`<sup>Required</sup> <a name="is_preview_version_with_service_terms_accepted" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isPreviewVersionWithServiceTermsAccepted"></a>

```python
is_preview_version_with_service_terms_accepted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_refreshable_clone`<sup>Required</sup> <a name="is_refreshable_clone" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isRefreshableClone"></a>

```python
is_refreshable_clone: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_replicate_automatic_backups`<sup>Required</sup> <a name="is_replicate_automatic_backups" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isReplicateAutomaticBackups"></a>

```python
is_replicate_automatic_backups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_shrink_only`<sup>Required</sup> <a name="is_shrink_only" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isShrinkOnly"></a>

```python
is_shrink_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `local_adg_auto_failover_max_data_loss_limit`<sup>Required</sup> <a name="local_adg_auto_failover_max_data_loss_limit" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```python
local_adg_auto_failover_max_data_loss_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_cpu_core_count`<sup>Required</sup> <a name="max_cpu_core_count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.maxCpuCoreCount"></a>

```python
max_cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ncharacter_set`<sup>Required</sup> <a name="ncharacter_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.ncharacterSet"></a>

```python
ncharacter_set: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ocpu_count`<sup>Required</sup> <a name="ocpu_count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.ocpuCount"></a>

```python
ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `open_mode`<sup>Required</sup> <a name="open_mode" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.openMode"></a>

```python
open_mode: str
```

- *Type:* str

---

##### `operations_insights_status`<sup>Required</sup> <a name="operations_insights_status" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.operationsInsightsStatus"></a>

```python
operations_insights_status: str
```

- *Type:* str

---

##### `permission_level`<sup>Required</sup> <a name="permission_level" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.permissionLevel"></a>

```python
permission_level: str
```

- *Type:* str

---

##### `private_endpoint_ip`<sup>Required</sup> <a name="private_endpoint_ip" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpointIp"></a>

```python
private_endpoint_ip: str
```

- *Type:* str

---

##### `private_endpoint_label`<sup>Required</sup> <a name="private_endpoint_label" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpointLabel"></a>

```python
private_endpoint_label: str
```

- *Type:* str

---

##### `refreshable_mode`<sup>Required</sup> <a name="refreshable_mode" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.refreshableMode"></a>

```python
refreshable_mode: str
```

- *Type:* str

---

##### `remote_disaster_recovery_type`<sup>Required</sup> <a name="remote_disaster_recovery_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.remoteDisasterRecoveryType"></a>

```python
remote_disaster_recovery_type: str
```

- *Type:* str

---

##### `resource_pool_leader_id`<sup>Required</sup> <a name="resource_pool_leader_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.resourcePoolLeaderId"></a>

```python
resource_pool_leader_id: str
```

- *Type:* str

---

##### `rotate_key_trigger`<sup>Required</sup> <a name="rotate_key_trigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.rotateKeyTrigger"></a>

```python
rotate_key_trigger: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `secret_version_number`<sup>Required</sup> <a name="secret_version_number" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.secretVersionNumber"></a>

```python
secret_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_attributes`<sup>Required</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.securityAttributes"></a>

```python
security_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `shrink_adb_trigger`<sup>Required</sup> <a name="shrink_adb_trigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.shrinkAdbTrigger"></a>

```python
shrink_adb_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.sourceId"></a>

```python
source_id: str
```

- *Type:* str

---

##### `standby_whitelisted_ips`<sup>Required</sup> <a name="standby_whitelisted_ips" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.standbyWhitelistedIps"></a>

```python
standby_whitelisted_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `switchover_to`<sup>Required</sup> <a name="switchover_to" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.switchoverTo"></a>

```python
switchover_to: str
```

- *Type:* str

---

##### `switchover_to_remote_peer_id`<sup>Required</sup> <a name="switchover_to_remote_peer_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.switchoverToRemotePeerId"></a>

```python
switchover_to_remote_peer_id: str
```

- *Type:* str

---

##### `time_of_auto_refresh_start`<sup>Required</sup> <a name="time_of_auto_refresh_start" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfAutoRefreshStart"></a>

```python
time_of_auto_refresh_start: str
```

- *Type:* str

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

---

##### `use_latest_available_backup_time_stamp`<sup>Required</sup> <a name="use_latest_available_backup_time_stamp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.useLatestAvailableBackupTimeStamp"></a>

```python
use_latest_available_backup_time_stamp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `whitelisted_ips`<sup>Required</sup> <a name="whitelisted_ips" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.whitelistedIps"></a>

```python
whitelisted_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousDatabaseApexDetails <a name="DatabaseAutonomousDatabaseApexDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetails()
```


### DatabaseAutonomousDatabaseBackupConfig <a name="DatabaseAutonomousDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfig()
```


### DatabaseAutonomousDatabaseConfig <a name="DatabaseAutonomousDatabaseConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  db_name: str,
  admin_password: str = None,
  are_primary_whitelisted_ips_used: typing.Union[bool, IResolvable] = None,
  autonomous_container_database_id: str = None,
  autonomous_database_backup_id: str = None,
  autonomous_database_id: str = None,
  autonomous_maintenance_schedule_type: str = None,
  auto_refresh_frequency_in_seconds: typing.Union[int, float] = None,
  auto_refresh_point_lag_in_seconds: typing.Union[int, float] = None,
  backup_retention_period_in_days: typing.Union[int, float] = None,
  byol_compute_count_limit: typing.Union[int, float] = None,
  character_set: str = None,
  clone_type: str = None,
  compute_count: typing.Union[int, float] = None,
  compute_model: str = None,
  cpu_core_count: typing.Union[int, float] = None,
  customer_contacts: typing.Union[IResolvable, typing.List[DatabaseAutonomousDatabaseCustomerContacts]] = None,
  database_edition: str = None,
  database_management_status: str = None,
  data_safe_status: str = None,
  data_storage_size_in_gb: typing.Union[int, float] = None,
  data_storage_size_in_tbs: typing.Union[int, float] = None,
  db_tools_details: typing.Union[IResolvable, typing.List[DatabaseAutonomousDatabaseDbToolsDetails]] = None,
  db_version: str = None,
  db_workload: str = None,
  defined_tags: typing.Mapping[str] = None,
  disaster_recovery_type: str = None,
  display_name: str = None,
  encryption_key: DatabaseAutonomousDatabaseEncryptionKey = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  in_memory_percentage: typing.Union[int, float] = None,
  is_access_control_enabled: typing.Union[bool, IResolvable] = None,
  is_auto_scaling_enabled: typing.Union[bool, IResolvable] = None,
  is_auto_scaling_for_storage_enabled: typing.Union[bool, IResolvable] = None,
  is_data_guard_enabled: typing.Union[bool, IResolvable] = None,
  is_dedicated: typing.Union[bool, IResolvable] = None,
  is_dev_tier: typing.Union[bool, IResolvable] = None,
  is_free_tier: typing.Union[bool, IResolvable] = None,
  is_local_data_guard_enabled: typing.Union[bool, IResolvable] = None,
  is_mtls_connection_required: typing.Union[bool, IResolvable] = None,
  is_preview_version_with_service_terms_accepted: typing.Union[bool, IResolvable] = None,
  is_refreshable_clone: typing.Union[bool, IResolvable] = None,
  is_replicate_automatic_backups: typing.Union[bool, IResolvable] = None,
  is_shrink_only: typing.Union[bool, IResolvable] = None,
  kms_key_id: str = None,
  license_model: str = None,
  local_adg_auto_failover_max_data_loss_limit: typing.Union[int, float] = None,
  long_term_backup_schedule: typing.Union[IResolvable, typing.List[DatabaseAutonomousDatabaseLongTermBackupSchedule]] = None,
  max_cpu_core_count: typing.Union[int, float] = None,
  ncharacter_set: str = None,
  nsg_ids: typing.List[str] = None,
  ocpu_count: typing.Union[int, float] = None,
  open_mode: str = None,
  operations_insights_status: str = None,
  permission_level: str = None,
  private_endpoint_ip: str = None,
  private_endpoint_label: str = None,
  refreshable_mode: str = None,
  remote_disaster_recovery_type: str = None,
  resource_pool_leader_id: str = None,
  resource_pool_summary: DatabaseAutonomousDatabaseResourcePoolSummary = None,
  rotate_key_trigger: typing.Union[bool, IResolvable] = None,
  scheduled_operations: typing.Union[IResolvable, typing.List[DatabaseAutonomousDatabaseScheduledOperations]] = None,
  secret_id: str = None,
  secret_version_number: typing.Union[int, float] = None,
  security_attributes: typing.Mapping[str] = None,
  shrink_adb_trigger: typing.Union[int, float] = None,
  source: str = None,
  source_id: str = None,
  standby_whitelisted_ips: typing.List[str] = None,
  state: str = None,
  subnet_id: str = None,
  subscription_id: str = None,
  switchover_to: str = None,
  switchover_to_remote_peer_id: str = None,
  time_of_auto_refresh_start: str = None,
  timeouts: DatabaseAutonomousDatabaseTimeouts = None,
  timestamp: str = None,
  use_latest_available_backup_time_stamp: typing.Union[bool, IResolvable] = None,
  vault_id: str = None,
  whitelisted_ips: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compartment_id DatabaseAutonomousDatabase#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dbName">db_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_name DatabaseAutonomousDatabase#db_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.adminPassword">admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#admin_password DatabaseAutonomousDatabase#admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.arePrimaryWhitelistedIpsUsed">are_primary_whitelisted_ips_used</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#are_primary_whitelisted_ips_used DatabaseAutonomousDatabase#are_primary_whitelisted_ips_used}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autonomousContainerDatabaseId">autonomous_container_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_container_database_id DatabaseAutonomousDatabase#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autonomousDatabaseBackupId">autonomous_database_backup_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_database_backup_id DatabaseAutonomousDatabase#autonomous_database_backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_database_id DatabaseAutonomousDatabase#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autonomousMaintenanceScheduleType">autonomous_maintenance_schedule_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_maintenance_schedule_type DatabaseAutonomousDatabase#autonomous_maintenance_schedule_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autoRefreshFrequencyInSeconds">auto_refresh_frequency_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#auto_refresh_frequency_in_seconds DatabaseAutonomousDatabase#auto_refresh_frequency_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autoRefreshPointLagInSeconds">auto_refresh_point_lag_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#auto_refresh_point_lag_in_seconds DatabaseAutonomousDatabase#auto_refresh_point_lag_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.backupRetentionPeriodInDays">backup_retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#backup_retention_period_in_days DatabaseAutonomousDatabase#backup_retention_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.byolComputeCountLimit">byol_compute_count_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#byol_compute_count_limit DatabaseAutonomousDatabase#byol_compute_count_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.characterSet">character_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#character_set DatabaseAutonomousDatabase#character_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.cloneType">clone_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#clone_type DatabaseAutonomousDatabase#clone_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compute_count DatabaseAutonomousDatabase#compute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.computeModel">compute_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compute_model DatabaseAutonomousDatabase#compute_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#cpu_core_count DatabaseAutonomousDatabase#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.customerContacts">customer_contacts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>]]</code> | customer_contacts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.databaseEdition">database_edition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#database_edition DatabaseAutonomousDatabase#database_edition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.databaseManagementStatus">database_management_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#database_management_status DatabaseAutonomousDatabase#database_management_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dataSafeStatus">data_safe_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_safe_status DatabaseAutonomousDatabase#data_safe_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dataStorageSizeInGb">data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_storage_size_in_gb DatabaseAutonomousDatabase#data_storage_size_in_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dataStorageSizeInTbs">data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_storage_size_in_tbs DatabaseAutonomousDatabase#data_storage_size_in_tbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dbToolsDetails">db_tools_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>]]</code> | db_tools_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dbVersion">db_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_version DatabaseAutonomousDatabase#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dbWorkload">db_workload</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_workload DatabaseAutonomousDatabase#db_workload}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#defined_tags DatabaseAutonomousDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.disasterRecoveryType">disaster_recovery_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#disaster_recovery_type DatabaseAutonomousDatabase#disaster_recovery_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#display_name DatabaseAutonomousDatabase#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.encryptionKey">encryption_key</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey">DatabaseAutonomousDatabaseEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#freeform_tags DatabaseAutonomousDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#id DatabaseAutonomousDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.inMemoryPercentage">in_memory_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#in_memory_percentage DatabaseAutonomousDatabase#in_memory_percentage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isAccessControlEnabled">is_access_control_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_access_control_enabled DatabaseAutonomousDatabase#is_access_control_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isAutoScalingEnabled">is_auto_scaling_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_auto_scaling_enabled DatabaseAutonomousDatabase#is_auto_scaling_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isAutoScalingForStorageEnabled">is_auto_scaling_for_storage_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_auto_scaling_for_storage_enabled DatabaseAutonomousDatabase#is_auto_scaling_for_storage_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isDataGuardEnabled">is_data_guard_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_data_guard_enabled DatabaseAutonomousDatabase#is_data_guard_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isDedicated">is_dedicated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_dedicated DatabaseAutonomousDatabase#is_dedicated}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isDevTier">is_dev_tier</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_dev_tier DatabaseAutonomousDatabase#is_dev_tier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isFreeTier">is_free_tier</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_free_tier DatabaseAutonomousDatabase#is_free_tier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isLocalDataGuardEnabled">is_local_data_guard_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_local_data_guard_enabled DatabaseAutonomousDatabase#is_local_data_guard_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isMtlsConnectionRequired">is_mtls_connection_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_mtls_connection_required DatabaseAutonomousDatabase#is_mtls_connection_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isPreviewVersionWithServiceTermsAccepted">is_preview_version_with_service_terms_accepted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_preview_version_with_service_terms_accepted DatabaseAutonomousDatabase#is_preview_version_with_service_terms_accepted}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isRefreshableClone">is_refreshable_clone</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_refreshable_clone DatabaseAutonomousDatabase#is_refreshable_clone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isReplicateAutomaticBackups">is_replicate_automatic_backups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_replicate_automatic_backups DatabaseAutonomousDatabase#is_replicate_automatic_backups}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isShrinkOnly">is_shrink_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_shrink_only DatabaseAutonomousDatabase#is_shrink_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#kms_key_id DatabaseAutonomousDatabase#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#license_model DatabaseAutonomousDatabase#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.localAdgAutoFailoverMaxDataLossLimit">local_adg_auto_failover_max_data_loss_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#local_adg_auto_failover_max_data_loss_limit DatabaseAutonomousDatabase#local_adg_auto_failover_max_data_loss_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.longTermBackupSchedule">long_term_backup_schedule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>]]</code> | long_term_backup_schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.maxCpuCoreCount">max_cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#max_cpu_core_count DatabaseAutonomousDatabase#max_cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.ncharacterSet">ncharacter_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#ncharacter_set DatabaseAutonomousDatabase#ncharacter_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#nsg_ids DatabaseAutonomousDatabase#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.ocpuCount">ocpu_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#ocpu_count DatabaseAutonomousDatabase#ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.openMode">open_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#open_mode DatabaseAutonomousDatabase#open_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.operationsInsightsStatus">operations_insights_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#operations_insights_status DatabaseAutonomousDatabase#operations_insights_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.permissionLevel">permission_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#permission_level DatabaseAutonomousDatabase#permission_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.privateEndpointIp">private_endpoint_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#private_endpoint_ip DatabaseAutonomousDatabase#private_endpoint_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.privateEndpointLabel">private_endpoint_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#private_endpoint_label DatabaseAutonomousDatabase#private_endpoint_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.refreshableMode">refreshable_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#refreshable_mode DatabaseAutonomousDatabase#refreshable_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.remoteDisasterRecoveryType">remote_disaster_recovery_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#remote_disaster_recovery_type DatabaseAutonomousDatabase#remote_disaster_recovery_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.resourcePoolLeaderId">resource_pool_leader_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#resource_pool_leader_id DatabaseAutonomousDatabase#resource_pool_leader_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.resourcePoolSummary">resource_pool_summary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary">DatabaseAutonomousDatabaseResourcePoolSummary</a></code> | resource_pool_summary block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.rotateKeyTrigger">rotate_key_trigger</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#rotate_key_trigger DatabaseAutonomousDatabase#rotate_key_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.scheduledOperations">scheduled_operations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>]]</code> | scheduled_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.secretId">secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#secret_id DatabaseAutonomousDatabase#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.secretVersionNumber">secret_version_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#secret_version_number DatabaseAutonomousDatabase#secret_version_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.securityAttributes">security_attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#security_attributes DatabaseAutonomousDatabase#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.shrinkAdbTrigger">shrink_adb_trigger</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#shrink_adb_trigger DatabaseAutonomousDatabase#shrink_adb_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#source DatabaseAutonomousDatabase#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.sourceId">source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#source_id DatabaseAutonomousDatabase#source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.standbyWhitelistedIps">standby_whitelisted_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#standby_whitelisted_ips DatabaseAutonomousDatabase#standby_whitelisted_ips}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#state DatabaseAutonomousDatabase#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#subnet_id DatabaseAutonomousDatabase#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#subscription_id DatabaseAutonomousDatabase#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.switchoverTo">switchover_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#switchover_to DatabaseAutonomousDatabase#switchover_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.switchoverToRemotePeerId">switchover_to_remote_peer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#switchover_to_remote_peer_id DatabaseAutonomousDatabase#switchover_to_remote_peer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.timeOfAutoRefreshStart">time_of_auto_refresh_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#time_of_auto_refresh_start DatabaseAutonomousDatabase#time_of_auto_refresh_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts">DatabaseAutonomousDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.timestamp">timestamp</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#timestamp DatabaseAutonomousDatabase#timestamp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.useLatestAvailableBackupTimeStamp">use_latest_available_backup_time_stamp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#use_latest_available_backup_time_stamp DatabaseAutonomousDatabase#use_latest_available_backup_time_stamp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.vaultId">vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#vault_id DatabaseAutonomousDatabase#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.whitelistedIps">whitelisted_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#whitelisted_ips DatabaseAutonomousDatabase#whitelisted_ips}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compartment_id DatabaseAutonomousDatabase#compartment_id}.

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_name DatabaseAutonomousDatabase#db_name}.

---

##### `admin_password`<sup>Optional</sup> <a name="admin_password" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#admin_password DatabaseAutonomousDatabase#admin_password}.

---

##### `are_primary_whitelisted_ips_used`<sup>Optional</sup> <a name="are_primary_whitelisted_ips_used" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.arePrimaryWhitelistedIpsUsed"></a>

```python
are_primary_whitelisted_ips_used: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#are_primary_whitelisted_ips_used DatabaseAutonomousDatabase#are_primary_whitelisted_ips_used}.

---

##### `autonomous_container_database_id`<sup>Optional</sup> <a name="autonomous_container_database_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autonomousContainerDatabaseId"></a>

```python
autonomous_container_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_container_database_id DatabaseAutonomousDatabase#autonomous_container_database_id}.

---

##### `autonomous_database_backup_id`<sup>Optional</sup> <a name="autonomous_database_backup_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autonomousDatabaseBackupId"></a>

```python
autonomous_database_backup_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_database_backup_id DatabaseAutonomousDatabase#autonomous_database_backup_id}.

---

##### `autonomous_database_id`<sup>Optional</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autonomousDatabaseId"></a>

```python
autonomous_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_database_id DatabaseAutonomousDatabase#autonomous_database_id}.

---

##### `autonomous_maintenance_schedule_type`<sup>Optional</sup> <a name="autonomous_maintenance_schedule_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autonomousMaintenanceScheduleType"></a>

```python
autonomous_maintenance_schedule_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_maintenance_schedule_type DatabaseAutonomousDatabase#autonomous_maintenance_schedule_type}.

---

##### `auto_refresh_frequency_in_seconds`<sup>Optional</sup> <a name="auto_refresh_frequency_in_seconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autoRefreshFrequencyInSeconds"></a>

```python
auto_refresh_frequency_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#auto_refresh_frequency_in_seconds DatabaseAutonomousDatabase#auto_refresh_frequency_in_seconds}.

---

##### `auto_refresh_point_lag_in_seconds`<sup>Optional</sup> <a name="auto_refresh_point_lag_in_seconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autoRefreshPointLagInSeconds"></a>

```python
auto_refresh_point_lag_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#auto_refresh_point_lag_in_seconds DatabaseAutonomousDatabase#auto_refresh_point_lag_in_seconds}.

---

##### `backup_retention_period_in_days`<sup>Optional</sup> <a name="backup_retention_period_in_days" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.backupRetentionPeriodInDays"></a>

```python
backup_retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#backup_retention_period_in_days DatabaseAutonomousDatabase#backup_retention_period_in_days}.

---

##### `byol_compute_count_limit`<sup>Optional</sup> <a name="byol_compute_count_limit" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.byolComputeCountLimit"></a>

```python
byol_compute_count_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#byol_compute_count_limit DatabaseAutonomousDatabase#byol_compute_count_limit}.

---

##### `character_set`<sup>Optional</sup> <a name="character_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#character_set DatabaseAutonomousDatabase#character_set}.

---

##### `clone_type`<sup>Optional</sup> <a name="clone_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.cloneType"></a>

```python
clone_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#clone_type DatabaseAutonomousDatabase#clone_type}.

---

##### `compute_count`<sup>Optional</sup> <a name="compute_count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compute_count DatabaseAutonomousDatabase#compute_count}.

---

##### `compute_model`<sup>Optional</sup> <a name="compute_model" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.computeModel"></a>

```python
compute_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compute_model DatabaseAutonomousDatabase#compute_model}.

---

##### `cpu_core_count`<sup>Optional</sup> <a name="cpu_core_count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#cpu_core_count DatabaseAutonomousDatabase#cpu_core_count}.

---

##### `customer_contacts`<sup>Optional</sup> <a name="customer_contacts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.customerContacts"></a>

```python
customer_contacts: typing.Union[IResolvable, typing.List[DatabaseAutonomousDatabaseCustomerContacts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>]]

customer_contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#customer_contacts DatabaseAutonomousDatabase#customer_contacts}

---

##### `database_edition`<sup>Optional</sup> <a name="database_edition" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.databaseEdition"></a>

```python
database_edition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#database_edition DatabaseAutonomousDatabase#database_edition}.

---

##### `database_management_status`<sup>Optional</sup> <a name="database_management_status" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.databaseManagementStatus"></a>

```python
database_management_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#database_management_status DatabaseAutonomousDatabase#database_management_status}.

---

##### `data_safe_status`<sup>Optional</sup> <a name="data_safe_status" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dataSafeStatus"></a>

```python
data_safe_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_safe_status DatabaseAutonomousDatabase#data_safe_status}.

---

##### `data_storage_size_in_gb`<sup>Optional</sup> <a name="data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dataStorageSizeInGb"></a>

```python
data_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_storage_size_in_gb DatabaseAutonomousDatabase#data_storage_size_in_gb}.

---

##### `data_storage_size_in_tbs`<sup>Optional</sup> <a name="data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dataStorageSizeInTbs"></a>

```python
data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_storage_size_in_tbs DatabaseAutonomousDatabase#data_storage_size_in_tbs}.

---

##### `db_tools_details`<sup>Optional</sup> <a name="db_tools_details" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dbToolsDetails"></a>

```python
db_tools_details: typing.Union[IResolvable, typing.List[DatabaseAutonomousDatabaseDbToolsDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>]]

db_tools_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_tools_details DatabaseAutonomousDatabase#db_tools_details}

---

##### `db_version`<sup>Optional</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_version DatabaseAutonomousDatabase#db_version}.

---

##### `db_workload`<sup>Optional</sup> <a name="db_workload" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dbWorkload"></a>

```python
db_workload: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_workload DatabaseAutonomousDatabase#db_workload}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#defined_tags DatabaseAutonomousDatabase#defined_tags}.

---

##### `disaster_recovery_type`<sup>Optional</sup> <a name="disaster_recovery_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.disasterRecoveryType"></a>

```python
disaster_recovery_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#disaster_recovery_type DatabaseAutonomousDatabase#disaster_recovery_type}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#display_name DatabaseAutonomousDatabase#display_name}.

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.encryptionKey"></a>

```python
encryption_key: DatabaseAutonomousDatabaseEncryptionKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey">DatabaseAutonomousDatabaseEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#encryption_key DatabaseAutonomousDatabase#encryption_key}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#freeform_tags DatabaseAutonomousDatabase#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#id DatabaseAutonomousDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in_memory_percentage`<sup>Optional</sup> <a name="in_memory_percentage" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.inMemoryPercentage"></a>

```python
in_memory_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#in_memory_percentage DatabaseAutonomousDatabase#in_memory_percentage}.

---

##### `is_access_control_enabled`<sup>Optional</sup> <a name="is_access_control_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isAccessControlEnabled"></a>

```python
is_access_control_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_access_control_enabled DatabaseAutonomousDatabase#is_access_control_enabled}.

---

##### `is_auto_scaling_enabled`<sup>Optional</sup> <a name="is_auto_scaling_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isAutoScalingEnabled"></a>

```python
is_auto_scaling_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_auto_scaling_enabled DatabaseAutonomousDatabase#is_auto_scaling_enabled}.

---

##### `is_auto_scaling_for_storage_enabled`<sup>Optional</sup> <a name="is_auto_scaling_for_storage_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isAutoScalingForStorageEnabled"></a>

```python
is_auto_scaling_for_storage_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_auto_scaling_for_storage_enabled DatabaseAutonomousDatabase#is_auto_scaling_for_storage_enabled}.

---

##### `is_data_guard_enabled`<sup>Optional</sup> <a name="is_data_guard_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isDataGuardEnabled"></a>

```python
is_data_guard_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_data_guard_enabled DatabaseAutonomousDatabase#is_data_guard_enabled}.

---

##### `is_dedicated`<sup>Optional</sup> <a name="is_dedicated" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isDedicated"></a>

```python
is_dedicated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_dedicated DatabaseAutonomousDatabase#is_dedicated}.

---

##### `is_dev_tier`<sup>Optional</sup> <a name="is_dev_tier" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isDevTier"></a>

```python
is_dev_tier: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_dev_tier DatabaseAutonomousDatabase#is_dev_tier}.

---

##### `is_free_tier`<sup>Optional</sup> <a name="is_free_tier" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isFreeTier"></a>

```python
is_free_tier: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_free_tier DatabaseAutonomousDatabase#is_free_tier}.

---

##### `is_local_data_guard_enabled`<sup>Optional</sup> <a name="is_local_data_guard_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isLocalDataGuardEnabled"></a>

```python
is_local_data_guard_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_local_data_guard_enabled DatabaseAutonomousDatabase#is_local_data_guard_enabled}.

---

##### `is_mtls_connection_required`<sup>Optional</sup> <a name="is_mtls_connection_required" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isMtlsConnectionRequired"></a>

```python
is_mtls_connection_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_mtls_connection_required DatabaseAutonomousDatabase#is_mtls_connection_required}.

---

##### `is_preview_version_with_service_terms_accepted`<sup>Optional</sup> <a name="is_preview_version_with_service_terms_accepted" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isPreviewVersionWithServiceTermsAccepted"></a>

```python
is_preview_version_with_service_terms_accepted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_preview_version_with_service_terms_accepted DatabaseAutonomousDatabase#is_preview_version_with_service_terms_accepted}.

---

##### `is_refreshable_clone`<sup>Optional</sup> <a name="is_refreshable_clone" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isRefreshableClone"></a>

```python
is_refreshable_clone: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_refreshable_clone DatabaseAutonomousDatabase#is_refreshable_clone}.

---

##### `is_replicate_automatic_backups`<sup>Optional</sup> <a name="is_replicate_automatic_backups" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isReplicateAutomaticBackups"></a>

```python
is_replicate_automatic_backups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_replicate_automatic_backups DatabaseAutonomousDatabase#is_replicate_automatic_backups}.

---

##### `is_shrink_only`<sup>Optional</sup> <a name="is_shrink_only" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isShrinkOnly"></a>

```python
is_shrink_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_shrink_only DatabaseAutonomousDatabase#is_shrink_only}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#kms_key_id DatabaseAutonomousDatabase#kms_key_id}.

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#license_model DatabaseAutonomousDatabase#license_model}.

---

##### `local_adg_auto_failover_max_data_loss_limit`<sup>Optional</sup> <a name="local_adg_auto_failover_max_data_loss_limit" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```python
local_adg_auto_failover_max_data_loss_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#local_adg_auto_failover_max_data_loss_limit DatabaseAutonomousDatabase#local_adg_auto_failover_max_data_loss_limit}.

---

##### `long_term_backup_schedule`<sup>Optional</sup> <a name="long_term_backup_schedule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.longTermBackupSchedule"></a>

```python
long_term_backup_schedule: typing.Union[IResolvable, typing.List[DatabaseAutonomousDatabaseLongTermBackupSchedule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>]]

long_term_backup_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#long_term_backup_schedule DatabaseAutonomousDatabase#long_term_backup_schedule}

---

##### `max_cpu_core_count`<sup>Optional</sup> <a name="max_cpu_core_count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.maxCpuCoreCount"></a>

```python
max_cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#max_cpu_core_count DatabaseAutonomousDatabase#max_cpu_core_count}.

---

##### `ncharacter_set`<sup>Optional</sup> <a name="ncharacter_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.ncharacterSet"></a>

```python
ncharacter_set: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#ncharacter_set DatabaseAutonomousDatabase#ncharacter_set}.

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#nsg_ids DatabaseAutonomousDatabase#nsg_ids}.

---

##### `ocpu_count`<sup>Optional</sup> <a name="ocpu_count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.ocpuCount"></a>

```python
ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#ocpu_count DatabaseAutonomousDatabase#ocpu_count}.

---

##### `open_mode`<sup>Optional</sup> <a name="open_mode" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.openMode"></a>

```python
open_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#open_mode DatabaseAutonomousDatabase#open_mode}.

---

##### `operations_insights_status`<sup>Optional</sup> <a name="operations_insights_status" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.operationsInsightsStatus"></a>

```python
operations_insights_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#operations_insights_status DatabaseAutonomousDatabase#operations_insights_status}.

---

##### `permission_level`<sup>Optional</sup> <a name="permission_level" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.permissionLevel"></a>

```python
permission_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#permission_level DatabaseAutonomousDatabase#permission_level}.

---

##### `private_endpoint_ip`<sup>Optional</sup> <a name="private_endpoint_ip" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.privateEndpointIp"></a>

```python
private_endpoint_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#private_endpoint_ip DatabaseAutonomousDatabase#private_endpoint_ip}.

---

##### `private_endpoint_label`<sup>Optional</sup> <a name="private_endpoint_label" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.privateEndpointLabel"></a>

```python
private_endpoint_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#private_endpoint_label DatabaseAutonomousDatabase#private_endpoint_label}.

---

##### `refreshable_mode`<sup>Optional</sup> <a name="refreshable_mode" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.refreshableMode"></a>

```python
refreshable_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#refreshable_mode DatabaseAutonomousDatabase#refreshable_mode}.

---

##### `remote_disaster_recovery_type`<sup>Optional</sup> <a name="remote_disaster_recovery_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.remoteDisasterRecoveryType"></a>

```python
remote_disaster_recovery_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#remote_disaster_recovery_type DatabaseAutonomousDatabase#remote_disaster_recovery_type}.

---

##### `resource_pool_leader_id`<sup>Optional</sup> <a name="resource_pool_leader_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.resourcePoolLeaderId"></a>

```python
resource_pool_leader_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#resource_pool_leader_id DatabaseAutonomousDatabase#resource_pool_leader_id}.

---

##### `resource_pool_summary`<sup>Optional</sup> <a name="resource_pool_summary" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.resourcePoolSummary"></a>

```python
resource_pool_summary: DatabaseAutonomousDatabaseResourcePoolSummary
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary">DatabaseAutonomousDatabaseResourcePoolSummary</a>

resource_pool_summary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#resource_pool_summary DatabaseAutonomousDatabase#resource_pool_summary}

---

##### `rotate_key_trigger`<sup>Optional</sup> <a name="rotate_key_trigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.rotateKeyTrigger"></a>

```python
rotate_key_trigger: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#rotate_key_trigger DatabaseAutonomousDatabase#rotate_key_trigger}.

---

##### `scheduled_operations`<sup>Optional</sup> <a name="scheduled_operations" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.scheduledOperations"></a>

```python
scheduled_operations: typing.Union[IResolvable, typing.List[DatabaseAutonomousDatabaseScheduledOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>]]

scheduled_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#scheduled_operations DatabaseAutonomousDatabase#scheduled_operations}

---

##### `secret_id`<sup>Optional</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#secret_id DatabaseAutonomousDatabase#secret_id}.

---

##### `secret_version_number`<sup>Optional</sup> <a name="secret_version_number" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.secretVersionNumber"></a>

```python
secret_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#secret_version_number DatabaseAutonomousDatabase#secret_version_number}.

---

##### `security_attributes`<sup>Optional</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.securityAttributes"></a>

```python
security_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#security_attributes DatabaseAutonomousDatabase#security_attributes}.

---

##### `shrink_adb_trigger`<sup>Optional</sup> <a name="shrink_adb_trigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.shrinkAdbTrigger"></a>

```python
shrink_adb_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#shrink_adb_trigger DatabaseAutonomousDatabase#shrink_adb_trigger}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#source DatabaseAutonomousDatabase#source}.

---

##### `source_id`<sup>Optional</sup> <a name="source_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.sourceId"></a>

```python
source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#source_id DatabaseAutonomousDatabase#source_id}.

---

##### `standby_whitelisted_ips`<sup>Optional</sup> <a name="standby_whitelisted_ips" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.standbyWhitelistedIps"></a>

```python
standby_whitelisted_ips: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#standby_whitelisted_ips DatabaseAutonomousDatabase#standby_whitelisted_ips}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#state DatabaseAutonomousDatabase#state}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#subnet_id DatabaseAutonomousDatabase#subnet_id}.

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#subscription_id DatabaseAutonomousDatabase#subscription_id}.

---

##### `switchover_to`<sup>Optional</sup> <a name="switchover_to" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.switchoverTo"></a>

```python
switchover_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#switchover_to DatabaseAutonomousDatabase#switchover_to}.

---

##### `switchover_to_remote_peer_id`<sup>Optional</sup> <a name="switchover_to_remote_peer_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.switchoverToRemotePeerId"></a>

```python
switchover_to_remote_peer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#switchover_to_remote_peer_id DatabaseAutonomousDatabase#switchover_to_remote_peer_id}.

---

##### `time_of_auto_refresh_start`<sup>Optional</sup> <a name="time_of_auto_refresh_start" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.timeOfAutoRefreshStart"></a>

```python
time_of_auto_refresh_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#time_of_auto_refresh_start DatabaseAutonomousDatabase#time_of_auto_refresh_start}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.timeouts"></a>

```python
timeouts: DatabaseAutonomousDatabaseTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts">DatabaseAutonomousDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#timeouts DatabaseAutonomousDatabase#timeouts}

---

##### `timestamp`<sup>Optional</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#timestamp DatabaseAutonomousDatabase#timestamp}.

---

##### `use_latest_available_backup_time_stamp`<sup>Optional</sup> <a name="use_latest_available_backup_time_stamp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.useLatestAvailableBackupTimeStamp"></a>

```python
use_latest_available_backup_time_stamp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#use_latest_available_backup_time_stamp DatabaseAutonomousDatabase#use_latest_available_backup_time_stamp}.

---

##### `vault_id`<sup>Optional</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#vault_id DatabaseAutonomousDatabase#vault_id}.

---

##### `whitelisted_ips`<sup>Optional</sup> <a name="whitelisted_ips" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.whitelistedIps"></a>

```python
whitelisted_ips: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#whitelisted_ips DatabaseAutonomousDatabase#whitelisted_ips}.

---

### DatabaseAutonomousDatabaseConnectionStrings <a name="DatabaseAutonomousDatabaseConnectionStrings" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStrings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStrings()
```


### DatabaseAutonomousDatabaseConnectionStringsProfiles <a name="DatabaseAutonomousDatabaseConnectionStringsProfiles" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfiles.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfiles()
```


### DatabaseAutonomousDatabaseConnectionUrls <a name="DatabaseAutonomousDatabaseConnectionUrls" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrls.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrls()
```


### DatabaseAutonomousDatabaseCustomerContacts <a name="DatabaseAutonomousDatabaseCustomerContacts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts(
  email: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#email DatabaseAutonomousDatabase#email}. |

---

##### `email`<sup>Optional</sup> <a name="email" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#email DatabaseAutonomousDatabase#email}.

---

### DatabaseAutonomousDatabaseDbToolsDetails <a name="DatabaseAutonomousDatabaseDbToolsDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails(
  name: str,
  compute_count: typing.Union[int, float] = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  max_idle_time_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#name DatabaseAutonomousDatabase#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compute_count DatabaseAutonomousDatabase#compute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_enabled DatabaseAutonomousDatabase#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails.property.maxIdleTimeInMinutes">max_idle_time_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#max_idle_time_in_minutes DatabaseAutonomousDatabase#max_idle_time_in_minutes}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#name DatabaseAutonomousDatabase#name}.

---

##### `compute_count`<sup>Optional</sup> <a name="compute_count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compute_count DatabaseAutonomousDatabase#compute_count}.

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_enabled DatabaseAutonomousDatabase#is_enabled}.

---

##### `max_idle_time_in_minutes`<sup>Optional</sup> <a name="max_idle_time_in_minutes" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails.property.maxIdleTimeInMinutes"></a>

```python
max_idle_time_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#max_idle_time_in_minutes DatabaseAutonomousDatabase#max_idle_time_in_minutes}.

---

### DatabaseAutonomousDatabaseEncryptionKey <a name="DatabaseAutonomousDatabaseEncryptionKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey(
  arn_role: str = None,
  autonomous_database_provider: str = None,
  certificate_directory_name: str = None,
  certificate_id: str = None,
  directory_name: str = None,
  external_id: str = None,
  key_arn: str = None,
  key_name: str = None,
  kms_key_id: str = None,
  okv_kms_key: str = None,
  okv_uri: str = None,
  service_endpoint_uri: str = None,
  vault_id: str = None,
  vault_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.arnRole">arn_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#arn_role DatabaseAutonomousDatabase#arn_role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.autonomousDatabaseProvider">autonomous_database_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_database_provider DatabaseAutonomousDatabase#autonomous_database_provider}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.certificateDirectoryName">certificate_directory_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#certificate_directory_name DatabaseAutonomousDatabase#certificate_directory_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.certificateId">certificate_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#certificate_id DatabaseAutonomousDatabase#certificate_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.directoryName">directory_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#directory_name DatabaseAutonomousDatabase#directory_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#external_id DatabaseAutonomousDatabase#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.keyArn">key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#key_arn DatabaseAutonomousDatabase#key_arn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.keyName">key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#key_name DatabaseAutonomousDatabase#key_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#kms_key_id DatabaseAutonomousDatabase#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.okvKmsKey">okv_kms_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#okv_kms_key DatabaseAutonomousDatabase#okv_kms_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.okvUri">okv_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#okv_uri DatabaseAutonomousDatabase#okv_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.serviceEndpointUri">service_endpoint_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#service_endpoint_uri DatabaseAutonomousDatabase#service_endpoint_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.vaultId">vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#vault_id DatabaseAutonomousDatabase#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.vaultUri">vault_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#vault_uri DatabaseAutonomousDatabase#vault_uri}. |

---

##### `arn_role`<sup>Optional</sup> <a name="arn_role" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.arnRole"></a>

```python
arn_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#arn_role DatabaseAutonomousDatabase#arn_role}.

---

##### `autonomous_database_provider`<sup>Optional</sup> <a name="autonomous_database_provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.autonomousDatabaseProvider"></a>

```python
autonomous_database_provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_database_provider DatabaseAutonomousDatabase#autonomous_database_provider}.

---

##### `certificate_directory_name`<sup>Optional</sup> <a name="certificate_directory_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.certificateDirectoryName"></a>

```python
certificate_directory_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#certificate_directory_name DatabaseAutonomousDatabase#certificate_directory_name}.

---

##### `certificate_id`<sup>Optional</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#certificate_id DatabaseAutonomousDatabase#certificate_id}.

---

##### `directory_name`<sup>Optional</sup> <a name="directory_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.directoryName"></a>

```python
directory_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#directory_name DatabaseAutonomousDatabase#directory_name}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#external_id DatabaseAutonomousDatabase#external_id}.

---

##### `key_arn`<sup>Optional</sup> <a name="key_arn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.keyArn"></a>

```python
key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#key_arn DatabaseAutonomousDatabase#key_arn}.

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#key_name DatabaseAutonomousDatabase#key_name}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#kms_key_id DatabaseAutonomousDatabase#kms_key_id}.

---

##### `okv_kms_key`<sup>Optional</sup> <a name="okv_kms_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.okvKmsKey"></a>

```python
okv_kms_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#okv_kms_key DatabaseAutonomousDatabase#okv_kms_key}.

---

##### `okv_uri`<sup>Optional</sup> <a name="okv_uri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.okvUri"></a>

```python
okv_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#okv_uri DatabaseAutonomousDatabase#okv_uri}.

---

##### `service_endpoint_uri`<sup>Optional</sup> <a name="service_endpoint_uri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.serviceEndpointUri"></a>

```python
service_endpoint_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#service_endpoint_uri DatabaseAutonomousDatabase#service_endpoint_uri}.

---

##### `vault_id`<sup>Optional</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#vault_id DatabaseAutonomousDatabase#vault_id}.

---

##### `vault_uri`<sup>Optional</sup> <a name="vault_uri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.vaultUri"></a>

```python
vault_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#vault_uri DatabaseAutonomousDatabase#vault_uri}.

---

### DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry <a name="DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry()
```


### DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey <a name="DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey()
```


### DatabaseAutonomousDatabaseKeyHistoryEntry <a name="DatabaseAutonomousDatabaseKeyHistoryEntry" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntry"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntry.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntry()
```


### DatabaseAutonomousDatabaseLocalStandbyDb <a name="DatabaseAutonomousDatabaseLocalStandbyDb" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDb"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDb.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDb()
```


### DatabaseAutonomousDatabaseLongTermBackupSchedule <a name="DatabaseAutonomousDatabaseLongTermBackupSchedule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule(
  is_disabled: typing.Union[bool, IResolvable] = None,
  repeat_cadence: str = None,
  retention_period_in_days: typing.Union[int, float] = None,
  time_of_backup: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule.property.isDisabled">is_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_disabled DatabaseAutonomousDatabase#is_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule.property.repeatCadence">repeat_cadence</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#repeat_cadence DatabaseAutonomousDatabase#repeat_cadence}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule.property.retentionPeriodInDays">retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#retention_period_in_days DatabaseAutonomousDatabase#retention_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule.property.timeOfBackup">time_of_backup</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#time_of_backup DatabaseAutonomousDatabase#time_of_backup}. |

---

##### `is_disabled`<sup>Optional</sup> <a name="is_disabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule.property.isDisabled"></a>

```python
is_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_disabled DatabaseAutonomousDatabase#is_disabled}.

---

##### `repeat_cadence`<sup>Optional</sup> <a name="repeat_cadence" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule.property.repeatCadence"></a>

```python
repeat_cadence: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#repeat_cadence DatabaseAutonomousDatabase#repeat_cadence}.

---

##### `retention_period_in_days`<sup>Optional</sup> <a name="retention_period_in_days" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule.property.retentionPeriodInDays"></a>

```python
retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#retention_period_in_days DatabaseAutonomousDatabase#retention_period_in_days}.

---

##### `time_of_backup`<sup>Optional</sup> <a name="time_of_backup" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule.property.timeOfBackup"></a>

```python
time_of_backup: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#time_of_backup DatabaseAutonomousDatabase#time_of_backup}.

---

### DatabaseAutonomousDatabasePublicConnectionUrls <a name="DatabaseAutonomousDatabasePublicConnectionUrls" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrls.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrls()
```


### DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration <a name="DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration()
```


### DatabaseAutonomousDatabaseResourcePoolSummary <a name="DatabaseAutonomousDatabaseResourcePoolSummary" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary(
  is_disabled: typing.Union[bool, IResolvable] = None,
  pool_size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary.property.isDisabled">is_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_disabled DatabaseAutonomousDatabase#is_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary.property.poolSize">pool_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#pool_size DatabaseAutonomousDatabase#pool_size}. |

---

##### `is_disabled`<sup>Optional</sup> <a name="is_disabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary.property.isDisabled"></a>

```python
is_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_disabled DatabaseAutonomousDatabase#is_disabled}.

---

##### `pool_size`<sup>Optional</sup> <a name="pool_size" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary.property.poolSize"></a>

```python
pool_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#pool_size DatabaseAutonomousDatabase#pool_size}.

---

### DatabaseAutonomousDatabaseScheduledOperations <a name="DatabaseAutonomousDatabaseScheduledOperations" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations(
  day_of_week: DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek,
  scheduled_start_time: str = None,
  scheduled_stop_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations.property.dayOfWeek">day_of_week</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek">DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek</a></code> | day_of_week block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations.property.scheduledStartTime">scheduled_start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#scheduled_start_time DatabaseAutonomousDatabase#scheduled_start_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations.property.scheduledStopTime">scheduled_stop_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#scheduled_stop_time DatabaseAutonomousDatabase#scheduled_stop_time}. |

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations.property.dayOfWeek"></a>

```python
day_of_week: DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek">DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek</a>

day_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#day_of_week DatabaseAutonomousDatabase#day_of_week}

---

##### `scheduled_start_time`<sup>Optional</sup> <a name="scheduled_start_time" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations.property.scheduledStartTime"></a>

```python
scheduled_start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#scheduled_start_time DatabaseAutonomousDatabase#scheduled_start_time}.

---

##### `scheduled_stop_time`<sup>Optional</sup> <a name="scheduled_stop_time" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations.property.scheduledStopTime"></a>

```python
scheduled_stop_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#scheduled_stop_time DatabaseAutonomousDatabase#scheduled_stop_time}.

---

### DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek <a name="DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#name DatabaseAutonomousDatabase#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#name DatabaseAutonomousDatabase#name}.

---

### DatabaseAutonomousDatabaseStandbyDb <a name="DatabaseAutonomousDatabaseStandbyDb" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDb"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDb.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDb()
```


### DatabaseAutonomousDatabaseTimeouts <a name="DatabaseAutonomousDatabaseTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#create DatabaseAutonomousDatabase#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#delete DatabaseAutonomousDatabase#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#update DatabaseAutonomousDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#create DatabaseAutonomousDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#delete DatabaseAutonomousDatabase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#update DatabaseAutonomousDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousDatabaseApexDetailsList <a name="DatabaseAutonomousDatabaseApexDetailsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseAutonomousDatabaseApexDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseAutonomousDatabaseApexDetailsOutputReference <a name="DatabaseAutonomousDatabaseApexDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.apexVersion">apex_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.ordsVersion">ords_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetails">DatabaseAutonomousDatabaseApexDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apex_version`<sup>Required</sup> <a name="apex_version" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.apexVersion"></a>

```python
apex_version: str
```

- *Type:* str

---

##### `ords_version`<sup>Required</sup> <a name="ords_version" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.ordsVersion"></a>

```python
ords_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseAutonomousDatabaseApexDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetails">DatabaseAutonomousDatabaseApexDetails</a>

---


### DatabaseAutonomousDatabaseBackupConfigList <a name="DatabaseAutonomousDatabaseBackupConfigList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseAutonomousDatabaseBackupConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseAutonomousDatabaseBackupConfigOutputReference <a name="DatabaseAutonomousDatabaseBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.manualBackupBucketName">manual_backup_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.manualBackupType">manual_backup_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfig">DatabaseAutonomousDatabaseBackupConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `manual_backup_bucket_name`<sup>Required</sup> <a name="manual_backup_bucket_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.manualBackupBucketName"></a>

```python
manual_backup_bucket_name: str
```

- *Type:* str

---

##### `manual_backup_type`<sup>Required</sup> <a name="manual_backup_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.manualBackupType"></a>

```python
manual_backup_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseAutonomousDatabaseBackupConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfig">DatabaseAutonomousDatabaseBackupConfig</a>

---


### DatabaseAutonomousDatabaseConnectionStringsList <a name="DatabaseAutonomousDatabaseConnectionStringsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseAutonomousDatabaseConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseAutonomousDatabaseConnectionStringsOutputReference <a name="DatabaseAutonomousDatabaseConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.allConnectionStrings">all_connection_strings</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.dedicated">dedicated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.high">high</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.low">low</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.medium">medium</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.profiles">profiles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList">DatabaseAutonomousDatabaseConnectionStringsProfilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStrings">DatabaseAutonomousDatabaseConnectionStrings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_connection_strings`<sup>Required</sup> <a name="all_connection_strings" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.allConnectionStrings"></a>

```python
all_connection_strings: StringMap
```

- *Type:* cdktf.StringMap

---

##### `dedicated`<sup>Required</sup> <a name="dedicated" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.dedicated"></a>

```python
dedicated: str
```

- *Type:* str

---

##### `high`<sup>Required</sup> <a name="high" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.high"></a>

```python
high: str
```

- *Type:* str

---

##### `low`<sup>Required</sup> <a name="low" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.low"></a>

```python
low: str
```

- *Type:* str

---

##### `medium`<sup>Required</sup> <a name="medium" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.medium"></a>

```python
medium: str
```

- *Type:* str

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.profiles"></a>

```python
profiles: DatabaseAutonomousDatabaseConnectionStringsProfilesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList">DatabaseAutonomousDatabaseConnectionStringsProfilesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseAutonomousDatabaseConnectionStrings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStrings">DatabaseAutonomousDatabaseConnectionStrings</a>

---


### DatabaseAutonomousDatabaseConnectionStringsProfilesList <a name="DatabaseAutonomousDatabaseConnectionStringsProfilesList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference <a name="DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.consumerGroup">consumer_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.hostFormat">host_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.isRegional">is_regional</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.sessionMode">session_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.syntaxFormat">syntax_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.tlsAuthentication">tls_authentication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfiles">DatabaseAutonomousDatabaseConnectionStringsProfiles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consumer_group`<sup>Required</sup> <a name="consumer_group" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.consumerGroup"></a>

```python
consumer_group: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `host_format`<sup>Required</sup> <a name="host_format" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.hostFormat"></a>

```python
host_format: str
```

- *Type:* str

---

##### `is_regional`<sup>Required</sup> <a name="is_regional" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.isRegional"></a>

```python
is_regional: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `session_mode`<sup>Required</sup> <a name="session_mode" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.sessionMode"></a>

```python
session_mode: str
```

- *Type:* str

---

##### `syntax_format`<sup>Required</sup> <a name="syntax_format" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.syntaxFormat"></a>

```python
syntax_format: str
```

- *Type:* str

---

##### `tls_authentication`<sup>Required</sup> <a name="tls_authentication" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.tlsAuthentication"></a>

```python
tls_authentication: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseAutonomousDatabaseConnectionStringsProfiles
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfiles">DatabaseAutonomousDatabaseConnectionStringsProfiles</a>

---


### DatabaseAutonomousDatabaseConnectionUrlsList <a name="DatabaseAutonomousDatabaseConnectionUrlsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseAutonomousDatabaseConnectionUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseAutonomousDatabaseConnectionUrlsOutputReference <a name="DatabaseAutonomousDatabaseConnectionUrlsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.apexUrl">apex_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.databaseTransformsUrl">database_transforms_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.graphStudioUrl">graph_studio_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.machineLearningNotebookUrl">machine_learning_notebook_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.machineLearningUserManagementUrl">machine_learning_user_management_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.mongoDbUrl">mongo_db_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.ordsUrl">ords_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.sqlDevWebUrl">sql_dev_web_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrls">DatabaseAutonomousDatabaseConnectionUrls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apex_url`<sup>Required</sup> <a name="apex_url" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.apexUrl"></a>

```python
apex_url: str
```

- *Type:* str

---

##### `database_transforms_url`<sup>Required</sup> <a name="database_transforms_url" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.databaseTransformsUrl"></a>

```python
database_transforms_url: str
```

- *Type:* str

---

##### `graph_studio_url`<sup>Required</sup> <a name="graph_studio_url" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.graphStudioUrl"></a>

```python
graph_studio_url: str
```

- *Type:* str

---

##### `machine_learning_notebook_url`<sup>Required</sup> <a name="machine_learning_notebook_url" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.machineLearningNotebookUrl"></a>

```python
machine_learning_notebook_url: str
```

- *Type:* str

---

##### `machine_learning_user_management_url`<sup>Required</sup> <a name="machine_learning_user_management_url" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.machineLearningUserManagementUrl"></a>

```python
machine_learning_user_management_url: str
```

- *Type:* str

---

##### `mongo_db_url`<sup>Required</sup> <a name="mongo_db_url" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.mongoDbUrl"></a>

```python
mongo_db_url: str
```

- *Type:* str

---

##### `ords_url`<sup>Required</sup> <a name="ords_url" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.ordsUrl"></a>

```python
ords_url: str
```

- *Type:* str

---

##### `sql_dev_web_url`<sup>Required</sup> <a name="sql_dev_web_url" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.sqlDevWebUrl"></a>

```python
sql_dev_web_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseAutonomousDatabaseConnectionUrls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrls">DatabaseAutonomousDatabaseConnectionUrls</a>

---


### DatabaseAutonomousDatabaseCustomerContactsList <a name="DatabaseAutonomousDatabaseCustomerContactsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseAutonomousDatabaseCustomerContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseAutonomousDatabaseCustomerContacts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>]]

---


### DatabaseAutonomousDatabaseCustomerContactsOutputReference <a name="DatabaseAutonomousDatabaseCustomerContactsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.resetEmail">reset_email</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email` <a name="reset_email" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseAutonomousDatabaseCustomerContacts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>]

---


### DatabaseAutonomousDatabaseDbToolsDetailsList <a name="DatabaseAutonomousDatabaseDbToolsDetailsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseAutonomousDatabaseDbToolsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseAutonomousDatabaseDbToolsDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>]]

---


### DatabaseAutonomousDatabaseDbToolsDetailsOutputReference <a name="DatabaseAutonomousDatabaseDbToolsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resetComputeCount">reset_compute_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resetMaxIdleTimeInMinutes">reset_max_idle_time_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compute_count` <a name="reset_compute_count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resetComputeCount"></a>

```python
def reset_compute_count() -> None
```

##### `reset_is_enabled` <a name="reset_is_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```

##### `reset_max_idle_time_in_minutes` <a name="reset_max_idle_time_in_minutes" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resetMaxIdleTimeInMinutes"></a>

```python
def reset_max_idle_time_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCountInput">compute_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutesInput">max_idle_time_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes">max_idle_time_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_count_input`<sup>Optional</sup> <a name="compute_count_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCountInput"></a>

```python
compute_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_idle_time_in_minutes_input`<sup>Optional</sup> <a name="max_idle_time_in_minutes_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutesInput"></a>

```python
max_idle_time_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `compute_count`<sup>Required</sup> <a name="compute_count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_idle_time_in_minutes`<sup>Required</sup> <a name="max_idle_time_in_minutes" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes"></a>

```python
max_idle_time_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseAutonomousDatabaseDbToolsDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>]

---


### DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList <a name="DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference <a name="DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.arnRole">arn_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.autonomousDatabaseProvider">autonomous_database_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateDirectoryName">certificate_directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.directoryName">directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyArn">key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvKmsKey">okv_kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvUri">okv_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.serviceEndpointUri">service_endpoint_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultUri">vault_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey">DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_role`<sup>Required</sup> <a name="arn_role" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.arnRole"></a>

```python
arn_role: str
```

- *Type:* str

---

##### `autonomous_database_provider`<sup>Required</sup> <a name="autonomous_database_provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.autonomousDatabaseProvider"></a>

```python
autonomous_database_provider: str
```

- *Type:* str

---

##### `certificate_directory_name`<sup>Required</sup> <a name="certificate_directory_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateDirectoryName"></a>

```python
certificate_directory_name: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `directory_name`<sup>Required</sup> <a name="directory_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.directoryName"></a>

```python
directory_name: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `key_arn`<sup>Required</sup> <a name="key_arn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyArn"></a>

```python
key_arn: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `okv_kms_key`<sup>Required</sup> <a name="okv_kms_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvKmsKey"></a>

```python
okv_kms_key: str
```

- *Type:* str

---

##### `okv_uri`<sup>Required</sup> <a name="okv_uri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvUri"></a>

```python
okv_uri: str
```

- *Type:* str

---

##### `service_endpoint_uri`<sup>Required</sup> <a name="service_endpoint_uri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.serviceEndpointUri"></a>

```python
service_endpoint_uri: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `vault_uri`<sup>Required</sup> <a name="vault_uri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultUri"></a>

```python
vault_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey">DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey</a>

---


### DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList <a name="DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference <a name="DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.encryptionKey">encryption_key</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList">DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.timeActivated">time_activated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry">DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.encryptionKey"></a>

```python
encryption_key: DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList">DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList</a>

---

##### `time_activated`<sup>Required</sup> <a name="time_activated" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.timeActivated"></a>

```python
time_activated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry">DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry</a>

---


### DatabaseAutonomousDatabaseEncryptionKeyOutputReference <a name="DatabaseAutonomousDatabaseEncryptionKeyOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetArnRole">reset_arn_role</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetAutonomousDatabaseProvider">reset_autonomous_database_provider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetCertificateDirectoryName">reset_certificate_directory_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetCertificateId">reset_certificate_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetDirectoryName">reset_directory_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetKeyArn">reset_key_arn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetKeyName">reset_key_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetOkvKmsKey">reset_okv_kms_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetOkvUri">reset_okv_uri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetServiceEndpointUri">reset_service_endpoint_uri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetVaultId">reset_vault_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetVaultUri">reset_vault_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arn_role` <a name="reset_arn_role" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetArnRole"></a>

```python
def reset_arn_role() -> None
```

##### `reset_autonomous_database_provider` <a name="reset_autonomous_database_provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetAutonomousDatabaseProvider"></a>

```python
def reset_autonomous_database_provider() -> None
```

##### `reset_certificate_directory_name` <a name="reset_certificate_directory_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetCertificateDirectoryName"></a>

```python
def reset_certificate_directory_name() -> None
```

##### `reset_certificate_id` <a name="reset_certificate_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetCertificateId"></a>

```python
def reset_certificate_id() -> None
```

##### `reset_directory_name` <a name="reset_directory_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetDirectoryName"></a>

```python
def reset_directory_name() -> None
```

##### `reset_external_id` <a name="reset_external_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_key_arn` <a name="reset_key_arn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetKeyArn"></a>

```python
def reset_key_arn() -> None
```

##### `reset_key_name` <a name="reset_key_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetKeyName"></a>

```python
def reset_key_name() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_okv_kms_key` <a name="reset_okv_kms_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetOkvKmsKey"></a>

```python
def reset_okv_kms_key() -> None
```

##### `reset_okv_uri` <a name="reset_okv_uri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetOkvUri"></a>

```python
def reset_okv_uri() -> None
```

##### `reset_service_endpoint_uri` <a name="reset_service_endpoint_uri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetServiceEndpointUri"></a>

```python
def reset_service_endpoint_uri() -> None
```

##### `reset_vault_id` <a name="reset_vault_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetVaultId"></a>

```python
def reset_vault_id() -> None
```

##### `reset_vault_uri` <a name="reset_vault_uri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetVaultUri"></a>

```python
def reset_vault_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.arnRoleInput">arn_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.autonomousDatabaseProviderInput">autonomous_database_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateDirectoryNameInput">certificate_directory_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateIdInput">certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.directoryNameInput">directory_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyArnInput">key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvKmsKeyInput">okv_kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvUriInput">okv_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.serviceEndpointUriInput">service_endpoint_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultIdInput">vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultUriInput">vault_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.arnRole">arn_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.autonomousDatabaseProvider">autonomous_database_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateDirectoryName">certificate_directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.directoryName">directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyArn">key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvKmsKey">okv_kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvUri">okv_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.serviceEndpointUri">service_endpoint_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultUri">vault_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey">DatabaseAutonomousDatabaseEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_role_input`<sup>Optional</sup> <a name="arn_role_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.arnRoleInput"></a>

```python
arn_role_input: str
```

- *Type:* str

---

##### `autonomous_database_provider_input`<sup>Optional</sup> <a name="autonomous_database_provider_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.autonomousDatabaseProviderInput"></a>

```python
autonomous_database_provider_input: str
```

- *Type:* str

---

##### `certificate_directory_name_input`<sup>Optional</sup> <a name="certificate_directory_name_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateDirectoryNameInput"></a>

```python
certificate_directory_name_input: str
```

- *Type:* str

---

##### `certificate_id_input`<sup>Optional</sup> <a name="certificate_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateIdInput"></a>

```python
certificate_id_input: str
```

- *Type:* str

---

##### `directory_name_input`<sup>Optional</sup> <a name="directory_name_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.directoryNameInput"></a>

```python
directory_name_input: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `key_arn_input`<sup>Optional</sup> <a name="key_arn_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyArnInput"></a>

```python
key_arn_input: str
```

- *Type:* str

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `okv_kms_key_input`<sup>Optional</sup> <a name="okv_kms_key_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvKmsKeyInput"></a>

```python
okv_kms_key_input: str
```

- *Type:* str

---

##### `okv_uri_input`<sup>Optional</sup> <a name="okv_uri_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvUriInput"></a>

```python
okv_uri_input: str
```

- *Type:* str

---

##### `service_endpoint_uri_input`<sup>Optional</sup> <a name="service_endpoint_uri_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.serviceEndpointUriInput"></a>

```python
service_endpoint_uri_input: str
```

- *Type:* str

---

##### `vault_id_input`<sup>Optional</sup> <a name="vault_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultIdInput"></a>

```python
vault_id_input: str
```

- *Type:* str

---

##### `vault_uri_input`<sup>Optional</sup> <a name="vault_uri_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultUriInput"></a>

```python
vault_uri_input: str
```

- *Type:* str

---

##### `arn_role`<sup>Required</sup> <a name="arn_role" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.arnRole"></a>

```python
arn_role: str
```

- *Type:* str

---

##### `autonomous_database_provider`<sup>Required</sup> <a name="autonomous_database_provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.autonomousDatabaseProvider"></a>

```python
autonomous_database_provider: str
```

- *Type:* str

---

##### `certificate_directory_name`<sup>Required</sup> <a name="certificate_directory_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateDirectoryName"></a>

```python
certificate_directory_name: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `directory_name`<sup>Required</sup> <a name="directory_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.directoryName"></a>

```python
directory_name: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `key_arn`<sup>Required</sup> <a name="key_arn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyArn"></a>

```python
key_arn: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `okv_kms_key`<sup>Required</sup> <a name="okv_kms_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvKmsKey"></a>

```python
okv_kms_key: str
```

- *Type:* str

---

##### `okv_uri`<sup>Required</sup> <a name="okv_uri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvUri"></a>

```python
okv_uri: str
```

- *Type:* str

---

##### `service_endpoint_uri`<sup>Required</sup> <a name="service_endpoint_uri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.serviceEndpointUri"></a>

```python
service_endpoint_uri: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `vault_uri`<sup>Required</sup> <a name="vault_uri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultUri"></a>

```python
vault_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseAutonomousDatabaseEncryptionKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey">DatabaseAutonomousDatabaseEncryptionKey</a>

---


### DatabaseAutonomousDatabaseKeyHistoryEntryList <a name="DatabaseAutonomousDatabaseKeyHistoryEntryList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference <a name="DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.timeActivated">time_activated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntry">DatabaseAutonomousDatabaseKeyHistoryEntry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_version_id`<sup>Required</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.kmsKeyVersionId"></a>

```python
kms_key_version_id: str
```

- *Type:* str

---

##### `time_activated`<sup>Required</sup> <a name="time_activated" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.timeActivated"></a>

```python
time_activated: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseAutonomousDatabaseKeyHistoryEntry
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntry">DatabaseAutonomousDatabaseKeyHistoryEntry</a>

---


### DatabaseAutonomousDatabaseLocalStandbyDbList <a name="DatabaseAutonomousDatabaseLocalStandbyDbList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseAutonomousDatabaseLocalStandbyDbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseAutonomousDatabaseLocalStandbyDbOutputReference <a name="DatabaseAutonomousDatabaseLocalStandbyDbOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.lagTimeInSeconds">lag_time_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.timeDataGuardRoleChanged">time_data_guard_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged">time_disaster_recovery_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDb">DatabaseAutonomousDatabaseLocalStandbyDb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `lag_time_in_seconds`<sup>Required</sup> <a name="lag_time_in_seconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.lagTimeInSeconds"></a>

```python
lag_time_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_data_guard_role_changed`<sup>Required</sup> <a name="time_data_guard_role_changed" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.timeDataGuardRoleChanged"></a>

```python
time_data_guard_role_changed: str
```

- *Type:* str

---

##### `time_disaster_recovery_role_changed`<sup>Required</sup> <a name="time_disaster_recovery_role_changed" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged"></a>

```python
time_disaster_recovery_role_changed: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseAutonomousDatabaseLocalStandbyDb
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDb">DatabaseAutonomousDatabaseLocalStandbyDb</a>

---


### DatabaseAutonomousDatabaseLongTermBackupScheduleList <a name="DatabaseAutonomousDatabaseLongTermBackupScheduleList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseAutonomousDatabaseLongTermBackupSchedule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>]]

---


### DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference <a name="DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resetIsDisabled">reset_is_disabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRepeatCadence">reset_repeat_cadence</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRetentionPeriodInDays">reset_retention_period_in_days</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resetTimeOfBackup">reset_time_of_backup</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_disabled` <a name="reset_is_disabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resetIsDisabled"></a>

```python
def reset_is_disabled() -> None
```

##### `reset_repeat_cadence` <a name="reset_repeat_cadence" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRepeatCadence"></a>

```python
def reset_repeat_cadence() -> None
```

##### `reset_retention_period_in_days` <a name="reset_retention_period_in_days" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRetentionPeriodInDays"></a>

```python
def reset_retention_period_in_days() -> None
```

##### `reset_time_of_backup` <a name="reset_time_of_backup" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resetTimeOfBackup"></a>

```python
def reset_time_of_backup() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabledInput">is_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadenceInput">repeat_cadence_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDaysInput">retention_period_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackupInput">time_of_backup_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabled">is_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence">repeat_cadence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays">retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup">time_of_backup</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_disabled_input`<sup>Optional</sup> <a name="is_disabled_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabledInput"></a>

```python
is_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repeat_cadence_input`<sup>Optional</sup> <a name="repeat_cadence_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadenceInput"></a>

```python
repeat_cadence_input: str
```

- *Type:* str

---

##### `retention_period_in_days_input`<sup>Optional</sup> <a name="retention_period_in_days_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDaysInput"></a>

```python
retention_period_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_of_backup_input`<sup>Optional</sup> <a name="time_of_backup_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackupInput"></a>

```python
time_of_backup_input: str
```

- *Type:* str

---

##### `is_disabled`<sup>Required</sup> <a name="is_disabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabled"></a>

```python
is_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repeat_cadence`<sup>Required</sup> <a name="repeat_cadence" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence"></a>

```python
repeat_cadence: str
```

- *Type:* str

---

##### `retention_period_in_days`<sup>Required</sup> <a name="retention_period_in_days" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays"></a>

```python
retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_of_backup`<sup>Required</sup> <a name="time_of_backup" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup"></a>

```python
time_of_backup: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseAutonomousDatabaseLongTermBackupSchedule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>]

---


### DatabaseAutonomousDatabasePublicConnectionUrlsList <a name="DatabaseAutonomousDatabasePublicConnectionUrlsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference <a name="DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.apexUrl">apex_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.databaseTransformsUrl">database_transforms_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.graphStudioUrl">graph_studio_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.machineLearningNotebookUrl">machine_learning_notebook_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.machineLearningUserManagementUrl">machine_learning_user_management_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.mongoDbUrl">mongo_db_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.ordsUrl">ords_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.sqlDevWebUrl">sql_dev_web_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrls">DatabaseAutonomousDatabasePublicConnectionUrls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apex_url`<sup>Required</sup> <a name="apex_url" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.apexUrl"></a>

```python
apex_url: str
```

- *Type:* str

---

##### `database_transforms_url`<sup>Required</sup> <a name="database_transforms_url" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.databaseTransformsUrl"></a>

```python
database_transforms_url: str
```

- *Type:* str

---

##### `graph_studio_url`<sup>Required</sup> <a name="graph_studio_url" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.graphStudioUrl"></a>

```python
graph_studio_url: str
```

- *Type:* str

---

##### `machine_learning_notebook_url`<sup>Required</sup> <a name="machine_learning_notebook_url" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.machineLearningNotebookUrl"></a>

```python
machine_learning_notebook_url: str
```

- *Type:* str

---

##### `machine_learning_user_management_url`<sup>Required</sup> <a name="machine_learning_user_management_url" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.machineLearningUserManagementUrl"></a>

```python
machine_learning_user_management_url: str
```

- *Type:* str

---

##### `mongo_db_url`<sup>Required</sup> <a name="mongo_db_url" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.mongoDbUrl"></a>

```python
mongo_db_url: str
```

- *Type:* str

---

##### `ords_url`<sup>Required</sup> <a name="ords_url" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.ordsUrl"></a>

```python
ords_url: str
```

- *Type:* str

---

##### `sql_dev_web_url`<sup>Required</sup> <a name="sql_dev_web_url" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.sqlDevWebUrl"></a>

```python
sql_dev_web_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseAutonomousDatabasePublicConnectionUrls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrls">DatabaseAutonomousDatabasePublicConnectionUrls</a>

---


### DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList <a name="DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference <a name="DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.disasterRecoveryType">disaster_recovery_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.isReplicateAutomaticBackups">is_replicate_automatic_backups</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.isSnapshotStandby">is_snapshot_standby</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.timeSnapshotStandbyEnabledTill">time_snapshot_standby_enabled_till</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration">DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disaster_recovery_type`<sup>Required</sup> <a name="disaster_recovery_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.disasterRecoveryType"></a>

```python
disaster_recovery_type: str
```

- *Type:* str

---

##### `is_replicate_automatic_backups`<sup>Required</sup> <a name="is_replicate_automatic_backups" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.isReplicateAutomaticBackups"></a>

```python
is_replicate_automatic_backups: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_snapshot_standby`<sup>Required</sup> <a name="is_snapshot_standby" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.isSnapshotStandby"></a>

```python
is_snapshot_standby: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `time_snapshot_standby_enabled_till`<sup>Required</sup> <a name="time_snapshot_standby_enabled_till" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.timeSnapshotStandbyEnabledTill"></a>

```python
time_snapshot_standby_enabled_till: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration">DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration</a>

---


### DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference <a name="DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.resetIsDisabled">reset_is_disabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.resetPoolSize">reset_pool_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_disabled` <a name="reset_is_disabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.resetIsDisabled"></a>

```python
def reset_is_disabled() -> None
```

##### `reset_pool_size` <a name="reset_pool_size" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.resetPoolSize"></a>

```python
def reset_pool_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabledInput">is_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSizeInput">pool_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabled">is_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSize">pool_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary">DatabaseAutonomousDatabaseResourcePoolSummary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_disabled_input`<sup>Optional</sup> <a name="is_disabled_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabledInput"></a>

```python
is_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pool_size_input`<sup>Optional</sup> <a name="pool_size_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSizeInput"></a>

```python
pool_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_disabled`<sup>Required</sup> <a name="is_disabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabled"></a>

```python
is_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pool_size`<sup>Required</sup> <a name="pool_size" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSize"></a>

```python
pool_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseAutonomousDatabaseResourcePoolSummary
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary">DatabaseAutonomousDatabaseResourcePoolSummary</a>

---


### DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference <a name="DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek">DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek">DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek</a>

---


### DatabaseAutonomousDatabaseScheduledOperationsList <a name="DatabaseAutonomousDatabaseScheduledOperationsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseAutonomousDatabaseScheduledOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseAutonomousDatabaseScheduledOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>]]

---


### DatabaseAutonomousDatabaseScheduledOperationsOutputReference <a name="DatabaseAutonomousDatabaseScheduledOperationsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.putDayOfWeek">put_day_of_week</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStartTime">reset_scheduled_start_time</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStopTime">reset_scheduled_stop_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_day_of_week` <a name="put_day_of_week" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.putDayOfWeek"></a>

```python
def put_day_of_week(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.putDayOfWeek.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#name DatabaseAutonomousDatabase#name}.

---

##### `reset_scheduled_start_time` <a name="reset_scheduled_start_time" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStartTime"></a>

```python
def reset_scheduled_start_time() -> None
```

##### `reset_scheduled_stop_time` <a name="reset_scheduled_stop_time" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStopTime"></a>

```python
def reset_scheduled_stop_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeek">day_of_week</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference">DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeekInput">day_of_week_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek">DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTimeInput">scheduled_start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTimeInput">scheduled_stop_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTime">scheduled_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTime">scheduled_stop_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeek"></a>

```python
day_of_week: DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference">DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference</a>

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeekInput"></a>

```python
day_of_week_input: DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek">DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek</a>

---

##### `scheduled_start_time_input`<sup>Optional</sup> <a name="scheduled_start_time_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTimeInput"></a>

```python
scheduled_start_time_input: str
```

- *Type:* str

---

##### `scheduled_stop_time_input`<sup>Optional</sup> <a name="scheduled_stop_time_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTimeInput"></a>

```python
scheduled_stop_time_input: str
```

- *Type:* str

---

##### `scheduled_start_time`<sup>Required</sup> <a name="scheduled_start_time" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTime"></a>

```python
scheduled_start_time: str
```

- *Type:* str

---

##### `scheduled_stop_time`<sup>Required</sup> <a name="scheduled_stop_time" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTime"></a>

```python
scheduled_stop_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseAutonomousDatabaseScheduledOperations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>]

---


### DatabaseAutonomousDatabaseStandbyDbList <a name="DatabaseAutonomousDatabaseStandbyDbList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseAutonomousDatabaseStandbyDbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseAutonomousDatabaseStandbyDbOutputReference <a name="DatabaseAutonomousDatabaseStandbyDbOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.lagTimeInSeconds">lag_time_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.timeDataGuardRoleChanged">time_data_guard_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged">time_disaster_recovery_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDb">DatabaseAutonomousDatabaseStandbyDb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `lag_time_in_seconds`<sup>Required</sup> <a name="lag_time_in_seconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.lagTimeInSeconds"></a>

```python
lag_time_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_data_guard_role_changed`<sup>Required</sup> <a name="time_data_guard_role_changed" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.timeDataGuardRoleChanged"></a>

```python
time_data_guard_role_changed: str
```

- *Type:* str

---

##### `time_disaster_recovery_role_changed`<sup>Required</sup> <a name="time_disaster_recovery_role_changed" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged"></a>

```python
time_disaster_recovery_role_changed: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseAutonomousDatabaseStandbyDb
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDb">DatabaseAutonomousDatabaseStandbyDb</a>

---


### DatabaseAutonomousDatabaseTimeoutsOutputReference <a name="DatabaseAutonomousDatabaseTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database

databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts">DatabaseAutonomousDatabaseTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseAutonomousDatabaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts">DatabaseAutonomousDatabaseTimeouts</a>]

---



