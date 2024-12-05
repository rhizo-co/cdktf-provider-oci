# `databaseVmCluster` Submodule <a name="`databaseVmCluster` Submodule" id="rhizo-co-terraform-provider-oci.databaseVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseVmCluster <a name="DatabaseVmCluster" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster oci_database_vm_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster.DatabaseVmCluster;

DatabaseVmCluster.Builder.create(Construct scope, java.lang.String id)
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
    .cpuCoreCount(java.lang.Number)
    .displayName(java.lang.String)
    .exadataInfrastructureId(java.lang.String)
    .giVersion(java.lang.String)
    .sshPublicKeys(java.util.List<java.lang.String>)
    .vmClusterNetworkId(java.lang.String)
//  .cloudAutomationUpdateDetails(DatabaseVmClusterCloudAutomationUpdateDetails)
//  .dataCollectionOptions(DatabaseVmClusterDataCollectionOptions)
//  .dataStorageSizeInGb(java.lang.Number)
//  .dataStorageSizeInTbs(java.lang.Number)
//  .dbNodeStorageSizeInGbs(java.lang.Number)
//  .dbServers(java.util.List<java.lang.String>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .fileSystemConfigurationDetails(IResolvable)
//  .fileSystemConfigurationDetails(java.util.List<DatabaseVmClusterFileSystemConfigurationDetails>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isLocalBackupEnabled(java.lang.Boolean)
//  .isLocalBackupEnabled(IResolvable)
//  .isSparseDiskgroupEnabled(java.lang.Boolean)
//  .isSparseDiskgroupEnabled(IResolvable)
//  .licenseModel(java.lang.String)
//  .memorySizeInGbs(java.lang.Number)
//  .ocpuCount(java.lang.Number)
//  .systemVersion(java.lang.String)
//  .timeouts(DatabaseVmClusterTimeouts)
//  .timeZone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#compartment_id DatabaseVmCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#cpu_core_count DatabaseVmCluster#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#display_name DatabaseVmCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#exadata_infrastructure_id DatabaseVmCluster#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.giVersion">giVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#gi_version DatabaseVmCluster#gi_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#ssh_public_keys DatabaseVmCluster#ssh_public_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.vmClusterNetworkId">vmClusterNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#vm_cluster_network_id DatabaseVmCluster#vm_cluster_network_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.cloudAutomationUpdateDetails">cloudAutomationUpdateDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails">DatabaseVmClusterCloudAutomationUpdateDetails</a></code> | cloud_automation_update_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions">DatabaseVmClusterDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#data_storage_size_in_gb DatabaseVmCluster#data_storage_size_in_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#data_storage_size_in_tbs DatabaseVmCluster#data_storage_size_in_tbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.dbNodeStorageSizeInGbs">dbNodeStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#db_node_storage_size_in_gbs DatabaseVmCluster#db_node_storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.dbServers">dbServers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#db_servers DatabaseVmCluster#db_servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#defined_tags DatabaseVmCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.fileSystemConfigurationDetails">fileSystemConfigurationDetails</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>></code> | file_system_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#freeform_tags DatabaseVmCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#id DatabaseVmCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.isLocalBackupEnabled">isLocalBackupEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_local_backup_enabled DatabaseVmCluster#is_local_backup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.isSparseDiskgroupEnabled">isSparseDiskgroupEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_sparse_diskgroup_enabled DatabaseVmCluster#is_sparse_diskgroup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#license_model DatabaseVmCluster#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.memorySizeInGbs">memorySizeInGbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#memory_size_in_gbs DatabaseVmCluster#memory_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.ocpuCount">ocpuCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#ocpu_count DatabaseVmCluster#ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.systemVersion">systemVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#system_version DatabaseVmCluster#system_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts">DatabaseVmClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#time_zone DatabaseVmCluster#time_zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#compartment_id DatabaseVmCluster#compartment_id}.

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.cpuCoreCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#cpu_core_count DatabaseVmCluster#cpu_core_count}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#display_name DatabaseVmCluster#display_name}.

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.exadataInfrastructureId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#exadata_infrastructure_id DatabaseVmCluster#exadata_infrastructure_id}.

---

##### `giVersion`<sup>Required</sup> <a name="giVersion" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.giVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#gi_version DatabaseVmCluster#gi_version}.

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.sshPublicKeys"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#ssh_public_keys DatabaseVmCluster#ssh_public_keys}.

---

##### `vmClusterNetworkId`<sup>Required</sup> <a name="vmClusterNetworkId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.vmClusterNetworkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#vm_cluster_network_id DatabaseVmCluster#vm_cluster_network_id}.

---

##### `cloudAutomationUpdateDetails`<sup>Optional</sup> <a name="cloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.cloudAutomationUpdateDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails">DatabaseVmClusterCloudAutomationUpdateDetails</a>

cloud_automation_update_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#cloud_automation_update_details DatabaseVmCluster#cloud_automation_update_details}

---

##### `dataCollectionOptions`<sup>Optional</sup> <a name="dataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.dataCollectionOptions"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions">DatabaseVmClusterDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#data_collection_options DatabaseVmCluster#data_collection_options}

---

##### `dataStorageSizeInGb`<sup>Optional</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.dataStorageSizeInGb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#data_storage_size_in_gb DatabaseVmCluster#data_storage_size_in_gb}.

---

##### `dataStorageSizeInTbs`<sup>Optional</sup> <a name="dataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.dataStorageSizeInTbs"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#data_storage_size_in_tbs DatabaseVmCluster#data_storage_size_in_tbs}.

---

##### `dbNodeStorageSizeInGbs`<sup>Optional</sup> <a name="dbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.dbNodeStorageSizeInGbs"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#db_node_storage_size_in_gbs DatabaseVmCluster#db_node_storage_size_in_gbs}.

---

##### `dbServers`<sup>Optional</sup> <a name="dbServers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.dbServers"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#db_servers DatabaseVmCluster#db_servers}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#defined_tags DatabaseVmCluster#defined_tags}.

