# `databaseCloudVmCluster` Submodule <a name="`databaseCloudVmCluster` Submodule" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseCloudVmCluster <a name="DatabaseCloudVmCluster" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster oci_database_cloud_vm_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster.DatabaseCloudVmCluster;

DatabaseCloudVmCluster.Builder.create(Construct scope, java.lang.String id)
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
    .backupSubnetId(java.lang.String)
    .cloudExadataInfrastructureId(java.lang.String)
    .compartmentId(java.lang.String)
    .cpuCoreCount(java.lang.Number)
    .displayName(java.lang.String)
    .giVersion(java.lang.String)
    .hostname(java.lang.String)
    .sshPublicKeys(java.util.List<java.lang.String>)
    .subnetId(java.lang.String)
//  .backupNetworkNsgIds(java.util.List<java.lang.String>)
//  .cloudAutomationUpdateDetails(DatabaseCloudVmClusterCloudAutomationUpdateDetails)
//  .clusterName(java.lang.String)
//  .createAsync(java.lang.Boolean)
//  .createAsync(IResolvable)
//  .dataCollectionOptions(DatabaseCloudVmClusterDataCollectionOptions)
//  .dataStoragePercentage(java.lang.Number)
//  .dataStorageSizeInTbs(java.lang.Number)
//  .dbNodeStorageSizeInGbs(java.lang.Number)
//  .dbServers(java.util.List<java.lang.String>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .domain(java.lang.String)
//  .fileSystemConfigurationDetails(IResolvable)
//  .fileSystemConfigurationDetails(java.util.List<DatabaseCloudVmClusterFileSystemConfigurationDetails>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isLocalBackupEnabled(java.lang.Boolean)
//  .isLocalBackupEnabled(IResolvable)
//  .isSparseDiskgroupEnabled(java.lang.Boolean)
//  .isSparseDiskgroupEnabled(IResolvable)
//  .licenseModel(java.lang.String)
//  .memorySizeInGbs(java.lang.Number)
//  .nsgIds(java.util.List<java.lang.String>)
//  .ocpuCount(java.lang.Number)
//  .privateZoneId(java.lang.String)
//  .scanListenerPortTcp(java.lang.Number)
//  .scanListenerPortTcpSsl(java.lang.Number)
//  .securityAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .subscriptionId(java.lang.String)
//  .systemVersion(java.lang.String)
//  .timeouts(DatabaseCloudVmClusterTimeouts)
//  .timeZone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.backupSubnetId">backupSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#backup_subnet_id DatabaseCloudVmCluster#backup_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cloud_exadata_infrastructure_id DatabaseCloudVmCluster#cloud_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#compartment_id DatabaseCloudVmCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cpu_core_count DatabaseCloudVmCluster#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#display_name DatabaseCloudVmCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.giVersion">giVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#gi_version DatabaseCloudVmCluster#gi_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#hostname DatabaseCloudVmCluster#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#ssh_public_keys DatabaseCloudVmCluster#ssh_public_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#subnet_id DatabaseCloudVmCluster#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.backupNetworkNsgIds">backupNetworkNsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#backup_network_nsg_ids DatabaseCloudVmCluster#backup_network_nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.cloudAutomationUpdateDetails">cloudAutomationUpdateDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails">DatabaseCloudVmClusterCloudAutomationUpdateDetails</a></code> | cloud_automation_update_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cluster_name DatabaseCloudVmCluster#cluster_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.createAsync">createAsync</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#create_async DatabaseCloudVmCluster#create_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions">DatabaseCloudVmClusterDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.dataStoragePercentage">dataStoragePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#data_storage_percentage DatabaseCloudVmCluster#data_storage_percentage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#data_storage_size_in_tbs DatabaseCloudVmCluster#data_storage_size_in_tbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.dbNodeStorageSizeInGbs">dbNodeStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#db_node_storage_size_in_gbs DatabaseCloudVmCluster#db_node_storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.dbServers">dbServers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#db_servers DatabaseCloudVmCluster#db_servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#defined_tags DatabaseCloudVmCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#domain DatabaseCloudVmCluster#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.fileSystemConfigurationDetails">fileSystemConfigurationDetails</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails">DatabaseCloudVmClusterFileSystemConfigurationDetails</a>></code> | file_system_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#freeform_tags DatabaseCloudVmCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#id DatabaseCloudVmCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.isLocalBackupEnabled">isLocalBackupEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_local_backup_enabled DatabaseCloudVmCluster#is_local_backup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.isSparseDiskgroupEnabled">isSparseDiskgroupEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_sparse_diskgroup_enabled DatabaseCloudVmCluster#is_sparse_diskgroup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#license_model DatabaseCloudVmCluster#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.memorySizeInGbs">memorySizeInGbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#memory_size_in_gbs DatabaseCloudVmCluster#memory_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#nsg_ids DatabaseCloudVmCluster#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.ocpuCount">ocpuCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#ocpu_count DatabaseCloudVmCluster#ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.privateZoneId">privateZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#private_zone_id DatabaseCloudVmCluster#private_zone_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#scan_listener_port_tcp DatabaseCloudVmCluster#scan_listener_port_tcp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.scanListenerPortTcpSsl">scanListenerPortTcpSsl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#scan_listener_port_tcp_ssl DatabaseCloudVmCluster#scan_listener_port_tcp_ssl}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.securityAttributes">securityAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#security_attributes DatabaseCloudVmCluster#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#subscription_id DatabaseCloudVmCluster#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.systemVersion">systemVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#system_version DatabaseCloudVmCluster#system_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts">DatabaseCloudVmClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#time_zone DatabaseCloudVmCluster#time_zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backupSubnetId`<sup>Required</sup> <a name="backupSubnetId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.backupSubnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#backup_subnet_id DatabaseCloudVmCluster#backup_subnet_id}.

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.cloudExadataInfrastructureId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cloud_exadata_infrastructure_id DatabaseCloudVmCluster#cloud_exadata_infrastructure_id}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#compartment_id DatabaseCloudVmCluster#compartment_id}.

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.cpuCoreCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cpu_core_count DatabaseCloudVmCluster#cpu_core_count}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#display_name DatabaseCloudVmCluster#display_name}.

---

##### `giVersion`<sup>Required</sup> <a name="giVersion" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.giVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#gi_version DatabaseCloudVmCluster#gi_version}.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#hostname DatabaseCloudVmCluster#hostname}.

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.sshPublicKeys"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#ssh_public_keys DatabaseCloudVmCluster#ssh_public_keys}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#subnet_id DatabaseCloudVmCluster#subnet_id}.

---

##### `backupNetworkNsgIds`<sup>Optional</sup> <a name="backupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.backupNetworkNsgIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#backup_network_nsg_ids DatabaseCloudVmCluster#backup_network_nsg_ids}.

---

##### `cloudAutomationUpdateDetails`<sup>Optional</sup> <a name="cloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.cloudAutomationUpdateDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails">DatabaseCloudVmClusterCloudAutomationUpdateDetails</a>

cloud_automation_update_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cloud_automation_update_details DatabaseCloudVmCluster#cloud_automation_update_details}

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cluster_name DatabaseCloudVmCluster#cluster_name}.

---

##### `createAsync`<sup>Optional</sup> <a name="createAsync" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.createAsync"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#create_async DatabaseCloudVmCluster#create_async}.

---

##### `dataCollectionOptions`<sup>Optional</sup> <a name="dataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.dataCollectionOptions"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions">DatabaseCloudVmClusterDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#data_collection_options DatabaseCloudVmCluster#data_collection_options}

---

##### `dataStoragePercentage`<sup>Optional</sup> <a name="dataStoragePercentage" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.dataStoragePercentage"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#data_storage_percentage DatabaseCloudVmCluster#data_storage_percentage}.

---

##### `dataStorageSizeInTbs`<sup>Optional</sup> <a name="dataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.dataStorageSizeInTbs"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#data_storage_size_in_tbs DatabaseCloudVmCluster#data_storage_size_in_tbs}.

---

##### `dbNodeStorageSizeInGbs`<sup>Optional</sup> <a name="dbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.dbNodeStorageSizeInGbs"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#db_node_storage_size_in_gbs DatabaseCloudVmCluster#db_node_storage_size_in_gbs}.

