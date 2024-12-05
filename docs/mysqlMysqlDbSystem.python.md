# `mysqlMysqlDbSystem` Submodule <a name="`mysqlMysqlDbSystem` Submodule" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlMysqlDbSystem <a name="MysqlMysqlDbSystem" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system oci_mysql_mysql_db_system}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystem(
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
  shape_name: str,
  subnet_id: str,
  admin_password: str = None,
  admin_username: str = None,
  backup_policy: MysqlMysqlDbSystemBackupPolicy = None,
  configuration_id: str = None,
  crash_recovery: str = None,
  customer_contacts: typing.Union[IResolvable, typing.List[MysqlMysqlDbSystemCustomerContacts]] = None,
  database_management: str = None,
  data_storage: MysqlMysqlDbSystemDataStorage = None,
  data_storage_size_in_gb: typing.Union[int, float] = None,
  defined_tags: typing.Mapping[str] = None,
  deletion_policy: typing.Union[IResolvable, typing.List[MysqlMysqlDbSystemDeletionPolicy]] = None,
  description: str = None,
  display_name: str = None,
  fault_domain: str = None,
  freeform_tags: typing.Mapping[str] = None,
  hostname_label: str = None,
  id: str = None,
  ip_address: str = None,
  is_highly_available: typing.Union[bool, IResolvable] = None,
  maintenance: MysqlMysqlDbSystemMaintenance = None,
  mysql_version: str = None,
  port: typing.Union[int, float] = None,
  port_x: typing.Union[int, float] = None,
  secure_connections: MysqlMysqlDbSystemSecureConnections = None,
  shutdown_type: str = None,
  source: MysqlMysqlDbSystemSource = None,
  state: str = None,
  timeouts: MysqlMysqlDbSystemTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#availability_domain MysqlMysqlDbSystem#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#compartment_id MysqlMysqlDbSystem#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.shapeName">shape_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#shape_name MysqlMysqlDbSystem#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#subnet_id MysqlMysqlDbSystem#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.adminPassword">admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#admin_password MysqlMysqlDbSystem#admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.adminUsername">admin_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#admin_username MysqlMysqlDbSystem#admin_username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.backupPolicy">backup_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a></code> | backup_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.configurationId">configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#configuration_id MysqlMysqlDbSystem#configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.crashRecovery">crash_recovery</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#crash_recovery MysqlMysqlDbSystem#crash_recovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.customerContacts">customer_contacts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>]]</code> | customer_contacts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.databaseManagement">database_management</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#database_management MysqlMysqlDbSystem#database_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.dataStorage">data_storage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a></code> | data_storage block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.dataStorageSizeInGb">data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#data_storage_size_in_gb MysqlMysqlDbSystem#data_storage_size_in_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#defined_tags MysqlMysqlDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>]]</code> | deletion_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#description MysqlMysqlDbSystem#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#display_name MysqlMysqlDbSystem#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.faultDomain">fault_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#fault_domain MysqlMysqlDbSystem#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#freeform_tags MysqlMysqlDbSystem#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.hostnameLabel">hostname_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#hostname_label MysqlMysqlDbSystem#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#id MysqlMysqlDbSystem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#ip_address MysqlMysqlDbSystem#ip_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.isHighlyAvailable">is_highly_available</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_highly_available MysqlMysqlDbSystem#is_highly_available}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.maintenance">maintenance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a></code> | maintenance block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.mysqlVersion">mysql_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#mysql_version MysqlMysqlDbSystem#mysql_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#port MysqlMysqlDbSystem#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.portX">port_x</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#port_x MysqlMysqlDbSystem#port_x}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.secureConnections">secure_connections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a></code> | secure_connections block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.shutdownType">shutdown_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#shutdown_type MysqlMysqlDbSystem#shutdown_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a></code> | source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#state MysqlMysqlDbSystem#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts">MysqlMysqlDbSystemTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#availability_domain MysqlMysqlDbSystem#availability_domain}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#compartment_id MysqlMysqlDbSystem#compartment_id}.

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.shapeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#shape_name MysqlMysqlDbSystem#shape_name}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#subnet_id MysqlMysqlDbSystem#subnet_id}.

---

##### `admin_password`<sup>Optional</sup> <a name="admin_password" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.adminPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#admin_password MysqlMysqlDbSystem#admin_password}.

---

##### `admin_username`<sup>Optional</sup> <a name="admin_username" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.adminUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#admin_username MysqlMysqlDbSystem#admin_username}.

---

##### `backup_policy`<sup>Optional</sup> <a name="backup_policy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.backupPolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a>

backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#backup_policy MysqlMysqlDbSystem#backup_policy}

---

##### `configuration_id`<sup>Optional</sup> <a name="configuration_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.configurationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#configuration_id MysqlMysqlDbSystem#configuration_id}.

---

##### `crash_recovery`<sup>Optional</sup> <a name="crash_recovery" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.crashRecovery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#crash_recovery MysqlMysqlDbSystem#crash_recovery}.

---

##### `customer_contacts`<sup>Optional</sup> <a name="customer_contacts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.customerContacts"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>]]

customer_contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#customer_contacts MysqlMysqlDbSystem#customer_contacts}

---

##### `database_management`<sup>Optional</sup> <a name="database_management" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.databaseManagement"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#database_management MysqlMysqlDbSystem#database_management}.

---

##### `data_storage`<sup>Optional</sup> <a name="data_storage" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.dataStorage"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a>

data_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#data_storage MysqlMysqlDbSystem#data_storage}

---

##### `data_storage_size_in_gb`<sup>Optional</sup> <a name="data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.dataStorageSizeInGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#data_storage_size_in_gb MysqlMysqlDbSystem#data_storage_size_in_gb}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#defined_tags MysqlMysqlDbSystem#defined_tags}.

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.deletionPolicy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>]]

deletion_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#deletion_policy MysqlMysqlDbSystem#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#description MysqlMysqlDbSystem#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#display_name MysqlMysqlDbSystem#display_name}.

---

##### `fault_domain`<sup>Optional</sup> <a name="fault_domain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.faultDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#fault_domain MysqlMysqlDbSystem#fault_domain}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#freeform_tags MysqlMysqlDbSystem#freeform_tags}.

---

##### `hostname_label`<sup>Optional</sup> <a name="hostname_label" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.hostnameLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#hostname_label MysqlMysqlDbSystem#hostname_label}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#id MysqlMysqlDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.ipAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#ip_address MysqlMysqlDbSystem#ip_address}.

---

##### `is_highly_available`<sup>Optional</sup> <a name="is_highly_available" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.isHighlyAvailable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_highly_available MysqlMysqlDbSystem#is_highly_available}.

---

##### `maintenance`<sup>Optional</sup> <a name="maintenance" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.maintenance"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a>

maintenance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#maintenance MysqlMysqlDbSystem#maintenance}

---

##### `mysql_version`<sup>Optional</sup> <a name="mysql_version" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.mysqlVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#mysql_version MysqlMysqlDbSystem#mysql_version}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#port MysqlMysqlDbSystem#port}.

---

##### `port_x`<sup>Optional</sup> <a name="port_x" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.portX"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#port_x MysqlMysqlDbSystem#port_x}.

---

##### `secure_connections`<sup>Optional</sup> <a name="secure_connections" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.secureConnections"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a>

secure_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#secure_connections MysqlMysqlDbSystem#secure_connections}

---

