# `databaseCloudVmCluster` Submodule <a name="`databaseCloudVmCluster` Submodule" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseCloudVmCluster <a name="DatabaseCloudVmCluster" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster oci_database_cloud_vm_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster

databaseCloudVmCluster.DatabaseCloudVmCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup_subnet_id: str,
  cloud_exadata_infrastructure_id: str,
  compartment_id: str,
  cpu_core_count: typing.Union[int, float],
  display_name: str,
  gi_version: str,
  hostname: str,
  ssh_public_keys: typing.List[str],
  subnet_id: str,
  backup_network_nsg_ids: typing.List[str] = None,
  cloud_automation_update_details: DatabaseCloudVmClusterCloudAutomationUpdateDetails = None,
  cluster_name: str = None,
  create_async: typing.Union[bool, IResolvable] = None,
  data_collection_options: DatabaseCloudVmClusterDataCollectionOptions = None,
  data_storage_percentage: typing.Union[int, float] = None,
  data_storage_size_in_tbs: typing.Union[int, float] = None,
  db_node_storage_size_in_gbs: typing.Union[int, float] = None,
  db_servers: typing.List[str] = None,
  defined_tags: typing.Mapping[str] = None,
  domain: str = None,
  file_system_configuration_details: typing.Union[IResolvable, typing.List[DatabaseCloudVmClusterFileSystemConfigurationDetails]] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_local_backup_enabled: typing.Union[bool, IResolvable] = None,
  is_sparse_diskgroup_enabled: typing.Union[bool, IResolvable] = None,
  license_model: str = None,
  memory_size_in_gbs: typing.Union[int, float] = None,
  nsg_ids: typing.List[str] = None,
  ocpu_count: typing.Union[int, float] = None,
  private_zone_id: str = None,
  scan_listener_port_tcp: typing.Union[int, float] = None,
  scan_listener_port_tcp_ssl: typing.Union[int, float] = None,
  security_attributes: typing.Mapping[str] = None,
  subscription_id: str = None,
  system_version: str = None,
  timeouts: DatabaseCloudVmClusterTimeouts = None,
  time_zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.backupSubnetId">backup_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#backup_subnet_id DatabaseCloudVmCluster#backup_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.cloudExadataInfrastructureId">cloud_exadata_infrastructure_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cloud_exadata_infrastructure_id DatabaseCloudVmCluster#cloud_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#compartment_id DatabaseCloudVmCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cpu_core_count DatabaseCloudVmCluster#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#display_name DatabaseCloudVmCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.giVersion">gi_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#gi_version DatabaseCloudVmCluster#gi_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#hostname DatabaseCloudVmCluster#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#ssh_public_keys DatabaseCloudVmCluster#ssh_public_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#subnet_id DatabaseCloudVmCluster#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.backupNetworkNsgIds">backup_network_nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#backup_network_nsg_ids DatabaseCloudVmCluster#backup_network_nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.cloudAutomationUpdateDetails">cloud_automation_update_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails">DatabaseCloudVmClusterCloudAutomationUpdateDetails</a></code> | cloud_automation_update_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cluster_name DatabaseCloudVmCluster#cluster_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.createAsync">create_async</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#create_async DatabaseCloudVmCluster#create_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions">DatabaseCloudVmClusterDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.dataStoragePercentage">data_storage_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#data_storage_percentage DatabaseCloudVmCluster#data_storage_percentage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.dataStorageSizeInTbs">data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#data_storage_size_in_tbs DatabaseCloudVmCluster#data_storage_size_in_tbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.dbNodeStorageSizeInGbs">db_node_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#db_node_storage_size_in_gbs DatabaseCloudVmCluster#db_node_storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.dbServers">db_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#db_servers DatabaseCloudVmCluster#db_servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#defined_tags DatabaseCloudVmCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#domain DatabaseCloudVmCluster#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.fileSystemConfigurationDetails">file_system_configuration_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails">DatabaseCloudVmClusterFileSystemConfigurationDetails</a>]]</code> | file_system_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#freeform_tags DatabaseCloudVmCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#id DatabaseCloudVmCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.isLocalBackupEnabled">is_local_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_local_backup_enabled DatabaseCloudVmCluster#is_local_backup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.isSparseDiskgroupEnabled">is_sparse_diskgroup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_sparse_diskgroup_enabled DatabaseCloudVmCluster#is_sparse_diskgroup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#license_model DatabaseCloudVmCluster#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.memorySizeInGbs">memory_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#memory_size_in_gbs DatabaseCloudVmCluster#memory_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#nsg_ids DatabaseCloudVmCluster#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.ocpuCount">ocpu_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#ocpu_count DatabaseCloudVmCluster#ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.privateZoneId">private_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#private_zone_id DatabaseCloudVmCluster#private_zone_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#scan_listener_port_tcp DatabaseCloudVmCluster#scan_listener_port_tcp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.scanListenerPortTcpSsl">scan_listener_port_tcp_ssl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#scan_listener_port_tcp_ssl DatabaseCloudVmCluster#scan_listener_port_tcp_ssl}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.securityAttributes">security_attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#security_attributes DatabaseCloudVmCluster#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#subscription_id DatabaseCloudVmCluster#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.systemVersion">system_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#system_version DatabaseCloudVmCluster#system_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts">DatabaseCloudVmClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#time_zone DatabaseCloudVmCluster#time_zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_subnet_id`<sup>Required</sup> <a name="backup_subnet_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.backupSubnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#backup_subnet_id DatabaseCloudVmCluster#backup_subnet_id}.

---

##### `cloud_exadata_infrastructure_id`<sup>Required</sup> <a name="cloud_exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.cloudExadataInfrastructureId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cloud_exadata_infrastructure_id DatabaseCloudVmCluster#cloud_exadata_infrastructure_id}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#compartment_id DatabaseCloudVmCluster#compartment_id}.

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.cpuCoreCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cpu_core_count DatabaseCloudVmCluster#cpu_core_count}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#display_name DatabaseCloudVmCluster#display_name}.

---

##### `gi_version`<sup>Required</sup> <a name="gi_version" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.giVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#gi_version DatabaseCloudVmCluster#gi_version}.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.hostname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#hostname DatabaseCloudVmCluster#hostname}.

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.sshPublicKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#ssh_public_keys DatabaseCloudVmCluster#ssh_public_keys}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#subnet_id DatabaseCloudVmCluster#subnet_id}.

---

##### `backup_network_nsg_ids`<sup>Optional</sup> <a name="backup_network_nsg_ids" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.backupNetworkNsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#backup_network_nsg_ids DatabaseCloudVmCluster#backup_network_nsg_ids}.

---

##### `cloud_automation_update_details`<sup>Optional</sup> <a name="cloud_automation_update_details" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.cloudAutomationUpdateDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails">DatabaseCloudVmClusterCloudAutomationUpdateDetails</a>

cloud_automation_update_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cloud_automation_update_details DatabaseCloudVmCluster#cloud_automation_update_details}

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cluster_name DatabaseCloudVmCluster#cluster_name}.

---

##### `create_async`<sup>Optional</sup> <a name="create_async" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.createAsync"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#create_async DatabaseCloudVmCluster#create_async}.

---

##### `data_collection_options`<sup>Optional</sup> <a name="data_collection_options" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.dataCollectionOptions"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions">DatabaseCloudVmClusterDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#data_collection_options DatabaseCloudVmCluster#data_collection_options}

---

##### `data_storage_percentage`<sup>Optional</sup> <a name="data_storage_percentage" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.dataStoragePercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#data_storage_percentage DatabaseCloudVmCluster#data_storage_percentage}.

---

##### `data_storage_size_in_tbs`<sup>Optional</sup> <a name="data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.dataStorageSizeInTbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#data_storage_size_in_tbs DatabaseCloudVmCluster#data_storage_size_in_tbs}.

---

