# `databaseDbSystem` Submodule <a name="`databaseDbSystem` Submodule" id="rhizo-co-terraform-provider-oci.databaseDbSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseDbSystem <a name="DatabaseDbSystem" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system oci_database_db_system}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystem;

DatabaseDbSystem.Builder.create(Construct scope, java.lang.String id)
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
    .availabilityDomain(java.lang.String)
    .compartmentId(java.lang.String)
    .dbHome(DatabaseDbSystemDbHome)
    .hostname(java.lang.String)
    .shape(java.lang.String)
    .sshPublicKeys(java.util.List<java.lang.String>)
    .subnetId(java.lang.String)
//  .backupNetworkNsgIds(java.util.List<java.lang.String>)
//  .backupSubnetId(java.lang.String)
//  .clusterName(java.lang.String)
//  .cpuCoreCount(java.lang.Number)
//  .databaseEdition(java.lang.String)
//  .dataCollectionOptions(DatabaseDbSystemDataCollectionOptions)
//  .dataStoragePercentage(java.lang.Number)
//  .dataStorageSizeInGb(java.lang.Number)
//  .dbSystemOptions(DatabaseDbSystemDbSystemOptions)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .diskRedundancy(java.lang.String)
//  .displayName(java.lang.String)
//  .domain(java.lang.String)
//  .faultDomains(java.util.List<java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .kmsKeyVersionId(java.lang.String)
//  .licenseModel(java.lang.String)
//  .maintenanceWindowDetails(DatabaseDbSystemMaintenanceWindowDetails)
//  .nodeCount(java.lang.Number)
//  .nsgIds(java.util.List<java.lang.String>)
//  .privateIp(java.lang.String)
//  .recoStorageSizeInGb(java.lang.Number)
//  .securityAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .source(java.lang.String)
//  .sourceDbSystemId(java.lang.String)
//  .sparseDiskgroup(java.lang.Boolean)
//  .sparseDiskgroup(IResolvable)
//  .storageVolumePerformanceMode(java.lang.String)
//  .timeouts(DatabaseDbSystemTimeouts)
//  .timeZone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#availability_domain DatabaseDbSystem#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#compartment_id DatabaseDbSystem#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.dbHome">dbHome</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a></code> | db_home block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#hostname DatabaseDbSystem#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#shape DatabaseDbSystem#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#ssh_public_keys DatabaseDbSystem#ssh_public_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#subnet_id DatabaseDbSystem#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.backupNetworkNsgIds">backupNetworkNsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_network_nsg_ids DatabaseDbSystem#backup_network_nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.backupSubnetId">backupSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_subnet_id DatabaseDbSystem#backup_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#cluster_name DatabaseDbSystem#cluster_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#cpu_core_count DatabaseDbSystem#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.databaseEdition">databaseEdition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_edition DatabaseDbSystem#database_edition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.dataStoragePercentage">dataStoragePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_storage_percentage DatabaseDbSystem#data_storage_percentage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_storage_size_in_gb DatabaseDbSystem#data_storage_size_in_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.dbSystemOptions">dbSystemOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a></code> | db_system_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.diskRedundancy">diskRedundancy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#disk_redundancy DatabaseDbSystem#disk_redundancy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#display_name DatabaseDbSystem#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#domain DatabaseDbSystem#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.faultDomains">faultDomains</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#fault_domains DatabaseDbSystem#fault_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#id DatabaseDbSystem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_id DatabaseDbSystem#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_version_id DatabaseDbSystem#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#license_model DatabaseDbSystem#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.maintenanceWindowDetails">maintenanceWindowDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a></code> | maintenance_window_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#node_count DatabaseDbSystem#node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#nsg_ids DatabaseDbSystem#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.privateIp">privateIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#private_ip DatabaseDbSystem#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.recoStorageSizeInGb">recoStorageSizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#reco_storage_size_in_gb DatabaseDbSystem#reco_storage_size_in_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.securityAttributes">securityAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#security_attributes DatabaseDbSystem#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#source DatabaseDbSystem#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.sourceDbSystemId">sourceDbSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#source_db_system_id DatabaseDbSystem#source_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.sparseDiskgroup">sparseDiskgroup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#sparse_diskgroup DatabaseDbSystem#sparse_diskgroup}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.storageVolumePerformanceMode">storageVolumePerformanceMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#storage_volume_performance_mode DatabaseDbSystem#storage_volume_performance_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts">DatabaseDbSystemTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#time_zone DatabaseDbSystem#time_zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#availability_domain DatabaseDbSystem#availability_domain}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#compartment_id DatabaseDbSystem#compartment_id}.

---

##### `dbHome`<sup>Required</sup> <a name="dbHome" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.dbHome"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a>

db_home block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_home DatabaseDbSystem#db_home}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#hostname DatabaseDbSystem#hostname}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.shape"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#shape DatabaseDbSystem#shape}.

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.sshPublicKeys"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#ssh_public_keys DatabaseDbSystem#ssh_public_keys}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#subnet_id DatabaseDbSystem#subnet_id}.

---

##### `backupNetworkNsgIds`<sup>Optional</sup> <a name="backupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.backupNetworkNsgIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_network_nsg_ids DatabaseDbSystem#backup_network_nsg_ids}.

---

##### `backupSubnetId`<sup>Optional</sup> <a name="backupSubnetId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.backupSubnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_subnet_id DatabaseDbSystem#backup_subnet_id}.

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#cluster_name DatabaseDbSystem#cluster_name}.

---

##### `cpuCoreCount`<sup>Optional</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.cpuCoreCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#cpu_core_count DatabaseDbSystem#cpu_core_count}.

---

##### `databaseEdition`<sup>Optional</sup> <a name="databaseEdition" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.databaseEdition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_edition DatabaseDbSystem#database_edition}.

---

##### `dataCollectionOptions`<sup>Optional</sup> <a name="dataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.dataCollectionOptions"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_collection_options DatabaseDbSystem#data_collection_options}

---

##### `dataStoragePercentage`<sup>Optional</sup> <a name="dataStoragePercentage" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.dataStoragePercentage"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_storage_percentage DatabaseDbSystem#data_storage_percentage}.

---

##### `dataStorageSizeInGb`<sup>Optional</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.dataStorageSizeInGb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_storage_size_in_gb DatabaseDbSystem#data_storage_size_in_gb}.

---

##### `dbSystemOptions`<sup>Optional</sup> <a name="dbSystemOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.dbSystemOptions"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a>

db_system_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_system_options DatabaseDbSystem#db_system_options}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}.

---

##### `diskRedundancy`<sup>Optional</sup> <a name="diskRedundancy" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.diskRedundancy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#disk_redundancy DatabaseDbSystem#disk_redundancy}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#display_name DatabaseDbSystem#display_name}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#domain DatabaseDbSystem#domain}.

---

##### `faultDomains`<sup>Optional</sup> <a name="faultDomains" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.faultDomains"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#fault_domains DatabaseDbSystem#fault_domains}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#id DatabaseDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_id DatabaseDbSystem#kms_key_id}.

---

##### `kmsKeyVersionId`<sup>Optional</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.kmsKeyVersionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_version_id DatabaseDbSystem#kms_key_version_id}.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.licenseModel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#license_model DatabaseDbSystem#license_model}.

---

##### `maintenanceWindowDetails`<sup>Optional</sup> <a name="maintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.maintenanceWindowDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a>

maintenance_window_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#maintenance_window_details DatabaseDbSystem#maintenance_window_details}

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.nodeCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#node_count DatabaseDbSystem#node_count}.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.nsgIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#nsg_ids DatabaseDbSystem#nsg_ids}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.privateIp"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#private_ip DatabaseDbSystem#private_ip}.

---

##### `recoStorageSizeInGb`<sup>Optional</sup> <a name="recoStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.recoStorageSizeInGb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#reco_storage_size_in_gb DatabaseDbSystem#reco_storage_size_in_gb}.

---

##### `securityAttributes`<sup>Optional</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.securityAttributes"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#security_attributes DatabaseDbSystem#security_attributes}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.source"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#source DatabaseDbSystem#source}.

---

##### `sourceDbSystemId`<sup>Optional</sup> <a name="sourceDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.sourceDbSystemId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#source_db_system_id DatabaseDbSystem#source_db_system_id}.

---

##### `sparseDiskgroup`<sup>Optional</sup> <a name="sparseDiskgroup" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.sparseDiskgroup"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#sparse_diskgroup DatabaseDbSystem#sparse_diskgroup}.

---

##### `storageVolumePerformanceMode`<sup>Optional</sup> <a name="storageVolumePerformanceMode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.storageVolumePerformanceMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#storage_volume_performance_mode DatabaseDbSystem#storage_volume_performance_mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts">DatabaseDbSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#timeouts DatabaseDbSystem#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.timeZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#time_zone DatabaseDbSystem#time_zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDataCollectionOptions">putDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbHome">putDbHome</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbSystemOptions">putDbSystemOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putMaintenanceWindowDetails">putMaintenanceWindowDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetBackupNetworkNsgIds">resetBackupNetworkNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetBackupSubnetId">resetBackupSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetClusterName">resetClusterName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetCpuCoreCount">resetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDatabaseEdition">resetDatabaseEdition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDataCollectionOptions">resetDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDataStoragePercentage">resetDataStoragePercentage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDataStorageSizeInGb">resetDataStorageSizeInGb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDbSystemOptions">resetDbSystemOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDiskRedundancy">resetDiskRedundancy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetFaultDomains">resetFaultDomains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetKmsKeyVersionId">resetKmsKeyVersionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetMaintenanceWindowDetails">resetMaintenanceWindowDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetNodeCount">resetNodeCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetRecoStorageSizeInGb">resetRecoStorageSizeInGb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSecurityAttributes">resetSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSourceDbSystemId">resetSourceDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSparseDiskgroup">resetSparseDiskgroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetStorageVolumePerformanceMode">resetStorageVolumePerformanceMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataCollectionOptions` <a name="putDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDataCollectionOptions"></a>

