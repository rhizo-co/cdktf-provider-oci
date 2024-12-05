# `databaseDbSystem` Submodule <a name="`databaseDbSystem` Submodule" id="rhizo-co-terraform-provider-oci.databaseDbSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseDbSystem <a name="DatabaseDbSystem" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system oci_database_db_system}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystem(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_domain: str,
  compartment_id: str,
  db_home: DatabaseDbSystemDbHome,
  hostname: str,
  shape: str,
  ssh_public_keys: typing.List[str],
  subnet_id: str,
  backup_network_nsg_ids: typing.List[str] = None,
  backup_subnet_id: str = None,
  cluster_name: str = None,
  cpu_core_count: typing.Union[int, float] = None,
  database_edition: str = None,
  data_collection_options: DatabaseDbSystemDataCollectionOptions = None,
  data_storage_percentage: typing.Union[int, float] = None,
  data_storage_size_in_gb: typing.Union[int, float] = None,
  db_system_options: DatabaseDbSystemDbSystemOptions = None,
  defined_tags: typing.Mapping[str] = None,
  disk_redundancy: str = None,
  display_name: str = None,
  domain: str = None,
  fault_domains: typing.List[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  kms_key_id: str = None,
  kms_key_version_id: str = None,
  license_model: str = None,
  maintenance_window_details: DatabaseDbSystemMaintenanceWindowDetails = None,
  node_count: typing.Union[int, float] = None,
  nsg_ids: typing.List[str] = None,
  private_ip: str = None,
  reco_storage_size_in_gb: typing.Union[int, float] = None,
  security_attributes: typing.Mapping[str] = None,
  source: str = None,
  source_db_system_id: str = None,
  sparse_diskgroup: typing.Union[bool, IResolvable] = None,
  storage_volume_performance_mode: str = None,
  timeouts: DatabaseDbSystemTimeouts = None,
  time_zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#availability_domain DatabaseDbSystem#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#compartment_id DatabaseDbSystem#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.dbHome">db_home</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a></code> | db_home block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#hostname DatabaseDbSystem#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#shape DatabaseDbSystem#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#ssh_public_keys DatabaseDbSystem#ssh_public_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#subnet_id DatabaseDbSystem#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.backupNetworkNsgIds">backup_network_nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_network_nsg_ids DatabaseDbSystem#backup_network_nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.backupSubnetId">backup_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_subnet_id DatabaseDbSystem#backup_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#cluster_name DatabaseDbSystem#cluster_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#cpu_core_count DatabaseDbSystem#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.databaseEdition">database_edition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_edition DatabaseDbSystem#database_edition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.dataStoragePercentage">data_storage_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_storage_percentage DatabaseDbSystem#data_storage_percentage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.dataStorageSizeInGb">data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_storage_size_in_gb DatabaseDbSystem#data_storage_size_in_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.dbSystemOptions">db_system_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a></code> | db_system_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.diskRedundancy">disk_redundancy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#disk_redundancy DatabaseDbSystem#disk_redundancy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#display_name DatabaseDbSystem#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#domain DatabaseDbSystem#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.faultDomains">fault_domains</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#fault_domains DatabaseDbSystem#fault_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#id DatabaseDbSystem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_id DatabaseDbSystem#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_version_id DatabaseDbSystem#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#license_model DatabaseDbSystem#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.maintenanceWindowDetails">maintenance_window_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a></code> | maintenance_window_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#node_count DatabaseDbSystem#node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#nsg_ids DatabaseDbSystem#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.privateIp">private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#private_ip DatabaseDbSystem#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.recoStorageSizeInGb">reco_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#reco_storage_size_in_gb DatabaseDbSystem#reco_storage_size_in_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.securityAttributes">security_attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#security_attributes DatabaseDbSystem#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#source DatabaseDbSystem#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.sourceDbSystemId">source_db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#source_db_system_id DatabaseDbSystem#source_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.sparseDiskgroup">sparse_diskgroup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#sparse_diskgroup DatabaseDbSystem#sparse_diskgroup}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.storageVolumePerformanceMode">storage_volume_performance_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#storage_volume_performance_mode DatabaseDbSystem#storage_volume_performance_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts">DatabaseDbSystemTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#time_zone DatabaseDbSystem#time_zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#availability_domain DatabaseDbSystem#availability_domain}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#compartment_id DatabaseDbSystem#compartment_id}.

---

##### `db_home`<sup>Required</sup> <a name="db_home" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.dbHome"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a>

db_home block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_home DatabaseDbSystem#db_home}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.hostname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#hostname DatabaseDbSystem#hostname}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.shape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#shape DatabaseDbSystem#shape}.

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.sshPublicKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#ssh_public_keys DatabaseDbSystem#ssh_public_keys}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#subnet_id DatabaseDbSystem#subnet_id}.

---

##### `backup_network_nsg_ids`<sup>Optional</sup> <a name="backup_network_nsg_ids" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.backupNetworkNsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_network_nsg_ids DatabaseDbSystem#backup_network_nsg_ids}.

---

##### `backup_subnet_id`<sup>Optional</sup> <a name="backup_subnet_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.backupSubnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_subnet_id DatabaseDbSystem#backup_subnet_id}.

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#cluster_name DatabaseDbSystem#cluster_name}.

---

##### `cpu_core_count`<sup>Optional</sup> <a name="cpu_core_count" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.cpuCoreCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#cpu_core_count DatabaseDbSystem#cpu_core_count}.

---

##### `database_edition`<sup>Optional</sup> <a name="database_edition" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.databaseEdition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_edition DatabaseDbSystem#database_edition}.

---

##### `data_collection_options`<sup>Optional</sup> <a name="data_collection_options" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.dataCollectionOptions"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_collection_options DatabaseDbSystem#data_collection_options}

---

##### `data_storage_percentage`<sup>Optional</sup> <a name="data_storage_percentage" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.dataStoragePercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_storage_percentage DatabaseDbSystem#data_storage_percentage}.

---

##### `data_storage_size_in_gb`<sup>Optional</sup> <a name="data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.dataStorageSizeInGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_storage_size_in_gb DatabaseDbSystem#data_storage_size_in_gb}.

---

##### `db_system_options`<sup>Optional</sup> <a name="db_system_options" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.dbSystemOptions"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a>

db_system_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_system_options DatabaseDbSystem#db_system_options}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}.

---

##### `disk_redundancy`<sup>Optional</sup> <a name="disk_redundancy" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.diskRedundancy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#disk_redundancy DatabaseDbSystem#disk_redundancy}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#display_name DatabaseDbSystem#display_name}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.domain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#domain DatabaseDbSystem#domain}.

---

##### `fault_domains`<sup>Optional</sup> <a name="fault_domains" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.faultDomains"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#fault_domains DatabaseDbSystem#fault_domains}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#id DatabaseDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_id DatabaseDbSystem#kms_key_id}.

---

##### `kms_key_version_id`<sup>Optional</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.kmsKeyVersionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_version_id DatabaseDbSystem#kms_key_version_id}.

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.licenseModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#license_model DatabaseDbSystem#license_model}.

---

##### `maintenance_window_details`<sup>Optional</sup> <a name="maintenance_window_details" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.maintenanceWindowDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a>

maintenance_window_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#maintenance_window_details DatabaseDbSystem#maintenance_window_details}

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#node_count DatabaseDbSystem#node_count}.

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.nsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#nsg_ids DatabaseDbSystem#nsg_ids}.

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.privateIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#private_ip DatabaseDbSystem#private_ip}.

---

##### `reco_storage_size_in_gb`<sup>Optional</sup> <a name="reco_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.recoStorageSizeInGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#reco_storage_size_in_gb DatabaseDbSystem#reco_storage_size_in_gb}.

---

##### `security_attributes`<sup>Optional</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.securityAttributes"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#security_attributes DatabaseDbSystem#security_attributes}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#source DatabaseDbSystem#source}.

---

##### `source_db_system_id`<sup>Optional</sup> <a name="source_db_system_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.sourceDbSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#source_db_system_id DatabaseDbSystem#source_db_system_id}.

---

##### `sparse_diskgroup`<sup>Optional</sup> <a name="sparse_diskgroup" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.sparseDiskgroup"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#sparse_diskgroup DatabaseDbSystem#sparse_diskgroup}.

---

##### `storage_volume_performance_mode`<sup>Optional</sup> <a name="storage_volume_performance_mode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.storageVolumePerformanceMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#storage_volume_performance_mode DatabaseDbSystem#storage_volume_performance_mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts">DatabaseDbSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#timeouts DatabaseDbSystem#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.timeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#time_zone DatabaseDbSystem#time_zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDataCollectionOptions">put_data_collection_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbHome">put_db_home</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbSystemOptions">put_db_system_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putMaintenanceWindowDetails">put_maintenance_window_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetBackupNetworkNsgIds">reset_backup_network_nsg_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetBackupSubnetId">reset_backup_subnet_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetClusterName">reset_cluster_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetCpuCoreCount">reset_cpu_core_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDatabaseEdition">reset_database_edition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDataCollectionOptions">reset_data_collection_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDataStoragePercentage">reset_data_storage_percentage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDataStorageSizeInGb">reset_data_storage_size_in_gb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDbSystemOptions">reset_db_system_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDiskRedundancy">reset_disk_redundancy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetFaultDomains">reset_fault_domains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetKmsKeyVersionId">reset_kms_key_version_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetLicenseModel">reset_license_model</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetMaintenanceWindowDetails">reset_maintenance_window_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetNodeCount">reset_node_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetNsgIds">reset_nsg_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetPrivateIp">reset_private_ip</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetRecoStorageSizeInGb">reset_reco_storage_size_in_gb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSecurityAttributes">reset_security_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSourceDbSystemId">reset_source_db_system_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSparseDiskgroup">reset_sparse_diskgroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetStorageVolumePerformanceMode">reset_storage_volume_performance_mode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_collection_options` <a name="put_data_collection_options" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDataCollectionOptions"></a>

```python
def put_data_collection_options(
  is_diagnostics_events_enabled: typing.Union[bool, IResolvable] = None,
  is_health_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  is_incident_logs_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `is_diagnostics_events_enabled`<sup>Optional</sup> <a name="is_diagnostics_events_enabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDataCollectionOptions.parameter.isDiagnosticsEventsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_diagnostics_events_enabled DatabaseDbSystem#is_diagnostics_events_enabled}.

---

###### `is_health_monitoring_enabled`<sup>Optional</sup> <a name="is_health_monitoring_enabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDataCollectionOptions.parameter.isHealthMonitoringEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_health_monitoring_enabled DatabaseDbSystem#is_health_monitoring_enabled}.

---

###### `is_incident_logs_enabled`<sup>Optional</sup> <a name="is_incident_logs_enabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDataCollectionOptions.parameter.isIncidentLogsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_incident_logs_enabled DatabaseDbSystem#is_incident_logs_enabled}.

---

##### `put_db_home` <a name="put_db_home" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbHome"></a>

```python
def put_db_home(
  database: DatabaseDbSystemDbHomeDatabase,
  create_async: typing.Union[bool, IResolvable] = None,
  database_software_image_id: str = None,
  db_version: str = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None
) -> None
```

###### `database`<sup>Required</sup> <a name="database" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbHome.parameter.database"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase">DatabaseDbSystemDbHomeDatabase</a>

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database DatabaseDbSystem#database}

---

###### `create_async`<sup>Optional</sup> <a name="create_async" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbHome.parameter.createAsync"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#create_async DatabaseDbSystem#create_async}.

---

###### `database_software_image_id`<sup>Optional</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbHome.parameter.databaseSoftwareImageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_software_image_id DatabaseDbSystem#database_software_image_id}.

---

###### `db_version`<sup>Optional</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbHome.parameter.dbVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_version DatabaseDbSystem#db_version}.

---

###### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbHome.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}.

---

###### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbHome.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#display_name DatabaseDbSystem#display_name}.

---

###### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbHome.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}.

---

##### `put_db_system_options` <a name="put_db_system_options" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbSystemOptions"></a>

```python
def put_db_system_options(
  storage_management: str = None
) -> None
```

###### `storage_management`<sup>Optional</sup> <a name="storage_management" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbSystemOptions.parameter.storageManagement"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#storage_management DatabaseDbSystem#storage_management}.

---

##### `put_maintenance_window_details` <a name="put_maintenance_window_details" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putMaintenanceWindowDetails"></a>

```python
def put_maintenance_window_details(
  custom_action_timeout_in_mins: typing.Union[int, float] = None,
  days_of_week: typing.Union[IResolvable, typing.List[DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek]] = None,
  hours_of_day: typing.List[typing.Union[int, float]] = None,
  is_custom_action_timeout_enabled: typing.Union[bool, IResolvable] = None,
  is_monthly_patching_enabled: typing.Union[bool, IResolvable] = None,
  lead_time_in_weeks: typing.Union[int, float] = None,
  months: typing.Union[IResolvable, typing.List[DatabaseDbSystemMaintenanceWindowDetailsMonths]] = None,
  patching_mode: str = None,
  preference: str = None,
  skip_ru: typing.Union[IResolvable, typing.List[typing.Union[bool, IResolvable]]] = None,
  weeks_of_month: typing.List[typing.Union[int, float]] = None
) -> None
```

###### `custom_action_timeout_in_mins`<sup>Optional</sup> <a name="custom_action_timeout_in_mins" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putMaintenanceWindowDetails.parameter.customActionTimeoutInMins"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#custom_action_timeout_in_mins DatabaseDbSystem#custom_action_timeout_in_mins}.

---

###### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putMaintenanceWindowDetails.parameter.daysOfWeek"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek">DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek</a>]]

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#days_of_week DatabaseDbSystem#days_of_week}

---

###### `hours_of_day`<sup>Optional</sup> <a name="hours_of_day" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putMaintenanceWindowDetails.parameter.hoursOfDay"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#hours_of_day DatabaseDbSystem#hours_of_day}.

---

###### `is_custom_action_timeout_enabled`<sup>Optional</sup> <a name="is_custom_action_timeout_enabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putMaintenanceWindowDetails.parameter.isCustomActionTimeoutEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_custom_action_timeout_enabled DatabaseDbSystem#is_custom_action_timeout_enabled}.

---

###### `is_monthly_patching_enabled`<sup>Optional</sup> <a name="is_monthly_patching_enabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putMaintenanceWindowDetails.parameter.isMonthlyPatchingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_monthly_patching_enabled DatabaseDbSystem#is_monthly_patching_enabled}.

---

###### `lead_time_in_weeks`<sup>Optional</sup> <a name="lead_time_in_weeks" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putMaintenanceWindowDetails.parameter.leadTimeInWeeks"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#lead_time_in_weeks DatabaseDbSystem#lead_time_in_weeks}.

---

###### `months`<sup>Optional</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putMaintenanceWindowDetails.parameter.months"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths">DatabaseDbSystemMaintenanceWindowDetailsMonths</a>]]

months block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#months DatabaseDbSystem#months}

---

###### `patching_mode`<sup>Optional</sup> <a name="patching_mode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putMaintenanceWindowDetails.parameter.patchingMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#patching_mode DatabaseDbSystem#patching_mode}.

---

###### `preference`<sup>Optional</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putMaintenanceWindowDetails.parameter.preference"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#preference DatabaseDbSystem#preference}.

---

###### `skip_ru`<sup>Optional</sup> <a name="skip_ru" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putMaintenanceWindowDetails.parameter.skipRu"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Union[bool, cdktf.IResolvable]]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#skip_ru DatabaseDbSystem#skip_ru}.

---

###### `weeks_of_month`<sup>Optional</sup> <a name="weeks_of_month" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putMaintenanceWindowDetails.parameter.weeksOfMonth"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#weeks_of_month DatabaseDbSystem#weeks_of_month}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#create DatabaseDbSystem#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#delete DatabaseDbSystem#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#update DatabaseDbSystem#update}.

---

##### `reset_backup_network_nsg_ids` <a name="reset_backup_network_nsg_ids" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetBackupNetworkNsgIds"></a>

```python
def reset_backup_network_nsg_ids() -> None
```

##### `reset_backup_subnet_id` <a name="reset_backup_subnet_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetBackupSubnetId"></a>

```python
def reset_backup_subnet_id() -> None
```

##### `reset_cluster_name` <a name="reset_cluster_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetClusterName"></a>

```python
def reset_cluster_name() -> None
```

##### `reset_cpu_core_count` <a name="reset_cpu_core_count" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetCpuCoreCount"></a>

```python
def reset_cpu_core_count() -> None
```

##### `reset_database_edition` <a name="reset_database_edition" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDatabaseEdition"></a>

```python
def reset_database_edition() -> None
```

##### `reset_data_collection_options` <a name="reset_data_collection_options" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDataCollectionOptions"></a>

```python
def reset_data_collection_options() -> None
```

##### `reset_data_storage_percentage` <a name="reset_data_storage_percentage" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDataStoragePercentage"></a>

```python
def reset_data_storage_percentage() -> None
```

##### `reset_data_storage_size_in_gb` <a name="reset_data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDataStorageSizeInGb"></a>

```python
def reset_data_storage_size_in_gb() -> None
```

##### `reset_db_system_options` <a name="reset_db_system_options" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDbSystemOptions"></a>

```python
def reset_db_system_options() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_disk_redundancy` <a name="reset_disk_redundancy" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDiskRedundancy"></a>

```python
def reset_disk_redundancy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_domain` <a name="reset_domain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_fault_domains` <a name="reset_fault_domains" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetFaultDomains"></a>

```python
def reset_fault_domains() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_kms_key_version_id` <a name="reset_kms_key_version_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetKmsKeyVersionId"></a>

```python
def reset_kms_key_version_id() -> None
```

##### `reset_license_model` <a name="reset_license_model" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetLicenseModel"></a>

```python
def reset_license_model() -> None
```

##### `reset_maintenance_window_details` <a name="reset_maintenance_window_details" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetMaintenanceWindowDetails"></a>

```python
def reset_maintenance_window_details() -> None
```

##### `reset_node_count` <a name="reset_node_count" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetNodeCount"></a>

```python
def reset_node_count() -> None
```

##### `reset_nsg_ids` <a name="reset_nsg_ids" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetNsgIds"></a>

```python
def reset_nsg_ids() -> None
```

##### `reset_private_ip` <a name="reset_private_ip" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetPrivateIp"></a>

```python
def reset_private_ip() -> None
```

##### `reset_reco_storage_size_in_gb` <a name="reset_reco_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetRecoStorageSizeInGb"></a>

```python
def reset_reco_storage_size_in_gb() -> None
```

##### `reset_security_attributes` <a name="reset_security_attributes" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSecurityAttributes"></a>

```python
def reset_security_attributes() -> None
```

##### `reset_source` <a name="reset_source" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_source_db_system_id` <a name="reset_source_db_system_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSourceDbSystemId"></a>

```python
def reset_source_db_system_id() -> None
```

##### `reset_sparse_diskgroup` <a name="reset_sparse_diskgroup" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSparseDiskgroup"></a>

```python
def reset_sparse_diskgroup() -> None
```

##### `reset_storage_volume_performance_mode` <a name="reset_storage_volume_performance_mode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetStorageVolumePerformanceMode"></a>

```python
def reset_storage_volume_performance_mode() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseDbSystem resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystem.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystem.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystem.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystem.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseDbSystem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseDbSystem to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseDbSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseDbSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference">DatabaseDbSystemDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbHome">db_home</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference">DatabaseDbSystemDbHomeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbSystemOptions">db_system_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference">DatabaseDbSystemDbSystemOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.iormConfigCache">iorm_config_cache</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList">DatabaseDbSystemIormConfigCacheList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lastMaintenanceRunId">last_maintenance_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lastPatchHistoryEntryId">last_patch_history_entry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.listenerPort">listener_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList">DatabaseDbSystemMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.maintenanceWindowDetails">maintenance_window_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference">DatabaseDbSystemMaintenanceWindowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.memorySizeInGbs">memory_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nextMaintenanceRunId">next_maintenance_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.osVersion">os_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.pointInTimeDataDiskCloneTimestamp">point_in_time_data_disk_clone_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.scanDnsName">scan_dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.scanDnsRecordId">scan_dns_record_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.scanIpIds">scan_ip_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference">DatabaseDbSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.vipIds">vip_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupNetworkNsgIdsInput">backup_network_nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupSubnetIdInput">backup_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.cpuCoreCountInput">cpu_core_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.databaseEditionInput">database_edition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataCollectionOptionsInput">data_collection_options_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStoragePercentageInput">data_storage_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStorageSizeInGbInput">data_storage_size_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbHomeInput">db_home_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbSystemOptionsInput">db_system_options_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.diskRedundancyInput">disk_redundancy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.faultDomainsInput">fault_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyVersionIdInput">kms_key_version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.licenseModelInput">license_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.maintenanceWindowDetailsInput">maintenance_window_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nsgIdsInput">nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.privateIpInput">private_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.recoStorageSizeInGbInput">reco_storage_size_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.securityAttributesInput">security_attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.shapeInput">shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sourceDbSystemIdInput">source_db_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sparseDiskgroupInput">sparse_diskgroup_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sshPublicKeysInput">ssh_public_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.storageVolumePerformanceModeInput">storage_volume_performance_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts">DatabaseDbSystemTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupNetworkNsgIds">backup_network_nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupSubnetId">backup_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.databaseEdition">database_edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStoragePercentage">data_storage_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStorageSizeInGb">data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.diskRedundancy">disk_redundancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.faultDomains">fault_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.recoStorageSizeInGb">reco_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.securityAttributes">security_attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sourceDbSystemId">source_db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sparseDiskgroup">sparse_diskgroup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.storageVolumePerformanceMode">storage_volume_performance_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_collection_options`<sup>Required</sup> <a name="data_collection_options" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataCollectionOptions"></a>

```python
data_collection_options: DatabaseDbSystemDataCollectionOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference">DatabaseDbSystemDataCollectionOptionsOutputReference</a>

---

##### `db_home`<sup>Required</sup> <a name="db_home" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbHome"></a>

```python
db_home: DatabaseDbSystemDbHomeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference">DatabaseDbSystemDbHomeOutputReference</a>

---

##### `db_system_options`<sup>Required</sup> <a name="db_system_options" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbSystemOptions"></a>

```python
db_system_options: DatabaseDbSystemDbSystemOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference">DatabaseDbSystemDbSystemOptionsOutputReference</a>

---

##### `iorm_config_cache`<sup>Required</sup> <a name="iorm_config_cache" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.iormConfigCache"></a>

```python
iorm_config_cache: DatabaseDbSystemIormConfigCacheList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList">DatabaseDbSystemIormConfigCacheList</a>

---

##### `last_maintenance_run_id`<sup>Required</sup> <a name="last_maintenance_run_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lastMaintenanceRunId"></a>

```python
last_maintenance_run_id: str
```

- *Type:* str

---

##### `last_patch_history_entry_id`<sup>Required</sup> <a name="last_patch_history_entry_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lastPatchHistoryEntryId"></a>

```python
last_patch_history_entry_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `listener_port`<sup>Required</sup> <a name="listener_port" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.listenerPort"></a>

```python
listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.maintenanceWindow"></a>

```python
maintenance_window: DatabaseDbSystemMaintenanceWindowList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList">DatabaseDbSystemMaintenanceWindowList</a>

---

##### `maintenance_window_details`<sup>Required</sup> <a name="maintenance_window_details" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.maintenanceWindowDetails"></a>

```python
maintenance_window_details: DatabaseDbSystemMaintenanceWindowDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference">DatabaseDbSystemMaintenanceWindowDetailsOutputReference</a>

---

##### `memory_size_in_gbs`<sup>Required</sup> <a name="memory_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.memorySizeInGbs"></a>

```python
memory_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `next_maintenance_run_id`<sup>Required</sup> <a name="next_maintenance_run_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nextMaintenanceRunId"></a>

```python
next_maintenance_run_id: str
```

- *Type:* str

---

##### `os_version`<sup>Required</sup> <a name="os_version" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.osVersion"></a>

```python
os_version: str
```

- *Type:* str

---

##### `point_in_time_data_disk_clone_timestamp`<sup>Required</sup> <a name="point_in_time_data_disk_clone_timestamp" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.pointInTimeDataDiskCloneTimestamp"></a>

```python
point_in_time_data_disk_clone_timestamp: str
```

- *Type:* str

---

##### `scan_dns_name`<sup>Required</sup> <a name="scan_dns_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.scanDnsName"></a>

```python
scan_dns_name: str
```

- *Type:* str

---

##### `scan_dns_record_id`<sup>Required</sup> <a name="scan_dns_record_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.scanDnsRecordId"></a>

```python
scan_dns_record_id: str
```

- *Type:* str

---

##### `scan_ip_ids`<sup>Required</sup> <a name="scan_ip_ids" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.scanIpIds"></a>

```python
scan_ip_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeouts"></a>

```python
timeouts: DatabaseDbSystemTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference">DatabaseDbSystemTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `vip_ids`<sup>Required</sup> <a name="vip_ids" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.vipIds"></a>

```python
vip_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `backup_network_nsg_ids_input`<sup>Optional</sup> <a name="backup_network_nsg_ids_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupNetworkNsgIdsInput"></a>

```python
backup_network_nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_subnet_id_input`<sup>Optional</sup> <a name="backup_subnet_id_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupSubnetIdInput"></a>

```python
backup_subnet_id_input: str
```

- *Type:* str

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `cpu_core_count_input`<sup>Optional</sup> <a name="cpu_core_count_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.cpuCoreCountInput"></a>

```python
cpu_core_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database_edition_input`<sup>Optional</sup> <a name="database_edition_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.databaseEditionInput"></a>

```python
database_edition_input: str
```

- *Type:* str

---

##### `data_collection_options_input`<sup>Optional</sup> <a name="data_collection_options_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataCollectionOptionsInput"></a>

```python
data_collection_options_input: DatabaseDbSystemDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a>

---

##### `data_storage_percentage_input`<sup>Optional</sup> <a name="data_storage_percentage_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStoragePercentageInput"></a>

```python
data_storage_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_gb_input`<sup>Optional</sup> <a name="data_storage_size_in_gb_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStorageSizeInGbInput"></a>

```python
data_storage_size_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_home_input`<sup>Optional</sup> <a name="db_home_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbHomeInput"></a>

```python
db_home_input: DatabaseDbSystemDbHome
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a>

---

##### `db_system_options_input`<sup>Optional</sup> <a name="db_system_options_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbSystemOptionsInput"></a>

```python
db_system_options_input: DatabaseDbSystemDbSystemOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a>

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `disk_redundancy_input`<sup>Optional</sup> <a name="disk_redundancy_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.diskRedundancyInput"></a>

```python
disk_redundancy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `fault_domains_input`<sup>Optional</sup> <a name="fault_domains_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.faultDomainsInput"></a>

```python
fault_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `kms_key_version_id_input`<sup>Optional</sup> <a name="kms_key_version_id_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyVersionIdInput"></a>

```python
kms_key_version_id_input: str
```

- *Type:* str

---

##### `license_model_input`<sup>Optional</sup> <a name="license_model_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.licenseModelInput"></a>

```python
license_model_input: str
```

- *Type:* str

---

##### `maintenance_window_details_input`<sup>Optional</sup> <a name="maintenance_window_details_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.maintenanceWindowDetailsInput"></a>

```python
maintenance_window_details_input: DatabaseDbSystemMaintenanceWindowDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a>

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nsg_ids_input`<sup>Optional</sup> <a name="nsg_ids_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nsgIdsInput"></a>

```python
nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_ip_input`<sup>Optional</sup> <a name="private_ip_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.privateIpInput"></a>

```python
private_ip_input: str
```

- *Type:* str

---

##### `reco_storage_size_in_gb_input`<sup>Optional</sup> <a name="reco_storage_size_in_gb_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.recoStorageSizeInGbInput"></a>

```python
reco_storage_size_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_attributes_input`<sup>Optional</sup> <a name="security_attributes_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.securityAttributesInput"></a>

```python
security_attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `shape_input`<sup>Optional</sup> <a name="shape_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.shapeInput"></a>

```python
shape_input: str
```

- *Type:* str

---

##### `source_db_system_id_input`<sup>Optional</sup> <a name="source_db_system_id_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sourceDbSystemIdInput"></a>

```python
source_db_system_id_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `sparse_diskgroup_input`<sup>Optional</sup> <a name="sparse_diskgroup_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sparseDiskgroupInput"></a>

```python
sparse_diskgroup_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssh_public_keys_input`<sup>Optional</sup> <a name="ssh_public_keys_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sshPublicKeysInput"></a>

```python
ssh_public_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_volume_performance_mode_input`<sup>Optional</sup> <a name="storage_volume_performance_mode_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.storageVolumePerformanceModeInput"></a>

```python
storage_volume_performance_mode_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseDbSystemTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts">DatabaseDbSystemTimeouts</a>]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `backup_network_nsg_ids`<sup>Required</sup> <a name="backup_network_nsg_ids" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupNetworkNsgIds"></a>

```python
backup_network_nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_subnet_id`<sup>Required</sup> <a name="backup_subnet_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupSubnetId"></a>

```python
backup_subnet_id: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database_edition`<sup>Required</sup> <a name="database_edition" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.databaseEdition"></a>

```python
database_edition: str
```

- *Type:* str

---

##### `data_storage_percentage`<sup>Required</sup> <a name="data_storage_percentage" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStoragePercentage"></a>

```python
data_storage_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_gb`<sup>Required</sup> <a name="data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStorageSizeInGb"></a>

```python
data_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `disk_redundancy`<sup>Required</sup> <a name="disk_redundancy" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.diskRedundancy"></a>

```python
disk_redundancy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `fault_domains`<sup>Required</sup> <a name="fault_domains" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.faultDomains"></a>

```python
fault_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `kms_key_version_id`<sup>Required</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyVersionId"></a>

```python
kms_key_version_id: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `reco_storage_size_in_gb`<sup>Required</sup> <a name="reco_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.recoStorageSizeInGb"></a>

```python
reco_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_attributes`<sup>Required</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.securityAttributes"></a>

```python
security_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `source_db_system_id`<sup>Required</sup> <a name="source_db_system_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sourceDbSystemId"></a>

```python
source_db_system_id: str
```

- *Type:* str

---

##### `sparse_diskgroup`<sup>Required</sup> <a name="sparse_diskgroup" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sparseDiskgroup"></a>

```python
sparse_diskgroup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_volume_performance_mode`<sup>Required</sup> <a name="storage_volume_performance_mode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.storageVolumePerformanceMode"></a>

```python
storage_volume_performance_mode: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseDbSystemConfig <a name="DatabaseDbSystemConfig" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_domain: str,
  compartment_id: str,
  db_home: DatabaseDbSystemDbHome,
  hostname: str,
  shape: str,
  ssh_public_keys: typing.List[str],
  subnet_id: str,
  backup_network_nsg_ids: typing.List[str] = None,
  backup_subnet_id: str = None,
  cluster_name: str = None,
  cpu_core_count: typing.Union[int, float] = None,
  database_edition: str = None,
  data_collection_options: DatabaseDbSystemDataCollectionOptions = None,
  data_storage_percentage: typing.Union[int, float] = None,
  data_storage_size_in_gb: typing.Union[int, float] = None,
  db_system_options: DatabaseDbSystemDbSystemOptions = None,
  defined_tags: typing.Mapping[str] = None,
  disk_redundancy: str = None,
  display_name: str = None,
  domain: str = None,
  fault_domains: typing.List[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  kms_key_id: str = None,
  kms_key_version_id: str = None,
  license_model: str = None,
  maintenance_window_details: DatabaseDbSystemMaintenanceWindowDetails = None,
  node_count: typing.Union[int, float] = None,
  nsg_ids: typing.List[str] = None,
  private_ip: str = None,
  reco_storage_size_in_gb: typing.Union[int, float] = None,
  security_attributes: typing.Mapping[str] = None,
  source: str = None,
  source_db_system_id: str = None,
  sparse_diskgroup: typing.Union[bool, IResolvable] = None,
  storage_volume_performance_mode: str = None,
  timeouts: DatabaseDbSystemTimeouts = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#availability_domain DatabaseDbSystem#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#compartment_id DatabaseDbSystem#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dbHome">db_home</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a></code> | db_home block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#hostname DatabaseDbSystem#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#shape DatabaseDbSystem#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#ssh_public_keys DatabaseDbSystem#ssh_public_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#subnet_id DatabaseDbSystem#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.backupNetworkNsgIds">backup_network_nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_network_nsg_ids DatabaseDbSystem#backup_network_nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.backupSubnetId">backup_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_subnet_id DatabaseDbSystem#backup_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#cluster_name DatabaseDbSystem#cluster_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#cpu_core_count DatabaseDbSystem#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.databaseEdition">database_edition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_edition DatabaseDbSystem#database_edition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dataStoragePercentage">data_storage_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_storage_percentage DatabaseDbSystem#data_storage_percentage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dataStorageSizeInGb">data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_storage_size_in_gb DatabaseDbSystem#data_storage_size_in_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dbSystemOptions">db_system_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a></code> | db_system_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.diskRedundancy">disk_redundancy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#disk_redundancy DatabaseDbSystem#disk_redundancy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#display_name DatabaseDbSystem#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#domain DatabaseDbSystem#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.faultDomains">fault_domains</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#fault_domains DatabaseDbSystem#fault_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#id DatabaseDbSystem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_id DatabaseDbSystem#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_version_id DatabaseDbSystem#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#license_model DatabaseDbSystem#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.maintenanceWindowDetails">maintenance_window_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a></code> | maintenance_window_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#node_count DatabaseDbSystem#node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#nsg_ids DatabaseDbSystem#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.privateIp">private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#private_ip DatabaseDbSystem#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.recoStorageSizeInGb">reco_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#reco_storage_size_in_gb DatabaseDbSystem#reco_storage_size_in_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.securityAttributes">security_attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#security_attributes DatabaseDbSystem#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#source DatabaseDbSystem#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.sourceDbSystemId">source_db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#source_db_system_id DatabaseDbSystem#source_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.sparseDiskgroup">sparse_diskgroup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#sparse_diskgroup DatabaseDbSystem#sparse_diskgroup}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.storageVolumePerformanceMode">storage_volume_performance_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#storage_volume_performance_mode DatabaseDbSystem#storage_volume_performance_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts">DatabaseDbSystemTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#time_zone DatabaseDbSystem#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#availability_domain DatabaseDbSystem#availability_domain}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#compartment_id DatabaseDbSystem#compartment_id}.

---

##### `db_home`<sup>Required</sup> <a name="db_home" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dbHome"></a>

```python
db_home: DatabaseDbSystemDbHome
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a>

db_home block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_home DatabaseDbSystem#db_home}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#hostname DatabaseDbSystem#hostname}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.shape"></a>

```python
shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#shape DatabaseDbSystem#shape}.

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#ssh_public_keys DatabaseDbSystem#ssh_public_keys}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#subnet_id DatabaseDbSystem#subnet_id}.

---

##### `backup_network_nsg_ids`<sup>Optional</sup> <a name="backup_network_nsg_ids" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.backupNetworkNsgIds"></a>

```python
backup_network_nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_network_nsg_ids DatabaseDbSystem#backup_network_nsg_ids}.

---

##### `backup_subnet_id`<sup>Optional</sup> <a name="backup_subnet_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.backupSubnetId"></a>

```python
backup_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_subnet_id DatabaseDbSystem#backup_subnet_id}.

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#cluster_name DatabaseDbSystem#cluster_name}.

---

##### `cpu_core_count`<sup>Optional</sup> <a name="cpu_core_count" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#cpu_core_count DatabaseDbSystem#cpu_core_count}.

---

##### `database_edition`<sup>Optional</sup> <a name="database_edition" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.databaseEdition"></a>

```python
database_edition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_edition DatabaseDbSystem#database_edition}.

---

##### `data_collection_options`<sup>Optional</sup> <a name="data_collection_options" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dataCollectionOptions"></a>

```python
data_collection_options: DatabaseDbSystemDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_collection_options DatabaseDbSystem#data_collection_options}

---

##### `data_storage_percentage`<sup>Optional</sup> <a name="data_storage_percentage" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dataStoragePercentage"></a>

```python
data_storage_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_storage_percentage DatabaseDbSystem#data_storage_percentage}.

---

##### `data_storage_size_in_gb`<sup>Optional</sup> <a name="data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dataStorageSizeInGb"></a>

```python
data_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_storage_size_in_gb DatabaseDbSystem#data_storage_size_in_gb}.

---

##### `db_system_options`<sup>Optional</sup> <a name="db_system_options" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dbSystemOptions"></a>

```python
db_system_options: DatabaseDbSystemDbSystemOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a>

db_system_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_system_options DatabaseDbSystem#db_system_options}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}.

---

##### `disk_redundancy`<sup>Optional</sup> <a name="disk_redundancy" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.diskRedundancy"></a>

```python
disk_redundancy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#disk_redundancy DatabaseDbSystem#disk_redundancy}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#display_name DatabaseDbSystem#display_name}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#domain DatabaseDbSystem#domain}.

---

##### `fault_domains`<sup>Optional</sup> <a name="fault_domains" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.faultDomains"></a>

```python
fault_domains: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#fault_domains DatabaseDbSystem#fault_domains}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#id DatabaseDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_id DatabaseDbSystem#kms_key_id}.

---

##### `kms_key_version_id`<sup>Optional</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.kmsKeyVersionId"></a>

```python
kms_key_version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_version_id DatabaseDbSystem#kms_key_version_id}.

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#license_model DatabaseDbSystem#license_model}.

---

##### `maintenance_window_details`<sup>Optional</sup> <a name="maintenance_window_details" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.maintenanceWindowDetails"></a>

```python
maintenance_window_details: DatabaseDbSystemMaintenanceWindowDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a>

maintenance_window_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#maintenance_window_details DatabaseDbSystem#maintenance_window_details}

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#node_count DatabaseDbSystem#node_count}.

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#nsg_ids DatabaseDbSystem#nsg_ids}.

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#private_ip DatabaseDbSystem#private_ip}.

---

##### `reco_storage_size_in_gb`<sup>Optional</sup> <a name="reco_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.recoStorageSizeInGb"></a>

```python
reco_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#reco_storage_size_in_gb DatabaseDbSystem#reco_storage_size_in_gb}.

---

##### `security_attributes`<sup>Optional</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.securityAttributes"></a>

```python
security_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#security_attributes DatabaseDbSystem#security_attributes}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#source DatabaseDbSystem#source}.

---

##### `source_db_system_id`<sup>Optional</sup> <a name="source_db_system_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.sourceDbSystemId"></a>

```python
source_db_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#source_db_system_id DatabaseDbSystem#source_db_system_id}.

---

##### `sparse_diskgroup`<sup>Optional</sup> <a name="sparse_diskgroup" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.sparseDiskgroup"></a>

```python
sparse_diskgroup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#sparse_diskgroup DatabaseDbSystem#sparse_diskgroup}.

---

##### `storage_volume_performance_mode`<sup>Optional</sup> <a name="storage_volume_performance_mode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.storageVolumePerformanceMode"></a>

```python
storage_volume_performance_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#storage_volume_performance_mode DatabaseDbSystem#storage_volume_performance_mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.timeouts"></a>

```python
timeouts: DatabaseDbSystemTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts">DatabaseDbSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#timeouts DatabaseDbSystem#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#time_zone DatabaseDbSystem#time_zone}.

---

### DatabaseDbSystemDataCollectionOptions <a name="DatabaseDbSystemDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemDataCollectionOptions(
  is_diagnostics_events_enabled: typing.Union[bool, IResolvable] = None,
  is_health_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  is_incident_logs_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions.property.isDiagnosticsEventsEnabled">is_diagnostics_events_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_diagnostics_events_enabled DatabaseDbSystem#is_diagnostics_events_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions.property.isHealthMonitoringEnabled">is_health_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_health_monitoring_enabled DatabaseDbSystem#is_health_monitoring_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions.property.isIncidentLogsEnabled">is_incident_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_incident_logs_enabled DatabaseDbSystem#is_incident_logs_enabled}. |

---

##### `is_diagnostics_events_enabled`<sup>Optional</sup> <a name="is_diagnostics_events_enabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```python
is_diagnostics_events_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_diagnostics_events_enabled DatabaseDbSystem#is_diagnostics_events_enabled}.

---

##### `is_health_monitoring_enabled`<sup>Optional</sup> <a name="is_health_monitoring_enabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```python
is_health_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_health_monitoring_enabled DatabaseDbSystem#is_health_monitoring_enabled}.

---

##### `is_incident_logs_enabled`<sup>Optional</sup> <a name="is_incident_logs_enabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```python
is_incident_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_incident_logs_enabled DatabaseDbSystem#is_incident_logs_enabled}.

---

### DatabaseDbSystemDbHome <a name="DatabaseDbSystemDbHome" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemDbHome(
  database: DatabaseDbSystemDbHomeDatabase,
  create_async: typing.Union[bool, IResolvable] = None,
  database_software_image_id: str = None,
  db_version: str = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.database">database</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase">DatabaseDbSystemDbHomeDatabase</a></code> | database block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.createAsync">create_async</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#create_async DatabaseDbSystem#create_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.databaseSoftwareImageId">database_software_image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_software_image_id DatabaseDbSystem#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.dbVersion">db_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_version DatabaseDbSystem#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#display_name DatabaseDbSystem#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}. |

---

##### `database`<sup>Required</sup> <a name="database" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.database"></a>

```python
database: DatabaseDbSystemDbHomeDatabase
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase">DatabaseDbSystemDbHomeDatabase</a>

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database DatabaseDbSystem#database}

---

##### `create_async`<sup>Optional</sup> <a name="create_async" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.createAsync"></a>

```python
create_async: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#create_async DatabaseDbSystem#create_async}.

---

##### `database_software_image_id`<sup>Optional</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.databaseSoftwareImageId"></a>

```python
database_software_image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_software_image_id DatabaseDbSystem#database_software_image_id}.

---

##### `db_version`<sup>Optional</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_version DatabaseDbSystem#db_version}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#display_name DatabaseDbSystem#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}.

---

### DatabaseDbSystemDbHomeDatabase <a name="DatabaseDbSystemDbHomeDatabase" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemDbHomeDatabase(
  admin_password: str,
  backup_id: str = None,
  backup_tde_password: str = None,
  character_set: str = None,
  database_id: str = None,
  database_software_image_id: str = None,
  db_backup_config: DatabaseDbSystemDbHomeDatabaseDbBackupConfig = None,
  db_domain: str = None,
  db_name: str = None,
  db_unique_name: str = None,
  db_workload: str = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  kms_key_id: str = None,
  kms_key_version_id: str = None,
  ncharacter_set: str = None,
  pdb_name: str = None,
  pluggable_databases: typing.List[str] = None,
  tde_wallet_password: str = None,
  time_stamp_for_point_in_time_recovery: str = None,
  vault_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.adminPassword">admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#admin_password DatabaseDbSystem#admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.backupId">backup_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_id DatabaseDbSystem#backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.backupTdePassword">backup_tde_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_tde_password DatabaseDbSystem#backup_tde_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.characterSet">character_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#character_set DatabaseDbSystem#character_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_id DatabaseDbSystem#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.databaseSoftwareImageId">database_software_image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_software_image_id DatabaseDbSystem#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbBackupConfig">db_backup_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig">DatabaseDbSystemDbHomeDatabaseDbBackupConfig</a></code> | db_backup_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbDomain">db_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_domain DatabaseDbSystem#db_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbName">db_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_name DatabaseDbSystem#db_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbUniqueName">db_unique_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_unique_name DatabaseDbSystem#db_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbWorkload">db_workload</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_workload DatabaseDbSystem#db_workload}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_id DatabaseDbSystem#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_version_id DatabaseDbSystem#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.ncharacterSet">ncharacter_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#ncharacter_set DatabaseDbSystem#ncharacter_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.pdbName">pdb_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#pdb_name DatabaseDbSystem#pdb_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.pluggableDatabases">pluggable_databases</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#pluggable_databases DatabaseDbSystem#pluggable_databases}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.tdeWalletPassword">tde_wallet_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#tde_wallet_password DatabaseDbSystem#tde_wallet_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.timeStampForPointInTimeRecovery">time_stamp_for_point_in_time_recovery</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#time_stamp_for_point_in_time_recovery DatabaseDbSystem#time_stamp_for_point_in_time_recovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.vaultId">vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#vault_id DatabaseDbSystem#vault_id}. |

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#admin_password DatabaseDbSystem#admin_password}.

---

##### `backup_id`<sup>Optional</sup> <a name="backup_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_id DatabaseDbSystem#backup_id}.

---

##### `backup_tde_password`<sup>Optional</sup> <a name="backup_tde_password" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.backupTdePassword"></a>

```python
backup_tde_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_tde_password DatabaseDbSystem#backup_tde_password}.

---

##### `character_set`<sup>Optional</sup> <a name="character_set" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#character_set DatabaseDbSystem#character_set}.

---

##### `database_id`<sup>Optional</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_id DatabaseDbSystem#database_id}.

---

##### `database_software_image_id`<sup>Optional</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.databaseSoftwareImageId"></a>

```python
database_software_image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_software_image_id DatabaseDbSystem#database_software_image_id}.

---

##### `db_backup_config`<sup>Optional</sup> <a name="db_backup_config" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbBackupConfig"></a>

```python
db_backup_config: DatabaseDbSystemDbHomeDatabaseDbBackupConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig">DatabaseDbSystemDbHomeDatabaseDbBackupConfig</a>

db_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_backup_config DatabaseDbSystem#db_backup_config}

---

##### `db_domain`<sup>Optional</sup> <a name="db_domain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbDomain"></a>

```python
db_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_domain DatabaseDbSystem#db_domain}.

---

##### `db_name`<sup>Optional</sup> <a name="db_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_name DatabaseDbSystem#db_name}.

---

##### `db_unique_name`<sup>Optional</sup> <a name="db_unique_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbUniqueName"></a>

```python
db_unique_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_unique_name DatabaseDbSystem#db_unique_name}.

---

##### `db_workload`<sup>Optional</sup> <a name="db_workload" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbWorkload"></a>

```python
db_workload: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_workload DatabaseDbSystem#db_workload}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_id DatabaseDbSystem#kms_key_id}.

---

##### `kms_key_version_id`<sup>Optional</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.kmsKeyVersionId"></a>

```python
kms_key_version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_version_id DatabaseDbSystem#kms_key_version_id}.

---

##### `ncharacter_set`<sup>Optional</sup> <a name="ncharacter_set" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.ncharacterSet"></a>

```python
ncharacter_set: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#ncharacter_set DatabaseDbSystem#ncharacter_set}.

---

##### `pdb_name`<sup>Optional</sup> <a name="pdb_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.pdbName"></a>

```python
pdb_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#pdb_name DatabaseDbSystem#pdb_name}.

---

##### `pluggable_databases`<sup>Optional</sup> <a name="pluggable_databases" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.pluggableDatabases"></a>

```python
pluggable_databases: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#pluggable_databases DatabaseDbSystem#pluggable_databases}.

---

##### `tde_wallet_password`<sup>Optional</sup> <a name="tde_wallet_password" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.tdeWalletPassword"></a>

```python
tde_wallet_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#tde_wallet_password DatabaseDbSystem#tde_wallet_password}.

---

##### `time_stamp_for_point_in_time_recovery`<sup>Optional</sup> <a name="time_stamp_for_point_in_time_recovery" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.timeStampForPointInTimeRecovery"></a>

```python
time_stamp_for_point_in_time_recovery: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#time_stamp_for_point_in_time_recovery DatabaseDbSystem#time_stamp_for_point_in_time_recovery}.

---

##### `vault_id`<sup>Optional</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#vault_id DatabaseDbSystem#vault_id}.

---

### DatabaseDbSystemDbHomeDatabaseConnectionStrings <a name="DatabaseDbSystemDbHomeDatabaseConnectionStrings" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStrings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStrings()
```


### DatabaseDbSystemDbHomeDatabaseDbBackupConfig <a name="DatabaseDbSystemDbHomeDatabaseDbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig(
  auto_backup_enabled: typing.Union[bool, IResolvable] = None,
  auto_backup_window: str = None,
  auto_full_backup_day: str = None,
  auto_full_backup_window: str = None,
  backup_deletion_policy: str = None,
  backup_destination_details: typing.Union[IResolvable, typing.List[DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails]] = None,
  recovery_window_in_days: typing.Union[int, float] = None,
  run_immediate_full_backup: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoBackupEnabled">auto_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_backup_enabled DatabaseDbSystem#auto_backup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoBackupWindow">auto_backup_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_backup_window DatabaseDbSystem#auto_backup_window}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoFullBackupDay">auto_full_backup_day</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_full_backup_day DatabaseDbSystem#auto_full_backup_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoFullBackupWindow">auto_full_backup_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_full_backup_window DatabaseDbSystem#auto_full_backup_window}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.backupDeletionPolicy">backup_deletion_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_deletion_policy DatabaseDbSystem#backup_deletion_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.backupDestinationDetails">backup_destination_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>]]</code> | backup_destination_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.recoveryWindowInDays">recovery_window_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#recovery_window_in_days DatabaseDbSystem#recovery_window_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.runImmediateFullBackup">run_immediate_full_backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#run_immediate_full_backup DatabaseDbSystem#run_immediate_full_backup}. |

---

##### `auto_backup_enabled`<sup>Optional</sup> <a name="auto_backup_enabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoBackupEnabled"></a>

```python
auto_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_backup_enabled DatabaseDbSystem#auto_backup_enabled}.

---

##### `auto_backup_window`<sup>Optional</sup> <a name="auto_backup_window" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoBackupWindow"></a>

```python
auto_backup_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_backup_window DatabaseDbSystem#auto_backup_window}.

---

##### `auto_full_backup_day`<sup>Optional</sup> <a name="auto_full_backup_day" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoFullBackupDay"></a>

```python
auto_full_backup_day: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_full_backup_day DatabaseDbSystem#auto_full_backup_day}.

---

##### `auto_full_backup_window`<sup>Optional</sup> <a name="auto_full_backup_window" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoFullBackupWindow"></a>

```python
auto_full_backup_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_full_backup_window DatabaseDbSystem#auto_full_backup_window}.

---

##### `backup_deletion_policy`<sup>Optional</sup> <a name="backup_deletion_policy" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.backupDeletionPolicy"></a>

```python
backup_deletion_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_deletion_policy DatabaseDbSystem#backup_deletion_policy}.

---

##### `backup_destination_details`<sup>Optional</sup> <a name="backup_destination_details" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.backupDestinationDetails"></a>

```python
backup_destination_details: typing.Union[IResolvable, typing.List[DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>]]

backup_destination_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_destination_details DatabaseDbSystem#backup_destination_details}

---

##### `recovery_window_in_days`<sup>Optional</sup> <a name="recovery_window_in_days" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.recoveryWindowInDays"></a>

```python
recovery_window_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#recovery_window_in_days DatabaseDbSystem#recovery_window_in_days}.

---

##### `run_immediate_full_backup`<sup>Optional</sup> <a name="run_immediate_full_backup" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.runImmediateFullBackup"></a>

```python
run_immediate_full_backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#run_immediate_full_backup DatabaseDbSystem#run_immediate_full_backup}.

---

### DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails <a name="DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails(
  dbrs_policy_id: str = None,
  id: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.dbrsPolicyId">dbrs_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#dbrs_policy_id DatabaseDbSystem#dbrs_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#id DatabaseDbSystem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#type DatabaseDbSystem#type}. |

---

##### `dbrs_policy_id`<sup>Optional</sup> <a name="dbrs_policy_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.dbrsPolicyId"></a>

```python
dbrs_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#dbrs_policy_id DatabaseDbSystem#dbrs_policy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#id DatabaseDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#type DatabaseDbSystem#type}.

---

### DatabaseDbSystemDbSystemOptions <a name="DatabaseDbSystemDbSystemOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemDbSystemOptions(
  storage_management: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions.property.storageManagement">storage_management</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#storage_management DatabaseDbSystem#storage_management}. |

---

##### `storage_management`<sup>Optional</sup> <a name="storage_management" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions.property.storageManagement"></a>

```python
storage_management: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#storage_management DatabaseDbSystem#storage_management}.

---

### DatabaseDbSystemIormConfigCache <a name="DatabaseDbSystemIormConfigCache" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCache"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCache.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemIormConfigCache()
```


### DatabaseDbSystemIormConfigCacheDbPlans <a name="DatabaseDbSystemIormConfigCacheDbPlans" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlans.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlans()
```


### DatabaseDbSystemMaintenanceWindow <a name="DatabaseDbSystemMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindow.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemMaintenanceWindow()
```


### DatabaseDbSystemMaintenanceWindowDaysOfWeek <a name="DatabaseDbSystemMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeek.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeek()
```


### DatabaseDbSystemMaintenanceWindowDetails <a name="DatabaseDbSystemMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails(
  custom_action_timeout_in_mins: typing.Union[int, float] = None,
  days_of_week: typing.Union[IResolvable, typing.List[DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek]] = None,
  hours_of_day: typing.List[typing.Union[int, float]] = None,
  is_custom_action_timeout_enabled: typing.Union[bool, IResolvable] = None,
  is_monthly_patching_enabled: typing.Union[bool, IResolvable] = None,
  lead_time_in_weeks: typing.Union[int, float] = None,
  months: typing.Union[IResolvable, typing.List[DatabaseDbSystemMaintenanceWindowDetailsMonths]] = None,
  patching_mode: str = None,
  preference: str = None,
  skip_ru: typing.Union[IResolvable, typing.List[typing.Union[bool, IResolvable]]] = None,
  weeks_of_month: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.customActionTimeoutInMins">custom_action_timeout_in_mins</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#custom_action_timeout_in_mins DatabaseDbSystem#custom_action_timeout_in_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.daysOfWeek">days_of_week</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek">DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek</a>]]</code> | days_of_week block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.hoursOfDay">hours_of_day</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#hours_of_day DatabaseDbSystem#hours_of_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.isCustomActionTimeoutEnabled">is_custom_action_timeout_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_custom_action_timeout_enabled DatabaseDbSystem#is_custom_action_timeout_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.isMonthlyPatchingEnabled">is_monthly_patching_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_monthly_patching_enabled DatabaseDbSystem#is_monthly_patching_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.leadTimeInWeeks">lead_time_in_weeks</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#lead_time_in_weeks DatabaseDbSystem#lead_time_in_weeks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.months">months</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths">DatabaseDbSystemMaintenanceWindowDetailsMonths</a>]]</code> | months block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.patchingMode">patching_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#patching_mode DatabaseDbSystem#patching_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.preference">preference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#preference DatabaseDbSystem#preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.skipRu">skip_ru</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Union[bool, cdktf.IResolvable]]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#skip_ru DatabaseDbSystem#skip_ru}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#weeks_of_month DatabaseDbSystem#weeks_of_month}. |

---

##### `custom_action_timeout_in_mins`<sup>Optional</sup> <a name="custom_action_timeout_in_mins" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.customActionTimeoutInMins"></a>

```python
custom_action_timeout_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#custom_action_timeout_in_mins DatabaseDbSystem#custom_action_timeout_in_mins}.

---

##### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.daysOfWeek"></a>

```python
days_of_week: typing.Union[IResolvable, typing.List[DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek">DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek</a>]]

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#days_of_week DatabaseDbSystem#days_of_week}

---

##### `hours_of_day`<sup>Optional</sup> <a name="hours_of_day" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.hoursOfDay"></a>

```python
hours_of_day: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#hours_of_day DatabaseDbSystem#hours_of_day}.

---

##### `is_custom_action_timeout_enabled`<sup>Optional</sup> <a name="is_custom_action_timeout_enabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.isCustomActionTimeoutEnabled"></a>

```python
is_custom_action_timeout_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_custom_action_timeout_enabled DatabaseDbSystem#is_custom_action_timeout_enabled}.

---

##### `is_monthly_patching_enabled`<sup>Optional</sup> <a name="is_monthly_patching_enabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.isMonthlyPatchingEnabled"></a>

```python
is_monthly_patching_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_monthly_patching_enabled DatabaseDbSystem#is_monthly_patching_enabled}.

---

##### `lead_time_in_weeks`<sup>Optional</sup> <a name="lead_time_in_weeks" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.leadTimeInWeeks"></a>

```python
lead_time_in_weeks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#lead_time_in_weeks DatabaseDbSystem#lead_time_in_weeks}.

---

##### `months`<sup>Optional</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.months"></a>

```python
months: typing.Union[IResolvable, typing.List[DatabaseDbSystemMaintenanceWindowDetailsMonths]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths">DatabaseDbSystemMaintenanceWindowDetailsMonths</a>]]

months block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#months DatabaseDbSystem#months}

---

##### `patching_mode`<sup>Optional</sup> <a name="patching_mode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.patchingMode"></a>

```python
patching_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#patching_mode DatabaseDbSystem#patching_mode}.

---

##### `preference`<sup>Optional</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.preference"></a>

```python
preference: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#preference DatabaseDbSystem#preference}.

---

##### `skip_ru`<sup>Optional</sup> <a name="skip_ru" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.skipRu"></a>

```python
skip_ru: typing.Union[IResolvable, typing.List[typing.Union[bool, IResolvable]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Union[bool, cdktf.IResolvable]]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#skip_ru DatabaseDbSystem#skip_ru}.

---

##### `weeks_of_month`<sup>Optional</sup> <a name="weeks_of_month" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#weeks_of_month DatabaseDbSystem#weeks_of_month}.

---

### DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek <a name="DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#name DatabaseDbSystem#name}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#name DatabaseDbSystem#name}.

---

### DatabaseDbSystemMaintenanceWindowDetailsMonths <a name="DatabaseDbSystemMaintenanceWindowDetailsMonths" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#name DatabaseDbSystem#name}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#name DatabaseDbSystem#name}.

---

### DatabaseDbSystemMaintenanceWindowMonths <a name="DatabaseDbSystemMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonths.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonths()
```


### DatabaseDbSystemTimeouts <a name="DatabaseDbSystemTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#create DatabaseDbSystem#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#delete DatabaseDbSystem#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#update DatabaseDbSystem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#create DatabaseDbSystem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#delete DatabaseDbSystem#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#update DatabaseDbSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseDbSystemDataCollectionOptionsOutputReference <a name="DatabaseDbSystemDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">reset_is_diagnostics_events_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">reset_is_health_monitoring_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">reset_is_incident_logs_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_diagnostics_events_enabled` <a name="reset_is_diagnostics_events_enabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```python
def reset_is_diagnostics_events_enabled() -> None
```

##### `reset_is_health_monitoring_enabled` <a name="reset_is_health_monitoring_enabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```python
def reset_is_health_monitoring_enabled() -> None
```

##### `reset_is_incident_logs_enabled` <a name="reset_is_incident_logs_enabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```python
def reset_is_incident_logs_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">is_diagnostics_events_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">is_health_monitoring_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">is_incident_logs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">is_diagnostics_events_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">is_health_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">is_incident_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_diagnostics_events_enabled_input`<sup>Optional</sup> <a name="is_diagnostics_events_enabled_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```python
is_diagnostics_events_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_health_monitoring_enabled_input`<sup>Optional</sup> <a name="is_health_monitoring_enabled_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```python
is_health_monitoring_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_incident_logs_enabled_input`<sup>Optional</sup> <a name="is_incident_logs_enabled_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```python
is_incident_logs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_diagnostics_events_enabled`<sup>Required</sup> <a name="is_diagnostics_events_enabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```python
is_diagnostics_events_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_health_monitoring_enabled`<sup>Required</sup> <a name="is_health_monitoring_enabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```python
is_health_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_incident_logs_enabled`<sup>Required</sup> <a name="is_incident_logs_enabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```python
is_incident_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDbSystemDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a>

---


### DatabaseDbSystemDbHomeDatabaseConnectionStringsList <a name="DatabaseDbSystemDbHomeDatabaseConnectionStringsList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference <a name="DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.allConnectionStrings">all_connection_strings</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.cdbDefault">cdb_default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.cdbIpDefault">cdb_ip_default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStrings">DatabaseDbSystemDbHomeDatabaseConnectionStrings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_connection_strings`<sup>Required</sup> <a name="all_connection_strings" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.allConnectionStrings"></a>

```python
all_connection_strings: StringMap
```

- *Type:* cdktf.StringMap

---

##### `cdb_default`<sup>Required</sup> <a name="cdb_default" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.cdbDefault"></a>

```python
cdb_default: str
```

- *Type:* str

---

##### `cdb_ip_default`<sup>Required</sup> <a name="cdb_ip_default" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.cdbIpDefault"></a>

```python
cdb_ip_default: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDbSystemDbHomeDatabaseConnectionStrings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStrings">DatabaseDbSystemDbHomeDatabaseConnectionStrings</a>

---


### DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList <a name="DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>]]

---


### DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference <a name="DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetDbrsPolicyId">reset_dbrs_policy_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dbrs_policy_id` <a name="reset_dbrs_policy_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetDbrsPolicyId"></a>

```python
def reset_dbrs_policy_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_type` <a name="reset_type" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyIdInput">dbrs_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId">dbrs_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dbrs_policy_id_input`<sup>Optional</sup> <a name="dbrs_policy_id_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyIdInput"></a>

```python
dbrs_policy_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `dbrs_policy_id`<sup>Required</sup> <a name="dbrs_policy_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId"></a>

```python
dbrs_policy_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>]

---


### DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference <a name="DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.putBackupDestinationDetails">put_backup_destination_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoBackupEnabled">reset_auto_backup_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoBackupWindow">reset_auto_backup_window</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoFullBackupDay">reset_auto_full_backup_day</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoFullBackupWindow">reset_auto_full_backup_window</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetBackupDeletionPolicy">reset_backup_deletion_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetBackupDestinationDetails">reset_backup_destination_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetRecoveryWindowInDays">reset_recovery_window_in_days</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetRunImmediateFullBackup">reset_run_immediate_full_backup</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_backup_destination_details` <a name="put_backup_destination_details" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.putBackupDestinationDetails"></a>

```python
def put_backup_destination_details(
  value: typing.Union[IResolvable, typing.List[DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.putBackupDestinationDetails.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>]]

---

##### `reset_auto_backup_enabled` <a name="reset_auto_backup_enabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoBackupEnabled"></a>

```python
def reset_auto_backup_enabled() -> None
```

##### `reset_auto_backup_window` <a name="reset_auto_backup_window" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoBackupWindow"></a>

```python
def reset_auto_backup_window() -> None
```

##### `reset_auto_full_backup_day` <a name="reset_auto_full_backup_day" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoFullBackupDay"></a>

```python
def reset_auto_full_backup_day() -> None
```

##### `reset_auto_full_backup_window` <a name="reset_auto_full_backup_window" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoFullBackupWindow"></a>

```python
def reset_auto_full_backup_window() -> None
```

##### `reset_backup_deletion_policy` <a name="reset_backup_deletion_policy" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetBackupDeletionPolicy"></a>

```python
def reset_backup_deletion_policy() -> None
```

##### `reset_backup_destination_details` <a name="reset_backup_destination_details" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetBackupDestinationDetails"></a>

```python
def reset_backup_destination_details() -> None
```

##### `reset_recovery_window_in_days` <a name="reset_recovery_window_in_days" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetRecoveryWindowInDays"></a>

```python
def reset_recovery_window_in_days() -> None
```

##### `reset_run_immediate_full_backup` <a name="reset_run_immediate_full_backup" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetRunImmediateFullBackup"></a>

```python
def reset_run_immediate_full_backup() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDestinationDetails">backup_destination_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList">DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupEnabledInput">auto_backup_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupWindowInput">auto_backup_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupDayInput">auto_full_backup_day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindowInput">auto_full_backup_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicyInput">backup_deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDestinationDetailsInput">backup_destination_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDaysInput">recovery_window_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackupInput">run_immediate_full_backup_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupEnabled">auto_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupWindow">auto_backup_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupDay">auto_full_backup_day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindow">auto_full_backup_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicy">backup_deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDays">recovery_window_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackup">run_immediate_full_backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig">DatabaseDbSystemDbHomeDatabaseDbBackupConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_destination_details`<sup>Required</sup> <a name="backup_destination_details" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDestinationDetails"></a>

```python
backup_destination_details: DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList">DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList</a>

---

##### `auto_backup_enabled_input`<sup>Optional</sup> <a name="auto_backup_enabled_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupEnabledInput"></a>

```python
auto_backup_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_backup_window_input`<sup>Optional</sup> <a name="auto_backup_window_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupWindowInput"></a>

```python
auto_backup_window_input: str
```

- *Type:* str

---

##### `auto_full_backup_day_input`<sup>Optional</sup> <a name="auto_full_backup_day_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupDayInput"></a>

```python
auto_full_backup_day_input: str
```

- *Type:* str

---

##### `auto_full_backup_window_input`<sup>Optional</sup> <a name="auto_full_backup_window_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindowInput"></a>

```python
auto_full_backup_window_input: str
```

- *Type:* str

---

##### `backup_deletion_policy_input`<sup>Optional</sup> <a name="backup_deletion_policy_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicyInput"></a>

```python
backup_deletion_policy_input: str
```

- *Type:* str

---

##### `backup_destination_details_input`<sup>Optional</sup> <a name="backup_destination_details_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDestinationDetailsInput"></a>

```python
backup_destination_details_input: typing.Union[IResolvable, typing.List[DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>]]

---

##### `recovery_window_in_days_input`<sup>Optional</sup> <a name="recovery_window_in_days_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDaysInput"></a>

```python
recovery_window_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `run_immediate_full_backup_input`<sup>Optional</sup> <a name="run_immediate_full_backup_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackupInput"></a>

```python
run_immediate_full_backup_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_backup_enabled`<sup>Required</sup> <a name="auto_backup_enabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupEnabled"></a>

```python
auto_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_backup_window`<sup>Required</sup> <a name="auto_backup_window" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupWindow"></a>

```python
auto_backup_window: str
```

- *Type:* str

---

##### `auto_full_backup_day`<sup>Required</sup> <a name="auto_full_backup_day" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupDay"></a>

```python
auto_full_backup_day: str
```

- *Type:* str

---

##### `auto_full_backup_window`<sup>Required</sup> <a name="auto_full_backup_window" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindow"></a>

```python
auto_full_backup_window: str
```

- *Type:* str

---

##### `backup_deletion_policy`<sup>Required</sup> <a name="backup_deletion_policy" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicy"></a>

```python
backup_deletion_policy: str
```

- *Type:* str

---

##### `recovery_window_in_days`<sup>Required</sup> <a name="recovery_window_in_days" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDays"></a>

```python
recovery_window_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `run_immediate_full_backup`<sup>Required</sup> <a name="run_immediate_full_backup" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackup"></a>

```python
run_immediate_full_backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDbSystemDbHomeDatabaseDbBackupConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig">DatabaseDbSystemDbHomeDatabaseDbBackupConfig</a>

---


### DatabaseDbSystemDbHomeDatabaseOutputReference <a name="DatabaseDbSystemDbHomeDatabaseOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.putDbBackupConfig">put_db_backup_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetBackupId">reset_backup_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetBackupTdePassword">reset_backup_tde_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetCharacterSet">reset_character_set</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDatabaseId">reset_database_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDatabaseSoftwareImageId">reset_database_software_image_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbBackupConfig">reset_db_backup_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbDomain">reset_db_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbName">reset_db_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbUniqueName">reset_db_unique_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbWorkload">reset_db_workload</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetKmsKeyVersionId">reset_kms_key_version_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetNcharacterSet">reset_ncharacter_set</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetPdbName">reset_pdb_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetPluggableDatabases">reset_pluggable_databases</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetTdeWalletPassword">reset_tde_wallet_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetTimeStampForPointInTimeRecovery">reset_time_stamp_for_point_in_time_recovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetVaultId">reset_vault_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_db_backup_config` <a name="put_db_backup_config" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.putDbBackupConfig"></a>

```python
def put_db_backup_config(
  auto_backup_enabled: typing.Union[bool, IResolvable] = None,
  auto_backup_window: str = None,
  auto_full_backup_day: str = None,
  auto_full_backup_window: str = None,
  backup_deletion_policy: str = None,
  backup_destination_details: typing.Union[IResolvable, typing.List[DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails]] = None,
  recovery_window_in_days: typing.Union[int, float] = None,
  run_immediate_full_backup: typing.Union[bool, IResolvable] = None
) -> None
```

###### `auto_backup_enabled`<sup>Optional</sup> <a name="auto_backup_enabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.putDbBackupConfig.parameter.autoBackupEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_backup_enabled DatabaseDbSystem#auto_backup_enabled}.

---

###### `auto_backup_window`<sup>Optional</sup> <a name="auto_backup_window" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.putDbBackupConfig.parameter.autoBackupWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_backup_window DatabaseDbSystem#auto_backup_window}.

---

###### `auto_full_backup_day`<sup>Optional</sup> <a name="auto_full_backup_day" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.putDbBackupConfig.parameter.autoFullBackupDay"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_full_backup_day DatabaseDbSystem#auto_full_backup_day}.

---

###### `auto_full_backup_window`<sup>Optional</sup> <a name="auto_full_backup_window" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.putDbBackupConfig.parameter.autoFullBackupWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_full_backup_window DatabaseDbSystem#auto_full_backup_window}.

---

###### `backup_deletion_policy`<sup>Optional</sup> <a name="backup_deletion_policy" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.putDbBackupConfig.parameter.backupDeletionPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_deletion_policy DatabaseDbSystem#backup_deletion_policy}.

---

###### `backup_destination_details`<sup>Optional</sup> <a name="backup_destination_details" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.putDbBackupConfig.parameter.backupDestinationDetails"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>]]

backup_destination_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_destination_details DatabaseDbSystem#backup_destination_details}

---

###### `recovery_window_in_days`<sup>Optional</sup> <a name="recovery_window_in_days" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.putDbBackupConfig.parameter.recoveryWindowInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#recovery_window_in_days DatabaseDbSystem#recovery_window_in_days}.

---

###### `run_immediate_full_backup`<sup>Optional</sup> <a name="run_immediate_full_backup" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.putDbBackupConfig.parameter.runImmediateFullBackup"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#run_immediate_full_backup DatabaseDbSystem#run_immediate_full_backup}.

---

##### `reset_backup_id` <a name="reset_backup_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetBackupId"></a>

```python
def reset_backup_id() -> None
```

##### `reset_backup_tde_password` <a name="reset_backup_tde_password" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetBackupTdePassword"></a>

```python
def reset_backup_tde_password() -> None
```

##### `reset_character_set` <a name="reset_character_set" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetCharacterSet"></a>

```python
def reset_character_set() -> None
```

##### `reset_database_id` <a name="reset_database_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDatabaseId"></a>

```python
def reset_database_id() -> None
```

##### `reset_database_software_image_id` <a name="reset_database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDatabaseSoftwareImageId"></a>

```python
def reset_database_software_image_id() -> None
```

##### `reset_db_backup_config` <a name="reset_db_backup_config" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbBackupConfig"></a>

```python
def reset_db_backup_config() -> None
```

##### `reset_db_domain` <a name="reset_db_domain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbDomain"></a>

```python
def reset_db_domain() -> None
```

##### `reset_db_name` <a name="reset_db_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbName"></a>

```python
def reset_db_name() -> None
```

##### `reset_db_unique_name` <a name="reset_db_unique_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbUniqueName"></a>

```python
def reset_db_unique_name() -> None
```

##### `reset_db_workload` <a name="reset_db_workload" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbWorkload"></a>

```python
def reset_db_workload() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_kms_key_version_id` <a name="reset_kms_key_version_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetKmsKeyVersionId"></a>

```python
def reset_kms_key_version_id() -> None
```

##### `reset_ncharacter_set` <a name="reset_ncharacter_set" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetNcharacterSet"></a>

```python
def reset_ncharacter_set() -> None
```

##### `reset_pdb_name` <a name="reset_pdb_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetPdbName"></a>

```python
def reset_pdb_name() -> None
```

##### `reset_pluggable_databases` <a name="reset_pluggable_databases" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetPluggableDatabases"></a>

```python
def reset_pluggable_databases() -> None
```

##### `reset_tde_wallet_password` <a name="reset_tde_wallet_password" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetTdeWalletPassword"></a>

```python
def reset_tde_wallet_password() -> None
```

##### `reset_time_stamp_for_point_in_time_recovery` <a name="reset_time_stamp_for_point_in_time_recovery" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetTimeStampForPointInTimeRecovery"></a>

```python
def reset_time_stamp_for_point_in_time_recovery() -> None
```

##### `reset_vault_id` <a name="reset_vault_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetVaultId"></a>

```python
def reset_vault_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.connectionStrings">connection_strings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList">DatabaseDbSystemDbHomeDatabaseConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbBackupConfig">db_backup_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference">DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.adminPasswordInput">admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupIdInput">backup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupTdePasswordInput">backup_tde_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.characterSetInput">character_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseIdInput">database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseSoftwareImageIdInput">database_software_image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbBackupConfigInput">db_backup_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig">DatabaseDbSystemDbHomeDatabaseDbBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbDomainInput">db_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbNameInput">db_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbUniqueNameInput">db_unique_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbWorkloadInput">db_workload_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyVersionIdInput">kms_key_version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.ncharacterSetInput">ncharacter_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pdbNameInput">pdb_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pluggableDatabasesInput">pluggable_databases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.tdeWalletPasswordInput">tde_wallet_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.timeStampForPointInTimeRecoveryInput">time_stamp_for_point_in_time_recovery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.vaultIdInput">vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.adminPassword">admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupId">backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupTdePassword">backup_tde_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.characterSet">character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseId">database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseSoftwareImageId">database_software_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbDomain">db_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbUniqueName">db_unique_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbWorkload">db_workload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.ncharacterSet">ncharacter_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pdbName">pdb_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pluggableDatabases">pluggable_databases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.tdeWalletPassword">tde_wallet_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.timeStampForPointInTimeRecovery">time_stamp_for_point_in_time_recovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase">DatabaseDbSystemDbHomeDatabase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_strings`<sup>Required</sup> <a name="connection_strings" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.connectionStrings"></a>

```python
connection_strings: DatabaseDbSystemDbHomeDatabaseConnectionStringsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList">DatabaseDbSystemDbHomeDatabaseConnectionStringsList</a>

---

##### `db_backup_config`<sup>Required</sup> <a name="db_backup_config" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbBackupConfig"></a>

```python
db_backup_config: DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference">DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `admin_password_input`<sup>Optional</sup> <a name="admin_password_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.adminPasswordInput"></a>

```python
admin_password_input: str
```

- *Type:* str

---

##### `backup_id_input`<sup>Optional</sup> <a name="backup_id_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupIdInput"></a>

```python
backup_id_input: str
```

- *Type:* str

---

##### `backup_tde_password_input`<sup>Optional</sup> <a name="backup_tde_password_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupTdePasswordInput"></a>

```python
backup_tde_password_input: str
```

- *Type:* str

---

##### `character_set_input`<sup>Optional</sup> <a name="character_set_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.characterSetInput"></a>

```python
character_set_input: str
```

- *Type:* str

---

##### `database_id_input`<sup>Optional</sup> <a name="database_id_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseIdInput"></a>

```python
database_id_input: str
```

- *Type:* str

---

##### `database_software_image_id_input`<sup>Optional</sup> <a name="database_software_image_id_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseSoftwareImageIdInput"></a>

```python
database_software_image_id_input: str
```

- *Type:* str

---

##### `db_backup_config_input`<sup>Optional</sup> <a name="db_backup_config_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbBackupConfigInput"></a>

```python
db_backup_config_input: DatabaseDbSystemDbHomeDatabaseDbBackupConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig">DatabaseDbSystemDbHomeDatabaseDbBackupConfig</a>

---

##### `db_domain_input`<sup>Optional</sup> <a name="db_domain_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbDomainInput"></a>

```python
db_domain_input: str
```

- *Type:* str

---

##### `db_name_input`<sup>Optional</sup> <a name="db_name_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbNameInput"></a>

```python
db_name_input: str
```

- *Type:* str

---

##### `db_unique_name_input`<sup>Optional</sup> <a name="db_unique_name_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbUniqueNameInput"></a>

```python
db_unique_name_input: str
```

- *Type:* str

---

##### `db_workload_input`<sup>Optional</sup> <a name="db_workload_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbWorkloadInput"></a>

```python
db_workload_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `kms_key_version_id_input`<sup>Optional</sup> <a name="kms_key_version_id_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyVersionIdInput"></a>

```python
kms_key_version_id_input: str
```

- *Type:* str

---

##### `ncharacter_set_input`<sup>Optional</sup> <a name="ncharacter_set_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.ncharacterSetInput"></a>

```python
ncharacter_set_input: str
```

- *Type:* str

---

##### `pdb_name_input`<sup>Optional</sup> <a name="pdb_name_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pdbNameInput"></a>

```python
pdb_name_input: str
```

- *Type:* str

---

##### `pluggable_databases_input`<sup>Optional</sup> <a name="pluggable_databases_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pluggableDatabasesInput"></a>

```python
pluggable_databases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tde_wallet_password_input`<sup>Optional</sup> <a name="tde_wallet_password_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.tdeWalletPasswordInput"></a>

```python
tde_wallet_password_input: str
```

- *Type:* str

---

##### `time_stamp_for_point_in_time_recovery_input`<sup>Optional</sup> <a name="time_stamp_for_point_in_time_recovery_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.timeStampForPointInTimeRecoveryInput"></a>

```python
time_stamp_for_point_in_time_recovery_input: str
```

- *Type:* str

---

##### `vault_id_input`<sup>Optional</sup> <a name="vault_id_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.vaultIdInput"></a>

```python
vault_id_input: str
```

- *Type:* str

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

---

##### `backup_id`<sup>Required</sup> <a name="backup_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

---

##### `backup_tde_password`<sup>Required</sup> <a name="backup_tde_password" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupTdePassword"></a>

```python
backup_tde_password: str
```

- *Type:* str

---

##### `character_set`<sup>Required</sup> <a name="character_set" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

---

##### `database_software_image_id`<sup>Required</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseSoftwareImageId"></a>

```python
database_software_image_id: str
```

- *Type:* str

---

##### `db_domain`<sup>Required</sup> <a name="db_domain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbDomain"></a>

```python
db_domain: str
```

- *Type:* str

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `db_unique_name`<sup>Required</sup> <a name="db_unique_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbUniqueName"></a>

```python
db_unique_name: str
```

- *Type:* str

---

##### `db_workload`<sup>Required</sup> <a name="db_workload" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbWorkload"></a>

```python
db_workload: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `kms_key_version_id`<sup>Required</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyVersionId"></a>

```python
kms_key_version_id: str
```

- *Type:* str

---

##### `ncharacter_set`<sup>Required</sup> <a name="ncharacter_set" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.ncharacterSet"></a>

```python
ncharacter_set: str
```

- *Type:* str

---

##### `pdb_name`<sup>Required</sup> <a name="pdb_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pdbName"></a>

```python
pdb_name: str
```

- *Type:* str

---

##### `pluggable_databases`<sup>Required</sup> <a name="pluggable_databases" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pluggableDatabases"></a>

```python
pluggable_databases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tde_wallet_password`<sup>Required</sup> <a name="tde_wallet_password" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.tdeWalletPassword"></a>

```python
tde_wallet_password: str
```

- *Type:* str

---

##### `time_stamp_for_point_in_time_recovery`<sup>Required</sup> <a name="time_stamp_for_point_in_time_recovery" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.timeStampForPointInTimeRecovery"></a>

```python
time_stamp_for_point_in_time_recovery: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDbSystemDbHomeDatabase
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase">DatabaseDbSystemDbHomeDatabase</a>

---


### DatabaseDbSystemDbHomeOutputReference <a name="DatabaseDbSystemDbHomeOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemDbHomeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase">put_database</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetCreateAsync">reset_create_async</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDatabaseSoftwareImageId">reset_database_software_image_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDbVersion">reset_db_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_database` <a name="put_database" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase"></a>

```python
def put_database(
  admin_password: str,
  backup_id: str = None,
  backup_tde_password: str = None,
  character_set: str = None,
  database_id: str = None,
  database_software_image_id: str = None,
  db_backup_config: DatabaseDbSystemDbHomeDatabaseDbBackupConfig = None,
  db_domain: str = None,
  db_name: str = None,
  db_unique_name: str = None,
  db_workload: str = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  kms_key_id: str = None,
  kms_key_version_id: str = None,
  ncharacter_set: str = None,
  pdb_name: str = None,
  pluggable_databases: typing.List[str] = None,
  tde_wallet_password: str = None,
  time_stamp_for_point_in_time_recovery: str = None,
  vault_id: str = None
) -> None
```

###### `admin_password`<sup>Required</sup> <a name="admin_password" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase.parameter.adminPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#admin_password DatabaseDbSystem#admin_password}.

---

###### `backup_id`<sup>Optional</sup> <a name="backup_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase.parameter.backupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_id DatabaseDbSystem#backup_id}.

---

###### `backup_tde_password`<sup>Optional</sup> <a name="backup_tde_password" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase.parameter.backupTdePassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_tde_password DatabaseDbSystem#backup_tde_password}.

---

###### `character_set`<sup>Optional</sup> <a name="character_set" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase.parameter.characterSet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#character_set DatabaseDbSystem#character_set}.

---

###### `database_id`<sup>Optional</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase.parameter.databaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_id DatabaseDbSystem#database_id}.

---

###### `database_software_image_id`<sup>Optional</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase.parameter.databaseSoftwareImageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_software_image_id DatabaseDbSystem#database_software_image_id}.

---

###### `db_backup_config`<sup>Optional</sup> <a name="db_backup_config" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase.parameter.dbBackupConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig">DatabaseDbSystemDbHomeDatabaseDbBackupConfig</a>

db_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_backup_config DatabaseDbSystem#db_backup_config}

---

###### `db_domain`<sup>Optional</sup> <a name="db_domain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase.parameter.dbDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_domain DatabaseDbSystem#db_domain}.

---

###### `db_name`<sup>Optional</sup> <a name="db_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase.parameter.dbName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_name DatabaseDbSystem#db_name}.

---

###### `db_unique_name`<sup>Optional</sup> <a name="db_unique_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase.parameter.dbUniqueName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_unique_name DatabaseDbSystem#db_unique_name}.

---

###### `db_workload`<sup>Optional</sup> <a name="db_workload" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase.parameter.dbWorkload"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_workload DatabaseDbSystem#db_workload}.

---

###### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}.

---

###### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_id DatabaseDbSystem#kms_key_id}.

---

###### `kms_key_version_id`<sup>Optional</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase.parameter.kmsKeyVersionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_version_id DatabaseDbSystem#kms_key_version_id}.

---

###### `ncharacter_set`<sup>Optional</sup> <a name="ncharacter_set" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase.parameter.ncharacterSet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#ncharacter_set DatabaseDbSystem#ncharacter_set}.

---

###### `pdb_name`<sup>Optional</sup> <a name="pdb_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase.parameter.pdbName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#pdb_name DatabaseDbSystem#pdb_name}.

---

###### `pluggable_databases`<sup>Optional</sup> <a name="pluggable_databases" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase.parameter.pluggableDatabases"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#pluggable_databases DatabaseDbSystem#pluggable_databases}.

---

###### `tde_wallet_password`<sup>Optional</sup> <a name="tde_wallet_password" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase.parameter.tdeWalletPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#tde_wallet_password DatabaseDbSystem#tde_wallet_password}.

---

###### `time_stamp_for_point_in_time_recovery`<sup>Optional</sup> <a name="time_stamp_for_point_in_time_recovery" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase.parameter.timeStampForPointInTimeRecovery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#time_stamp_for_point_in_time_recovery DatabaseDbSystem#time_stamp_for_point_in_time_recovery}.

---

###### `vault_id`<sup>Optional</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase.parameter.vaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#vault_id DatabaseDbSystem#vault_id}.

---

##### `reset_create_async` <a name="reset_create_async" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetCreateAsync"></a>

```python
def reset_create_async() -> None
```

##### `reset_database_software_image_id` <a name="reset_database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDatabaseSoftwareImageId"></a>

```python
def reset_database_software_image_id() -> None
```

##### `reset_db_version` <a name="reset_db_version" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDbVersion"></a>

```python
def reset_db_version() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.database">database</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference">DatabaseDbSystemDbHomeDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.dbHomeLocation">db_home_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.lastPatchHistoryEntryId">last_patch_history_entry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.createAsyncInput">create_async_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.databaseInput">database_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase">DatabaseDbSystemDbHomeDatabase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.databaseSoftwareImageIdInput">database_software_image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.dbVersionInput">db_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.createAsync">create_async</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.databaseSoftwareImageId">database_software_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.database"></a>

```python
database: DatabaseDbSystemDbHomeDatabaseOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference">DatabaseDbSystemDbHomeDatabaseOutputReference</a>

---

##### `db_home_location`<sup>Required</sup> <a name="db_home_location" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.dbHomeLocation"></a>

```python
db_home_location: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_patch_history_entry_id`<sup>Required</sup> <a name="last_patch_history_entry_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.lastPatchHistoryEntryId"></a>

```python
last_patch_history_entry_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `create_async_input`<sup>Optional</sup> <a name="create_async_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.createAsyncInput"></a>

```python
create_async_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.databaseInput"></a>

```python
database_input: DatabaseDbSystemDbHomeDatabase
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase">DatabaseDbSystemDbHomeDatabase</a>

---

##### `database_software_image_id_input`<sup>Optional</sup> <a name="database_software_image_id_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.databaseSoftwareImageIdInput"></a>

```python
database_software_image_id_input: str
```

- *Type:* str

---

##### `db_version_input`<sup>Optional</sup> <a name="db_version_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.dbVersionInput"></a>

```python
db_version_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `create_async`<sup>Required</sup> <a name="create_async" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.createAsync"></a>

```python
create_async: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `database_software_image_id`<sup>Required</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.databaseSoftwareImageId"></a>

```python
database_software_image_id: str
```

- *Type:* str

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDbSystemDbHome
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a>

---


### DatabaseDbSystemDbSystemOptionsOutputReference <a name="DatabaseDbSystemDbSystemOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.resetStorageManagement">reset_storage_management</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_storage_management` <a name="reset_storage_management" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.resetStorageManagement"></a>

```python
def reset_storage_management() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.storageManagementInput">storage_management_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.storageManagement">storage_management</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `storage_management_input`<sup>Optional</sup> <a name="storage_management_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.storageManagementInput"></a>

```python
storage_management_input: str
```

- *Type:* str

---

##### `storage_management`<sup>Required</sup> <a name="storage_management" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.storageManagement"></a>

```python
storage_management: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDbSystemDbSystemOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a>

---


### DatabaseDbSystemIormConfigCacheDbPlansList <a name="DatabaseDbSystemIormConfigCacheDbPlansList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseDbSystemIormConfigCacheDbPlansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseDbSystemIormConfigCacheDbPlansOutputReference <a name="DatabaseDbSystemIormConfigCacheDbPlansOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.flashCacheLimit">flash_cache_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.share">share</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlans">DatabaseDbSystemIormConfigCacheDbPlans</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `flash_cache_limit`<sup>Required</sup> <a name="flash_cache_limit" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.flashCacheLimit"></a>

```python
flash_cache_limit: str
```

- *Type:* str

---

##### `share`<sup>Required</sup> <a name="share" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.share"></a>

```python
share: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDbSystemIormConfigCacheDbPlans
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlans">DatabaseDbSystemIormConfigCacheDbPlans</a>

---


### DatabaseDbSystemIormConfigCacheList <a name="DatabaseDbSystemIormConfigCacheList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemIormConfigCacheList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseDbSystemIormConfigCacheOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseDbSystemIormConfigCacheOutputReference <a name="DatabaseDbSystemIormConfigCacheOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.dbPlans">db_plans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList">DatabaseDbSystemIormConfigCacheDbPlansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.objective">objective</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCache">DatabaseDbSystemIormConfigCache</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_plans`<sup>Required</sup> <a name="db_plans" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.dbPlans"></a>

```python
db_plans: DatabaseDbSystemIormConfigCacheDbPlansList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList">DatabaseDbSystemIormConfigCacheDbPlansList</a>

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `objective`<sup>Required</sup> <a name="objective" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.objective"></a>

```python
objective: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDbSystemIormConfigCache
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCache">DatabaseDbSystemIormConfigCache</a>

---


### DatabaseDbSystemMaintenanceWindowDaysOfWeekList <a name="DatabaseDbSystemMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference <a name="DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeek">DatabaseDbSystemMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDbSystemMaintenanceWindowDaysOfWeek
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeek">DatabaseDbSystemMaintenanceWindowDaysOfWeek</a>

---


### DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList <a name="DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek">DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek">DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek</a>]]

---


### DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference <a name="DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek">DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek">DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek</a>]

---


### DatabaseDbSystemMaintenanceWindowDetailsMonthsList <a name="DatabaseDbSystemMaintenanceWindowDetailsMonthsList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths">DatabaseDbSystemMaintenanceWindowDetailsMonths</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseDbSystemMaintenanceWindowDetailsMonths]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths">DatabaseDbSystemMaintenanceWindowDetailsMonths</a>]]

---


### DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference <a name="DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths">DatabaseDbSystemMaintenanceWindowDetailsMonths</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseDbSystemMaintenanceWindowDetailsMonths]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths">DatabaseDbSystemMaintenanceWindowDetailsMonths</a>]

---


### DatabaseDbSystemMaintenanceWindowDetailsOutputReference <a name="DatabaseDbSystemMaintenanceWindowDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.putDaysOfWeek">put_days_of_week</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.putMonths">put_months</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetCustomActionTimeoutInMins">reset_custom_action_timeout_in_mins</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetDaysOfWeek">reset_days_of_week</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetHoursOfDay">reset_hours_of_day</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetIsCustomActionTimeoutEnabled">reset_is_custom_action_timeout_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetIsMonthlyPatchingEnabled">reset_is_monthly_patching_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetLeadTimeInWeeks">reset_lead_time_in_weeks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetMonths">reset_months</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetPatchingMode">reset_patching_mode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetPreference">reset_preference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetSkipRu">reset_skip_ru</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetWeeksOfMonth">reset_weeks_of_month</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_days_of_week` <a name="put_days_of_week" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.putDaysOfWeek"></a>

```python
def put_days_of_week(
  value: typing.Union[IResolvable, typing.List[DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.putDaysOfWeek.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek">DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek</a>]]

---

##### `put_months` <a name="put_months" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.putMonths"></a>

```python
def put_months(
  value: typing.Union[IResolvable, typing.List[DatabaseDbSystemMaintenanceWindowDetailsMonths]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.putMonths.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths">DatabaseDbSystemMaintenanceWindowDetailsMonths</a>]]

---

##### `reset_custom_action_timeout_in_mins` <a name="reset_custom_action_timeout_in_mins" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetCustomActionTimeoutInMins"></a>

```python
def reset_custom_action_timeout_in_mins() -> None
```

##### `reset_days_of_week` <a name="reset_days_of_week" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetDaysOfWeek"></a>

```python
def reset_days_of_week() -> None
```

##### `reset_hours_of_day` <a name="reset_hours_of_day" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetHoursOfDay"></a>

```python
def reset_hours_of_day() -> None
```

##### `reset_is_custom_action_timeout_enabled` <a name="reset_is_custom_action_timeout_enabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetIsCustomActionTimeoutEnabled"></a>

```python
def reset_is_custom_action_timeout_enabled() -> None
```

##### `reset_is_monthly_patching_enabled` <a name="reset_is_monthly_patching_enabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetIsMonthlyPatchingEnabled"></a>

```python
def reset_is_monthly_patching_enabled() -> None
```

##### `reset_lead_time_in_weeks` <a name="reset_lead_time_in_weeks" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetLeadTimeInWeeks"></a>

```python
def reset_lead_time_in_weeks() -> None
```

##### `reset_months` <a name="reset_months" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetMonths"></a>

```python
def reset_months() -> None
```

##### `reset_patching_mode` <a name="reset_patching_mode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetPatchingMode"></a>

```python
def reset_patching_mode() -> None
```

##### `reset_preference` <a name="reset_preference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetPreference"></a>

```python
def reset_preference() -> None
```

##### `reset_skip_ru` <a name="reset_skip_ru" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetSkipRu"></a>

```python
def reset_skip_ru() -> None
```

##### `reset_weeks_of_month` <a name="reset_weeks_of_month" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetWeeksOfMonth"></a>

```python
def reset_weeks_of_month() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.daysOfWeek">days_of_week</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList">DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList">DatabaseDbSystemMaintenanceWindowDetailsMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMinsInput">custom_action_timeout_in_mins_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.daysOfWeekInput">days_of_week_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek">DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.hoursOfDayInput">hours_of_day_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabledInput">is_custom_action_timeout_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabledInput">is_monthly_patching_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeksInput">lead_time_in_weeks_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.monthsInput">months_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths">DatabaseDbSystemMaintenanceWindowDetailsMonths</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.patchingModeInput">patching_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.preferenceInput">preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.skipRuInput">skip_ru_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Union[bool, cdktf.IResolvable]]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.weeksOfMonthInput">weeks_of_month_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins">custom_action_timeout_in_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.hoursOfDay">hours_of_day</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled">is_custom_action_timeout_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled">is_monthly_patching_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks">lead_time_in_weeks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.patchingMode">patching_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.preference">preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.skipRu">skip_ru</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Union[bool, cdktf.IResolvable]]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.daysOfWeek"></a>

```python
days_of_week: DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList">DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList</a>

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.months"></a>

```python
months: DatabaseDbSystemMaintenanceWindowDetailsMonthsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList">DatabaseDbSystemMaintenanceWindowDetailsMonthsList</a>

---

##### `custom_action_timeout_in_mins_input`<sup>Optional</sup> <a name="custom_action_timeout_in_mins_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMinsInput"></a>

```python
custom_action_timeout_in_mins_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_of_week_input`<sup>Optional</sup> <a name="days_of_week_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.daysOfWeekInput"></a>

```python
days_of_week_input: typing.Union[IResolvable, typing.List[DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek">DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek</a>]]

---

##### `hours_of_day_input`<sup>Optional</sup> <a name="hours_of_day_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.hoursOfDayInput"></a>

```python
hours_of_day_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `is_custom_action_timeout_enabled_input`<sup>Optional</sup> <a name="is_custom_action_timeout_enabled_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabledInput"></a>

```python
is_custom_action_timeout_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_monthly_patching_enabled_input`<sup>Optional</sup> <a name="is_monthly_patching_enabled_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabledInput"></a>

```python
is_monthly_patching_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lead_time_in_weeks_input`<sup>Optional</sup> <a name="lead_time_in_weeks_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeksInput"></a>

```python
lead_time_in_weeks_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `months_input`<sup>Optional</sup> <a name="months_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.monthsInput"></a>

```python
months_input: typing.Union[IResolvable, typing.List[DatabaseDbSystemMaintenanceWindowDetailsMonths]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths">DatabaseDbSystemMaintenanceWindowDetailsMonths</a>]]

---

##### `patching_mode_input`<sup>Optional</sup> <a name="patching_mode_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.patchingModeInput"></a>

```python
patching_mode_input: str
```

- *Type:* str

---

##### `preference_input`<sup>Optional</sup> <a name="preference_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.preferenceInput"></a>

```python
preference_input: str
```

- *Type:* str

---

##### `skip_ru_input`<sup>Optional</sup> <a name="skip_ru_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.skipRuInput"></a>

```python
skip_ru_input: typing.Union[IResolvable, typing.List[typing.Union[bool, IResolvable]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Union[bool, cdktf.IResolvable]]]

---

##### `weeks_of_month_input`<sup>Optional</sup> <a name="weeks_of_month_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.weeksOfMonthInput"></a>

```python
weeks_of_month_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `custom_action_timeout_in_mins`<sup>Required</sup> <a name="custom_action_timeout_in_mins" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins"></a>

```python
custom_action_timeout_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours_of_day`<sup>Required</sup> <a name="hours_of_day" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.hoursOfDay"></a>

```python
hours_of_day: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `is_custom_action_timeout_enabled`<sup>Required</sup> <a name="is_custom_action_timeout_enabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled"></a>

```python
is_custom_action_timeout_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_monthly_patching_enabled`<sup>Required</sup> <a name="is_monthly_patching_enabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled"></a>

```python
is_monthly_patching_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lead_time_in_weeks`<sup>Required</sup> <a name="lead_time_in_weeks" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks"></a>

```python
lead_time_in_weeks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `patching_mode`<sup>Required</sup> <a name="patching_mode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.patchingMode"></a>

```python
patching_mode: str
```

- *Type:* str

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.preference"></a>

```python
preference: str
```

- *Type:* str

---

##### `skip_ru`<sup>Required</sup> <a name="skip_ru" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.skipRu"></a>

```python
skip_ru: typing.Union[IResolvable, typing.List[typing.Union[bool, IResolvable]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Union[bool, cdktf.IResolvable]]]

---

##### `weeks_of_month`<sup>Required</sup> <a name="weeks_of_month" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDbSystemMaintenanceWindowDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a>

---


### DatabaseDbSystemMaintenanceWindowList <a name="DatabaseDbSystemMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemMaintenanceWindowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseDbSystemMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseDbSystemMaintenanceWindowMonthsList <a name="DatabaseDbSystemMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseDbSystemMaintenanceWindowMonthsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseDbSystemMaintenanceWindowMonthsOutputReference <a name="DatabaseDbSystemMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonths">DatabaseDbSystemMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDbSystemMaintenanceWindowMonths
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonths">DatabaseDbSystemMaintenanceWindowMonths</a>

---


### DatabaseDbSystemMaintenanceWindowOutputReference <a name="DatabaseDbSystemMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.customActionTimeoutInMins">custom_action_timeout_in_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.daysOfWeek">days_of_week</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList">DatabaseDbSystemMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.hoursOfDay">hours_of_day</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">is_custom_action_timeout_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled">is_monthly_patching_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.leadTimeInWeeks">lead_time_in_weeks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList">DatabaseDbSystemMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.patchingMode">patching_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.skipRu">skip_ru</a></code> | <code>cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindow">DatabaseDbSystemMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_action_timeout_in_mins`<sup>Required</sup> <a name="custom_action_timeout_in_mins" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```python
custom_action_timeout_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```python
days_of_week: DatabaseDbSystemMaintenanceWindowDaysOfWeekList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList">DatabaseDbSystemMaintenanceWindowDaysOfWeekList</a>

---

##### `hours_of_day`<sup>Required</sup> <a name="hours_of_day" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```python
hours_of_day: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `is_custom_action_timeout_enabled`<sup>Required</sup> <a name="is_custom_action_timeout_enabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```python
is_custom_action_timeout_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_monthly_patching_enabled`<sup>Required</sup> <a name="is_monthly_patching_enabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled"></a>

```python
is_monthly_patching_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lead_time_in_weeks`<sup>Required</sup> <a name="lead_time_in_weeks" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```python
lead_time_in_weeks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.months"></a>

```python
months: DatabaseDbSystemMaintenanceWindowMonthsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList">DatabaseDbSystemMaintenanceWindowMonthsList</a>

---

##### `patching_mode`<sup>Required</sup> <a name="patching_mode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.patchingMode"></a>

```python
patching_mode: str
```

- *Type:* str

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.preference"></a>

```python
preference: str
```

- *Type:* str

---

##### `skip_ru`<sup>Required</sup> <a name="skip_ru" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.skipRu"></a>

```python
skip_ru: BooleanList
```

- *Type:* cdktf.BooleanList

---

##### `weeks_of_month`<sup>Required</sup> <a name="weeks_of_month" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDbSystemMaintenanceWindow
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindow">DatabaseDbSystemMaintenanceWindow</a>

---


### DatabaseDbSystemTimeoutsOutputReference <a name="DatabaseDbSystemTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_system

databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts">DatabaseDbSystemTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseDbSystemTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts">DatabaseDbSystemTimeouts</a>]

---



