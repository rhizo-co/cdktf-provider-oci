# `databaseDataGuardAssociation` Submodule <a name="`databaseDataGuardAssociation` Submodule" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseDataGuardAssociation <a name="DatabaseDataGuardAssociation" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association oci_database_data_guard_association}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_data_guard_association

databaseDataGuardAssociation.DatabaseDataGuardAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  creation_type: str,
  database_admin_password: str,
  database_id: str,
  delete_standby_db_home_on_delete: str,
  protection_mode: str,
  transport_type: str,
  availability_domain: str = None,
  backup_network_nsg_ids: typing.List[str] = None,
  cpu_core_count: typing.Union[int, float] = None,
  create_async: typing.Union[bool, IResolvable] = None,
  database_defined_tags: typing.Mapping[str] = None,
  database_freeform_tags: typing.Mapping[str] = None,
  database_software_image_id: str = None,
  data_collection_options: DatabaseDataGuardAssociationDataCollectionOptions = None,
  db_system_defined_tags: typing.Mapping[str] = None,
  db_system_freeform_tags: typing.Mapping[str] = None,
  db_system_security_attributes: typing.Mapping[str] = None,
  display_name: str = None,
  domain: str = None,
  fault_domains: typing.List[str] = None,
  hostname: str = None,
  id: str = None,
  is_active_data_guard_enabled: typing.Union[bool, IResolvable] = None,
  license_model: str = None,
  node_count: typing.Union[int, float] = None,
  nsg_ids: typing.List[str] = None,
  peer_db_home_id: str = None,
  peer_db_system_id: str = None,
  peer_db_unique_name: str = None,
  peer_sid_prefix: str = None,
  peer_vm_cluster_id: str = None,
  private_ip: str = None,
  shape: str = None,
  storage_volume_performance_mode: str = None,
  subnet_id: str = None,
  timeouts: DatabaseDataGuardAssociationTimeouts = None,
  time_zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.creationType">creation_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#creation_type DatabaseDataGuardAssociation#creation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.databaseAdminPassword">database_admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_admin_password DatabaseDataGuardAssociation#database_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_id DatabaseDataGuardAssociation#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.deleteStandbyDbHomeOnDelete">delete_standby_db_home_on_delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#delete_standby_db_home_on_delete DatabaseDataGuardAssociation#delete_standby_db_home_on_delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.protectionMode">protection_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#protection_mode DatabaseDataGuardAssociation#protection_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.transportType">transport_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#transport_type DatabaseDataGuardAssociation#transport_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#availability_domain DatabaseDataGuardAssociation#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.backupNetworkNsgIds">backup_network_nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#backup_network_nsg_ids DatabaseDataGuardAssociation#backup_network_nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#cpu_core_count DatabaseDataGuardAssociation#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.createAsync">create_async</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#create_async DatabaseDataGuardAssociation#create_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.databaseDefinedTags">database_defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_defined_tags DatabaseDataGuardAssociation#database_defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.databaseFreeformTags">database_freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_freeform_tags DatabaseDataGuardAssociation#database_freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.databaseSoftwareImageId">database_software_image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_software_image_id DatabaseDataGuardAssociation#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.dbSystemDefinedTags">db_system_defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_defined_tags DatabaseDataGuardAssociation#db_system_defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.dbSystemFreeformTags">db_system_freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_freeform_tags DatabaseDataGuardAssociation#db_system_freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.dbSystemSecurityAttributes">db_system_security_attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_security_attributes DatabaseDataGuardAssociation#db_system_security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#display_name DatabaseDataGuardAssociation#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#domain DatabaseDataGuardAssociation#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.faultDomains">fault_domains</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#fault_domains DatabaseDataGuardAssociation#fault_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#hostname DatabaseDataGuardAssociation#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#id DatabaseDataGuardAssociation#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.isActiveDataGuardEnabled">is_active_data_guard_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_active_data_guard_enabled DatabaseDataGuardAssociation#is_active_data_guard_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#license_model DatabaseDataGuardAssociation#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#node_count DatabaseDataGuardAssociation#node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#nsg_ids DatabaseDataGuardAssociation#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.peerDbHomeId">peer_db_home_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_home_id DatabaseDataGuardAssociation#peer_db_home_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.peerDbSystemId">peer_db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_system_id DatabaseDataGuardAssociation#peer_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.peerDbUniqueName">peer_db_unique_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_unique_name DatabaseDataGuardAssociation#peer_db_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.peerSidPrefix">peer_sid_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_sid_prefix DatabaseDataGuardAssociation#peer_sid_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.peerVmClusterId">peer_vm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_vm_cluster_id DatabaseDataGuardAssociation#peer_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.privateIp">private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#private_ip DatabaseDataGuardAssociation#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#shape DatabaseDataGuardAssociation#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.storageVolumePerformanceMode">storage_volume_performance_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#storage_volume_performance_mode DatabaseDataGuardAssociation#storage_volume_performance_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#subnet_id DatabaseDataGuardAssociation#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#time_zone DatabaseDataGuardAssociation#time_zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_type`<sup>Required</sup> <a name="creation_type" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.creationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#creation_type DatabaseDataGuardAssociation#creation_type}.

---

##### `database_admin_password`<sup>Required</sup> <a name="database_admin_password" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.databaseAdminPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_admin_password DatabaseDataGuardAssociation#database_admin_password}.

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.databaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_id DatabaseDataGuardAssociation#database_id}.

