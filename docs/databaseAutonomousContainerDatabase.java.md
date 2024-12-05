# `databaseAutonomousContainerDatabase` Submodule <a name="`databaseAutonomousContainerDatabase` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousContainerDatabase <a name="DatabaseAutonomousContainerDatabase" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database oci_database_autonomous_container_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabase;

DatabaseAutonomousContainerDatabase.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .patchModel(java.lang.String)
//  .autonomousExadataInfrastructureId(java.lang.String)
//  .autonomousVmClusterId(java.lang.String)
//  .backupConfig(DatabaseAutonomousContainerDatabaseBackupConfig)
//  .cloudAutonomousVmClusterId(java.lang.String)
//  .compartmentId(java.lang.String)
//  .databaseSoftwareImageId(java.lang.String)
//  .dbName(java.lang.String)
//  .dbSplitThreshold(java.lang.Number)
//  .dbUniqueName(java.lang.String)
//  .dbVersion(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .distributionAffinity(java.lang.String)
//  .fastStartFailOverLagLimitInSeconds(java.lang.Number)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isAutomaticFailoverEnabled(java.lang.Boolean)
//  .isAutomaticFailoverEnabled(IResolvable)
//  .isDstFileUpdateEnabled(java.lang.Boolean)
//  .isDstFileUpdateEnabled(IResolvable)
//  .keyStoreId(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .maintenanceWindowDetails(DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails)
//  .netServicesArchitecture(java.lang.String)
//  .peerAutonomousContainerDatabaseBackupConfig(DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig)
//  .peerAutonomousContainerDatabaseCompartmentId(java.lang.String)
//  .peerAutonomousContainerDatabaseDisplayName(java.lang.String)
//  .peerAutonomousExadataInfrastructureId(java.lang.String)
//  .peerAutonomousVmClusterId(java.lang.String)
//  .peerCloudAutonomousVmClusterId(java.lang.String)
//  .peerDbUniqueName(java.lang.String)
//  .protectionMode(java.lang.String)
//  .rotateKeyTrigger(java.lang.Boolean)
//  .rotateKeyTrigger(IResolvable)
//  .serviceLevelAgreementType(java.lang.String)
//  .standbyMaintenanceBufferInDays(java.lang.Number)
//  .timeouts(DatabaseAutonomousContainerDatabaseTimeouts)
//  .vaultId(java.lang.String)
//  .versionPreference(java.lang.String)
//  .vmFailoverReservation(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#display_name DatabaseAutonomousContainerDatabase#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.patchModel">patchModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#patch_model DatabaseAutonomousContainerDatabase#patch_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.autonomousExadataInfrastructureId">autonomousExadataInfrastructureId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#autonomous_exadata_infrastructure_id DatabaseAutonomousContainerDatabase#autonomous_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.autonomousVmClusterId">autonomousVmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#autonomous_vm_cluster_id DatabaseAutonomousContainerDatabase#autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.backupConfig">backupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseBackupConfig</a></code> | backup_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.cloudAutonomousVmClusterId">cloudAutonomousVmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#cloud_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabase#cloud_autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#compartment_id DatabaseAutonomousContainerDatabase#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#database_software_image_id DatabaseAutonomousContainerDatabase#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.dbName">dbName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#db_name DatabaseAutonomousContainerDatabase#db_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.dbSplitThreshold">dbSplitThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#db_split_threshold DatabaseAutonomousContainerDatabase#db_split_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.dbUniqueName">dbUniqueName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#db_unique_name DatabaseAutonomousContainerDatabase#db_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#db_version DatabaseAutonomousContainerDatabase#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#defined_tags DatabaseAutonomousContainerDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.distributionAffinity">distributionAffinity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#distribution_affinity DatabaseAutonomousContainerDatabase#distribution_affinity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.fastStartFailOverLagLimitInSeconds">fastStartFailOverLagLimitInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#fast_start_fail_over_lag_limit_in_seconds DatabaseAutonomousContainerDatabase#fast_start_fail_over_lag_limit_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#freeform_tags DatabaseAutonomousContainerDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#id DatabaseAutonomousContainerDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.isAutomaticFailoverEnabled">isAutomaticFailoverEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#is_automatic_failover_enabled DatabaseAutonomousContainerDatabase#is_automatic_failover_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.isDstFileUpdateEnabled">isDstFileUpdateEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#is_dst_file_update_enabled DatabaseAutonomousContainerDatabase#is_dst_file_update_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.keyStoreId">keyStoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#key_store_id DatabaseAutonomousContainerDatabase#key_store_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#kms_key_id DatabaseAutonomousContainerDatabase#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.maintenanceWindowDetails">maintenanceWindowDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails</a></code> | maintenance_window_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.netServicesArchitecture">netServicesArchitecture</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#net_services_architecture DatabaseAutonomousContainerDatabase#net_services_architecture}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.peerAutonomousContainerDatabaseBackupConfig">peerAutonomousContainerDatabaseBackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig</a></code> | peer_autonomous_container_database_backup_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.peerAutonomousContainerDatabaseCompartmentId">peerAutonomousContainerDatabaseCompartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_autonomous_container_database_compartment_id DatabaseAutonomousContainerDatabase#peer_autonomous_container_database_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.peerAutonomousContainerDatabaseDisplayName">peerAutonomousContainerDatabaseDisplayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_autonomous_container_database_display_name DatabaseAutonomousContainerDatabase#peer_autonomous_container_database_display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.peerAutonomousExadataInfrastructureId">peerAutonomousExadataInfrastructureId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_autonomous_exadata_infrastructure_id DatabaseAutonomousContainerDatabase#peer_autonomous_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.peerAutonomousVmClusterId">peerAutonomousVmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabase#peer_autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.peerCloudAutonomousVmClusterId">peerCloudAutonomousVmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_cloud_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabase#peer_cloud_autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.peerDbUniqueName">peerDbUniqueName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_db_unique_name DatabaseAutonomousContainerDatabase#peer_db_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.protectionMode">protectionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#protection_mode DatabaseAutonomousContainerDatabase#protection_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.rotateKeyTrigger">rotateKeyTrigger</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#rotate_key_trigger DatabaseAutonomousContainerDatabase#rotate_key_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.serviceLevelAgreementType">serviceLevelAgreementType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#service_level_agreement_type DatabaseAutonomousContainerDatabase#service_level_agreement_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.standbyMaintenanceBufferInDays">standbyMaintenanceBufferInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#standby_maintenance_buffer_in_days DatabaseAutonomousContainerDatabase#standby_maintenance_buffer_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts">DatabaseAutonomousContainerDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.vaultId">vaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#vault_id DatabaseAutonomousContainerDatabase#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.versionPreference">versionPreference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#version_preference DatabaseAutonomousContainerDatabase#version_preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.vmFailoverReservation">vmFailoverReservation</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#vm_failover_reservation DatabaseAutonomousContainerDatabase#vm_failover_reservation}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#display_name DatabaseAutonomousContainerDatabase#display_name}.

---

##### `patchModel`<sup>Required</sup> <a name="patchModel" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.patchModel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#patch_model DatabaseAutonomousContainerDatabase#patch_model}.

---

##### `autonomousExadataInfrastructureId`<sup>Optional</sup> <a name="autonomousExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.autonomousExadataInfrastructureId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#autonomous_exadata_infrastructure_id DatabaseAutonomousContainerDatabase#autonomous_exadata_infrastructure_id}.

---

##### `autonomousVmClusterId`<sup>Optional</sup> <a name="autonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.autonomousVmClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#autonomous_vm_cluster_id DatabaseAutonomousContainerDatabase#autonomous_vm_cluster_id}.

---

##### `backupConfig`<sup>Optional</sup> <a name="backupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.backupConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseBackupConfig</a>

backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#backup_config DatabaseAutonomousContainerDatabase#backup_config}

---

##### `cloudAutonomousVmClusterId`<sup>Optional</sup> <a name="cloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.cloudAutonomousVmClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#cloud_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabase#cloud_autonomous_vm_cluster_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#compartment_id DatabaseAutonomousContainerDatabase#compartment_id}.

---

##### `databaseSoftwareImageId`<sup>Optional</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.databaseSoftwareImageId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#database_software_image_id DatabaseAutonomousContainerDatabase#database_software_image_id}.

---

##### `dbName`<sup>Optional</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.dbName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#db_name DatabaseAutonomousContainerDatabase#db_name}.

---

##### `dbSplitThreshold`<sup>Optional</sup> <a name="dbSplitThreshold" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.dbSplitThreshold"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#db_split_threshold DatabaseAutonomousContainerDatabase#db_split_threshold}.

---

##### `dbUniqueName`<sup>Optional</sup> <a name="dbUniqueName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.dbUniqueName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#db_unique_name DatabaseAutonomousContainerDatabase#db_unique_name}.

---

##### `dbVersion`<sup>Optional</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.dbVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#db_version DatabaseAutonomousContainerDatabase#db_version}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#defined_tags DatabaseAutonomousContainerDatabase#defined_tags}.

---

##### `distributionAffinity`<sup>Optional</sup> <a name="distributionAffinity" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.distributionAffinity"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#distribution_affinity DatabaseAutonomousContainerDatabase#distribution_affinity}.

---

##### `fastStartFailOverLagLimitInSeconds`<sup>Optional</sup> <a name="fastStartFailOverLagLimitInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.fastStartFailOverLagLimitInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#fast_start_fail_over_lag_limit_in_seconds DatabaseAutonomousContainerDatabase#fast_start_fail_over_lag_limit_in_seconds}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#freeform_tags DatabaseAutonomousContainerDatabase#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#id DatabaseAutonomousContainerDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAutomaticFailoverEnabled`<sup>Optional</sup> <a name="isAutomaticFailoverEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.isAutomaticFailoverEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#is_automatic_failover_enabled DatabaseAutonomousContainerDatabase#is_automatic_failover_enabled}.

---

##### `isDstFileUpdateEnabled`<sup>Optional</sup> <a name="isDstFileUpdateEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.isDstFileUpdateEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#is_dst_file_update_enabled DatabaseAutonomousContainerDatabase#is_dst_file_update_enabled}.

---

##### `keyStoreId`<sup>Optional</sup> <a name="keyStoreId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.keyStoreId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#key_store_id DatabaseAutonomousContainerDatabase#key_store_id}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#kms_key_id DatabaseAutonomousContainerDatabase#kms_key_id}.

---

##### `maintenanceWindowDetails`<sup>Optional</sup> <a name="maintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.maintenanceWindowDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails</a>

maintenance_window_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#maintenance_window_details DatabaseAutonomousContainerDatabase#maintenance_window_details}

---

##### `netServicesArchitecture`<sup>Optional</sup> <a name="netServicesArchitecture" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.netServicesArchitecture"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#net_services_architecture DatabaseAutonomousContainerDatabase#net_services_architecture}.

---

##### `peerAutonomousContainerDatabaseBackupConfig`<sup>Optional</sup> <a name="peerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.peerAutonomousContainerDatabaseBackupConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig</a>

peer_autonomous_container_database_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_autonomous_container_database_backup_config DatabaseAutonomousContainerDatabase#peer_autonomous_container_database_backup_config}

---