---

##### `fileSystemConfigurationDetails`<sup>Optional</sup> <a name="fileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.fileSystemConfigurationDetails"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>>

file_system_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#file_system_configuration_details DatabaseVmCluster#file_system_configuration_details}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#freeform_tags DatabaseVmCluster#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#id DatabaseVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLocalBackupEnabled`<sup>Optional</sup> <a name="isLocalBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.isLocalBackupEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_local_backup_enabled DatabaseVmCluster#is_local_backup_enabled}.

---

##### `isSparseDiskgroupEnabled`<sup>Optional</sup> <a name="isSparseDiskgroupEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.isSparseDiskgroupEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_sparse_diskgroup_enabled DatabaseVmCluster#is_sparse_diskgroup_enabled}.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.licenseModel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#license_model DatabaseVmCluster#license_model}.

---

##### `memorySizeInGbs`<sup>Optional</sup> <a name="memorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.memorySizeInGbs"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#memory_size_in_gbs DatabaseVmCluster#memory_size_in_gbs}.

---

##### `ocpuCount`<sup>Optional</sup> <a name="ocpuCount" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.ocpuCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#ocpu_count DatabaseVmCluster#ocpu_count}.

---

##### `systemVersion`<sup>Optional</sup> <a name="systemVersion" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.systemVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#system_version DatabaseVmCluster#system_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts">DatabaseVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#timeouts DatabaseVmCluster#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.timeZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#time_zone DatabaseVmCluster#time_zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putCloudAutomationUpdateDetails">putCloudAutomationUpdateDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putDataCollectionOptions">putDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putFileSystemConfigurationDetails">putFileSystemConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetCloudAutomationUpdateDetails">resetCloudAutomationUpdateDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDataCollectionOptions">resetDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDataStorageSizeInGb">resetDataStorageSizeInGb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDataStorageSizeInTbs">resetDataStorageSizeInTbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDbNodeStorageSizeInGbs">resetDbNodeStorageSizeInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDbServers">resetDbServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetFileSystemConfigurationDetails">resetFileSystemConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetIsLocalBackupEnabled">resetIsLocalBackupEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetIsSparseDiskgroupEnabled">resetIsSparseDiskgroupEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetMemorySizeInGbs">resetMemorySizeInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetOcpuCount">resetOcpuCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetSystemVersion">resetSystemVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudAutomationUpdateDetails` <a name="putCloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putCloudAutomationUpdateDetails"></a>