---

##### `delete_standby_db_home_on_delete`<sup>Required</sup> <a name="delete_standby_db_home_on_delete" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.deleteStandbyDbHomeOnDelete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#delete_standby_db_home_on_delete DatabaseDataGuardAssociation#delete_standby_db_home_on_delete}.

---

##### `protection_mode`<sup>Required</sup> <a name="protection_mode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.protectionMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#protection_mode DatabaseDataGuardAssociation#protection_mode}.

---

##### `transport_type`<sup>Required</sup> <a name="transport_type" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.transportType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#transport_type DatabaseDataGuardAssociation#transport_type}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#availability_domain DatabaseDataGuardAssociation#availability_domain}.

---

##### `backup_network_nsg_ids`<sup>Optional</sup> <a name="backup_network_nsg_ids" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.backupNetworkNsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#backup_network_nsg_ids DatabaseDataGuardAssociation#backup_network_nsg_ids}.

---

##### `cpu_core_count`<sup>Optional</sup> <a name="cpu_core_count" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.cpuCoreCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#cpu_core_count DatabaseDataGuardAssociation#cpu_core_count}.

---

##### `create_async`<sup>Optional</sup> <a name="create_async" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.createAsync"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#create_async DatabaseDataGuardAssociation#create_async}.

---

##### `database_defined_tags`<sup>Optional</sup> <a name="database_defined_tags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.databaseDefinedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_defined_tags DatabaseDataGuardAssociation#database_defined_tags}.

---

##### `database_freeform_tags`<sup>Optional</sup> <a name="database_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.databaseFreeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_freeform_tags DatabaseDataGuardAssociation#database_freeform_tags}.

---

##### `database_software_image_id`<sup>Optional</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.databaseSoftwareImageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_software_image_id DatabaseDataGuardAssociation#database_software_image_id}.

---

##### `data_collection_options`<sup>Optional</sup> <a name="data_collection_options" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.dataCollectionOptions"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#data_collection_options DatabaseDataGuardAssociation#data_collection_options}

---

##### `db_system_defined_tags`<sup>Optional</sup> <a name="db_system_defined_tags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.dbSystemDefinedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_defined_tags DatabaseDataGuardAssociation#db_system_defined_tags}.

---

##### `db_system_freeform_tags`<sup>Optional</sup> <a name="db_system_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.dbSystemFreeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_freeform_tags DatabaseDataGuardAssociation#db_system_freeform_tags}.

---

##### `db_system_security_attributes`<sup>Optional</sup> <a name="db_system_security_attributes" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.dbSystemSecurityAttributes"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_security_attributes DatabaseDataGuardAssociation#db_system_security_attributes}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#display_name DatabaseDataGuardAssociation#display_name}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.domain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#domain DatabaseDataGuardAssociation#domain}.

---

##### `fault_domains`<sup>Optional</sup> <a name="fault_domains" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.faultDomains"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#fault_domains DatabaseDataGuardAssociation#fault_domains}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.hostname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#hostname DatabaseDataGuardAssociation#hostname}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#id DatabaseDataGuardAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_active_data_guard_enabled`<sup>Optional</sup> <a name="is_active_data_guard_enabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.isActiveDataGuardEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_active_data_guard_enabled DatabaseDataGuardAssociation#is_active_data_guard_enabled}.

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.licenseModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#license_model DatabaseDataGuardAssociation#license_model}.

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#node_count DatabaseDataGuardAssociation#node_count}.

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.nsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#nsg_ids DatabaseDataGuardAssociation#nsg_ids}.

---

##### `peer_db_home_id`<sup>Optional</sup> <a name="peer_db_home_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.peerDbHomeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_home_id DatabaseDataGuardAssociation#peer_db_home_id}.

---

##### `peer_db_system_id`<sup>Optional</sup> <a name="peer_db_system_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.peerDbSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_system_id DatabaseDataGuardAssociation#peer_db_system_id}.

---

##### `peer_db_unique_name`<sup>Optional</sup> <a name="peer_db_unique_name" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.peerDbUniqueName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_unique_name DatabaseDataGuardAssociation#peer_db_unique_name}.

---

##### `peer_sid_prefix`<sup>Optional</sup> <a name="peer_sid_prefix" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.peerSidPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_sid_prefix DatabaseDataGuardAssociation#peer_sid_prefix}.

---

##### `peer_vm_cluster_id`<sup>Optional</sup> <a name="peer_vm_cluster_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.peerVmClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_vm_cluster_id DatabaseDataGuardAssociation#peer_vm_cluster_id}.

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.privateIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#private_ip DatabaseDataGuardAssociation#private_ip}.

---

##### `shape`<sup>Optional</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.shape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#shape DatabaseDataGuardAssociation#shape}.

---