##### `peerAutonomousContainerDatabaseCompartmentId`<sup>Optional</sup> <a name="peerAutonomousContainerDatabaseCompartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.peerAutonomousContainerDatabaseCompartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_autonomous_container_database_compartment_id DatabaseAutonomousContainerDatabase#peer_autonomous_container_database_compartment_id}.

---

##### `peerAutonomousContainerDatabaseDisplayName`<sup>Optional</sup> <a name="peerAutonomousContainerDatabaseDisplayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.peerAutonomousContainerDatabaseDisplayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_autonomous_container_database_display_name DatabaseAutonomousContainerDatabase#peer_autonomous_container_database_display_name}.

---

##### `peerAutonomousExadataInfrastructureId`<sup>Optional</sup> <a name="peerAutonomousExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.peerAutonomousExadataInfrastructureId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_autonomous_exadata_infrastructure_id DatabaseAutonomousContainerDatabase#peer_autonomous_exadata_infrastructure_id}.

---

##### `peerAutonomousVmClusterId`<sup>Optional</sup> <a name="peerAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.peerAutonomousVmClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabase#peer_autonomous_vm_cluster_id}.

---

##### `peerCloudAutonomousVmClusterId`<sup>Optional</sup> <a name="peerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.peerCloudAutonomousVmClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_cloud_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabase#peer_cloud_autonomous_vm_cluster_id}.

---

##### `peerDbUniqueName`<sup>Optional</sup> <a name="peerDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.peerDbUniqueName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_db_unique_name DatabaseAutonomousContainerDatabase#peer_db_unique_name}.

---

##### `protectionMode`<sup>Optional</sup> <a name="protectionMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.protectionMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#protection_mode DatabaseAutonomousContainerDatabase#protection_mode}.

---

##### `rotateKeyTrigger`<sup>Optional</sup> <a name="rotateKeyTrigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.rotateKeyTrigger"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#rotate_key_trigger DatabaseAutonomousContainerDatabase#rotate_key_trigger}.

---

##### `serviceLevelAgreementType`<sup>Optional</sup> <a name="serviceLevelAgreementType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.serviceLevelAgreementType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#service_level_agreement_type DatabaseAutonomousContainerDatabase#service_level_agreement_type}.

---

##### `standbyMaintenanceBufferInDays`<sup>Optional</sup> <a name="standbyMaintenanceBufferInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.standbyMaintenanceBufferInDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#standby_maintenance_buffer_in_days DatabaseAutonomousContainerDatabase#standby_maintenance_buffer_in_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts">DatabaseAutonomousContainerDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#timeouts DatabaseAutonomousContainerDatabase#timeouts}

---

##### `vaultId`<sup>Optional</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.vaultId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#vault_id DatabaseAutonomousContainerDatabase#vault_id}.

---

##### `versionPreference`<sup>Optional</sup> <a name="versionPreference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.versionPreference"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#version_preference DatabaseAutonomousContainerDatabase#version_preference}.

---

##### `vmFailoverReservation`<sup>Optional</sup> <a name="vmFailoverReservation" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.vmFailoverReservation"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#vm_failover_reservation DatabaseAutonomousContainerDatabase#vm_failover_reservation}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.putBackupConfig">putBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.putMaintenanceWindowDetails">putMaintenanceWindowDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.putPeerAutonomousContainerDatabaseBackupConfig">putPeerAutonomousContainerDatabaseBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetAutonomousExadataInfrastructureId">resetAutonomousExadataInfrastructureId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetAutonomousVmClusterId">resetAutonomousVmClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetBackupConfig">resetBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetCloudAutonomousVmClusterId">resetCloudAutonomousVmClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetDatabaseSoftwareImageId">resetDatabaseSoftwareImageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetDbName">resetDbName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetDbSplitThreshold">resetDbSplitThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetDbUniqueName">resetDbUniqueName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetDbVersion">resetDbVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetDistributionAffinity">resetDistributionAffinity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetFastStartFailOverLagLimitInSeconds">resetFastStartFailOverLagLimitInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetIsAutomaticFailoverEnabled">resetIsAutomaticFailoverEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetIsDstFileUpdateEnabled">resetIsDstFileUpdateEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetKeyStoreId">resetKeyStoreId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetMaintenanceWindowDetails">resetMaintenanceWindowDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetNetServicesArchitecture">resetNetServicesArchitecture</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetPeerAutonomousContainerDatabaseBackupConfig">resetPeerAutonomousContainerDatabaseBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetPeerAutonomousContainerDatabaseCompartmentId">resetPeerAutonomousContainerDatabaseCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetPeerAutonomousContainerDatabaseDisplayName">resetPeerAutonomousContainerDatabaseDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetPeerAutonomousExadataInfrastructureId">resetPeerAutonomousExadataInfrastructureId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetPeerAutonomousVmClusterId">resetPeerAutonomousVmClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetPeerCloudAutonomousVmClusterId">resetPeerCloudAutonomousVmClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetPeerDbUniqueName">resetPeerDbUniqueName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetProtectionMode">resetProtectionMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetRotateKeyTrigger">resetRotateKeyTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetServiceLevelAgreementType">resetServiceLevelAgreementType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetStandbyMaintenanceBufferInDays">resetStandbyMaintenanceBufferInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetVaultId">resetVaultId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetVersionPreference">resetVersionPreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetVmFailoverReservation">resetVmFailoverReservation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupConfig` <a name="putBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.putBackupConfig"></a>

