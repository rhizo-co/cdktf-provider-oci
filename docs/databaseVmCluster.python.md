# `databaseVmCluster` Submodule <a name="`databaseVmCluster` Submodule" id="rhizo-co-terraform-provider-oci.databaseVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseVmCluster <a name="DatabaseVmCluster" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster oci_database_vm_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster

databaseVmCluster.DatabaseVmCluster(
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
  cpu_core_count: typing.Union[int, float],
  display_name: str,
  exadata_infrastructure_id: str,
  gi_version: str,
  ssh_public_keys: typing.List[str],
  vm_cluster_network_id: str,
  cloud_automation_update_details: DatabaseVmClusterCloudAutomationUpdateDetails = None,
  data_collection_options: DatabaseVmClusterDataCollectionOptions = None,
  data_storage_size_in_gb: typing.Union[int, float] = None,
  data_storage_size_in_tbs: typing.Union[int, float] = None,
  db_node_storage_size_in_gbs: typing.Union[int, float] = None,
  db_servers: typing.List[str] = None,
  defined_tags: typing.Mapping[str] = None,
  file_system_configuration_details: typing.Union[IResolvable, typing.List[DatabaseVmClusterFileSystemConfigurationDetails]] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_local_backup_enabled: typing.Union[bool, IResolvable] = None,
  is_sparse_diskgroup_enabled: typing.Union[bool, IResolvable] = None,
  license_model: str = None,
  memory_size_in_gbs: typing.Union[int, float] = None,
  ocpu_count: typing.Union[int, float] = None,
  system_version: str = None,
  timeouts: DatabaseVmClusterTimeouts = None,
  time_zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#compartment_id DatabaseVmCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#cpu_core_count DatabaseVmCluster#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#display_name DatabaseVmCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.exadataInfrastructureId">exadata_infrastructure_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#exadata_infrastructure_id DatabaseVmCluster#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.giVersion">gi_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#gi_version DatabaseVmCluster#gi_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#ssh_public_keys DatabaseVmCluster#ssh_public_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.vmClusterNetworkId">vm_cluster_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#vm_cluster_network_id DatabaseVmCluster#vm_cluster_network_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.cloudAutomationUpdateDetails">cloud_automation_update_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails">DatabaseVmClusterCloudAutomationUpdateDetails</a></code> | cloud_automation_update_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions">DatabaseVmClusterDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.dataStorageSizeInGb">data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#data_storage_size_in_gb DatabaseVmCluster#data_storage_size_in_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.dataStorageSizeInTbs">data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#data_storage_size_in_tbs DatabaseVmCluster#data_storage_size_in_tbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.dbNodeStorageSizeInGbs">db_node_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#db_node_storage_size_in_gbs DatabaseVmCluster#db_node_storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.dbServers">db_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#db_servers DatabaseVmCluster#db_servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#defined_tags DatabaseVmCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.fileSystemConfigurationDetails">file_system_configuration_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>]]</code> | file_system_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#freeform_tags DatabaseVmCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#id DatabaseVmCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.isLocalBackupEnabled">is_local_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_local_backup_enabled DatabaseVmCluster#is_local_backup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.isSparseDiskgroupEnabled">is_sparse_diskgroup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_sparse_diskgroup_enabled DatabaseVmCluster#is_sparse_diskgroup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#license_model DatabaseVmCluster#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.memorySizeInGbs">memory_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#memory_size_in_gbs DatabaseVmCluster#memory_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.ocpuCount">ocpu_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#ocpu_count DatabaseVmCluster#ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.systemVersion">system_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#system_version DatabaseVmCluster#system_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts">DatabaseVmClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#time_zone DatabaseVmCluster#time_zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#compartment_id DatabaseVmCluster#compartment_id}.

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.cpuCoreCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#cpu_core_count DatabaseVmCluster#cpu_core_count}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#display_name DatabaseVmCluster#display_name}.

---

##### `exadata_infrastructure_id`<sup>Required</sup> <a name="exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.exadataInfrastructureId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#exadata_infrastructure_id DatabaseVmCluster#exadata_infrastructure_id}.

---

##### `gi_version`<sup>Required</sup> <a name="gi_version" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.giVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#gi_version DatabaseVmCluster#gi_version}.

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.sshPublicKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#ssh_public_keys DatabaseVmCluster#ssh_public_keys}.

---

##### `vm_cluster_network_id`<sup>Required</sup> <a name="vm_cluster_network_id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.vmClusterNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#vm_cluster_network_id DatabaseVmCluster#vm_cluster_network_id}.

---

##### `cloud_automation_update_details`<sup>Optional</sup> <a name="cloud_automation_update_details" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.cloudAutomationUpdateDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails">DatabaseVmClusterCloudAutomationUpdateDetails</a>

cloud_automation_update_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#cloud_automation_update_details DatabaseVmCluster#cloud_automation_update_details}

---

##### `data_collection_options`<sup>Optional</sup> <a name="data_collection_options" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.dataCollectionOptions"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions">DatabaseVmClusterDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#data_collection_options DatabaseVmCluster#data_collection_options}

---

##### `data_storage_size_in_gb`<sup>Optional</sup> <a name="data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.dataStorageSizeInGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#data_storage_size_in_gb DatabaseVmCluster#data_storage_size_in_gb}.

---

##### `data_storage_size_in_tbs`<sup>Optional</sup> <a name="data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.dataStorageSizeInTbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#data_storage_size_in_tbs DatabaseVmCluster#data_storage_size_in_tbs}.

---

##### `db_node_storage_size_in_gbs`<sup>Optional</sup> <a name="db_node_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.dbNodeStorageSizeInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#db_node_storage_size_in_gbs DatabaseVmCluster#db_node_storage_size_in_gbs}.

---

##### `db_servers`<sup>Optional</sup> <a name="db_servers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.dbServers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#db_servers DatabaseVmCluster#db_servers}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#defined_tags DatabaseVmCluster#defined_tags}.

---

##### `file_system_configuration_details`<sup>Optional</sup> <a name="file_system_configuration_details" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.fileSystemConfigurationDetails"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>]]

file_system_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#file_system_configuration_details DatabaseVmCluster#file_system_configuration_details}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#freeform_tags DatabaseVmCluster#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#id DatabaseVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_local_backup_enabled`<sup>Optional</sup> <a name="is_local_backup_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.isLocalBackupEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_local_backup_enabled DatabaseVmCluster#is_local_backup_enabled}.

---

##### `is_sparse_diskgroup_enabled`<sup>Optional</sup> <a name="is_sparse_diskgroup_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.isSparseDiskgroupEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_sparse_diskgroup_enabled DatabaseVmCluster#is_sparse_diskgroup_enabled}.

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.licenseModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#license_model DatabaseVmCluster#license_model}.

---

##### `memory_size_in_gbs`<sup>Optional</sup> <a name="memory_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.memorySizeInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#memory_size_in_gbs DatabaseVmCluster#memory_size_in_gbs}.

---

##### `ocpu_count`<sup>Optional</sup> <a name="ocpu_count" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.ocpuCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#ocpu_count DatabaseVmCluster#ocpu_count}.

---

##### `system_version`<sup>Optional</sup> <a name="system_version" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.systemVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#system_version DatabaseVmCluster#system_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts">DatabaseVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#timeouts DatabaseVmCluster#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.timeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#time_zone DatabaseVmCluster#time_zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putCloudAutomationUpdateDetails">put_cloud_automation_update_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putDataCollectionOptions">put_data_collection_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putFileSystemConfigurationDetails">put_file_system_configuration_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetCloudAutomationUpdateDetails">reset_cloud_automation_update_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDataCollectionOptions">reset_data_collection_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDataStorageSizeInGb">reset_data_storage_size_in_gb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDataStorageSizeInTbs">reset_data_storage_size_in_tbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDbNodeStorageSizeInGbs">reset_db_node_storage_size_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDbServers">reset_db_servers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetFileSystemConfigurationDetails">reset_file_system_configuration_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetIsLocalBackupEnabled">reset_is_local_backup_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetIsSparseDiskgroupEnabled">reset_is_sparse_diskgroup_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetLicenseModel">reset_license_model</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetMemorySizeInGbs">reset_memory_size_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetOcpuCount">reset_ocpu_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetSystemVersion">reset_system_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cloud_automation_update_details` <a name="put_cloud_automation_update_details" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putCloudAutomationUpdateDetails"></a>

```python
def put_cloud_automation_update_details(
  apply_update_time_preference: DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference = None,
  freeze_period: DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod = None,
  is_early_adoption_enabled: typing.Union[bool, IResolvable] = None,
  is_freeze_period_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `apply_update_time_preference`<sup>Optional</sup> <a name="apply_update_time_preference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putCloudAutomationUpdateDetails.parameter.applyUpdateTimePreference"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

apply_update_time_preference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#apply_update_time_preference DatabaseVmCluster#apply_update_time_preference}

---

###### `freeze_period`<sup>Optional</sup> <a name="freeze_period" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putCloudAutomationUpdateDetails.parameter.freezePeriod"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod</a>

freeze_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#freeze_period DatabaseVmCluster#freeze_period}

---

###### `is_early_adoption_enabled`<sup>Optional</sup> <a name="is_early_adoption_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putCloudAutomationUpdateDetails.parameter.isEarlyAdoptionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_early_adoption_enabled DatabaseVmCluster#is_early_adoption_enabled}.

---

###### `is_freeze_period_enabled`<sup>Optional</sup> <a name="is_freeze_period_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putCloudAutomationUpdateDetails.parameter.isFreezePeriodEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_freeze_period_enabled DatabaseVmCluster#is_freeze_period_enabled}.

---

##### `put_data_collection_options` <a name="put_data_collection_options" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putDataCollectionOptions"></a>

```python
def put_data_collection_options(
  is_diagnostics_events_enabled: typing.Union[bool, IResolvable] = None,
  is_health_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  is_incident_logs_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `is_diagnostics_events_enabled`<sup>Optional</sup> <a name="is_diagnostics_events_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putDataCollectionOptions.parameter.isDiagnosticsEventsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_diagnostics_events_enabled DatabaseVmCluster#is_diagnostics_events_enabled}.

---

###### `is_health_monitoring_enabled`<sup>Optional</sup> <a name="is_health_monitoring_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putDataCollectionOptions.parameter.isHealthMonitoringEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_health_monitoring_enabled DatabaseVmCluster#is_health_monitoring_enabled}.

---

###### `is_incident_logs_enabled`<sup>Optional</sup> <a name="is_incident_logs_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putDataCollectionOptions.parameter.isIncidentLogsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_incident_logs_enabled DatabaseVmCluster#is_incident_logs_enabled}.

---

##### `put_file_system_configuration_details` <a name="put_file_system_configuration_details" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putFileSystemConfigurationDetails"></a>

```python
def put_file_system_configuration_details(
  value: typing.Union[IResolvable, typing.List[DatabaseVmClusterFileSystemConfigurationDetails]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putFileSystemConfigurationDetails.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#create DatabaseVmCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#delete DatabaseVmCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#update DatabaseVmCluster#update}.

---

##### `reset_cloud_automation_update_details` <a name="reset_cloud_automation_update_details" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetCloudAutomationUpdateDetails"></a>

```python
def reset_cloud_automation_update_details() -> None
```

##### `reset_data_collection_options` <a name="reset_data_collection_options" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDataCollectionOptions"></a>

```python
def reset_data_collection_options() -> None
```

##### `reset_data_storage_size_in_gb` <a name="reset_data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDataStorageSizeInGb"></a>

```python
def reset_data_storage_size_in_gb() -> None
```

##### `reset_data_storage_size_in_tbs` <a name="reset_data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDataStorageSizeInTbs"></a>

```python
def reset_data_storage_size_in_tbs() -> None
```

##### `reset_db_node_storage_size_in_gbs` <a name="reset_db_node_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDbNodeStorageSizeInGbs"></a>

```python
def reset_db_node_storage_size_in_gbs() -> None
```

##### `reset_db_servers` <a name="reset_db_servers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDbServers"></a>

```python
def reset_db_servers() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_file_system_configuration_details` <a name="reset_file_system_configuration_details" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetFileSystemConfigurationDetails"></a>

```python
def reset_file_system_configuration_details() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_local_backup_enabled` <a name="reset_is_local_backup_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetIsLocalBackupEnabled"></a>

```python
def reset_is_local_backup_enabled() -> None
```

##### `reset_is_sparse_diskgroup_enabled` <a name="reset_is_sparse_diskgroup_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetIsSparseDiskgroupEnabled"></a>

```python
def reset_is_sparse_diskgroup_enabled() -> None
```

##### `reset_license_model` <a name="reset_license_model" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetLicenseModel"></a>

```python
def reset_license_model() -> None
```

##### `reset_memory_size_in_gbs` <a name="reset_memory_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetMemorySizeInGbs"></a>

```python
def reset_memory_size_in_gbs() -> None
```

##### `reset_ocpu_count` <a name="reset_ocpu_count" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetOcpuCount"></a>

```python
def reset_ocpu_count() -> None
```

##### `reset_system_version` <a name="reset_system_version" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetSystemVersion"></a>

```python
def reset_system_version() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseVmCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster

databaseVmCluster.DatabaseVmCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster

databaseVmCluster.DatabaseVmCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster

databaseVmCluster.DatabaseVmCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster

databaseVmCluster.DatabaseVmCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseVmCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseVmCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cloudAutomationUpdateDetails">cloud_automation_update_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference">DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cpusEnabled">cpus_enabled</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference">DatabaseVmClusterDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.fileSystemConfigurationDetails">file_system_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList">DatabaseVmClusterFileSystemConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.lastPatchHistoryEntryId">last_patch_history_entry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.ocpusEnabled">ocpus_enabled</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference">DatabaseVmClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cloudAutomationUpdateDetailsInput">cloud_automation_update_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails">DatabaseVmClusterCloudAutomationUpdateDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cpuCoreCountInput">cpu_core_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataCollectionOptionsInput">data_collection_options_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions">DatabaseVmClusterDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataStorageSizeInGbInput">data_storage_size_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataStorageSizeInTbsInput">data_storage_size_in_tbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dbNodeStorageSizeInGbsInput">db_node_storage_size_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dbServersInput">db_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.exadataInfrastructureIdInput">exadata_infrastructure_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.fileSystemConfigurationDetailsInput">file_system_configuration_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.giVersionInput">gi_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.isLocalBackupEnabledInput">is_local_backup_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.isSparseDiskgroupEnabledInput">is_sparse_diskgroup_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.licenseModelInput">license_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.memorySizeInGbsInput">memory_size_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.ocpuCountInput">ocpu_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.sshPublicKeysInput">ssh_public_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.systemVersionInput">system_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts">DatabaseVmClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.vmClusterNetworkIdInput">vm_cluster_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataStorageSizeInGb">data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataStorageSizeInTbs">data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dbNodeStorageSizeInGbs">db_node_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dbServers">db_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.exadataInfrastructureId">exadata_infrastructure_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.giVersion">gi_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.isLocalBackupEnabled">is_local_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.isSparseDiskgroupEnabled">is_sparse_diskgroup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.memorySizeInGbs">memory_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.ocpuCount">ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.systemVersion">system_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.vmClusterNetworkId">vm_cluster_network_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `cloud_automation_update_details`<sup>Required</sup> <a name="cloud_automation_update_details" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cloudAutomationUpdateDetails"></a>

```python
cloud_automation_update_details: DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference">DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference</a>

---

##### `cpus_enabled`<sup>Required</sup> <a name="cpus_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cpusEnabled"></a>

```python
cpus_enabled: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_collection_options`<sup>Required</sup> <a name="data_collection_options" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataCollectionOptions"></a>

```python
data_collection_options: DatabaseVmClusterDataCollectionOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference">DatabaseVmClusterDataCollectionOptionsOutputReference</a>

---

##### `file_system_configuration_details`<sup>Required</sup> <a name="file_system_configuration_details" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.fileSystemConfigurationDetails"></a>

```python
file_system_configuration_details: DatabaseVmClusterFileSystemConfigurationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList">DatabaseVmClusterFileSystemConfigurationDetailsList</a>

---

##### `last_patch_history_entry_id`<sup>Required</sup> <a name="last_patch_history_entry_id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.lastPatchHistoryEntryId"></a>

```python
last_patch_history_entry_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `ocpus_enabled`<sup>Required</sup> <a name="ocpus_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.ocpusEnabled"></a>

```python
ocpus_enabled: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeouts"></a>

```python
timeouts: DatabaseVmClusterTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference">DatabaseVmClusterTimeoutsOutputReference</a>

---

##### `cloud_automation_update_details_input`<sup>Optional</sup> <a name="cloud_automation_update_details_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cloudAutomationUpdateDetailsInput"></a>

```python
cloud_automation_update_details_input: DatabaseVmClusterCloudAutomationUpdateDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails">DatabaseVmClusterCloudAutomationUpdateDetails</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `cpu_core_count_input`<sup>Optional</sup> <a name="cpu_core_count_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cpuCoreCountInput"></a>

```python
cpu_core_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_collection_options_input`<sup>Optional</sup> <a name="data_collection_options_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataCollectionOptionsInput"></a>

```python
data_collection_options_input: DatabaseVmClusterDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions">DatabaseVmClusterDataCollectionOptions</a>

---

##### `data_storage_size_in_gb_input`<sup>Optional</sup> <a name="data_storage_size_in_gb_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataStorageSizeInGbInput"></a>

```python
data_storage_size_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_tbs_input`<sup>Optional</sup> <a name="data_storage_size_in_tbs_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataStorageSizeInTbsInput"></a>

```python
data_storage_size_in_tbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_node_storage_size_in_gbs_input`<sup>Optional</sup> <a name="db_node_storage_size_in_gbs_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dbNodeStorageSizeInGbsInput"></a>

```python
db_node_storage_size_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_servers_input`<sup>Optional</sup> <a name="db_servers_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dbServersInput"></a>

```python
db_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `exadata_infrastructure_id_input`<sup>Optional</sup> <a name="exadata_infrastructure_id_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.exadataInfrastructureIdInput"></a>

```python
exadata_infrastructure_id_input: str
```

- *Type:* str

---

##### `file_system_configuration_details_input`<sup>Optional</sup> <a name="file_system_configuration_details_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.fileSystemConfigurationDetailsInput"></a>

```python
file_system_configuration_details_input: typing.Union[IResolvable, typing.List[DatabaseVmClusterFileSystemConfigurationDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>]]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `gi_version_input`<sup>Optional</sup> <a name="gi_version_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.giVersionInput"></a>

```python
gi_version_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_local_backup_enabled_input`<sup>Optional</sup> <a name="is_local_backup_enabled_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.isLocalBackupEnabledInput"></a>

```python
is_local_backup_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_sparse_diskgroup_enabled_input`<sup>Optional</sup> <a name="is_sparse_diskgroup_enabled_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.isSparseDiskgroupEnabledInput"></a>

```python
is_sparse_diskgroup_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `license_model_input`<sup>Optional</sup> <a name="license_model_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.licenseModelInput"></a>

```python
license_model_input: str
```

- *Type:* str

---

##### `memory_size_in_gbs_input`<sup>Optional</sup> <a name="memory_size_in_gbs_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.memorySizeInGbsInput"></a>

```python
memory_size_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpu_count_input`<sup>Optional</sup> <a name="ocpu_count_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.ocpuCountInput"></a>

```python
ocpu_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssh_public_keys_input`<sup>Optional</sup> <a name="ssh_public_keys_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.sshPublicKeysInput"></a>

```python
ssh_public_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `system_version_input`<sup>Optional</sup> <a name="system_version_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.systemVersionInput"></a>

```python
system_version_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseVmClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts">DatabaseVmClusterTimeouts</a>]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `vm_cluster_network_id_input`<sup>Optional</sup> <a name="vm_cluster_network_id_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.vmClusterNetworkIdInput"></a>

```python
vm_cluster_network_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_gb`<sup>Required</sup> <a name="data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataStorageSizeInGb"></a>

```python
data_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_tbs`<sup>Required</sup> <a name="data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataStorageSizeInTbs"></a>

```python
data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_node_storage_size_in_gbs`<sup>Required</sup> <a name="db_node_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dbNodeStorageSizeInGbs"></a>

```python
db_node_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_servers`<sup>Required</sup> <a name="db_servers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dbServers"></a>

```python
db_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `exadata_infrastructure_id`<sup>Required</sup> <a name="exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.exadataInfrastructureId"></a>

```python
exadata_infrastructure_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `gi_version`<sup>Required</sup> <a name="gi_version" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.giVersion"></a>

```python
gi_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_local_backup_enabled`<sup>Required</sup> <a name="is_local_backup_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.isLocalBackupEnabled"></a>

```python
is_local_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_sparse_diskgroup_enabled`<sup>Required</sup> <a name="is_sparse_diskgroup_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.isSparseDiskgroupEnabled"></a>

```python
is_sparse_diskgroup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `memory_size_in_gbs`<sup>Required</sup> <a name="memory_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.memorySizeInGbs"></a>

```python
memory_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpu_count`<sup>Required</sup> <a name="ocpu_count" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.ocpuCount"></a>

```python
ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `system_version`<sup>Required</sup> <a name="system_version" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.systemVersion"></a>

```python
system_version: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `vm_cluster_network_id`<sup>Required</sup> <a name="vm_cluster_network_id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.vmClusterNetworkId"></a>

```python
vm_cluster_network_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseVmClusterCloudAutomationUpdateDetails <a name="DatabaseVmClusterCloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster

databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails(
  apply_update_time_preference: DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference = None,
  freeze_period: DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod = None,
  is_early_adoption_enabled: typing.Union[bool, IResolvable] = None,
  is_freeze_period_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails.property.applyUpdateTimePreference">apply_update_time_preference</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a></code> | apply_update_time_preference block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails.property.freezePeriod">freeze_period</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod</a></code> | freeze_period block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails.property.isEarlyAdoptionEnabled">is_early_adoption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_early_adoption_enabled DatabaseVmCluster#is_early_adoption_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails.property.isFreezePeriodEnabled">is_freeze_period_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_freeze_period_enabled DatabaseVmCluster#is_freeze_period_enabled}. |

---

##### `apply_update_time_preference`<sup>Optional</sup> <a name="apply_update_time_preference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails.property.applyUpdateTimePreference"></a>

```python
apply_update_time_preference: DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

apply_update_time_preference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#apply_update_time_preference DatabaseVmCluster#apply_update_time_preference}

---

##### `freeze_period`<sup>Optional</sup> <a name="freeze_period" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails.property.freezePeriod"></a>

```python
freeze_period: DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod</a>

freeze_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#freeze_period DatabaseVmCluster#freeze_period}

---

##### `is_early_adoption_enabled`<sup>Optional</sup> <a name="is_early_adoption_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails.property.isEarlyAdoptionEnabled"></a>

```python
is_early_adoption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_early_adoption_enabled DatabaseVmCluster#is_early_adoption_enabled}.

---

##### `is_freeze_period_enabled`<sup>Optional</sup> <a name="is_freeze_period_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails.property.isFreezePeriodEnabled"></a>

```python
is_freeze_period_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_freeze_period_enabled DatabaseVmCluster#is_freeze_period_enabled}.

---

### DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference <a name="DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster

databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference(
  apply_update_preferred_end_time: str = None,
  apply_update_preferred_start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.property.applyUpdatePreferredEndTime">apply_update_preferred_end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#apply_update_preferred_end_time DatabaseVmCluster#apply_update_preferred_end_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.property.applyUpdatePreferredStartTime">apply_update_preferred_start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#apply_update_preferred_start_time DatabaseVmCluster#apply_update_preferred_start_time}. |

---

##### `apply_update_preferred_end_time`<sup>Optional</sup> <a name="apply_update_preferred_end_time" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.property.applyUpdatePreferredEndTime"></a>

```python
apply_update_preferred_end_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#apply_update_preferred_end_time DatabaseVmCluster#apply_update_preferred_end_time}.

---

##### `apply_update_preferred_start_time`<sup>Optional</sup> <a name="apply_update_preferred_start_time" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.property.applyUpdatePreferredStartTime"></a>

```python
apply_update_preferred_start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#apply_update_preferred_start_time DatabaseVmCluster#apply_update_preferred_start_time}.

---

### DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod <a name="DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster

databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod(
  freeze_period_end_time: str = None,
  freeze_period_start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod.property.freezePeriodEndTime">freeze_period_end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#freeze_period_end_time DatabaseVmCluster#freeze_period_end_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod.property.freezePeriodStartTime">freeze_period_start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#freeze_period_start_time DatabaseVmCluster#freeze_period_start_time}. |

---

##### `freeze_period_end_time`<sup>Optional</sup> <a name="freeze_period_end_time" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod.property.freezePeriodEndTime"></a>

```python
freeze_period_end_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#freeze_period_end_time DatabaseVmCluster#freeze_period_end_time}.

---

##### `freeze_period_start_time`<sup>Optional</sup> <a name="freeze_period_start_time" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod.property.freezePeriodStartTime"></a>

```python
freeze_period_start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#freeze_period_start_time DatabaseVmCluster#freeze_period_start_time}.

---

### DatabaseVmClusterConfig <a name="DatabaseVmClusterConfig" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster

databaseVmCluster.DatabaseVmClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  cpu_core_count: typing.Union[int, float],
  display_name: str,
  exadata_infrastructure_id: str,
  gi_version: str,
  ssh_public_keys: typing.List[str],
  vm_cluster_network_id: str,
  cloud_automation_update_details: DatabaseVmClusterCloudAutomationUpdateDetails = None,
  data_collection_options: DatabaseVmClusterDataCollectionOptions = None,
  data_storage_size_in_gb: typing.Union[int, float] = None,
  data_storage_size_in_tbs: typing.Union[int, float] = None,
  db_node_storage_size_in_gbs: typing.Union[int, float] = None,
  db_servers: typing.List[str] = None,
  defined_tags: typing.Mapping[str] = None,
  file_system_configuration_details: typing.Union[IResolvable, typing.List[DatabaseVmClusterFileSystemConfigurationDetails]] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_local_backup_enabled: typing.Union[bool, IResolvable] = None,
  is_sparse_diskgroup_enabled: typing.Union[bool, IResolvable] = None,
  license_model: str = None,
  memory_size_in_gbs: typing.Union[int, float] = None,
  ocpu_count: typing.Union[int, float] = None,
  system_version: str = None,
  timeouts: DatabaseVmClusterTimeouts = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#compartment_id DatabaseVmCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#cpu_core_count DatabaseVmCluster#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#display_name DatabaseVmCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.exadataInfrastructureId">exadata_infrastructure_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#exadata_infrastructure_id DatabaseVmCluster#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.giVersion">gi_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#gi_version DatabaseVmCluster#gi_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#ssh_public_keys DatabaseVmCluster#ssh_public_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.vmClusterNetworkId">vm_cluster_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#vm_cluster_network_id DatabaseVmCluster#vm_cluster_network_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.cloudAutomationUpdateDetails">cloud_automation_update_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails">DatabaseVmClusterCloudAutomationUpdateDetails</a></code> | cloud_automation_update_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions">DatabaseVmClusterDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dataStorageSizeInGb">data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#data_storage_size_in_gb DatabaseVmCluster#data_storage_size_in_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dataStorageSizeInTbs">data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#data_storage_size_in_tbs DatabaseVmCluster#data_storage_size_in_tbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dbNodeStorageSizeInGbs">db_node_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#db_node_storage_size_in_gbs DatabaseVmCluster#db_node_storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dbServers">db_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#db_servers DatabaseVmCluster#db_servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#defined_tags DatabaseVmCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.fileSystemConfigurationDetails">file_system_configuration_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>]]</code> | file_system_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#freeform_tags DatabaseVmCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#id DatabaseVmCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.isLocalBackupEnabled">is_local_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_local_backup_enabled DatabaseVmCluster#is_local_backup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.isSparseDiskgroupEnabled">is_sparse_diskgroup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_sparse_diskgroup_enabled DatabaseVmCluster#is_sparse_diskgroup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#license_model DatabaseVmCluster#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.memorySizeInGbs">memory_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#memory_size_in_gbs DatabaseVmCluster#memory_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.ocpuCount">ocpu_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#ocpu_count DatabaseVmCluster#ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.systemVersion">system_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#system_version DatabaseVmCluster#system_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts">DatabaseVmClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#time_zone DatabaseVmCluster#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#compartment_id DatabaseVmCluster#compartment_id}.

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#cpu_core_count DatabaseVmCluster#cpu_core_count}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#display_name DatabaseVmCluster#display_name}.

---

##### `exadata_infrastructure_id`<sup>Required</sup> <a name="exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.exadataInfrastructureId"></a>

```python
exadata_infrastructure_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#exadata_infrastructure_id DatabaseVmCluster#exadata_infrastructure_id}.

---

##### `gi_version`<sup>Required</sup> <a name="gi_version" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.giVersion"></a>

```python
gi_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#gi_version DatabaseVmCluster#gi_version}.

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#ssh_public_keys DatabaseVmCluster#ssh_public_keys}.

---

##### `vm_cluster_network_id`<sup>Required</sup> <a name="vm_cluster_network_id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.vmClusterNetworkId"></a>

```python
vm_cluster_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#vm_cluster_network_id DatabaseVmCluster#vm_cluster_network_id}.

---

##### `cloud_automation_update_details`<sup>Optional</sup> <a name="cloud_automation_update_details" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.cloudAutomationUpdateDetails"></a>

```python
cloud_automation_update_details: DatabaseVmClusterCloudAutomationUpdateDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails">DatabaseVmClusterCloudAutomationUpdateDetails</a>

cloud_automation_update_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#cloud_automation_update_details DatabaseVmCluster#cloud_automation_update_details}

---

##### `data_collection_options`<sup>Optional</sup> <a name="data_collection_options" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dataCollectionOptions"></a>

```python
data_collection_options: DatabaseVmClusterDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions">DatabaseVmClusterDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#data_collection_options DatabaseVmCluster#data_collection_options}

---

##### `data_storage_size_in_gb`<sup>Optional</sup> <a name="data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dataStorageSizeInGb"></a>

```python
data_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#data_storage_size_in_gb DatabaseVmCluster#data_storage_size_in_gb}.

---

##### `data_storage_size_in_tbs`<sup>Optional</sup> <a name="data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dataStorageSizeInTbs"></a>

```python
data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#data_storage_size_in_tbs DatabaseVmCluster#data_storage_size_in_tbs}.

---

##### `db_node_storage_size_in_gbs`<sup>Optional</sup> <a name="db_node_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dbNodeStorageSizeInGbs"></a>

```python
db_node_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#db_node_storage_size_in_gbs DatabaseVmCluster#db_node_storage_size_in_gbs}.

---

##### `db_servers`<sup>Optional</sup> <a name="db_servers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dbServers"></a>

```python
db_servers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#db_servers DatabaseVmCluster#db_servers}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#defined_tags DatabaseVmCluster#defined_tags}.

---

##### `file_system_configuration_details`<sup>Optional</sup> <a name="file_system_configuration_details" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.fileSystemConfigurationDetails"></a>

```python
file_system_configuration_details: typing.Union[IResolvable, typing.List[DatabaseVmClusterFileSystemConfigurationDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>]]

file_system_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#file_system_configuration_details DatabaseVmCluster#file_system_configuration_details}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#freeform_tags DatabaseVmCluster#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#id DatabaseVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_local_backup_enabled`<sup>Optional</sup> <a name="is_local_backup_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.isLocalBackupEnabled"></a>

```python
is_local_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_local_backup_enabled DatabaseVmCluster#is_local_backup_enabled}.

---

##### `is_sparse_diskgroup_enabled`<sup>Optional</sup> <a name="is_sparse_diskgroup_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.isSparseDiskgroupEnabled"></a>

```python
is_sparse_diskgroup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_sparse_diskgroup_enabled DatabaseVmCluster#is_sparse_diskgroup_enabled}.

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#license_model DatabaseVmCluster#license_model}.

---

##### `memory_size_in_gbs`<sup>Optional</sup> <a name="memory_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.memorySizeInGbs"></a>

```python
memory_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#memory_size_in_gbs DatabaseVmCluster#memory_size_in_gbs}.

---

##### `ocpu_count`<sup>Optional</sup> <a name="ocpu_count" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.ocpuCount"></a>

```python
ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#ocpu_count DatabaseVmCluster#ocpu_count}.

---

##### `system_version`<sup>Optional</sup> <a name="system_version" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.systemVersion"></a>

```python
system_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#system_version DatabaseVmCluster#system_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.timeouts"></a>

```python
timeouts: DatabaseVmClusterTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts">DatabaseVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#timeouts DatabaseVmCluster#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#time_zone DatabaseVmCluster#time_zone}.

---

### DatabaseVmClusterDataCollectionOptions <a name="DatabaseVmClusterDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster

databaseVmCluster.DatabaseVmClusterDataCollectionOptions(
  is_diagnostics_events_enabled: typing.Union[bool, IResolvable] = None,
  is_health_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  is_incident_logs_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions.property.isDiagnosticsEventsEnabled">is_diagnostics_events_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_diagnostics_events_enabled DatabaseVmCluster#is_diagnostics_events_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions.property.isHealthMonitoringEnabled">is_health_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_health_monitoring_enabled DatabaseVmCluster#is_health_monitoring_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions.property.isIncidentLogsEnabled">is_incident_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_incident_logs_enabled DatabaseVmCluster#is_incident_logs_enabled}. |

---

##### `is_diagnostics_events_enabled`<sup>Optional</sup> <a name="is_diagnostics_events_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```python
is_diagnostics_events_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_diagnostics_events_enabled DatabaseVmCluster#is_diagnostics_events_enabled}.

---

##### `is_health_monitoring_enabled`<sup>Optional</sup> <a name="is_health_monitoring_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```python
is_health_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_health_monitoring_enabled DatabaseVmCluster#is_health_monitoring_enabled}.

---

##### `is_incident_logs_enabled`<sup>Optional</sup> <a name="is_incident_logs_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```python
is_incident_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_incident_logs_enabled DatabaseVmCluster#is_incident_logs_enabled}.

---

### DatabaseVmClusterFileSystemConfigurationDetails <a name="DatabaseVmClusterFileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster

databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails(
  file_system_size_gb: typing.Union[int, float] = None,
  mount_point: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails.property.fileSystemSizeGb">file_system_size_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#file_system_size_gb DatabaseVmCluster#file_system_size_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails.property.mountPoint">mount_point</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#mount_point DatabaseVmCluster#mount_point}. |

---

##### `file_system_size_gb`<sup>Optional</sup> <a name="file_system_size_gb" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails.property.fileSystemSizeGb"></a>

```python
file_system_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#file_system_size_gb DatabaseVmCluster#file_system_size_gb}.

---

##### `mount_point`<sup>Optional</sup> <a name="mount_point" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#mount_point DatabaseVmCluster#mount_point}.

---

### DatabaseVmClusterTimeouts <a name="DatabaseVmClusterTimeouts" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster

databaseVmCluster.DatabaseVmClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#create DatabaseVmCluster#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#delete DatabaseVmCluster#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#update DatabaseVmCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#create DatabaseVmCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#delete DatabaseVmCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#update DatabaseVmCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference <a name="DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster

databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resetApplyUpdatePreferredEndTime">reset_apply_update_preferred_end_time</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resetApplyUpdatePreferredStartTime">reset_apply_update_preferred_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_apply_update_preferred_end_time` <a name="reset_apply_update_preferred_end_time" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resetApplyUpdatePreferredEndTime"></a>

```python
def reset_apply_update_preferred_end_time() -> None
```

##### `reset_apply_update_preferred_start_time` <a name="reset_apply_update_preferred_start_time" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resetApplyUpdatePreferredStartTime"></a>

```python
def reset_apply_update_preferred_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTimeInput">apply_update_preferred_end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTimeInput">apply_update_preferred_start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTime">apply_update_preferred_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTime">apply_update_preferred_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apply_update_preferred_end_time_input`<sup>Optional</sup> <a name="apply_update_preferred_end_time_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTimeInput"></a>

```python
apply_update_preferred_end_time_input: str
```

- *Type:* str

---

##### `apply_update_preferred_start_time_input`<sup>Optional</sup> <a name="apply_update_preferred_start_time_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTimeInput"></a>

```python
apply_update_preferred_start_time_input: str
```

- *Type:* str

---

##### `apply_update_preferred_end_time`<sup>Required</sup> <a name="apply_update_preferred_end_time" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTime"></a>

```python
apply_update_preferred_end_time: str
```

- *Type:* str

---

##### `apply_update_preferred_start_time`<sup>Required</sup> <a name="apply_update_preferred_start_time" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTime"></a>

```python
apply_update_preferred_start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

---


### DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference <a name="DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster

databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resetFreezePeriodEndTime">reset_freeze_period_end_time</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resetFreezePeriodStartTime">reset_freeze_period_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_freeze_period_end_time` <a name="reset_freeze_period_end_time" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resetFreezePeriodEndTime"></a>

```python
def reset_freeze_period_end_time() -> None
```

##### `reset_freeze_period_start_time` <a name="reset_freeze_period_start_time" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resetFreezePeriodStartTime"></a>

```python
def reset_freeze_period_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTimeInput">freeze_period_end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTimeInput">freeze_period_start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTime">freeze_period_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTime">freeze_period_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `freeze_period_end_time_input`<sup>Optional</sup> <a name="freeze_period_end_time_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTimeInput"></a>

```python
freeze_period_end_time_input: str
```

- *Type:* str

---

##### `freeze_period_start_time_input`<sup>Optional</sup> <a name="freeze_period_start_time_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTimeInput"></a>

```python
freeze_period_start_time_input: str
```

- *Type:* str

---

##### `freeze_period_end_time`<sup>Required</sup> <a name="freeze_period_end_time" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTime"></a>

```python
freeze_period_end_time: str
```

- *Type:* str

---

##### `freeze_period_start_time`<sup>Required</sup> <a name="freeze_period_start_time" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTime"></a>

```python
freeze_period_start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod</a>

---


### DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference <a name="DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster

databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.putApplyUpdateTimePreference">put_apply_update_time_preference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.putFreezePeriod">put_freeze_period</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resetApplyUpdateTimePreference">reset_apply_update_time_preference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resetFreezePeriod">reset_freeze_period</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resetIsEarlyAdoptionEnabled">reset_is_early_adoption_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resetIsFreezePeriodEnabled">reset_is_freeze_period_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_apply_update_time_preference` <a name="put_apply_update_time_preference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.putApplyUpdateTimePreference"></a>

```python
def put_apply_update_time_preference(
  apply_update_preferred_end_time: str = None,
  apply_update_preferred_start_time: str = None
) -> None
```

###### `apply_update_preferred_end_time`<sup>Optional</sup> <a name="apply_update_preferred_end_time" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.putApplyUpdateTimePreference.parameter.applyUpdatePreferredEndTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#apply_update_preferred_end_time DatabaseVmCluster#apply_update_preferred_end_time}.

---

###### `apply_update_preferred_start_time`<sup>Optional</sup> <a name="apply_update_preferred_start_time" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.putApplyUpdateTimePreference.parameter.applyUpdatePreferredStartTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#apply_update_preferred_start_time DatabaseVmCluster#apply_update_preferred_start_time}.

---

##### `put_freeze_period` <a name="put_freeze_period" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.putFreezePeriod"></a>

```python
def put_freeze_period(
  freeze_period_end_time: str = None,
  freeze_period_start_time: str = None
) -> None
```

###### `freeze_period_end_time`<sup>Optional</sup> <a name="freeze_period_end_time" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.putFreezePeriod.parameter.freezePeriodEndTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#freeze_period_end_time DatabaseVmCluster#freeze_period_end_time}.

---

###### `freeze_period_start_time`<sup>Optional</sup> <a name="freeze_period_start_time" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.putFreezePeriod.parameter.freezePeriodStartTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#freeze_period_start_time DatabaseVmCluster#freeze_period_start_time}.

---

##### `reset_apply_update_time_preference` <a name="reset_apply_update_time_preference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resetApplyUpdateTimePreference"></a>

```python
def reset_apply_update_time_preference() -> None
```

##### `reset_freeze_period` <a name="reset_freeze_period" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resetFreezePeriod"></a>

```python
def reset_freeze_period() -> None
```

##### `reset_is_early_adoption_enabled` <a name="reset_is_early_adoption_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resetIsEarlyAdoptionEnabled"></a>

```python
def reset_is_early_adoption_enabled() -> None
```

##### `reset_is_freeze_period_enabled` <a name="reset_is_freeze_period_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resetIsFreezePeriodEnabled"></a>

```python
def reset_is_freeze_period_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreference">apply_update_time_preference</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference">DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.freezePeriod">freeze_period</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference">DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreferenceInput">apply_update_time_preference_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.freezePeriodInput">freeze_period_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabledInput">is_early_adoption_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabledInput">is_freeze_period_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabled">is_early_adoption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabled">is_freeze_period_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails">DatabaseVmClusterCloudAutomationUpdateDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apply_update_time_preference`<sup>Required</sup> <a name="apply_update_time_preference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreference"></a>

```python
apply_update_time_preference: DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference">DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference</a>

---

##### `freeze_period`<sup>Required</sup> <a name="freeze_period" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.freezePeriod"></a>

```python
freeze_period: DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference">DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference</a>

---

##### `apply_update_time_preference_input`<sup>Optional</sup> <a name="apply_update_time_preference_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreferenceInput"></a>

```python
apply_update_time_preference_input: DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

---

##### `freeze_period_input`<sup>Optional</sup> <a name="freeze_period_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.freezePeriodInput"></a>

```python
freeze_period_input: DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod</a>

---

##### `is_early_adoption_enabled_input`<sup>Optional</sup> <a name="is_early_adoption_enabled_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabledInput"></a>

```python
is_early_adoption_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_freeze_period_enabled_input`<sup>Optional</sup> <a name="is_freeze_period_enabled_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabledInput"></a>

```python
is_freeze_period_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_early_adoption_enabled`<sup>Required</sup> <a name="is_early_adoption_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabled"></a>

```python
is_early_adoption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_freeze_period_enabled`<sup>Required</sup> <a name="is_freeze_period_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabled"></a>

```python
is_freeze_period_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseVmClusterCloudAutomationUpdateDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails">DatabaseVmClusterCloudAutomationUpdateDetails</a>

---


### DatabaseVmClusterDataCollectionOptionsOutputReference <a name="DatabaseVmClusterDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster

databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">reset_is_diagnostics_events_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">reset_is_health_monitoring_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">reset_is_incident_logs_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_diagnostics_events_enabled` <a name="reset_is_diagnostics_events_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```python
def reset_is_diagnostics_events_enabled() -> None
```

##### `reset_is_health_monitoring_enabled` <a name="reset_is_health_monitoring_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```python
def reset_is_health_monitoring_enabled() -> None
```

##### `reset_is_incident_logs_enabled` <a name="reset_is_incident_logs_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```python
def reset_is_incident_logs_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">is_diagnostics_events_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">is_health_monitoring_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">is_incident_logs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">is_diagnostics_events_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">is_health_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">is_incident_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions">DatabaseVmClusterDataCollectionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_diagnostics_events_enabled_input`<sup>Optional</sup> <a name="is_diagnostics_events_enabled_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```python
is_diagnostics_events_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_health_monitoring_enabled_input`<sup>Optional</sup> <a name="is_health_monitoring_enabled_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```python
is_health_monitoring_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_incident_logs_enabled_input`<sup>Optional</sup> <a name="is_incident_logs_enabled_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```python
is_incident_logs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_diagnostics_events_enabled`<sup>Required</sup> <a name="is_diagnostics_events_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```python
is_diagnostics_events_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_health_monitoring_enabled`<sup>Required</sup> <a name="is_health_monitoring_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```python
is_health_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_incident_logs_enabled`<sup>Required</sup> <a name="is_incident_logs_enabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```python
is_incident_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseVmClusterDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions">DatabaseVmClusterDataCollectionOptions</a>

---


### DatabaseVmClusterFileSystemConfigurationDetailsList <a name="DatabaseVmClusterFileSystemConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster

databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseVmClusterFileSystemConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseVmClusterFileSystemConfigurationDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>]]

---


### DatabaseVmClusterFileSystemConfigurationDetailsOutputReference <a name="DatabaseVmClusterFileSystemConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster

databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.resetFileSystemSizeGb">reset_file_system_size_gb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.resetMountPoint">reset_mount_point</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_system_size_gb` <a name="reset_file_system_size_gb" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.resetFileSystemSizeGb"></a>

```python
def reset_file_system_size_gb() -> None
```

##### `reset_mount_point` <a name="reset_mount_point" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.resetMountPoint"></a>

```python
def reset_mount_point() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGbInput">file_system_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.mountPointInput">mount_point_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGb">file_system_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.mountPoint">mount_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_system_size_gb_input`<sup>Optional</sup> <a name="file_system_size_gb_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGbInput"></a>

```python
file_system_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_point_input`<sup>Optional</sup> <a name="mount_point_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.mountPointInput"></a>

```python
mount_point_input: str
```

- *Type:* str

---

##### `file_system_size_gb`<sup>Required</sup> <a name="file_system_size_gb" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGb"></a>

```python
file_system_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_point`<sup>Required</sup> <a name="mount_point" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseVmClusterFileSystemConfigurationDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>]

---


### DatabaseVmClusterTimeoutsOutputReference <a name="DatabaseVmClusterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster

databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts">DatabaseVmClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseVmClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts">DatabaseVmClusterTimeouts</a>]

---