```java
public void putCloudAutomationUpdateDetails(DatabaseVmClusterCloudAutomationUpdateDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putCloudAutomationUpdateDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails">DatabaseVmClusterCloudAutomationUpdateDetails</a>

---

##### `putDataCollectionOptions` <a name="putDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putDataCollectionOptions"></a>

```java
public void putDataCollectionOptions(DatabaseVmClusterDataCollectionOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions">DatabaseVmClusterDataCollectionOptions</a>

---

##### `putFileSystemConfigurationDetails` <a name="putFileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putFileSystemConfigurationDetails"></a>

```java
public void putFileSystemConfigurationDetails(IResolvable OR java.util.List<DatabaseVmClusterFileSystemConfigurationDetails> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putFileSystemConfigurationDetails.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putTimeouts"></a>

```java
public void putTimeouts(DatabaseVmClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts">DatabaseVmClusterTimeouts</a>

---

##### `resetCloudAutomationUpdateDetails` <a name="resetCloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetCloudAutomationUpdateDetails"></a>

```java
public void resetCloudAutomationUpdateDetails()
```

##### `resetDataCollectionOptions` <a name="resetDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDataCollectionOptions"></a>

```java
public void resetDataCollectionOptions()
```

##### `resetDataStorageSizeInGb` <a name="resetDataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDataStorageSizeInGb"></a>

```java
public void resetDataStorageSizeInGb()
```

##### `resetDataStorageSizeInTbs` <a name="resetDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDataStorageSizeInTbs"></a>

```java
public void resetDataStorageSizeInTbs()
```

##### `resetDbNodeStorageSizeInGbs` <a name="resetDbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDbNodeStorageSizeInGbs"></a>

```java
public void resetDbNodeStorageSizeInGbs()
```

##### `resetDbServers` <a name="resetDbServers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDbServers"></a>

```java
public void resetDbServers()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFileSystemConfigurationDetails` <a name="resetFileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetFileSystemConfigurationDetails"></a>

```java
public void resetFileSystemConfigurationDetails()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetId"></a>

```java
public void resetId()
```

##### `resetIsLocalBackupEnabled` <a name="resetIsLocalBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetIsLocalBackupEnabled"></a>

```java
public void resetIsLocalBackupEnabled()
```

##### `resetIsSparseDiskgroupEnabled` <a name="resetIsSparseDiskgroupEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetIsSparseDiskgroupEnabled"></a>

```java
public void resetIsSparseDiskgroupEnabled()
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetLicenseModel"></a>

```java
public void resetLicenseModel()
```

##### `resetMemorySizeInGbs` <a name="resetMemorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetMemorySizeInGbs"></a>

```java
public void resetMemorySizeInGbs()
```

##### `resetOcpuCount` <a name="resetOcpuCount" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetOcpuCount"></a>

```java
public void resetOcpuCount()
```

##### `resetSystemVersion` <a name="resetSystemVersion" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetSystemVersion"></a>

```java
public void resetSystemVersion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeZone` <a name="resetTimeZone" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetTimeZone"></a>

```java
public void resetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseVmCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster.DatabaseVmCluster;

DatabaseVmCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster.DatabaseVmCluster;

DatabaseVmCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster.DatabaseVmCluster;

DatabaseVmCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster.DatabaseVmCluster;

DatabaseVmCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseVmCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseVmCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseVmCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cloudAutomationUpdateDetails">cloudAutomationUpdateDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference">DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cpusEnabled">cpusEnabled</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference">DatabaseVmClusterDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.fileSystemConfigurationDetails">fileSystemConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList">DatabaseVmClusterFileSystemConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.lastPatchHistoryEntryId">lastPatchHistoryEntryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.ocpusEnabled">ocpusEnabled</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference">DatabaseVmClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cloudAutomationUpdateDetailsInput">cloudAutomationUpdateDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails">DatabaseVmClusterCloudAutomationUpdateDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cpuCoreCountInput">cpuCoreCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataCollectionOptionsInput">dataCollectionOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions">DatabaseVmClusterDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataStorageSizeInGbInput">dataStorageSizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataStorageSizeInTbsInput">dataStorageSizeInTbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dbNodeStorageSizeInGbsInput">dbNodeStorageSizeInGbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dbServersInput">dbServersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.exadataInfrastructureIdInput">exadataInfrastructureIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.fileSystemConfigurationDetailsInput">fileSystemConfigurationDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.giVersionInput">giVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.isLocalBackupEnabledInput">isLocalBackupEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.isSparseDiskgroupEnabledInput">isSparseDiskgroupEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.licenseModelInput">licenseModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.memorySizeInGbsInput">memorySizeInGbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.ocpuCountInput">ocpuCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.sshPublicKeysInput">sshPublicKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.systemVersionInput">systemVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts">DatabaseVmClusterTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.vmClusterNetworkIdInput">vmClusterNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dbNodeStorageSizeInGbs">dbNodeStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dbServers">dbServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.giVersion">giVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.isLocalBackupEnabled">isLocalBackupEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.isSparseDiskgroupEnabled">isSparseDiskgroupEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.memorySizeInGbs">memorySizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.ocpuCount">ocpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.systemVersion">systemVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.vmClusterNetworkId">vmClusterNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `cloudAutomationUpdateDetails`<sup>Required</sup> <a name="cloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cloudAutomationUpdateDetails"></a>

```java
public DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference getCloudAutomationUpdateDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference">DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference</a>

---

##### `cpusEnabled`<sup>Required</sup> <a name="cpusEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cpusEnabled"></a>

```java
public java.lang.Number getCpusEnabled();
```

- *Type:* java.lang.Number

---

##### `dataCollectionOptions`<sup>Required</sup> <a name="dataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataCollectionOptions"></a>

```java
public DatabaseVmClusterDataCollectionOptionsOutputReference getDataCollectionOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference">DatabaseVmClusterDataCollectionOptionsOutputReference</a>

---

##### `fileSystemConfigurationDetails`<sup>Required</sup> <a name="fileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.fileSystemConfigurationDetails"></a>

```java
public DatabaseVmClusterFileSystemConfigurationDetailsList getFileSystemConfigurationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList">DatabaseVmClusterFileSystemConfigurationDetailsList</a>

---

##### `lastPatchHistoryEntryId`<sup>Required</sup> <a name="lastPatchHistoryEntryId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.lastPatchHistoryEntryId"></a>

```java
public java.lang.String getLastPatchHistoryEntryId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `ocpusEnabled`<sup>Required</sup> <a name="ocpusEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.ocpusEnabled"></a>

```java
public java.lang.Number getOcpusEnabled();
```

- *Type:* java.lang.Number

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeouts"></a>

```java
public DatabaseVmClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference">DatabaseVmClusterTimeoutsOutputReference</a>

---

##### `cloudAutomationUpdateDetailsInput`<sup>Optional</sup> <a name="cloudAutomationUpdateDetailsInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cloudAutomationUpdateDetailsInput"></a>

```java
public DatabaseVmClusterCloudAutomationUpdateDetails getCloudAutomationUpdateDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails">DatabaseVmClusterCloudAutomationUpdateDetails</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `cpuCoreCountInput`<sup>Optional</sup> <a name="cpuCoreCountInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cpuCoreCountInput"></a>

```java
public java.lang.Number getCpuCoreCountInput();
```

- *Type:* java.lang.Number

---

##### `dataCollectionOptionsInput`<sup>Optional</sup> <a name="dataCollectionOptionsInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataCollectionOptionsInput"></a>

```java
public DatabaseVmClusterDataCollectionOptions getDataCollectionOptionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions">DatabaseVmClusterDataCollectionOptions</a>

---

##### `dataStorageSizeInGbInput`<sup>Optional</sup> <a name="dataStorageSizeInGbInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataStorageSizeInGbInput"></a>

```java
public java.lang.Number getDataStorageSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeInTbsInput`<sup>Optional</sup> <a name="dataStorageSizeInTbsInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataStorageSizeInTbsInput"></a>

```java
public java.lang.Number getDataStorageSizeInTbsInput();
```

- *Type:* java.lang.Number

---

##### `dbNodeStorageSizeInGbsInput`<sup>Optional</sup> <a name="dbNodeStorageSizeInGbsInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dbNodeStorageSizeInGbsInput"></a>

```java
public java.lang.Number getDbNodeStorageSizeInGbsInput();
```

- *Type:* java.lang.Number

---

##### `dbServersInput`<sup>Optional</sup> <a name="dbServersInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dbServersInput"></a>

```java
public java.util.List<java.lang.String> getDbServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `exadataInfrastructureIdInput`<sup>Optional</sup> <a name="exadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.exadataInfrastructureIdInput"></a>

```java
public java.lang.String getExadataInfrastructureIdInput();
```

- *Type:* java.lang.String

---

##### `fileSystemConfigurationDetailsInput`<sup>Optional</sup> <a name="fileSystemConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.fileSystemConfigurationDetailsInput"></a>

```java
public java.lang.Object getFileSystemConfigurationDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `giVersionInput`<sup>Optional</sup> <a name="giVersionInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.giVersionInput"></a>

```java
public java.lang.String getGiVersionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isLocalBackupEnabledInput`<sup>Optional</sup> <a name="isLocalBackupEnabledInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.isLocalBackupEnabledInput"></a>

```java
public java.lang.Object getIsLocalBackupEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSparseDiskgroupEnabledInput`<sup>Optional</sup> <a name="isSparseDiskgroupEnabledInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.isSparseDiskgroupEnabledInput"></a>

```java
public java.lang.Object getIsSparseDiskgroupEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.licenseModelInput"></a>

```java
public java.lang.String getLicenseModelInput();
```

- *Type:* java.lang.String

---

##### `memorySizeInGbsInput`<sup>Optional</sup> <a name="memorySizeInGbsInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.memorySizeInGbsInput"></a>

```java
public java.lang.Number getMemorySizeInGbsInput();
```

- *Type:* java.lang.Number

---

##### `ocpuCountInput`<sup>Optional</sup> <a name="ocpuCountInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.ocpuCountInput"></a>

```java
public java.lang.Number getOcpuCountInput();
```

- *Type:* java.lang.Number

---

##### `sshPublicKeysInput`<sup>Optional</sup> <a name="sshPublicKeysInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.sshPublicKeysInput"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `systemVersionInput`<sup>Optional</sup> <a name="systemVersionInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.systemVersionInput"></a>

```java
public java.lang.String getSystemVersionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts">DatabaseVmClusterTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `vmClusterNetworkIdInput`<sup>Optional</sup> <a name="vmClusterNetworkIdInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.vmClusterNetworkIdInput"></a>

```java
public java.lang.String getVmClusterNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataStorageSizeInGb"></a>

```java
public java.lang.Number getDataStorageSizeInGb();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeInTbs`<sup>Required</sup> <a name="dataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataStorageSizeInTbs"></a>

```java
public java.lang.Number getDataStorageSizeInTbs();
```

- *Type:* java.lang.Number

---

##### `dbNodeStorageSizeInGbs`<sup>Required</sup> <a name="dbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dbNodeStorageSizeInGbs"></a>

```java
public java.lang.Number getDbNodeStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `dbServers`<sup>Required</sup> <a name="dbServers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dbServers"></a>

```java
public java.util.List<java.lang.String> getDbServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.exadataInfrastructureId"></a>

```java
public java.lang.String getExadataInfrastructureId();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `giVersion`<sup>Required</sup> <a name="giVersion" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.giVersion"></a>

```java
public java.lang.String getGiVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isLocalBackupEnabled`<sup>Required</sup> <a name="isLocalBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.isLocalBackupEnabled"></a>

```java
public java.lang.Object getIsLocalBackupEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSparseDiskgroupEnabled`<sup>Required</sup> <a name="isSparseDiskgroupEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.isSparseDiskgroupEnabled"></a>

```java
public java.lang.Object getIsSparseDiskgroupEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `memorySizeInGbs`<sup>Required</sup> <a name="memorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.memorySizeInGbs"></a>

```java
public java.lang.Number getMemorySizeInGbs();
```

- *Type:* java.lang.Number

---

##### `ocpuCount`<sup>Required</sup> <a name="ocpuCount" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.ocpuCount"></a>

```java
public java.lang.Number getOcpuCount();
```

- *Type:* java.lang.Number

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.sshPublicKeys"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `systemVersion`<sup>Required</sup> <a name="systemVersion" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.systemVersion"></a>

```java
public java.lang.String getSystemVersion();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `vmClusterNetworkId`<sup>Required</sup> <a name="vmClusterNetworkId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.vmClusterNetworkId"></a>

```java
public java.lang.String getVmClusterNetworkId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseVmClusterCloudAutomationUpdateDetails <a name="DatabaseVmClusterCloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster.DatabaseVmClusterCloudAutomationUpdateDetails;

DatabaseVmClusterCloudAutomationUpdateDetails.builder()
//  .applyUpdateTimePreference(DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference)
//  .freezePeriod(DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod)
//  .isEarlyAdoptionEnabled(java.lang.Boolean)
//  .isEarlyAdoptionEnabled(IResolvable)
//  .isFreezePeriodEnabled(java.lang.Boolean)
//  .isFreezePeriodEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails.property.applyUpdateTimePreference">applyUpdateTimePreference</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a></code> | apply_update_time_preference block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails.property.freezePeriod">freezePeriod</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod</a></code> | freeze_period block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails.property.isEarlyAdoptionEnabled">isEarlyAdoptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_early_adoption_enabled DatabaseVmCluster#is_early_adoption_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails.property.isFreezePeriodEnabled">isFreezePeriodEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_freeze_period_enabled DatabaseVmCluster#is_freeze_period_enabled}. |

---

##### `applyUpdateTimePreference`<sup>Optional</sup> <a name="applyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails.property.applyUpdateTimePreference"></a>

```java
public DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference getApplyUpdateTimePreference();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

apply_update_time_preference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#apply_update_time_preference DatabaseVmCluster#apply_update_time_preference}

---

##### `freezePeriod`<sup>Optional</sup> <a name="freezePeriod" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails.property.freezePeriod"></a>

```java
public DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod getFreezePeriod();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod</a>

freeze_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#freeze_period DatabaseVmCluster#freeze_period}

---

##### `isEarlyAdoptionEnabled`<sup>Optional</sup> <a name="isEarlyAdoptionEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails.property.isEarlyAdoptionEnabled"></a>

```java
public java.lang.Object getIsEarlyAdoptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_early_adoption_enabled DatabaseVmCluster#is_early_adoption_enabled}.

---

##### `isFreezePeriodEnabled`<sup>Optional</sup> <a name="isFreezePeriodEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails.property.isFreezePeriodEnabled"></a>

```java
public java.lang.Object getIsFreezePeriodEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_freeze_period_enabled DatabaseVmCluster#is_freeze_period_enabled}.

---

### DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference <a name="DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference;

DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.builder()
//  .applyUpdatePreferredEndTime(java.lang.String)
//  .applyUpdatePreferredStartTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.property.applyUpdatePreferredEndTime">applyUpdatePreferredEndTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#apply_update_preferred_end_time DatabaseVmCluster#apply_update_preferred_end_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.property.applyUpdatePreferredStartTime">applyUpdatePreferredStartTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#apply_update_preferred_start_time DatabaseVmCluster#apply_update_preferred_start_time}. |

---

##### `applyUpdatePreferredEndTime`<sup>Optional</sup> <a name="applyUpdatePreferredEndTime" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.property.applyUpdatePreferredEndTime"></a>

```java
public java.lang.String getApplyUpdatePreferredEndTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#apply_update_preferred_end_time DatabaseVmCluster#apply_update_preferred_end_time}.

---

##### `applyUpdatePreferredStartTime`<sup>Optional</sup> <a name="applyUpdatePreferredStartTime" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.property.applyUpdatePreferredStartTime"></a>

```java
public java.lang.String getApplyUpdatePreferredStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#apply_update_preferred_start_time DatabaseVmCluster#apply_update_preferred_start_time}.

---

### DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod <a name="DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod;

DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod.builder()
//  .freezePeriodEndTime(java.lang.String)
//  .freezePeriodStartTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod.property.freezePeriodEndTime">freezePeriodEndTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#freeze_period_end_time DatabaseVmCluster#freeze_period_end_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod.property.freezePeriodStartTime">freezePeriodStartTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#freeze_period_start_time DatabaseVmCluster#freeze_period_start_time}. |

---

##### `freezePeriodEndTime`<sup>Optional</sup> <a name="freezePeriodEndTime" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod.property.freezePeriodEndTime"></a>

```java
public java.lang.String getFreezePeriodEndTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#freeze_period_end_time DatabaseVmCluster#freeze_period_end_time}.

---

##### `freezePeriodStartTime`<sup>Optional</sup> <a name="freezePeriodStartTime" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod.property.freezePeriodStartTime"></a>

```java
public java.lang.String getFreezePeriodStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#freeze_period_start_time DatabaseVmCluster#freeze_period_start_time}.

---

### DatabaseVmClusterConfig <a name="DatabaseVmClusterConfig" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster.DatabaseVmClusterConfig;

DatabaseVmClusterConfig.builder()
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
    .cpuCoreCount(java.lang.Number)
    .displayName(java.lang.String)
    .exadataInfrastructureId(java.lang.String)
    .giVersion(java.lang.String)
    .sshPublicKeys(java.util.List<java.lang.String>)
    .vmClusterNetworkId(java.lang.String)
//  .cloudAutomationUpdateDetails(DatabaseVmClusterCloudAutomationUpdateDetails)
//  .dataCollectionOptions(DatabaseVmClusterDataCollectionOptions)
//  .dataStorageSizeInGb(java.lang.Number)
//  .dataStorageSizeInTbs(java.lang.Number)
//  .dbNodeStorageSizeInGbs(java.lang.Number)
//  .dbServers(java.util.List<java.lang.String>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .fileSystemConfigurationDetails(IResolvable)
//  .fileSystemConfigurationDetails(java.util.List<DatabaseVmClusterFileSystemConfigurationDetails>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isLocalBackupEnabled(java.lang.Boolean)
//  .isLocalBackupEnabled(IResolvable)
//  .isSparseDiskgroupEnabled(java.lang.Boolean)
//  .isSparseDiskgroupEnabled(IResolvable)
//  .licenseModel(java.lang.String)
//  .memorySizeInGbs(java.lang.Number)
//  .ocpuCount(java.lang.Number)
//  .systemVersion(java.lang.String)
//  .timeouts(DatabaseVmClusterTimeouts)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#compartment_id DatabaseVmCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#cpu_core_count DatabaseVmCluster#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#display_name DatabaseVmCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#exadata_infrastructure_id DatabaseVmCluster#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.giVersion">giVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#gi_version DatabaseVmCluster#gi_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#ssh_public_keys DatabaseVmCluster#ssh_public_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.vmClusterNetworkId">vmClusterNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#vm_cluster_network_id DatabaseVmCluster#vm_cluster_network_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.cloudAutomationUpdateDetails">cloudAutomationUpdateDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails">DatabaseVmClusterCloudAutomationUpdateDetails</a></code> | cloud_automation_update_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions">DatabaseVmClusterDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#data_storage_size_in_gb DatabaseVmCluster#data_storage_size_in_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#data_storage_size_in_tbs DatabaseVmCluster#data_storage_size_in_tbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dbNodeStorageSizeInGbs">dbNodeStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#db_node_storage_size_in_gbs DatabaseVmCluster#db_node_storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dbServers">dbServers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#db_servers DatabaseVmCluster#db_servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#defined_tags DatabaseVmCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.fileSystemConfigurationDetails">fileSystemConfigurationDetails</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>></code> | file_system_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#freeform_tags DatabaseVmCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#id DatabaseVmCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.isLocalBackupEnabled">isLocalBackupEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_local_backup_enabled DatabaseVmCluster#is_local_backup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.isSparseDiskgroupEnabled">isSparseDiskgroupEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_sparse_diskgroup_enabled DatabaseVmCluster#is_sparse_diskgroup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#license_model DatabaseVmCluster#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.memorySizeInGbs">memorySizeInGbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#memory_size_in_gbs DatabaseVmCluster#memory_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.ocpuCount">ocpuCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#ocpu_count DatabaseVmCluster#ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.systemVersion">systemVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#system_version DatabaseVmCluster#system_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts">DatabaseVmClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#time_zone DatabaseVmCluster#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#compartment_id DatabaseVmCluster#compartment_id}.

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#cpu_core_count DatabaseVmCluster#cpu_core_count}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#display_name DatabaseVmCluster#display_name}.

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.exadataInfrastructureId"></a>

```java
public java.lang.String getExadataInfrastructureId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#exadata_infrastructure_id DatabaseVmCluster#exadata_infrastructure_id}.

---

##### `giVersion`<sup>Required</sup> <a name="giVersion" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.giVersion"></a>

```java
public java.lang.String getGiVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#gi_version DatabaseVmCluster#gi_version}.

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.sshPublicKeys"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#ssh_public_keys DatabaseVmCluster#ssh_public_keys}.

---

##### `vmClusterNetworkId`<sup>Required</sup> <a name="vmClusterNetworkId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.vmClusterNetworkId"></a>

```java
public java.lang.String getVmClusterNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#vm_cluster_network_id DatabaseVmCluster#vm_cluster_network_id}.

---

##### `cloudAutomationUpdateDetails`<sup>Optional</sup> <a name="cloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.cloudAutomationUpdateDetails"></a>

```java
public DatabaseVmClusterCloudAutomationUpdateDetails getCloudAutomationUpdateDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails">DatabaseVmClusterCloudAutomationUpdateDetails</a>

cloud_automation_update_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#cloud_automation_update_details DatabaseVmCluster#cloud_automation_update_details}

---

##### `dataCollectionOptions`<sup>Optional</sup> <a name="dataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dataCollectionOptions"></a>

```java
public DatabaseVmClusterDataCollectionOptions getDataCollectionOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions">DatabaseVmClusterDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#data_collection_options DatabaseVmCluster#data_collection_options}

---

##### `dataStorageSizeInGb`<sup>Optional</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dataStorageSizeInGb"></a>

```java
public java.lang.Number getDataStorageSizeInGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#data_storage_size_in_gb DatabaseVmCluster#data_storage_size_in_gb}.

---

##### `dataStorageSizeInTbs`<sup>Optional</sup> <a name="dataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dataStorageSizeInTbs"></a>

```java
public java.lang.Number getDataStorageSizeInTbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#data_storage_size_in_tbs DatabaseVmCluster#data_storage_size_in_tbs}.

---

##### `dbNodeStorageSizeInGbs`<sup>Optional</sup> <a name="dbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dbNodeStorageSizeInGbs"></a>

```java
public java.lang.Number getDbNodeStorageSizeInGbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#db_node_storage_size_in_gbs DatabaseVmCluster#db_node_storage_size_in_gbs}.

---

##### `dbServers`<sup>Optional</sup> <a name="dbServers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dbServers"></a>

```java
public java.util.List<java.lang.String> getDbServers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#db_servers DatabaseVmCluster#db_servers}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#defined_tags DatabaseVmCluster#defined_tags}.

---

##### `fileSystemConfigurationDetails`<sup>Optional</sup> <a name="fileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.fileSystemConfigurationDetails"></a>

```java
public java.lang.Object getFileSystemConfigurationDetails();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>>

file_system_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#file_system_configuration_details DatabaseVmCluster#file_system_configuration_details}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#freeform_tags DatabaseVmCluster#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#id DatabaseVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLocalBackupEnabled`<sup>Optional</sup> <a name="isLocalBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.isLocalBackupEnabled"></a>

```java
public java.lang.Object getIsLocalBackupEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_local_backup_enabled DatabaseVmCluster#is_local_backup_enabled}.

---

##### `isSparseDiskgroupEnabled`<sup>Optional</sup> <a name="isSparseDiskgroupEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.isSparseDiskgroupEnabled"></a>

```java
public java.lang.Object getIsSparseDiskgroupEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_sparse_diskgroup_enabled DatabaseVmCluster#is_sparse_diskgroup_enabled}.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#license_model DatabaseVmCluster#license_model}.

---

##### `memorySizeInGbs`<sup>Optional</sup> <a name="memorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.memorySizeInGbs"></a>

```java
public java.lang.Number getMemorySizeInGbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#memory_size_in_gbs DatabaseVmCluster#memory_size_in_gbs}.

---

##### `ocpuCount`<sup>Optional</sup> <a name="ocpuCount" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.ocpuCount"></a>

```java
public java.lang.Number getOcpuCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#ocpu_count DatabaseVmCluster#ocpu_count}.

---

##### `systemVersion`<sup>Optional</sup> <a name="systemVersion" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.systemVersion"></a>

```java
public java.lang.String getSystemVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#system_version DatabaseVmCluster#system_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.timeouts"></a>

```java
public DatabaseVmClusterTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts">DatabaseVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#timeouts DatabaseVmCluster#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#time_zone DatabaseVmCluster#time_zone}.

---

### DatabaseVmClusterDataCollectionOptions <a name="DatabaseVmClusterDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster.DatabaseVmClusterDataCollectionOptions;

DatabaseVmClusterDataCollectionOptions.builder()
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
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_diagnostics_events_enabled DatabaseVmCluster#is_diagnostics_events_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions.property.isHealthMonitoringEnabled">isHealthMonitoringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_health_monitoring_enabled DatabaseVmCluster#is_health_monitoring_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_incident_logs_enabled DatabaseVmCluster#is_incident_logs_enabled}. |

---

##### `isDiagnosticsEventsEnabled`<sup>Optional</sup> <a name="isDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```java
public java.lang.Object getIsDiagnosticsEventsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_diagnostics_events_enabled DatabaseVmCluster#is_diagnostics_events_enabled}.

---

##### `isHealthMonitoringEnabled`<sup>Optional</sup> <a name="isHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```java
public java.lang.Object getIsHealthMonitoringEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_health_monitoring_enabled DatabaseVmCluster#is_health_monitoring_enabled}.

---

##### `isIncidentLogsEnabled`<sup>Optional</sup> <a name="isIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```java
public java.lang.Object getIsIncidentLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_incident_logs_enabled DatabaseVmCluster#is_incident_logs_enabled}.

---

### DatabaseVmClusterFileSystemConfigurationDetails <a name="DatabaseVmClusterFileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster.DatabaseVmClusterFileSystemConfigurationDetails;

DatabaseVmClusterFileSystemConfigurationDetails.builder()
//  .fileSystemSizeGb(java.lang.Number)
//  .mountPoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails.property.fileSystemSizeGb">fileSystemSizeGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#file_system_size_gb DatabaseVmCluster#file_system_size_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails.property.mountPoint">mountPoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#mount_point DatabaseVmCluster#mount_point}. |

---

##### `fileSystemSizeGb`<sup>Optional</sup> <a name="fileSystemSizeGb" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails.property.fileSystemSizeGb"></a>

```java
public java.lang.Number getFileSystemSizeGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#file_system_size_gb DatabaseVmCluster#file_system_size_gb}.

---

##### `mountPoint`<sup>Optional</sup> <a name="mountPoint" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails.property.mountPoint"></a>

```java
public java.lang.String getMountPoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#mount_point DatabaseVmCluster#mount_point}.

---

### DatabaseVmClusterTimeouts <a name="DatabaseVmClusterTimeouts" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster.DatabaseVmClusterTimeouts;

DatabaseVmClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#create DatabaseVmCluster#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#delete DatabaseVmCluster#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#update DatabaseVmCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#create DatabaseVmCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#delete DatabaseVmCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#update DatabaseVmCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference <a name="DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference;

new DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resetApplyUpdatePreferredEndTime">resetApplyUpdatePreferredEndTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resetApplyUpdatePreferredStartTime">resetApplyUpdatePreferredStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplyUpdatePreferredEndTime` <a name="resetApplyUpdatePreferredEndTime" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resetApplyUpdatePreferredEndTime"></a>

```java
public void resetApplyUpdatePreferredEndTime()
```

##### `resetApplyUpdatePreferredStartTime` <a name="resetApplyUpdatePreferredStartTime" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resetApplyUpdatePreferredStartTime"></a>

```java
public void resetApplyUpdatePreferredStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTimeInput">applyUpdatePreferredEndTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTimeInput">applyUpdatePreferredStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTime">applyUpdatePreferredEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTime">applyUpdatePreferredStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applyUpdatePreferredEndTimeInput`<sup>Optional</sup> <a name="applyUpdatePreferredEndTimeInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTimeInput"></a>

```java
public java.lang.String getApplyUpdatePreferredEndTimeInput();
```

- *Type:* java.lang.String

---

##### `applyUpdatePreferredStartTimeInput`<sup>Optional</sup> <a name="applyUpdatePreferredStartTimeInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTimeInput"></a>

```java
public java.lang.String getApplyUpdatePreferredStartTimeInput();
```

- *Type:* java.lang.String

---

##### `applyUpdatePreferredEndTime`<sup>Required</sup> <a name="applyUpdatePreferredEndTime" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTime"></a>

```java
public java.lang.String getApplyUpdatePreferredEndTime();
```

- *Type:* java.lang.String

---

##### `applyUpdatePreferredStartTime`<sup>Required</sup> <a name="applyUpdatePreferredStartTime" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTime"></a>

```java
public java.lang.String getApplyUpdatePreferredStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.internalValue"></a>

```java
public DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

---


### DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference <a name="DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference;

new DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resetFreezePeriodEndTime">resetFreezePeriodEndTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resetFreezePeriodStartTime">resetFreezePeriodStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFreezePeriodEndTime` <a name="resetFreezePeriodEndTime" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resetFreezePeriodEndTime"></a>

```java
public void resetFreezePeriodEndTime()
```

##### `resetFreezePeriodStartTime` <a name="resetFreezePeriodStartTime" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resetFreezePeriodStartTime"></a>

```java
public void resetFreezePeriodStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTimeInput">freezePeriodEndTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTimeInput">freezePeriodStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTime">freezePeriodEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTime">freezePeriodStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `freezePeriodEndTimeInput`<sup>Optional</sup> <a name="freezePeriodEndTimeInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTimeInput"></a>

```java
public java.lang.String getFreezePeriodEndTimeInput();
```

- *Type:* java.lang.String

---

##### `freezePeriodStartTimeInput`<sup>Optional</sup> <a name="freezePeriodStartTimeInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTimeInput"></a>

```java
public java.lang.String getFreezePeriodStartTimeInput();
```

- *Type:* java.lang.String

---

##### `freezePeriodEndTime`<sup>Required</sup> <a name="freezePeriodEndTime" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTime"></a>

```java
public java.lang.String getFreezePeriodEndTime();
```

- *Type:* java.lang.String

---

##### `freezePeriodStartTime`<sup>Required</sup> <a name="freezePeriodStartTime" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTime"></a>

```java
public java.lang.String getFreezePeriodStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.internalValue"></a>

```java
public DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod</a>

---


### DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference <a name="DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference;

new DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.putApplyUpdateTimePreference">putApplyUpdateTimePreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.putFreezePeriod">putFreezePeriod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resetApplyUpdateTimePreference">resetApplyUpdateTimePreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resetFreezePeriod">resetFreezePeriod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resetIsEarlyAdoptionEnabled">resetIsEarlyAdoptionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resetIsFreezePeriodEnabled">resetIsFreezePeriodEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApplyUpdateTimePreference` <a name="putApplyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.putApplyUpdateTimePreference"></a>

```java
public void putApplyUpdateTimePreference(DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.putApplyUpdateTimePreference.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

---

##### `putFreezePeriod` <a name="putFreezePeriod" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.putFreezePeriod"></a>

```java
public void putFreezePeriod(DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.putFreezePeriod.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod</a>

---

##### `resetApplyUpdateTimePreference` <a name="resetApplyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resetApplyUpdateTimePreference"></a>

```java
public void resetApplyUpdateTimePreference()
```

##### `resetFreezePeriod` <a name="resetFreezePeriod" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resetFreezePeriod"></a>

```java
public void resetFreezePeriod()
```

##### `resetIsEarlyAdoptionEnabled` <a name="resetIsEarlyAdoptionEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resetIsEarlyAdoptionEnabled"></a>

```java
public void resetIsEarlyAdoptionEnabled()
```

##### `resetIsFreezePeriodEnabled` <a name="resetIsFreezePeriodEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resetIsFreezePeriodEnabled"></a>

```java
public void resetIsFreezePeriodEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreference">applyUpdateTimePreference</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference">DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.freezePeriod">freezePeriod</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference">DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreferenceInput">applyUpdateTimePreferenceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.freezePeriodInput">freezePeriodInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabledInput">isEarlyAdoptionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabledInput">isFreezePeriodEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabled">isEarlyAdoptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabled">isFreezePeriodEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails">DatabaseVmClusterCloudAutomationUpdateDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applyUpdateTimePreference`<sup>Required</sup> <a name="applyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreference"></a>

```java
public DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference getApplyUpdateTimePreference();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference">DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference</a>

---

##### `freezePeriod`<sup>Required</sup> <a name="freezePeriod" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.freezePeriod"></a>

```java
public DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference getFreezePeriod();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference">DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference</a>

---

##### `applyUpdateTimePreferenceInput`<sup>Optional</sup> <a name="applyUpdateTimePreferenceInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreferenceInput"></a>

```java
public DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference getApplyUpdateTimePreferenceInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

---

##### `freezePeriodInput`<sup>Optional</sup> <a name="freezePeriodInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.freezePeriodInput"></a>

```java
public DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod getFreezePeriodInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod</a>

---

##### `isEarlyAdoptionEnabledInput`<sup>Optional</sup> <a name="isEarlyAdoptionEnabledInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabledInput"></a>

```java
public java.lang.Object getIsEarlyAdoptionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isFreezePeriodEnabledInput`<sup>Optional</sup> <a name="isFreezePeriodEnabledInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabledInput"></a>

```java
public java.lang.Object getIsFreezePeriodEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isEarlyAdoptionEnabled`<sup>Required</sup> <a name="isEarlyAdoptionEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabled"></a>

```java
public java.lang.Object getIsEarlyAdoptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isFreezePeriodEnabled`<sup>Required</sup> <a name="isFreezePeriodEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabled"></a>

```java
public java.lang.Object getIsFreezePeriodEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.internalValue"></a>

```java
public DatabaseVmClusterCloudAutomationUpdateDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails">DatabaseVmClusterCloudAutomationUpdateDetails</a>

---


### DatabaseVmClusterDataCollectionOptionsOutputReference <a name="DatabaseVmClusterDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster.DatabaseVmClusterDataCollectionOptionsOutputReference;

new DatabaseVmClusterDataCollectionOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">resetIsDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">resetIsHealthMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">resetIsIncidentLogsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsDiagnosticsEventsEnabled` <a name="resetIsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```java
public void resetIsDiagnosticsEventsEnabled()
```

##### `resetIsHealthMonitoringEnabled` <a name="resetIsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```java
public void resetIsHealthMonitoringEnabled()
```

##### `resetIsIncidentLogsEnabled` <a name="resetIsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```java
public void resetIsIncidentLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">isDiagnosticsEventsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">isHealthMonitoringEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">isIncidentLogsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">isHealthMonitoringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions">DatabaseVmClusterDataCollectionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isDiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="isDiagnosticsEventsEnabledInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```java
public java.lang.Object getIsDiagnosticsEventsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isHealthMonitoringEnabledInput`<sup>Optional</sup> <a name="isHealthMonitoringEnabledInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```java
public java.lang.Object getIsHealthMonitoringEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isIncidentLogsEnabledInput`<sup>Optional</sup> <a name="isIncidentLogsEnabledInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```java
public java.lang.Object getIsIncidentLogsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isDiagnosticsEventsEnabled`<sup>Required</sup> <a name="isDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```java
public java.lang.Object getIsDiagnosticsEventsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isHealthMonitoringEnabled`<sup>Required</sup> <a name="isHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```java
public java.lang.Object getIsHealthMonitoringEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isIncidentLogsEnabled`<sup>Required</sup> <a name="isIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```java
public java.lang.Object getIsIncidentLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.internalValue"></a>

```java
public DatabaseVmClusterDataCollectionOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions">DatabaseVmClusterDataCollectionOptions</a>

---


### DatabaseVmClusterFileSystemConfigurationDetailsList <a name="DatabaseVmClusterFileSystemConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster.DatabaseVmClusterFileSystemConfigurationDetailsList;

new DatabaseVmClusterFileSystemConfigurationDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.get"></a>

```java
public DatabaseVmClusterFileSystemConfigurationDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>>

---


### DatabaseVmClusterFileSystemConfigurationDetailsOutputReference <a name="DatabaseVmClusterFileSystemConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference;

new DatabaseVmClusterFileSystemConfigurationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.resetFileSystemSizeGb">resetFileSystemSizeGb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.resetMountPoint">resetMountPoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileSystemSizeGb` <a name="resetFileSystemSizeGb" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.resetFileSystemSizeGb"></a>

```java
public void resetFileSystemSizeGb()
```

##### `resetMountPoint` <a name="resetMountPoint" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.resetMountPoint"></a>

```java
public void resetMountPoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGbInput">fileSystemSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.mountPointInput">mountPointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGb">fileSystemSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.mountPoint">mountPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileSystemSizeGbInput`<sup>Optional</sup> <a name="fileSystemSizeGbInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGbInput"></a>

```java
public java.lang.Number getFileSystemSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `mountPointInput`<sup>Optional</sup> <a name="mountPointInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.mountPointInput"></a>

```java
public java.lang.String getMountPointInput();
```

- *Type:* java.lang.String

---

##### `fileSystemSizeGb`<sup>Required</sup> <a name="fileSystemSizeGb" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGb"></a>

```java
public java.lang.Number getFileSystemSizeGb();
```

- *Type:* java.lang.Number

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.mountPoint"></a>

```java
public java.lang.String getMountPoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>

---


### DatabaseVmClusterTimeoutsOutputReference <a name="DatabaseVmClusterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster.DatabaseVmClusterTimeoutsOutputReference;

new DatabaseVmClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts">DatabaseVmClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts">DatabaseVmClusterTimeouts</a>

---