##### `storage_volume_performance_mode`<sup>Optional</sup> <a name="storage_volume_performance_mode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.storageVolumePerformanceMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#storage_volume_performance_mode DatabaseDataGuardAssociation#storage_volume_performance_mode}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#subnet_id DatabaseDataGuardAssociation#subnet_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#timeouts DatabaseDataGuardAssociation#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.timeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#time_zone DatabaseDataGuardAssociation#time_zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putDataCollectionOptions">put_data_collection_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetBackupNetworkNsgIds">reset_backup_network_nsg_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetCpuCoreCount">reset_cpu_core_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetCreateAsync">reset_create_async</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseDefinedTags">reset_database_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseFreeformTags">reset_database_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseSoftwareImageId">reset_database_software_image_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDataCollectionOptions">reset_data_collection_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemDefinedTags">reset_db_system_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemFreeformTags">reset_db_system_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemSecurityAttributes">reset_db_system_security_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetFaultDomains">reset_fault_domains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetIsActiveDataGuardEnabled">reset_is_active_data_guard_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetLicenseModel">reset_license_model</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetNodeCount">reset_node_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetNsgIds">reset_nsg_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbHomeId">reset_peer_db_home_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbSystemId">reset_peer_db_system_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbUniqueName">reset_peer_db_unique_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerSidPrefix">reset_peer_sid_prefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerVmClusterId">reset_peer_vm_cluster_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPrivateIp">reset_private_ip</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetShape">reset_shape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetStorageVolumePerformanceMode">reset_storage_volume_performance_mode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_collection_options` <a name="put_data_collection_options" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putDataCollectionOptions"></a>

```python
def put_data_collection_options(
  is_diagnostics_events_enabled: typing.Union[bool, IResolvable] = None,
  is_health_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  is_incident_logs_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `is_diagnostics_events_enabled`<sup>Optional</sup> <a name="is_diagnostics_events_enabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putDataCollectionOptions.parameter.isDiagnosticsEventsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_diagnostics_events_enabled DatabaseDataGuardAssociation#is_diagnostics_events_enabled}.

---

###### `is_health_monitoring_enabled`<sup>Optional</sup> <a name="is_health_monitoring_enabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putDataCollectionOptions.parameter.isHealthMonitoringEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_health_monitoring_enabled DatabaseDataGuardAssociation#is_health_monitoring_enabled}.

---

###### `is_incident_logs_enabled`<sup>Optional</sup> <a name="is_incident_logs_enabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putDataCollectionOptions.parameter.isIncidentLogsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_incident_logs_enabled DatabaseDataGuardAssociation#is_incident_logs_enabled}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#create DatabaseDataGuardAssociation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#delete DatabaseDataGuardAssociation#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#update DatabaseDataGuardAssociation#update}.

---

##### `reset_availability_domain` <a name="reset_availability_domain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_backup_network_nsg_ids` <a name="reset_backup_network_nsg_ids" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetBackupNetworkNsgIds"></a>

```python
def reset_backup_network_nsg_ids() -> None
```

##### `reset_cpu_core_count` <a name="reset_cpu_core_count" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetCpuCoreCount"></a>

```python
def reset_cpu_core_count() -> None
```

##### `reset_create_async` <a name="reset_create_async" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetCreateAsync"></a>

```python
def reset_create_async() -> None
```

##### `reset_database_defined_tags` <a name="reset_database_defined_tags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseDefinedTags"></a>

```python
def reset_database_defined_tags() -> None
```

##### `reset_database_freeform_tags` <a name="reset_database_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseFreeformTags"></a>

```python
def reset_database_freeform_tags() -> None
```

##### `reset_database_software_image_id` <a name="reset_database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseSoftwareImageId"></a>

```python
def reset_database_software_image_id() -> None
```

##### `reset_data_collection_options` <a name="reset_data_collection_options" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDataCollectionOptions"></a>

```python
def reset_data_collection_options() -> None
```

##### `reset_db_system_defined_tags` <a name="reset_db_system_defined_tags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemDefinedTags"></a>

```python
def reset_db_system_defined_tags() -> None
```

##### `reset_db_system_freeform_tags` <a name="reset_db_system_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemFreeformTags"></a>

```python
def reset_db_system_freeform_tags() -> None
```

##### `reset_db_system_security_attributes` <a name="reset_db_system_security_attributes" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemSecurityAttributes"></a>

```python
def reset_db_system_security_attributes() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_domain` <a name="reset_domain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_fault_domains` <a name="reset_fault_domains" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetFaultDomains"></a>

```python
def reset_fault_domains() -> None
```

##### `reset_hostname` <a name="reset_hostname" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_active_data_guard_enabled` <a name="reset_is_active_data_guard_enabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetIsActiveDataGuardEnabled"></a>

```python
def reset_is_active_data_guard_enabled() -> None
```

##### `reset_license_model` <a name="reset_license_model" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetLicenseModel"></a>

```python
def reset_license_model() -> None
```

##### `reset_node_count` <a name="reset_node_count" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetNodeCount"></a>

```python
def reset_node_count() -> None
```

##### `reset_nsg_ids` <a name="reset_nsg_ids" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetNsgIds"></a>

```python
def reset_nsg_ids() -> None
```

##### `reset_peer_db_home_id` <a name="reset_peer_db_home_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbHomeId"></a>

```python
def reset_peer_db_home_id() -> None
```

##### `reset_peer_db_system_id` <a name="reset_peer_db_system_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbSystemId"></a>

```python
def reset_peer_db_system_id() -> None
```

##### `reset_peer_db_unique_name` <a name="reset_peer_db_unique_name" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbUniqueName"></a>

```python
def reset_peer_db_unique_name() -> None
```

##### `reset_peer_sid_prefix` <a name="reset_peer_sid_prefix" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerSidPrefix"></a>

```python
def reset_peer_sid_prefix() -> None
```

##### `reset_peer_vm_cluster_id` <a name="reset_peer_vm_cluster_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerVmClusterId"></a>

```python
def reset_peer_vm_cluster_id() -> None
```

##### `reset_private_ip` <a name="reset_private_ip" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPrivateIp"></a>