##### `db_node_storage_size_in_gbs`<sup>Optional</sup> <a name="db_node_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.dbNodeStorageSizeInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#db_node_storage_size_in_gbs DatabaseCloudVmCluster#db_node_storage_size_in_gbs}.

---

##### `db_servers`<sup>Optional</sup> <a name="db_servers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.dbServers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#db_servers DatabaseCloudVmCluster#db_servers}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#defined_tags DatabaseCloudVmCluster#defined_tags}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.domain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#domain DatabaseCloudVmCluster#domain}.

---

##### `file_system_configuration_details`<sup>Optional</sup> <a name="file_system_configuration_details" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.fileSystemConfigurationDetails"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails">DatabaseCloudVmClusterFileSystemConfigurationDetails</a>]]

file_system_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#file_system_configuration_details DatabaseCloudVmCluster#file_system_configuration_details}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#freeform_tags DatabaseCloudVmCluster#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#id DatabaseCloudVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_local_backup_enabled`<sup>Optional</sup> <a name="is_local_backup_enabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.isLocalBackupEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_local_backup_enabled DatabaseCloudVmCluster#is_local_backup_enabled}.

---

##### `is_sparse_diskgroup_enabled`<sup>Optional</sup> <a name="is_sparse_diskgroup_enabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.isSparseDiskgroupEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_sparse_diskgroup_enabled DatabaseCloudVmCluster#is_sparse_diskgroup_enabled}.

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.licenseModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#license_model DatabaseCloudVmCluster#license_model}.

---

##### `memory_size_in_gbs`<sup>Optional</sup> <a name="memory_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.memorySizeInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#memory_size_in_gbs DatabaseCloudVmCluster#memory_size_in_gbs}.

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.nsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#nsg_ids DatabaseCloudVmCluster#nsg_ids}.

---

##### `ocpu_count`<sup>Optional</sup> <a name="ocpu_count" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.ocpuCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#ocpu_count DatabaseCloudVmCluster#ocpu_count}.

---

##### `private_zone_id`<sup>Optional</sup> <a name="private_zone_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.privateZoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#private_zone_id DatabaseCloudVmCluster#private_zone_id}.

---

##### `scan_listener_port_tcp`<sup>Optional</sup> <a name="scan_listener_port_tcp" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.scanListenerPortTcp"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#scan_listener_port_tcp DatabaseCloudVmCluster#scan_listener_port_tcp}.

---

##### `scan_listener_port_tcp_ssl`<sup>Optional</sup> <a name="scan_listener_port_tcp_ssl" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.scanListenerPortTcpSsl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#scan_listener_port_tcp_ssl DatabaseCloudVmCluster#scan_listener_port_tcp_ssl}.

---

##### `security_attributes`<sup>Optional</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.securityAttributes"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#security_attributes DatabaseCloudVmCluster#security_attributes}.

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#subscription_id DatabaseCloudVmCluster#subscription_id}.

---

##### `system_version`<sup>Optional</sup> <a name="system_version" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.systemVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#system_version DatabaseCloudVmCluster#system_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts">DatabaseCloudVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#timeouts DatabaseCloudVmCluster#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.timeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#time_zone DatabaseCloudVmCluster#time_zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putCloudAutomationUpdateDetails">put_cloud_automation_update_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putDataCollectionOptions">put_data_collection_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putFileSystemConfigurationDetails">put_file_system_configuration_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetBackupNetworkNsgIds">reset_backup_network_nsg_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetCloudAutomationUpdateDetails">reset_cloud_automation_update_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetClusterName">reset_cluster_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetCreateAsync">reset_create_async</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDataCollectionOptions">reset_data_collection_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDataStoragePercentage">reset_data_storage_percentage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDataStorageSizeInTbs">reset_data_storage_size_in_tbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDbNodeStorageSizeInGbs">reset_db_node_storage_size_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDbServers">reset_db_servers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetFileSystemConfigurationDetails">reset_file_system_configuration_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetIsLocalBackupEnabled">reset_is_local_backup_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetIsSparseDiskgroupEnabled">reset_is_sparse_diskgroup_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetLicenseModel">reset_license_model</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetMemorySizeInGbs">reset_memory_size_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetNsgIds">reset_nsg_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetOcpuCount">reset_ocpu_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetPrivateZoneId">reset_private_zone_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetScanListenerPortTcp">reset_scan_listener_port_tcp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetScanListenerPortTcpSsl">reset_scan_listener_port_tcp_ssl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetSecurityAttributes">reset_security_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetSubscriptionId">reset_subscription_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetSystemVersion">reset_system_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cloud_automation_update_details` <a name="put_cloud_automation_update_details" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putCloudAutomationUpdateDetails"></a>