---

##### `dbServers`<sup>Optional</sup> <a name="dbServers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.dbServers"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#db_servers DatabaseCloudVmCluster#db_servers}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#defined_tags DatabaseCloudVmCluster#defined_tags}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#domain DatabaseCloudVmCluster#domain}.

---

##### `fileSystemConfigurationDetails`<sup>Optional</sup> <a name="fileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.fileSystemConfigurationDetails"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails">DatabaseCloudVmClusterFileSystemConfigurationDetails</a>>

file_system_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#file_system_configuration_details DatabaseCloudVmCluster#file_system_configuration_details}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#freeform_tags DatabaseCloudVmCluster#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#id DatabaseCloudVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLocalBackupEnabled`<sup>Optional</sup> <a name="isLocalBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.isLocalBackupEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_local_backup_enabled DatabaseCloudVmCluster#is_local_backup_enabled}.

---

##### `isSparseDiskgroupEnabled`<sup>Optional</sup> <a name="isSparseDiskgroupEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.isSparseDiskgroupEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_sparse_diskgroup_enabled DatabaseCloudVmCluster#is_sparse_diskgroup_enabled}.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.licenseModel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#license_model DatabaseCloudVmCluster#license_model}.

---

##### `memorySizeInGbs`<sup>Optional</sup> <a name="memorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.memorySizeInGbs"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#memory_size_in_gbs DatabaseCloudVmCluster#memory_size_in_gbs}.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.nsgIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#nsg_ids DatabaseCloudVmCluster#nsg_ids}.

---

##### `ocpuCount`<sup>Optional</sup> <a name="ocpuCount" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.ocpuCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#ocpu_count DatabaseCloudVmCluster#ocpu_count}.

---

##### `privateZoneId`<sup>Optional</sup> <a name="privateZoneId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.privateZoneId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#private_zone_id DatabaseCloudVmCluster#private_zone_id}.

---

##### `scanListenerPortTcp`<sup>Optional</sup> <a name="scanListenerPortTcp" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.scanListenerPortTcp"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#scan_listener_port_tcp DatabaseCloudVmCluster#scan_listener_port_tcp}.

---

##### `scanListenerPortTcpSsl`<sup>Optional</sup> <a name="scanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.scanListenerPortTcpSsl"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#scan_listener_port_tcp_ssl DatabaseCloudVmCluster#scan_listener_port_tcp_ssl}.

---

##### `securityAttributes`<sup>Optional</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.securityAttributes"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#security_attributes DatabaseCloudVmCluster#security_attributes}.

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.subscriptionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#subscription_id DatabaseCloudVmCluster#subscription_id}.

---

##### `systemVersion`<sup>Optional</sup> <a name="systemVersion" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.systemVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#system_version DatabaseCloudVmCluster#system_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts">DatabaseCloudVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#timeouts DatabaseCloudVmCluster#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.timeZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#time_zone DatabaseCloudVmCluster#time_zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putCloudAutomationUpdateDetails">putCloudAutomationUpdateDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putDataCollectionOptions">putDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putFileSystemConfigurationDetails">putFileSystemConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetBackupNetworkNsgIds">resetBackupNetworkNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetCloudAutomationUpdateDetails">resetCloudAutomationUpdateDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetClusterName">resetClusterName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetCreateAsync">resetCreateAsync</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDataCollectionOptions">resetDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDataStoragePercentage">resetDataStoragePercentage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDataStorageSizeInTbs">resetDataStorageSizeInTbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDbNodeStorageSizeInGbs">resetDbNodeStorageSizeInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDbServers">resetDbServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetFileSystemConfigurationDetails">resetFileSystemConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetIsLocalBackupEnabled">resetIsLocalBackupEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetIsSparseDiskgroupEnabled">resetIsSparseDiskgroupEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetMemorySizeInGbs">resetMemorySizeInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetOcpuCount">resetOcpuCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetPrivateZoneId">resetPrivateZoneId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetScanListenerPortTcp">resetScanListenerPortTcp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetScanListenerPortTcpSsl">resetScanListenerPortTcpSsl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetSecurityAttributes">resetSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetSystemVersion">resetSystemVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudAutomationUpdateDetails` <a name="putCloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putCloudAutomationUpdateDetails"></a>