```python
def reset_private_ip() -> None
```

##### `reset_shape` <a name="reset_shape" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetShape"></a>

```python
def reset_shape() -> None
```

##### `reset_storage_volume_performance_mode` <a name="reset_storage_volume_performance_mode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetStorageVolumePerformanceMode"></a>

```python
def reset_storage_volume_performance_mode() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseDataGuardAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_data_guard_association

databaseDataGuardAssociation.DatabaseDataGuardAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_data_guard_association

databaseDataGuardAssociation.DatabaseDataGuardAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_data_guard_association

databaseDataGuardAssociation.DatabaseDataGuardAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_data_guard_association

databaseDataGuardAssociation.DatabaseDataGuardAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseDataGuardAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseDataGuardAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseDataGuardAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseDataGuardAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.applyLag">apply_lag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.applyRate">apply_rate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference">DatabaseDataGuardAssociationDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDatabaseId">peer_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDataGuardAssociationId">peer_data_guard_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerRole">peer_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference">DatabaseDataGuardAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.backupNetworkNsgIdsInput">backup_network_nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cpuCoreCountInput">cpu_core_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.createAsyncInput">create_async_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.creationTypeInput">creation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseAdminPasswordInput">database_admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseDefinedTagsInput">database_defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseFreeformTagsInput">database_freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseIdInput">database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseSoftwareImageIdInput">database_software_image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dataCollectionOptionsInput">data_collection_options_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemDefinedTagsInput">db_system_defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemFreeformTagsInput">db_system_freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemSecurityAttributesInput">db_system_security_attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.deleteStandbyDbHomeOnDeleteInput">delete_standby_db_home_on_delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.faultDomainsInput">fault_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.isActiveDataGuardEnabledInput">is_active_data_guard_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.licenseModelInput">license_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nsgIdsInput">nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbHomeIdInput">peer_db_home_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbSystemIdInput">peer_db_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbUniqueNameInput">peer_db_unique_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerSidPrefixInput">peer_sid_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerVmClusterIdInput">peer_vm_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.privateIpInput">private_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.protectionModeInput">protection_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.shapeInput">shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.storageVolumePerformanceModeInput">storage_volume_performance_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.transportTypeInput">transport_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.backupNetworkNsgIds">backup_network_nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.createAsync">create_async</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.creationType">creation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseAdminPassword">database_admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseDefinedTags">database_defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseFreeformTags">database_freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseId">database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseSoftwareImageId">database_software_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemDefinedTags">db_system_defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemFreeformTags">db_system_freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemSecurityAttributes">db_system_security_attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.deleteStandbyDbHomeOnDelete">delete_standby_db_home_on_delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.faultDomains">fault_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.isActiveDataGuardEnabled">is_active_data_guard_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbHomeId">peer_db_home_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbSystemId">peer_db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbUniqueName">peer_db_unique_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerSidPrefix">peer_sid_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerVmClusterId">peer_vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.protectionMode">protection_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.storageVolumePerformanceMode">storage_volume_performance_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.transportType">transport_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apply_lag`<sup>Required</sup> <a name="apply_lag" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.applyLag"></a>

```python
apply_lag: str
```

- *Type:* str

---

##### `apply_rate`<sup>Required</sup> <a name="apply_rate" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.applyRate"></a>

```python
apply_rate: str
```

- *Type:* str

---

##### `data_collection_options`<sup>Required</sup> <a name="data_collection_options" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dataCollectionOptions"></a>

```python
data_collection_options: DatabaseDataGuardAssociationDataCollectionOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference">DatabaseDataGuardAssociationDataCollectionOptionsOutputReference</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `peer_database_id`<sup>Required</sup> <a name="peer_database_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDatabaseId"></a>

```python
peer_database_id: str
```

- *Type:* str

---

##### `peer_data_guard_association_id`<sup>Required</sup> <a name="peer_data_guard_association_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDataGuardAssociationId"></a>

```python
peer_data_guard_association_id: str
```

- *Type:* str

---

##### `peer_role`<sup>Required</sup> <a name="peer_role" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerRole"></a>

```python
peer_role: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeouts"></a>

```python
timeouts: DatabaseDataGuardAssociationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference">DatabaseDataGuardAssociationTimeoutsOutputReference</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `backup_network_nsg_ids_input`<sup>Optional</sup> <a name="backup_network_nsg_ids_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.backupNetworkNsgIdsInput"></a>

```python
backup_network_nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_core_count_input`<sup>Optional</sup> <a name="cpu_core_count_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cpuCoreCountInput"></a>

```python
cpu_core_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_async_input`<sup>Optional</sup> <a name="create_async_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.createAsyncInput"></a>

```python
create_async_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `creation_type_input`<sup>Optional</sup> <a name="creation_type_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.creationTypeInput"></a>

```python
creation_type_input: str
```

- *Type:* str

---

##### `database_admin_password_input`<sup>Optional</sup> <a name="database_admin_password_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseAdminPasswordInput"></a>

```python
database_admin_password_input: str
```

- *Type:* str

---

##### `database_defined_tags_input`<sup>Optional</sup> <a name="database_defined_tags_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseDefinedTagsInput"></a>

```python
database_defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `database_freeform_tags_input`<sup>Optional</sup> <a name="database_freeform_tags_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseFreeformTagsInput"></a>

```python
database_freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `database_id_input`<sup>Optional</sup> <a name="database_id_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseIdInput"></a>