```java
public void putBackupConfig(DatabaseAutonomousContainerDatabaseBackupConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.putBackupConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseBackupConfig</a>

---

##### `putMaintenanceWindowDetails` <a name="putMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.putMaintenanceWindowDetails"></a>

```java
public void putMaintenanceWindowDetails(DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.putMaintenanceWindowDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails</a>

---

##### `putPeerAutonomousContainerDatabaseBackupConfig` <a name="putPeerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.putPeerAutonomousContainerDatabaseBackupConfig"></a>

```java
public void putPeerAutonomousContainerDatabaseBackupConfig(DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.putPeerAutonomousContainerDatabaseBackupConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.putTimeouts"></a>

```java
public void putTimeouts(DatabaseAutonomousContainerDatabaseTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts">DatabaseAutonomousContainerDatabaseTimeouts</a>

---

##### `resetAutonomousExadataInfrastructureId` <a name="resetAutonomousExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetAutonomousExadataInfrastructureId"></a>

```java
public void resetAutonomousExadataInfrastructureId()
```

##### `resetAutonomousVmClusterId` <a name="resetAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetAutonomousVmClusterId"></a>

```java
public void resetAutonomousVmClusterId()
```

##### `resetBackupConfig` <a name="resetBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetBackupConfig"></a>

```java
public void resetBackupConfig()
```

##### `resetCloudAutonomousVmClusterId` <a name="resetCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetCloudAutonomousVmClusterId"></a>

```java
public void resetCloudAutonomousVmClusterId()
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetDatabaseSoftwareImageId` <a name="resetDatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetDatabaseSoftwareImageId"></a>

```java
public void resetDatabaseSoftwareImageId()
```

##### `resetDbName` <a name="resetDbName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetDbName"></a>

```java
public void resetDbName()
```

##### `resetDbSplitThreshold` <a name="resetDbSplitThreshold" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetDbSplitThreshold"></a>

```java
public void resetDbSplitThreshold()
```

##### `resetDbUniqueName` <a name="resetDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetDbUniqueName"></a>

```java
public void resetDbUniqueName()
```

##### `resetDbVersion` <a name="resetDbVersion" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetDbVersion"></a>

```java
public void resetDbVersion()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDistributionAffinity` <a name="resetDistributionAffinity" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetDistributionAffinity"></a>

```java
public void resetDistributionAffinity()
```

##### `resetFastStartFailOverLagLimitInSeconds` <a name="resetFastStartFailOverLagLimitInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetFastStartFailOverLagLimitInSeconds"></a>

```java
public void resetFastStartFailOverLagLimitInSeconds()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetId"></a>

```java
public void resetId()
```

##### `resetIsAutomaticFailoverEnabled` <a name="resetIsAutomaticFailoverEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetIsAutomaticFailoverEnabled"></a>

```java
public void resetIsAutomaticFailoverEnabled()
```

##### `resetIsDstFileUpdateEnabled` <a name="resetIsDstFileUpdateEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetIsDstFileUpdateEnabled"></a>

```java
public void resetIsDstFileUpdateEnabled()
```

##### `resetKeyStoreId` <a name="resetKeyStoreId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetKeyStoreId"></a>

```java
public void resetKeyStoreId()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetMaintenanceWindowDetails` <a name="resetMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetMaintenanceWindowDetails"></a>

```java
public void resetMaintenanceWindowDetails()
```

##### `resetNetServicesArchitecture` <a name="resetNetServicesArchitecture" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetNetServicesArchitecture"></a>

```java
public void resetNetServicesArchitecture()
```

##### `resetPeerAutonomousContainerDatabaseBackupConfig` <a name="resetPeerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetPeerAutonomousContainerDatabaseBackupConfig"></a>

```java
public void resetPeerAutonomousContainerDatabaseBackupConfig()
```

##### `resetPeerAutonomousContainerDatabaseCompartmentId` <a name="resetPeerAutonomousContainerDatabaseCompartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetPeerAutonomousContainerDatabaseCompartmentId"></a>

```java
public void resetPeerAutonomousContainerDatabaseCompartmentId()
```

##### `resetPeerAutonomousContainerDatabaseDisplayName` <a name="resetPeerAutonomousContainerDatabaseDisplayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetPeerAutonomousContainerDatabaseDisplayName"></a>

```java
public void resetPeerAutonomousContainerDatabaseDisplayName()
```

##### `resetPeerAutonomousExadataInfrastructureId` <a name="resetPeerAutonomousExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetPeerAutonomousExadataInfrastructureId"></a>

```java
public void resetPeerAutonomousExadataInfrastructureId()
```

##### `resetPeerAutonomousVmClusterId` <a name="resetPeerAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetPeerAutonomousVmClusterId"></a>

```java
public void resetPeerAutonomousVmClusterId()
```

##### `resetPeerCloudAutonomousVmClusterId` <a name="resetPeerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetPeerCloudAutonomousVmClusterId"></a>

```java
public void resetPeerCloudAutonomousVmClusterId()
```

##### `resetPeerDbUniqueName` <a name="resetPeerDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetPeerDbUniqueName"></a>

```java
public void resetPeerDbUniqueName()
```

##### `resetProtectionMode` <a name="resetProtectionMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetProtectionMode"></a>

```java
public void resetProtectionMode()
```

##### `resetRotateKeyTrigger` <a name="resetRotateKeyTrigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetRotateKeyTrigger"></a>

```java
public void resetRotateKeyTrigger()
```

##### `resetServiceLevelAgreementType` <a name="resetServiceLevelAgreementType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetServiceLevelAgreementType"></a>

```java
public void resetServiceLevelAgreementType()
```

##### `resetStandbyMaintenanceBufferInDays` <a name="resetStandbyMaintenanceBufferInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetStandbyMaintenanceBufferInDays"></a>

```java
public void resetStandbyMaintenanceBufferInDays()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVaultId` <a name="resetVaultId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetVaultId"></a>

```java
public void resetVaultId()
```

##### `resetVersionPreference` <a name="resetVersionPreference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetVersionPreference"></a>

```java
public void resetVersionPreference()
```

##### `resetVmFailoverReservation` <a name="resetVmFailoverReservation" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetVmFailoverReservation"></a>

```java
public void resetVmFailoverReservation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseAutonomousContainerDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabase;

DatabaseAutonomousContainerDatabase.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabase;

DatabaseAutonomousContainerDatabase.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabase;

DatabaseAutonomousContainerDatabase.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabase;

DatabaseAutonomousContainerDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseAutonomousContainerDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseAutonomousContainerDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseAutonomousContainerDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseAutonomousContainerDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousContainerDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.availableCpus">availableCpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.backupConfig">backupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference">DatabaseAutonomousContainerDatabaseBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.computeModel">computeModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dstFileVersion">dstFileVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.infrastructureType">infrastructureType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.keyHistoryEntry">keyHistoryEntry</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList">DatabaseAutonomousContainerDatabaseKeyHistoryEntryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.keyStoreWalletName">keyStoreWalletName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.largestProvisionableAutonomousDatabaseInCpus">largestProvisionableAutonomousDatabaseInCpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.lastMaintenanceRunId">lastMaintenanceRunId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.listOneOffPatches">listOneOffPatches</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList">DatabaseAutonomousContainerDatabaseMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.maintenanceWindowDetails">maintenanceWindowDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.memoryPerOracleComputeUnitInGbs">memoryPerOracleComputeUnitInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.nextMaintenanceRunId">nextMaintenanceRunId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.patchId">patchId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseBackupConfig">peerAutonomousContainerDatabaseBackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.provisionableCpus">provisionableCpus</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.provisionedCpus">provisionedCpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.reclaimableCpus">reclaimableCpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.reservedCpus">reservedCpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.timeOfLastBackup">timeOfLastBackup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference">DatabaseAutonomousContainerDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.timeSnapshotStandbyRevert">timeSnapshotStandbyRevert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.totalCpus">totalCpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.autonomousExadataInfrastructureIdInput">autonomousExadataInfrastructureIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.autonomousVmClusterIdInput">autonomousVmClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.backupConfigInput">backupConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.cloudAutonomousVmClusterIdInput">cloudAutonomousVmClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.databaseSoftwareImageIdInput">databaseSoftwareImageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbNameInput">dbNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbSplitThresholdInput">dbSplitThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbUniqueNameInput">dbUniqueNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbVersionInput">dbVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.distributionAffinityInput">distributionAffinityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.fastStartFailOverLagLimitInSecondsInput">fastStartFailOverLagLimitInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.isAutomaticFailoverEnabledInput">isAutomaticFailoverEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.isDstFileUpdateEnabledInput">isDstFileUpdateEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.keyStoreIdInput">keyStoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.maintenanceWindowDetailsInput">maintenanceWindowDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.netServicesArchitectureInput">netServicesArchitectureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.patchModelInput">patchModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseBackupConfigInput">peerAutonomousContainerDatabaseBackupConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseCompartmentIdInput">peerAutonomousContainerDatabaseCompartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseDisplayNameInput">peerAutonomousContainerDatabaseDisplayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousExadataInfrastructureIdInput">peerAutonomousExadataInfrastructureIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousVmClusterIdInput">peerAutonomousVmClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerCloudAutonomousVmClusterIdInput">peerCloudAutonomousVmClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerDbUniqueNameInput">peerDbUniqueNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.protectionModeInput">protectionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.rotateKeyTriggerInput">rotateKeyTriggerInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.serviceLevelAgreementTypeInput">serviceLevelAgreementTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.standbyMaintenanceBufferInDaysInput">standbyMaintenanceBufferInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts">DatabaseAutonomousContainerDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.vaultIdInput">vaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.versionPreferenceInput">versionPreferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.vmFailoverReservationInput">vmFailoverReservationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.autonomousExadataInfrastructureId">autonomousExadataInfrastructureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.autonomousVmClusterId">autonomousVmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.cloudAutonomousVmClusterId">cloudAutonomousVmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbName">dbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbSplitThreshold">dbSplitThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbUniqueName">dbUniqueName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.distributionAffinity">distributionAffinity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.fastStartFailOverLagLimitInSeconds">fastStartFailOverLagLimitInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.isAutomaticFailoverEnabled">isAutomaticFailoverEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.isDstFileUpdateEnabled">isDstFileUpdateEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.keyStoreId">keyStoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.netServicesArchitecture">netServicesArchitecture</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.patchModel">patchModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseCompartmentId">peerAutonomousContainerDatabaseCompartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseDisplayName">peerAutonomousContainerDatabaseDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousExadataInfrastructureId">peerAutonomousExadataInfrastructureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousVmClusterId">peerAutonomousVmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerCloudAutonomousVmClusterId">peerCloudAutonomousVmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerDbUniqueName">peerDbUniqueName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.protectionMode">protectionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.rotateKeyTrigger">rotateKeyTrigger</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.serviceLevelAgreementType">serviceLevelAgreementType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.standbyMaintenanceBufferInDays">standbyMaintenanceBufferInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.versionPreference">versionPreference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.vmFailoverReservation">vmFailoverReservation</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `availableCpus`<sup>Required</sup> <a name="availableCpus" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.availableCpus"></a>

```java
public java.lang.Number getAvailableCpus();
```

- *Type:* java.lang.Number

---

##### `backupConfig`<sup>Required</sup> <a name="backupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.backupConfig"></a>

```java
public DatabaseAutonomousContainerDatabaseBackupConfigOutputReference getBackupConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference">DatabaseAutonomousContainerDatabaseBackupConfigOutputReference</a>

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.computeModel"></a>

```java
public java.lang.String getComputeModel();
```

- *Type:* java.lang.String

---

##### `dstFileVersion`<sup>Required</sup> <a name="dstFileVersion" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dstFileVersion"></a>

```java
public java.lang.String getDstFileVersion();
```

- *Type:* java.lang.String

---

##### `infrastructureType`<sup>Required</sup> <a name="infrastructureType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.infrastructureType"></a>

```java
public java.lang.String getInfrastructureType();
```

- *Type:* java.lang.String

---

##### `keyHistoryEntry`<sup>Required</sup> <a name="keyHistoryEntry" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.keyHistoryEntry"></a>

```java
public DatabaseAutonomousContainerDatabaseKeyHistoryEntryList getKeyHistoryEntry();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList">DatabaseAutonomousContainerDatabaseKeyHistoryEntryList</a>

---

##### `keyStoreWalletName`<sup>Required</sup> <a name="keyStoreWalletName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.keyStoreWalletName"></a>

```java
public java.lang.String getKeyStoreWalletName();
```

- *Type:* java.lang.String

---

##### `largestProvisionableAutonomousDatabaseInCpus`<sup>Required</sup> <a name="largestProvisionableAutonomousDatabaseInCpus" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.largestProvisionableAutonomousDatabaseInCpus"></a>

```java
public java.lang.Number getLargestProvisionableAutonomousDatabaseInCpus();
```

- *Type:* java.lang.Number

---

##### `lastMaintenanceRunId`<sup>Required</sup> <a name="lastMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.lastMaintenanceRunId"></a>

```java
public java.lang.String getLastMaintenanceRunId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `listOneOffPatches`<sup>Required</sup> <a name="listOneOffPatches" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.listOneOffPatches"></a>

```java
public java.util.List<java.lang.String> getListOneOffPatches();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.maintenanceWindow"></a>

```java
public DatabaseAutonomousContainerDatabaseMaintenanceWindowList getMaintenanceWindow();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList">DatabaseAutonomousContainerDatabaseMaintenanceWindowList</a>

---

##### `maintenanceWindowDetails`<sup>Required</sup> <a name="maintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.maintenanceWindowDetails"></a>

```java
public DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference getMaintenanceWindowDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference</a>

---

##### `memoryPerOracleComputeUnitInGbs`<sup>Required</sup> <a name="memoryPerOracleComputeUnitInGbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.memoryPerOracleComputeUnitInGbs"></a>

```java
public java.lang.Number getMemoryPerOracleComputeUnitInGbs();
```

- *Type:* java.lang.Number

---

##### `nextMaintenanceRunId`<sup>Required</sup> <a name="nextMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.nextMaintenanceRunId"></a>

```java
public java.lang.String getNextMaintenanceRunId();
```

- *Type:* java.lang.String

---

##### `patchId`<sup>Required</sup> <a name="patchId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.patchId"></a>

```java
public java.lang.String getPatchId();
```

- *Type:* java.lang.String

---

##### `peerAutonomousContainerDatabaseBackupConfig`<sup>Required</sup> <a name="peerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseBackupConfig"></a>

```java
public DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference getPeerAutonomousContainerDatabaseBackupConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference</a>

---

##### `provisionableCpus`<sup>Required</sup> <a name="provisionableCpus" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.provisionableCpus"></a>

```java
public java.util.List<java.lang.Number> getProvisionableCpus();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `provisionedCpus`<sup>Required</sup> <a name="provisionedCpus" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.provisionedCpus"></a>

```java
public java.lang.Number getProvisionedCpus();
```

- *Type:* java.lang.Number

---

##### `reclaimableCpus`<sup>Required</sup> <a name="reclaimableCpus" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.reclaimableCpus"></a>

```java
public java.lang.Number getReclaimableCpus();
```

- *Type:* java.lang.Number

---

##### `reservedCpus`<sup>Required</sup> <a name="reservedCpus" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.reservedCpus"></a>

```java
public java.lang.Number getReservedCpus();
```

- *Type:* java.lang.Number

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeOfLastBackup`<sup>Required</sup> <a name="timeOfLastBackup" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.timeOfLastBackup"></a>

```java
public java.lang.String getTimeOfLastBackup();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.timeouts"></a>

```java
public DatabaseAutonomousContainerDatabaseTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference">DatabaseAutonomousContainerDatabaseTimeoutsOutputReference</a>

---

##### `timeSnapshotStandbyRevert`<sup>Required</sup> <a name="timeSnapshotStandbyRevert" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.timeSnapshotStandbyRevert"></a>

```java
public java.lang.String getTimeSnapshotStandbyRevert();
```

- *Type:* java.lang.String

---

##### `totalCpus`<sup>Required</sup> <a name="totalCpus" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.totalCpus"></a>

```java
public java.lang.Number getTotalCpus();
```

- *Type:* java.lang.Number

---

##### `autonomousExadataInfrastructureIdInput`<sup>Optional</sup> <a name="autonomousExadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.autonomousExadataInfrastructureIdInput"></a>

```java
public java.lang.String getAutonomousExadataInfrastructureIdInput();
```

- *Type:* java.lang.String

---

##### `autonomousVmClusterIdInput`<sup>Optional</sup> <a name="autonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.autonomousVmClusterIdInput"></a>

```java
public java.lang.String getAutonomousVmClusterIdInput();
```

- *Type:* java.lang.String

---

##### `backupConfigInput`<sup>Optional</sup> <a name="backupConfigInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.backupConfigInput"></a>

```java
public DatabaseAutonomousContainerDatabaseBackupConfig getBackupConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseBackupConfig</a>

---

##### `cloudAutonomousVmClusterIdInput`<sup>Optional</sup> <a name="cloudAutonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.cloudAutonomousVmClusterIdInput"></a>

```java
public java.lang.String getCloudAutonomousVmClusterIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `databaseSoftwareImageIdInput`<sup>Optional</sup> <a name="databaseSoftwareImageIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.databaseSoftwareImageIdInput"></a>

```java
public java.lang.String getDatabaseSoftwareImageIdInput();
```

- *Type:* java.lang.String

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbNameInput"></a>

```java
public java.lang.String getDbNameInput();
```

- *Type:* java.lang.String

---

##### `dbSplitThresholdInput`<sup>Optional</sup> <a name="dbSplitThresholdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbSplitThresholdInput"></a>

```java
public java.lang.Number getDbSplitThresholdInput();
```

- *Type:* java.lang.Number

---

##### `dbUniqueNameInput`<sup>Optional</sup> <a name="dbUniqueNameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbUniqueNameInput"></a>

```java
public java.lang.String getDbUniqueNameInput();
```

- *Type:* java.lang.String

---

##### `dbVersionInput`<sup>Optional</sup> <a name="dbVersionInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbVersionInput"></a>

```java
public java.lang.String getDbVersionInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `distributionAffinityInput`<sup>Optional</sup> <a name="distributionAffinityInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.distributionAffinityInput"></a>

```java
public java.lang.String getDistributionAffinityInput();
```

- *Type:* java.lang.String

---

##### `fastStartFailOverLagLimitInSecondsInput`<sup>Optional</sup> <a name="fastStartFailOverLagLimitInSecondsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.fastStartFailOverLagLimitInSecondsInput"></a>

```java
public java.lang.Number getFastStartFailOverLagLimitInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isAutomaticFailoverEnabledInput`<sup>Optional</sup> <a name="isAutomaticFailoverEnabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.isAutomaticFailoverEnabledInput"></a>

```java
public java.lang.Object getIsAutomaticFailoverEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isDstFileUpdateEnabledInput`<sup>Optional</sup> <a name="isDstFileUpdateEnabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.isDstFileUpdateEnabledInput"></a>

```java
public java.lang.Object getIsDstFileUpdateEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyStoreIdInput`<sup>Optional</sup> <a name="keyStoreIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.keyStoreIdInput"></a>

```java
public java.lang.String getKeyStoreIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowDetailsInput`<sup>Optional</sup> <a name="maintenanceWindowDetailsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.maintenanceWindowDetailsInput"></a>

```java
public DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails getMaintenanceWindowDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails</a>

---

##### `netServicesArchitectureInput`<sup>Optional</sup> <a name="netServicesArchitectureInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.netServicesArchitectureInput"></a>

```java
public java.lang.String getNetServicesArchitectureInput();
```

- *Type:* java.lang.String

---

##### `patchModelInput`<sup>Optional</sup> <a name="patchModelInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.patchModelInput"></a>

```java
public java.lang.String getPatchModelInput();
```

- *Type:* java.lang.String

---

##### `peerAutonomousContainerDatabaseBackupConfigInput`<sup>Optional</sup> <a name="peerAutonomousContainerDatabaseBackupConfigInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseBackupConfigInput"></a>

```java
public DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig getPeerAutonomousContainerDatabaseBackupConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig</a>

---

##### `peerAutonomousContainerDatabaseCompartmentIdInput`<sup>Optional</sup> <a name="peerAutonomousContainerDatabaseCompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseCompartmentIdInput"></a>

```java
public java.lang.String getPeerAutonomousContainerDatabaseCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `peerAutonomousContainerDatabaseDisplayNameInput`<sup>Optional</sup> <a name="peerAutonomousContainerDatabaseDisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseDisplayNameInput"></a>

```java
public java.lang.String getPeerAutonomousContainerDatabaseDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `peerAutonomousExadataInfrastructureIdInput`<sup>Optional</sup> <a name="peerAutonomousExadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousExadataInfrastructureIdInput"></a>

```java
public java.lang.String getPeerAutonomousExadataInfrastructureIdInput();
```

- *Type:* java.lang.String

---

##### `peerAutonomousVmClusterIdInput`<sup>Optional</sup> <a name="peerAutonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousVmClusterIdInput"></a>

```java
public java.lang.String getPeerAutonomousVmClusterIdInput();
```

- *Type:* java.lang.String

---

##### `peerCloudAutonomousVmClusterIdInput`<sup>Optional</sup> <a name="peerCloudAutonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerCloudAutonomousVmClusterIdInput"></a>

```java
public java.lang.String getPeerCloudAutonomousVmClusterIdInput();
```

- *Type:* java.lang.String

---

##### `peerDbUniqueNameInput`<sup>Optional</sup> <a name="peerDbUniqueNameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerDbUniqueNameInput"></a>

```java
public java.lang.String getPeerDbUniqueNameInput();
```

- *Type:* java.lang.String

---

##### `protectionModeInput`<sup>Optional</sup> <a name="protectionModeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.protectionModeInput"></a>

```java
public java.lang.String getProtectionModeInput();
```

- *Type:* java.lang.String

---

##### `rotateKeyTriggerInput`<sup>Optional</sup> <a name="rotateKeyTriggerInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.rotateKeyTriggerInput"></a>

```java
public java.lang.Object getRotateKeyTriggerInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceLevelAgreementTypeInput`<sup>Optional</sup> <a name="serviceLevelAgreementTypeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.serviceLevelAgreementTypeInput"></a>

```java
public java.lang.String getServiceLevelAgreementTypeInput();
```

- *Type:* java.lang.String

---

##### `standbyMaintenanceBufferInDaysInput`<sup>Optional</sup> <a name="standbyMaintenanceBufferInDaysInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.standbyMaintenanceBufferInDaysInput"></a>

```java
public java.lang.Number getStandbyMaintenanceBufferInDaysInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts">DatabaseAutonomousContainerDatabaseTimeouts</a>

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.vaultIdInput"></a>

```java
public java.lang.String getVaultIdInput();
```

- *Type:* java.lang.String

---

##### `versionPreferenceInput`<sup>Optional</sup> <a name="versionPreferenceInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.versionPreferenceInput"></a>

```java
public java.lang.String getVersionPreferenceInput();
```

- *Type:* java.lang.String

---

##### `vmFailoverReservationInput`<sup>Optional</sup> <a name="vmFailoverReservationInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.vmFailoverReservationInput"></a>

```java
public java.lang.Number getVmFailoverReservationInput();
```

- *Type:* java.lang.Number

---

##### `autonomousExadataInfrastructureId`<sup>Required</sup> <a name="autonomousExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.autonomousExadataInfrastructureId"></a>

```java
public java.lang.String getAutonomousExadataInfrastructureId();
```

- *Type:* java.lang.String

---

##### `autonomousVmClusterId`<sup>Required</sup> <a name="autonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.autonomousVmClusterId"></a>

```java
public java.lang.String getAutonomousVmClusterId();
```

- *Type:* java.lang.String

---

##### `cloudAutonomousVmClusterId`<sup>Required</sup> <a name="cloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.cloudAutonomousVmClusterId"></a>

```java
public java.lang.String getCloudAutonomousVmClusterId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `databaseSoftwareImageId`<sup>Required</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.databaseSoftwareImageId"></a>

```java
public java.lang.String getDatabaseSoftwareImageId();
```

- *Type:* java.lang.String

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

---

##### `dbSplitThreshold`<sup>Required</sup> <a name="dbSplitThreshold" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbSplitThreshold"></a>

```java
public java.lang.Number getDbSplitThreshold();
```

- *Type:* java.lang.Number

---

##### `dbUniqueName`<sup>Required</sup> <a name="dbUniqueName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbUniqueName"></a>

```java
public java.lang.String getDbUniqueName();
```

- *Type:* java.lang.String

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbVersion"></a>

```java
public java.lang.String getDbVersion();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `distributionAffinity`<sup>Required</sup> <a name="distributionAffinity" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.distributionAffinity"></a>

```java
public java.lang.String getDistributionAffinity();
```

- *Type:* java.lang.String

---

##### `fastStartFailOverLagLimitInSeconds`<sup>Required</sup> <a name="fastStartFailOverLagLimitInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.fastStartFailOverLagLimitInSeconds"></a>

```java
public java.lang.Number getFastStartFailOverLagLimitInSeconds();
```

- *Type:* java.lang.Number

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isAutomaticFailoverEnabled`<sup>Required</sup> <a name="isAutomaticFailoverEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.isAutomaticFailoverEnabled"></a>

```java
public java.lang.Object getIsAutomaticFailoverEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isDstFileUpdateEnabled`<sup>Required</sup> <a name="isDstFileUpdateEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.isDstFileUpdateEnabled"></a>

```java
public java.lang.Object getIsDstFileUpdateEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyStoreId`<sup>Required</sup> <a name="keyStoreId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.keyStoreId"></a>

```java
public java.lang.String getKeyStoreId();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `netServicesArchitecture`<sup>Required</sup> <a name="netServicesArchitecture" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.netServicesArchitecture"></a>

```java
public java.lang.String getNetServicesArchitecture();
```

- *Type:* java.lang.String

---

##### `patchModel`<sup>Required</sup> <a name="patchModel" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.patchModel"></a>

```java
public java.lang.String getPatchModel();
```

- *Type:* java.lang.String

---

##### `peerAutonomousContainerDatabaseCompartmentId`<sup>Required</sup> <a name="peerAutonomousContainerDatabaseCompartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseCompartmentId"></a>

```java
public java.lang.String getPeerAutonomousContainerDatabaseCompartmentId();
```

- *Type:* java.lang.String

---

##### `peerAutonomousContainerDatabaseDisplayName`<sup>Required</sup> <a name="peerAutonomousContainerDatabaseDisplayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseDisplayName"></a>

```java
public java.lang.String getPeerAutonomousContainerDatabaseDisplayName();
```

- *Type:* java.lang.String

---

##### `peerAutonomousExadataInfrastructureId`<sup>Required</sup> <a name="peerAutonomousExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousExadataInfrastructureId"></a>

```java
public java.lang.String getPeerAutonomousExadataInfrastructureId();
```

- *Type:* java.lang.String

---

##### `peerAutonomousVmClusterId`<sup>Required</sup> <a name="peerAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousVmClusterId"></a>

```java
public java.lang.String getPeerAutonomousVmClusterId();
```

- *Type:* java.lang.String

---

##### `peerCloudAutonomousVmClusterId`<sup>Required</sup> <a name="peerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerCloudAutonomousVmClusterId"></a>

```java
public java.lang.String getPeerCloudAutonomousVmClusterId();
```

- *Type:* java.lang.String

---

##### `peerDbUniqueName`<sup>Required</sup> <a name="peerDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerDbUniqueName"></a>

```java
public java.lang.String getPeerDbUniqueName();
```

- *Type:* java.lang.String

---

##### `protectionMode`<sup>Required</sup> <a name="protectionMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.protectionMode"></a>

```java
public java.lang.String getProtectionMode();
```

- *Type:* java.lang.String

---

##### `rotateKeyTrigger`<sup>Required</sup> <a name="rotateKeyTrigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.rotateKeyTrigger"></a>

```java
public java.lang.Object getRotateKeyTrigger();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceLevelAgreementType`<sup>Required</sup> <a name="serviceLevelAgreementType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.serviceLevelAgreementType"></a>

```java
public java.lang.String getServiceLevelAgreementType();
```

- *Type:* java.lang.String

---

##### `standbyMaintenanceBufferInDays`<sup>Required</sup> <a name="standbyMaintenanceBufferInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.standbyMaintenanceBufferInDays"></a>

```java
public java.lang.Number getStandbyMaintenanceBufferInDays();
```

- *Type:* java.lang.Number

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

---

##### `versionPreference`<sup>Required</sup> <a name="versionPreference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.versionPreference"></a>

```java
public java.lang.String getVersionPreference();
```

- *Type:* java.lang.String

---

##### `vmFailoverReservation`<sup>Required</sup> <a name="vmFailoverReservation" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.vmFailoverReservation"></a>

```java
public java.lang.Number getVmFailoverReservation();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousContainerDatabaseBackupConfig <a name="DatabaseAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabaseBackupConfig;

DatabaseAutonomousContainerDatabaseBackupConfig.builder()
//  .backupDestinationDetails(DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails)
//  .recoveryWindowInDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig.property.backupDestinationDetails">backupDestinationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a></code> | backup_destination_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig.property.recoveryWindowInDays">recoveryWindowInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#recovery_window_in_days DatabaseAutonomousContainerDatabase#recovery_window_in_days}. |

---

##### `backupDestinationDetails`<sup>Optional</sup> <a name="backupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig.property.backupDestinationDetails"></a>

```java
public DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails getBackupDestinationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>

backup_destination_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#backup_destination_details DatabaseAutonomousContainerDatabase#backup_destination_details}

---

##### `recoveryWindowInDays`<sup>Optional</sup> <a name="recoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig.property.recoveryWindowInDays"></a>

```java
public java.lang.Number getRecoveryWindowInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#recovery_window_in_days DatabaseAutonomousContainerDatabase#recovery_window_in_days}.

---

### DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails <a name="DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails;

DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.builder()
    .type(java.lang.String)
//  .id(java.lang.String)
//  .internetProxy(java.lang.String)
//  .vpcPassword(java.lang.String)
//  .vpcUser(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#type DatabaseAutonomousContainerDatabase#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#id DatabaseAutonomousContainerDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.internetProxy">internetProxy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#internet_proxy DatabaseAutonomousContainerDatabase#internet_proxy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.vpcPassword">vpcPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#vpc_password DatabaseAutonomousContainerDatabase#vpc_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.vpcUser">vpcUser</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#vpc_user DatabaseAutonomousContainerDatabase#vpc_user}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#type DatabaseAutonomousContainerDatabase#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#id DatabaseAutonomousContainerDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internetProxy`<sup>Optional</sup> <a name="internetProxy" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.internetProxy"></a>

```java
public java.lang.String getInternetProxy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#internet_proxy DatabaseAutonomousContainerDatabase#internet_proxy}.

---

##### `vpcPassword`<sup>Optional</sup> <a name="vpcPassword" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.vpcPassword"></a>

```java
public java.lang.String getVpcPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#vpc_password DatabaseAutonomousContainerDatabase#vpc_password}.

---

##### `vpcUser`<sup>Optional</sup> <a name="vpcUser" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.vpcUser"></a>

```java
public java.lang.String getVpcUser();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#vpc_user DatabaseAutonomousContainerDatabase#vpc_user}.

---

### DatabaseAutonomousContainerDatabaseConfig <a name="DatabaseAutonomousContainerDatabaseConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabaseConfig;

DatabaseAutonomousContainerDatabaseConfig.builder()
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
    .displayName(java.lang.String)
    .patchModel(java.lang.String)
//  .autonomousExadataInfrastructureId(java.lang.String)
//  .autonomousVmClusterId(java.lang.String)
//  .backupConfig(DatabaseAutonomousContainerDatabaseBackupConfig)
//  .cloudAutonomousVmClusterId(java.lang.String)
//  .compartmentId(java.lang.String)
//  .databaseSoftwareImageId(java.lang.String)
//  .dbName(java.lang.String)
//  .dbSplitThreshold(java.lang.Number)
//  .dbUniqueName(java.lang.String)
//  .dbVersion(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .distributionAffinity(java.lang.String)
//  .fastStartFailOverLagLimitInSeconds(java.lang.Number)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isAutomaticFailoverEnabled(java.lang.Boolean)
//  .isAutomaticFailoverEnabled(IResolvable)
//  .isDstFileUpdateEnabled(java.lang.Boolean)
//  .isDstFileUpdateEnabled(IResolvable)
//  .keyStoreId(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .maintenanceWindowDetails(DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails)
//  .netServicesArchitecture(java.lang.String)
//  .peerAutonomousContainerDatabaseBackupConfig(DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig)
//  .peerAutonomousContainerDatabaseCompartmentId(java.lang.String)
//  .peerAutonomousContainerDatabaseDisplayName(java.lang.String)
//  .peerAutonomousExadataInfrastructureId(java.lang.String)
//  .peerAutonomousVmClusterId(java.lang.String)
//  .peerCloudAutonomousVmClusterId(java.lang.String)
//  .peerDbUniqueName(java.lang.String)
//  .protectionMode(java.lang.String)
//  .rotateKeyTrigger(java.lang.Boolean)
//  .rotateKeyTrigger(IResolvable)
//  .serviceLevelAgreementType(java.lang.String)
//  .standbyMaintenanceBufferInDays(java.lang.Number)
//  .timeouts(DatabaseAutonomousContainerDatabaseTimeouts)
//  .vaultId(java.lang.String)
//  .versionPreference(java.lang.String)
//  .vmFailoverReservation(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#display_name DatabaseAutonomousContainerDatabase#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.patchModel">patchModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#patch_model DatabaseAutonomousContainerDatabase#patch_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.autonomousExadataInfrastructureId">autonomousExadataInfrastructureId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#autonomous_exadata_infrastructure_id DatabaseAutonomousContainerDatabase#autonomous_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.autonomousVmClusterId">autonomousVmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#autonomous_vm_cluster_id DatabaseAutonomousContainerDatabase#autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.backupConfig">backupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseBackupConfig</a></code> | backup_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.cloudAutonomousVmClusterId">cloudAutonomousVmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#cloud_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabase#cloud_autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#compartment_id DatabaseAutonomousContainerDatabase#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#database_software_image_id DatabaseAutonomousContainerDatabase#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.dbName">dbName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#db_name DatabaseAutonomousContainerDatabase#db_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.dbSplitThreshold">dbSplitThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#db_split_threshold DatabaseAutonomousContainerDatabase#db_split_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.dbUniqueName">dbUniqueName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#db_unique_name DatabaseAutonomousContainerDatabase#db_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#db_version DatabaseAutonomousContainerDatabase#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#defined_tags DatabaseAutonomousContainerDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.distributionAffinity">distributionAffinity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#distribution_affinity DatabaseAutonomousContainerDatabase#distribution_affinity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.fastStartFailOverLagLimitInSeconds">fastStartFailOverLagLimitInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#fast_start_fail_over_lag_limit_in_seconds DatabaseAutonomousContainerDatabase#fast_start_fail_over_lag_limit_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#freeform_tags DatabaseAutonomousContainerDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#id DatabaseAutonomousContainerDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.isAutomaticFailoverEnabled">isAutomaticFailoverEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#is_automatic_failover_enabled DatabaseAutonomousContainerDatabase#is_automatic_failover_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.isDstFileUpdateEnabled">isDstFileUpdateEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#is_dst_file_update_enabled DatabaseAutonomousContainerDatabase#is_dst_file_update_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.keyStoreId">keyStoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#key_store_id DatabaseAutonomousContainerDatabase#key_store_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#kms_key_id DatabaseAutonomousContainerDatabase#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.maintenanceWindowDetails">maintenanceWindowDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails</a></code> | maintenance_window_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.netServicesArchitecture">netServicesArchitecture</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#net_services_architecture DatabaseAutonomousContainerDatabase#net_services_architecture}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.peerAutonomousContainerDatabaseBackupConfig">peerAutonomousContainerDatabaseBackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig</a></code> | peer_autonomous_container_database_backup_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.peerAutonomousContainerDatabaseCompartmentId">peerAutonomousContainerDatabaseCompartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_autonomous_container_database_compartment_id DatabaseAutonomousContainerDatabase#peer_autonomous_container_database_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.peerAutonomousContainerDatabaseDisplayName">peerAutonomousContainerDatabaseDisplayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_autonomous_container_database_display_name DatabaseAutonomousContainerDatabase#peer_autonomous_container_database_display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.peerAutonomousExadataInfrastructureId">peerAutonomousExadataInfrastructureId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_autonomous_exadata_infrastructure_id DatabaseAutonomousContainerDatabase#peer_autonomous_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.peerAutonomousVmClusterId">peerAutonomousVmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabase#peer_autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.peerCloudAutonomousVmClusterId">peerCloudAutonomousVmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_cloud_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabase#peer_cloud_autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.peerDbUniqueName">peerDbUniqueName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_db_unique_name DatabaseAutonomousContainerDatabase#peer_db_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.protectionMode">protectionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#protection_mode DatabaseAutonomousContainerDatabase#protection_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.rotateKeyTrigger">rotateKeyTrigger</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#rotate_key_trigger DatabaseAutonomousContainerDatabase#rotate_key_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.serviceLevelAgreementType">serviceLevelAgreementType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#service_level_agreement_type DatabaseAutonomousContainerDatabase#service_level_agreement_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.standbyMaintenanceBufferInDays">standbyMaintenanceBufferInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#standby_maintenance_buffer_in_days DatabaseAutonomousContainerDatabase#standby_maintenance_buffer_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts">DatabaseAutonomousContainerDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#vault_id DatabaseAutonomousContainerDatabase#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.versionPreference">versionPreference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#version_preference DatabaseAutonomousContainerDatabase#version_preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.vmFailoverReservation">vmFailoverReservation</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#vm_failover_reservation DatabaseAutonomousContainerDatabase#vm_failover_reservation}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#display_name DatabaseAutonomousContainerDatabase#display_name}.

---

##### `patchModel`<sup>Required</sup> <a name="patchModel" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.patchModel"></a>

```java
public java.lang.String getPatchModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#patch_model DatabaseAutonomousContainerDatabase#patch_model}.

---

##### `autonomousExadataInfrastructureId`<sup>Optional</sup> <a name="autonomousExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.autonomousExadataInfrastructureId"></a>

```java
public java.lang.String getAutonomousExadataInfrastructureId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#autonomous_exadata_infrastructure_id DatabaseAutonomousContainerDatabase#autonomous_exadata_infrastructure_id}.

---

##### `autonomousVmClusterId`<sup>Optional</sup> <a name="autonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.autonomousVmClusterId"></a>

```java
public java.lang.String getAutonomousVmClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#autonomous_vm_cluster_id DatabaseAutonomousContainerDatabase#autonomous_vm_cluster_id}.

---

##### `backupConfig`<sup>Optional</sup> <a name="backupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.backupConfig"></a>

```java
public DatabaseAutonomousContainerDatabaseBackupConfig getBackupConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseBackupConfig</a>

backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#backup_config DatabaseAutonomousContainerDatabase#backup_config}

---

##### `cloudAutonomousVmClusterId`<sup>Optional</sup> <a name="cloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.cloudAutonomousVmClusterId"></a>

```java
public java.lang.String getCloudAutonomousVmClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#cloud_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabase#cloud_autonomous_vm_cluster_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#compartment_id DatabaseAutonomousContainerDatabase#compartment_id}.

---

##### `databaseSoftwareImageId`<sup>Optional</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.databaseSoftwareImageId"></a>

```java
public java.lang.String getDatabaseSoftwareImageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#database_software_image_id DatabaseAutonomousContainerDatabase#database_software_image_id}.

---

##### `dbName`<sup>Optional</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#db_name DatabaseAutonomousContainerDatabase#db_name}.

---

##### `dbSplitThreshold`<sup>Optional</sup> <a name="dbSplitThreshold" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.dbSplitThreshold"></a>

```java
public java.lang.Number getDbSplitThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#db_split_threshold DatabaseAutonomousContainerDatabase#db_split_threshold}.

---

##### `dbUniqueName`<sup>Optional</sup> <a name="dbUniqueName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.dbUniqueName"></a>

```java
public java.lang.String getDbUniqueName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#db_unique_name DatabaseAutonomousContainerDatabase#db_unique_name}.

---

##### `dbVersion`<sup>Optional</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.dbVersion"></a>

```java
public java.lang.String getDbVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#db_version DatabaseAutonomousContainerDatabase#db_version}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#defined_tags DatabaseAutonomousContainerDatabase#defined_tags}.

---

##### `distributionAffinity`<sup>Optional</sup> <a name="distributionAffinity" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.distributionAffinity"></a>

```java
public java.lang.String getDistributionAffinity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#distribution_affinity DatabaseAutonomousContainerDatabase#distribution_affinity}.

---

##### `fastStartFailOverLagLimitInSeconds`<sup>Optional</sup> <a name="fastStartFailOverLagLimitInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.fastStartFailOverLagLimitInSeconds"></a>

```java
public java.lang.Number getFastStartFailOverLagLimitInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#fast_start_fail_over_lag_limit_in_seconds DatabaseAutonomousContainerDatabase#fast_start_fail_over_lag_limit_in_seconds}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#freeform_tags DatabaseAutonomousContainerDatabase#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#id DatabaseAutonomousContainerDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAutomaticFailoverEnabled`<sup>Optional</sup> <a name="isAutomaticFailoverEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.isAutomaticFailoverEnabled"></a>

```java
public java.lang.Object getIsAutomaticFailoverEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#is_automatic_failover_enabled DatabaseAutonomousContainerDatabase#is_automatic_failover_enabled}.

---

##### `isDstFileUpdateEnabled`<sup>Optional</sup> <a name="isDstFileUpdateEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.isDstFileUpdateEnabled"></a>

```java
public java.lang.Object getIsDstFileUpdateEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#is_dst_file_update_enabled DatabaseAutonomousContainerDatabase#is_dst_file_update_enabled}.

---

##### `keyStoreId`<sup>Optional</sup> <a name="keyStoreId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.keyStoreId"></a>

```java
public java.lang.String getKeyStoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#key_store_id DatabaseAutonomousContainerDatabase#key_store_id}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#kms_key_id DatabaseAutonomousContainerDatabase#kms_key_id}.

---

##### `maintenanceWindowDetails`<sup>Optional</sup> <a name="maintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.maintenanceWindowDetails"></a>

```java
public DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails getMaintenanceWindowDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails</a>

maintenance_window_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#maintenance_window_details DatabaseAutonomousContainerDatabase#maintenance_window_details}

---

##### `netServicesArchitecture`<sup>Optional</sup> <a name="netServicesArchitecture" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.netServicesArchitecture"></a>

```java
public java.lang.String getNetServicesArchitecture();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#net_services_architecture DatabaseAutonomousContainerDatabase#net_services_architecture}.

---

##### `peerAutonomousContainerDatabaseBackupConfig`<sup>Optional</sup> <a name="peerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.peerAutonomousContainerDatabaseBackupConfig"></a>

```java
public DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig getPeerAutonomousContainerDatabaseBackupConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig</a>

peer_autonomous_container_database_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_autonomous_container_database_backup_config DatabaseAutonomousContainerDatabase#peer_autonomous_container_database_backup_config}

---

##### `peerAutonomousContainerDatabaseCompartmentId`<sup>Optional</sup> <a name="peerAutonomousContainerDatabaseCompartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.peerAutonomousContainerDatabaseCompartmentId"></a>

```java
public java.lang.String getPeerAutonomousContainerDatabaseCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_autonomous_container_database_compartment_id DatabaseAutonomousContainerDatabase#peer_autonomous_container_database_compartment_id}.

---

##### `peerAutonomousContainerDatabaseDisplayName`<sup>Optional</sup> <a name="peerAutonomousContainerDatabaseDisplayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.peerAutonomousContainerDatabaseDisplayName"></a>

```java
public java.lang.String getPeerAutonomousContainerDatabaseDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_autonomous_container_database_display_name DatabaseAutonomousContainerDatabase#peer_autonomous_container_database_display_name}.

---

##### `peerAutonomousExadataInfrastructureId`<sup>Optional</sup> <a name="peerAutonomousExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.peerAutonomousExadataInfrastructureId"></a>

```java
public java.lang.String getPeerAutonomousExadataInfrastructureId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_autonomous_exadata_infrastructure_id DatabaseAutonomousContainerDatabase#peer_autonomous_exadata_infrastructure_id}.

---

##### `peerAutonomousVmClusterId`<sup>Optional</sup> <a name="peerAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.peerAutonomousVmClusterId"></a>

```java
public java.lang.String getPeerAutonomousVmClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabase#peer_autonomous_vm_cluster_id}.

---

##### `peerCloudAutonomousVmClusterId`<sup>Optional</sup> <a name="peerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.peerCloudAutonomousVmClusterId"></a>

```java
public java.lang.String getPeerCloudAutonomousVmClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_cloud_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabase#peer_cloud_autonomous_vm_cluster_id}.

---

##### `peerDbUniqueName`<sup>Optional</sup> <a name="peerDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.peerDbUniqueName"></a>

```java
public java.lang.String getPeerDbUniqueName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_db_unique_name DatabaseAutonomousContainerDatabase#peer_db_unique_name}.

---

##### `protectionMode`<sup>Optional</sup> <a name="protectionMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.protectionMode"></a>

```java
public java.lang.String getProtectionMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#protection_mode DatabaseAutonomousContainerDatabase#protection_mode}.

---

##### `rotateKeyTrigger`<sup>Optional</sup> <a name="rotateKeyTrigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.rotateKeyTrigger"></a>

```java
public java.lang.Object getRotateKeyTrigger();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#rotate_key_trigger DatabaseAutonomousContainerDatabase#rotate_key_trigger}.

---

##### `serviceLevelAgreementType`<sup>Optional</sup> <a name="serviceLevelAgreementType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.serviceLevelAgreementType"></a>

```java
public java.lang.String getServiceLevelAgreementType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#service_level_agreement_type DatabaseAutonomousContainerDatabase#service_level_agreement_type}.

---

##### `standbyMaintenanceBufferInDays`<sup>Optional</sup> <a name="standbyMaintenanceBufferInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.standbyMaintenanceBufferInDays"></a>

```java
public java.lang.Number getStandbyMaintenanceBufferInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#standby_maintenance_buffer_in_days DatabaseAutonomousContainerDatabase#standby_maintenance_buffer_in_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.timeouts"></a>

```java
public DatabaseAutonomousContainerDatabaseTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts">DatabaseAutonomousContainerDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#timeouts DatabaseAutonomousContainerDatabase#timeouts}

---

##### `vaultId`<sup>Optional</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#vault_id DatabaseAutonomousContainerDatabase#vault_id}.

---

##### `versionPreference`<sup>Optional</sup> <a name="versionPreference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.versionPreference"></a>

```java
public java.lang.String getVersionPreference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#version_preference DatabaseAutonomousContainerDatabase#version_preference}.

---

##### `vmFailoverReservation`<sup>Optional</sup> <a name="vmFailoverReservation" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.vmFailoverReservation"></a>

```java
public java.lang.Number getVmFailoverReservation();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#vm_failover_reservation DatabaseAutonomousContainerDatabase#vm_failover_reservation}.

---

### DatabaseAutonomousContainerDatabaseKeyHistoryEntry <a name="DatabaseAutonomousContainerDatabaseKeyHistoryEntry" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntry"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabaseKeyHistoryEntry;

DatabaseAutonomousContainerDatabaseKeyHistoryEntry.builder()
    .build();
```


### DatabaseAutonomousContainerDatabaseMaintenanceWindow <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabaseMaintenanceWindow;

DatabaseAutonomousContainerDatabaseMaintenanceWindow.builder()
    .build();
```


### DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek;

DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek.builder()
    .build();
```


### DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails;

DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.builder()
//  .customActionTimeoutInMins(java.lang.Number)
//  .daysOfWeek(IResolvable)
//  .daysOfWeek(java.util.List<DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek>)
//  .hoursOfDay(java.util.List<java.lang.Number>)
//  .isCustomActionTimeoutEnabled(java.lang.Boolean)
//  .isCustomActionTimeoutEnabled(IResolvable)
//  .isMonthlyPatchingEnabled(java.lang.Boolean)
//  .isMonthlyPatchingEnabled(IResolvable)
//  .leadTimeInWeeks(java.lang.Number)
//  .months(IResolvable)
//  .months(java.util.List<DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths>)
//  .patchingMode(java.lang.String)
//  .preference(java.lang.String)
//  .skipRu(IResolvable)
//  .skipRu(java.util.List<java.lang.Boolean)
//  .skipRu(IResolvable>)
//  .weeksOfMonth(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#custom_action_timeout_in_mins DatabaseAutonomousContainerDatabase#custom_action_timeout_in_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.daysOfWeek">daysOfWeek</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek</a>></code> | days_of_week block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.hoursOfDay">hoursOfDay</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#hours_of_day DatabaseAutonomousContainerDatabase#hours_of_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#is_custom_action_timeout_enabled DatabaseAutonomousContainerDatabase#is_custom_action_timeout_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.isMonthlyPatchingEnabled">isMonthlyPatchingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#is_monthly_patching_enabled DatabaseAutonomousContainerDatabase#is_monthly_patching_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#lead_time_in_weeks DatabaseAutonomousContainerDatabase#lead_time_in_weeks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.months">months</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths</a>></code> | months block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.patchingMode">patchingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#patching_mode DatabaseAutonomousContainerDatabase#patching_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.preference">preference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#preference DatabaseAutonomousContainerDatabase#preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.skipRu">skipRu</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#skip_ru DatabaseAutonomousContainerDatabase#skip_ru}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#weeks_of_month DatabaseAutonomousContainerDatabase#weeks_of_month}. |

---

##### `customActionTimeoutInMins`<sup>Optional</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.customActionTimeoutInMins"></a>

```java
public java.lang.Number getCustomActionTimeoutInMins();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#custom_action_timeout_in_mins DatabaseAutonomousContainerDatabase#custom_action_timeout_in_mins}.

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.daysOfWeek"></a>

```java
public java.lang.Object getDaysOfWeek();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek</a>>

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#days_of_week DatabaseAutonomousContainerDatabase#days_of_week}

---

##### `hoursOfDay`<sup>Optional</sup> <a name="hoursOfDay" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.hoursOfDay"></a>

```java
public java.util.List<java.lang.Number> getHoursOfDay();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#hours_of_day DatabaseAutonomousContainerDatabase#hours_of_day}.

---

##### `isCustomActionTimeoutEnabled`<sup>Optional</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.isCustomActionTimeoutEnabled"></a>

```java
public java.lang.Object getIsCustomActionTimeoutEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#is_custom_action_timeout_enabled DatabaseAutonomousContainerDatabase#is_custom_action_timeout_enabled}.

---

##### `isMonthlyPatchingEnabled`<sup>Optional</sup> <a name="isMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.isMonthlyPatchingEnabled"></a>

```java
public java.lang.Object getIsMonthlyPatchingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#is_monthly_patching_enabled DatabaseAutonomousContainerDatabase#is_monthly_patching_enabled}.

---

##### `leadTimeInWeeks`<sup>Optional</sup> <a name="leadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.leadTimeInWeeks"></a>

```java
public java.lang.Number getLeadTimeInWeeks();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#lead_time_in_weeks DatabaseAutonomousContainerDatabase#lead_time_in_weeks}.

---

##### `months`<sup>Optional</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.months"></a>

```java
public java.lang.Object getMonths();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths</a>>

months block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#months DatabaseAutonomousContainerDatabase#months}

---

##### `patchingMode`<sup>Optional</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.patchingMode"></a>

```java
public java.lang.String getPatchingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#patching_mode DatabaseAutonomousContainerDatabase#patching_mode}.

---

##### `preference`<sup>Optional</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.preference"></a>

```java
public java.lang.String getPreference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#preference DatabaseAutonomousContainerDatabase#preference}.

---

##### `skipRu`<sup>Optional</sup> <a name="skipRu" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.skipRu"></a>

```java
public java.lang.Object getSkipRu();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#skip_ru DatabaseAutonomousContainerDatabase#skip_ru}.

---

##### `weeksOfMonth`<sup>Optional</sup> <a name="weeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.Number> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#weeks_of_month DatabaseAutonomousContainerDatabase#weeks_of_month}.

---

### DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek;

DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#name DatabaseAutonomousContainerDatabase#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#name DatabaseAutonomousContainerDatabase#name}.

---

### DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths;

DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#name DatabaseAutonomousContainerDatabase#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#name DatabaseAutonomousContainerDatabase#name}.

---

### DatabaseAutonomousContainerDatabaseMaintenanceWindowMonths <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonths.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonths;

DatabaseAutonomousContainerDatabaseMaintenanceWindowMonths.builder()
    .build();
```


### DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig <a name="DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig;

DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig.builder()
//  .backupDestinationDetails(IResolvable)
//  .backupDestinationDetails(java.util.List<DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails>)
//  .recoveryWindowInDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig.property.backupDestinationDetails">backupDestinationDetails</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>></code> | backup_destination_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig.property.recoveryWindowInDays">recoveryWindowInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#recovery_window_in_days DatabaseAutonomousContainerDatabase#recovery_window_in_days}. |

---

##### `backupDestinationDetails`<sup>Optional</sup> <a name="backupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig.property.backupDestinationDetails"></a>

```java
public java.lang.Object getBackupDestinationDetails();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>>

backup_destination_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#backup_destination_details DatabaseAutonomousContainerDatabase#backup_destination_details}

---

##### `recoveryWindowInDays`<sup>Optional</sup> <a name="recoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig.property.recoveryWindowInDays"></a>

```java
public java.lang.Number getRecoveryWindowInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#recovery_window_in_days DatabaseAutonomousContainerDatabase#recovery_window_in_days}.

---

### DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails <a name="DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails;

DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.builder()
    .type(java.lang.String)
//  .id(java.lang.String)
//  .internetProxy(java.lang.String)
//  .vpcPassword(java.lang.String)
//  .vpcUser(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#type DatabaseAutonomousContainerDatabase#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#id DatabaseAutonomousContainerDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.internetProxy">internetProxy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#internet_proxy DatabaseAutonomousContainerDatabase#internet_proxy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.vpcPassword">vpcPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#vpc_password DatabaseAutonomousContainerDatabase#vpc_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.vpcUser">vpcUser</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#vpc_user DatabaseAutonomousContainerDatabase#vpc_user}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#type DatabaseAutonomousContainerDatabase#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#id DatabaseAutonomousContainerDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internetProxy`<sup>Optional</sup> <a name="internetProxy" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.internetProxy"></a>

```java
public java.lang.String getInternetProxy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#internet_proxy DatabaseAutonomousContainerDatabase#internet_proxy}.

---

##### `vpcPassword`<sup>Optional</sup> <a name="vpcPassword" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.vpcPassword"></a>

```java
public java.lang.String getVpcPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#vpc_password DatabaseAutonomousContainerDatabase#vpc_password}.

---

##### `vpcUser`<sup>Optional</sup> <a name="vpcUser" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.vpcUser"></a>

```java
public java.lang.String getVpcUser();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#vpc_user DatabaseAutonomousContainerDatabase#vpc_user}.

---

### DatabaseAutonomousContainerDatabaseTimeouts <a name="DatabaseAutonomousContainerDatabaseTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabaseTimeouts;

DatabaseAutonomousContainerDatabaseTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#create DatabaseAutonomousContainerDatabase#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#delete DatabaseAutonomousContainerDatabase#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#update DatabaseAutonomousContainerDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#create DatabaseAutonomousContainerDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#delete DatabaseAutonomousContainerDatabase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#update DatabaseAutonomousContainerDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference <a name="DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference;

new DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetInternetProxy">resetInternetProxy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetVpcPassword">resetVpcPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetVpcUser">resetVpcUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetInternetProxy` <a name="resetInternetProxy" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetInternetProxy"></a>

```java
public void resetInternetProxy()
```

##### `resetVpcPassword` <a name="resetVpcPassword" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetVpcPassword"></a>

```java
public void resetVpcPassword()
```

##### `resetVpcUser` <a name="resetVpcUser" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetVpcUser"></a>

```java
public void resetVpcUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxyInput">internetProxyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPasswordInput">vpcPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUserInput">vpcUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxy">internetProxy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPassword">vpcPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser">vpcUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `internetProxyInput`<sup>Optional</sup> <a name="internetProxyInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxyInput"></a>

```java
public java.lang.String getInternetProxyInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `vpcPasswordInput`<sup>Optional</sup> <a name="vpcPasswordInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPasswordInput"></a>

```java
public java.lang.String getVpcPasswordInput();
```

- *Type:* java.lang.String

---

##### `vpcUserInput`<sup>Optional</sup> <a name="vpcUserInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUserInput"></a>

```java
public java.lang.String getVpcUserInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internetProxy`<sup>Required</sup> <a name="internetProxy" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxy"></a>

```java
public java.lang.String getInternetProxy();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `vpcPassword`<sup>Required</sup> <a name="vpcPassword" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPassword"></a>

```java
public java.lang.String getVpcPassword();
```

- *Type:* java.lang.String

---

##### `vpcUser`<sup>Required</sup> <a name="vpcUser" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser"></a>

```java
public java.lang.String getVpcUser();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```java
public DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>

---


### DatabaseAutonomousContainerDatabaseBackupConfigOutputReference <a name="DatabaseAutonomousContainerDatabaseBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference;

new DatabaseAutonomousContainerDatabaseBackupConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.putBackupDestinationDetails">putBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.resetBackupDestinationDetails">resetBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.resetRecoveryWindowInDays">resetRecoveryWindowInDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackupDestinationDetails` <a name="putBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.putBackupDestinationDetails"></a>

```java
public void putBackupDestinationDetails(DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.putBackupDestinationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>

---

##### `resetBackupDestinationDetails` <a name="resetBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.resetBackupDestinationDetails"></a>

```java
public void resetBackupDestinationDetails()
```

##### `resetRecoveryWindowInDays` <a name="resetRecoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.resetRecoveryWindowInDays"></a>

```java
public void resetRecoveryWindowInDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetails">backupDestinationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference">DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetailsInput">backupDestinationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDaysInput">recoveryWindowInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDays">recoveryWindowInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupDestinationDetails`<sup>Required</sup> <a name="backupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetails"></a>

```java
public DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference getBackupDestinationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference">DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference</a>

---

##### `backupDestinationDetailsInput`<sup>Optional</sup> <a name="backupDestinationDetailsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetailsInput"></a>

```java
public DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails getBackupDestinationDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>

---

##### `recoveryWindowInDaysInput`<sup>Optional</sup> <a name="recoveryWindowInDaysInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDaysInput"></a>

```java
public java.lang.Number getRecoveryWindowInDaysInput();
```

- *Type:* java.lang.Number

---

##### `recoveryWindowInDays`<sup>Required</sup> <a name="recoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDays"></a>

```java
public java.lang.Number getRecoveryWindowInDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.internalValue"></a>

```java
public DatabaseAutonomousContainerDatabaseBackupConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseBackupConfig</a>

---


### DatabaseAutonomousContainerDatabaseKeyHistoryEntryList <a name="DatabaseAutonomousContainerDatabaseKeyHistoryEntryList" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList;

new DatabaseAutonomousContainerDatabaseKeyHistoryEntryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.get"></a>

```java
public DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference <a name="DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference;

new DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.timeActivated">timeActivated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntry">DatabaseAutonomousContainerDatabaseKeyHistoryEntry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyVersionId`<sup>Required</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.kmsKeyVersionId"></a>

```java
public java.lang.String getKmsKeyVersionId();
```

- *Type:* java.lang.String

---

##### `timeActivated`<sup>Required</sup> <a name="timeActivated" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.timeActivated"></a>

```java
public java.lang.String getTimeActivated();
```

- *Type:* java.lang.String

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.internalValue"></a>

```java
public DatabaseAutonomousContainerDatabaseKeyHistoryEntry getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntry">DatabaseAutonomousContainerDatabaseKeyHistoryEntry</a>

---


### DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList;

new DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.get"></a>

```java
public DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference;

new DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek">DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```java
public DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek">DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek</a>

---


### DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList;

new DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.get"></a>

```java
public DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek</a>>

---


### DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference;

new DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek</a>

---


### DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList;

new DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.get"></a>

```java
public DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths</a>>

---


### DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference;

new DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths</a>

---


### DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference;

new DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.putDaysOfWeek">putDaysOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.putMonths">putMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetCustomActionTimeoutInMins">resetCustomActionTimeoutInMins</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetHoursOfDay">resetHoursOfDay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetIsCustomActionTimeoutEnabled">resetIsCustomActionTimeoutEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetIsMonthlyPatchingEnabled">resetIsMonthlyPatchingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetLeadTimeInWeeks">resetLeadTimeInWeeks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetMonths">resetMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetPatchingMode">resetPatchingMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetPreference">resetPreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetSkipRu">resetSkipRu</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetWeeksOfMonth">resetWeeksOfMonth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDaysOfWeek` <a name="putDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.putDaysOfWeek"></a>

```java
public void putDaysOfWeek(IResolvable OR java.util.List<DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.putDaysOfWeek.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek</a>>

---

##### `putMonths` <a name="putMonths" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.putMonths"></a>

```java
public void putMonths(IResolvable OR java.util.List<DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.putMonths.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths</a>>

---

##### `resetCustomActionTimeoutInMins` <a name="resetCustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetCustomActionTimeoutInMins"></a>

```java
public void resetCustomActionTimeoutInMins()
```

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetDaysOfWeek"></a>

```java
public void resetDaysOfWeek()
```

##### `resetHoursOfDay` <a name="resetHoursOfDay" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetHoursOfDay"></a>

```java
public void resetHoursOfDay()
```

##### `resetIsCustomActionTimeoutEnabled` <a name="resetIsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetIsCustomActionTimeoutEnabled"></a>

```java
public void resetIsCustomActionTimeoutEnabled()
```

##### `resetIsMonthlyPatchingEnabled` <a name="resetIsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetIsMonthlyPatchingEnabled"></a>

```java
public void resetIsMonthlyPatchingEnabled()
```

##### `resetLeadTimeInWeeks` <a name="resetLeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetLeadTimeInWeeks"></a>

```java
public void resetLeadTimeInWeeks()
```

##### `resetMonths` <a name="resetMonths" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetMonths"></a>

```java
public void resetMonths()
```

##### `resetPatchingMode` <a name="resetPatchingMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetPatchingMode"></a>

```java
public void resetPatchingMode()
```

##### `resetPreference` <a name="resetPreference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetPreference"></a>

```java
public void resetPreference()
```

##### `resetSkipRu` <a name="resetSkipRu" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetSkipRu"></a>

```java
public void resetSkipRu()
```

##### `resetWeeksOfMonth` <a name="resetWeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetWeeksOfMonth"></a>

```java
public void resetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMinsInput">customActionTimeoutInMinsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.hoursOfDayInput">hoursOfDayInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabledInput">isCustomActionTimeoutEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabledInput">isMonthlyPatchingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeksInput">leadTimeInWeeksInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.monthsInput">monthsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.patchingModeInput">patchingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.preferenceInput">preferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.skipRuInput">skipRuInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.weeksOfMonthInput">weeksOfMonthInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled">isMonthlyPatchingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.patchingMode">patchingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.preference">preference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.skipRu">skipRu</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.daysOfWeek"></a>

```java
public DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList getDaysOfWeek();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList</a>

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.months"></a>

```java
public DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList getMonths();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList</a>

---

##### `customActionTimeoutInMinsInput`<sup>Optional</sup> <a name="customActionTimeoutInMinsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMinsInput"></a>

```java
public java.lang.Number getCustomActionTimeoutInMinsInput();
```

- *Type:* java.lang.Number

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.daysOfWeekInput"></a>

```java
public java.lang.Object getDaysOfWeekInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek</a>>

---

##### `hoursOfDayInput`<sup>Optional</sup> <a name="hoursOfDayInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.hoursOfDayInput"></a>

```java
public java.util.List<java.lang.Number> getHoursOfDayInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `isCustomActionTimeoutEnabledInput`<sup>Optional</sup> <a name="isCustomActionTimeoutEnabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabledInput"></a>

```java
public java.lang.Object getIsCustomActionTimeoutEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isMonthlyPatchingEnabledInput`<sup>Optional</sup> <a name="isMonthlyPatchingEnabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabledInput"></a>

```java
public java.lang.Object getIsMonthlyPatchingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `leadTimeInWeeksInput`<sup>Optional</sup> <a name="leadTimeInWeeksInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeksInput"></a>

```java
public java.lang.Number getLeadTimeInWeeksInput();
```

- *Type:* java.lang.Number

---

##### `monthsInput`<sup>Optional</sup> <a name="monthsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.monthsInput"></a>

```java
public java.lang.Object getMonthsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths</a>>

---

##### `patchingModeInput`<sup>Optional</sup> <a name="patchingModeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.patchingModeInput"></a>

```java
public java.lang.String getPatchingModeInput();
```

- *Type:* java.lang.String

---

##### `preferenceInput`<sup>Optional</sup> <a name="preferenceInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.preferenceInput"></a>

```java
public java.lang.String getPreferenceInput();
```

- *Type:* java.lang.String

---

##### `skipRuInput`<sup>Optional</sup> <a name="skipRuInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.skipRuInput"></a>

```java
public java.lang.Object getSkipRuInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable>

---

##### `weeksOfMonthInput`<sup>Optional</sup> <a name="weeksOfMonthInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.weeksOfMonthInput"></a>

```java
public java.util.List<java.lang.Number> getWeeksOfMonthInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `customActionTimeoutInMins`<sup>Required</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins"></a>

```java
public java.lang.Number getCustomActionTimeoutInMins();
```

- *Type:* java.lang.Number

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.hoursOfDay"></a>

```java
public java.util.List<java.lang.Number> getHoursOfDay();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `isCustomActionTimeoutEnabled`<sup>Required</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled"></a>

```java
public java.lang.Object getIsCustomActionTimeoutEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isMonthlyPatchingEnabled`<sup>Required</sup> <a name="isMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled"></a>

```java
public java.lang.Object getIsMonthlyPatchingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `leadTimeInWeeks`<sup>Required</sup> <a name="leadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks"></a>

```java
public java.lang.Number getLeadTimeInWeeks();
```

- *Type:* java.lang.Number

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.patchingMode"></a>

```java
public java.lang.String getPatchingMode();
```

- *Type:* java.lang.String

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.preference"></a>

```java
public java.lang.String getPreference();
```

- *Type:* java.lang.String

---

##### `skipRu`<sup>Required</sup> <a name="skipRu" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.skipRu"></a>

```java
public java.lang.Object getSkipRu();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable>

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.Number> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.internalValue"></a>

```java
public DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails</a>

---


### DatabaseAutonomousContainerDatabaseMaintenanceWindowList <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabaseMaintenanceWindowList;

new DatabaseAutonomousContainerDatabaseMaintenanceWindowList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.get"></a>

```java
public DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList;

new DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.get"></a>

```java
public DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference;

new DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonths">DatabaseAutonomousContainerDatabaseMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```java
public DatabaseAutonomousContainerDatabaseMaintenanceWindowMonths getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonths">DatabaseAutonomousContainerDatabaseMaintenanceWindowMonths</a>

---


### DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference;

new DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList">DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled">isMonthlyPatchingEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList">DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.patchingMode">patchingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.skipRu">skipRu</a></code> | <code>com.hashicorp.cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindow">DatabaseAutonomousContainerDatabaseMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customActionTimeoutInMins`<sup>Required</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```java
public java.lang.Number getCustomActionTimeoutInMins();
```

- *Type:* java.lang.Number

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```java
public DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList getDaysOfWeek();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList">DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList</a>

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```java
public java.util.List<java.lang.Number> getHoursOfDay();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `isCustomActionTimeoutEnabled`<sup>Required</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```java
public IResolvable getIsCustomActionTimeoutEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isMonthlyPatchingEnabled`<sup>Required</sup> <a name="isMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled"></a>

```java
public IResolvable getIsMonthlyPatchingEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `leadTimeInWeeks`<sup>Required</sup> <a name="leadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```java
public java.lang.Number getLeadTimeInWeeks();
```

- *Type:* java.lang.Number

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.months"></a>

```java
public DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList getMonths();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList">DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList</a>

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.patchingMode"></a>

```java
public java.lang.String getPatchingMode();
```

- *Type:* java.lang.String

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.preference"></a>

```java
public java.lang.String getPreference();
```

- *Type:* java.lang.String

---

##### `skipRu`<sup>Required</sup> <a name="skipRu" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.skipRu"></a>

```java
public BooleanList getSkipRu();
```

- *Type:* com.hashicorp.cdktf.BooleanList

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.Number> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public DatabaseAutonomousContainerDatabaseMaintenanceWindow getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindow">DatabaseAutonomousContainerDatabaseMaintenanceWindow</a>

---


### DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList <a name="DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList;

new DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get"></a>

```java
public DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>>

---


### DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference <a name="DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference;

new DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetInternetProxy">resetInternetProxy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetVpcPassword">resetVpcPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetVpcUser">resetVpcUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetInternetProxy` <a name="resetInternetProxy" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetInternetProxy"></a>

```java
public void resetInternetProxy()
```

##### `resetVpcPassword` <a name="resetVpcPassword" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetVpcPassword"></a>

```java
public void resetVpcPassword()
```

##### `resetVpcUser` <a name="resetVpcUser" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetVpcUser"></a>

```java
public void resetVpcUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxyInput">internetProxyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPasswordInput">vpcPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUserInput">vpcUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxy">internetProxy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPassword">vpcPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser">vpcUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `internetProxyInput`<sup>Optional</sup> <a name="internetProxyInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxyInput"></a>

```java
public java.lang.String getInternetProxyInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `vpcPasswordInput`<sup>Optional</sup> <a name="vpcPasswordInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPasswordInput"></a>

```java
public java.lang.String getVpcPasswordInput();
```

- *Type:* java.lang.String

---

##### `vpcUserInput`<sup>Optional</sup> <a name="vpcUserInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUserInput"></a>

```java
public java.lang.String getVpcUserInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internetProxy`<sup>Required</sup> <a name="internetProxy" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxy"></a>

```java
public java.lang.String getInternetProxy();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `vpcPassword`<sup>Required</sup> <a name="vpcPassword" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPassword"></a>

```java
public java.lang.String getVpcPassword();
```

- *Type:* java.lang.String

---

##### `vpcUser`<sup>Required</sup> <a name="vpcUser" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser"></a>

```java
public java.lang.String getVpcUser();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>

---


### DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference <a name="DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference;

new DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.putBackupDestinationDetails">putBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.resetBackupDestinationDetails">resetBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.resetRecoveryWindowInDays">resetRecoveryWindowInDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackupDestinationDetails` <a name="putBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.putBackupDestinationDetails"></a>

```java
public void putBackupDestinationDetails(IResolvable OR java.util.List<DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.putBackupDestinationDetails.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>>

---

##### `resetBackupDestinationDetails` <a name="resetBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.resetBackupDestinationDetails"></a>

```java
public void resetBackupDestinationDetails()
```

##### `resetRecoveryWindowInDays` <a name="resetRecoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.resetRecoveryWindowInDays"></a>

```java
public void resetRecoveryWindowInDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetails">backupDestinationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetailsInput">backupDestinationDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDaysInput">recoveryWindowInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDays">recoveryWindowInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupDestinationDetails`<sup>Required</sup> <a name="backupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetails"></a>

```java
public DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList getBackupDestinationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList</a>

---

##### `backupDestinationDetailsInput`<sup>Optional</sup> <a name="backupDestinationDetailsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetailsInput"></a>

```java
public java.lang.Object getBackupDestinationDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>>

---

##### `recoveryWindowInDaysInput`<sup>Optional</sup> <a name="recoveryWindowInDaysInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDaysInput"></a>

```java
public java.lang.Number getRecoveryWindowInDaysInput();
```

- *Type:* java.lang.Number

---

##### `recoveryWindowInDays`<sup>Required</sup> <a name="recoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDays"></a>

```java
public java.lang.Number getRecoveryWindowInDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.internalValue"></a>

```java
public DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig</a>

---


### DatabaseAutonomousContainerDatabaseTimeoutsOutputReference <a name="DatabaseAutonomousContainerDatabaseTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_container_database.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference;

new DatabaseAutonomousContainerDatabaseTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts">DatabaseAutonomousContainerDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts">DatabaseAutonomousContainerDatabaseTimeouts</a>

---