```java
public void putCloudAutomationUpdateDetails(DatabaseCloudVmClusterCloudAutomationUpdateDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putCloudAutomationUpdateDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails">DatabaseCloudVmClusterCloudAutomationUpdateDetails</a>

---

##### `putDataCollectionOptions` <a name="putDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putDataCollectionOptions"></a>

```java
public void putDataCollectionOptions(DatabaseCloudVmClusterDataCollectionOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions">DatabaseCloudVmClusterDataCollectionOptions</a>

---

##### `putFileSystemConfigurationDetails` <a name="putFileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putFileSystemConfigurationDetails"></a>

```java
public void putFileSystemConfigurationDetails(IResolvable OR java.util.List<DatabaseCloudVmClusterFileSystemConfigurationDetails> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putFileSystemConfigurationDetails.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails">DatabaseCloudVmClusterFileSystemConfigurationDetails</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putTimeouts"></a>

```java
public void putTimeouts(DatabaseCloudVmClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts">DatabaseCloudVmClusterTimeouts</a>

---

##### `resetBackupNetworkNsgIds` <a name="resetBackupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetBackupNetworkNsgIds"></a>

```java
public void resetBackupNetworkNsgIds()
```

##### `resetCloudAutomationUpdateDetails` <a name="resetCloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetCloudAutomationUpdateDetails"></a>

```java
public void resetCloudAutomationUpdateDetails()
```

##### `resetClusterName` <a name="resetClusterName" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetClusterName"></a>

```java
public void resetClusterName()
```

##### `resetCreateAsync` <a name="resetCreateAsync" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetCreateAsync"></a>

```java
public void resetCreateAsync()
```

##### `resetDataCollectionOptions` <a name="resetDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDataCollectionOptions"></a>

```java
public void resetDataCollectionOptions()
```

##### `resetDataStoragePercentage` <a name="resetDataStoragePercentage" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDataStoragePercentage"></a>

```java
public void resetDataStoragePercentage()
```

##### `resetDataStorageSizeInTbs` <a name="resetDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDataStorageSizeInTbs"></a>

```java
public void resetDataStorageSizeInTbs()
```

##### `resetDbNodeStorageSizeInGbs` <a name="resetDbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDbNodeStorageSizeInGbs"></a>

```java
public void resetDbNodeStorageSizeInGbs()
```

##### `resetDbServers` <a name="resetDbServers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDbServers"></a>

```java
public void resetDbServers()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDomain` <a name="resetDomain" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetFileSystemConfigurationDetails` <a name="resetFileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetFileSystemConfigurationDetails"></a>

```java
public void resetFileSystemConfigurationDetails()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetId"></a>

```java
public void resetId()
```

##### `resetIsLocalBackupEnabled` <a name="resetIsLocalBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetIsLocalBackupEnabled"></a>

```java
public void resetIsLocalBackupEnabled()
```

##### `resetIsSparseDiskgroupEnabled` <a name="resetIsSparseDiskgroupEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetIsSparseDiskgroupEnabled"></a>

```java
public void resetIsSparseDiskgroupEnabled()
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetLicenseModel"></a>

```java
public void resetLicenseModel()
```

##### `resetMemorySizeInGbs` <a name="resetMemorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetMemorySizeInGbs"></a>

```java
public void resetMemorySizeInGbs()
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetNsgIds"></a>

```java
public void resetNsgIds()
```

##### `resetOcpuCount` <a name="resetOcpuCount" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetOcpuCount"></a>

```java
public void resetOcpuCount()
```

##### `resetPrivateZoneId` <a name="resetPrivateZoneId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetPrivateZoneId"></a>

```java
public void resetPrivateZoneId()
```

##### `resetScanListenerPortTcp` <a name="resetScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetScanListenerPortTcp"></a>

```java
public void resetScanListenerPortTcp()
```

##### `resetScanListenerPortTcpSsl` <a name="resetScanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetScanListenerPortTcpSsl"></a>

```java
public void resetScanListenerPortTcpSsl()
```

##### `resetSecurityAttributes` <a name="resetSecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetSecurityAttributes"></a>

```java
public void resetSecurityAttributes()
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetSubscriptionId"></a>

```java
public void resetSubscriptionId()
```

##### `resetSystemVersion` <a name="resetSystemVersion" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetSystemVersion"></a>

```java
public void resetSystemVersion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeZone` <a name="resetTimeZone" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetTimeZone"></a>

```java
public void resetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseCloudVmCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster.DatabaseCloudVmCluster;

DatabaseCloudVmCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster.DatabaseCloudVmCluster;

DatabaseCloudVmCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster.DatabaseCloudVmCluster;

DatabaseCloudVmCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster.DatabaseCloudVmCluster;

DatabaseCloudVmCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseCloudVmCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseCloudVmCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseCloudVmCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseCloudVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseCloudVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cloudAutomationUpdateDetails">cloudAutomationUpdateDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference">DatabaseCloudVmClusterDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.diskRedundancy">diskRedundancy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.fileSystemConfigurationDetails">fileSystemConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList">DatabaseCloudVmClusterFileSystemConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.iormConfigCache">iormConfigCache</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList">DatabaseCloudVmClusterIormConfigCacheList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.lastUpdateHistoryEntryId">lastUpdateHistoryEntryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.listenerPort">listenerPort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanDnsName">scanDnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanDnsRecordId">scanDnsRecordId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanIpIds">scanIpIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.storageSizeInGbs">storageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference">DatabaseCloudVmClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.vipIds">vipIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.backupNetworkNsgIdsInput">backupNetworkNsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.backupSubnetIdInput">backupSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cloudAutomationUpdateDetailsInput">cloudAutomationUpdateDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails">DatabaseCloudVmClusterCloudAutomationUpdateDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cloudExadataInfrastructureIdInput">cloudExadataInfrastructureIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cpuCoreCountInput">cpuCoreCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.createAsyncInput">createAsyncInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataCollectionOptionsInput">dataCollectionOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions">DatabaseCloudVmClusterDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataStoragePercentageInput">dataStoragePercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataStorageSizeInTbsInput">dataStorageSizeInTbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dbNodeStorageSizeInGbsInput">dbNodeStorageSizeInGbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dbServersInput">dbServersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.fileSystemConfigurationDetailsInput">fileSystemConfigurationDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails">DatabaseCloudVmClusterFileSystemConfigurationDetails</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.giVersionInput">giVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.isLocalBackupEnabledInput">isLocalBackupEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.isSparseDiskgroupEnabledInput">isSparseDiskgroupEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.licenseModelInput">licenseModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.memorySizeInGbsInput">memorySizeInGbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.nsgIdsInput">nsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.ocpuCountInput">ocpuCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.privateZoneIdInput">privateZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanListenerPortTcpInput">scanListenerPortTcpInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanListenerPortTcpSslInput">scanListenerPortTcpSslInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.securityAttributesInput">securityAttributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.sshPublicKeysInput">sshPublicKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.systemVersionInput">systemVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts">DatabaseCloudVmClusterTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.backupNetworkNsgIds">backupNetworkNsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.backupSubnetId">backupSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.createAsync">createAsync</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataStoragePercentage">dataStoragePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dbNodeStorageSizeInGbs">dbNodeStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dbServers">dbServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.giVersion">giVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.isLocalBackupEnabled">isLocalBackupEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.isSparseDiskgroupEnabled">isSparseDiskgroupEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.memorySizeInGbs">memorySizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.ocpuCount">ocpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.privateZoneId">privateZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanListenerPortTcpSsl">scanListenerPortTcpSsl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.securityAttributes">securityAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.systemVersion">systemVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `cloudAutomationUpdateDetails`<sup>Required</sup> <a name="cloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cloudAutomationUpdateDetails"></a>

```java
public DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference getCloudAutomationUpdateDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference</a>

---

##### `dataCollectionOptions`<sup>Required</sup> <a name="dataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataCollectionOptions"></a>

```java
public DatabaseCloudVmClusterDataCollectionOptionsOutputReference getDataCollectionOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference">DatabaseCloudVmClusterDataCollectionOptionsOutputReference</a>

---

##### `diskRedundancy`<sup>Required</sup> <a name="diskRedundancy" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.diskRedundancy"></a>

```java
public java.lang.String getDiskRedundancy();
```

- *Type:* java.lang.String

---

##### `fileSystemConfigurationDetails`<sup>Required</sup> <a name="fileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.fileSystemConfigurationDetails"></a>

```java
public DatabaseCloudVmClusterFileSystemConfigurationDetailsList getFileSystemConfigurationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList">DatabaseCloudVmClusterFileSystemConfigurationDetailsList</a>

---

##### `iormConfigCache`<sup>Required</sup> <a name="iormConfigCache" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.iormConfigCache"></a>

```java
public DatabaseCloudVmClusterIormConfigCacheList getIormConfigCache();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList">DatabaseCloudVmClusterIormConfigCacheList</a>

---

##### `lastUpdateHistoryEntryId`<sup>Required</sup> <a name="lastUpdateHistoryEntryId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.lastUpdateHistoryEntryId"></a>

```java
public java.lang.String getLastUpdateHistoryEntryId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.listenerPort"></a>

```java
public java.lang.String getListenerPort();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `scanDnsName`<sup>Required</sup> <a name="scanDnsName" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanDnsName"></a>

```java
public java.lang.String getScanDnsName();
```

- *Type:* java.lang.String

---

##### `scanDnsRecordId`<sup>Required</sup> <a name="scanDnsRecordId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanDnsRecordId"></a>

```java
public java.lang.String getScanDnsRecordId();
```

- *Type:* java.lang.String

---

##### `scanIpIds`<sup>Required</sup> <a name="scanIpIds" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanIpIds"></a>

```java
public java.util.List<java.lang.String> getScanIpIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `storageSizeInGbs`<sup>Required</sup> <a name="storageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.storageSizeInGbs"></a>

```java
public java.lang.Number getStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeouts"></a>

```java
public DatabaseCloudVmClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference">DatabaseCloudVmClusterTimeoutsOutputReference</a>

---

##### `vipIds`<sup>Required</sup> <a name="vipIds" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.vipIds"></a>

```java
public java.util.List<java.lang.String> getVipIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

##### `backupNetworkNsgIdsInput`<sup>Optional</sup> <a name="backupNetworkNsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.backupNetworkNsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getBackupNetworkNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backupSubnetIdInput`<sup>Optional</sup> <a name="backupSubnetIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.backupSubnetIdInput"></a>

```java
public java.lang.String getBackupSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `cloudAutomationUpdateDetailsInput`<sup>Optional</sup> <a name="cloudAutomationUpdateDetailsInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cloudAutomationUpdateDetailsInput"></a>

```java
public DatabaseCloudVmClusterCloudAutomationUpdateDetails getCloudAutomationUpdateDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails">DatabaseCloudVmClusterCloudAutomationUpdateDetails</a>

---

##### `cloudExadataInfrastructureIdInput`<sup>Optional</sup> <a name="cloudExadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cloudExadataInfrastructureIdInput"></a>

```java
public java.lang.String getCloudExadataInfrastructureIdInput();
```

- *Type:* java.lang.String

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `cpuCoreCountInput`<sup>Optional</sup> <a name="cpuCoreCountInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cpuCoreCountInput"></a>

```java
public java.lang.Number getCpuCoreCountInput();
```

- *Type:* java.lang.Number

---

##### `createAsyncInput`<sup>Optional</sup> <a name="createAsyncInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.createAsyncInput"></a>

```java
public java.lang.Object getCreateAsyncInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataCollectionOptionsInput`<sup>Optional</sup> <a name="dataCollectionOptionsInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataCollectionOptionsInput"></a>

```java
public DatabaseCloudVmClusterDataCollectionOptions getDataCollectionOptionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions">DatabaseCloudVmClusterDataCollectionOptions</a>

---

##### `dataStoragePercentageInput`<sup>Optional</sup> <a name="dataStoragePercentageInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataStoragePercentageInput"></a>

```java
public java.lang.Number getDataStoragePercentageInput();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeInTbsInput`<sup>Optional</sup> <a name="dataStorageSizeInTbsInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataStorageSizeInTbsInput"></a>

```java
public java.lang.Number getDataStorageSizeInTbsInput();
```

- *Type:* java.lang.Number

---

##### `dbNodeStorageSizeInGbsInput`<sup>Optional</sup> <a name="dbNodeStorageSizeInGbsInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dbNodeStorageSizeInGbsInput"></a>

```java
public java.lang.Number getDbNodeStorageSizeInGbsInput();
```

- *Type:* java.lang.Number

---

##### `dbServersInput`<sup>Optional</sup> <a name="dbServersInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dbServersInput"></a>

```java
public java.util.List<java.lang.String> getDbServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `fileSystemConfigurationDetailsInput`<sup>Optional</sup> <a name="fileSystemConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.fileSystemConfigurationDetailsInput"></a>

```java
public java.lang.Object getFileSystemConfigurationDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails">DatabaseCloudVmClusterFileSystemConfigurationDetails</a>>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `giVersionInput`<sup>Optional</sup> <a name="giVersionInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.giVersionInput"></a>

```java
public java.lang.String getGiVersionInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isLocalBackupEnabledInput`<sup>Optional</sup> <a name="isLocalBackupEnabledInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.isLocalBackupEnabledInput"></a>

```java
public java.lang.Object getIsLocalBackupEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSparseDiskgroupEnabledInput`<sup>Optional</sup> <a name="isSparseDiskgroupEnabledInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.isSparseDiskgroupEnabledInput"></a>

```java
public java.lang.Object getIsSparseDiskgroupEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.licenseModelInput"></a>

```java
public java.lang.String getLicenseModelInput();
```

- *Type:* java.lang.String

---

##### `memorySizeInGbsInput`<sup>Optional</sup> <a name="memorySizeInGbsInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.memorySizeInGbsInput"></a>

```java
public java.lang.Number getMemorySizeInGbsInput();
```

- *Type:* java.lang.Number

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.nsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ocpuCountInput`<sup>Optional</sup> <a name="ocpuCountInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.ocpuCountInput"></a>

```java
public java.lang.Number getOcpuCountInput();
```

- *Type:* java.lang.Number

---

##### `privateZoneIdInput`<sup>Optional</sup> <a name="privateZoneIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.privateZoneIdInput"></a>

```java
public java.lang.String getPrivateZoneIdInput();
```

- *Type:* java.lang.String

---

##### `scanListenerPortTcpInput`<sup>Optional</sup> <a name="scanListenerPortTcpInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanListenerPortTcpInput"></a>

```java
public java.lang.Number getScanListenerPortTcpInput();
```

- *Type:* java.lang.Number

---

##### `scanListenerPortTcpSslInput`<sup>Optional</sup> <a name="scanListenerPortTcpSslInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanListenerPortTcpSslInput"></a>

```java
public java.lang.Number getScanListenerPortTcpSslInput();
```

- *Type:* java.lang.Number

---

##### `securityAttributesInput`<sup>Optional</sup> <a name="securityAttributesInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.securityAttributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `sshPublicKeysInput`<sup>Optional</sup> <a name="sshPublicKeysInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.sshPublicKeysInput"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `systemVersionInput`<sup>Optional</sup> <a name="systemVersionInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.systemVersionInput"></a>

```java
public java.lang.String getSystemVersionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts">DatabaseCloudVmClusterTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `backupNetworkNsgIds`<sup>Required</sup> <a name="backupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.backupNetworkNsgIds"></a>

```java
public java.util.List<java.lang.String> getBackupNetworkNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backupSubnetId`<sup>Required</sup> <a name="backupSubnetId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.backupSubnetId"></a>

```java
public java.lang.String getBackupSubnetId();
```

- *Type:* java.lang.String

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cloudExadataInfrastructureId"></a>

```java
public java.lang.String getCloudExadataInfrastructureId();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

---

##### `createAsync`<sup>Required</sup> <a name="createAsync" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.createAsync"></a>

```java
public java.lang.Object getCreateAsync();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataStoragePercentage`<sup>Required</sup> <a name="dataStoragePercentage" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataStoragePercentage"></a>

```java
public java.lang.Number getDataStoragePercentage();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeInTbs`<sup>Required</sup> <a name="dataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataStorageSizeInTbs"></a>

```java
public java.lang.Number getDataStorageSizeInTbs();
```

- *Type:* java.lang.Number

---

##### `dbNodeStorageSizeInGbs`<sup>Required</sup> <a name="dbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dbNodeStorageSizeInGbs"></a>

```java
public java.lang.Number getDbNodeStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `dbServers`<sup>Required</sup> <a name="dbServers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dbServers"></a>

```java
public java.util.List<java.lang.String> getDbServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `giVersion`<sup>Required</sup> <a name="giVersion" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.giVersion"></a>

```java
public java.lang.String getGiVersion();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isLocalBackupEnabled`<sup>Required</sup> <a name="isLocalBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.isLocalBackupEnabled"></a>

```java
public java.lang.Object getIsLocalBackupEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSparseDiskgroupEnabled`<sup>Required</sup> <a name="isSparseDiskgroupEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.isSparseDiskgroupEnabled"></a>

```java
public java.lang.Object getIsSparseDiskgroupEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `memorySizeInGbs`<sup>Required</sup> <a name="memorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.memorySizeInGbs"></a>

```java
public java.lang.Number getMemorySizeInGbs();
```

- *Type:* java.lang.Number

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ocpuCount`<sup>Required</sup> <a name="ocpuCount" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.ocpuCount"></a>

```java
public java.lang.Number getOcpuCount();
```

- *Type:* java.lang.Number

---

##### `privateZoneId`<sup>Required</sup> <a name="privateZoneId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.privateZoneId"></a>

```java
public java.lang.String getPrivateZoneId();
```

- *Type:* java.lang.String

---

##### `scanListenerPortTcp`<sup>Required</sup> <a name="scanListenerPortTcp" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanListenerPortTcp"></a>

```java
public java.lang.Number getScanListenerPortTcp();
```

- *Type:* java.lang.Number

---

##### `scanListenerPortTcpSsl`<sup>Required</sup> <a name="scanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanListenerPortTcpSsl"></a>

```java
public java.lang.Number getScanListenerPortTcpSsl();
```

- *Type:* java.lang.Number

---

##### `securityAttributes`<sup>Required</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.securityAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.sshPublicKeys"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `systemVersion`<sup>Required</sup> <a name="systemVersion" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.systemVersion"></a>

```java
public java.lang.String getSystemVersion();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseCloudVmClusterCloudAutomationUpdateDetails <a name="DatabaseCloudVmClusterCloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails;

DatabaseCloudVmClusterCloudAutomationUpdateDetails.builder()
//  .applyUpdateTimePreference(DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference)
//  .freezePeriod(DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod)
//  .isEarlyAdoptionEnabled(java.lang.Boolean)
//  .isEarlyAdoptionEnabled(IResolvable)
//  .isFreezePeriodEnabled(java.lang.Boolean)
//  .isFreezePeriodEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails.property.applyUpdateTimePreference">applyUpdateTimePreference</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a></code> | apply_update_time_preference block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails.property.freezePeriod">freezePeriod</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod</a></code> | freeze_period block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails.property.isEarlyAdoptionEnabled">isEarlyAdoptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_early_adoption_enabled DatabaseCloudVmCluster#is_early_adoption_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails.property.isFreezePeriodEnabled">isFreezePeriodEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_freeze_period_enabled DatabaseCloudVmCluster#is_freeze_period_enabled}. |

---

##### `applyUpdateTimePreference`<sup>Optional</sup> <a name="applyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails.property.applyUpdateTimePreference"></a>

```java
public DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference getApplyUpdateTimePreference();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

apply_update_time_preference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#apply_update_time_preference DatabaseCloudVmCluster#apply_update_time_preference}

---

##### `freezePeriod`<sup>Optional</sup> <a name="freezePeriod" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails.property.freezePeriod"></a>

```java
public DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod getFreezePeriod();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod</a>

freeze_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#freeze_period DatabaseCloudVmCluster#freeze_period}

---

##### `isEarlyAdoptionEnabled`<sup>Optional</sup> <a name="isEarlyAdoptionEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails.property.isEarlyAdoptionEnabled"></a>

```java
public java.lang.Object getIsEarlyAdoptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_early_adoption_enabled DatabaseCloudVmCluster#is_early_adoption_enabled}.

---

##### `isFreezePeriodEnabled`<sup>Optional</sup> <a name="isFreezePeriodEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails.property.isFreezePeriodEnabled"></a>

```java
public java.lang.Object getIsFreezePeriodEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_freeze_period_enabled DatabaseCloudVmCluster#is_freeze_period_enabled}.

---

### DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference <a name="DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference;

DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.builder()
//  .applyUpdatePreferredEndTime(java.lang.String)
//  .applyUpdatePreferredStartTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.property.applyUpdatePreferredEndTime">applyUpdatePreferredEndTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#apply_update_preferred_end_time DatabaseCloudVmCluster#apply_update_preferred_end_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.property.applyUpdatePreferredStartTime">applyUpdatePreferredStartTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#apply_update_preferred_start_time DatabaseCloudVmCluster#apply_update_preferred_start_time}. |

---

##### `applyUpdatePreferredEndTime`<sup>Optional</sup> <a name="applyUpdatePreferredEndTime" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.property.applyUpdatePreferredEndTime"></a>

```java
public java.lang.String getApplyUpdatePreferredEndTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#apply_update_preferred_end_time DatabaseCloudVmCluster#apply_update_preferred_end_time}.

---

##### `applyUpdatePreferredStartTime`<sup>Optional</sup> <a name="applyUpdatePreferredStartTime" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.property.applyUpdatePreferredStartTime"></a>

```java
public java.lang.String getApplyUpdatePreferredStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#apply_update_preferred_start_time DatabaseCloudVmCluster#apply_update_preferred_start_time}.

---

### DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod <a name="DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod;

DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod.builder()
//  .freezePeriodEndTime(java.lang.String)
//  .freezePeriodStartTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod.property.freezePeriodEndTime">freezePeriodEndTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#freeze_period_end_time DatabaseCloudVmCluster#freeze_period_end_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod.property.freezePeriodStartTime">freezePeriodStartTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#freeze_period_start_time DatabaseCloudVmCluster#freeze_period_start_time}. |

---

##### `freezePeriodEndTime`<sup>Optional</sup> <a name="freezePeriodEndTime" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod.property.freezePeriodEndTime"></a>

```java
public java.lang.String getFreezePeriodEndTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#freeze_period_end_time DatabaseCloudVmCluster#freeze_period_end_time}.

---

##### `freezePeriodStartTime`<sup>Optional</sup> <a name="freezePeriodStartTime" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod.property.freezePeriodStartTime"></a>

```java
public java.lang.String getFreezePeriodStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#freeze_period_start_time DatabaseCloudVmCluster#freeze_period_start_time}.

---

### DatabaseCloudVmClusterConfig <a name="DatabaseCloudVmClusterConfig" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster.DatabaseCloudVmClusterConfig;

DatabaseCloudVmClusterConfig.builder()
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
    .backupSubnetId(java.lang.String)
    .cloudExadataInfrastructureId(java.lang.String)
    .compartmentId(java.lang.String)
    .cpuCoreCount(java.lang.Number)
    .displayName(java.lang.String)
    .giVersion(java.lang.String)
    .hostname(java.lang.String)
    .sshPublicKeys(java.util.List<java.lang.String>)
    .subnetId(java.lang.String)
//  .backupNetworkNsgIds(java.util.List<java.lang.String>)
//  .cloudAutomationUpdateDetails(DatabaseCloudVmClusterCloudAutomationUpdateDetails)
//  .clusterName(java.lang.String)
//  .createAsync(java.lang.Boolean)
//  .createAsync(IResolvable)
//  .dataCollectionOptions(DatabaseCloudVmClusterDataCollectionOptions)
//  .dataStoragePercentage(java.lang.Number)
//  .dataStorageSizeInTbs(java.lang.Number)
//  .dbNodeStorageSizeInGbs(java.lang.Number)
//  .dbServers(java.util.List<java.lang.String>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .domain(java.lang.String)
//  .fileSystemConfigurationDetails(IResolvable)
//  .fileSystemConfigurationDetails(java.util.List<DatabaseCloudVmClusterFileSystemConfigurationDetails>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isLocalBackupEnabled(java.lang.Boolean)
//  .isLocalBackupEnabled(IResolvable)
//  .isSparseDiskgroupEnabled(java.lang.Boolean)
//  .isSparseDiskgroupEnabled(IResolvable)
//  .licenseModel(java.lang.String)
//  .memorySizeInGbs(java.lang.Number)
//  .nsgIds(java.util.List<java.lang.String>)
//  .ocpuCount(java.lang.Number)
//  .privateZoneId(java.lang.String)
//  .scanListenerPortTcp(java.lang.Number)
//  .scanListenerPortTcpSsl(java.lang.Number)
//  .securityAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .subscriptionId(java.lang.String)
//  .systemVersion(java.lang.String)
//  .timeouts(DatabaseCloudVmClusterTimeouts)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.backupSubnetId">backupSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#backup_subnet_id DatabaseCloudVmCluster#backup_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cloud_exadata_infrastructure_id DatabaseCloudVmCluster#cloud_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#compartment_id DatabaseCloudVmCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cpu_core_count DatabaseCloudVmCluster#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#display_name DatabaseCloudVmCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.giVersion">giVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#gi_version DatabaseCloudVmCluster#gi_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#hostname DatabaseCloudVmCluster#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#ssh_public_keys DatabaseCloudVmCluster#ssh_public_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#subnet_id DatabaseCloudVmCluster#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.backupNetworkNsgIds">backupNetworkNsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#backup_network_nsg_ids DatabaseCloudVmCluster#backup_network_nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.cloudAutomationUpdateDetails">cloudAutomationUpdateDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails">DatabaseCloudVmClusterCloudAutomationUpdateDetails</a></code> | cloud_automation_update_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cluster_name DatabaseCloudVmCluster#cluster_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.createAsync">createAsync</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#create_async DatabaseCloudVmCluster#create_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions">DatabaseCloudVmClusterDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dataStoragePercentage">dataStoragePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#data_storage_percentage DatabaseCloudVmCluster#data_storage_percentage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#data_storage_size_in_tbs DatabaseCloudVmCluster#data_storage_size_in_tbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dbNodeStorageSizeInGbs">dbNodeStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#db_node_storage_size_in_gbs DatabaseCloudVmCluster#db_node_storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dbServers">dbServers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#db_servers DatabaseCloudVmCluster#db_servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#defined_tags DatabaseCloudVmCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#domain DatabaseCloudVmCluster#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.fileSystemConfigurationDetails">fileSystemConfigurationDetails</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails">DatabaseCloudVmClusterFileSystemConfigurationDetails</a>></code> | file_system_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#freeform_tags DatabaseCloudVmCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#id DatabaseCloudVmCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.isLocalBackupEnabled">isLocalBackupEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_local_backup_enabled DatabaseCloudVmCluster#is_local_backup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.isSparseDiskgroupEnabled">isSparseDiskgroupEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_sparse_diskgroup_enabled DatabaseCloudVmCluster#is_sparse_diskgroup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#license_model DatabaseCloudVmCluster#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.memorySizeInGbs">memorySizeInGbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#memory_size_in_gbs DatabaseCloudVmCluster#memory_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#nsg_ids DatabaseCloudVmCluster#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.ocpuCount">ocpuCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#ocpu_count DatabaseCloudVmCluster#ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.privateZoneId">privateZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#private_zone_id DatabaseCloudVmCluster#private_zone_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#scan_listener_port_tcp DatabaseCloudVmCluster#scan_listener_port_tcp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.scanListenerPortTcpSsl">scanListenerPortTcpSsl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#scan_listener_port_tcp_ssl DatabaseCloudVmCluster#scan_listener_port_tcp_ssl}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.securityAttributes">securityAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#security_attributes DatabaseCloudVmCluster#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#subscription_id DatabaseCloudVmCluster#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.systemVersion">systemVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#system_version DatabaseCloudVmCluster#system_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts">DatabaseCloudVmClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#time_zone DatabaseCloudVmCluster#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backupSubnetId`<sup>Required</sup> <a name="backupSubnetId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.backupSubnetId"></a>

```java
public java.lang.String getBackupSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#backup_subnet_id DatabaseCloudVmCluster#backup_subnet_id}.

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.cloudExadataInfrastructureId"></a>

```java
public java.lang.String getCloudExadataInfrastructureId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cloud_exadata_infrastructure_id DatabaseCloudVmCluster#cloud_exadata_infrastructure_id}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#compartment_id DatabaseCloudVmCluster#compartment_id}.

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cpu_core_count DatabaseCloudVmCluster#cpu_core_count}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#display_name DatabaseCloudVmCluster#display_name}.

---

##### `giVersion`<sup>Required</sup> <a name="giVersion" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.giVersion"></a>

```java
public java.lang.String getGiVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#gi_version DatabaseCloudVmCluster#gi_version}.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#hostname DatabaseCloudVmCluster#hostname}.

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.sshPublicKeys"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#ssh_public_keys DatabaseCloudVmCluster#ssh_public_keys}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#subnet_id DatabaseCloudVmCluster#subnet_id}.

---

##### `backupNetworkNsgIds`<sup>Optional</sup> <a name="backupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.backupNetworkNsgIds"></a>

```java
public java.util.List<java.lang.String> getBackupNetworkNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#backup_network_nsg_ids DatabaseCloudVmCluster#backup_network_nsg_ids}.

---

##### `cloudAutomationUpdateDetails`<sup>Optional</sup> <a name="cloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.cloudAutomationUpdateDetails"></a>

```java
public DatabaseCloudVmClusterCloudAutomationUpdateDetails getCloudAutomationUpdateDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails">DatabaseCloudVmClusterCloudAutomationUpdateDetails</a>

cloud_automation_update_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cloud_automation_update_details DatabaseCloudVmCluster#cloud_automation_update_details}

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cluster_name DatabaseCloudVmCluster#cluster_name}.

---

##### `createAsync`<sup>Optional</sup> <a name="createAsync" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.createAsync"></a>

```java
public java.lang.Object getCreateAsync();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#create_async DatabaseCloudVmCluster#create_async}.

---

##### `dataCollectionOptions`<sup>Optional</sup> <a name="dataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dataCollectionOptions"></a>

```java
public DatabaseCloudVmClusterDataCollectionOptions getDataCollectionOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions">DatabaseCloudVmClusterDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#data_collection_options DatabaseCloudVmCluster#data_collection_options}

---

##### `dataStoragePercentage`<sup>Optional</sup> <a name="dataStoragePercentage" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dataStoragePercentage"></a>

```java
public java.lang.Number getDataStoragePercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#data_storage_percentage DatabaseCloudVmCluster#data_storage_percentage}.

---

##### `dataStorageSizeInTbs`<sup>Optional</sup> <a name="dataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dataStorageSizeInTbs"></a>

```java
public java.lang.Number getDataStorageSizeInTbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#data_storage_size_in_tbs DatabaseCloudVmCluster#data_storage_size_in_tbs}.

---

##### `dbNodeStorageSizeInGbs`<sup>Optional</sup> <a name="dbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dbNodeStorageSizeInGbs"></a>

```java
public java.lang.Number getDbNodeStorageSizeInGbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#db_node_storage_size_in_gbs DatabaseCloudVmCluster#db_node_storage_size_in_gbs}.

---

##### `dbServers`<sup>Optional</sup> <a name="dbServers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dbServers"></a>

```java
public java.util.List<java.lang.String> getDbServers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#db_servers DatabaseCloudVmCluster#db_servers}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#defined_tags DatabaseCloudVmCluster#defined_tags}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#domain DatabaseCloudVmCluster#domain}.

---

##### `fileSystemConfigurationDetails`<sup>Optional</sup> <a name="fileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.fileSystemConfigurationDetails"></a>

```java
public java.lang.Object getFileSystemConfigurationDetails();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails">DatabaseCloudVmClusterFileSystemConfigurationDetails</a>>

file_system_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#file_system_configuration_details DatabaseCloudVmCluster#file_system_configuration_details}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#freeform_tags DatabaseCloudVmCluster#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#id DatabaseCloudVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLocalBackupEnabled`<sup>Optional</sup> <a name="isLocalBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.isLocalBackupEnabled"></a>

```java
public java.lang.Object getIsLocalBackupEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_local_backup_enabled DatabaseCloudVmCluster#is_local_backup_enabled}.

---

##### `isSparseDiskgroupEnabled`<sup>Optional</sup> <a name="isSparseDiskgroupEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.isSparseDiskgroupEnabled"></a>

```java
public java.lang.Object getIsSparseDiskgroupEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_sparse_diskgroup_enabled DatabaseCloudVmCluster#is_sparse_diskgroup_enabled}.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#license_model DatabaseCloudVmCluster#license_model}.

---

##### `memorySizeInGbs`<sup>Optional</sup> <a name="memorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.memorySizeInGbs"></a>

```java
public java.lang.Number getMemorySizeInGbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#memory_size_in_gbs DatabaseCloudVmCluster#memory_size_in_gbs}.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#nsg_ids DatabaseCloudVmCluster#nsg_ids}.

---

##### `ocpuCount`<sup>Optional</sup> <a name="ocpuCount" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.ocpuCount"></a>

```java
public java.lang.Number getOcpuCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#ocpu_count DatabaseCloudVmCluster#ocpu_count}.

---

##### `privateZoneId`<sup>Optional</sup> <a name="privateZoneId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.privateZoneId"></a>

```java
public java.lang.String getPrivateZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#private_zone_id DatabaseCloudVmCluster#private_zone_id}.

---

##### `scanListenerPortTcp`<sup>Optional</sup> <a name="scanListenerPortTcp" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.scanListenerPortTcp"></a>

```java
public java.lang.Number getScanListenerPortTcp();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#scan_listener_port_tcp DatabaseCloudVmCluster#scan_listener_port_tcp}.

---

##### `scanListenerPortTcpSsl`<sup>Optional</sup> <a name="scanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.scanListenerPortTcpSsl"></a>

```java
public java.lang.Number getScanListenerPortTcpSsl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#scan_listener_port_tcp_ssl DatabaseCloudVmCluster#scan_listener_port_tcp_ssl}.

---

##### `securityAttributes`<sup>Optional</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.securityAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#security_attributes DatabaseCloudVmCluster#security_attributes}.

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#subscription_id DatabaseCloudVmCluster#subscription_id}.

---

##### `systemVersion`<sup>Optional</sup> <a name="systemVersion" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.systemVersion"></a>

```java
public java.lang.String getSystemVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#system_version DatabaseCloudVmCluster#system_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.timeouts"></a>

```java
public DatabaseCloudVmClusterTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts">DatabaseCloudVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#timeouts DatabaseCloudVmCluster#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#time_zone DatabaseCloudVmCluster#time_zone}.

---

### DatabaseCloudVmClusterDataCollectionOptions <a name="DatabaseCloudVmClusterDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster.DatabaseCloudVmClusterDataCollectionOptions;

DatabaseCloudVmClusterDataCollectionOptions.builder()
//  .isDiagnosticsEventsEnabled(java.lang.Boolean)
//  .isDiagnosticsEventsEnabled(IResolvable)
//  .isHealthMonitoringEnabled(java.lang.Boolean)
//  .isHealthMonitoringEnabled(IResolvable)
//  .isIncidentLogsEnabled(java.lang.Boolean)
//  .isIncidentLogsEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_diagnostics_events_enabled DatabaseCloudVmCluster#is_diagnostics_events_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions.property.isHealthMonitoringEnabled">isHealthMonitoringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_health_monitoring_enabled DatabaseCloudVmCluster#is_health_monitoring_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_incident_logs_enabled DatabaseCloudVmCluster#is_incident_logs_enabled}. |

---

##### `isDiagnosticsEventsEnabled`<sup>Optional</sup> <a name="isDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```java
public java.lang.Object getIsDiagnosticsEventsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_diagnostics_events_enabled DatabaseCloudVmCluster#is_diagnostics_events_enabled}.

---

##### `isHealthMonitoringEnabled`<sup>Optional</sup> <a name="isHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```java
public java.lang.Object getIsHealthMonitoringEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_health_monitoring_enabled DatabaseCloudVmCluster#is_health_monitoring_enabled}.

---

##### `isIncidentLogsEnabled`<sup>Optional</sup> <a name="isIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```java
public java.lang.Object getIsIncidentLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_incident_logs_enabled DatabaseCloudVmCluster#is_incident_logs_enabled}.

---

### DatabaseCloudVmClusterFileSystemConfigurationDetails <a name="DatabaseCloudVmClusterFileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster.DatabaseCloudVmClusterFileSystemConfigurationDetails;

DatabaseCloudVmClusterFileSystemConfigurationDetails.builder()
//  .fileSystemSizeGb(java.lang.Number)
//  .mountPoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails.property.fileSystemSizeGb">fileSystemSizeGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#file_system_size_gb DatabaseCloudVmCluster#file_system_size_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails.property.mountPoint">mountPoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#mount_point DatabaseCloudVmCluster#mount_point}. |

---

##### `fileSystemSizeGb`<sup>Optional</sup> <a name="fileSystemSizeGb" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails.property.fileSystemSizeGb"></a>

```java
public java.lang.Number getFileSystemSizeGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#file_system_size_gb DatabaseCloudVmCluster#file_system_size_gb}.

---

##### `mountPoint`<sup>Optional</sup> <a name="mountPoint" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails.property.mountPoint"></a>

```java
public java.lang.String getMountPoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#mount_point DatabaseCloudVmCluster#mount_point}.

---

### DatabaseCloudVmClusterIormConfigCache <a name="DatabaseCloudVmClusterIormConfigCache" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCache"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCache.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster.DatabaseCloudVmClusterIormConfigCache;

DatabaseCloudVmClusterIormConfigCache.builder()
    .build();
```


### DatabaseCloudVmClusterIormConfigCacheDbPlans <a name="DatabaseCloudVmClusterIormConfigCacheDbPlans" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlans.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster.DatabaseCloudVmClusterIormConfigCacheDbPlans;

DatabaseCloudVmClusterIormConfigCacheDbPlans.builder()
    .build();
```


### DatabaseCloudVmClusterTimeouts <a name="DatabaseCloudVmClusterTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster.DatabaseCloudVmClusterTimeouts;

DatabaseCloudVmClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#create DatabaseCloudVmCluster#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#delete DatabaseCloudVmCluster#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#update DatabaseCloudVmCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#create DatabaseCloudVmCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#delete DatabaseCloudVmCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#update DatabaseCloudVmCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference <a name="DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference;

new DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resetApplyUpdatePreferredEndTime">resetApplyUpdatePreferredEndTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resetApplyUpdatePreferredStartTime">resetApplyUpdatePreferredStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplyUpdatePreferredEndTime` <a name="resetApplyUpdatePreferredEndTime" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resetApplyUpdatePreferredEndTime"></a>

```java
public void resetApplyUpdatePreferredEndTime()
```

##### `resetApplyUpdatePreferredStartTime` <a name="resetApplyUpdatePreferredStartTime" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resetApplyUpdatePreferredStartTime"></a>

```java
public void resetApplyUpdatePreferredStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTimeInput">applyUpdatePreferredEndTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTimeInput">applyUpdatePreferredStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTime">applyUpdatePreferredEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTime">applyUpdatePreferredStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applyUpdatePreferredEndTimeInput`<sup>Optional</sup> <a name="applyUpdatePreferredEndTimeInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTimeInput"></a>

```java
public java.lang.String getApplyUpdatePreferredEndTimeInput();
```

- *Type:* java.lang.String

---

##### `applyUpdatePreferredStartTimeInput`<sup>Optional</sup> <a name="applyUpdatePreferredStartTimeInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTimeInput"></a>

```java
public java.lang.String getApplyUpdatePreferredStartTimeInput();
```

- *Type:* java.lang.String

---

##### `applyUpdatePreferredEndTime`<sup>Required</sup> <a name="applyUpdatePreferredEndTime" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTime"></a>

```java
public java.lang.String getApplyUpdatePreferredEndTime();
```

- *Type:* java.lang.String

---

##### `applyUpdatePreferredStartTime`<sup>Required</sup> <a name="applyUpdatePreferredStartTime" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTime"></a>

```java
public java.lang.String getApplyUpdatePreferredStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.internalValue"></a>

```java
public DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

---


### DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference <a name="DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference;

new DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resetFreezePeriodEndTime">resetFreezePeriodEndTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resetFreezePeriodStartTime">resetFreezePeriodStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFreezePeriodEndTime` <a name="resetFreezePeriodEndTime" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resetFreezePeriodEndTime"></a>

```java
public void resetFreezePeriodEndTime()
```

##### `resetFreezePeriodStartTime` <a name="resetFreezePeriodStartTime" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resetFreezePeriodStartTime"></a>

```java
public void resetFreezePeriodStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTimeInput">freezePeriodEndTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTimeInput">freezePeriodStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTime">freezePeriodEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTime">freezePeriodStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `freezePeriodEndTimeInput`<sup>Optional</sup> <a name="freezePeriodEndTimeInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTimeInput"></a>

```java
public java.lang.String getFreezePeriodEndTimeInput();
```

- *Type:* java.lang.String

---

##### `freezePeriodStartTimeInput`<sup>Optional</sup> <a name="freezePeriodStartTimeInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTimeInput"></a>

```java
public java.lang.String getFreezePeriodStartTimeInput();
```

- *Type:* java.lang.String

---

##### `freezePeriodEndTime`<sup>Required</sup> <a name="freezePeriodEndTime" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTime"></a>

```java
public java.lang.String getFreezePeriodEndTime();
```

- *Type:* java.lang.String

---

##### `freezePeriodStartTime`<sup>Required</sup> <a name="freezePeriodStartTime" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTime"></a>

```java
public java.lang.String getFreezePeriodStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.internalValue"></a>

```java
public DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod</a>

---


### DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference <a name="DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference;

new DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.putApplyUpdateTimePreference">putApplyUpdateTimePreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.putFreezePeriod">putFreezePeriod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resetApplyUpdateTimePreference">resetApplyUpdateTimePreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resetFreezePeriod">resetFreezePeriod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resetIsEarlyAdoptionEnabled">resetIsEarlyAdoptionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resetIsFreezePeriodEnabled">resetIsFreezePeriodEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApplyUpdateTimePreference` <a name="putApplyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.putApplyUpdateTimePreference"></a>

```java
public void putApplyUpdateTimePreference(DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.putApplyUpdateTimePreference.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

---

##### `putFreezePeriod` <a name="putFreezePeriod" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.putFreezePeriod"></a>

```java
public void putFreezePeriod(DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.putFreezePeriod.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod</a>

---

##### `resetApplyUpdateTimePreference` <a name="resetApplyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resetApplyUpdateTimePreference"></a>

```java
public void resetApplyUpdateTimePreference()
```

##### `resetFreezePeriod` <a name="resetFreezePeriod" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resetFreezePeriod"></a>

```java
public void resetFreezePeriod()
```

##### `resetIsEarlyAdoptionEnabled` <a name="resetIsEarlyAdoptionEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resetIsEarlyAdoptionEnabled"></a>

```java
public void resetIsEarlyAdoptionEnabled()
```

##### `resetIsFreezePeriodEnabled` <a name="resetIsFreezePeriodEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resetIsFreezePeriodEnabled"></a>

```java
public void resetIsFreezePeriodEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreference">applyUpdateTimePreference</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.freezePeriod">freezePeriod</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreferenceInput">applyUpdateTimePreferenceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.freezePeriodInput">freezePeriodInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabledInput">isEarlyAdoptionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabledInput">isFreezePeriodEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabled">isEarlyAdoptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabled">isFreezePeriodEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails">DatabaseCloudVmClusterCloudAutomationUpdateDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applyUpdateTimePreference`<sup>Required</sup> <a name="applyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreference"></a>

```java
public DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference getApplyUpdateTimePreference();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference</a>

---

##### `freezePeriod`<sup>Required</sup> <a name="freezePeriod" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.freezePeriod"></a>

```java
public DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference getFreezePeriod();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference</a>

---

##### `applyUpdateTimePreferenceInput`<sup>Optional</sup> <a name="applyUpdateTimePreferenceInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreferenceInput"></a>

```java
public DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference getApplyUpdateTimePreferenceInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

---

##### `freezePeriodInput`<sup>Optional</sup> <a name="freezePeriodInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.freezePeriodInput"></a>

```java
public DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod getFreezePeriodInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod</a>

---

##### `isEarlyAdoptionEnabledInput`<sup>Optional</sup> <a name="isEarlyAdoptionEnabledInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabledInput"></a>

```java
public java.lang.Object getIsEarlyAdoptionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isFreezePeriodEnabledInput`<sup>Optional</sup> <a name="isFreezePeriodEnabledInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabledInput"></a>

```java
public java.lang.Object getIsFreezePeriodEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isEarlyAdoptionEnabled`<sup>Required</sup> <a name="isEarlyAdoptionEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabled"></a>

```java
public java.lang.Object getIsEarlyAdoptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isFreezePeriodEnabled`<sup>Required</sup> <a name="isFreezePeriodEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabled"></a>

```java
public java.lang.Object getIsFreezePeriodEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.internalValue"></a>

```java
public DatabaseCloudVmClusterCloudAutomationUpdateDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails">DatabaseCloudVmClusterCloudAutomationUpdateDetails</a>

---


### DatabaseCloudVmClusterDataCollectionOptionsOutputReference <a name="DatabaseCloudVmClusterDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference;

new DatabaseCloudVmClusterDataCollectionOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">resetIsDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">resetIsHealthMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">resetIsIncidentLogsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsDiagnosticsEventsEnabled` <a name="resetIsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```java
public void resetIsDiagnosticsEventsEnabled()
```

##### `resetIsHealthMonitoringEnabled` <a name="resetIsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```java
public void resetIsHealthMonitoringEnabled()
```

##### `resetIsIncidentLogsEnabled` <a name="resetIsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```java
public void resetIsIncidentLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">isDiagnosticsEventsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">isHealthMonitoringEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">isIncidentLogsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">isHealthMonitoringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions">DatabaseCloudVmClusterDataCollectionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isDiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="isDiagnosticsEventsEnabledInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```java
public java.lang.Object getIsDiagnosticsEventsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isHealthMonitoringEnabledInput`<sup>Optional</sup> <a name="isHealthMonitoringEnabledInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```java
public java.lang.Object getIsHealthMonitoringEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isIncidentLogsEnabledInput`<sup>Optional</sup> <a name="isIncidentLogsEnabledInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```java
public java.lang.Object getIsIncidentLogsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isDiagnosticsEventsEnabled`<sup>Required</sup> <a name="isDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```java
public java.lang.Object getIsDiagnosticsEventsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isHealthMonitoringEnabled`<sup>Required</sup> <a name="isHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```java
public java.lang.Object getIsHealthMonitoringEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isIncidentLogsEnabled`<sup>Required</sup> <a name="isIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```java
public java.lang.Object getIsIncidentLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.internalValue"></a>

```java
public DatabaseCloudVmClusterDataCollectionOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions">DatabaseCloudVmClusterDataCollectionOptions</a>

---


### DatabaseCloudVmClusterFileSystemConfigurationDetailsList <a name="DatabaseCloudVmClusterFileSystemConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList;

new DatabaseCloudVmClusterFileSystemConfigurationDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.get"></a>

```java
public DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails">DatabaseCloudVmClusterFileSystemConfigurationDetails</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails">DatabaseCloudVmClusterFileSystemConfigurationDetails</a>>

---


### DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference <a name="DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference;

new DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.resetFileSystemSizeGb">resetFileSystemSizeGb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.resetMountPoint">resetMountPoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileSystemSizeGb` <a name="resetFileSystemSizeGb" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.resetFileSystemSizeGb"></a>

```java
public void resetFileSystemSizeGb()
```

##### `resetMountPoint` <a name="resetMountPoint" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.resetMountPoint"></a>

```java
public void resetMountPoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGbInput">fileSystemSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.mountPointInput">mountPointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGb">fileSystemSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.mountPoint">mountPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails">DatabaseCloudVmClusterFileSystemConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileSystemSizeGbInput`<sup>Optional</sup> <a name="fileSystemSizeGbInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGbInput"></a>

```java
public java.lang.Number getFileSystemSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `mountPointInput`<sup>Optional</sup> <a name="mountPointInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.mountPointInput"></a>

```java
public java.lang.String getMountPointInput();
```

- *Type:* java.lang.String

---

##### `fileSystemSizeGb`<sup>Required</sup> <a name="fileSystemSizeGb" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGb"></a>

```java
public java.lang.Number getFileSystemSizeGb();
```

- *Type:* java.lang.Number

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.mountPoint"></a>

```java
public java.lang.String getMountPoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails">DatabaseCloudVmClusterFileSystemConfigurationDetails</a>

---


### DatabaseCloudVmClusterIormConfigCacheDbPlansList <a name="DatabaseCloudVmClusterIormConfigCacheDbPlansList" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList;

new DatabaseCloudVmClusterIormConfigCacheDbPlansList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.get"></a>

```java
public DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference <a name="DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference;

new DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.dbName">dbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.flashCacheLimit">flashCacheLimit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.share">share</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlans">DatabaseCloudVmClusterIormConfigCacheDbPlans</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

---

##### `flashCacheLimit`<sup>Required</sup> <a name="flashCacheLimit" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.flashCacheLimit"></a>

```java
public java.lang.String getFlashCacheLimit();
```

- *Type:* java.lang.String

---

##### `share`<sup>Required</sup> <a name="share" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.share"></a>

```java
public java.lang.Number getShare();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.internalValue"></a>

```java
public DatabaseCloudVmClusterIormConfigCacheDbPlans getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlans">DatabaseCloudVmClusterIormConfigCacheDbPlans</a>

---


### DatabaseCloudVmClusterIormConfigCacheList <a name="DatabaseCloudVmClusterIormConfigCacheList" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster.DatabaseCloudVmClusterIormConfigCacheList;

new DatabaseCloudVmClusterIormConfigCacheList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.get"></a>

```java
public DatabaseCloudVmClusterIormConfigCacheOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseCloudVmClusterIormConfigCacheOutputReference <a name="DatabaseCloudVmClusterIormConfigCacheOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster.DatabaseCloudVmClusterIormConfigCacheOutputReference;

new DatabaseCloudVmClusterIormConfigCacheOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.dbPlans">dbPlans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList">DatabaseCloudVmClusterIormConfigCacheDbPlansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.objective">objective</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCache">DatabaseCloudVmClusterIormConfigCache</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbPlans`<sup>Required</sup> <a name="dbPlans" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.dbPlans"></a>

```java
public DatabaseCloudVmClusterIormConfigCacheDbPlansList getDbPlans();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList">DatabaseCloudVmClusterIormConfigCacheDbPlansList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `objective`<sup>Required</sup> <a name="objective" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.objective"></a>

```java
public java.lang.String getObjective();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.internalValue"></a>

```java
public DatabaseCloudVmClusterIormConfigCache getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCache">DatabaseCloudVmClusterIormConfigCache</a>

---


### DatabaseCloudVmClusterTimeoutsOutputReference <a name="DatabaseCloudVmClusterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster.DatabaseCloudVmClusterTimeoutsOutputReference;

new DatabaseCloudVmClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts">DatabaseCloudVmClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts">DatabaseCloudVmClusterTimeouts</a>

---