```python
database_id_input: str
```

- *Type:* str

---

##### `database_software_image_id_input`<sup>Optional</sup> <a name="database_software_image_id_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseSoftwareImageIdInput"></a>

```python
database_software_image_id_input: str
```

- *Type:* str

---

##### `data_collection_options_input`<sup>Optional</sup> <a name="data_collection_options_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dataCollectionOptionsInput"></a>

```python
data_collection_options_input: DatabaseDataGuardAssociationDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a>

---

##### `db_system_defined_tags_input`<sup>Optional</sup> <a name="db_system_defined_tags_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemDefinedTagsInput"></a>

```python
db_system_defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `db_system_freeform_tags_input`<sup>Optional</sup> <a name="db_system_freeform_tags_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemFreeformTagsInput"></a>

```python
db_system_freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `db_system_security_attributes_input`<sup>Optional</sup> <a name="db_system_security_attributes_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemSecurityAttributesInput"></a>

```python
db_system_security_attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `delete_standby_db_home_on_delete_input`<sup>Optional</sup> <a name="delete_standby_db_home_on_delete_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.deleteStandbyDbHomeOnDeleteInput"></a>

```python
delete_standby_db_home_on_delete_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `fault_domains_input`<sup>Optional</sup> <a name="fault_domains_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.faultDomainsInput"></a>

```python
fault_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_active_data_guard_enabled_input`<sup>Optional</sup> <a name="is_active_data_guard_enabled_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.isActiveDataGuardEnabledInput"></a>

```python
is_active_data_guard_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `license_model_input`<sup>Optional</sup> <a name="license_model_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.licenseModelInput"></a>

```python
license_model_input: str
```

- *Type:* str

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nsg_ids_input`<sup>Optional</sup> <a name="nsg_ids_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nsgIdsInput"></a>

```python
nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `peer_db_home_id_input`<sup>Optional</sup> <a name="peer_db_home_id_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbHomeIdInput"></a>

```python
peer_db_home_id_input: str
```

- *Type:* str

---

##### `peer_db_system_id_input`<sup>Optional</sup> <a name="peer_db_system_id_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbSystemIdInput"></a>

```python
peer_db_system_id_input: str
```

- *Type:* str

---

##### `peer_db_unique_name_input`<sup>Optional</sup> <a name="peer_db_unique_name_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbUniqueNameInput"></a>

```python
peer_db_unique_name_input: str
```

- *Type:* str

---

##### `peer_sid_prefix_input`<sup>Optional</sup> <a name="peer_sid_prefix_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerSidPrefixInput"></a>

```python
peer_sid_prefix_input: str
```

- *Type:* str

---

##### `peer_vm_cluster_id_input`<sup>Optional</sup> <a name="peer_vm_cluster_id_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerVmClusterIdInput"></a>

```python
peer_vm_cluster_id_input: str
```

- *Type:* str

---

##### `private_ip_input`<sup>Optional</sup> <a name="private_ip_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.privateIpInput"></a>

```python
private_ip_input: str
```

- *Type:* str

---

##### `protection_mode_input`<sup>Optional</sup> <a name="protection_mode_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.protectionModeInput"></a>

```python
protection_mode_input: str
```

- *Type:* str

---

##### `shape_input`<sup>Optional</sup> <a name="shape_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.shapeInput"></a>

```python
shape_input: str
```

- *Type:* str

---

##### `storage_volume_performance_mode_input`<sup>Optional</sup> <a name="storage_volume_performance_mode_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.storageVolumePerformanceModeInput"></a>

```python
storage_volume_performance_mode_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseDataGuardAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a>]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `transport_type_input`<sup>Optional</sup> <a name="transport_type_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.transportTypeInput"></a>

```python
transport_type_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `backup_network_nsg_ids`<sup>Required</sup> <a name="backup_network_nsg_ids" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.backupNetworkNsgIds"></a>

```python
backup_network_nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_async`<sup>Required</sup> <a name="create_async" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.createAsync"></a>

```python
create_async: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `creation_type`<sup>Required</sup> <a name="creation_type" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.creationType"></a>

```python
creation_type: str
```

- *Type:* str

---

##### `database_admin_password`<sup>Required</sup> <a name="database_admin_password" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseAdminPassword"></a>

```python
database_admin_password: str
```

- *Type:* str

---

##### `database_defined_tags`<sup>Required</sup> <a name="database_defined_tags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseDefinedTags"></a>

```python
database_defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `database_freeform_tags`<sup>Required</sup> <a name="database_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseFreeformTags"></a>

```python
database_freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

---

##### `database_software_image_id`<sup>Required</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseSoftwareImageId"></a>

```python
database_software_image_id: str
```

- *Type:* str

---

##### `db_system_defined_tags`<sup>Required</sup> <a name="db_system_defined_tags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemDefinedTags"></a>

```python
db_system_defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `db_system_freeform_tags`<sup>Required</sup> <a name="db_system_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemFreeformTags"></a>

```python
db_system_freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `db_system_security_attributes`<sup>Required</sup> <a name="db_system_security_attributes" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemSecurityAttributes"></a>

```python
db_system_security_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `delete_standby_db_home_on_delete`<sup>Required</sup> <a name="delete_standby_db_home_on_delete" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.deleteStandbyDbHomeOnDelete"></a>

