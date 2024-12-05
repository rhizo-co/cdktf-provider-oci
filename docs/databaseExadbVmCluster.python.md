# `databaseExadbVmCluster` Submodule <a name="`databaseExadbVmCluster` Submodule" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExadbVmCluster <a name="DatabaseExadbVmCluster" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster oci_database_exadb_vm_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadb_vm_cluster

databaseExadbVmCluster.DatabaseExadbVmCluster(
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
  backup_subnet_id: str,
  compartment_id: str,
  display_name: str,
  exascale_db_storage_vault_id: str,
  grid_image_id: str,
  hostname: str,
  node_config: DatabaseExadbVmClusterNodeConfig,
  shape: str,
  ssh_public_keys: typing.List[str],
  subnet_id: str,
  backup_network_nsg_ids: typing.List[str] = None,
  cluster_name: str = None,
  data_collection_options: DatabaseExadbVmClusterDataCollectionOptions = None,
  defined_tags: typing.Mapping[str] = None,
  domain: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  license_model: str = None,
  node_resource: typing.Union[IResolvable, typing.List[DatabaseExadbVmClusterNodeResource]] = None,
  nsg_ids: typing.List[str] = None,
  private_zone_id: str = None,
  scan_listener_port_tcp: typing.Union[int, float] = None,
  scan_listener_port_tcp_ssl: typing.Union[int, float] = None,
  security_attributes: typing.Mapping[str] = None,
  system_version: str = None,
  timeouts: DatabaseExadbVmClusterTimeouts = None,
  time_zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#availability_domain DatabaseExadbVmCluster#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.backupSubnetId">backup_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#backup_subnet_id DatabaseExadbVmCluster#backup_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#compartment_id DatabaseExadbVmCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#display_name DatabaseExadbVmCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.exascaleDbStorageVaultId">exascale_db_storage_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#exascale_db_storage_vault_id DatabaseExadbVmCluster#exascale_db_storage_vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.gridImageId">grid_image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#grid_image_id DatabaseExadbVmCluster#grid_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#hostname DatabaseExadbVmCluster#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.nodeConfig">node_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig">DatabaseExadbVmClusterNodeConfig</a></code> | node_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#shape DatabaseExadbVmCluster#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#ssh_public_keys DatabaseExadbVmCluster#ssh_public_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#subnet_id DatabaseExadbVmCluster#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.backupNetworkNsgIds">backup_network_nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#backup_network_nsg_ids DatabaseExadbVmCluster#backup_network_nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#cluster_name DatabaseExadbVmCluster#cluster_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions">DatabaseExadbVmClusterDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#defined_tags DatabaseExadbVmCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#domain DatabaseExadbVmCluster#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#freeform_tags DatabaseExadbVmCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#id DatabaseExadbVmCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#license_model DatabaseExadbVmCluster#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.nodeResource">node_resource</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource">DatabaseExadbVmClusterNodeResource</a>]]</code> | node_resource block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#nsg_ids DatabaseExadbVmCluster#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.privateZoneId">private_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#private_zone_id DatabaseExadbVmCluster#private_zone_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#scan_listener_port_tcp DatabaseExadbVmCluster#scan_listener_port_tcp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.scanListenerPortTcpSsl">scan_listener_port_tcp_ssl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#scan_listener_port_tcp_ssl DatabaseExadbVmCluster#scan_listener_port_tcp_ssl}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.securityAttributes">security_attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#security_attributes DatabaseExadbVmCluster#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.systemVersion">system_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#system_version DatabaseExadbVmCluster#system_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts">DatabaseExadbVmClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#time_zone DatabaseExadbVmCluster#time_zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#availability_domain DatabaseExadbVmCluster#availability_domain}.

---

##### `backup_subnet_id`<sup>Required</sup> <a name="backup_subnet_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.backupSubnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#backup_subnet_id DatabaseExadbVmCluster#backup_subnet_id}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#compartment_id DatabaseExadbVmCluster#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#display_name DatabaseExadbVmCluster#display_name}.

---

##### `exascale_db_storage_vault_id`<sup>Required</sup> <a name="exascale_db_storage_vault_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.exascaleDbStorageVaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#exascale_db_storage_vault_id DatabaseExadbVmCluster#exascale_db_storage_vault_id}.

---

##### `grid_image_id`<sup>Required</sup> <a name="grid_image_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.gridImageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#grid_image_id DatabaseExadbVmCluster#grid_image_id}.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.hostname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#hostname DatabaseExadbVmCluster#hostname}.

---

##### `node_config`<sup>Required</sup> <a name="node_config" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.nodeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig">DatabaseExadbVmClusterNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#node_config DatabaseExadbVmCluster#node_config}

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.shape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#shape DatabaseExadbVmCluster#shape}.

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.sshPublicKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#ssh_public_keys DatabaseExadbVmCluster#ssh_public_keys}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#subnet_id DatabaseExadbVmCluster#subnet_id}.

---

##### `backup_network_nsg_ids`<sup>Optional</sup> <a name="backup_network_nsg_ids" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.backupNetworkNsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#backup_network_nsg_ids DatabaseExadbVmCluster#backup_network_nsg_ids}.

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#cluster_name DatabaseExadbVmCluster#cluster_name}.

---

##### `data_collection_options`<sup>Optional</sup> <a name="data_collection_options" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.dataCollectionOptions"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions">DatabaseExadbVmClusterDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#data_collection_options DatabaseExadbVmCluster#data_collection_options}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#defined_tags DatabaseExadbVmCluster#defined_tags}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.domain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#domain DatabaseExadbVmCluster#domain}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#freeform_tags DatabaseExadbVmCluster#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#id DatabaseExadbVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.licenseModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#license_model DatabaseExadbVmCluster#license_model}.

---

##### `node_resource`<sup>Optional</sup> <a name="node_resource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.nodeResource"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource">DatabaseExadbVmClusterNodeResource</a>]]

node_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#node_resource DatabaseExadbVmCluster#node_resource}

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.nsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#nsg_ids DatabaseExadbVmCluster#nsg_ids}.

---

##### `private_zone_id`<sup>Optional</sup> <a name="private_zone_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.privateZoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#private_zone_id DatabaseExadbVmCluster#private_zone_id}.

---

##### `scan_listener_port_tcp`<sup>Optional</sup> <a name="scan_listener_port_tcp" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.scanListenerPortTcp"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#scan_listener_port_tcp DatabaseExadbVmCluster#scan_listener_port_tcp}.

---

##### `scan_listener_port_tcp_ssl`<sup>Optional</sup> <a name="scan_listener_port_tcp_ssl" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.scanListenerPortTcpSsl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#scan_listener_port_tcp_ssl DatabaseExadbVmCluster#scan_listener_port_tcp_ssl}.

---

##### `security_attributes`<sup>Optional</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.securityAttributes"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#security_attributes DatabaseExadbVmCluster#security_attributes}.

---

##### `system_version`<sup>Optional</sup> <a name="system_version" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.systemVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#system_version DatabaseExadbVmCluster#system_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts">DatabaseExadbVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#timeouts DatabaseExadbVmCluster#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.timeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#time_zone DatabaseExadbVmCluster#time_zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putDataCollectionOptions">put_data_collection_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putNodeConfig">put_node_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putNodeResource">put_node_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetBackupNetworkNsgIds">reset_backup_network_nsg_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetClusterName">reset_cluster_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetDataCollectionOptions">reset_data_collection_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetLicenseModel">reset_license_model</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetNodeResource">reset_node_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetNsgIds">reset_nsg_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetPrivateZoneId">reset_private_zone_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetScanListenerPortTcp">reset_scan_listener_port_tcp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetScanListenerPortTcpSsl">reset_scan_listener_port_tcp_ssl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetSecurityAttributes">reset_security_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetSystemVersion">reset_system_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_collection_options` <a name="put_data_collection_options" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putDataCollectionOptions"></a>

```python
def put_data_collection_options(
  is_diagnostics_events_enabled: typing.Union[bool, IResolvable] = None,
  is_health_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  is_incident_logs_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `is_diagnostics_events_enabled`<sup>Optional</sup> <a name="is_diagnostics_events_enabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putDataCollectionOptions.parameter.isDiagnosticsEventsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#is_diagnostics_events_enabled DatabaseExadbVmCluster#is_diagnostics_events_enabled}.

---

###### `is_health_monitoring_enabled`<sup>Optional</sup> <a name="is_health_monitoring_enabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putDataCollectionOptions.parameter.isHealthMonitoringEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#is_health_monitoring_enabled DatabaseExadbVmCluster#is_health_monitoring_enabled}.

---

###### `is_incident_logs_enabled`<sup>Optional</sup> <a name="is_incident_logs_enabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putDataCollectionOptions.parameter.isIncidentLogsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#is_incident_logs_enabled DatabaseExadbVmCluster#is_incident_logs_enabled}.

---

##### `put_node_config` <a name="put_node_config" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putNodeConfig"></a>

```python
def put_node_config(
  enabled_ecpu_count_per_node: typing.Union[int, float],
  total_ecpu_count_per_node: typing.Union[int, float],
  vm_file_system_storage_size_gbs_per_node: typing.Union[int, float]
) -> None
```

###### `enabled_ecpu_count_per_node`<sup>Required</sup> <a name="enabled_ecpu_count_per_node" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putNodeConfig.parameter.enabledEcpuCountPerNode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#enabled_ecpu_count_per_node DatabaseExadbVmCluster#enabled_ecpu_count_per_node}.

---

###### `total_ecpu_count_per_node`<sup>Required</sup> <a name="total_ecpu_count_per_node" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putNodeConfig.parameter.totalEcpuCountPerNode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#total_ecpu_count_per_node DatabaseExadbVmCluster#total_ecpu_count_per_node}.

---

###### `vm_file_system_storage_size_gbs_per_node`<sup>Required</sup> <a name="vm_file_system_storage_size_gbs_per_node" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putNodeConfig.parameter.vmFileSystemStorageSizeGbsPerNode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#vm_file_system_storage_size_gbs_per_node DatabaseExadbVmCluster#vm_file_system_storage_size_gbs_per_node}.

---

##### `put_node_resource` <a name="put_node_resource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putNodeResource"></a>

```python
def put_node_resource(
  value: typing.Union[IResolvable, typing.List[DatabaseExadbVmClusterNodeResource]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putNodeResource.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource">DatabaseExadbVmClusterNodeResource</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#create DatabaseExadbVmCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#delete DatabaseExadbVmCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#update DatabaseExadbVmCluster#update}.

---

##### `reset_backup_network_nsg_ids` <a name="reset_backup_network_nsg_ids" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetBackupNetworkNsgIds"></a>

```python
def reset_backup_network_nsg_ids() -> None
```

##### `reset_cluster_name` <a name="reset_cluster_name" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetClusterName"></a>

```python
def reset_cluster_name() -> None
```

##### `reset_data_collection_options` <a name="reset_data_collection_options" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetDataCollectionOptions"></a>

```python
def reset_data_collection_options() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_domain` <a name="reset_domain" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_license_model` <a name="reset_license_model" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetLicenseModel"></a>

```python
def reset_license_model() -> None
```

##### `reset_node_resource` <a name="reset_node_resource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetNodeResource"></a>

```python
def reset_node_resource() -> None
```

##### `reset_nsg_ids` <a name="reset_nsg_ids" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetNsgIds"></a>

```python
def reset_nsg_ids() -> None
```

##### `reset_private_zone_id` <a name="reset_private_zone_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetPrivateZoneId"></a>

```python
def reset_private_zone_id() -> None
```

##### `reset_scan_listener_port_tcp` <a name="reset_scan_listener_port_tcp" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetScanListenerPortTcp"></a>

```python
def reset_scan_listener_port_tcp() -> None
```

##### `reset_scan_listener_port_tcp_ssl` <a name="reset_scan_listener_port_tcp_ssl" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetScanListenerPortTcpSsl"></a>

```python
def reset_scan_listener_port_tcp_ssl() -> None
```

##### `reset_security_attributes` <a name="reset_security_attributes" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetSecurityAttributes"></a>

```python
def reset_security_attributes() -> None
```

##### `reset_system_version` <a name="reset_system_version" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetSystemVersion"></a>

```python
def reset_system_version() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseExadbVmCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadb_vm_cluster

databaseExadbVmCluster.DatabaseExadbVmCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadb_vm_cluster

databaseExadbVmCluster.DatabaseExadbVmCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadb_vm_cluster

databaseExadbVmCluster.DatabaseExadbVmCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadb_vm_cluster

databaseExadbVmCluster.DatabaseExadbVmCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseExadbVmCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseExadbVmCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseExadbVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExadbVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference">DatabaseExadbVmClusterDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.giVersion">gi_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.gridImageType">grid_image_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.iormConfigCache">iorm_config_cache</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList">DatabaseExadbVmClusterIormConfigCacheList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.lastUpdateHistoryEntryId">last_update_history_entry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.listenerPort">listener_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nodeConfig">node_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference">DatabaseExadbVmClusterNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nodeResource">node_resource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList">DatabaseExadbVmClusterNodeResourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanDnsName">scan_dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanDnsRecordId">scan_dns_record_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanIpIds">scan_ip_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference">DatabaseExadbVmClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.vipIds">vip_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.backupNetworkNsgIdsInput">backup_network_nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.backupSubnetIdInput">backup_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.dataCollectionOptionsInput">data_collection_options_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions">DatabaseExadbVmClusterDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.exascaleDbStorageVaultIdInput">exascale_db_storage_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.gridImageIdInput">grid_image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.licenseModelInput">license_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nodeConfigInput">node_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig">DatabaseExadbVmClusterNodeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nodeResourceInput">node_resource_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource">DatabaseExadbVmClusterNodeResource</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nsgIdsInput">nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.privateZoneIdInput">private_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanListenerPortTcpInput">scan_listener_port_tcp_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanListenerPortTcpSslInput">scan_listener_port_tcp_ssl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.securityAttributesInput">security_attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.shapeInput">shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.sshPublicKeysInput">ssh_public_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.systemVersionInput">system_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts">DatabaseExadbVmClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.backupNetworkNsgIds">backup_network_nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.backupSubnetId">backup_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.exascaleDbStorageVaultId">exascale_db_storage_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.gridImageId">grid_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.privateZoneId">private_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanListenerPortTcpSsl">scan_listener_port_tcp_ssl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.securityAttributes">security_attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.systemVersion">system_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_collection_options`<sup>Required</sup> <a name="data_collection_options" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.dataCollectionOptions"></a>

```python
data_collection_options: DatabaseExadbVmClusterDataCollectionOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference">DatabaseExadbVmClusterDataCollectionOptionsOutputReference</a>

---

##### `gi_version`<sup>Required</sup> <a name="gi_version" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.giVersion"></a>

```python
gi_version: str
```

- *Type:* str

---

##### `grid_image_type`<sup>Required</sup> <a name="grid_image_type" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.gridImageType"></a>

```python
grid_image_type: str
```

- *Type:* str

---

##### `iorm_config_cache`<sup>Required</sup> <a name="iorm_config_cache" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.iormConfigCache"></a>

```python
iorm_config_cache: DatabaseExadbVmClusterIormConfigCacheList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList">DatabaseExadbVmClusterIormConfigCacheList</a>

---

##### `last_update_history_entry_id`<sup>Required</sup> <a name="last_update_history_entry_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.lastUpdateHistoryEntryId"></a>

```python
last_update_history_entry_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `listener_port`<sup>Required</sup> <a name="listener_port" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.listenerPort"></a>

```python
listener_port: str
```

- *Type:* str

---

##### `node_config`<sup>Required</sup> <a name="node_config" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nodeConfig"></a>

```python
node_config: DatabaseExadbVmClusterNodeConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference">DatabaseExadbVmClusterNodeConfigOutputReference</a>

---

##### `node_resource`<sup>Required</sup> <a name="node_resource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nodeResource"></a>

```python
node_resource: DatabaseExadbVmClusterNodeResourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList">DatabaseExadbVmClusterNodeResourceList</a>

---

##### `scan_dns_name`<sup>Required</sup> <a name="scan_dns_name" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanDnsName"></a>

```python
scan_dns_name: str
```

- *Type:* str

---

##### `scan_dns_record_id`<sup>Required</sup> <a name="scan_dns_record_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanDnsRecordId"></a>

```python
scan_dns_record_id: str
```

- *Type:* str

---

##### `scan_ip_ids`<sup>Required</sup> <a name="scan_ip_ids" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanIpIds"></a>

```python
scan_ip_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeouts"></a>

```python
timeouts: DatabaseExadbVmClusterTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference">DatabaseExadbVmClusterTimeoutsOutputReference</a>

---

##### `vip_ids`<sup>Required</sup> <a name="vip_ids" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.vipIds"></a>

```python
vip_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `backup_network_nsg_ids_input`<sup>Optional</sup> <a name="backup_network_nsg_ids_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.backupNetworkNsgIdsInput"></a>

```python
backup_network_nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_subnet_id_input`<sup>Optional</sup> <a name="backup_subnet_id_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.backupSubnetIdInput"></a>

```python
backup_subnet_id_input: str
```

- *Type:* str

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `data_collection_options_input`<sup>Optional</sup> <a name="data_collection_options_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.dataCollectionOptionsInput"></a>

```python
data_collection_options_input: DatabaseExadbVmClusterDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions">DatabaseExadbVmClusterDataCollectionOptions</a>

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `exascale_db_storage_vault_id_input`<sup>Optional</sup> <a name="exascale_db_storage_vault_id_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.exascaleDbStorageVaultIdInput"></a>

```python
exascale_db_storage_vault_id_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `grid_image_id_input`<sup>Optional</sup> <a name="grid_image_id_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.gridImageIdInput"></a>

```python
grid_image_id_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `license_model_input`<sup>Optional</sup> <a name="license_model_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.licenseModelInput"></a>

```python
license_model_input: str
```

- *Type:* str

---

##### `node_config_input`<sup>Optional</sup> <a name="node_config_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nodeConfigInput"></a>

```python
node_config_input: DatabaseExadbVmClusterNodeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig">DatabaseExadbVmClusterNodeConfig</a>

---

##### `node_resource_input`<sup>Optional</sup> <a name="node_resource_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nodeResourceInput"></a>

```python
node_resource_input: typing.Union[IResolvable, typing.List[DatabaseExadbVmClusterNodeResource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource">DatabaseExadbVmClusterNodeResource</a>]]

---

##### `nsg_ids_input`<sup>Optional</sup> <a name="nsg_ids_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nsgIdsInput"></a>

```python
nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_zone_id_input`<sup>Optional</sup> <a name="private_zone_id_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.privateZoneIdInput"></a>

```python
private_zone_id_input: str
```

- *Type:* str

---

##### `scan_listener_port_tcp_input`<sup>Optional</sup> <a name="scan_listener_port_tcp_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanListenerPortTcpInput"></a>

```python
scan_listener_port_tcp_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_tcp_ssl_input`<sup>Optional</sup> <a name="scan_listener_port_tcp_ssl_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanListenerPortTcpSslInput"></a>

```python
scan_listener_port_tcp_ssl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_attributes_input`<sup>Optional</sup> <a name="security_attributes_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.securityAttributesInput"></a>

```python
security_attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `shape_input`<sup>Optional</sup> <a name="shape_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.shapeInput"></a>

```python
shape_input: str
```

- *Type:* str

---

##### `ssh_public_keys_input`<sup>Optional</sup> <a name="ssh_public_keys_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.sshPublicKeysInput"></a>

```python
ssh_public_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `system_version_input`<sup>Optional</sup> <a name="system_version_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.systemVersionInput"></a>

```python
system_version_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseExadbVmClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts">DatabaseExadbVmClusterTimeouts</a>]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `backup_network_nsg_ids`<sup>Required</sup> <a name="backup_network_nsg_ids" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.backupNetworkNsgIds"></a>

```python
backup_network_nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_subnet_id`<sup>Required</sup> <a name="backup_subnet_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.backupSubnetId"></a>

```python
backup_subnet_id: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `exascale_db_storage_vault_id`<sup>Required</sup> <a name="exascale_db_storage_vault_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.exascaleDbStorageVaultId"></a>

```python
exascale_db_storage_vault_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `grid_image_id`<sup>Required</sup> <a name="grid_image_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.gridImageId"></a>

```python
grid_image_id: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_zone_id`<sup>Required</sup> <a name="private_zone_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.privateZoneId"></a>

```python
private_zone_id: str
```

- *Type:* str

---

##### `scan_listener_port_tcp`<sup>Required</sup> <a name="scan_listener_port_tcp" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanListenerPortTcp"></a>

```python
scan_listener_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_tcp_ssl`<sup>Required</sup> <a name="scan_listener_port_tcp_ssl" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanListenerPortTcpSsl"></a>

```python
scan_listener_port_tcp_ssl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_attributes`<sup>Required</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.securityAttributes"></a>

```python
security_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `system_version`<sup>Required</sup> <a name="system_version" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.systemVersion"></a>

```python
system_version: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExadbVmClusterConfig <a name="DatabaseExadbVmClusterConfig" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadb_vm_cluster

databaseExadbVmCluster.DatabaseExadbVmClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_domain: str,
  backup_subnet_id: str,
  compartment_id: str,
  display_name: str,
  exascale_db_storage_vault_id: str,
  grid_image_id: str,
  hostname: str,
  node_config: DatabaseExadbVmClusterNodeConfig,
  shape: str,
  ssh_public_keys: typing.List[str],
  subnet_id: str,
  backup_network_nsg_ids: typing.List[str] = None,
  cluster_name: str = None,
  data_collection_options: DatabaseExadbVmClusterDataCollectionOptions = None,
  defined_tags: typing.Mapping[str] = None,
  domain: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  license_model: str = None,
  node_resource: typing.Union[IResolvable, typing.List[DatabaseExadbVmClusterNodeResource]] = None,
  nsg_ids: typing.List[str] = None,
  private_zone_id: str = None,
  scan_listener_port_tcp: typing.Union[int, float] = None,
  scan_listener_port_tcp_ssl: typing.Union[int, float] = None,
  security_attributes: typing.Mapping[str] = None,
  system_version: str = None,
  timeouts: DatabaseExadbVmClusterTimeouts = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#availability_domain DatabaseExadbVmCluster#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.backupSubnetId">backup_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#backup_subnet_id DatabaseExadbVmCluster#backup_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#compartment_id DatabaseExadbVmCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#display_name DatabaseExadbVmCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.exascaleDbStorageVaultId">exascale_db_storage_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#exascale_db_storage_vault_id DatabaseExadbVmCluster#exascale_db_storage_vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.gridImageId">grid_image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#grid_image_id DatabaseExadbVmCluster#grid_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#hostname DatabaseExadbVmCluster#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.nodeConfig">node_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig">DatabaseExadbVmClusterNodeConfig</a></code> | node_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#shape DatabaseExadbVmCluster#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#ssh_public_keys DatabaseExadbVmCluster#ssh_public_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#subnet_id DatabaseExadbVmCluster#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.backupNetworkNsgIds">backup_network_nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#backup_network_nsg_ids DatabaseExadbVmCluster#backup_network_nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#cluster_name DatabaseExadbVmCluster#cluster_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions">DatabaseExadbVmClusterDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#defined_tags DatabaseExadbVmCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#domain DatabaseExadbVmCluster#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#freeform_tags DatabaseExadbVmCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#id DatabaseExadbVmCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#license_model DatabaseExadbVmCluster#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.nodeResource">node_resource</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource">DatabaseExadbVmClusterNodeResource</a>]]</code> | node_resource block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#nsg_ids DatabaseExadbVmCluster#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.privateZoneId">private_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#private_zone_id DatabaseExadbVmCluster#private_zone_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#scan_listener_port_tcp DatabaseExadbVmCluster#scan_listener_port_tcp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.scanListenerPortTcpSsl">scan_listener_port_tcp_ssl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#scan_listener_port_tcp_ssl DatabaseExadbVmCluster#scan_listener_port_tcp_ssl}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.securityAttributes">security_attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#security_attributes DatabaseExadbVmCluster#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.systemVersion">system_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#system_version DatabaseExadbVmCluster#system_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts">DatabaseExadbVmClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#time_zone DatabaseExadbVmCluster#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#availability_domain DatabaseExadbVmCluster#availability_domain}.

---

##### `backup_subnet_id`<sup>Required</sup> <a name="backup_subnet_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.backupSubnetId"></a>

```python
backup_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#backup_subnet_id DatabaseExadbVmCluster#backup_subnet_id}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#compartment_id DatabaseExadbVmCluster#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#display_name DatabaseExadbVmCluster#display_name}.

---

##### `exascale_db_storage_vault_id`<sup>Required</sup> <a name="exascale_db_storage_vault_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.exascaleDbStorageVaultId"></a>

```python
exascale_db_storage_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#exascale_db_storage_vault_id DatabaseExadbVmCluster#exascale_db_storage_vault_id}.

---

##### `grid_image_id`<sup>Required</sup> <a name="grid_image_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.gridImageId"></a>

```python
grid_image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#grid_image_id DatabaseExadbVmCluster#grid_image_id}.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#hostname DatabaseExadbVmCluster#hostname}.

---

##### `node_config`<sup>Required</sup> <a name="node_config" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.nodeConfig"></a>

```python
node_config: DatabaseExadbVmClusterNodeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig">DatabaseExadbVmClusterNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#node_config DatabaseExadbVmCluster#node_config}

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.shape"></a>

```python
shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#shape DatabaseExadbVmCluster#shape}.

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#ssh_public_keys DatabaseExadbVmCluster#ssh_public_keys}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#subnet_id DatabaseExadbVmCluster#subnet_id}.

---

##### `backup_network_nsg_ids`<sup>Optional</sup> <a name="backup_network_nsg_ids" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.backupNetworkNsgIds"></a>

```python
backup_network_nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#backup_network_nsg_ids DatabaseExadbVmCluster#backup_network_nsg_ids}.

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#cluster_name DatabaseExadbVmCluster#cluster_name}.

---

##### `data_collection_options`<sup>Optional</sup> <a name="data_collection_options" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.dataCollectionOptions"></a>

```python
data_collection_options: DatabaseExadbVmClusterDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions">DatabaseExadbVmClusterDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#data_collection_options DatabaseExadbVmCluster#data_collection_options}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#defined_tags DatabaseExadbVmCluster#defined_tags}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#domain DatabaseExadbVmCluster#domain}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#freeform_tags DatabaseExadbVmCluster#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#id DatabaseExadbVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#license_model DatabaseExadbVmCluster#license_model}.

---

##### `node_resource`<sup>Optional</sup> <a name="node_resource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.nodeResource"></a>

```python
node_resource: typing.Union[IResolvable, typing.List[DatabaseExadbVmClusterNodeResource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource">DatabaseExadbVmClusterNodeResource</a>]]

node_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#node_resource DatabaseExadbVmCluster#node_resource}

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#nsg_ids DatabaseExadbVmCluster#nsg_ids}.

---

##### `private_zone_id`<sup>Optional</sup> <a name="private_zone_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.privateZoneId"></a>

```python
private_zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#private_zone_id DatabaseExadbVmCluster#private_zone_id}.

---

##### `scan_listener_port_tcp`<sup>Optional</sup> <a name="scan_listener_port_tcp" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.scanListenerPortTcp"></a>

```python
scan_listener_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#scan_listener_port_tcp DatabaseExadbVmCluster#scan_listener_port_tcp}.

---

##### `scan_listener_port_tcp_ssl`<sup>Optional</sup> <a name="scan_listener_port_tcp_ssl" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.scanListenerPortTcpSsl"></a>

```python
scan_listener_port_tcp_ssl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#scan_listener_port_tcp_ssl DatabaseExadbVmCluster#scan_listener_port_tcp_ssl}.

---

##### `security_attributes`<sup>Optional</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.securityAttributes"></a>

```python
security_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#security_attributes DatabaseExadbVmCluster#security_attributes}.

---

##### `system_version`<sup>Optional</sup> <a name="system_version" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.systemVersion"></a>

```python
system_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#system_version DatabaseExadbVmCluster#system_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.timeouts"></a>

```python
timeouts: DatabaseExadbVmClusterTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts">DatabaseExadbVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#timeouts DatabaseExadbVmCluster#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#time_zone DatabaseExadbVmCluster#time_zone}.

---

### DatabaseExadbVmClusterDataCollectionOptions <a name="DatabaseExadbVmClusterDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadb_vm_cluster

databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions(
  is_diagnostics_events_enabled: typing.Union[bool, IResolvable] = None,
  is_health_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  is_incident_logs_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions.property.isDiagnosticsEventsEnabled">is_diagnostics_events_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#is_diagnostics_events_enabled DatabaseExadbVmCluster#is_diagnostics_events_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions.property.isHealthMonitoringEnabled">is_health_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#is_health_monitoring_enabled DatabaseExadbVmCluster#is_health_monitoring_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions.property.isIncidentLogsEnabled">is_incident_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#is_incident_logs_enabled DatabaseExadbVmCluster#is_incident_logs_enabled}. |

---

##### `is_diagnostics_events_enabled`<sup>Optional</sup> <a name="is_diagnostics_events_enabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```python
is_diagnostics_events_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#is_diagnostics_events_enabled DatabaseExadbVmCluster#is_diagnostics_events_enabled}.

---

##### `is_health_monitoring_enabled`<sup>Optional</sup> <a name="is_health_monitoring_enabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```python
is_health_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#is_health_monitoring_enabled DatabaseExadbVmCluster#is_health_monitoring_enabled}.

---

##### `is_incident_logs_enabled`<sup>Optional</sup> <a name="is_incident_logs_enabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```python
is_incident_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#is_incident_logs_enabled DatabaseExadbVmCluster#is_incident_logs_enabled}.

---

### DatabaseExadbVmClusterIormConfigCache <a name="DatabaseExadbVmClusterIormConfigCache" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCache"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCache.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadb_vm_cluster

databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCache()
```


### DatabaseExadbVmClusterIormConfigCacheDbPlans <a name="DatabaseExadbVmClusterIormConfigCacheDbPlans" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlans.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadb_vm_cluster

databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlans()
```


### DatabaseExadbVmClusterNodeConfig <a name="DatabaseExadbVmClusterNodeConfig" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadb_vm_cluster

databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig(
  enabled_ecpu_count_per_node: typing.Union[int, float],
  total_ecpu_count_per_node: typing.Union[int, float],
  vm_file_system_storage_size_gbs_per_node: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig.property.enabledEcpuCountPerNode">enabled_ecpu_count_per_node</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#enabled_ecpu_count_per_node DatabaseExadbVmCluster#enabled_ecpu_count_per_node}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig.property.totalEcpuCountPerNode">total_ecpu_count_per_node</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#total_ecpu_count_per_node DatabaseExadbVmCluster#total_ecpu_count_per_node}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig.property.vmFileSystemStorageSizeGbsPerNode">vm_file_system_storage_size_gbs_per_node</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#vm_file_system_storage_size_gbs_per_node DatabaseExadbVmCluster#vm_file_system_storage_size_gbs_per_node}. |

---

##### `enabled_ecpu_count_per_node`<sup>Required</sup> <a name="enabled_ecpu_count_per_node" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig.property.enabledEcpuCountPerNode"></a>

```python
enabled_ecpu_count_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#enabled_ecpu_count_per_node DatabaseExadbVmCluster#enabled_ecpu_count_per_node}.

---

##### `total_ecpu_count_per_node`<sup>Required</sup> <a name="total_ecpu_count_per_node" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig.property.totalEcpuCountPerNode"></a>

```python
total_ecpu_count_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#total_ecpu_count_per_node DatabaseExadbVmCluster#total_ecpu_count_per_node}.

---

##### `vm_file_system_storage_size_gbs_per_node`<sup>Required</sup> <a name="vm_file_system_storage_size_gbs_per_node" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig.property.vmFileSystemStorageSizeGbsPerNode"></a>

```python
vm_file_system_storage_size_gbs_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#vm_file_system_storage_size_gbs_per_node DatabaseExadbVmCluster#vm_file_system_storage_size_gbs_per_node}.

---

### DatabaseExadbVmClusterNodeResource <a name="DatabaseExadbVmClusterNodeResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadb_vm_cluster

databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource(
  node_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource.property.nodeName">node_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#node_name DatabaseExadbVmCluster#node_name}. |

---

##### `node_name`<sup>Required</sup> <a name="node_name" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource.property.nodeName"></a>

```python
node_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#node_name DatabaseExadbVmCluster#node_name}.

---

### DatabaseExadbVmClusterTimeouts <a name="DatabaseExadbVmClusterTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadb_vm_cluster

databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#create DatabaseExadbVmCluster#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#delete DatabaseExadbVmCluster#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#update DatabaseExadbVmCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#create DatabaseExadbVmCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#delete DatabaseExadbVmCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#update DatabaseExadbVmCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExadbVmClusterDataCollectionOptionsOutputReference <a name="DatabaseExadbVmClusterDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadb_vm_cluster

databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">reset_is_diagnostics_events_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">reset_is_health_monitoring_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">reset_is_incident_logs_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_diagnostics_events_enabled` <a name="reset_is_diagnostics_events_enabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```python
def reset_is_diagnostics_events_enabled() -> None
```

##### `reset_is_health_monitoring_enabled` <a name="reset_is_health_monitoring_enabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```python
def reset_is_health_monitoring_enabled() -> None
```

##### `reset_is_incident_logs_enabled` <a name="reset_is_incident_logs_enabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```python
def reset_is_incident_logs_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">is_diagnostics_events_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">is_health_monitoring_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">is_incident_logs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">is_diagnostics_events_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">is_health_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">is_incident_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions">DatabaseExadbVmClusterDataCollectionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_diagnostics_events_enabled_input`<sup>Optional</sup> <a name="is_diagnostics_events_enabled_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```python
is_diagnostics_events_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_health_monitoring_enabled_input`<sup>Optional</sup> <a name="is_health_monitoring_enabled_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```python
is_health_monitoring_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_incident_logs_enabled_input`<sup>Optional</sup> <a name="is_incident_logs_enabled_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```python
is_incident_logs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_diagnostics_events_enabled`<sup>Required</sup> <a name="is_diagnostics_events_enabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```python
is_diagnostics_events_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_health_monitoring_enabled`<sup>Required</sup> <a name="is_health_monitoring_enabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```python
is_health_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_incident_logs_enabled`<sup>Required</sup> <a name="is_incident_logs_enabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```python
is_incident_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseExadbVmClusterDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions">DatabaseExadbVmClusterDataCollectionOptions</a>

---


### DatabaseExadbVmClusterIormConfigCacheDbPlansList <a name="DatabaseExadbVmClusterIormConfigCacheDbPlansList" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadb_vm_cluster

databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference <a name="DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadb_vm_cluster

databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.flashCacheLimit">flash_cache_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.share">share</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlans">DatabaseExadbVmClusterIormConfigCacheDbPlans</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `flash_cache_limit`<sup>Required</sup> <a name="flash_cache_limit" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.flashCacheLimit"></a>

```python
flash_cache_limit: str
```

- *Type:* str

---

##### `share`<sup>Required</sup> <a name="share" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.share"></a>

```python
share: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseExadbVmClusterIormConfigCacheDbPlans
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlans">DatabaseExadbVmClusterIormConfigCacheDbPlans</a>

---


### DatabaseExadbVmClusterIormConfigCacheList <a name="DatabaseExadbVmClusterIormConfigCacheList" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadb_vm_cluster

databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseExadbVmClusterIormConfigCacheOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseExadbVmClusterIormConfigCacheOutputReference <a name="DatabaseExadbVmClusterIormConfigCacheOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadb_vm_cluster

databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.dbPlans">db_plans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList">DatabaseExadbVmClusterIormConfigCacheDbPlansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.objective">objective</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCache">DatabaseExadbVmClusterIormConfigCache</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_plans`<sup>Required</sup> <a name="db_plans" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.dbPlans"></a>

```python
db_plans: DatabaseExadbVmClusterIormConfigCacheDbPlansList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList">DatabaseExadbVmClusterIormConfigCacheDbPlansList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `objective`<sup>Required</sup> <a name="objective" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.objective"></a>

```python
objective: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseExadbVmClusterIormConfigCache
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCache">DatabaseExadbVmClusterIormConfigCache</a>

---


### DatabaseExadbVmClusterNodeConfigOutputReference <a name="DatabaseExadbVmClusterNodeConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadb_vm_cluster

databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.memorySizeInGbsPerNode">memory_size_in_gbs_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.snapshotFileSystemStorageSizeGbsPerNode">snapshot_file_system_storage_size_gbs_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.totalFileSystemStorageSizeGbsPerNode">total_file_system_storage_size_gbs_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.enabledEcpuCountPerNodeInput">enabled_ecpu_count_per_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.totalEcpuCountPerNodeInput">total_ecpu_count_per_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.vmFileSystemStorageSizeGbsPerNodeInput">vm_file_system_storage_size_gbs_per_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.enabledEcpuCountPerNode">enabled_ecpu_count_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.totalEcpuCountPerNode">total_ecpu_count_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.vmFileSystemStorageSizeGbsPerNode">vm_file_system_storage_size_gbs_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig">DatabaseExadbVmClusterNodeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_size_in_gbs_per_node`<sup>Required</sup> <a name="memory_size_in_gbs_per_node" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.memorySizeInGbsPerNode"></a>

```python
memory_size_in_gbs_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_file_system_storage_size_gbs_per_node`<sup>Required</sup> <a name="snapshot_file_system_storage_size_gbs_per_node" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.snapshotFileSystemStorageSizeGbsPerNode"></a>

```python
snapshot_file_system_storage_size_gbs_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_file_system_storage_size_gbs_per_node`<sup>Required</sup> <a name="total_file_system_storage_size_gbs_per_node" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.totalFileSystemStorageSizeGbsPerNode"></a>

```python
total_file_system_storage_size_gbs_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled_ecpu_count_per_node_input`<sup>Optional</sup> <a name="enabled_ecpu_count_per_node_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.enabledEcpuCountPerNodeInput"></a>

```python
enabled_ecpu_count_per_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_ecpu_count_per_node_input`<sup>Optional</sup> <a name="total_ecpu_count_per_node_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.totalEcpuCountPerNodeInput"></a>

```python
total_ecpu_count_per_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vm_file_system_storage_size_gbs_per_node_input`<sup>Optional</sup> <a name="vm_file_system_storage_size_gbs_per_node_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.vmFileSystemStorageSizeGbsPerNodeInput"></a>

```python
vm_file_system_storage_size_gbs_per_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled_ecpu_count_per_node`<sup>Required</sup> <a name="enabled_ecpu_count_per_node" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.enabledEcpuCountPerNode"></a>

```python
enabled_ecpu_count_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_ecpu_count_per_node`<sup>Required</sup> <a name="total_ecpu_count_per_node" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.totalEcpuCountPerNode"></a>

```python
total_ecpu_count_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vm_file_system_storage_size_gbs_per_node`<sup>Required</sup> <a name="vm_file_system_storage_size_gbs_per_node" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.vmFileSystemStorageSizeGbsPerNode"></a>

```python
vm_file_system_storage_size_gbs_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseExadbVmClusterNodeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig">DatabaseExadbVmClusterNodeConfig</a>

---


### DatabaseExadbVmClusterNodeResourceList <a name="DatabaseExadbVmClusterNodeResourceList" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadb_vm_cluster

databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseExadbVmClusterNodeResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource">DatabaseExadbVmClusterNodeResource</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseExadbVmClusterNodeResource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource">DatabaseExadbVmClusterNodeResource</a>]]

---


### DatabaseExadbVmClusterNodeResourceOutputReference <a name="DatabaseExadbVmClusterNodeResourceOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadb_vm_cluster

databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.nodeHostname">node_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.nodeId">node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.nodeNameInput">node_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.nodeName">node_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource">DatabaseExadbVmClusterNodeResource</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_hostname`<sup>Required</sup> <a name="node_hostname" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.nodeHostname"></a>

```python
node_hostname: str
```

- *Type:* str

---

##### `node_id`<sup>Required</sup> <a name="node_id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.nodeId"></a>

```python
node_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `node_name_input`<sup>Optional</sup> <a name="node_name_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.nodeNameInput"></a>

```python
node_name_input: str
```

- *Type:* str

---

##### `node_name`<sup>Required</sup> <a name="node_name" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.nodeName"></a>

```python
node_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseExadbVmClusterNodeResource]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource">DatabaseExadbVmClusterNodeResource</a>]

---


### DatabaseExadbVmClusterTimeoutsOutputReference <a name="DatabaseExadbVmClusterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadb_vm_cluster

databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts">DatabaseExadbVmClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseExadbVmClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts">DatabaseExadbVmClusterTimeouts</a>]

---