```java
public void putDataCollectionOptions(DatabaseDbSystemDataCollectionOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a>

---

##### `putDbHome` <a name="putDbHome" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbHome"></a>

```java
public void putDbHome(DatabaseDbSystemDbHome value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbHome.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a>

---

##### `putDbSystemOptions` <a name="putDbSystemOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbSystemOptions"></a>

```java
public void putDbSystemOptions(DatabaseDbSystemDbSystemOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbSystemOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a>

---

##### `putMaintenanceWindowDetails` <a name="putMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putMaintenanceWindowDetails"></a>

```java
public void putMaintenanceWindowDetails(DatabaseDbSystemMaintenanceWindowDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putMaintenanceWindowDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putTimeouts"></a>

```java
public void putTimeouts(DatabaseDbSystemTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts">DatabaseDbSystemTimeouts</a>

---

##### `resetBackupNetworkNsgIds` <a name="resetBackupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetBackupNetworkNsgIds"></a>

```java
public void resetBackupNetworkNsgIds()
```

##### `resetBackupSubnetId` <a name="resetBackupSubnetId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetBackupSubnetId"></a>

```java
public void resetBackupSubnetId()
```

##### `resetClusterName` <a name="resetClusterName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetClusterName"></a>

```java
public void resetClusterName()
```

##### `resetCpuCoreCount` <a name="resetCpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetCpuCoreCount"></a>

```java
public void resetCpuCoreCount()
```

##### `resetDatabaseEdition` <a name="resetDatabaseEdition" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDatabaseEdition"></a>

```java
public void resetDatabaseEdition()
```

##### `resetDataCollectionOptions` <a name="resetDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDataCollectionOptions"></a>

```java
public void resetDataCollectionOptions()
```

##### `resetDataStoragePercentage` <a name="resetDataStoragePercentage" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDataStoragePercentage"></a>

```java
public void resetDataStoragePercentage()
```

##### `resetDataStorageSizeInGb` <a name="resetDataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDataStorageSizeInGb"></a>

```java
public void resetDataStorageSizeInGb()
```

##### `resetDbSystemOptions` <a name="resetDbSystemOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDbSystemOptions"></a>

```java
public void resetDbSystemOptions()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDiskRedundancy` <a name="resetDiskRedundancy" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDiskRedundancy"></a>

```java
public void resetDiskRedundancy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetDomain` <a name="resetDomain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetFaultDomains` <a name="resetFaultDomains" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetFaultDomains"></a>

```java
public void resetFaultDomains()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetKmsKeyVersionId` <a name="resetKmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetKmsKeyVersionId"></a>

```java
public void resetKmsKeyVersionId()
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetLicenseModel"></a>

```java
public void resetLicenseModel()
```

##### `resetMaintenanceWindowDetails` <a name="resetMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetMaintenanceWindowDetails"></a>

```java
public void resetMaintenanceWindowDetails()
```

##### `resetNodeCount` <a name="resetNodeCount" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetNodeCount"></a>

```java
public void resetNodeCount()
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetNsgIds"></a>

```java
public void resetNsgIds()
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetPrivateIp"></a>

```java
public void resetPrivateIp()
```

##### `resetRecoStorageSizeInGb` <a name="resetRecoStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetRecoStorageSizeInGb"></a>

```java
public void resetRecoStorageSizeInGb()
```

##### `resetSecurityAttributes` <a name="resetSecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSecurityAttributes"></a>

```java
public void resetSecurityAttributes()
```

##### `resetSource` <a name="resetSource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSource"></a>

```java
public void resetSource()
```

##### `resetSourceDbSystemId` <a name="resetSourceDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSourceDbSystemId"></a>

```java
public void resetSourceDbSystemId()
```

##### `resetSparseDiskgroup` <a name="resetSparseDiskgroup" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSparseDiskgroup"></a>

```java
public void resetSparseDiskgroup()
```

##### `resetStorageVolumePerformanceMode` <a name="resetStorageVolumePerformanceMode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetStorageVolumePerformanceMode"></a>

```java
public void resetStorageVolumePerformanceMode()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeZone` <a name="resetTimeZone" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetTimeZone"></a>

```java
public void resetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseDbSystem resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystem;

DatabaseDbSystem.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystem;

DatabaseDbSystem.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystem;

DatabaseDbSystem.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystem;

DatabaseDbSystem.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseDbSystem.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseDbSystem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseDbSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseDbSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseDbSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference">DatabaseDbSystemDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbHome">dbHome</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference">DatabaseDbSystemDbHomeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbSystemOptions">dbSystemOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference">DatabaseDbSystemDbSystemOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.iormConfigCache">iormConfigCache</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList">DatabaseDbSystemIormConfigCacheList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lastMaintenanceRunId">lastMaintenanceRunId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lastPatchHistoryEntryId">lastPatchHistoryEntryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.listenerPort">listenerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList">DatabaseDbSystemMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.maintenanceWindowDetails">maintenanceWindowDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference">DatabaseDbSystemMaintenanceWindowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.memorySizeInGbs">memorySizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nextMaintenanceRunId">nextMaintenanceRunId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.osVersion">osVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.pointInTimeDataDiskCloneTimestamp">pointInTimeDataDiskCloneTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.scanDnsName">scanDnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.scanDnsRecordId">scanDnsRecordId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.scanIpIds">scanIpIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference">DatabaseDbSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.vipIds">vipIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupNetworkNsgIdsInput">backupNetworkNsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupSubnetIdInput">backupSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.cpuCoreCountInput">cpuCoreCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.databaseEditionInput">databaseEditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataCollectionOptionsInput">dataCollectionOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStoragePercentageInput">dataStoragePercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStorageSizeInGbInput">dataStorageSizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbHomeInput">dbHomeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbSystemOptionsInput">dbSystemOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.diskRedundancyInput">diskRedundancyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.faultDomainsInput">faultDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyVersionIdInput">kmsKeyVersionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.licenseModelInput">licenseModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.maintenanceWindowDetailsInput">maintenanceWindowDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nodeCountInput">nodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nsgIdsInput">nsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.privateIpInput">privateIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.recoStorageSizeInGbInput">recoStorageSizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.securityAttributesInput">securityAttributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.shapeInput">shapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sourceDbSystemIdInput">sourceDbSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sparseDiskgroupInput">sparseDiskgroupInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sshPublicKeysInput">sshPublicKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.storageVolumePerformanceModeInput">storageVolumePerformanceModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts">DatabaseDbSystemTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupNetworkNsgIds">backupNetworkNsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupSubnetId">backupSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.databaseEdition">databaseEdition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStoragePercentage">dataStoragePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.diskRedundancy">diskRedundancy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.faultDomains">faultDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.recoStorageSizeInGb">recoStorageSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.securityAttributes">securityAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sourceDbSystemId">sourceDbSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sparseDiskgroup">sparseDiskgroup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.storageVolumePerformanceMode">storageVolumePerformanceMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataCollectionOptions`<sup>Required</sup> <a name="dataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataCollectionOptions"></a>

```java
public DatabaseDbSystemDataCollectionOptionsOutputReference getDataCollectionOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference">DatabaseDbSystemDataCollectionOptionsOutputReference</a>

---

##### `dbHome`<sup>Required</sup> <a name="dbHome" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbHome"></a>

```java
public DatabaseDbSystemDbHomeOutputReference getDbHome();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference">DatabaseDbSystemDbHomeOutputReference</a>

---

##### `dbSystemOptions`<sup>Required</sup> <a name="dbSystemOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbSystemOptions"></a>

```java
public DatabaseDbSystemDbSystemOptionsOutputReference getDbSystemOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference">DatabaseDbSystemDbSystemOptionsOutputReference</a>

---

##### `iormConfigCache`<sup>Required</sup> <a name="iormConfigCache" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.iormConfigCache"></a>

```java
public DatabaseDbSystemIormConfigCacheList getIormConfigCache();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList">DatabaseDbSystemIormConfigCacheList</a>

---

##### `lastMaintenanceRunId`<sup>Required</sup> <a name="lastMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lastMaintenanceRunId"></a>

```java
public java.lang.String getLastMaintenanceRunId();
```

- *Type:* java.lang.String

---

##### `lastPatchHistoryEntryId`<sup>Required</sup> <a name="lastPatchHistoryEntryId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lastPatchHistoryEntryId"></a>

```java
public java.lang.String getLastPatchHistoryEntryId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.listenerPort"></a>

```java
public java.lang.Number getListenerPort();
```

- *Type:* java.lang.Number

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.maintenanceWindow"></a>

```java
public DatabaseDbSystemMaintenanceWindowList getMaintenanceWindow();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList">DatabaseDbSystemMaintenanceWindowList</a>

---

##### `maintenanceWindowDetails`<sup>Required</sup> <a name="maintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.maintenanceWindowDetails"></a>

```java
public DatabaseDbSystemMaintenanceWindowDetailsOutputReference getMaintenanceWindowDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference">DatabaseDbSystemMaintenanceWindowDetailsOutputReference</a>

---

##### `memorySizeInGbs`<sup>Required</sup> <a name="memorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.memorySizeInGbs"></a>

```java
public java.lang.Number getMemorySizeInGbs();
```

- *Type:* java.lang.Number

---

##### `nextMaintenanceRunId`<sup>Required</sup> <a name="nextMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nextMaintenanceRunId"></a>

```java
public java.lang.String getNextMaintenanceRunId();
```

- *Type:* java.lang.String

---

##### `osVersion`<sup>Required</sup> <a name="osVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.osVersion"></a>

```java
public java.lang.String getOsVersion();
```

- *Type:* java.lang.String

---

##### `pointInTimeDataDiskCloneTimestamp`<sup>Required</sup> <a name="pointInTimeDataDiskCloneTimestamp" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.pointInTimeDataDiskCloneTimestamp"></a>

```java
public java.lang.String getPointInTimeDataDiskCloneTimestamp();
```

- *Type:* java.lang.String

---

##### `scanDnsName`<sup>Required</sup> <a name="scanDnsName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.scanDnsName"></a>

```java
public java.lang.String getScanDnsName();
```

- *Type:* java.lang.String

---

##### `scanDnsRecordId`<sup>Required</sup> <a name="scanDnsRecordId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.scanDnsRecordId"></a>

```java
public java.lang.String getScanDnsRecordId();
```

- *Type:* java.lang.String

---

##### `scanIpIds`<sup>Required</sup> <a name="scanIpIds" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.scanIpIds"></a>

```java
public java.util.List<java.lang.String> getScanIpIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeouts"></a>

```java
public DatabaseDbSystemTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference">DatabaseDbSystemTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `vipIds`<sup>Required</sup> <a name="vipIds" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.vipIds"></a>

```java
public java.util.List<java.lang.String> getVipIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `backupNetworkNsgIdsInput`<sup>Optional</sup> <a name="backupNetworkNsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupNetworkNsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getBackupNetworkNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backupSubnetIdInput`<sup>Optional</sup> <a name="backupSubnetIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupSubnetIdInput"></a>

```java
public java.lang.String getBackupSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `cpuCoreCountInput`<sup>Optional</sup> <a name="cpuCoreCountInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.cpuCoreCountInput"></a>

```java
public java.lang.Number getCpuCoreCountInput();
```

- *Type:* java.lang.Number

---

##### `databaseEditionInput`<sup>Optional</sup> <a name="databaseEditionInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.databaseEditionInput"></a>

```java
public java.lang.String getDatabaseEditionInput();
```

- *Type:* java.lang.String

---

##### `dataCollectionOptionsInput`<sup>Optional</sup> <a name="dataCollectionOptionsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataCollectionOptionsInput"></a>

```java
public DatabaseDbSystemDataCollectionOptions getDataCollectionOptionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a>

---

##### `dataStoragePercentageInput`<sup>Optional</sup> <a name="dataStoragePercentageInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStoragePercentageInput"></a>

```java
public java.lang.Number getDataStoragePercentageInput();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeInGbInput`<sup>Optional</sup> <a name="dataStorageSizeInGbInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStorageSizeInGbInput"></a>

```java
public java.lang.Number getDataStorageSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `dbHomeInput`<sup>Optional</sup> <a name="dbHomeInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbHomeInput"></a>

```java
public DatabaseDbSystemDbHome getDbHomeInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a>

---

##### `dbSystemOptionsInput`<sup>Optional</sup> <a name="dbSystemOptionsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbSystemOptionsInput"></a>

```java
public DatabaseDbSystemDbSystemOptions getDbSystemOptionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `diskRedundancyInput`<sup>Optional</sup> <a name="diskRedundancyInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.diskRedundancyInput"></a>

```java
public java.lang.String getDiskRedundancyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `faultDomainsInput`<sup>Optional</sup> <a name="faultDomainsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.faultDomainsInput"></a>

```java
public java.util.List<java.lang.String> getFaultDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyVersionIdInput`<sup>Optional</sup> <a name="kmsKeyVersionIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyVersionIdInput"></a>

```java
public java.lang.String getKmsKeyVersionIdInput();
```

- *Type:* java.lang.String

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.licenseModelInput"></a>

```java
public java.lang.String getLicenseModelInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowDetailsInput`<sup>Optional</sup> <a name="maintenanceWindowDetailsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.maintenanceWindowDetailsInput"></a>

```java
public DatabaseDbSystemMaintenanceWindowDetails getMaintenanceWindowDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a>

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nodeCountInput"></a>

```java
public java.lang.Number getNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.privateIpInput"></a>

```java
public java.lang.String getPrivateIpInput();
```

- *Type:* java.lang.String

---

##### `recoStorageSizeInGbInput`<sup>Optional</sup> <a name="recoStorageSizeInGbInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.recoStorageSizeInGbInput"></a>

```java
public java.lang.Number getRecoStorageSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `securityAttributesInput`<sup>Optional</sup> <a name="securityAttributesInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.securityAttributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.shapeInput"></a>

```java
public java.lang.String getShapeInput();
```

- *Type:* java.lang.String

---

##### `sourceDbSystemIdInput`<sup>Optional</sup> <a name="sourceDbSystemIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sourceDbSystemIdInput"></a>

```java
public java.lang.String getSourceDbSystemIdInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `sparseDiskgroupInput`<sup>Optional</sup> <a name="sparseDiskgroupInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sparseDiskgroupInput"></a>

```java
public java.lang.Object getSparseDiskgroupInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sshPublicKeysInput`<sup>Optional</sup> <a name="sshPublicKeysInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sshPublicKeysInput"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `storageVolumePerformanceModeInput`<sup>Optional</sup> <a name="storageVolumePerformanceModeInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.storageVolumePerformanceModeInput"></a>

```java
public java.lang.String getStorageVolumePerformanceModeInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts">DatabaseDbSystemTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `backupNetworkNsgIds`<sup>Required</sup> <a name="backupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupNetworkNsgIds"></a>

```java
public java.util.List<java.lang.String> getBackupNetworkNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backupSubnetId`<sup>Required</sup> <a name="backupSubnetId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupSubnetId"></a>

```java
public java.lang.String getBackupSubnetId();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

---

##### `databaseEdition`<sup>Required</sup> <a name="databaseEdition" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.databaseEdition"></a>

```java
public java.lang.String getDatabaseEdition();
```

- *Type:* java.lang.String

---

##### `dataStoragePercentage`<sup>Required</sup> <a name="dataStoragePercentage" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStoragePercentage"></a>

```java
public java.lang.Number getDataStoragePercentage();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStorageSizeInGb"></a>

```java
public java.lang.Number getDataStorageSizeInGb();
```

- *Type:* java.lang.Number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `diskRedundancy`<sup>Required</sup> <a name="diskRedundancy" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.diskRedundancy"></a>

```java
public java.lang.String getDiskRedundancy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `faultDomains`<sup>Required</sup> <a name="faultDomains" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.faultDomains"></a>

```java
public java.util.List<java.lang.String> getFaultDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `kmsKeyVersionId`<sup>Required</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyVersionId"></a>

```java
public java.lang.String getKmsKeyVersionId();
```

- *Type:* java.lang.String

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `recoStorageSizeInGb`<sup>Required</sup> <a name="recoStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.recoStorageSizeInGb"></a>

```java
public java.lang.Number getRecoStorageSizeInGb();
```

- *Type:* java.lang.Number

---

##### `securityAttributes`<sup>Required</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.securityAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `sourceDbSystemId`<sup>Required</sup> <a name="sourceDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sourceDbSystemId"></a>

```java
public java.lang.String getSourceDbSystemId();
```

- *Type:* java.lang.String

---

##### `sparseDiskgroup`<sup>Required</sup> <a name="sparseDiskgroup" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sparseDiskgroup"></a>

```java
public java.lang.Object getSparseDiskgroup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sshPublicKeys"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `storageVolumePerformanceMode`<sup>Required</sup> <a name="storageVolumePerformanceMode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.storageVolumePerformanceMode"></a>

```java
public java.lang.String getStorageVolumePerformanceMode();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseDbSystemConfig <a name="DatabaseDbSystemConfig" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemConfig;

DatabaseDbSystemConfig.builder()
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
    .availabilityDomain(java.lang.String)
    .compartmentId(java.lang.String)
    .dbHome(DatabaseDbSystemDbHome)
    .hostname(java.lang.String)
    .shape(java.lang.String)
    .sshPublicKeys(java.util.List<java.lang.String>)
    .subnetId(java.lang.String)
//  .backupNetworkNsgIds(java.util.List<java.lang.String>)
//  .backupSubnetId(java.lang.String)
//  .clusterName(java.lang.String)
//  .cpuCoreCount(java.lang.Number)
//  .databaseEdition(java.lang.String)
//  .dataCollectionOptions(DatabaseDbSystemDataCollectionOptions)
//  .dataStoragePercentage(java.lang.Number)
//  .dataStorageSizeInGb(java.lang.Number)
//  .dbSystemOptions(DatabaseDbSystemDbSystemOptions)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .diskRedundancy(java.lang.String)
//  .displayName(java.lang.String)
//  .domain(java.lang.String)
//  .faultDomains(java.util.List<java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .kmsKeyVersionId(java.lang.String)
//  .licenseModel(java.lang.String)
//  .maintenanceWindowDetails(DatabaseDbSystemMaintenanceWindowDetails)
//  .nodeCount(java.lang.Number)
//  .nsgIds(java.util.List<java.lang.String>)
//  .privateIp(java.lang.String)
//  .recoStorageSizeInGb(java.lang.Number)
//  .securityAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .source(java.lang.String)
//  .sourceDbSystemId(java.lang.String)
//  .sparseDiskgroup(java.lang.Boolean)
//  .sparseDiskgroup(IResolvable)
//  .storageVolumePerformanceMode(java.lang.String)
//  .timeouts(DatabaseDbSystemTimeouts)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#availability_domain DatabaseDbSystem#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#compartment_id DatabaseDbSystem#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dbHome">dbHome</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a></code> | db_home block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#hostname DatabaseDbSystem#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#shape DatabaseDbSystem#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#ssh_public_keys DatabaseDbSystem#ssh_public_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#subnet_id DatabaseDbSystem#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.backupNetworkNsgIds">backupNetworkNsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_network_nsg_ids DatabaseDbSystem#backup_network_nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.backupSubnetId">backupSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_subnet_id DatabaseDbSystem#backup_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#cluster_name DatabaseDbSystem#cluster_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#cpu_core_count DatabaseDbSystem#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.databaseEdition">databaseEdition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_edition DatabaseDbSystem#database_edition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dataStoragePercentage">dataStoragePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_storage_percentage DatabaseDbSystem#data_storage_percentage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_storage_size_in_gb DatabaseDbSystem#data_storage_size_in_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dbSystemOptions">dbSystemOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a></code> | db_system_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.diskRedundancy">diskRedundancy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#disk_redundancy DatabaseDbSystem#disk_redundancy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#display_name DatabaseDbSystem#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#domain DatabaseDbSystem#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.faultDomains">faultDomains</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#fault_domains DatabaseDbSystem#fault_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#id DatabaseDbSystem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_id DatabaseDbSystem#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_version_id DatabaseDbSystem#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#license_model DatabaseDbSystem#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.maintenanceWindowDetails">maintenanceWindowDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a></code> | maintenance_window_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#node_count DatabaseDbSystem#node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#nsg_ids DatabaseDbSystem#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#private_ip DatabaseDbSystem#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.recoStorageSizeInGb">recoStorageSizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#reco_storage_size_in_gb DatabaseDbSystem#reco_storage_size_in_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.securityAttributes">securityAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#security_attributes DatabaseDbSystem#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#source DatabaseDbSystem#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.sourceDbSystemId">sourceDbSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#source_db_system_id DatabaseDbSystem#source_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.sparseDiskgroup">sparseDiskgroup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#sparse_diskgroup DatabaseDbSystem#sparse_diskgroup}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.storageVolumePerformanceMode">storageVolumePerformanceMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#storage_volume_performance_mode DatabaseDbSystem#storage_volume_performance_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts">DatabaseDbSystemTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#time_zone DatabaseDbSystem#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#availability_domain DatabaseDbSystem#availability_domain}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#compartment_id DatabaseDbSystem#compartment_id}.

---

##### `dbHome`<sup>Required</sup> <a name="dbHome" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dbHome"></a>

```java
public DatabaseDbSystemDbHome getDbHome();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a>

db_home block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_home DatabaseDbSystem#db_home}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#hostname DatabaseDbSystem#hostname}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#shape DatabaseDbSystem#shape}.

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.sshPublicKeys"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#ssh_public_keys DatabaseDbSystem#ssh_public_keys}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#subnet_id DatabaseDbSystem#subnet_id}.

---

##### `backupNetworkNsgIds`<sup>Optional</sup> <a name="backupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.backupNetworkNsgIds"></a>

```java
public java.util.List<java.lang.String> getBackupNetworkNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_network_nsg_ids DatabaseDbSystem#backup_network_nsg_ids}.

---

##### `backupSubnetId`<sup>Optional</sup> <a name="backupSubnetId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.backupSubnetId"></a>

```java
public java.lang.String getBackupSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_subnet_id DatabaseDbSystem#backup_subnet_id}.

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#cluster_name DatabaseDbSystem#cluster_name}.

---

##### `cpuCoreCount`<sup>Optional</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#cpu_core_count DatabaseDbSystem#cpu_core_count}.

---

##### `databaseEdition`<sup>Optional</sup> <a name="databaseEdition" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.databaseEdition"></a>

```java
public java.lang.String getDatabaseEdition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_edition DatabaseDbSystem#database_edition}.

---

##### `dataCollectionOptions`<sup>Optional</sup> <a name="dataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dataCollectionOptions"></a>

```java
public DatabaseDbSystemDataCollectionOptions getDataCollectionOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_collection_options DatabaseDbSystem#data_collection_options}

---

##### `dataStoragePercentage`<sup>Optional</sup> <a name="dataStoragePercentage" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dataStoragePercentage"></a>

```java
public java.lang.Number getDataStoragePercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_storage_percentage DatabaseDbSystem#data_storage_percentage}.

---

##### `dataStorageSizeInGb`<sup>Optional</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dataStorageSizeInGb"></a>

```java
public java.lang.Number getDataStorageSizeInGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_storage_size_in_gb DatabaseDbSystem#data_storage_size_in_gb}.

---

##### `dbSystemOptions`<sup>Optional</sup> <a name="dbSystemOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dbSystemOptions"></a>

```java
public DatabaseDbSystemDbSystemOptions getDbSystemOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a>

db_system_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_system_options DatabaseDbSystem#db_system_options}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}.

---

##### `diskRedundancy`<sup>Optional</sup> <a name="diskRedundancy" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.diskRedundancy"></a>

```java
public java.lang.String getDiskRedundancy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#disk_redundancy DatabaseDbSystem#disk_redundancy}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#display_name DatabaseDbSystem#display_name}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#domain DatabaseDbSystem#domain}.

---

##### `faultDomains`<sup>Optional</sup> <a name="faultDomains" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.faultDomains"></a>

```java
public java.util.List<java.lang.String> getFaultDomains();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#fault_domains DatabaseDbSystem#fault_domains}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#id DatabaseDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_id DatabaseDbSystem#kms_key_id}.

---

##### `kmsKeyVersionId`<sup>Optional</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.kmsKeyVersionId"></a>

```java
public java.lang.String getKmsKeyVersionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_version_id DatabaseDbSystem#kms_key_version_id}.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#license_model DatabaseDbSystem#license_model}.

---

##### `maintenanceWindowDetails`<sup>Optional</sup> <a name="maintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.maintenanceWindowDetails"></a>

```java
public DatabaseDbSystemMaintenanceWindowDetails getMaintenanceWindowDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a>

maintenance_window_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#maintenance_window_details DatabaseDbSystem#maintenance_window_details}

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#node_count DatabaseDbSystem#node_count}.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#nsg_ids DatabaseDbSystem#nsg_ids}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#private_ip DatabaseDbSystem#private_ip}.

---

##### `recoStorageSizeInGb`<sup>Optional</sup> <a name="recoStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.recoStorageSizeInGb"></a>

```java
public java.lang.Number getRecoStorageSizeInGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#reco_storage_size_in_gb DatabaseDbSystem#reco_storage_size_in_gb}.

---

##### `securityAttributes`<sup>Optional</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.securityAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#security_attributes DatabaseDbSystem#security_attributes}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#source DatabaseDbSystem#source}.

---

##### `sourceDbSystemId`<sup>Optional</sup> <a name="sourceDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.sourceDbSystemId"></a>

```java
public java.lang.String getSourceDbSystemId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#source_db_system_id DatabaseDbSystem#source_db_system_id}.

---

##### `sparseDiskgroup`<sup>Optional</sup> <a name="sparseDiskgroup" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.sparseDiskgroup"></a>

```java
public java.lang.Object getSparseDiskgroup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#sparse_diskgroup DatabaseDbSystem#sparse_diskgroup}.

---

##### `storageVolumePerformanceMode`<sup>Optional</sup> <a name="storageVolumePerformanceMode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.storageVolumePerformanceMode"></a>

```java
public java.lang.String getStorageVolumePerformanceMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#storage_volume_performance_mode DatabaseDbSystem#storage_volume_performance_mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.timeouts"></a>

```java
public DatabaseDbSystemTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts">DatabaseDbSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#timeouts DatabaseDbSystem#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#time_zone DatabaseDbSystem#time_zone}.

---

### DatabaseDbSystemDataCollectionOptions <a name="DatabaseDbSystemDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemDataCollectionOptions;

DatabaseDbSystemDataCollectionOptions.builder()
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
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_diagnostics_events_enabled DatabaseDbSystem#is_diagnostics_events_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions.property.isHealthMonitoringEnabled">isHealthMonitoringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_health_monitoring_enabled DatabaseDbSystem#is_health_monitoring_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_incident_logs_enabled DatabaseDbSystem#is_incident_logs_enabled}. |

---

##### `isDiagnosticsEventsEnabled`<sup>Optional</sup> <a name="isDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```java
public java.lang.Object getIsDiagnosticsEventsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_diagnostics_events_enabled DatabaseDbSystem#is_diagnostics_events_enabled}.

---

##### `isHealthMonitoringEnabled`<sup>Optional</sup> <a name="isHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```java
public java.lang.Object getIsHealthMonitoringEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_health_monitoring_enabled DatabaseDbSystem#is_health_monitoring_enabled}.

---

##### `isIncidentLogsEnabled`<sup>Optional</sup> <a name="isIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```java
public java.lang.Object getIsIncidentLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_incident_logs_enabled DatabaseDbSystem#is_incident_logs_enabled}.

---

### DatabaseDbSystemDbHome <a name="DatabaseDbSystemDbHome" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemDbHome;

DatabaseDbSystemDbHome.builder()
    .database(DatabaseDbSystemDbHomeDatabase)
//  .createAsync(java.lang.Boolean)
//  .createAsync(IResolvable)
//  .databaseSoftwareImageId(java.lang.String)
//  .dbVersion(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.database">database</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase">DatabaseDbSystemDbHomeDatabase</a></code> | database block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.createAsync">createAsync</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#create_async DatabaseDbSystem#create_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_software_image_id DatabaseDbSystem#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_version DatabaseDbSystem#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#display_name DatabaseDbSystem#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}. |

---

##### `database`<sup>Required</sup> <a name="database" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.database"></a>

```java
public DatabaseDbSystemDbHomeDatabase getDatabase();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase">DatabaseDbSystemDbHomeDatabase</a>

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database DatabaseDbSystem#database}

---

##### `createAsync`<sup>Optional</sup> <a name="createAsync" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.createAsync"></a>

```java
public java.lang.Object getCreateAsync();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#create_async DatabaseDbSystem#create_async}.

---

##### `databaseSoftwareImageId`<sup>Optional</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.databaseSoftwareImageId"></a>

```java
public java.lang.String getDatabaseSoftwareImageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_software_image_id DatabaseDbSystem#database_software_image_id}.

---

##### `dbVersion`<sup>Optional</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.dbVersion"></a>

```java
public java.lang.String getDbVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_version DatabaseDbSystem#db_version}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#display_name DatabaseDbSystem#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}.

---

### DatabaseDbSystemDbHomeDatabase <a name="DatabaseDbSystemDbHomeDatabase" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemDbHomeDatabase;

DatabaseDbSystemDbHomeDatabase.builder()
    .adminPassword(java.lang.String)
//  .backupId(java.lang.String)
//  .backupTdePassword(java.lang.String)
//  .characterSet(java.lang.String)
//  .databaseId(java.lang.String)
//  .databaseSoftwareImageId(java.lang.String)
//  .dbBackupConfig(DatabaseDbSystemDbHomeDatabaseDbBackupConfig)
//  .dbDomain(java.lang.String)
//  .dbName(java.lang.String)
//  .dbUniqueName(java.lang.String)
//  .dbWorkload(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .kmsKeyId(java.lang.String)
//  .kmsKeyVersionId(java.lang.String)
//  .ncharacterSet(java.lang.String)
//  .pdbName(java.lang.String)
//  .pluggableDatabases(java.util.List<java.lang.String>)
//  .tdeWalletPassword(java.lang.String)
//  .timeStampForPointInTimeRecovery(java.lang.String)
//  .vaultId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#admin_password DatabaseDbSystem#admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.backupId">backupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_id DatabaseDbSystem#backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.backupTdePassword">backupTdePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_tde_password DatabaseDbSystem#backup_tde_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.characterSet">characterSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#character_set DatabaseDbSystem#character_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_id DatabaseDbSystem#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_software_image_id DatabaseDbSystem#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbBackupConfig">dbBackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig">DatabaseDbSystemDbHomeDatabaseDbBackupConfig</a></code> | db_backup_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbDomain">dbDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_domain DatabaseDbSystem#db_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbName">dbName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_name DatabaseDbSystem#db_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbUniqueName">dbUniqueName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_unique_name DatabaseDbSystem#db_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbWorkload">dbWorkload</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_workload DatabaseDbSystem#db_workload}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_id DatabaseDbSystem#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_version_id DatabaseDbSystem#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.ncharacterSet">ncharacterSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#ncharacter_set DatabaseDbSystem#ncharacter_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.pdbName">pdbName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#pdb_name DatabaseDbSystem#pdb_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.pluggableDatabases">pluggableDatabases</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#pluggable_databases DatabaseDbSystem#pluggable_databases}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.tdeWalletPassword">tdeWalletPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#tde_wallet_password DatabaseDbSystem#tde_wallet_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.timeStampForPointInTimeRecovery">timeStampForPointInTimeRecovery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#time_stamp_for_point_in_time_recovery DatabaseDbSystem#time_stamp_for_point_in_time_recovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#vault_id DatabaseDbSystem#vault_id}. |

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#admin_password DatabaseDbSystem#admin_password}.

---

##### `backupId`<sup>Optional</sup> <a name="backupId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.backupId"></a>

```java
public java.lang.String getBackupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_id DatabaseDbSystem#backup_id}.

---

##### `backupTdePassword`<sup>Optional</sup> <a name="backupTdePassword" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.backupTdePassword"></a>

```java
public java.lang.String getBackupTdePassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_tde_password DatabaseDbSystem#backup_tde_password}.

---

##### `characterSet`<sup>Optional</sup> <a name="characterSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.characterSet"></a>

```java
public java.lang.String getCharacterSet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#character_set DatabaseDbSystem#character_set}.

---

##### `databaseId`<sup>Optional</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_id DatabaseDbSystem#database_id}.

---

##### `databaseSoftwareImageId`<sup>Optional</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.databaseSoftwareImageId"></a>

```java
public java.lang.String getDatabaseSoftwareImageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_software_image_id DatabaseDbSystem#database_software_image_id}.

---

##### `dbBackupConfig`<sup>Optional</sup> <a name="dbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbBackupConfig"></a>

```java
public DatabaseDbSystemDbHomeDatabaseDbBackupConfig getDbBackupConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig">DatabaseDbSystemDbHomeDatabaseDbBackupConfig</a>

db_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_backup_config DatabaseDbSystem#db_backup_config}

---

##### `dbDomain`<sup>Optional</sup> <a name="dbDomain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbDomain"></a>

```java
public java.lang.String getDbDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_domain DatabaseDbSystem#db_domain}.

---

##### `dbName`<sup>Optional</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_name DatabaseDbSystem#db_name}.

---

##### `dbUniqueName`<sup>Optional</sup> <a name="dbUniqueName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbUniqueName"></a>

```java
public java.lang.String getDbUniqueName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_unique_name DatabaseDbSystem#db_unique_name}.

---

##### `dbWorkload`<sup>Optional</sup> <a name="dbWorkload" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbWorkload"></a>

```java
public java.lang.String getDbWorkload();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_workload DatabaseDbSystem#db_workload}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_id DatabaseDbSystem#kms_key_id}.

---

##### `kmsKeyVersionId`<sup>Optional</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.kmsKeyVersionId"></a>

```java
public java.lang.String getKmsKeyVersionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_version_id DatabaseDbSystem#kms_key_version_id}.

---

##### `ncharacterSet`<sup>Optional</sup> <a name="ncharacterSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.ncharacterSet"></a>

```java
public java.lang.String getNcharacterSet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#ncharacter_set DatabaseDbSystem#ncharacter_set}.

---

##### `pdbName`<sup>Optional</sup> <a name="pdbName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.pdbName"></a>

```java
public java.lang.String getPdbName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#pdb_name DatabaseDbSystem#pdb_name}.

---

##### `pluggableDatabases`<sup>Optional</sup> <a name="pluggableDatabases" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.pluggableDatabases"></a>

```java
public java.util.List<java.lang.String> getPluggableDatabases();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#pluggable_databases DatabaseDbSystem#pluggable_databases}.

---

##### `tdeWalletPassword`<sup>Optional</sup> <a name="tdeWalletPassword" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.tdeWalletPassword"></a>

```java
public java.lang.String getTdeWalletPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#tde_wallet_password DatabaseDbSystem#tde_wallet_password}.

---

##### `timeStampForPointInTimeRecovery`<sup>Optional</sup> <a name="timeStampForPointInTimeRecovery" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.timeStampForPointInTimeRecovery"></a>

```java
public java.lang.String getTimeStampForPointInTimeRecovery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#time_stamp_for_point_in_time_recovery DatabaseDbSystem#time_stamp_for_point_in_time_recovery}.

---

##### `vaultId`<sup>Optional</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#vault_id DatabaseDbSystem#vault_id}.

---

### DatabaseDbSystemDbHomeDatabaseConnectionStrings <a name="DatabaseDbSystemDbHomeDatabaseConnectionStrings" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStrings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemDbHomeDatabaseConnectionStrings;

DatabaseDbSystemDbHomeDatabaseConnectionStrings.builder()
    .build();
```


### DatabaseDbSystemDbHomeDatabaseDbBackupConfig <a name="DatabaseDbSystemDbHomeDatabaseDbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemDbHomeDatabaseDbBackupConfig;

DatabaseDbSystemDbHomeDatabaseDbBackupConfig.builder()
//  .autoBackupEnabled(java.lang.Boolean)
//  .autoBackupEnabled(IResolvable)
//  .autoBackupWindow(java.lang.String)
//  .autoFullBackupDay(java.lang.String)
//  .autoFullBackupWindow(java.lang.String)
//  .backupDeletionPolicy(java.lang.String)
//  .backupDestinationDetails(IResolvable)
//  .backupDestinationDetails(java.util.List<DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails>)
//  .recoveryWindowInDays(java.lang.Number)
//  .runImmediateFullBackup(java.lang.Boolean)
//  .runImmediateFullBackup(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoBackupEnabled">autoBackupEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_backup_enabled DatabaseDbSystem#auto_backup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoBackupWindow">autoBackupWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_backup_window DatabaseDbSystem#auto_backup_window}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoFullBackupDay">autoFullBackupDay</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_full_backup_day DatabaseDbSystem#auto_full_backup_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoFullBackupWindow">autoFullBackupWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_full_backup_window DatabaseDbSystem#auto_full_backup_window}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.backupDeletionPolicy">backupDeletionPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_deletion_policy DatabaseDbSystem#backup_deletion_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.backupDestinationDetails">backupDestinationDetails</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>></code> | backup_destination_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.recoveryWindowInDays">recoveryWindowInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#recovery_window_in_days DatabaseDbSystem#recovery_window_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.runImmediateFullBackup">runImmediateFullBackup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#run_immediate_full_backup DatabaseDbSystem#run_immediate_full_backup}. |

---

##### `autoBackupEnabled`<sup>Optional</sup> <a name="autoBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoBackupEnabled"></a>

```java
public java.lang.Object getAutoBackupEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_backup_enabled DatabaseDbSystem#auto_backup_enabled}.

---

##### `autoBackupWindow`<sup>Optional</sup> <a name="autoBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoBackupWindow"></a>

```java
public java.lang.String getAutoBackupWindow();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_backup_window DatabaseDbSystem#auto_backup_window}.

---

##### `autoFullBackupDay`<sup>Optional</sup> <a name="autoFullBackupDay" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoFullBackupDay"></a>

```java
public java.lang.String getAutoFullBackupDay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_full_backup_day DatabaseDbSystem#auto_full_backup_day}.

---

##### `autoFullBackupWindow`<sup>Optional</sup> <a name="autoFullBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoFullBackupWindow"></a>

```java
public java.lang.String getAutoFullBackupWindow();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_full_backup_window DatabaseDbSystem#auto_full_backup_window}.

---

##### `backupDeletionPolicy`<sup>Optional</sup> <a name="backupDeletionPolicy" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.backupDeletionPolicy"></a>

```java
public java.lang.String getBackupDeletionPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_deletion_policy DatabaseDbSystem#backup_deletion_policy}.

---

##### `backupDestinationDetails`<sup>Optional</sup> <a name="backupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.backupDestinationDetails"></a>

```java
public java.lang.Object getBackupDestinationDetails();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>>

backup_destination_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_destination_details DatabaseDbSystem#backup_destination_details}

---

##### `recoveryWindowInDays`<sup>Optional</sup> <a name="recoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.recoveryWindowInDays"></a>

```java
public java.lang.Number getRecoveryWindowInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#recovery_window_in_days DatabaseDbSystem#recovery_window_in_days}.

---

##### `runImmediateFullBackup`<sup>Optional</sup> <a name="runImmediateFullBackup" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.runImmediateFullBackup"></a>

```java
public java.lang.Object getRunImmediateFullBackup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#run_immediate_full_backup DatabaseDbSystem#run_immediate_full_backup}.

---

### DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails <a name="DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails;

DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.builder()
//  .dbrsPolicyId(java.lang.String)
//  .id(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.dbrsPolicyId">dbrsPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#dbrs_policy_id DatabaseDbSystem#dbrs_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#id DatabaseDbSystem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#type DatabaseDbSystem#type}. |

---

##### `dbrsPolicyId`<sup>Optional</sup> <a name="dbrsPolicyId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.dbrsPolicyId"></a>

```java
public java.lang.String getDbrsPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#dbrs_policy_id DatabaseDbSystem#dbrs_policy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#id DatabaseDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#type DatabaseDbSystem#type}.

---

### DatabaseDbSystemDbSystemOptions <a name="DatabaseDbSystemDbSystemOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemDbSystemOptions;

DatabaseDbSystemDbSystemOptions.builder()
//  .storageManagement(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions.property.storageManagement">storageManagement</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#storage_management DatabaseDbSystem#storage_management}. |

---

##### `storageManagement`<sup>Optional</sup> <a name="storageManagement" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions.property.storageManagement"></a>

```java
public java.lang.String getStorageManagement();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#storage_management DatabaseDbSystem#storage_management}.

---

### DatabaseDbSystemIormConfigCache <a name="DatabaseDbSystemIormConfigCache" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCache"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCache.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemIormConfigCache;

DatabaseDbSystemIormConfigCache.builder()
    .build();
```


### DatabaseDbSystemIormConfigCacheDbPlans <a name="DatabaseDbSystemIormConfigCacheDbPlans" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlans.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemIormConfigCacheDbPlans;

DatabaseDbSystemIormConfigCacheDbPlans.builder()
    .build();
```


### DatabaseDbSystemMaintenanceWindow <a name="DatabaseDbSystemMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemMaintenanceWindow;

DatabaseDbSystemMaintenanceWindow.builder()
    .build();
```


### DatabaseDbSystemMaintenanceWindowDaysOfWeek <a name="DatabaseDbSystemMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeek.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemMaintenanceWindowDaysOfWeek;

DatabaseDbSystemMaintenanceWindowDaysOfWeek.builder()
    .build();
```


### DatabaseDbSystemMaintenanceWindowDetails <a name="DatabaseDbSystemMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemMaintenanceWindowDetails;

DatabaseDbSystemMaintenanceWindowDetails.builder()
//  .customActionTimeoutInMins(java.lang.Number)
//  .daysOfWeek(IResolvable)
//  .daysOfWeek(java.util.List<DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek>)
//  .hoursOfDay(java.util.List<java.lang.Number>)
//  .isCustomActionTimeoutEnabled(java.lang.Boolean)
//  .isCustomActionTimeoutEnabled(IResolvable)
//  .isMonthlyPatchingEnabled(java.lang.Boolean)
//  .isMonthlyPatchingEnabled(IResolvable)
//  .leadTimeInWeeks(java.lang.Number)
//  .months(IResolvable)
//  .months(java.util.List<DatabaseDbSystemMaintenanceWindowDetailsMonths>)
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
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#custom_action_timeout_in_mins DatabaseDbSystem#custom_action_timeout_in_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.daysOfWeek">daysOfWeek</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek">DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek</a>></code> | days_of_week block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.hoursOfDay">hoursOfDay</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#hours_of_day DatabaseDbSystem#hours_of_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_custom_action_timeout_enabled DatabaseDbSystem#is_custom_action_timeout_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.isMonthlyPatchingEnabled">isMonthlyPatchingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_monthly_patching_enabled DatabaseDbSystem#is_monthly_patching_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#lead_time_in_weeks DatabaseDbSystem#lead_time_in_weeks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.months">months</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths">DatabaseDbSystemMaintenanceWindowDetailsMonths</a>></code> | months block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.patchingMode">patchingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#patching_mode DatabaseDbSystem#patching_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.preference">preference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#preference DatabaseDbSystem#preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.skipRu">skipRu</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#skip_ru DatabaseDbSystem#skip_ru}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#weeks_of_month DatabaseDbSystem#weeks_of_month}. |

---

##### `customActionTimeoutInMins`<sup>Optional</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.customActionTimeoutInMins"></a>

```java
public java.lang.Number getCustomActionTimeoutInMins();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#custom_action_timeout_in_mins DatabaseDbSystem#custom_action_timeout_in_mins}.

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.daysOfWeek"></a>

```java
public java.lang.Object getDaysOfWeek();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek">DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek</a>>

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#days_of_week DatabaseDbSystem#days_of_week}

---

##### `hoursOfDay`<sup>Optional</sup> <a name="hoursOfDay" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.hoursOfDay"></a>

```java
public java.util.List<java.lang.Number> getHoursOfDay();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#hours_of_day DatabaseDbSystem#hours_of_day}.

---

##### `isCustomActionTimeoutEnabled`<sup>Optional</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.isCustomActionTimeoutEnabled"></a>

```java
public java.lang.Object getIsCustomActionTimeoutEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_custom_action_timeout_enabled DatabaseDbSystem#is_custom_action_timeout_enabled}.

---

##### `isMonthlyPatchingEnabled`<sup>Optional</sup> <a name="isMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.isMonthlyPatchingEnabled"></a>

```java
public java.lang.Object getIsMonthlyPatchingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_monthly_patching_enabled DatabaseDbSystem#is_monthly_patching_enabled}.

---

##### `leadTimeInWeeks`<sup>Optional</sup> <a name="leadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.leadTimeInWeeks"></a>

```java
public java.lang.Number getLeadTimeInWeeks();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#lead_time_in_weeks DatabaseDbSystem#lead_time_in_weeks}.

---

##### `months`<sup>Optional</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.months"></a>

```java
public java.lang.Object getMonths();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths">DatabaseDbSystemMaintenanceWindowDetailsMonths</a>>

months block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#months DatabaseDbSystem#months}

---

##### `patchingMode`<sup>Optional</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.patchingMode"></a>

```java
public java.lang.String getPatchingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#patching_mode DatabaseDbSystem#patching_mode}.

---

##### `preference`<sup>Optional</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.preference"></a>

```java
public java.lang.String getPreference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#preference DatabaseDbSystem#preference}.

---

##### `skipRu`<sup>Optional</sup> <a name="skipRu" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.skipRu"></a>

```java
public java.lang.Object getSkipRu();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#skip_ru DatabaseDbSystem#skip_ru}.

---

##### `weeksOfMonth`<sup>Optional</sup> <a name="weeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.Number> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#weeks_of_month DatabaseDbSystem#weeks_of_month}.

---

### DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek <a name="DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek;

DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek.builder()
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#name DatabaseDbSystem#name}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#name DatabaseDbSystem#name}.

---

### DatabaseDbSystemMaintenanceWindowDetailsMonths <a name="DatabaseDbSystemMaintenanceWindowDetailsMonths" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemMaintenanceWindowDetailsMonths;

DatabaseDbSystemMaintenanceWindowDetailsMonths.builder()
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#name DatabaseDbSystem#name}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#name DatabaseDbSystem#name}.

---

### DatabaseDbSystemMaintenanceWindowMonths <a name="DatabaseDbSystemMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonths.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemMaintenanceWindowMonths;

DatabaseDbSystemMaintenanceWindowMonths.builder()
    .build();
```


### DatabaseDbSystemTimeouts <a name="DatabaseDbSystemTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemTimeouts;

DatabaseDbSystemTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#create DatabaseDbSystem#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#delete DatabaseDbSystem#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#update DatabaseDbSystem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#create DatabaseDbSystem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#delete DatabaseDbSystem#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#update DatabaseDbSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseDbSystemDataCollectionOptionsOutputReference <a name="DatabaseDbSystemDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemDataCollectionOptionsOutputReference;

new DatabaseDbSystemDataCollectionOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">resetIsDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">resetIsHealthMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">resetIsIncidentLogsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsDiagnosticsEventsEnabled` <a name="resetIsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```java
public void resetIsDiagnosticsEventsEnabled()
```

##### `resetIsHealthMonitoringEnabled` <a name="resetIsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```java
public void resetIsHealthMonitoringEnabled()
```

##### `resetIsIncidentLogsEnabled` <a name="resetIsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```java
public void resetIsIncidentLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">isDiagnosticsEventsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">isHealthMonitoringEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">isIncidentLogsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">isHealthMonitoringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isDiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="isDiagnosticsEventsEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```java
public java.lang.Object getIsDiagnosticsEventsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isHealthMonitoringEnabledInput`<sup>Optional</sup> <a name="isHealthMonitoringEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```java
public java.lang.Object getIsHealthMonitoringEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isIncidentLogsEnabledInput`<sup>Optional</sup> <a name="isIncidentLogsEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```java
public java.lang.Object getIsIncidentLogsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isDiagnosticsEventsEnabled`<sup>Required</sup> <a name="isDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```java
public java.lang.Object getIsDiagnosticsEventsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isHealthMonitoringEnabled`<sup>Required</sup> <a name="isHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```java
public java.lang.Object getIsHealthMonitoringEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isIncidentLogsEnabled`<sup>Required</sup> <a name="isIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```java
public java.lang.Object getIsIncidentLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.internalValue"></a>

```java
public DatabaseDbSystemDataCollectionOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a>

---


### DatabaseDbSystemDbHomeDatabaseConnectionStringsList <a name="DatabaseDbSystemDbHomeDatabaseConnectionStringsList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemDbHomeDatabaseConnectionStringsList;

new DatabaseDbSystemDbHomeDatabaseConnectionStringsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.get"></a>

```java
public DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference <a name="DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference;

new DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.allConnectionStrings">allConnectionStrings</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.cdbDefault">cdbDefault</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.cdbIpDefault">cdbIpDefault</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStrings">DatabaseDbSystemDbHomeDatabaseConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allConnectionStrings`<sup>Required</sup> <a name="allConnectionStrings" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.allConnectionStrings"></a>

```java
public StringMap getAllConnectionStrings();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `cdbDefault`<sup>Required</sup> <a name="cdbDefault" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.cdbDefault"></a>

```java
public java.lang.String getCdbDefault();
```

- *Type:* java.lang.String

---

##### `cdbIpDefault`<sup>Required</sup> <a name="cdbIpDefault" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.cdbIpDefault"></a>

```java
public java.lang.String getCdbIpDefault();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.internalValue"></a>

```java
public DatabaseDbSystemDbHomeDatabaseConnectionStrings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStrings">DatabaseDbSystemDbHomeDatabaseConnectionStrings</a>

---


### DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList <a name="DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList;

new DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.get"></a>

```java
public DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>>

---


### DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference <a name="DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference;

new DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetDbrsPolicyId">resetDbrsPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDbrsPolicyId` <a name="resetDbrsPolicyId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetDbrsPolicyId"></a>

```java
public void resetDbrsPolicyId()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyIdInput">dbrsPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId">dbrsPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbrsPolicyIdInput`<sup>Optional</sup> <a name="dbrsPolicyIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyIdInput"></a>

```java
public java.lang.String getDbrsPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `dbrsPolicyId`<sup>Required</sup> <a name="dbrsPolicyId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId"></a>

```java
public java.lang.String getDbrsPolicyId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>

---


### DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference <a name="DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference;

new DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.putBackupDestinationDetails">putBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoBackupEnabled">resetAutoBackupEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoBackupWindow">resetAutoBackupWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoFullBackupDay">resetAutoFullBackupDay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoFullBackupWindow">resetAutoFullBackupWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetBackupDeletionPolicy">resetBackupDeletionPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetBackupDestinationDetails">resetBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetRecoveryWindowInDays">resetRecoveryWindowInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetRunImmediateFullBackup">resetRunImmediateFullBackup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackupDestinationDetails` <a name="putBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.putBackupDestinationDetails"></a>

```java
public void putBackupDestinationDetails(IResolvable OR java.util.List<DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.putBackupDestinationDetails.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>>

---

##### `resetAutoBackupEnabled` <a name="resetAutoBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoBackupEnabled"></a>

```java
public void resetAutoBackupEnabled()
```

##### `resetAutoBackupWindow` <a name="resetAutoBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoBackupWindow"></a>

```java
public void resetAutoBackupWindow()
```

##### `resetAutoFullBackupDay` <a name="resetAutoFullBackupDay" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoFullBackupDay"></a>

```java
public void resetAutoFullBackupDay()
```

##### `resetAutoFullBackupWindow` <a name="resetAutoFullBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoFullBackupWindow"></a>

```java
public void resetAutoFullBackupWindow()
```

##### `resetBackupDeletionPolicy` <a name="resetBackupDeletionPolicy" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetBackupDeletionPolicy"></a>

```java
public void resetBackupDeletionPolicy()
```

##### `resetBackupDestinationDetails` <a name="resetBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetBackupDestinationDetails"></a>

```java
public void resetBackupDestinationDetails()
```

##### `resetRecoveryWindowInDays` <a name="resetRecoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetRecoveryWindowInDays"></a>

```java
public void resetRecoveryWindowInDays()
```

##### `resetRunImmediateFullBackup` <a name="resetRunImmediateFullBackup" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetRunImmediateFullBackup"></a>

```java
public void resetRunImmediateFullBackup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDestinationDetails">backupDestinationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList">DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupEnabledInput">autoBackupEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupWindowInput">autoBackupWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupDayInput">autoFullBackupDayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindowInput">autoFullBackupWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicyInput">backupDeletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDestinationDetailsInput">backupDestinationDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDaysInput">recoveryWindowInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackupInput">runImmediateFullBackupInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupEnabled">autoBackupEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupWindow">autoBackupWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupDay">autoFullBackupDay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindow">autoFullBackupWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicy">backupDeletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDays">recoveryWindowInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackup">runImmediateFullBackup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig">DatabaseDbSystemDbHomeDatabaseDbBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupDestinationDetails`<sup>Required</sup> <a name="backupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDestinationDetails"></a>

```java
public DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList getBackupDestinationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList">DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList</a>

---

##### `autoBackupEnabledInput`<sup>Optional</sup> <a name="autoBackupEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupEnabledInput"></a>

```java
public java.lang.Object getAutoBackupEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoBackupWindowInput`<sup>Optional</sup> <a name="autoBackupWindowInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupWindowInput"></a>

```java
public java.lang.String getAutoBackupWindowInput();
```

- *Type:* java.lang.String

---

##### `autoFullBackupDayInput`<sup>Optional</sup> <a name="autoFullBackupDayInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupDayInput"></a>

```java
public java.lang.String getAutoFullBackupDayInput();
```

- *Type:* java.lang.String

---

##### `autoFullBackupWindowInput`<sup>Optional</sup> <a name="autoFullBackupWindowInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindowInput"></a>

```java
public java.lang.String getAutoFullBackupWindowInput();
```

- *Type:* java.lang.String

---

##### `backupDeletionPolicyInput`<sup>Optional</sup> <a name="backupDeletionPolicyInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicyInput"></a>

```java
public java.lang.String getBackupDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `backupDestinationDetailsInput`<sup>Optional</sup> <a name="backupDestinationDetailsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDestinationDetailsInput"></a>

```java
public java.lang.Object getBackupDestinationDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>>

---

##### `recoveryWindowInDaysInput`<sup>Optional</sup> <a name="recoveryWindowInDaysInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDaysInput"></a>

```java
public java.lang.Number getRecoveryWindowInDaysInput();
```

- *Type:* java.lang.Number

---

##### `runImmediateFullBackupInput`<sup>Optional</sup> <a name="runImmediateFullBackupInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackupInput"></a>

```java
public java.lang.Object getRunImmediateFullBackupInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoBackupEnabled`<sup>Required</sup> <a name="autoBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupEnabled"></a>

```java
public java.lang.Object getAutoBackupEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoBackupWindow`<sup>Required</sup> <a name="autoBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupWindow"></a>

```java
public java.lang.String getAutoBackupWindow();
```

- *Type:* java.lang.String

---

##### `autoFullBackupDay`<sup>Required</sup> <a name="autoFullBackupDay" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupDay"></a>

```java
public java.lang.String getAutoFullBackupDay();
```

- *Type:* java.lang.String

---

##### `autoFullBackupWindow`<sup>Required</sup> <a name="autoFullBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindow"></a>

```java
public java.lang.String getAutoFullBackupWindow();
```

- *Type:* java.lang.String

---

##### `backupDeletionPolicy`<sup>Required</sup> <a name="backupDeletionPolicy" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicy"></a>

```java
public java.lang.String getBackupDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `recoveryWindowInDays`<sup>Required</sup> <a name="recoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDays"></a>

```java
public java.lang.Number getRecoveryWindowInDays();
```

- *Type:* java.lang.Number

---

##### `runImmediateFullBackup`<sup>Required</sup> <a name="runImmediateFullBackup" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackup"></a>

```java
public java.lang.Object getRunImmediateFullBackup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.internalValue"></a>

```java
public DatabaseDbSystemDbHomeDatabaseDbBackupConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig">DatabaseDbSystemDbHomeDatabaseDbBackupConfig</a>

---


### DatabaseDbSystemDbHomeDatabaseOutputReference <a name="DatabaseDbSystemDbHomeDatabaseOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemDbHomeDatabaseOutputReference;

new DatabaseDbSystemDbHomeDatabaseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.putDbBackupConfig">putDbBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetBackupId">resetBackupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetBackupTdePassword">resetBackupTdePassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetCharacterSet">resetCharacterSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDatabaseId">resetDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDatabaseSoftwareImageId">resetDatabaseSoftwareImageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbBackupConfig">resetDbBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbDomain">resetDbDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbName">resetDbName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbUniqueName">resetDbUniqueName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbWorkload">resetDbWorkload</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetKmsKeyVersionId">resetKmsKeyVersionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetNcharacterSet">resetNcharacterSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetPdbName">resetPdbName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetPluggableDatabases">resetPluggableDatabases</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetTdeWalletPassword">resetTdeWalletPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetTimeStampForPointInTimeRecovery">resetTimeStampForPointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetVaultId">resetVaultId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDbBackupConfig` <a name="putDbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.putDbBackupConfig"></a>

```java
public void putDbBackupConfig(DatabaseDbSystemDbHomeDatabaseDbBackupConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.putDbBackupConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig">DatabaseDbSystemDbHomeDatabaseDbBackupConfig</a>

---

##### `resetBackupId` <a name="resetBackupId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetBackupId"></a>

```java
public void resetBackupId()
```

##### `resetBackupTdePassword` <a name="resetBackupTdePassword" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetBackupTdePassword"></a>

```java
public void resetBackupTdePassword()
```

##### `resetCharacterSet` <a name="resetCharacterSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetCharacterSet"></a>

```java
public void resetCharacterSet()
```

##### `resetDatabaseId` <a name="resetDatabaseId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDatabaseId"></a>

```java
public void resetDatabaseId()
```

##### `resetDatabaseSoftwareImageId` <a name="resetDatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDatabaseSoftwareImageId"></a>

```java
public void resetDatabaseSoftwareImageId()
```

##### `resetDbBackupConfig` <a name="resetDbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbBackupConfig"></a>

```java
public void resetDbBackupConfig()
```

##### `resetDbDomain` <a name="resetDbDomain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbDomain"></a>

```java
public void resetDbDomain()
```

##### `resetDbName` <a name="resetDbName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbName"></a>

```java
public void resetDbName()
```

##### `resetDbUniqueName` <a name="resetDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbUniqueName"></a>

```java
public void resetDbUniqueName()
```

##### `resetDbWorkload` <a name="resetDbWorkload" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbWorkload"></a>

```java
public void resetDbWorkload()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetKmsKeyVersionId` <a name="resetKmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetKmsKeyVersionId"></a>

```java
public void resetKmsKeyVersionId()
```

##### `resetNcharacterSet` <a name="resetNcharacterSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetNcharacterSet"></a>

```java
public void resetNcharacterSet()
```

##### `resetPdbName` <a name="resetPdbName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetPdbName"></a>

```java
public void resetPdbName()
```

##### `resetPluggableDatabases` <a name="resetPluggableDatabases" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetPluggableDatabases"></a>

```java
public void resetPluggableDatabases()
```

##### `resetTdeWalletPassword` <a name="resetTdeWalletPassword" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetTdeWalletPassword"></a>

```java
public void resetTdeWalletPassword()
```

##### `resetTimeStampForPointInTimeRecovery` <a name="resetTimeStampForPointInTimeRecovery" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetTimeStampForPointInTimeRecovery"></a>

```java
public void resetTimeStampForPointInTimeRecovery()
```

##### `resetVaultId` <a name="resetVaultId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetVaultId"></a>

```java
public void resetVaultId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.connectionStrings">connectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList">DatabaseDbSystemDbHomeDatabaseConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbBackupConfig">dbBackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference">DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.adminPasswordInput">adminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupIdInput">backupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupTdePasswordInput">backupTdePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.characterSetInput">characterSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseIdInput">databaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseSoftwareImageIdInput">databaseSoftwareImageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbBackupConfigInput">dbBackupConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig">DatabaseDbSystemDbHomeDatabaseDbBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbDomainInput">dbDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbNameInput">dbNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbUniqueNameInput">dbUniqueNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbWorkloadInput">dbWorkloadInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyVersionIdInput">kmsKeyVersionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.ncharacterSetInput">ncharacterSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pdbNameInput">pdbNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pluggableDatabasesInput">pluggableDatabasesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.tdeWalletPasswordInput">tdeWalletPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.timeStampForPointInTimeRecoveryInput">timeStampForPointInTimeRecoveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.vaultIdInput">vaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupId">backupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupTdePassword">backupTdePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.characterSet">characterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbDomain">dbDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbName">dbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbUniqueName">dbUniqueName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbWorkload">dbWorkload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.ncharacterSet">ncharacterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pdbName">pdbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pluggableDatabases">pluggableDatabases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.tdeWalletPassword">tdeWalletPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.timeStampForPointInTimeRecovery">timeStampForPointInTimeRecovery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase">DatabaseDbSystemDbHomeDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionStrings`<sup>Required</sup> <a name="connectionStrings" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.connectionStrings"></a>

```java
public DatabaseDbSystemDbHomeDatabaseConnectionStringsList getConnectionStrings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList">DatabaseDbSystemDbHomeDatabaseConnectionStringsList</a>

---

##### `dbBackupConfig`<sup>Required</sup> <a name="dbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbBackupConfig"></a>

```java
public DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference getDbBackupConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference">DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.adminPasswordInput"></a>

```java
public java.lang.String getAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `backupIdInput`<sup>Optional</sup> <a name="backupIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupIdInput"></a>

```java
public java.lang.String getBackupIdInput();
```

- *Type:* java.lang.String

---

##### `backupTdePasswordInput`<sup>Optional</sup> <a name="backupTdePasswordInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupTdePasswordInput"></a>

```java
public java.lang.String getBackupTdePasswordInput();
```

- *Type:* java.lang.String

---

##### `characterSetInput`<sup>Optional</sup> <a name="characterSetInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.characterSetInput"></a>

```java
public java.lang.String getCharacterSetInput();
```

- *Type:* java.lang.String

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseIdInput"></a>

```java
public java.lang.String getDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `databaseSoftwareImageIdInput`<sup>Optional</sup> <a name="databaseSoftwareImageIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseSoftwareImageIdInput"></a>

```java
public java.lang.String getDatabaseSoftwareImageIdInput();
```

- *Type:* java.lang.String

---

##### `dbBackupConfigInput`<sup>Optional</sup> <a name="dbBackupConfigInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbBackupConfigInput"></a>

```java
public DatabaseDbSystemDbHomeDatabaseDbBackupConfig getDbBackupConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig">DatabaseDbSystemDbHomeDatabaseDbBackupConfig</a>

---

##### `dbDomainInput`<sup>Optional</sup> <a name="dbDomainInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbDomainInput"></a>

```java
public java.lang.String getDbDomainInput();
```

- *Type:* java.lang.String

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbNameInput"></a>

```java
public java.lang.String getDbNameInput();
```

- *Type:* java.lang.String

---

##### `dbUniqueNameInput`<sup>Optional</sup> <a name="dbUniqueNameInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbUniqueNameInput"></a>

```java
public java.lang.String getDbUniqueNameInput();
```

- *Type:* java.lang.String

---

##### `dbWorkloadInput`<sup>Optional</sup> <a name="dbWorkloadInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbWorkloadInput"></a>

```java
public java.lang.String getDbWorkloadInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyVersionIdInput`<sup>Optional</sup> <a name="kmsKeyVersionIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyVersionIdInput"></a>

```java
public java.lang.String getKmsKeyVersionIdInput();
```

- *Type:* java.lang.String

---

##### `ncharacterSetInput`<sup>Optional</sup> <a name="ncharacterSetInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.ncharacterSetInput"></a>

```java
public java.lang.String getNcharacterSetInput();
```

- *Type:* java.lang.String

---

##### `pdbNameInput`<sup>Optional</sup> <a name="pdbNameInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pdbNameInput"></a>

```java
public java.lang.String getPdbNameInput();
```

- *Type:* java.lang.String

---

##### `pluggableDatabasesInput`<sup>Optional</sup> <a name="pluggableDatabasesInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pluggableDatabasesInput"></a>

```java
public java.util.List<java.lang.String> getPluggableDatabasesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tdeWalletPasswordInput`<sup>Optional</sup> <a name="tdeWalletPasswordInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.tdeWalletPasswordInput"></a>

```java
public java.lang.String getTdeWalletPasswordInput();
```

- *Type:* java.lang.String

---

##### `timeStampForPointInTimeRecoveryInput`<sup>Optional</sup> <a name="timeStampForPointInTimeRecoveryInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.timeStampForPointInTimeRecoveryInput"></a>

```java
public java.lang.String getTimeStampForPointInTimeRecoveryInput();
```

- *Type:* java.lang.String

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.vaultIdInput"></a>

```java
public java.lang.String getVaultIdInput();
```

- *Type:* java.lang.String

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupId"></a>

```java
public java.lang.String getBackupId();
```

- *Type:* java.lang.String

---

##### `backupTdePassword`<sup>Required</sup> <a name="backupTdePassword" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupTdePassword"></a>

```java
public java.lang.String getBackupTdePassword();
```

- *Type:* java.lang.String

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.characterSet"></a>

```java
public java.lang.String getCharacterSet();
```

- *Type:* java.lang.String

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

---

##### `databaseSoftwareImageId`<sup>Required</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseSoftwareImageId"></a>

```java
public java.lang.String getDatabaseSoftwareImageId();
```

- *Type:* java.lang.String

---

##### `dbDomain`<sup>Required</sup> <a name="dbDomain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbDomain"></a>

```java
public java.lang.String getDbDomain();
```

- *Type:* java.lang.String

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

---

##### `dbUniqueName`<sup>Required</sup> <a name="dbUniqueName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbUniqueName"></a>

```java
public java.lang.String getDbUniqueName();
```

- *Type:* java.lang.String

---

##### `dbWorkload`<sup>Required</sup> <a name="dbWorkload" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbWorkload"></a>

```java
public java.lang.String getDbWorkload();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `kmsKeyVersionId`<sup>Required</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyVersionId"></a>

```java
public java.lang.String getKmsKeyVersionId();
```

- *Type:* java.lang.String

---

##### `ncharacterSet`<sup>Required</sup> <a name="ncharacterSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.ncharacterSet"></a>

```java
public java.lang.String getNcharacterSet();
```

- *Type:* java.lang.String

---

##### `pdbName`<sup>Required</sup> <a name="pdbName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pdbName"></a>

```java
public java.lang.String getPdbName();
```

- *Type:* java.lang.String

---

##### `pluggableDatabases`<sup>Required</sup> <a name="pluggableDatabases" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pluggableDatabases"></a>

```java
public java.util.List<java.lang.String> getPluggableDatabases();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tdeWalletPassword`<sup>Required</sup> <a name="tdeWalletPassword" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.tdeWalletPassword"></a>

```java
public java.lang.String getTdeWalletPassword();
```

- *Type:* java.lang.String

---

##### `timeStampForPointInTimeRecovery`<sup>Required</sup> <a name="timeStampForPointInTimeRecovery" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.timeStampForPointInTimeRecovery"></a>

```java
public java.lang.String getTimeStampForPointInTimeRecovery();
```

- *Type:* java.lang.String

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.internalValue"></a>

```java
public DatabaseDbSystemDbHomeDatabase getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase">DatabaseDbSystemDbHomeDatabase</a>

---


### DatabaseDbSystemDbHomeOutputReference <a name="DatabaseDbSystemDbHomeOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemDbHomeOutputReference;

new DatabaseDbSystemDbHomeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase">putDatabase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetCreateAsync">resetCreateAsync</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDatabaseSoftwareImageId">resetDatabaseSoftwareImageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDbVersion">resetDbVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatabase` <a name="putDatabase" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase"></a>

```java
public void putDatabase(DatabaseDbSystemDbHomeDatabase value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase">DatabaseDbSystemDbHomeDatabase</a>

---

##### `resetCreateAsync` <a name="resetCreateAsync" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetCreateAsync"></a>

```java
public void resetCreateAsync()
```

##### `resetDatabaseSoftwareImageId` <a name="resetDatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDatabaseSoftwareImageId"></a>

```java
public void resetDatabaseSoftwareImageId()
```

##### `resetDbVersion` <a name="resetDbVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDbVersion"></a>

```java
public void resetDbVersion()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.database">database</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference">DatabaseDbSystemDbHomeDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.dbHomeLocation">dbHomeLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.lastPatchHistoryEntryId">lastPatchHistoryEntryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.createAsyncInput">createAsyncInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.databaseInput">databaseInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase">DatabaseDbSystemDbHomeDatabase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.databaseSoftwareImageIdInput">databaseSoftwareImageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.dbVersionInput">dbVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.createAsync">createAsync</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.database"></a>

```java
public DatabaseDbSystemDbHomeDatabaseOutputReference getDatabase();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference">DatabaseDbSystemDbHomeDatabaseOutputReference</a>

---

##### `dbHomeLocation`<sup>Required</sup> <a name="dbHomeLocation" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.dbHomeLocation"></a>

```java
public java.lang.String getDbHomeLocation();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastPatchHistoryEntryId`<sup>Required</sup> <a name="lastPatchHistoryEntryId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.lastPatchHistoryEntryId"></a>

```java
public java.lang.String getLastPatchHistoryEntryId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `createAsyncInput`<sup>Optional</sup> <a name="createAsyncInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.createAsyncInput"></a>

```java
public java.lang.Object getCreateAsyncInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.databaseInput"></a>

```java
public DatabaseDbSystemDbHomeDatabase getDatabaseInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase">DatabaseDbSystemDbHomeDatabase</a>

---

##### `databaseSoftwareImageIdInput`<sup>Optional</sup> <a name="databaseSoftwareImageIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.databaseSoftwareImageIdInput"></a>

```java
public java.lang.String getDatabaseSoftwareImageIdInput();
```

- *Type:* java.lang.String

---

##### `dbVersionInput`<sup>Optional</sup> <a name="dbVersionInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.dbVersionInput"></a>

```java
public java.lang.String getDbVersionInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `createAsync`<sup>Required</sup> <a name="createAsync" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.createAsync"></a>

```java
public java.lang.Object getCreateAsync();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `databaseSoftwareImageId`<sup>Required</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.databaseSoftwareImageId"></a>

```java
public java.lang.String getDatabaseSoftwareImageId();
```

- *Type:* java.lang.String

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.dbVersion"></a>

```java
public java.lang.String getDbVersion();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.internalValue"></a>

```java
public DatabaseDbSystemDbHome getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a>

---


### DatabaseDbSystemDbSystemOptionsOutputReference <a name="DatabaseDbSystemDbSystemOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemDbSystemOptionsOutputReference;

new DatabaseDbSystemDbSystemOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.resetStorageManagement">resetStorageManagement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageManagement` <a name="resetStorageManagement" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.resetStorageManagement"></a>

```java
public void resetStorageManagement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.storageManagementInput">storageManagementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.storageManagement">storageManagement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `storageManagementInput`<sup>Optional</sup> <a name="storageManagementInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.storageManagementInput"></a>

```java
public java.lang.String getStorageManagementInput();
```

- *Type:* java.lang.String

---

##### `storageManagement`<sup>Required</sup> <a name="storageManagement" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.storageManagement"></a>

```java
public java.lang.String getStorageManagement();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.internalValue"></a>

```java
public DatabaseDbSystemDbSystemOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a>

---


### DatabaseDbSystemIormConfigCacheDbPlansList <a name="DatabaseDbSystemIormConfigCacheDbPlansList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemIormConfigCacheDbPlansList;

new DatabaseDbSystemIormConfigCacheDbPlansList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.get"></a>

```java
public DatabaseDbSystemIormConfigCacheDbPlansOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseDbSystemIormConfigCacheDbPlansOutputReference <a name="DatabaseDbSystemIormConfigCacheDbPlansOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemIormConfigCacheDbPlansOutputReference;

new DatabaseDbSystemIormConfigCacheDbPlansOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.dbName">dbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.flashCacheLimit">flashCacheLimit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.share">share</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlans">DatabaseDbSystemIormConfigCacheDbPlans</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

---

##### `flashCacheLimit`<sup>Required</sup> <a name="flashCacheLimit" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.flashCacheLimit"></a>

```java
public java.lang.String getFlashCacheLimit();
```

- *Type:* java.lang.String

---

##### `share`<sup>Required</sup> <a name="share" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.share"></a>

```java
public java.lang.Number getShare();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.internalValue"></a>

```java
public DatabaseDbSystemIormConfigCacheDbPlans getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlans">DatabaseDbSystemIormConfigCacheDbPlans</a>

---


### DatabaseDbSystemIormConfigCacheList <a name="DatabaseDbSystemIormConfigCacheList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemIormConfigCacheList;

new DatabaseDbSystemIormConfigCacheList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.get"></a>

```java
public DatabaseDbSystemIormConfigCacheOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseDbSystemIormConfigCacheOutputReference <a name="DatabaseDbSystemIormConfigCacheOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemIormConfigCacheOutputReference;

new DatabaseDbSystemIormConfigCacheOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.dbPlans">dbPlans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList">DatabaseDbSystemIormConfigCacheDbPlansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.objective">objective</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCache">DatabaseDbSystemIormConfigCache</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbPlans`<sup>Required</sup> <a name="dbPlans" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.dbPlans"></a>

```java
public DatabaseDbSystemIormConfigCacheDbPlansList getDbPlans();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList">DatabaseDbSystemIormConfigCacheDbPlansList</a>

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `objective`<sup>Required</sup> <a name="objective" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.objective"></a>

```java
public java.lang.String getObjective();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.internalValue"></a>

```java
public DatabaseDbSystemIormConfigCache getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCache">DatabaseDbSystemIormConfigCache</a>

---


### DatabaseDbSystemMaintenanceWindowDaysOfWeekList <a name="DatabaseDbSystemMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemMaintenanceWindowDaysOfWeekList;

new DatabaseDbSystemMaintenanceWindowDaysOfWeekList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.get"></a>

```java
public DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference <a name="DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference;

new DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeek">DatabaseDbSystemMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```java
public DatabaseDbSystemMaintenanceWindowDaysOfWeek getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeek">DatabaseDbSystemMaintenanceWindowDaysOfWeek</a>

---


### DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList <a name="DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList;

new DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.get"></a>

```java
public DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek">DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek">DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek</a>>

---


### DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference <a name="DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference;

new DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek">DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek">DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek</a>

---


### DatabaseDbSystemMaintenanceWindowDetailsMonthsList <a name="DatabaseDbSystemMaintenanceWindowDetailsMonthsList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemMaintenanceWindowDetailsMonthsList;

new DatabaseDbSystemMaintenanceWindowDetailsMonthsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.get"></a>

```java
public DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths">DatabaseDbSystemMaintenanceWindowDetailsMonths</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths">DatabaseDbSystemMaintenanceWindowDetailsMonths</a>>

---


### DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference <a name="DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference;

new DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths">DatabaseDbSystemMaintenanceWindowDetailsMonths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths">DatabaseDbSystemMaintenanceWindowDetailsMonths</a>

---


### DatabaseDbSystemMaintenanceWindowDetailsOutputReference <a name="DatabaseDbSystemMaintenanceWindowDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemMaintenanceWindowDetailsOutputReference;

new DatabaseDbSystemMaintenanceWindowDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.putDaysOfWeek">putDaysOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.putMonths">putMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetCustomActionTimeoutInMins">resetCustomActionTimeoutInMins</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetHoursOfDay">resetHoursOfDay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetIsCustomActionTimeoutEnabled">resetIsCustomActionTimeoutEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetIsMonthlyPatchingEnabled">resetIsMonthlyPatchingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetLeadTimeInWeeks">resetLeadTimeInWeeks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetMonths">resetMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetPatchingMode">resetPatchingMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetPreference">resetPreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetSkipRu">resetSkipRu</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetWeeksOfMonth">resetWeeksOfMonth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDaysOfWeek` <a name="putDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.putDaysOfWeek"></a>

```java
public void putDaysOfWeek(IResolvable OR java.util.List<DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.putDaysOfWeek.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek">DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek</a>>

---

##### `putMonths` <a name="putMonths" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.putMonths"></a>

```java
public void putMonths(IResolvable OR java.util.List<DatabaseDbSystemMaintenanceWindowDetailsMonths> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.putMonths.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths">DatabaseDbSystemMaintenanceWindowDetailsMonths</a>>

---

##### `resetCustomActionTimeoutInMins` <a name="resetCustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetCustomActionTimeoutInMins"></a>

```java
public void resetCustomActionTimeoutInMins()
```

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetDaysOfWeek"></a>

```java
public void resetDaysOfWeek()
```

##### `resetHoursOfDay` <a name="resetHoursOfDay" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetHoursOfDay"></a>

```java
public void resetHoursOfDay()
```

##### `resetIsCustomActionTimeoutEnabled` <a name="resetIsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetIsCustomActionTimeoutEnabled"></a>

```java
public void resetIsCustomActionTimeoutEnabled()
```

##### `resetIsMonthlyPatchingEnabled` <a name="resetIsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetIsMonthlyPatchingEnabled"></a>

```java
public void resetIsMonthlyPatchingEnabled()
```

##### `resetLeadTimeInWeeks` <a name="resetLeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetLeadTimeInWeeks"></a>

```java
public void resetLeadTimeInWeeks()
```

##### `resetMonths` <a name="resetMonths" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetMonths"></a>

```java
public void resetMonths()
```

##### `resetPatchingMode` <a name="resetPatchingMode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetPatchingMode"></a>

```java
public void resetPatchingMode()
```

##### `resetPreference` <a name="resetPreference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetPreference"></a>

```java
public void resetPreference()
```

##### `resetSkipRu` <a name="resetSkipRu" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetSkipRu"></a>

```java
public void resetSkipRu()
```

##### `resetWeeksOfMonth` <a name="resetWeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetWeeksOfMonth"></a>

```java
public void resetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList">DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList">DatabaseDbSystemMaintenanceWindowDetailsMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMinsInput">customActionTimeoutInMinsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek">DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.hoursOfDayInput">hoursOfDayInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabledInput">isCustomActionTimeoutEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabledInput">isMonthlyPatchingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeksInput">leadTimeInWeeksInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.monthsInput">monthsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths">DatabaseDbSystemMaintenanceWindowDetailsMonths</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.patchingModeInput">patchingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.preferenceInput">preferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.skipRuInput">skipRuInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.weeksOfMonthInput">weeksOfMonthInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled">isMonthlyPatchingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.patchingMode">patchingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.preference">preference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.skipRu">skipRu</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.daysOfWeek"></a>

```java
public DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList getDaysOfWeek();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList">DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList</a>

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.months"></a>

```java
public DatabaseDbSystemMaintenanceWindowDetailsMonthsList getMonths();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList">DatabaseDbSystemMaintenanceWindowDetailsMonthsList</a>

---

##### `customActionTimeoutInMinsInput`<sup>Optional</sup> <a name="customActionTimeoutInMinsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMinsInput"></a>

```java
public java.lang.Number getCustomActionTimeoutInMinsInput();
```

- *Type:* java.lang.Number

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.daysOfWeekInput"></a>

```java
public java.lang.Object getDaysOfWeekInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek">DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek</a>>

---

##### `hoursOfDayInput`<sup>Optional</sup> <a name="hoursOfDayInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.hoursOfDayInput"></a>

```java
public java.util.List<java.lang.Number> getHoursOfDayInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `isCustomActionTimeoutEnabledInput`<sup>Optional</sup> <a name="isCustomActionTimeoutEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabledInput"></a>

```java
public java.lang.Object getIsCustomActionTimeoutEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isMonthlyPatchingEnabledInput`<sup>Optional</sup> <a name="isMonthlyPatchingEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabledInput"></a>

```java
public java.lang.Object getIsMonthlyPatchingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `leadTimeInWeeksInput`<sup>Optional</sup> <a name="leadTimeInWeeksInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeksInput"></a>

```java
public java.lang.Number getLeadTimeInWeeksInput();
```

- *Type:* java.lang.Number

---

##### `monthsInput`<sup>Optional</sup> <a name="monthsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.monthsInput"></a>

```java
public java.lang.Object getMonthsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths">DatabaseDbSystemMaintenanceWindowDetailsMonths</a>>

---

##### `patchingModeInput`<sup>Optional</sup> <a name="patchingModeInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.patchingModeInput"></a>

```java
public java.lang.String getPatchingModeInput();
```

- *Type:* java.lang.String

---

##### `preferenceInput`<sup>Optional</sup> <a name="preferenceInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.preferenceInput"></a>

```java
public java.lang.String getPreferenceInput();
```

- *Type:* java.lang.String

---

##### `skipRuInput`<sup>Optional</sup> <a name="skipRuInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.skipRuInput"></a>

```java
public java.lang.Object getSkipRuInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable>

---

##### `weeksOfMonthInput`<sup>Optional</sup> <a name="weeksOfMonthInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.weeksOfMonthInput"></a>

```java
public java.util.List<java.lang.Number> getWeeksOfMonthInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `customActionTimeoutInMins`<sup>Required</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins"></a>

```java
public java.lang.Number getCustomActionTimeoutInMins();
```

- *Type:* java.lang.Number

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.hoursOfDay"></a>

```java
public java.util.List<java.lang.Number> getHoursOfDay();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `isCustomActionTimeoutEnabled`<sup>Required</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled"></a>

```java
public java.lang.Object getIsCustomActionTimeoutEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isMonthlyPatchingEnabled`<sup>Required</sup> <a name="isMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled"></a>

```java
public java.lang.Object getIsMonthlyPatchingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `leadTimeInWeeks`<sup>Required</sup> <a name="leadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks"></a>

```java
public java.lang.Number getLeadTimeInWeeks();
```

- *Type:* java.lang.Number

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.patchingMode"></a>

```java
public java.lang.String getPatchingMode();
```

- *Type:* java.lang.String

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.preference"></a>

```java
public java.lang.String getPreference();
```

- *Type:* java.lang.String

---

##### `skipRu`<sup>Required</sup> <a name="skipRu" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.skipRu"></a>

```java
public java.lang.Object getSkipRu();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable>

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.Number> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.internalValue"></a>

```java
public DatabaseDbSystemMaintenanceWindowDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a>

---


### DatabaseDbSystemMaintenanceWindowList <a name="DatabaseDbSystemMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemMaintenanceWindowList;

new DatabaseDbSystemMaintenanceWindowList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.get"></a>

```java
public DatabaseDbSystemMaintenanceWindowOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseDbSystemMaintenanceWindowMonthsList <a name="DatabaseDbSystemMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemMaintenanceWindowMonthsList;

new DatabaseDbSystemMaintenanceWindowMonthsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.get"></a>

```java
public DatabaseDbSystemMaintenanceWindowMonthsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseDbSystemMaintenanceWindowMonthsOutputReference <a name="DatabaseDbSystemMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemMaintenanceWindowMonthsOutputReference;

new DatabaseDbSystemMaintenanceWindowMonthsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonths">DatabaseDbSystemMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```java
public DatabaseDbSystemMaintenanceWindowMonths getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonths">DatabaseDbSystemMaintenanceWindowMonths</a>

---


### DatabaseDbSystemMaintenanceWindowOutputReference <a name="DatabaseDbSystemMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemMaintenanceWindowOutputReference;

new DatabaseDbSystemMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList">DatabaseDbSystemMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled">isMonthlyPatchingEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList">DatabaseDbSystemMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.patchingMode">patchingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.skipRu">skipRu</a></code> | <code>com.hashicorp.cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindow">DatabaseDbSystemMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customActionTimeoutInMins`<sup>Required</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```java
public java.lang.Number getCustomActionTimeoutInMins();
```

- *Type:* java.lang.Number

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```java
public DatabaseDbSystemMaintenanceWindowDaysOfWeekList getDaysOfWeek();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList">DatabaseDbSystemMaintenanceWindowDaysOfWeekList</a>

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```java
public java.util.List<java.lang.Number> getHoursOfDay();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `isCustomActionTimeoutEnabled`<sup>Required</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```java
public IResolvable getIsCustomActionTimeoutEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isMonthlyPatchingEnabled`<sup>Required</sup> <a name="isMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled"></a>

```java
public IResolvable getIsMonthlyPatchingEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `leadTimeInWeeks`<sup>Required</sup> <a name="leadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```java
public java.lang.Number getLeadTimeInWeeks();
```

- *Type:* java.lang.Number

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.months"></a>

```java
public DatabaseDbSystemMaintenanceWindowMonthsList getMonths();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList">DatabaseDbSystemMaintenanceWindowMonthsList</a>

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.patchingMode"></a>

```java
public java.lang.String getPatchingMode();
```

- *Type:* java.lang.String

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.preference"></a>

```java
public java.lang.String getPreference();
```

- *Type:* java.lang.String

---

##### `skipRu`<sup>Required</sup> <a name="skipRu" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.skipRu"></a>

```java
public BooleanList getSkipRu();
```

- *Type:* com.hashicorp.cdktf.BooleanList

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.Number> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public DatabaseDbSystemMaintenanceWindow getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindow">DatabaseDbSystemMaintenanceWindow</a>

---


### DatabaseDbSystemTimeoutsOutputReference <a name="DatabaseDbSystemTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_system.DatabaseDbSystemTimeoutsOutputReference;

new DatabaseDbSystemTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts">DatabaseDbSystemTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts">DatabaseDbSystemTimeouts</a>

---