```python
delete_standby_db_home_on_delete: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `fault_domains`<sup>Required</sup> <a name="fault_domains" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.faultDomains"></a>

```python
fault_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_active_data_guard_enabled`<sup>Required</sup> <a name="is_active_data_guard_enabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.isActiveDataGuardEnabled"></a>

```python
is_active_data_guard_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `peer_db_home_id`<sup>Required</sup> <a name="peer_db_home_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbHomeId"></a>

```python
peer_db_home_id: str
```

- *Type:* str

---

##### `peer_db_system_id`<sup>Required</sup> <a name="peer_db_system_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbSystemId"></a>

```python
peer_db_system_id: str
```

- *Type:* str

---

##### `peer_db_unique_name`<sup>Required</sup> <a name="peer_db_unique_name" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbUniqueName"></a>

```python
peer_db_unique_name: str
```

- *Type:* str

---

##### `peer_sid_prefix`<sup>Required</sup> <a name="peer_sid_prefix" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerSidPrefix"></a>

```python
peer_sid_prefix: str
```

- *Type:* str

---

##### `peer_vm_cluster_id`<sup>Required</sup> <a name="peer_vm_cluster_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerVmClusterId"></a>

```python
peer_vm_cluster_id: str
```

- *Type:* str

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `protection_mode`<sup>Required</sup> <a name="protection_mode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.protectionMode"></a>

```python
protection_mode: str
```

- *Type:* str

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `storage_volume_performance_mode`<sup>Required</sup> <a name="storage_volume_performance_mode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.storageVolumePerformanceMode"></a>

```python
storage_volume_performance_mode: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `transport_type`<sup>Required</sup> <a name="transport_type" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.transportType"></a>

```python
transport_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseDataGuardAssociationConfig <a name="DatabaseDataGuardAssociationConfig" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_data_guard_association

databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  creation_type: str,
  database_admin_password: str,
  database_id: str,
  delete_standby_db_home_on_delete: str,
  protection_mode: str,
  transport_type: str,
  availability_domain: str = None,
  backup_network_nsg_ids: typing.List[str] = None,
  cpu_core_count: typing.Union[int, float] = None,
  create_async: typing.Union[bool, IResolvable] = None,
  database_defined_tags: typing.Mapping[str] = None,
  database_freeform_tags: typing.Mapping[str] = None,
  database_software_image_id: str = None,
  data_collection_options: DatabaseDataGuardAssociationDataCollectionOptions = None,
  db_system_defined_tags: typing.Mapping[str] = None,
  db_system_freeform_tags: typing.Mapping[str] = None,
  db_system_security_attributes: typing.Mapping[str] = None,
  display_name: str = None,
  domain: str = None,
  fault_domains: typing.List[str] = None,
  hostname: str = None,
  id: str = None,
  is_active_data_guard_enabled: typing.Union[bool, IResolvable] = None,
  license_model: str = None,
  node_count: typing.Union[int, float] = None,
  nsg_ids: typing.List[str] = None,
  peer_db_home_id: str = None,
  peer_db_system_id: str = None,
  peer_db_unique_name: str = None,
  peer_sid_prefix: str = None,
  peer_vm_cluster_id: str = None,
  private_ip: str = None,
  shape: str = None,
  storage_volume_performance_mode: str = None,
  subnet_id: str = None,
  timeouts: DatabaseDataGuardAssociationTimeouts = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.creationType">creation_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#creation_type DatabaseDataGuardAssociation#creation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseAdminPassword">database_admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_admin_password DatabaseDataGuardAssociation#database_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_id DatabaseDataGuardAssociation#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.deleteStandbyDbHomeOnDelete">delete_standby_db_home_on_delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#delete_standby_db_home_on_delete DatabaseDataGuardAssociation#delete_standby_db_home_on_delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.protectionMode">protection_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#protection_mode DatabaseDataGuardAssociation#protection_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.transportType">transport_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#transport_type DatabaseDataGuardAssociation#transport_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#availability_domain DatabaseDataGuardAssociation#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.backupNetworkNsgIds">backup_network_nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#backup_network_nsg_ids DatabaseDataGuardAssociation#backup_network_nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#cpu_core_count DatabaseDataGuardAssociation#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.createAsync">create_async</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#create_async DatabaseDataGuardAssociation#create_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseDefinedTags">database_defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_defined_tags DatabaseDataGuardAssociation#database_defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseFreeformTags">database_freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_freeform_tags DatabaseDataGuardAssociation#database_freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseSoftwareImageId">database_software_image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_software_image_id DatabaseDataGuardAssociation#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemDefinedTags">db_system_defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_defined_tags DatabaseDataGuardAssociation#db_system_defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemFreeformTags">db_system_freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_freeform_tags DatabaseDataGuardAssociation#db_system_freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemSecurityAttributes">db_system_security_attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_security_attributes DatabaseDataGuardAssociation#db_system_security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#display_name DatabaseDataGuardAssociation#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#domain DatabaseDataGuardAssociation#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.faultDomains">fault_domains</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#fault_domains DatabaseDataGuardAssociation#fault_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#hostname DatabaseDataGuardAssociation#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#id DatabaseDataGuardAssociation#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.isActiveDataGuardEnabled">is_active_data_guard_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_active_data_guard_enabled DatabaseDataGuardAssociation#is_active_data_guard_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#license_model DatabaseDataGuardAssociation#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#node_count DatabaseDataGuardAssociation#node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#nsg_ids DatabaseDataGuardAssociation#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbHomeId">peer_db_home_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_home_id DatabaseDataGuardAssociation#peer_db_home_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbSystemId">peer_db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_system_id DatabaseDataGuardAssociation#peer_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbUniqueName">peer_db_unique_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_unique_name DatabaseDataGuardAssociation#peer_db_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerSidPrefix">peer_sid_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_sid_prefix DatabaseDataGuardAssociation#peer_sid_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerVmClusterId">peer_vm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_vm_cluster_id DatabaseDataGuardAssociation#peer_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.privateIp">private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#private_ip DatabaseDataGuardAssociation#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#shape DatabaseDataGuardAssociation#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.storageVolumePerformanceMode">storage_volume_performance_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#storage_volume_performance_mode DatabaseDataGuardAssociation#storage_volume_performance_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#subnet_id DatabaseDataGuardAssociation#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#time_zone DatabaseDataGuardAssociation#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_type`<sup>Required</sup> <a name="creation_type" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.creationType"></a>