##### `shutdown_type`<sup>Optional</sup> <a name="shutdown_type" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.shutdownType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#shutdown_type MysqlMysqlDbSystem#shutdown_type}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.source"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#source MysqlMysqlDbSystem#source}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#state MysqlMysqlDbSystem#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts">MysqlMysqlDbSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#timeouts MysqlMysqlDbSystem#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putBackupPolicy">put_backup_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putCustomerContacts">put_customer_contacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putDataStorage">put_data_storage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putDeletionPolicy">put_deletion_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putMaintenance">put_maintenance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSecureConnections">put_secure_connections</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSource">put_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetAdminPassword">reset_admin_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetAdminUsername">reset_admin_username</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetBackupPolicy">reset_backup_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetConfigurationId">reset_configuration_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetCrashRecovery">reset_crash_recovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetCustomerContacts">reset_customer_contacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDatabaseManagement">reset_database_management</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDataStorage">reset_data_storage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDataStorageSizeInGb">reset_data_storage_size_in_gb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetFaultDomain">reset_fault_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetHostnameLabel">reset_hostname_label</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetIsHighlyAvailable">reset_is_highly_available</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetMaintenance">reset_maintenance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetMysqlVersion">reset_mysql_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetPortX">reset_port_x</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetSecureConnections">reset_secure_connections</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetShutdownType">reset_shutdown_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_backup_policy` <a name="put_backup_policy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putBackupPolicy"></a>

```python
def put_backup_policy(
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  pitr_policy: MysqlMysqlDbSystemBackupPolicyPitrPolicy = None,
  retention_in_days: typing.Union[int, float] = None,
  window_start_time: str = None
) -> None
```

###### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putBackupPolicy.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#defined_tags MysqlMysqlDbSystem#defined_tags}.

---

###### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putBackupPolicy.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#freeform_tags MysqlMysqlDbSystem#freeform_tags}.

---

###### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putBackupPolicy.parameter.isEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_enabled MysqlMysqlDbSystem#is_enabled}.

---

###### `pitr_policy`<sup>Optional</sup> <a name="pitr_policy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putBackupPolicy.parameter.pitrPolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy">MysqlMysqlDbSystemBackupPolicyPitrPolicy</a>

pitr_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#pitr_policy MysqlMysqlDbSystem#pitr_policy}

---

###### `retention_in_days`<sup>Optional</sup> <a name="retention_in_days" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putBackupPolicy.parameter.retentionInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#retention_in_days MysqlMysqlDbSystem#retention_in_days}.

---

###### `window_start_time`<sup>Optional</sup> <a name="window_start_time" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putBackupPolicy.parameter.windowStartTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#window_start_time MysqlMysqlDbSystem#window_start_time}.

---

##### `put_customer_contacts` <a name="put_customer_contacts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putCustomerContacts"></a>