```python
def put_cloud_automation_update_details(
  apply_update_time_preference: DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference = None,
  freeze_period: DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod = None,
  is_early_adoption_enabled: typing.Union[bool, IResolvable] = None,
  is_freeze_period_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `apply_update_time_preference`<sup>Optional</sup> <a name="apply_update_time_preference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putCloudAutomationUpdateDetails.parameter.applyUpdateTimePreference"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

apply_update_time_preference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#apply_update_time_preference DatabaseCloudVmCluster#apply_update_time_preference}

---

###### `freeze_period`<sup>Optional</sup> <a name="freeze_period" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putCloudAutomationUpdateDetails.parameter.freezePeriod"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod</a>

freeze_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#freeze_period DatabaseCloudVmCluster#freeze_period}

---

###### `is_early_adoption_enabled`<sup>Optional</sup> <a name="is_early_adoption_enabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putCloudAutomationUpdateDetails.parameter.isEarlyAdoptionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_early_adoption_enabled DatabaseCloudVmCluster#is_early_adoption_enabled}.

---

###### `is_freeze_period_enabled`<sup>Optional</sup> <a name="is_freeze_period_enabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putCloudAutomationUpdateDetails.parameter.isFreezePeriodEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_freeze_period_enabled DatabaseCloudVmCluster#is_freeze_period_enabled}.

---

##### `put_data_collection_options` <a name="put_data_collection_options" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putDataCollectionOptions"></a>

```python
def put_data_collection_options(
  is_diagnostics_events_enabled: typing.Union[bool, IResolvable] = None,
  is_health_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  is_incident_logs_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `is_diagnostics_events_enabled`<sup>Optional</sup> <a name="is_diagnostics_events_enabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putDataCollectionOptions.parameter.isDiagnosticsEventsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_diagnostics_events_enabled DatabaseCloudVmCluster#is_diagnostics_events_enabled}.

---

###### `is_health_monitoring_enabled`<sup>Optional</sup> <a name="is_health_monitoring_enabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putDataCollectionOptions.parameter.isHealthMonitoringEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_health_monitoring_enabled DatabaseCloudVmCluster#is_health_monitoring_enabled}.

---

###### `is_incident_logs_enabled`<sup>Optional</sup> <a name="is_incident_logs_enabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putDataCollectionOptions.parameter.isIncidentLogsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_incident_logs_enabled DatabaseCloudVmCluster#is_incident_logs_enabled}.

---

##### `put_file_system_configuration_details` <a name="put_file_system_configuration_details" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putFileSystemConfigurationDetails"></a>

```python
def put_file_system_configuration_details(
  value: typing.Union[IResolvable, typing.List[DatabaseCloudVmClusterFileSystemConfigurationDetails]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putFileSystemConfigurationDetails.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails">DatabaseCloudVmClusterFileSystemConfigurationDetails</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#create DatabaseCloudVmCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#delete DatabaseCloudVmCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#update DatabaseCloudVmCluster#update}.

---

##### `reset_backup_network_nsg_ids` <a name="reset_backup_network_nsg_ids" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetBackupNetworkNsgIds"></a>

```python
def reset_backup_network_nsg_ids() -> None
```

##### `reset_cloud_automation_update_details` <a name="reset_cloud_automation_update_details" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetCloudAutomationUpdateDetails"></a>

```python
def reset_cloud_automation_update_details() -> None
```

##### `reset_cluster_name` <a name="reset_cluster_name" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetClusterName"></a>

```python
def reset_cluster_name() -> None
```

##### `reset_create_async` <a name="reset_create_async" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetCreateAsync"></a>

```python
def reset_create_async() -> None
```

##### `reset_data_collection_options` <a name="reset_data_collection_options" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDataCollectionOptions"></a>

```python
def reset_data_collection_options() -> None
```

##### `reset_data_storage_percentage` <a name="reset_data_storage_percentage" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDataStoragePercentage"></a>

```python
def reset_data_storage_percentage() -> None
```

##### `reset_data_storage_size_in_tbs` <a name="reset_data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDataStorageSizeInTbs"></a>

```python
def reset_data_storage_size_in_tbs() -> None
```

##### `reset_db_node_storage_size_in_gbs` <a name="reset_db_node_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDbNodeStorageSizeInGbs"></a>

```python
def reset_db_node_storage_size_in_gbs() -> None
```

##### `reset_db_servers` <a name="reset_db_servers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDbServers"></a>

```python
def reset_db_servers() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_domain` <a name="reset_domain" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_file_system_configuration_details` <a name="reset_file_system_configuration_details" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetFileSystemConfigurationDetails"></a>

```python
def reset_file_system_configuration_details() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_local_backup_enabled` <a name="reset_is_local_backup_enabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetIsLocalBackupEnabled"></a>

```python
def reset_is_local_backup_enabled() -> None
```

##### `reset_is_sparse_diskgroup_enabled` <a name="reset_is_sparse_diskgroup_enabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetIsSparseDiskgroupEnabled"></a>

```python
def reset_is_sparse_diskgroup_enabled() -> None
```

##### `reset_license_model` <a name="reset_license_model" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetLicenseModel"></a>

```python
def reset_license_model() -> None
```

##### `reset_memory_size_in_gbs` <a name="reset_memory_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetMemorySizeInGbs"></a>

```python
def reset_memory_size_in_gbs() -> None
```

##### `reset_nsg_ids` <a name="reset_nsg_ids" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetNsgIds"></a>

```python
def reset_nsg_ids() -> None
```

##### `reset_ocpu_count` <a name="reset_ocpu_count" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetOcpuCount"></a>

```python
def reset_ocpu_count() -> None
```

##### `reset_private_zone_id` <a name="reset_private_zone_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetPrivateZoneId"></a>

```python
def reset_private_zone_id() -> None
```

##### `reset_scan_listener_port_tcp` <a name="reset_scan_listener_port_tcp" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetScanListenerPortTcp"></a>

```python
def reset_scan_listener_port_tcp() -> None
```

##### `reset_scan_listener_port_tcp_ssl` <a name="reset_scan_listener_port_tcp_ssl" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetScanListenerPortTcpSsl"></a>

```python
def reset_scan_listener_port_tcp_ssl() -> None
```

##### `reset_security_attributes` <a name="reset_security_attributes" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetSecurityAttributes"></a>

```python
def reset_security_attributes() -> None
```

##### `reset_subscription_id` <a name="reset_subscription_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetSubscriptionId"></a>

```python
def reset_subscription_id() -> None
```

##### `reset_system_version` <a name="reset_system_version" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetSystemVersion"></a>

```python
def reset_system_version() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseCloudVmCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster

databaseCloudVmCluster.DatabaseCloudVmCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster

databaseCloudVmCluster.DatabaseCloudVmCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster

databaseCloudVmCluster.DatabaseCloudVmCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster

databaseCloudVmCluster.DatabaseCloudVmCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseCloudVmCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseCloudVmCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseCloudVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseCloudVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cloudAutomationUpdateDetails">cloud_automation_update_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference">DatabaseCloudVmClusterDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.diskRedundancy">disk_redundancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.fileSystemConfigurationDetails">file_system_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList">DatabaseCloudVmClusterFileSystemConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.iormConfigCache">iorm_config_cache</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList">DatabaseCloudVmClusterIormConfigCacheList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.lastUpdateHistoryEntryId">last_update_history_entry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.listenerPort">listener_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanDnsName">scan_dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanDnsRecordId">scan_dns_record_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanIpIds">scan_ip_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.storageSizeInGbs">storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference">DatabaseCloudVmClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.vipIds">vip_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.backupNetworkNsgIdsInput">backup_network_nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.backupSubnetIdInput">backup_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cloudAutomationUpdateDetailsInput">cloud_automation_update_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails">DatabaseCloudVmClusterCloudAutomationUpdateDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cloudExadataInfrastructureIdInput">cloud_exadata_infrastructure_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cpuCoreCountInput">cpu_core_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.createAsyncInput">create_async_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataCollectionOptionsInput">data_collection_options_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions">DatabaseCloudVmClusterDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataStoragePercentageInput">data_storage_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataStorageSizeInTbsInput">data_storage_size_in_tbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dbNodeStorageSizeInGbsInput">db_node_storage_size_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dbServersInput">db_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.fileSystemConfigurationDetailsInput">file_system_configuration_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails">DatabaseCloudVmClusterFileSystemConfigurationDetails</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.giVersionInput">gi_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.isLocalBackupEnabledInput">is_local_backup_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.isSparseDiskgroupEnabledInput">is_sparse_diskgroup_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.licenseModelInput">license_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.memorySizeInGbsInput">memory_size_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.nsgIdsInput">nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.ocpuCountInput">ocpu_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.privateZoneIdInput">private_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanListenerPortTcpInput">scan_listener_port_tcp_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanListenerPortTcpSslInput">scan_listener_port_tcp_ssl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.securityAttributesInput">security_attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.sshPublicKeysInput">ssh_public_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.systemVersionInput">system_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts">DatabaseCloudVmClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.backupNetworkNsgIds">backup_network_nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.backupSubnetId">backup_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cloudExadataInfrastructureId">cloud_exadata_infrastructure_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.createAsync">create_async</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataStoragePercentage">data_storage_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataStorageSizeInTbs">data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dbNodeStorageSizeInGbs">db_node_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dbServers">db_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.giVersion">gi_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.isLocalBackupEnabled">is_local_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.isSparseDiskgroupEnabled">is_sparse_diskgroup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.memorySizeInGbs">memory_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.ocpuCount">ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.privateZoneId">private_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanListenerPortTcpSsl">scan_listener_port_tcp_ssl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.securityAttributes">security_attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.systemVersion">system_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `cloud_automation_update_details`<sup>Required</sup> <a name="cloud_automation_update_details" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cloudAutomationUpdateDetails"></a>

```python
cloud_automation_update_details: DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference</a>

---

##### `data_collection_options`<sup>Required</sup> <a name="data_collection_options" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataCollectionOptions"></a>

```python
data_collection_options: DatabaseCloudVmClusterDataCollectionOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference">DatabaseCloudVmClusterDataCollectionOptionsOutputReference</a>

---

##### `disk_redundancy`<sup>Required</sup> <a name="disk_redundancy" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.diskRedundancy"></a>

```python
disk_redundancy: str
```

- *Type:* str

---

##### `file_system_configuration_details`<sup>Required</sup> <a name="file_system_configuration_details" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.fileSystemConfigurationDetails"></a>

```python
file_system_configuration_details: DatabaseCloudVmClusterFileSystemConfigurationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList">DatabaseCloudVmClusterFileSystemConfigurationDetailsList</a>

---

##### `iorm_config_cache`<sup>Required</sup> <a name="iorm_config_cache" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.iormConfigCache"></a>

```python
iorm_config_cache: DatabaseCloudVmClusterIormConfigCacheList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList">DatabaseCloudVmClusterIormConfigCacheList</a>

---

##### `last_update_history_entry_id`<sup>Required</sup> <a name="last_update_history_entry_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.lastUpdateHistoryEntryId"></a>

```python
last_update_history_entry_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `listener_port`<sup>Required</sup> <a name="listener_port" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.listenerPort"></a>

```python
listener_port: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_dns_name`<sup>Required</sup> <a name="scan_dns_name" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanDnsName"></a>

```python
scan_dns_name: str
```

- *Type:* str

---

##### `scan_dns_record_id`<sup>Required</sup> <a name="scan_dns_record_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanDnsRecordId"></a>

```python
scan_dns_record_id: str
```

- *Type:* str

---

##### `scan_ip_ids`<sup>Required</sup> <a name="scan_ip_ids" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanIpIds"></a>

```python
scan_ip_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_size_in_gbs`<sup>Required</sup> <a name="storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.storageSizeInGbs"></a>

```python
storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeouts"></a>

```python
timeouts: DatabaseCloudVmClusterTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference">DatabaseCloudVmClusterTimeoutsOutputReference</a>

---

##### `vip_ids`<sup>Required</sup> <a name="vip_ids" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.vipIds"></a>

```python
vip_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

##### `backup_network_nsg_ids_input`<sup>Optional</sup> <a name="backup_network_nsg_ids_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.backupNetworkNsgIdsInput"></a>

```python
backup_network_nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_subnet_id_input`<sup>Optional</sup> <a name="backup_subnet_id_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.backupSubnetIdInput"></a>

```python
backup_subnet_id_input: str
```

- *Type:* str

---

##### `cloud_automation_update_details_input`<sup>Optional</sup> <a name="cloud_automation_update_details_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cloudAutomationUpdateDetailsInput"></a>

```python
cloud_automation_update_details_input: DatabaseCloudVmClusterCloudAutomationUpdateDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails">DatabaseCloudVmClusterCloudAutomationUpdateDetails</a>

---

##### `cloud_exadata_infrastructure_id_input`<sup>Optional</sup> <a name="cloud_exadata_infrastructure_id_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cloudExadataInfrastructureIdInput"></a>

```python
cloud_exadata_infrastructure_id_input: str
```

- *Type:* str

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `cpu_core_count_input`<sup>Optional</sup> <a name="cpu_core_count_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cpuCoreCountInput"></a>

```python
cpu_core_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_async_input`<sup>Optional</sup> <a name="create_async_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.createAsyncInput"></a>

```python
create_async_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data_collection_options_input`<sup>Optional</sup> <a name="data_collection_options_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataCollectionOptionsInput"></a>

```python
data_collection_options_input: DatabaseCloudVmClusterDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions">DatabaseCloudVmClusterDataCollectionOptions</a>

---

##### `data_storage_percentage_input`<sup>Optional</sup> <a name="data_storage_percentage_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataStoragePercentageInput"></a>

```python
data_storage_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_tbs_input`<sup>Optional</sup> <a name="data_storage_size_in_tbs_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataStorageSizeInTbsInput"></a>

```python
data_storage_size_in_tbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_node_storage_size_in_gbs_input`<sup>Optional</sup> <a name="db_node_storage_size_in_gbs_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dbNodeStorageSizeInGbsInput"></a>

```python
db_node_storage_size_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_servers_input`<sup>Optional</sup> <a name="db_servers_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dbServersInput"></a>

```python
db_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `file_system_configuration_details_input`<sup>Optional</sup> <a name="file_system_configuration_details_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.fileSystemConfigurationDetailsInput"></a>

```python
file_system_configuration_details_input: typing.Union[IResolvable, typing.List[DatabaseCloudVmClusterFileSystemConfigurationDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails">DatabaseCloudVmClusterFileSystemConfigurationDetails</a>]]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `gi_version_input`<sup>Optional</sup> <a name="gi_version_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.giVersionInput"></a>

```python
gi_version_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_local_backup_enabled_input`<sup>Optional</sup> <a name="is_local_backup_enabled_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.isLocalBackupEnabledInput"></a>

```python
is_local_backup_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_sparse_diskgroup_enabled_input`<sup>Optional</sup> <a name="is_sparse_diskgroup_enabled_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.isSparseDiskgroupEnabledInput"></a>

```python
is_sparse_diskgroup_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `license_model_input`<sup>Optional</sup> <a name="license_model_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.licenseModelInput"></a>

```python
license_model_input: str
```

- *Type:* str

---

##### `memory_size_in_gbs_input`<sup>Optional</sup> <a name="memory_size_in_gbs_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.memorySizeInGbsInput"></a>

```python
memory_size_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nsg_ids_input`<sup>Optional</sup> <a name="nsg_ids_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.nsgIdsInput"></a>

```python
nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ocpu_count_input`<sup>Optional</sup> <a name="ocpu_count_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.ocpuCountInput"></a>

```python
ocpu_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_zone_id_input`<sup>Optional</sup> <a name="private_zone_id_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.privateZoneIdInput"></a>

```python
private_zone_id_input: str
```

- *Type:* str

---

##### `scan_listener_port_tcp_input`<sup>Optional</sup> <a name="scan_listener_port_tcp_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanListenerPortTcpInput"></a>

```python
scan_listener_port_tcp_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_tcp_ssl_input`<sup>Optional</sup> <a name="scan_listener_port_tcp_ssl_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanListenerPortTcpSslInput"></a>

```python
scan_listener_port_tcp_ssl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_attributes_input`<sup>Optional</sup> <a name="security_attributes_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.securityAttributesInput"></a>

```python
security_attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ssh_public_keys_input`<sup>Optional</sup> <a name="ssh_public_keys_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.sshPublicKeysInput"></a>

```python
ssh_public_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `system_version_input`<sup>Optional</sup> <a name="system_version_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.systemVersionInput"></a>

```python
system_version_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseCloudVmClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts">DatabaseCloudVmClusterTimeouts</a>]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `backup_network_nsg_ids`<sup>Required</sup> <a name="backup_network_nsg_ids" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.backupNetworkNsgIds"></a>

```python
backup_network_nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_subnet_id`<sup>Required</sup> <a name="backup_subnet_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.backupSubnetId"></a>

```python
backup_subnet_id: str
```

- *Type:* str

---

##### `cloud_exadata_infrastructure_id`<sup>Required</sup> <a name="cloud_exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cloudExadataInfrastructureId"></a>

```python
cloud_exadata_infrastructure_id: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_async`<sup>Required</sup> <a name="create_async" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.createAsync"></a>

```python
create_async: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data_storage_percentage`<sup>Required</sup> <a name="data_storage_percentage" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataStoragePercentage"></a>

```python
data_storage_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_tbs`<sup>Required</sup> <a name="data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataStorageSizeInTbs"></a>

```python
data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_node_storage_size_in_gbs`<sup>Required</sup> <a name="db_node_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dbNodeStorageSizeInGbs"></a>

```python
db_node_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_servers`<sup>Required</sup> <a name="db_servers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dbServers"></a>

```python
db_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `gi_version`<sup>Required</sup> <a name="gi_version" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.giVersion"></a>

```python
gi_version: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_local_backup_enabled`<sup>Required</sup> <a name="is_local_backup_enabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.isLocalBackupEnabled"></a>

```python
is_local_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_sparse_diskgroup_enabled`<sup>Required</sup> <a name="is_sparse_diskgroup_enabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.isSparseDiskgroupEnabled"></a>

```python
is_sparse_diskgroup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `memory_size_in_gbs`<sup>Required</sup> <a name="memory_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.memorySizeInGbs"></a>

```python
memory_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ocpu_count`<sup>Required</sup> <a name="ocpu_count" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.ocpuCount"></a>

```python
ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_zone_id`<sup>Required</sup> <a name="private_zone_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.privateZoneId"></a>

```python
private_zone_id: str
```

- *Type:* str

---

##### `scan_listener_port_tcp`<sup>Required</sup> <a name="scan_listener_port_tcp" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanListenerPortTcp"></a>

```python
scan_listener_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_tcp_ssl`<sup>Required</sup> <a name="scan_listener_port_tcp_ssl" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanListenerPortTcpSsl"></a>

```python
scan_listener_port_tcp_ssl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_attributes`<sup>Required</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.securityAttributes"></a>

```python
security_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `system_version`<sup>Required</sup> <a name="system_version" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.systemVersion"></a>

```python
system_version: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseCloudVmClusterCloudAutomationUpdateDetails <a name="DatabaseCloudVmClusterCloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster

databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails(
  apply_update_time_preference: DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference = None,
  freeze_period: DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod = None,
  is_early_adoption_enabled: typing.Union[bool, IResolvable] = None,
  is_freeze_period_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails.property.applyUpdateTimePreference">apply_update_time_preference</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a></code> | apply_update_time_preference block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails.property.freezePeriod">freeze_period</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod</a></code> | freeze_period block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails.property.isEarlyAdoptionEnabled">is_early_adoption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_early_adoption_enabled DatabaseCloudVmCluster#is_early_adoption_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails.property.isFreezePeriodEnabled">is_freeze_period_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_freeze_period_enabled DatabaseCloudVmCluster#is_freeze_period_enabled}. |

---

##### `apply_update_time_preference`<sup>Optional</sup> <a name="apply_update_time_preference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails.property.applyUpdateTimePreference"></a>

```python
apply_update_time_preference: DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

apply_update_time_preference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#apply_update_time_preference DatabaseCloudVmCluster#apply_update_time_preference}

---

##### `freeze_period`<sup>Optional</sup> <a name="freeze_period" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails.property.freezePeriod"></a>

```python
freeze_period: DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod</a>

freeze_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#freeze_period DatabaseCloudVmCluster#freeze_period}

---

##### `is_early_adoption_enabled`<sup>Optional</sup> <a name="is_early_adoption_enabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails.property.isEarlyAdoptionEnabled"></a>

```python
is_early_adoption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_early_adoption_enabled DatabaseCloudVmCluster#is_early_adoption_enabled}.

---

##### `is_freeze_period_enabled`<sup>Optional</sup> <a name="is_freeze_period_enabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails.property.isFreezePeriodEnabled"></a>

```python
is_freeze_period_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_freeze_period_enabled DatabaseCloudVmCluster#is_freeze_period_enabled}.

---

### DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference <a name="DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster

databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference(
  apply_update_preferred_end_time: str = None,
  apply_update_preferred_start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.property.applyUpdatePreferredEndTime">apply_update_preferred_end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#apply_update_preferred_end_time DatabaseCloudVmCluster#apply_update_preferred_end_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.property.applyUpdatePreferredStartTime">apply_update_preferred_start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#apply_update_preferred_start_time DatabaseCloudVmCluster#apply_update_preferred_start_time}. |

---

##### `apply_update_preferred_end_time`<sup>Optional</sup> <a name="apply_update_preferred_end_time" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.property.applyUpdatePreferredEndTime"></a>

```python
apply_update_preferred_end_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#apply_update_preferred_end_time DatabaseCloudVmCluster#apply_update_preferred_end_time}.

---

##### `apply_update_preferred_start_time`<sup>Optional</sup> <a name="apply_update_preferred_start_time" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.property.applyUpdatePreferredStartTime"></a>

```python
apply_update_preferred_start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#apply_update_preferred_start_time DatabaseCloudVmCluster#apply_update_preferred_start_time}.

---

### DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod <a name="DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster

databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod(
  freeze_period_end_time: str = None,
  freeze_period_start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod.property.freezePeriodEndTime">freeze_period_end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#freeze_period_end_time DatabaseCloudVmCluster#freeze_period_end_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod.property.freezePeriodStartTime">freeze_period_start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#freeze_period_start_time DatabaseCloudVmCluster#freeze_period_start_time}. |

---

##### `freeze_period_end_time`<sup>Optional</sup> <a name="freeze_period_end_time" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod.property.freezePeriodEndTime"></a>

```python
freeze_period_end_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#freeze_period_end_time DatabaseCloudVmCluster#freeze_period_end_time}.

---

##### `freeze_period_start_time`<sup>Optional</sup> <a name="freeze_period_start_time" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod.property.freezePeriodStartTime"></a>

```python
freeze_period_start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#freeze_period_start_time DatabaseCloudVmCluster#freeze_period_start_time}.

---

### DatabaseCloudVmClusterConfig <a name="DatabaseCloudVmClusterConfig" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster

databaseCloudVmCluster.DatabaseCloudVmClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup_subnet_id: str,
  cloud_exadata_infrastructure_id: str,
  compartment_id: str,
  cpu_core_count: typing.Union[int, float],
  display_name: str,
  gi_version: str,
  hostname: str,
  ssh_public_keys: typing.List[str],
  subnet_id: str,
  backup_network_nsg_ids: typing.List[str] = None,
  cloud_automation_update_details: DatabaseCloudVmClusterCloudAutomationUpdateDetails = None,
  cluster_name: str = None,
  create_async: typing.Union[bool, IResolvable] = None,
  data_collection_options: DatabaseCloudVmClusterDataCollectionOptions = None,
  data_storage_percentage: typing.Union[int, float] = None,
  data_storage_size_in_tbs: typing.Union[int, float] = None,
  db_node_storage_size_in_gbs: typing.Union[int, float] = None,
  db_servers: typing.List[str] = None,
  defined_tags: typing.Mapping[str] = None,
  domain: str = None,
  file_system_configuration_details: typing.Union[IResolvable, typing.List[DatabaseCloudVmClusterFileSystemConfigurationDetails]] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_local_backup_enabled: typing.Union[bool, IResolvable] = None,
  is_sparse_diskgroup_enabled: typing.Union[bool, IResolvable] = None,
  license_model: str = None,
  memory_size_in_gbs: typing.Union[int, float] = None,
  nsg_ids: typing.List[str] = None,
  ocpu_count: typing.Union[int, float] = None,
  private_zone_id: str = None,
  scan_listener_port_tcp: typing.Union[int, float] = None,
  scan_listener_port_tcp_ssl: typing.Union[int, float] = None,
  security_attributes: typing.Mapping[str] = None,
  subscription_id: str = None,
  system_version: str = None,
  timeouts: DatabaseCloudVmClusterTimeouts = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.backupSubnetId">backup_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#backup_subnet_id DatabaseCloudVmCluster#backup_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.cloudExadataInfrastructureId">cloud_exadata_infrastructure_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cloud_exadata_infrastructure_id DatabaseCloudVmCluster#cloud_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#compartment_id DatabaseCloudVmCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cpu_core_count DatabaseCloudVmCluster#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#display_name DatabaseCloudVmCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.giVersion">gi_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#gi_version DatabaseCloudVmCluster#gi_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#hostname DatabaseCloudVmCluster#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#ssh_public_keys DatabaseCloudVmCluster#ssh_public_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#subnet_id DatabaseCloudVmCluster#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.backupNetworkNsgIds">backup_network_nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#backup_network_nsg_ids DatabaseCloudVmCluster#backup_network_nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.cloudAutomationUpdateDetails">cloud_automation_update_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails">DatabaseCloudVmClusterCloudAutomationUpdateDetails</a></code> | cloud_automation_update_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cluster_name DatabaseCloudVmCluster#cluster_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.createAsync">create_async</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#create_async DatabaseCloudVmCluster#create_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions">DatabaseCloudVmClusterDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dataStoragePercentage">data_storage_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#data_storage_percentage DatabaseCloudVmCluster#data_storage_percentage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dataStorageSizeInTbs">data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#data_storage_size_in_tbs DatabaseCloudVmCluster#data_storage_size_in_tbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dbNodeStorageSizeInGbs">db_node_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#db_node_storage_size_in_gbs DatabaseCloudVmCluster#db_node_storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dbServers">db_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#db_servers DatabaseCloudVmCluster#db_servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#defined_tags DatabaseCloudVmCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#domain DatabaseCloudVmCluster#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.fileSystemConfigurationDetails">file_system_configuration_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails">DatabaseCloudVmClusterFileSystemConfigurationDetails</a>]]</code> | file_system_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#freeform_tags DatabaseCloudVmCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#id DatabaseCloudVmCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.isLocalBackupEnabled">is_local_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_local_backup_enabled DatabaseCloudVmCluster#is_local_backup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.isSparseDiskgroupEnabled">is_sparse_diskgroup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_sparse_diskgroup_enabled DatabaseCloudVmCluster#is_sparse_diskgroup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#license_model DatabaseCloudVmCluster#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.memorySizeInGbs">memory_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#memory_size_in_gbs DatabaseCloudVmCluster#memory_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#nsg_ids DatabaseCloudVmCluster#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.ocpuCount">ocpu_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#ocpu_count DatabaseCloudVmCluster#ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.privateZoneId">private_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#private_zone_id DatabaseCloudVmCluster#private_zone_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#scan_listener_port_tcp DatabaseCloudVmCluster#scan_listener_port_tcp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.scanListenerPortTcpSsl">scan_listener_port_tcp_ssl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#scan_listener_port_tcp_ssl DatabaseCloudVmCluster#scan_listener_port_tcp_ssl}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.securityAttributes">security_attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#security_attributes DatabaseCloudVmCluster#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#subscription_id DatabaseCloudVmCluster#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.systemVersion">system_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#system_version DatabaseCloudVmCluster#system_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts">DatabaseCloudVmClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#time_zone DatabaseCloudVmCluster#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_subnet_id`<sup>Required</sup> <a name="backup_subnet_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.backupSubnetId"></a>

```python
backup_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#backup_subnet_id DatabaseCloudVmCluster#backup_subnet_id}.

---

##### `cloud_exadata_infrastructure_id`<sup>Required</sup> <a name="cloud_exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.cloudExadataInfrastructureId"></a>

```python
cloud_exadata_infrastructure_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cloud_exadata_infrastructure_id DatabaseCloudVmCluster#cloud_exadata_infrastructure_id}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#compartment_id DatabaseCloudVmCluster#compartment_id}.

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cpu_core_count DatabaseCloudVmCluster#cpu_core_count}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#display_name DatabaseCloudVmCluster#display_name}.

---

##### `gi_version`<sup>Required</sup> <a name="gi_version" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.giVersion"></a>

```python
gi_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#gi_version DatabaseCloudVmCluster#gi_version}.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#hostname DatabaseCloudVmCluster#hostname}.

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#ssh_public_keys DatabaseCloudVmCluster#ssh_public_keys}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#subnet_id DatabaseCloudVmCluster#subnet_id}.

---

##### `backup_network_nsg_ids`<sup>Optional</sup> <a name="backup_network_nsg_ids" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.backupNetworkNsgIds"></a>

```python
backup_network_nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#backup_network_nsg_ids DatabaseCloudVmCluster#backup_network_nsg_ids}.

---

##### `cloud_automation_update_details`<sup>Optional</sup> <a name="cloud_automation_update_details" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.cloudAutomationUpdateDetails"></a>

```python
cloud_automation_update_details: DatabaseCloudVmClusterCloudAutomationUpdateDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails">DatabaseCloudVmClusterCloudAutomationUpdateDetails</a>

cloud_automation_update_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cloud_automation_update_details DatabaseCloudVmCluster#cloud_automation_update_details}

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cluster_name DatabaseCloudVmCluster#cluster_name}.

---

##### `create_async`<sup>Optional</sup> <a name="create_async" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.createAsync"></a>

```python
create_async: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#create_async DatabaseCloudVmCluster#create_async}.

---

##### `data_collection_options`<sup>Optional</sup> <a name="data_collection_options" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dataCollectionOptions"></a>

```python
data_collection_options: DatabaseCloudVmClusterDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions">DatabaseCloudVmClusterDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#data_collection_options DatabaseCloudVmCluster#data_collection_options}

---

##### `data_storage_percentage`<sup>Optional</sup> <a name="data_storage_percentage" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dataStoragePercentage"></a>

```python
data_storage_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#data_storage_percentage DatabaseCloudVmCluster#data_storage_percentage}.

---

##### `data_storage_size_in_tbs`<sup>Optional</sup> <a name="data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dataStorageSizeInTbs"></a>

```python
data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#data_storage_size_in_tbs DatabaseCloudVmCluster#data_storage_size_in_tbs}.

---

##### `db_node_storage_size_in_gbs`<sup>Optional</sup> <a name="db_node_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dbNodeStorageSizeInGbs"></a>

```python
db_node_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#db_node_storage_size_in_gbs DatabaseCloudVmCluster#db_node_storage_size_in_gbs}.

---

##### `db_servers`<sup>Optional</sup> <a name="db_servers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dbServers"></a>

```python
db_servers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#db_servers DatabaseCloudVmCluster#db_servers}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#defined_tags DatabaseCloudVmCluster#defined_tags}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#domain DatabaseCloudVmCluster#domain}.

---

##### `file_system_configuration_details`<sup>Optional</sup> <a name="file_system_configuration_details" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.fileSystemConfigurationDetails"></a>

```python
file_system_configuration_details: typing.Union[IResolvable, typing.List[DatabaseCloudVmClusterFileSystemConfigurationDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails">DatabaseCloudVmClusterFileSystemConfigurationDetails</a>]]

file_system_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#file_system_configuration_details DatabaseCloudVmCluster#file_system_configuration_details}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#freeform_tags DatabaseCloudVmCluster#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#id DatabaseCloudVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_local_backup_enabled`<sup>Optional</sup> <a name="is_local_backup_enabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.isLocalBackupEnabled"></a>

```python
is_local_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_local_backup_enabled DatabaseCloudVmCluster#is_local_backup_enabled}.

---

##### `is_sparse_diskgroup_enabled`<sup>Optional</sup> <a name="is_sparse_diskgroup_enabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.isSparseDiskgroupEnabled"></a>

```python
is_sparse_diskgroup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_sparse_diskgroup_enabled DatabaseCloudVmCluster#is_sparse_diskgroup_enabled}.

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#license_model DatabaseCloudVmCluster#license_model}.

---

##### `memory_size_in_gbs`<sup>Optional</sup> <a name="memory_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.memorySizeInGbs"></a>

```python
memory_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#memory_size_in_gbs DatabaseCloudVmCluster#memory_size_in_gbs}.

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#nsg_ids DatabaseCloudVmCluster#nsg_ids}.

---

##### `ocpu_count`<sup>Optional</sup> <a name="ocpu_count" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.ocpuCount"></a>

```python
ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#ocpu_count DatabaseCloudVmCluster#ocpu_count}.

---

##### `private_zone_id`<sup>Optional</sup> <a name="private_zone_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.privateZoneId"></a>

```python
private_zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#private_zone_id DatabaseCloudVmCluster#private_zone_id}.

---

##### `scan_listener_port_tcp`<sup>Optional</sup> <a name="scan_listener_port_tcp" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.scanListenerPortTcp"></a>

```python
scan_listener_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#scan_listener_port_tcp DatabaseCloudVmCluster#scan_listener_port_tcp}.

---

##### `scan_listener_port_tcp_ssl`<sup>Optional</sup> <a name="scan_listener_port_tcp_ssl" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.scanListenerPortTcpSsl"></a>

```python
scan_listener_port_tcp_ssl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#scan_listener_port_tcp_ssl DatabaseCloudVmCluster#scan_listener_port_tcp_ssl}.

---

##### `security_attributes`<sup>Optional</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.securityAttributes"></a>

```python
security_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#security_attributes DatabaseCloudVmCluster#security_attributes}.

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#subscription_id DatabaseCloudVmCluster#subscription_id}.

---

##### `system_version`<sup>Optional</sup> <a name="system_version" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.systemVersion"></a>

```python
system_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#system_version DatabaseCloudVmCluster#system_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.timeouts"></a>

```python
timeouts: DatabaseCloudVmClusterTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts">DatabaseCloudVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#timeouts DatabaseCloudVmCluster#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#time_zone DatabaseCloudVmCluster#time_zone}.

---

### DatabaseCloudVmClusterDataCollectionOptions <a name="DatabaseCloudVmClusterDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster

databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions(
  is_diagnostics_events_enabled: typing.Union[bool, IResolvable] = None,
  is_health_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  is_incident_logs_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions.property.isDiagnosticsEventsEnabled">is_diagnostics_events_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_diagnostics_events_enabled DatabaseCloudVmCluster#is_diagnostics_events_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions.property.isHealthMonitoringEnabled">is_health_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_health_monitoring_enabled DatabaseCloudVmCluster#is_health_monitoring_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions.property.isIncidentLogsEnabled">is_incident_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_incident_logs_enabled DatabaseCloudVmCluster#is_incident_logs_enabled}. |

---

##### `is_diagnostics_events_enabled`<sup>Optional</sup> <a name="is_diagnostics_events_enabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```python
is_diagnostics_events_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_diagnostics_events_enabled DatabaseCloudVmCluster#is_diagnostics_events_enabled}.

---

##### `is_health_monitoring_enabled`<sup>Optional</sup> <a name="is_health_monitoring_enabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```python
is_health_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_health_monitoring_enabled DatabaseCloudVmCluster#is_health_monitoring_enabled}.

---

##### `is_incident_logs_enabled`<sup>Optional</sup> <a name="is_incident_logs_enabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```python
is_incident_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_incident_logs_enabled DatabaseCloudVmCluster#is_incident_logs_enabled}.

---

### DatabaseCloudVmClusterFileSystemConfigurationDetails <a name="DatabaseCloudVmClusterFileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster

databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails(
  file_system_size_gb: typing.Union[int, float] = None,
  mount_point: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails.property.fileSystemSizeGb">file_system_size_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#file_system_size_gb DatabaseCloudVmCluster#file_system_size_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails.property.mountPoint">mount_point</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#mount_point DatabaseCloudVmCluster#mount_point}. |

---

##### `file_system_size_gb`<sup>Optional</sup> <a name="file_system_size_gb" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails.property.fileSystemSizeGb"></a>

```python
file_system_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#file_system_size_gb DatabaseCloudVmCluster#file_system_size_gb}.

---

##### `mount_point`<sup>Optional</sup> <a name="mount_point" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#mount_point DatabaseCloudVmCluster#mount_point}.

---

### DatabaseCloudVmClusterIormConfigCache <a name="DatabaseCloudVmClusterIormConfigCache" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCache"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCache.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster

databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCache()
```


### DatabaseCloudVmClusterIormConfigCacheDbPlans <a name="DatabaseCloudVmClusterIormConfigCacheDbPlans" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlans.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster

databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlans()
```


### DatabaseCloudVmClusterTimeouts <a name="DatabaseCloudVmClusterTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster

databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#create DatabaseCloudVmCluster#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#delete DatabaseCloudVmCluster#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#update DatabaseCloudVmCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#create DatabaseCloudVmCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#delete DatabaseCloudVmCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#update DatabaseCloudVmCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference <a name="DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster

databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resetApplyUpdatePreferredEndTime">reset_apply_update_preferred_end_time</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resetApplyUpdatePreferredStartTime">reset_apply_update_preferred_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_apply_update_preferred_end_time` <a name="reset_apply_update_preferred_end_time" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resetApplyUpdatePreferredEndTime"></a>

```python
def reset_apply_update_preferred_end_time() -> None
```

##### `reset_apply_update_preferred_start_time` <a name="reset_apply_update_preferred_start_time" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resetApplyUpdatePreferredStartTime"></a>

```python
def reset_apply_update_preferred_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTimeInput">apply_update_preferred_end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTimeInput">apply_update_preferred_start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTime">apply_update_preferred_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTime">apply_update_preferred_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apply_update_preferred_end_time_input`<sup>Optional</sup> <a name="apply_update_preferred_end_time_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTimeInput"></a>

```python
apply_update_preferred_end_time_input: str
```

- *Type:* str

---

##### `apply_update_preferred_start_time_input`<sup>Optional</sup> <a name="apply_update_preferred_start_time_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTimeInput"></a>

```python
apply_update_preferred_start_time_input: str
```

- *Type:* str

---

##### `apply_update_preferred_end_time`<sup>Required</sup> <a name="apply_update_preferred_end_time" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTime"></a>

```python
apply_update_preferred_end_time: str
```

- *Type:* str

---

##### `apply_update_preferred_start_time`<sup>Required</sup> <a name="apply_update_preferred_start_time" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTime"></a>

```python
apply_update_preferred_start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

---


### DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference <a name="DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster

databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resetFreezePeriodEndTime">reset_freeze_period_end_time</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resetFreezePeriodStartTime">reset_freeze_period_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_freeze_period_end_time` <a name="reset_freeze_period_end_time" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resetFreezePeriodEndTime"></a>

```python
def reset_freeze_period_end_time() -> None
```

##### `reset_freeze_period_start_time` <a name="reset_freeze_period_start_time" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resetFreezePeriodStartTime"></a>

```python
def reset_freeze_period_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTimeInput">freeze_period_end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTimeInput">freeze_period_start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTime">freeze_period_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTime">freeze_period_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `freeze_period_end_time_input`<sup>Optional</sup> <a name="freeze_period_end_time_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTimeInput"></a>

```python
freeze_period_end_time_input: str
```

- *Type:* str

---

##### `freeze_period_start_time_input`<sup>Optional</sup> <a name="freeze_period_start_time_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTimeInput"></a>

```python
freeze_period_start_time_input: str
```

- *Type:* str

---

##### `freeze_period_end_time`<sup>Required</sup> <a name="freeze_period_end_time" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTime"></a>

```python
freeze_period_end_time: str
```

- *Type:* str

---

##### `freeze_period_start_time`<sup>Required</sup> <a name="freeze_period_start_time" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTime"></a>

```python
freeze_period_start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod</a>

---


### DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference <a name="DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster

databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.putApplyUpdateTimePreference">put_apply_update_time_preference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.putFreezePeriod">put_freeze_period</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resetApplyUpdateTimePreference">reset_apply_update_time_preference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resetFreezePeriod">reset_freeze_period</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resetIsEarlyAdoptionEnabled">reset_is_early_adoption_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resetIsFreezePeriodEnabled">reset_is_freeze_period_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_apply_update_time_preference` <a name="put_apply_update_time_preference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.putApplyUpdateTimePreference"></a>

```python
def put_apply_update_time_preference(
  apply_update_preferred_end_time: str = None,
  apply_update_preferred_start_time: str = None
) -> None
```

###### `apply_update_preferred_end_time`<sup>Optional</sup> <a name="apply_update_preferred_end_time" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.putApplyUpdateTimePreference.parameter.applyUpdatePreferredEndTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#apply_update_preferred_end_time DatabaseCloudVmCluster#apply_update_preferred_end_time}.

---

###### `apply_update_preferred_start_time`<sup>Optional</sup> <a name="apply_update_preferred_start_time" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.putApplyUpdateTimePreference.parameter.applyUpdatePreferredStartTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#apply_update_preferred_start_time DatabaseCloudVmCluster#apply_update_preferred_start_time}.

---

##### `put_freeze_period` <a name="put_freeze_period" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.putFreezePeriod"></a>

```python
def put_freeze_period(
  freeze_period_end_time: str = None,
  freeze_period_start_time: str = None
) -> None
```

###### `freeze_period_end_time`<sup>Optional</sup> <a name="freeze_period_end_time" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.putFreezePeriod.parameter.freezePeriodEndTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#freeze_period_end_time DatabaseCloudVmCluster#freeze_period_end_time}.

---

###### `freeze_period_start_time`<sup>Optional</sup> <a name="freeze_period_start_time" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.putFreezePeriod.parameter.freezePeriodStartTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#freeze_period_start_time DatabaseCloudVmCluster#freeze_period_start_time}.

---

##### `reset_apply_update_time_preference` <a name="reset_apply_update_time_preference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resetApplyUpdateTimePreference"></a>

```python
def reset_apply_update_time_preference() -> None
```

##### `reset_freeze_period` <a name="reset_freeze_period" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resetFreezePeriod"></a>

```python
def reset_freeze_period() -> None
```

##### `reset_is_early_adoption_enabled` <a name="reset_is_early_adoption_enabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resetIsEarlyAdoptionEnabled"></a>

```python
def reset_is_early_adoption_enabled() -> None
```

##### `reset_is_freeze_period_enabled` <a name="reset_is_freeze_period_enabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resetIsFreezePeriodEnabled"></a>

```python
def reset_is_freeze_period_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreference">apply_update_time_preference</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.freezePeriod">freeze_period</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreferenceInput">apply_update_time_preference_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.freezePeriodInput">freeze_period_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabledInput">is_early_adoption_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabledInput">is_freeze_period_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabled">is_early_adoption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabled">is_freeze_period_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails">DatabaseCloudVmClusterCloudAutomationUpdateDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apply_update_time_preference`<sup>Required</sup> <a name="apply_update_time_preference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreference"></a>

```python
apply_update_time_preference: DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference</a>

---

##### `freeze_period`<sup>Required</sup> <a name="freeze_period" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.freezePeriod"></a>

```python
freeze_period: DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference</a>

---

##### `apply_update_time_preference_input`<sup>Optional</sup> <a name="apply_update_time_preference_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreferenceInput"></a>

```python
apply_update_time_preference_input: DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

---

##### `freeze_period_input`<sup>Optional</sup> <a name="freeze_period_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.freezePeriodInput"></a>

```python
freeze_period_input: DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod</a>

---

##### `is_early_adoption_enabled_input`<sup>Optional</sup> <a name="is_early_adoption_enabled_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabledInput"></a>

```python
is_early_adoption_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_freeze_period_enabled_input`<sup>Optional</sup> <a name="is_freeze_period_enabled_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabledInput"></a>

```python
is_freeze_period_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_early_adoption_enabled`<sup>Required</sup> <a name="is_early_adoption_enabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabled"></a>

```python
is_early_adoption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_freeze_period_enabled`<sup>Required</sup> <a name="is_freeze_period_enabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabled"></a>

```python
is_freeze_period_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseCloudVmClusterCloudAutomationUpdateDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails">DatabaseCloudVmClusterCloudAutomationUpdateDetails</a>

---


### DatabaseCloudVmClusterDataCollectionOptionsOutputReference <a name="DatabaseCloudVmClusterDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster

databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">reset_is_diagnostics_events_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">reset_is_health_monitoring_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">reset_is_incident_logs_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_diagnostics_events_enabled` <a name="reset_is_diagnostics_events_enabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```python
def reset_is_diagnostics_events_enabled() -> None
```

##### `reset_is_health_monitoring_enabled` <a name="reset_is_health_monitoring_enabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```python
def reset_is_health_monitoring_enabled() -> None
```

##### `reset_is_incident_logs_enabled` <a name="reset_is_incident_logs_enabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```python
def reset_is_incident_logs_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">is_diagnostics_events_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">is_health_monitoring_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">is_incident_logs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">is_diagnostics_events_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">is_health_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">is_incident_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions">DatabaseCloudVmClusterDataCollectionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_diagnostics_events_enabled_input`<sup>Optional</sup> <a name="is_diagnostics_events_enabled_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```python
is_diagnostics_events_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_health_monitoring_enabled_input`<sup>Optional</sup> <a name="is_health_monitoring_enabled_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```python
is_health_monitoring_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_incident_logs_enabled_input`<sup>Optional</sup> <a name="is_incident_logs_enabled_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```python
is_incident_logs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_diagnostics_events_enabled`<sup>Required</sup> <a name="is_diagnostics_events_enabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```python
is_diagnostics_events_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_health_monitoring_enabled`<sup>Required</sup> <a name="is_health_monitoring_enabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```python
is_health_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_incident_logs_enabled`<sup>Required</sup> <a name="is_incident_logs_enabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```python
is_incident_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseCloudVmClusterDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions">DatabaseCloudVmClusterDataCollectionOptions</a>

---


### DatabaseCloudVmClusterFileSystemConfigurationDetailsList <a name="DatabaseCloudVmClusterFileSystemConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster

databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails">DatabaseCloudVmClusterFileSystemConfigurationDetails</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseCloudVmClusterFileSystemConfigurationDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails">DatabaseCloudVmClusterFileSystemConfigurationDetails</a>]]

---


### DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference <a name="DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster

databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.resetFileSystemSizeGb">reset_file_system_size_gb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.resetMountPoint">reset_mount_point</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_system_size_gb` <a name="reset_file_system_size_gb" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.resetFileSystemSizeGb"></a>

```python
def reset_file_system_size_gb() -> None
```

##### `reset_mount_point` <a name="reset_mount_point" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.resetMountPoint"></a>

```python
def reset_mount_point() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGbInput">file_system_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.mountPointInput">mount_point_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGb">file_system_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.mountPoint">mount_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails">DatabaseCloudVmClusterFileSystemConfigurationDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_system_size_gb_input`<sup>Optional</sup> <a name="file_system_size_gb_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGbInput"></a>

```python
file_system_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_point_input`<sup>Optional</sup> <a name="mount_point_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.mountPointInput"></a>

```python
mount_point_input: str
```

- *Type:* str

---

##### `file_system_size_gb`<sup>Required</sup> <a name="file_system_size_gb" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGb"></a>

```python
file_system_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_point`<sup>Required</sup> <a name="mount_point" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseCloudVmClusterFileSystemConfigurationDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails">DatabaseCloudVmClusterFileSystemConfigurationDetails</a>]

---


### DatabaseCloudVmClusterIormConfigCacheDbPlansList <a name="DatabaseCloudVmClusterIormConfigCacheDbPlansList" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster

databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference <a name="DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster

databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.flashCacheLimit">flash_cache_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.share">share</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlans">DatabaseCloudVmClusterIormConfigCacheDbPlans</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `flash_cache_limit`<sup>Required</sup> <a name="flash_cache_limit" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.flashCacheLimit"></a>

```python
flash_cache_limit: str
```

- *Type:* str

---

##### `share`<sup>Required</sup> <a name="share" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.share"></a>

```python
share: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseCloudVmClusterIormConfigCacheDbPlans
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlans">DatabaseCloudVmClusterIormConfigCacheDbPlans</a>

---


### DatabaseCloudVmClusterIormConfigCacheList <a name="DatabaseCloudVmClusterIormConfigCacheList" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster

databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseCloudVmClusterIormConfigCacheOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseCloudVmClusterIormConfigCacheOutputReference <a name="DatabaseCloudVmClusterIormConfigCacheOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster

databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.dbPlans">db_plans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList">DatabaseCloudVmClusterIormConfigCacheDbPlansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.objective">objective</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCache">DatabaseCloudVmClusterIormConfigCache</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_plans`<sup>Required</sup> <a name="db_plans" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.dbPlans"></a>

```python
db_plans: DatabaseCloudVmClusterIormConfigCacheDbPlansList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList">DatabaseCloudVmClusterIormConfigCacheDbPlansList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `objective`<sup>Required</sup> <a name="objective" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.objective"></a>

```python
objective: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseCloudVmClusterIormConfigCache
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCache">DatabaseCloudVmClusterIormConfigCache</a>

---


### DatabaseCloudVmClusterTimeoutsOutputReference <a name="DatabaseCloudVmClusterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster

databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts">DatabaseCloudVmClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseCloudVmClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts">DatabaseCloudVmClusterTimeouts</a>]

---