```python
creation_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#creation_type DatabaseDataGuardAssociation#creation_type}.

---

##### `database_admin_password`<sup>Required</sup> <a name="database_admin_password" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseAdminPassword"></a>

```python
database_admin_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_admin_password DatabaseDataGuardAssociation#database_admin_password}.

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_id DatabaseDataGuardAssociation#database_id}.

---

##### `delete_standby_db_home_on_delete`<sup>Required</sup> <a name="delete_standby_db_home_on_delete" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.deleteStandbyDbHomeOnDelete"></a>

```python
delete_standby_db_home_on_delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#delete_standby_db_home_on_delete DatabaseDataGuardAssociation#delete_standby_db_home_on_delete}.

---

##### `protection_mode`<sup>Required</sup> <a name="protection_mode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.protectionMode"></a>

```python
protection_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#protection_mode DatabaseDataGuardAssociation#protection_mode}.

---

##### `transport_type`<sup>Required</sup> <a name="transport_type" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.transportType"></a>

```python
transport_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#transport_type DatabaseDataGuardAssociation#transport_type}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#availability_domain DatabaseDataGuardAssociation#availability_domain}.

---

##### `backup_network_nsg_ids`<sup>Optional</sup> <a name="backup_network_nsg_ids" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.backupNetworkNsgIds"></a>

```python
backup_network_nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#backup_network_nsg_ids DatabaseDataGuardAssociation#backup_network_nsg_ids}.

---

##### `cpu_core_count`<sup>Optional</sup> <a name="cpu_core_count" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#cpu_core_count DatabaseDataGuardAssociation#cpu_core_count}.

---

##### `create_async`<sup>Optional</sup> <a name="create_async" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.createAsync"></a>

```python
create_async: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#create_async DatabaseDataGuardAssociation#create_async}.

---

##### `database_defined_tags`<sup>Optional</sup> <a name="database_defined_tags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseDefinedTags"></a>

```python
database_defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_defined_tags DatabaseDataGuardAssociation#database_defined_tags}.

---

##### `database_freeform_tags`<sup>Optional</sup> <a name="database_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseFreeformTags"></a>

```python
database_freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_freeform_tags DatabaseDataGuardAssociation#database_freeform_tags}.

---

##### `database_software_image_id`<sup>Optional</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseSoftwareImageId"></a>

```python
database_software_image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_software_image_id DatabaseDataGuardAssociation#database_software_image_id}.

---

##### `data_collection_options`<sup>Optional</sup> <a name="data_collection_options" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dataCollectionOptions"></a>

```python
data_collection_options: DatabaseDataGuardAssociationDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#data_collection_options DatabaseDataGuardAssociation#data_collection_options}

---

##### `db_system_defined_tags`<sup>Optional</sup> <a name="db_system_defined_tags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemDefinedTags"></a>

```python
db_system_defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_defined_tags DatabaseDataGuardAssociation#db_system_defined_tags}.

---

##### `db_system_freeform_tags`<sup>Optional</sup> <a name="db_system_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemFreeformTags"></a>

```python
db_system_freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_freeform_tags DatabaseDataGuardAssociation#db_system_freeform_tags}.

---

##### `db_system_security_attributes`<sup>Optional</sup> <a name="db_system_security_attributes" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemSecurityAttributes"></a>

```python
db_system_security_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_security_attributes DatabaseDataGuardAssociation#db_system_security_attributes}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#display_name DatabaseDataGuardAssociation#display_name}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#domain DatabaseDataGuardAssociation#domain}.

---

##### `fault_domains`<sup>Optional</sup> <a name="fault_domains" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.faultDomains"></a>

```python
fault_domains: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#fault_domains DatabaseDataGuardAssociation#fault_domains}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#hostname DatabaseDataGuardAssociation#hostname}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#id DatabaseDataGuardAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_active_data_guard_enabled`<sup>Optional</sup> <a name="is_active_data_guard_enabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.isActiveDataGuardEnabled"></a>

```python
is_active_data_guard_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_active_data_guard_enabled DatabaseDataGuardAssociation#is_active_data_guard_enabled}.

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#license_model DatabaseDataGuardAssociation#license_model}.

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#node_count DatabaseDataGuardAssociation#node_count}.

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#nsg_ids DatabaseDataGuardAssociation#nsg_ids}.

---

##### `peer_db_home_id`<sup>Optional</sup> <a name="peer_db_home_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbHomeId"></a>

```python
peer_db_home_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_home_id DatabaseDataGuardAssociation#peer_db_home_id}.