```python
def put_customer_contacts(
  value: typing.Union[IResolvable, typing.List[MysqlMysqlDbSystemCustomerContacts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putCustomerContacts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>]]

---

##### `put_data_storage` <a name="put_data_storage" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putDataStorage"></a>

```python
def put_data_storage(
  is_auto_expand_storage_enabled: typing.Union[bool, IResolvable] = None,
  max_storage_size_in_gbs: typing.Union[int, float] = None
) -> None
```

###### `is_auto_expand_storage_enabled`<sup>Optional</sup> <a name="is_auto_expand_storage_enabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putDataStorage.parameter.isAutoExpandStorageEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_auto_expand_storage_enabled MysqlMysqlDbSystem#is_auto_expand_storage_enabled}.

---

###### `max_storage_size_in_gbs`<sup>Optional</sup> <a name="max_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putDataStorage.parameter.maxStorageSizeInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#max_storage_size_in_gbs MysqlMysqlDbSystem#max_storage_size_in_gbs}.

---

##### `put_deletion_policy` <a name="put_deletion_policy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putDeletionPolicy"></a>

```python
def put_deletion_policy(
  value: typing.Union[IResolvable, typing.List[MysqlMysqlDbSystemDeletionPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putDeletionPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>]]

---

##### `put_maintenance` <a name="put_maintenance" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putMaintenance"></a>

```python
def put_maintenance(
  window_start_time: str
) -> None
```

###### `window_start_time`<sup>Required</sup> <a name="window_start_time" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putMaintenance.parameter.windowStartTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#window_start_time MysqlMysqlDbSystem#window_start_time}.

---

##### `put_secure_connections` <a name="put_secure_connections" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSecureConnections"></a>

```python
def put_secure_connections(
  certificate_generation_type: str,
  certificate_id: str = None
) -> None
```

###### `certificate_generation_type`<sup>Required</sup> <a name="certificate_generation_type" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSecureConnections.parameter.certificateGenerationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#certificate_generation_type MysqlMysqlDbSystem#certificate_generation_type}.

---

###### `certificate_id`<sup>Optional</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSecureConnections.parameter.certificateId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#certificate_id MysqlMysqlDbSystem#certificate_id}.

---

##### `put_source` <a name="put_source" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSource"></a>

```python
def put_source(
  source_type: str,
  backup_id: str = None,
  db_system_id: str = None,
  recovery_point: str = None,
  source_url: str = None
) -> None
```

###### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSource.parameter.sourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#source_type MysqlMysqlDbSystem#source_type}.

---

###### `backup_id`<sup>Optional</sup> <a name="backup_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSource.parameter.backupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#backup_id MysqlMysqlDbSystem#backup_id}.

---

###### `db_system_id`<sup>Optional</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSource.parameter.dbSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#db_system_id MysqlMysqlDbSystem#db_system_id}.

---

###### `recovery_point`<sup>Optional</sup> <a name="recovery_point" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSource.parameter.recoveryPoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#recovery_point MysqlMysqlDbSystem#recovery_point}.

---

###### `source_url`<sup>Optional</sup> <a name="source_url" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSource.parameter.sourceUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#source_url MysqlMysqlDbSystem#source_url}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#create MysqlMysqlDbSystem#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#delete MysqlMysqlDbSystem#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#update MysqlMysqlDbSystem#update}.

---

##### `reset_admin_password` <a name="reset_admin_password" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetAdminPassword"></a>

```python
def reset_admin_password() -> None
```

##### `reset_admin_username` <a name="reset_admin_username" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetAdminUsername"></a>

```python
def reset_admin_username() -> None
```

##### `reset_backup_policy` <a name="reset_backup_policy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetBackupPolicy"></a>

```python
def reset_backup_policy() -> None
```

##### `reset_configuration_id` <a name="reset_configuration_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetConfigurationId"></a>

```python
def reset_configuration_id() -> None
```

##### `reset_crash_recovery` <a name="reset_crash_recovery" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetCrashRecovery"></a>

```python
def reset_crash_recovery() -> None
```

##### `reset_customer_contacts` <a name="reset_customer_contacts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetCustomerContacts"></a>

```python
def reset_customer_contacts() -> None
```

##### `reset_database_management` <a name="reset_database_management" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDatabaseManagement"></a>

```python
def reset_database_management() -> None
```

##### `reset_data_storage` <a name="reset_data_storage" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDataStorage"></a>

```python
def reset_data_storage() -> None
```

##### `reset_data_storage_size_in_gb` <a name="reset_data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDataStorageSizeInGb"></a>

```python
def reset_data_storage_size_in_gb() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_fault_domain` <a name="reset_fault_domain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetFaultDomain"></a>

```python
def reset_fault_domain() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_hostname_label` <a name="reset_hostname_label" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetHostnameLabel"></a>

```python
def reset_hostname_label() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_is_highly_available` <a name="reset_is_highly_available" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetIsHighlyAvailable"></a>

```python
def reset_is_highly_available() -> None
```

##### `reset_maintenance` <a name="reset_maintenance" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetMaintenance"></a>

```python
def reset_maintenance() -> None
```

##### `reset_mysql_version` <a name="reset_mysql_version" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetMysqlVersion"></a>

```python
def reset_mysql_version() -> None
```

##### `reset_port` <a name="reset_port" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_port_x` <a name="reset_port_x" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetPortX"></a>

```python
def reset_port_x() -> None
```

##### `reset_secure_connections` <a name="reset_secure_connections" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetSecureConnections"></a>

```python
def reset_secure_connections() -> None
```

##### `reset_shutdown_type` <a name="reset_shutdown_type" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetShutdownType"></a>

```python
def reset_shutdown_type() -> None
```

##### `reset_source` <a name="reset_source" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MysqlMysqlDbSystem resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystem.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystem.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystem.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystem.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MysqlMysqlDbSystem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MysqlMysqlDbSystem to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MysqlMysqlDbSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MysqlMysqlDbSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.backupPolicy">backup_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference">MysqlMysqlDbSystemBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.channels">channels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList">MysqlMysqlDbSystemChannelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.currentPlacement">current_placement</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList">MysqlMysqlDbSystemCurrentPlacementList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.customerContacts">customer_contacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList">MysqlMysqlDbSystemCustomerContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorage">data_storage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference">MysqlMysqlDbSystemDataStorageOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.deletionPolicy">deletion_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList">MysqlMysqlDbSystemDeletionPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.endpoints">endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList">MysqlMysqlDbSystemEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.heatWaveCluster">heat_wave_cluster</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList">MysqlMysqlDbSystemHeatWaveClusterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.isHeatWaveClusterAttached">is_heat_wave_cluster_attached</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.maintenance">maintenance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference">MysqlMysqlDbSystemMaintenanceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.pointInTimeRecoveryDetails">point_in_time_recovery_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList">MysqlMysqlDbSystemPointInTimeRecoveryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.secureConnections">secure_connections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference">MysqlMysqlDbSystemSecureConnectionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference">MysqlMysqlDbSystemSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference">MysqlMysqlDbSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminPasswordInput">admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminUsernameInput">admin_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.backupPolicyInput">backup_policy_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.configurationIdInput">configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.crashRecoveryInput">crash_recovery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.customerContactsInput">customer_contacts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.databaseManagementInput">database_management_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorageInput">data_storage_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorageSizeInGbInput">data_storage_size_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.faultDomainInput">fault_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.hostnameLabelInput">hostname_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.isHighlyAvailableInput">is_highly_available_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.maintenanceInput">maintenance_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.mysqlVersionInput">mysql_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.portXInput">port_x_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.secureConnectionsInput">secure_connections_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shapeNameInput">shape_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shutdownTypeInput">shutdown_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.sourceInput">source_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts">MysqlMysqlDbSystemTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminPassword">admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminUsername">admin_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.configurationId">configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.crashRecovery">crash_recovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.databaseManagement">database_management</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorageSizeInGb">data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.faultDomain">fault_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.hostnameLabel">hostname_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.isHighlyAvailable">is_highly_available</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.mysqlVersion">mysql_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.portX">port_x</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shapeName">shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shutdownType">shutdown_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_policy`<sup>Required</sup> <a name="backup_policy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.backupPolicy"></a>

```python
backup_policy: MysqlMysqlDbSystemBackupPolicyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference">MysqlMysqlDbSystemBackupPolicyOutputReference</a>

---

##### `channels`<sup>Required</sup> <a name="channels" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.channels"></a>

```python
channels: MysqlMysqlDbSystemChannelsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList">MysqlMysqlDbSystemChannelsList</a>

---

##### `current_placement`<sup>Required</sup> <a name="current_placement" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.currentPlacement"></a>

```python
current_placement: MysqlMysqlDbSystemCurrentPlacementList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList">MysqlMysqlDbSystemCurrentPlacementList</a>

---

##### `customer_contacts`<sup>Required</sup> <a name="customer_contacts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.customerContacts"></a>

```python
customer_contacts: MysqlMysqlDbSystemCustomerContactsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList">MysqlMysqlDbSystemCustomerContactsList</a>

---

##### `data_storage`<sup>Required</sup> <a name="data_storage" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorage"></a>

```python
data_storage: MysqlMysqlDbSystemDataStorageOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference">MysqlMysqlDbSystemDataStorageOutputReference</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.deletionPolicy"></a>

```python
deletion_policy: MysqlMysqlDbSystemDeletionPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList">MysqlMysqlDbSystemDeletionPolicyList</a>

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.endpoints"></a>

```python
endpoints: MysqlMysqlDbSystemEndpointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList">MysqlMysqlDbSystemEndpointsList</a>

---

##### `heat_wave_cluster`<sup>Required</sup> <a name="heat_wave_cluster" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.heatWaveCluster"></a>

```python
heat_wave_cluster: MysqlMysqlDbSystemHeatWaveClusterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList">MysqlMysqlDbSystemHeatWaveClusterList</a>

---

##### `is_heat_wave_cluster_attached`<sup>Required</sup> <a name="is_heat_wave_cluster_attached" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.isHeatWaveClusterAttached"></a>

```python
is_heat_wave_cluster_attached: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `maintenance`<sup>Required</sup> <a name="maintenance" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.maintenance"></a>

```python
maintenance: MysqlMysqlDbSystemMaintenanceOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference">MysqlMysqlDbSystemMaintenanceOutputReference</a>

---

##### `point_in_time_recovery_details`<sup>Required</sup> <a name="point_in_time_recovery_details" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.pointInTimeRecoveryDetails"></a>

```python
point_in_time_recovery_details: MysqlMysqlDbSystemPointInTimeRecoveryDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList">MysqlMysqlDbSystemPointInTimeRecoveryDetailsList</a>

---

##### `secure_connections`<sup>Required</sup> <a name="secure_connections" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.secureConnections"></a>

```python
secure_connections: MysqlMysqlDbSystemSecureConnectionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference">MysqlMysqlDbSystemSecureConnectionsOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.source"></a>

```python
source: MysqlMysqlDbSystemSourceOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference">MysqlMysqlDbSystemSourceOutputReference</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeouts"></a>

```python
timeouts: MysqlMysqlDbSystemTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference">MysqlMysqlDbSystemTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `admin_password_input`<sup>Optional</sup> <a name="admin_password_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminPasswordInput"></a>

```python
admin_password_input: str
```

- *Type:* str

---

##### `admin_username_input`<sup>Optional</sup> <a name="admin_username_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminUsernameInput"></a>

```python
admin_username_input: str
```

- *Type:* str

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `backup_policy_input`<sup>Optional</sup> <a name="backup_policy_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.backupPolicyInput"></a>

```python
backup_policy_input: MysqlMysqlDbSystemBackupPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `configuration_id_input`<sup>Optional</sup> <a name="configuration_id_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.configurationIdInput"></a>

```python
configuration_id_input: str
```

- *Type:* str

---

##### `crash_recovery_input`<sup>Optional</sup> <a name="crash_recovery_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.crashRecoveryInput"></a>

```python
crash_recovery_input: str
```

- *Type:* str

---

##### `customer_contacts_input`<sup>Optional</sup> <a name="customer_contacts_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.customerContactsInput"></a>

```python
customer_contacts_input: typing.Union[IResolvable, typing.List[MysqlMysqlDbSystemCustomerContacts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>]]

---

##### `database_management_input`<sup>Optional</sup> <a name="database_management_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.databaseManagementInput"></a>

```python
database_management_input: str
```

- *Type:* str

---

##### `data_storage_input`<sup>Optional</sup> <a name="data_storage_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorageInput"></a>

```python
data_storage_input: MysqlMysqlDbSystemDataStorage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a>

---

##### `data_storage_size_in_gb_input`<sup>Optional</sup> <a name="data_storage_size_in_gb_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorageSizeInGbInput"></a>

```python
data_storage_size_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.deletionPolicyInput"></a>

```python
deletion_policy_input: typing.Union[IResolvable, typing.List[MysqlMysqlDbSystemDeletionPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `fault_domain_input`<sup>Optional</sup> <a name="fault_domain_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.faultDomainInput"></a>

```python
fault_domain_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hostname_label_input`<sup>Optional</sup> <a name="hostname_label_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.hostnameLabelInput"></a>

```python
hostname_label_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `is_highly_available_input`<sup>Optional</sup> <a name="is_highly_available_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.isHighlyAvailableInput"></a>

```python
is_highly_available_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `maintenance_input`<sup>Optional</sup> <a name="maintenance_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.maintenanceInput"></a>

```python
maintenance_input: MysqlMysqlDbSystemMaintenance
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a>

---

##### `mysql_version_input`<sup>Optional</sup> <a name="mysql_version_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.mysqlVersionInput"></a>

```python
mysql_version_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_x_input`<sup>Optional</sup> <a name="port_x_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.portXInput"></a>

```python
port_x_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secure_connections_input`<sup>Optional</sup> <a name="secure_connections_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.secureConnectionsInput"></a>

```python
secure_connections_input: MysqlMysqlDbSystemSecureConnections
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a>

---

##### `shape_name_input`<sup>Optional</sup> <a name="shape_name_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shapeNameInput"></a>

```python
shape_name_input: str
```

- *Type:* str

---

##### `shutdown_type_input`<sup>Optional</sup> <a name="shutdown_type_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shutdownTypeInput"></a>

```python
shutdown_type_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.sourceInput"></a>

```python
source_input: MysqlMysqlDbSystemSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a>

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MysqlMysqlDbSystemTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts">MysqlMysqlDbSystemTimeouts</a>]

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `configuration_id`<sup>Required</sup> <a name="configuration_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.configurationId"></a>

```python
configuration_id: str
```

- *Type:* str

---

##### `crash_recovery`<sup>Required</sup> <a name="crash_recovery" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.crashRecovery"></a>

```python
crash_recovery: str
```

- *Type:* str

---

##### `database_management`<sup>Required</sup> <a name="database_management" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.databaseManagement"></a>

```python
database_management: str
```

- *Type:* str

---

##### `data_storage_size_in_gb`<sup>Required</sup> <a name="data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorageSizeInGb"></a>

```python
data_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `fault_domain`<sup>Required</sup> <a name="fault_domain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.faultDomain"></a>

```python
fault_domain: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hostname_label`<sup>Required</sup> <a name="hostname_label" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.hostnameLabel"></a>

```python
hostname_label: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `is_highly_available`<sup>Required</sup> <a name="is_highly_available" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.isHighlyAvailable"></a>

```python
is_highly_available: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mysql_version`<sup>Required</sup> <a name="mysql_version" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.mysqlVersion"></a>

```python
mysql_version: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_x`<sup>Required</sup> <a name="port_x" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.portX"></a>

```python
port_x: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

---

##### `shutdown_type`<sup>Required</sup> <a name="shutdown_type" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shutdownType"></a>

```python
shutdown_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlMysqlDbSystemBackupPolicy <a name="MysqlMysqlDbSystemBackupPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy(
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  pitr_policy: MysqlMysqlDbSystemBackupPolicyPitrPolicy = None,
  retention_in_days: typing.Union[int, float] = None,
  window_start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#defined_tags MysqlMysqlDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#freeform_tags MysqlMysqlDbSystem#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_enabled MysqlMysqlDbSystem#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.pitrPolicy">pitr_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy">MysqlMysqlDbSystemBackupPolicyPitrPolicy</a></code> | pitr_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#retention_in_days MysqlMysqlDbSystem#retention_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.windowStartTime">window_start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#window_start_time MysqlMysqlDbSystem#window_start_time}. |

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#defined_tags MysqlMysqlDbSystem#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#freeform_tags MysqlMysqlDbSystem#freeform_tags}.

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_enabled MysqlMysqlDbSystem#is_enabled}.

---

##### `pitr_policy`<sup>Optional</sup> <a name="pitr_policy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.pitrPolicy"></a>

```python
pitr_policy: MysqlMysqlDbSystemBackupPolicyPitrPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy">MysqlMysqlDbSystemBackupPolicyPitrPolicy</a>

pitr_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#pitr_policy MysqlMysqlDbSystem#pitr_policy}

---

##### `retention_in_days`<sup>Optional</sup> <a name="retention_in_days" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#retention_in_days MysqlMysqlDbSystem#retention_in_days}.

---

##### `window_start_time`<sup>Optional</sup> <a name="window_start_time" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.windowStartTime"></a>

```python
window_start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#window_start_time MysqlMysqlDbSystem#window_start_time}.

---

### MysqlMysqlDbSystemBackupPolicyPitrPolicy <a name="MysqlMysqlDbSystemBackupPolicyPitrPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy(
  is_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_enabled MysqlMysqlDbSystem#is_enabled}. |

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_enabled MysqlMysqlDbSystem#is_enabled}.

---

### MysqlMysqlDbSystemChannels <a name="MysqlMysqlDbSystemChannels" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannels.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemChannels()
```


### MysqlMysqlDbSystemChannelsSource <a name="MysqlMysqlDbSystemChannelsSource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSource()
```


### MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling <a name="MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling()
```


### MysqlMysqlDbSystemChannelsSourceSslCaCertificate <a name="MysqlMysqlDbSystemChannelsSourceSslCaCertificate" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificate.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificate()
```


### MysqlMysqlDbSystemChannelsTarget <a name="MysqlMysqlDbSystemChannelsTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTarget.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTarget()
```


### MysqlMysqlDbSystemChannelsTargetFilters <a name="MysqlMysqlDbSystemChannelsTargetFilters" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFilters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFilters()
```


### MysqlMysqlDbSystemConfig <a name="MysqlMysqlDbSystemConfig" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_domain: str,
  compartment_id: str,
  shape_name: str,
  subnet_id: str,
  admin_password: str = None,
  admin_username: str = None,
  backup_policy: MysqlMysqlDbSystemBackupPolicy = None,
  configuration_id: str = None,
  crash_recovery: str = None,
  customer_contacts: typing.Union[IResolvable, typing.List[MysqlMysqlDbSystemCustomerContacts]] = None,
  database_management: str = None,
  data_storage: MysqlMysqlDbSystemDataStorage = None,
  data_storage_size_in_gb: typing.Union[int, float] = None,
  defined_tags: typing.Mapping[str] = None,
  deletion_policy: typing.Union[IResolvable, typing.List[MysqlMysqlDbSystemDeletionPolicy]] = None,
  description: str = None,
  display_name: str = None,
  fault_domain: str = None,
  freeform_tags: typing.Mapping[str] = None,
  hostname_label: str = None,
  id: str = None,
  ip_address: str = None,
  is_highly_available: typing.Union[bool, IResolvable] = None,
  maintenance: MysqlMysqlDbSystemMaintenance = None,
  mysql_version: str = None,
  port: typing.Union[int, float] = None,
  port_x: typing.Union[int, float] = None,
  secure_connections: MysqlMysqlDbSystemSecureConnections = None,
  shutdown_type: str = None,
  source: MysqlMysqlDbSystemSource = None,
  state: str = None,
  timeouts: MysqlMysqlDbSystemTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#availability_domain MysqlMysqlDbSystem#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#compartment_id MysqlMysqlDbSystem#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.shapeName">shape_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#shape_name MysqlMysqlDbSystem#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#subnet_id MysqlMysqlDbSystem#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.adminPassword">admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#admin_password MysqlMysqlDbSystem#admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.adminUsername">admin_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#admin_username MysqlMysqlDbSystem#admin_username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.backupPolicy">backup_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a></code> | backup_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.configurationId">configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#configuration_id MysqlMysqlDbSystem#configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.crashRecovery">crash_recovery</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#crash_recovery MysqlMysqlDbSystem#crash_recovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.customerContacts">customer_contacts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>]]</code> | customer_contacts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.databaseManagement">database_management</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#database_management MysqlMysqlDbSystem#database_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.dataStorage">data_storage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a></code> | data_storage block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.dataStorageSizeInGb">data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#data_storage_size_in_gb MysqlMysqlDbSystem#data_storage_size_in_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#defined_tags MysqlMysqlDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.deletionPolicy">deletion_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>]]</code> | deletion_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#description MysqlMysqlDbSystem#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#display_name MysqlMysqlDbSystem#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.faultDomain">fault_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#fault_domain MysqlMysqlDbSystem#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#freeform_tags MysqlMysqlDbSystem#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.hostnameLabel">hostname_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#hostname_label MysqlMysqlDbSystem#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#id MysqlMysqlDbSystem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#ip_address MysqlMysqlDbSystem#ip_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.isHighlyAvailable">is_highly_available</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_highly_available MysqlMysqlDbSystem#is_highly_available}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.maintenance">maintenance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a></code> | maintenance block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.mysqlVersion">mysql_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#mysql_version MysqlMysqlDbSystem#mysql_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#port MysqlMysqlDbSystem#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.portX">port_x</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#port_x MysqlMysqlDbSystem#port_x}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.secureConnections">secure_connections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a></code> | secure_connections block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.shutdownType">shutdown_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#shutdown_type MysqlMysqlDbSystem#shutdown_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a></code> | source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#state MysqlMysqlDbSystem#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts">MysqlMysqlDbSystemTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#availability_domain MysqlMysqlDbSystem#availability_domain}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#compartment_id MysqlMysqlDbSystem#compartment_id}.

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#shape_name MysqlMysqlDbSystem#shape_name}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#subnet_id MysqlMysqlDbSystem#subnet_id}.

---

##### `admin_password`<sup>Optional</sup> <a name="admin_password" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#admin_password MysqlMysqlDbSystem#admin_password}.

---

##### `admin_username`<sup>Optional</sup> <a name="admin_username" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#admin_username MysqlMysqlDbSystem#admin_username}.

---

##### `backup_policy`<sup>Optional</sup> <a name="backup_policy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.backupPolicy"></a>

```python
backup_policy: MysqlMysqlDbSystemBackupPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a>

backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#backup_policy MysqlMysqlDbSystem#backup_policy}

---

##### `configuration_id`<sup>Optional</sup> <a name="configuration_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.configurationId"></a>

```python
configuration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#configuration_id MysqlMysqlDbSystem#configuration_id}.

---

##### `crash_recovery`<sup>Optional</sup> <a name="crash_recovery" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.crashRecovery"></a>

```python
crash_recovery: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#crash_recovery MysqlMysqlDbSystem#crash_recovery}.

---

##### `customer_contacts`<sup>Optional</sup> <a name="customer_contacts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.customerContacts"></a>

```python
customer_contacts: typing.Union[IResolvable, typing.List[MysqlMysqlDbSystemCustomerContacts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>]]

customer_contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#customer_contacts MysqlMysqlDbSystem#customer_contacts}

---

##### `database_management`<sup>Optional</sup> <a name="database_management" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.databaseManagement"></a>

```python
database_management: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#database_management MysqlMysqlDbSystem#database_management}.

---

##### `data_storage`<sup>Optional</sup> <a name="data_storage" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.dataStorage"></a>

```python
data_storage: MysqlMysqlDbSystemDataStorage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a>

data_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#data_storage MysqlMysqlDbSystem#data_storage}

---

##### `data_storage_size_in_gb`<sup>Optional</sup> <a name="data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.dataStorageSizeInGb"></a>

```python
data_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#data_storage_size_in_gb MysqlMysqlDbSystem#data_storage_size_in_gb}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#defined_tags MysqlMysqlDbSystem#defined_tags}.

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.deletionPolicy"></a>

```python
deletion_policy: typing.Union[IResolvable, typing.List[MysqlMysqlDbSystemDeletionPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>]]

deletion_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#deletion_policy MysqlMysqlDbSystem#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#description MysqlMysqlDbSystem#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#display_name MysqlMysqlDbSystem#display_name}.

---

##### `fault_domain`<sup>Optional</sup> <a name="fault_domain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.faultDomain"></a>

```python
fault_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#fault_domain MysqlMysqlDbSystem#fault_domain}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#freeform_tags MysqlMysqlDbSystem#freeform_tags}.

---

##### `hostname_label`<sup>Optional</sup> <a name="hostname_label" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.hostnameLabel"></a>

```python
hostname_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#hostname_label MysqlMysqlDbSystem#hostname_label}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#id MysqlMysqlDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#ip_address MysqlMysqlDbSystem#ip_address}.

---

##### `is_highly_available`<sup>Optional</sup> <a name="is_highly_available" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.isHighlyAvailable"></a>

```python
is_highly_available: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_highly_available MysqlMysqlDbSystem#is_highly_available}.

---

##### `maintenance`<sup>Optional</sup> <a name="maintenance" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.maintenance"></a>

```python
maintenance: MysqlMysqlDbSystemMaintenance
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a>

maintenance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#maintenance MysqlMysqlDbSystem#maintenance}

---

##### `mysql_version`<sup>Optional</sup> <a name="mysql_version" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.mysqlVersion"></a>

```python
mysql_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#mysql_version MysqlMysqlDbSystem#mysql_version}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#port MysqlMysqlDbSystem#port}.

---

##### `port_x`<sup>Optional</sup> <a name="port_x" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.portX"></a>

```python
port_x: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#port_x MysqlMysqlDbSystem#port_x}.

---

##### `secure_connections`<sup>Optional</sup> <a name="secure_connections" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.secureConnections"></a>

```python
secure_connections: MysqlMysqlDbSystemSecureConnections
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a>

secure_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#secure_connections MysqlMysqlDbSystem#secure_connections}

---

##### `shutdown_type`<sup>Optional</sup> <a name="shutdown_type" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.shutdownType"></a>

```python
shutdown_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#shutdown_type MysqlMysqlDbSystem#shutdown_type}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.source"></a>

```python
source: MysqlMysqlDbSystemSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#source MysqlMysqlDbSystem#source}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#state MysqlMysqlDbSystem#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.timeouts"></a>

```python
timeouts: MysqlMysqlDbSystemTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts">MysqlMysqlDbSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#timeouts MysqlMysqlDbSystem#timeouts}

---

### MysqlMysqlDbSystemCurrentPlacement <a name="MysqlMysqlDbSystemCurrentPlacement" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacement"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacement()
```


### MysqlMysqlDbSystemCustomerContacts <a name="MysqlMysqlDbSystemCustomerContacts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts(
  email: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#email MysqlMysqlDbSystem#email}. |

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#email MysqlMysqlDbSystem#email}.

---

### MysqlMysqlDbSystemDataStorage <a name="MysqlMysqlDbSystemDataStorage" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage(
  is_auto_expand_storage_enabled: typing.Union[bool, IResolvable] = None,
  max_storage_size_in_gbs: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage.property.isAutoExpandStorageEnabled">is_auto_expand_storage_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_auto_expand_storage_enabled MysqlMysqlDbSystem#is_auto_expand_storage_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage.property.maxStorageSizeInGbs">max_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#max_storage_size_in_gbs MysqlMysqlDbSystem#max_storage_size_in_gbs}. |

---

##### `is_auto_expand_storage_enabled`<sup>Optional</sup> <a name="is_auto_expand_storage_enabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage.property.isAutoExpandStorageEnabled"></a>

```python
is_auto_expand_storage_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_auto_expand_storage_enabled MysqlMysqlDbSystem#is_auto_expand_storage_enabled}.

---

##### `max_storage_size_in_gbs`<sup>Optional</sup> <a name="max_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage.property.maxStorageSizeInGbs"></a>

```python
max_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#max_storage_size_in_gbs MysqlMysqlDbSystem#max_storage_size_in_gbs}.

---

### MysqlMysqlDbSystemDeletionPolicy <a name="MysqlMysqlDbSystemDeletionPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy(
  automatic_backup_retention: str = None,
  final_backup: str = None,
  is_delete_protected: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy.property.automaticBackupRetention">automatic_backup_retention</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#automatic_backup_retention MysqlMysqlDbSystem#automatic_backup_retention}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy.property.finalBackup">final_backup</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#final_backup MysqlMysqlDbSystem#final_backup}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy.property.isDeleteProtected">is_delete_protected</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_delete_protected MysqlMysqlDbSystem#is_delete_protected}. |

---

##### `automatic_backup_retention`<sup>Optional</sup> <a name="automatic_backup_retention" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy.property.automaticBackupRetention"></a>

```python
automatic_backup_retention: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#automatic_backup_retention MysqlMysqlDbSystem#automatic_backup_retention}.

---

##### `final_backup`<sup>Optional</sup> <a name="final_backup" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy.property.finalBackup"></a>

```python
final_backup: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#final_backup MysqlMysqlDbSystem#final_backup}.

---

##### `is_delete_protected`<sup>Optional</sup> <a name="is_delete_protected" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy.property.isDeleteProtected"></a>

```python
is_delete_protected: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_delete_protected MysqlMysqlDbSystem#is_delete_protected}.

---

### MysqlMysqlDbSystemEndpoints <a name="MysqlMysqlDbSystemEndpoints" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpoints.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpoints()
```


### MysqlMysqlDbSystemHeatWaveCluster <a name="MysqlMysqlDbSystemHeatWaveCluster" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveCluster"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveCluster.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveCluster()
```


### MysqlMysqlDbSystemMaintenance <a name="MysqlMysqlDbSystemMaintenance" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance(
  window_start_time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance.property.windowStartTime">window_start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#window_start_time MysqlMysqlDbSystem#window_start_time}. |

---

##### `window_start_time`<sup>Required</sup> <a name="window_start_time" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance.property.windowStartTime"></a>

```python
window_start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#window_start_time MysqlMysqlDbSystem#window_start_time}.

---

### MysqlMysqlDbSystemPointInTimeRecoveryDetails <a name="MysqlMysqlDbSystemPointInTimeRecoveryDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetails()
```


### MysqlMysqlDbSystemSecureConnections <a name="MysqlMysqlDbSystemSecureConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections(
  certificate_generation_type: str,
  certificate_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections.property.certificateGenerationType">certificate_generation_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#certificate_generation_type MysqlMysqlDbSystem#certificate_generation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections.property.certificateId">certificate_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#certificate_id MysqlMysqlDbSystem#certificate_id}. |

---

##### `certificate_generation_type`<sup>Required</sup> <a name="certificate_generation_type" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections.property.certificateGenerationType"></a>

```python
certificate_generation_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#certificate_generation_type MysqlMysqlDbSystem#certificate_generation_type}.

---

##### `certificate_id`<sup>Optional</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#certificate_id MysqlMysqlDbSystem#certificate_id}.

---

### MysqlMysqlDbSystemSource <a name="MysqlMysqlDbSystemSource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemSource(
  source_type: str,
  backup_id: str = None,
  db_system_id: str = None,
  recovery_point: str = None,
  source_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.sourceType">source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#source_type MysqlMysqlDbSystem#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.backupId">backup_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#backup_id MysqlMysqlDbSystem#backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.dbSystemId">db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#db_system_id MysqlMysqlDbSystem#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.recoveryPoint">recovery_point</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#recovery_point MysqlMysqlDbSystem#recovery_point}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.sourceUrl">source_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#source_url MysqlMysqlDbSystem#source_url}. |

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#source_type MysqlMysqlDbSystem#source_type}.

---

##### `backup_id`<sup>Optional</sup> <a name="backup_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#backup_id MysqlMysqlDbSystem#backup_id}.

---

##### `db_system_id`<sup>Optional</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#db_system_id MysqlMysqlDbSystem#db_system_id}.

---

##### `recovery_point`<sup>Optional</sup> <a name="recovery_point" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.recoveryPoint"></a>

```python
recovery_point: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#recovery_point MysqlMysqlDbSystem#recovery_point}.

---

##### `source_url`<sup>Optional</sup> <a name="source_url" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.sourceUrl"></a>

```python
source_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#source_url MysqlMysqlDbSystem#source_url}.

---

### MysqlMysqlDbSystemTimeouts <a name="MysqlMysqlDbSystemTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#create MysqlMysqlDbSystem#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#delete MysqlMysqlDbSystem#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#update MysqlMysqlDbSystem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#create MysqlMysqlDbSystem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#delete MysqlMysqlDbSystem#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#update MysqlMysqlDbSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlMysqlDbSystemBackupPolicyOutputReference <a name="MysqlMysqlDbSystemBackupPolicyOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.putPitrPolicy">put_pitr_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetPitrPolicy">reset_pitr_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetRetentionInDays">reset_retention_in_days</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetWindowStartTime">reset_window_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pitr_policy` <a name="put_pitr_policy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.putPitrPolicy"></a>

```python
def put_pitr_policy(
  is_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.putPitrPolicy.parameter.isEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_enabled MysqlMysqlDbSystem#is_enabled}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_is_enabled` <a name="reset_is_enabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```

##### `reset_pitr_policy` <a name="reset_pitr_policy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetPitrPolicy"></a>

```python
def reset_pitr_policy() -> None
```

##### `reset_retention_in_days` <a name="reset_retention_in_days" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetRetentionInDays"></a>

```python
def reset_retention_in_days() -> None
```

##### `reset_window_start_time` <a name="reset_window_start_time" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetWindowStartTime"></a>

```python
def reset_window_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.pitrPolicy">pitr_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference">MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.pitrPolicyInput">pitr_policy_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy">MysqlMysqlDbSystemBackupPolicyPitrPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.retentionInDaysInput">retention_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.windowStartTimeInput">window_start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.windowStartTime">window_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pitr_policy`<sup>Required</sup> <a name="pitr_policy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.pitrPolicy"></a>

```python
pitr_policy: MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference">MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference</a>

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pitr_policy_input`<sup>Optional</sup> <a name="pitr_policy_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.pitrPolicyInput"></a>

```python
pitr_policy_input: MysqlMysqlDbSystemBackupPolicyPitrPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy">MysqlMysqlDbSystemBackupPolicyPitrPolicy</a>

---

##### `retention_in_days_input`<sup>Optional</sup> <a name="retention_in_days_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.retentionInDaysInput"></a>

```python
retention_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `window_start_time_input`<sup>Optional</sup> <a name="window_start_time_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.windowStartTimeInput"></a>

```python
window_start_time_input: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `window_start_time`<sup>Required</sup> <a name="window_start_time" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.windowStartTime"></a>

```python
window_start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.internalValue"></a>

```python
internal_value: MysqlMysqlDbSystemBackupPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a>

---


### MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference <a name="MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_enabled` <a name="reset_is_enabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy">MysqlMysqlDbSystemBackupPolicyPitrPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.internalValue"></a>

```python
internal_value: MysqlMysqlDbSystemBackupPolicyPitrPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy">MysqlMysqlDbSystemBackupPolicyPitrPolicy</a>

---


### MysqlMysqlDbSystemChannelsList <a name="MysqlMysqlDbSystemChannelsList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MysqlMysqlDbSystemChannelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MysqlMysqlDbSystemChannelsOutputReference <a name="MysqlMysqlDbSystemChannelsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList">MysqlMysqlDbSystemChannelsSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.target">target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList">MysqlMysqlDbSystemChannelsTargetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannels">MysqlMysqlDbSystemChannels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.source"></a>

```python
source: MysqlMysqlDbSystemChannelsSourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList">MysqlMysqlDbSystemChannelsSourceList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.target"></a>

```python
target: MysqlMysqlDbSystemChannelsTargetList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList">MysqlMysqlDbSystemChannelsTargetList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.internalValue"></a>

```python
internal_value: MysqlMysqlDbSystemChannels
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannels">MysqlMysqlDbSystemChannels</a>

---


### MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList <a name="MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference <a name="MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogFilename">last_configured_log_filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogOffset">last_configured_log_offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling">MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_configured_log_filename`<sup>Required</sup> <a name="last_configured_log_filename" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogFilename"></a>

```python
last_configured_log_filename: str
```

- *Type:* str

---

##### `last_configured_log_offset`<sup>Required</sup> <a name="last_configured_log_offset" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogOffset"></a>

```python
last_configured_log_offset: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.internalValue"></a>

```python
internal_value: MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling">MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling</a>

---


### MysqlMysqlDbSystemChannelsSourceList <a name="MysqlMysqlDbSystemChannelsSourceList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MysqlMysqlDbSystemChannelsSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MysqlMysqlDbSystemChannelsSourceOutputReference <a name="MysqlMysqlDbSystemChannelsSourceOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.anonymousTransactionsHandling">anonymous_transactions_handling</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList">MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.sslCaCertificate">ssl_ca_certificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList">MysqlMysqlDbSystemChannelsSourceSslCaCertificateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSource">MysqlMysqlDbSystemChannelsSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `anonymous_transactions_handling`<sup>Required</sup> <a name="anonymous_transactions_handling" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.anonymousTransactionsHandling"></a>

```python
anonymous_transactions_handling: MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList">MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `ssl_ca_certificate`<sup>Required</sup> <a name="ssl_ca_certificate" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.sslCaCertificate"></a>

```python
ssl_ca_certificate: MysqlMysqlDbSystemChannelsSourceSslCaCertificateList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList">MysqlMysqlDbSystemChannelsSourceSslCaCertificateList</a>

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.internalValue"></a>

```python
internal_value: MysqlMysqlDbSystemChannelsSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSource">MysqlMysqlDbSystemChannelsSource</a>

---


### MysqlMysqlDbSystemChannelsSourceSslCaCertificateList <a name="MysqlMysqlDbSystemChannelsSourceSslCaCertificateList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference <a name="MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.certificateType">certificate_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.contents">contents</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificate">MysqlMysqlDbSystemChannelsSourceSslCaCertificate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_type`<sup>Required</sup> <a name="certificate_type" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.certificateType"></a>

```python
certificate_type: str
```

- *Type:* str

---

##### `contents`<sup>Required</sup> <a name="contents" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.contents"></a>

```python
contents: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.internalValue"></a>

```python
internal_value: MysqlMysqlDbSystemChannelsSourceSslCaCertificate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificate">MysqlMysqlDbSystemChannelsSourceSslCaCertificate</a>

---


### MysqlMysqlDbSystemChannelsTargetFiltersList <a name="MysqlMysqlDbSystemChannelsTargetFiltersList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MysqlMysqlDbSystemChannelsTargetFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MysqlMysqlDbSystemChannelsTargetFiltersOutputReference <a name="MysqlMysqlDbSystemChannelsTargetFiltersOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFilters">MysqlMysqlDbSystemChannelsTargetFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.internalValue"></a>

```python
internal_value: MysqlMysqlDbSystemChannelsTargetFilters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFilters">MysqlMysqlDbSystemChannelsTargetFilters</a>

---


### MysqlMysqlDbSystemChannelsTargetList <a name="MysqlMysqlDbSystemChannelsTargetList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MysqlMysqlDbSystemChannelsTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MysqlMysqlDbSystemChannelsTargetOutputReference <a name="MysqlMysqlDbSystemChannelsTargetOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.applierUsername">applier_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.channelName">channel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.delayInSeconds">delay_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.filters">filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList">MysqlMysqlDbSystemChannelsTargetFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.tablesWithoutPrimaryKeyHandling">tables_without_primary_key_handling</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.targetType">target_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTarget">MysqlMysqlDbSystemChannelsTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `applier_username`<sup>Required</sup> <a name="applier_username" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.applierUsername"></a>

```python
applier_username: str
```

- *Type:* str

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `delay_in_seconds`<sup>Required</sup> <a name="delay_in_seconds" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.delayInSeconds"></a>

```python
delay_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.filters"></a>

```python
filters: MysqlMysqlDbSystemChannelsTargetFiltersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList">MysqlMysqlDbSystemChannelsTargetFiltersList</a>

---

##### `tables_without_primary_key_handling`<sup>Required</sup> <a name="tables_without_primary_key_handling" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.tablesWithoutPrimaryKeyHandling"></a>

```python
tables_without_primary_key_handling: str
```

- *Type:* str

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.internalValue"></a>

```python
internal_value: MysqlMysqlDbSystemChannelsTarget
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTarget">MysqlMysqlDbSystemChannelsTarget</a>

---


### MysqlMysqlDbSystemCurrentPlacementList <a name="MysqlMysqlDbSystemCurrentPlacementList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MysqlMysqlDbSystemCurrentPlacementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MysqlMysqlDbSystemCurrentPlacementOutputReference <a name="MysqlMysqlDbSystemCurrentPlacementOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.faultDomain">fault_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacement">MysqlMysqlDbSystemCurrentPlacement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `fault_domain`<sup>Required</sup> <a name="fault_domain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.faultDomain"></a>

```python
fault_domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.internalValue"></a>

```python
internal_value: MysqlMysqlDbSystemCurrentPlacement
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacement">MysqlMysqlDbSystemCurrentPlacement</a>

---


### MysqlMysqlDbSystemCustomerContactsList <a name="MysqlMysqlDbSystemCustomerContactsList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MysqlMysqlDbSystemCustomerContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MysqlMysqlDbSystemCustomerContacts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>]]

---


### MysqlMysqlDbSystemCustomerContactsOutputReference <a name="MysqlMysqlDbSystemCustomerContactsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MysqlMysqlDbSystemCustomerContacts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>]

---


### MysqlMysqlDbSystemDataStorageOutputReference <a name="MysqlMysqlDbSystemDataStorageOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.resetIsAutoExpandStorageEnabled">reset_is_auto_expand_storage_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.resetMaxStorageSizeInGbs">reset_max_storage_size_in_gbs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_auto_expand_storage_enabled` <a name="reset_is_auto_expand_storage_enabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.resetIsAutoExpandStorageEnabled"></a>

```python
def reset_is_auto_expand_storage_enabled() -> None
```

##### `reset_max_storage_size_in_gbs` <a name="reset_max_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.resetMaxStorageSizeInGbs"></a>

```python
def reset_max_storage_size_in_gbs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.allocatedStorageSizeInGbs">allocated_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.dataStorageSizeInGb">data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.dataStorageSizeLimitInGbs">data_storage_size_limit_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.isAutoExpandStorageEnabledInput">is_auto_expand_storage_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.maxStorageSizeInGbsInput">max_storage_size_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.isAutoExpandStorageEnabled">is_auto_expand_storage_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.maxStorageSizeInGbs">max_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocated_storage_size_in_gbs`<sup>Required</sup> <a name="allocated_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.allocatedStorageSizeInGbs"></a>

```python
allocated_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_gb`<sup>Required</sup> <a name="data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.dataStorageSizeInGb"></a>

```python
data_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_limit_in_gbs`<sup>Required</sup> <a name="data_storage_size_limit_in_gbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.dataStorageSizeLimitInGbs"></a>

```python
data_storage_size_limit_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_auto_expand_storage_enabled_input`<sup>Optional</sup> <a name="is_auto_expand_storage_enabled_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.isAutoExpandStorageEnabledInput"></a>

```python
is_auto_expand_storage_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_storage_size_in_gbs_input`<sup>Optional</sup> <a name="max_storage_size_in_gbs_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.maxStorageSizeInGbsInput"></a>

```python
max_storage_size_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_auto_expand_storage_enabled`<sup>Required</sup> <a name="is_auto_expand_storage_enabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.isAutoExpandStorageEnabled"></a>

```python
is_auto_expand_storage_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_storage_size_in_gbs`<sup>Required</sup> <a name="max_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.maxStorageSizeInGbs"></a>

```python
max_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.internalValue"></a>

```python
internal_value: MysqlMysqlDbSystemDataStorage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a>

---


### MysqlMysqlDbSystemDeletionPolicyList <a name="MysqlMysqlDbSystemDeletionPolicyList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MysqlMysqlDbSystemDeletionPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MysqlMysqlDbSystemDeletionPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>]]

---


### MysqlMysqlDbSystemDeletionPolicyOutputReference <a name="MysqlMysqlDbSystemDeletionPolicyOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resetAutomaticBackupRetention">reset_automatic_backup_retention</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resetFinalBackup">reset_final_backup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resetIsDeleteProtected">reset_is_delete_protected</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_automatic_backup_retention` <a name="reset_automatic_backup_retention" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resetAutomaticBackupRetention"></a>

```python
def reset_automatic_backup_retention() -> None
```

##### `reset_final_backup` <a name="reset_final_backup" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resetFinalBackup"></a>

```python
def reset_final_backup() -> None
```

##### `reset_is_delete_protected` <a name="reset_is_delete_protected" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resetIsDeleteProtected"></a>

```python
def reset_is_delete_protected() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.automaticBackupRetentionInput">automatic_backup_retention_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.finalBackupInput">final_backup_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.isDeleteProtectedInput">is_delete_protected_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.automaticBackupRetention">automatic_backup_retention</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.finalBackup">final_backup</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.isDeleteProtected">is_delete_protected</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `automatic_backup_retention_input`<sup>Optional</sup> <a name="automatic_backup_retention_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.automaticBackupRetentionInput"></a>

```python
automatic_backup_retention_input: str
```

- *Type:* str

---

##### `final_backup_input`<sup>Optional</sup> <a name="final_backup_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.finalBackupInput"></a>

```python
final_backup_input: str
```

- *Type:* str

---

##### `is_delete_protected_input`<sup>Optional</sup> <a name="is_delete_protected_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.isDeleteProtectedInput"></a>

```python
is_delete_protected_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `automatic_backup_retention`<sup>Required</sup> <a name="automatic_backup_retention" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.automaticBackupRetention"></a>

```python
automatic_backup_retention: str
```

- *Type:* str

---

##### `final_backup`<sup>Required</sup> <a name="final_backup" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.finalBackup"></a>

```python
final_backup: str
```

- *Type:* str

---

##### `is_delete_protected`<sup>Required</sup> <a name="is_delete_protected" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.isDeleteProtected"></a>

```python
is_delete_protected: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MysqlMysqlDbSystemDeletionPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>]

---


### MysqlMysqlDbSystemEndpointsList <a name="MysqlMysqlDbSystemEndpointsList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MysqlMysqlDbSystemEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MysqlMysqlDbSystemEndpointsOutputReference <a name="MysqlMysqlDbSystemEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.modes">modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.portX">port_x</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.statusDetails">status_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpoints">MysqlMysqlDbSystemEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `modes`<sup>Required</sup> <a name="modes" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.modes"></a>

```python
modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_x`<sup>Required</sup> <a name="port_x" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.portX"></a>

```python
port_x: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_details`<sup>Required</sup> <a name="status_details" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.statusDetails"></a>

```python
status_details: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: MysqlMysqlDbSystemEndpoints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpoints">MysqlMysqlDbSystemEndpoints</a>

---


### MysqlMysqlDbSystemHeatWaveClusterList <a name="MysqlMysqlDbSystemHeatWaveClusterList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MysqlMysqlDbSystemHeatWaveClusterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MysqlMysqlDbSystemHeatWaveClusterOutputReference <a name="MysqlMysqlDbSystemHeatWaveClusterOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.clusterSize">cluster_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.isLakehouseEnabled">is_lakehouse_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.shapeName">shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveCluster">MysqlMysqlDbSystemHeatWaveCluster</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_size`<sup>Required</sup> <a name="cluster_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.clusterSize"></a>

```python
cluster_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_lakehouse_enabled`<sup>Required</sup> <a name="is_lakehouse_enabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.isLakehouseEnabled"></a>

```python
is_lakehouse_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.internalValue"></a>

```python
internal_value: MysqlMysqlDbSystemHeatWaveCluster
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveCluster">MysqlMysqlDbSystemHeatWaveCluster</a>

---


### MysqlMysqlDbSystemMaintenanceOutputReference <a name="MysqlMysqlDbSystemMaintenanceOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.windowStartTimeInput">window_start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.windowStartTime">window_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `window_start_time_input`<sup>Optional</sup> <a name="window_start_time_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.windowStartTimeInput"></a>

```python
window_start_time_input: str
```

- *Type:* str

---

##### `window_start_time`<sup>Required</sup> <a name="window_start_time" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.windowStartTime"></a>

```python
window_start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.internalValue"></a>

```python
internal_value: MysqlMysqlDbSystemMaintenance
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a>

---


### MysqlMysqlDbSystemPointInTimeRecoveryDetailsList <a name="MysqlMysqlDbSystemPointInTimeRecoveryDetailsList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference <a name="MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.timeEarliestRecoveryPoint">time_earliest_recovery_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.timeLatestRecoveryPoint">time_latest_recovery_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetails">MysqlMysqlDbSystemPointInTimeRecoveryDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_earliest_recovery_point`<sup>Required</sup> <a name="time_earliest_recovery_point" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.timeEarliestRecoveryPoint"></a>

```python
time_earliest_recovery_point: str
```

- *Type:* str

---

##### `time_latest_recovery_point`<sup>Required</sup> <a name="time_latest_recovery_point" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.timeLatestRecoveryPoint"></a>

```python
time_latest_recovery_point: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.internalValue"></a>

```python
internal_value: MysqlMysqlDbSystemPointInTimeRecoveryDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetails">MysqlMysqlDbSystemPointInTimeRecoveryDetails</a>

---


### MysqlMysqlDbSystemSecureConnectionsOutputReference <a name="MysqlMysqlDbSystemSecureConnectionsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.resetCertificateId">reset_certificate_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_id` <a name="reset_certificate_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.resetCertificateId"></a>

```python
def reset_certificate_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateGenerationTypeInput">certificate_generation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateIdInput">certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateGenerationType">certificate_generation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_generation_type_input`<sup>Optional</sup> <a name="certificate_generation_type_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateGenerationTypeInput"></a>

```python
certificate_generation_type_input: str
```

- *Type:* str

---

##### `certificate_id_input`<sup>Optional</sup> <a name="certificate_id_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateIdInput"></a>

```python
certificate_id_input: str
```

- *Type:* str

---

##### `certificate_generation_type`<sup>Required</sup> <a name="certificate_generation_type" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateGenerationType"></a>

```python
certificate_generation_type: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: MysqlMysqlDbSystemSecureConnections
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a>

---


### MysqlMysqlDbSystemSourceOutputReference <a name="MysqlMysqlDbSystemSourceOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetBackupId">reset_backup_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetDbSystemId">reset_db_system_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetRecoveryPoint">reset_recovery_point</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetSourceUrl">reset_source_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backup_id` <a name="reset_backup_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetBackupId"></a>

```python
def reset_backup_id() -> None
```

##### `reset_db_system_id` <a name="reset_db_system_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetDbSystemId"></a>

```python
def reset_db_system_id() -> None
```

##### `reset_recovery_point` <a name="reset_recovery_point" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetRecoveryPoint"></a>

```python
def reset_recovery_point() -> None
```

##### `reset_source_url` <a name="reset_source_url" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetSourceUrl"></a>

```python
def reset_source_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.backupIdInput">backup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.dbSystemIdInput">db_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.recoveryPointInput">recovery_point_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceTypeInput">source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceUrlInput">source_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.backupId">backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.recoveryPoint">recovery_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceUrl">source_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_id_input`<sup>Optional</sup> <a name="backup_id_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.backupIdInput"></a>

```python
backup_id_input: str
```

- *Type:* str

---

##### `db_system_id_input`<sup>Optional</sup> <a name="db_system_id_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.dbSystemIdInput"></a>

```python
db_system_id_input: str
```

- *Type:* str

---

##### `recovery_point_input`<sup>Optional</sup> <a name="recovery_point_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.recoveryPointInput"></a>

```python
recovery_point_input: str
```

- *Type:* str

---

##### `source_type_input`<sup>Optional</sup> <a name="source_type_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceTypeInput"></a>

```python
source_type_input: str
```

- *Type:* str

---

##### `source_url_input`<sup>Optional</sup> <a name="source_url_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceUrlInput"></a>

```python
source_url_input: str
```

- *Type:* str

---

##### `backup_id`<sup>Required</sup> <a name="backup_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `recovery_point`<sup>Required</sup> <a name="recovery_point" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.recoveryPoint"></a>

```python
recovery_point: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `source_url`<sup>Required</sup> <a name="source_url" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceUrl"></a>

```python
source_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.internalValue"></a>

```python
internal_value: MysqlMysqlDbSystemSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a>

---


### MysqlMysqlDbSystemTimeoutsOutputReference <a name="MysqlMysqlDbSystemTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_db_system

mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts">MysqlMysqlDbSystemTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MysqlMysqlDbSystemTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts">MysqlMysqlDbSystemTimeouts</a>]

---