---

##### `peer_db_system_id`<sup>Optional</sup> <a name="peer_db_system_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbSystemId"></a>

```python
peer_db_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_system_id DatabaseDataGuardAssociation#peer_db_system_id}.

---

##### `peer_db_unique_name`<sup>Optional</sup> <a name="peer_db_unique_name" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbUniqueName"></a>

```python
peer_db_unique_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_unique_name DatabaseDataGuardAssociation#peer_db_unique_name}.

---

##### `peer_sid_prefix`<sup>Optional</sup> <a name="peer_sid_prefix" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerSidPrefix"></a>

```python
peer_sid_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_sid_prefix DatabaseDataGuardAssociation#peer_sid_prefix}.

---

##### `peer_vm_cluster_id`<sup>Optional</sup> <a name="peer_vm_cluster_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerVmClusterId"></a>

```python
peer_vm_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_vm_cluster_id DatabaseDataGuardAssociation#peer_vm_cluster_id}.

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#private_ip DatabaseDataGuardAssociation#private_ip}.

---

##### `shape`<sup>Optional</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.shape"></a>

```python
shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#shape DatabaseDataGuardAssociation#shape}.

---

##### `storage_volume_performance_mode`<sup>Optional</sup> <a name="storage_volume_performance_mode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.storageVolumePerformanceMode"></a>

```python
storage_volume_performance_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#storage_volume_performance_mode DatabaseDataGuardAssociation#storage_volume_performance_mode}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#subnet_id DatabaseDataGuardAssociation#subnet_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.timeouts"></a>

```python
timeouts: DatabaseDataGuardAssociationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#timeouts DatabaseDataGuardAssociation#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#time_zone DatabaseDataGuardAssociation#time_zone}.

---

### DatabaseDataGuardAssociationDataCollectionOptions <a name="DatabaseDataGuardAssociationDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_data_guard_association

databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions(
  is_diagnostics_events_enabled: typing.Union[bool, IResolvable] = None,
  is_health_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  is_incident_logs_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isDiagnosticsEventsEnabled">is_diagnostics_events_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_diagnostics_events_enabled DatabaseDataGuardAssociation#is_diagnostics_events_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isHealthMonitoringEnabled">is_health_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_health_monitoring_enabled DatabaseDataGuardAssociation#is_health_monitoring_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isIncidentLogsEnabled">is_incident_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_incident_logs_enabled DatabaseDataGuardAssociation#is_incident_logs_enabled}. |

---

##### `is_diagnostics_events_enabled`<sup>Optional</sup> <a name="is_diagnostics_events_enabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```python
is_diagnostics_events_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_diagnostics_events_enabled DatabaseDataGuardAssociation#is_diagnostics_events_enabled}.

---

##### `is_health_monitoring_enabled`<sup>Optional</sup> <a name="is_health_monitoring_enabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```python
is_health_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_health_monitoring_enabled DatabaseDataGuardAssociation#is_health_monitoring_enabled}.

---

##### `is_incident_logs_enabled`<sup>Optional</sup> <a name="is_incident_logs_enabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```python
is_incident_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_incident_logs_enabled DatabaseDataGuardAssociation#is_incident_logs_enabled}.

---

### DatabaseDataGuardAssociationTimeouts <a name="DatabaseDataGuardAssociationTimeouts" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_data_guard_association

databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#create DatabaseDataGuardAssociation#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#delete DatabaseDataGuardAssociation#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#update DatabaseDataGuardAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#create DatabaseDataGuardAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#delete DatabaseDataGuardAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#update DatabaseDataGuardAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseDataGuardAssociationDataCollectionOptionsOutputReference <a name="DatabaseDataGuardAssociationDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_data_guard_association

databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">reset_is_diagnostics_events_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">reset_is_health_monitoring_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">reset_is_incident_logs_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_diagnostics_events_enabled` <a name="reset_is_diagnostics_events_enabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```python
def reset_is_diagnostics_events_enabled() -> None
```

##### `reset_is_health_monitoring_enabled` <a name="reset_is_health_monitoring_enabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```python
def reset_is_health_monitoring_enabled() -> None
```

##### `reset_is_incident_logs_enabled` <a name="reset_is_incident_logs_enabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```python
def reset_is_incident_logs_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">is_diagnostics_events_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">is_health_monitoring_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">is_incident_logs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">is_diagnostics_events_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">is_health_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">is_incident_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_diagnostics_events_enabled_input`<sup>Optional</sup> <a name="is_diagnostics_events_enabled_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```python
is_diagnostics_events_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_health_monitoring_enabled_input`<sup>Optional</sup> <a name="is_health_monitoring_enabled_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```python
is_health_monitoring_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_incident_logs_enabled_input`<sup>Optional</sup> <a name="is_incident_logs_enabled_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```python
is_incident_logs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_diagnostics_events_enabled`<sup>Required</sup> <a name="is_diagnostics_events_enabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```python
is_diagnostics_events_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_health_monitoring_enabled`<sup>Required</sup> <a name="is_health_monitoring_enabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```python
is_health_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_incident_logs_enabled`<sup>Required</sup> <a name="is_incident_logs_enabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```python
is_incident_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDataGuardAssociationDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a>

---


### DatabaseDataGuardAssociationTimeoutsOutputReference <a name="DatabaseDataGuardAssociationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_data_guard_association

databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseDataGuardAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a>]

---



