# `databaseMigrationConnection` Submodule <a name="`databaseMigrationConnection` Submodule" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseMigrationConnection <a name="DatabaseMigrationConnection" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection oci_database_migration_connection}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_connection

databaseMigrationConnection.DatabaseMigrationConnection(
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
  connection_type: str,
  display_name: str,
  key_id: str,
  password: str,
  technology_type: str,
  username: str,
  vault_id: str,
  additional_attributes: typing.Union[IResolvable, typing.List[DatabaseMigrationConnectionAdditionalAttributes]] = None,
  connection_string: str = None,
  database_id: str = None,
  database_name: str = None,
  db_system_id: str = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  host: str = None,
  id: str = None,
  nsg_ids: typing.List[str] = None,
  port: typing.Union[int, float] = None,
  replication_password: str = None,
  replication_username: str = None,
  security_protocol: str = None,
  ssh_host: str = None,
  ssh_key: str = None,
  ssh_sudo_location: str = None,
  ssh_user: str = None,
  ssl_ca: str = None,
  ssl_cert: str = None,
  ssl_crl: str = None,
  ssl_key: str = None,
  ssl_mode: str = None,
  subnet_id: str = None,
  timeouts: DatabaseMigrationConnectionTimeouts = None,
  wallet: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#compartment_id DatabaseMigrationConnection#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.connectionType">connection_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#connection_type DatabaseMigrationConnection#connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#display_name DatabaseMigrationConnection#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.keyId">key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#key_id DatabaseMigrationConnection#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#password DatabaseMigrationConnection#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.technologyType">technology_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#technology_type DatabaseMigrationConnection#technology_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#username DatabaseMigrationConnection#username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.vaultId">vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#vault_id DatabaseMigrationConnection#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.additionalAttributes">additional_attributes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes">DatabaseMigrationConnectionAdditionalAttributes</a>]]</code> | additional_attributes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#connection_string DatabaseMigrationConnection#connection_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#database_id DatabaseMigrationConnection#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#database_name DatabaseMigrationConnection#database_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.dbSystemId">db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#db_system_id DatabaseMigrationConnection#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#defined_tags DatabaseMigrationConnection#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#description DatabaseMigrationConnection#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#freeform_tags DatabaseMigrationConnection#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#host DatabaseMigrationConnection#host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#id DatabaseMigrationConnection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#nsg_ids DatabaseMigrationConnection#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#port DatabaseMigrationConnection#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.replicationPassword">replication_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#replication_password DatabaseMigrationConnection#replication_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.replicationUsername">replication_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#replication_username DatabaseMigrationConnection#replication_username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.securityProtocol">security_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#security_protocol DatabaseMigrationConnection#security_protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sshHost">ssh_host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_host DatabaseMigrationConnection#ssh_host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sshKey">ssh_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_key DatabaseMigrationConnection#ssh_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sshSudoLocation">ssh_sudo_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_sudo_location DatabaseMigrationConnection#ssh_sudo_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sshUser">ssh_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_user DatabaseMigrationConnection#ssh_user}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sslCa">ssl_ca</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_ca DatabaseMigrationConnection#ssl_ca}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sslCert">ssl_cert</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_cert DatabaseMigrationConnection#ssl_cert}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sslCrl">ssl_crl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_crl DatabaseMigrationConnection#ssl_crl}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sslKey">ssl_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_key DatabaseMigrationConnection#ssl_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_mode DatabaseMigrationConnection#ssl_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#subnet_id DatabaseMigrationConnection#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts">DatabaseMigrationConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.wallet">wallet</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#wallet DatabaseMigrationConnection#wallet}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#compartment_id DatabaseMigrationConnection#compartment_id}.

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.connectionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#connection_type DatabaseMigrationConnection#connection_type}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#display_name DatabaseMigrationConnection#display_name}.

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.keyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#key_id DatabaseMigrationConnection#key_id}.

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#password DatabaseMigrationConnection#password}.

---

##### `technology_type`<sup>Required</sup> <a name="technology_type" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.technologyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#technology_type DatabaseMigrationConnection#technology_type}.

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#username DatabaseMigrationConnection#username}.

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.vaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#vault_id DatabaseMigrationConnection#vault_id}.

---

##### `additional_attributes`<sup>Optional</sup> <a name="additional_attributes" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.additionalAttributes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes">DatabaseMigrationConnectionAdditionalAttributes</a>]]

additional_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#additional_attributes DatabaseMigrationConnection#additional_attributes}

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.connectionString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#connection_string DatabaseMigrationConnection#connection_string}.

---

##### `database_id`<sup>Optional</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.databaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#database_id DatabaseMigrationConnection#database_id}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#database_name DatabaseMigrationConnection#database_name}.

---

##### `db_system_id`<sup>Optional</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.dbSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#db_system_id DatabaseMigrationConnection#db_system_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#defined_tags DatabaseMigrationConnection#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#description DatabaseMigrationConnection#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#freeform_tags DatabaseMigrationConnection#freeform_tags}.

---

##### `host`<sup>Optional</sup> <a name="host" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.host"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#host DatabaseMigrationConnection#host}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#id DatabaseMigrationConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.nsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#nsg_ids DatabaseMigrationConnection#nsg_ids}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#port DatabaseMigrationConnection#port}.

---

##### `replication_password`<sup>Optional</sup> <a name="replication_password" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.replicationPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#replication_password DatabaseMigrationConnection#replication_password}.

---

##### `replication_username`<sup>Optional</sup> <a name="replication_username" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.replicationUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#replication_username DatabaseMigrationConnection#replication_username}.

---

##### `security_protocol`<sup>Optional</sup> <a name="security_protocol" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.securityProtocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#security_protocol DatabaseMigrationConnection#security_protocol}.

---

##### `ssh_host`<sup>Optional</sup> <a name="ssh_host" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sshHost"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_host DatabaseMigrationConnection#ssh_host}.

---

##### `ssh_key`<sup>Optional</sup> <a name="ssh_key" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sshKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_key DatabaseMigrationConnection#ssh_key}.

---

##### `ssh_sudo_location`<sup>Optional</sup> <a name="ssh_sudo_location" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sshSudoLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_sudo_location DatabaseMigrationConnection#ssh_sudo_location}.

---

##### `ssh_user`<sup>Optional</sup> <a name="ssh_user" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sshUser"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_user DatabaseMigrationConnection#ssh_user}.

---

##### `ssl_ca`<sup>Optional</sup> <a name="ssl_ca" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sslCa"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_ca DatabaseMigrationConnection#ssl_ca}.

---

##### `ssl_cert`<sup>Optional</sup> <a name="ssl_cert" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sslCert"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_cert DatabaseMigrationConnection#ssl_cert}.

---

##### `ssl_crl`<sup>Optional</sup> <a name="ssl_crl" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sslCrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_crl DatabaseMigrationConnection#ssl_crl}.

---

##### `ssl_key`<sup>Optional</sup> <a name="ssl_key" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sslKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_key DatabaseMigrationConnection#ssl_key}.

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sslMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_mode DatabaseMigrationConnection#ssl_mode}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#subnet_id DatabaseMigrationConnection#subnet_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts">DatabaseMigrationConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#timeouts DatabaseMigrationConnection#timeouts}

---

##### `wallet`<sup>Optional</sup> <a name="wallet" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.wallet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#wallet DatabaseMigrationConnection#wallet}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.putAdditionalAttributes">put_additional_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetAdditionalAttributes">reset_additional_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetConnectionString">reset_connection_string</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDatabaseId">reset_database_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDbSystemId">reset_db_system_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetNsgIds">reset_nsg_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetReplicationPassword">reset_replication_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetReplicationUsername">reset_replication_username</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSecurityProtocol">reset_security_protocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSshHost">reset_ssh_host</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSshKey">reset_ssh_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSshSudoLocation">reset_ssh_sudo_location</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSshUser">reset_ssh_user</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslCa">reset_ssl_ca</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslCert">reset_ssl_cert</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslCrl">reset_ssl_crl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslKey">reset_ssl_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslMode">reset_ssl_mode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetWallet">reset_wallet</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_additional_attributes` <a name="put_additional_attributes" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.putAdditionalAttributes"></a>

```python
def put_additional_attributes(
  value: typing.Union[IResolvable, typing.List[DatabaseMigrationConnectionAdditionalAttributes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.putAdditionalAttributes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes">DatabaseMigrationConnectionAdditionalAttributes</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#create DatabaseMigrationConnection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#delete DatabaseMigrationConnection#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#update DatabaseMigrationConnection#update}.

---

##### `reset_additional_attributes` <a name="reset_additional_attributes" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetAdditionalAttributes"></a>

```python
def reset_additional_attributes() -> None
```

##### `reset_connection_string` <a name="reset_connection_string" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetConnectionString"></a>

```python
def reset_connection_string() -> None
```

##### `reset_database_id` <a name="reset_database_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDatabaseId"></a>

```python
def reset_database_id() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_db_system_id` <a name="reset_db_system_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDbSystemId"></a>

```python
def reset_db_system_id() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_host` <a name="reset_host" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_nsg_ids` <a name="reset_nsg_ids" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetNsgIds"></a>

```python
def reset_nsg_ids() -> None
```

##### `reset_port` <a name="reset_port" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_replication_password` <a name="reset_replication_password" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetReplicationPassword"></a>

```python
def reset_replication_password() -> None
```

##### `reset_replication_username` <a name="reset_replication_username" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetReplicationUsername"></a>

```python
def reset_replication_username() -> None
```

##### `reset_security_protocol` <a name="reset_security_protocol" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSecurityProtocol"></a>

```python
def reset_security_protocol() -> None
```

##### `reset_ssh_host` <a name="reset_ssh_host" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSshHost"></a>

```python
def reset_ssh_host() -> None
```

##### `reset_ssh_key` <a name="reset_ssh_key" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSshKey"></a>

```python
def reset_ssh_key() -> None
```

##### `reset_ssh_sudo_location` <a name="reset_ssh_sudo_location" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSshSudoLocation"></a>

```python
def reset_ssh_sudo_location() -> None
```

##### `reset_ssh_user` <a name="reset_ssh_user" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSshUser"></a>

```python
def reset_ssh_user() -> None
```

##### `reset_ssl_ca` <a name="reset_ssl_ca" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslCa"></a>

```python
def reset_ssl_ca() -> None
```

##### `reset_ssl_cert` <a name="reset_ssl_cert" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslCert"></a>

```python
def reset_ssl_cert() -> None
```

##### `reset_ssl_crl` <a name="reset_ssl_crl" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslCrl"></a>

```python
def reset_ssl_crl() -> None
```

##### `reset_ssl_key` <a name="reset_ssl_key" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslKey"></a>

```python
def reset_ssl_key() -> None
```

##### `reset_ssl_mode` <a name="reset_ssl_mode" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslMode"></a>

```python
def reset_ssl_mode() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_wallet` <a name="reset_wallet" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetWallet"></a>

```python
def reset_wallet() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseMigrationConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_connection

databaseMigrationConnection.DatabaseMigrationConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_connection

databaseMigrationConnection.DatabaseMigrationConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_connection

databaseMigrationConnection.DatabaseMigrationConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_connection

databaseMigrationConnection.DatabaseMigrationConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseMigrationConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseMigrationConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseMigrationConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseMigrationConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.additionalAttributes">additional_attributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList">DatabaseMigrationConnectionAdditionalAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.ingressIps">ingress_ips</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList">DatabaseMigrationConnectionIngressIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference">DatabaseMigrationConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.additionalAttributesInput">additional_attributes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes">DatabaseMigrationConnectionAdditionalAttributes</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connectionStringInput">connection_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connectionTypeInput">connection_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.databaseIdInput">database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.dbSystemIdInput">db_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.nsgIdsInput">nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.replicationPasswordInput">replication_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.replicationUsernameInput">replication_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.securityProtocolInput">security_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshHostInput">ssh_host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshKeyInput">ssh_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshSudoLocationInput">ssh_sudo_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshUserInput">ssh_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCaInput">ssl_ca_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCertInput">ssl_cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCrlInput">ssl_crl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslKeyInput">ssl_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslModeInput">ssl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.technologyTypeInput">technology_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts">DatabaseMigrationConnectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.vaultIdInput">vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.walletInput">wallet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.databaseId">database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.replicationPassword">replication_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.replicationUsername">replication_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.securityProtocol">security_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshHost">ssh_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshKey">ssh_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshSudoLocation">ssh_sudo_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshUser">ssh_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCa">ssl_ca</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCert">ssl_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCrl">ssl_crl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslKey">ssl_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.technologyType">technology_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.wallet">wallet</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `additional_attributes`<sup>Required</sup> <a name="additional_attributes" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.additionalAttributes"></a>

```python
additional_attributes: DatabaseMigrationConnectionAdditionalAttributesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList">DatabaseMigrationConnectionAdditionalAttributesList</a>

---

##### `ingress_ips`<sup>Required</sup> <a name="ingress_ips" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.ingressIps"></a>

```python
ingress_ips: DatabaseMigrationConnectionIngressIpsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList">DatabaseMigrationConnectionIngressIpsList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `private_endpoint_id`<sup>Required</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.privateEndpointId"></a>

```python
private_endpoint_id: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.timeouts"></a>

```python
timeouts: DatabaseMigrationConnectionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference">DatabaseMigrationConnectionTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `additional_attributes_input`<sup>Optional</sup> <a name="additional_attributes_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.additionalAttributesInput"></a>

```python
additional_attributes_input: typing.Union[IResolvable, typing.List[DatabaseMigrationConnectionAdditionalAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes">DatabaseMigrationConnectionAdditionalAttributes</a>]]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `connection_string_input`<sup>Optional</sup> <a name="connection_string_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connectionStringInput"></a>

```python
connection_string_input: str
```

- *Type:* str

---

##### `connection_type_input`<sup>Optional</sup> <a name="connection_type_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connectionTypeInput"></a>

```python
connection_type_input: str
```

- *Type:* str

---

##### `database_id_input`<sup>Optional</sup> <a name="database_id_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.databaseIdInput"></a>

```python
database_id_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `db_system_id_input`<sup>Optional</sup> <a name="db_system_id_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.dbSystemIdInput"></a>

```python
db_system_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `nsg_ids_input`<sup>Optional</sup> <a name="nsg_ids_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.nsgIdsInput"></a>

```python
nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replication_password_input`<sup>Optional</sup> <a name="replication_password_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.replicationPasswordInput"></a>

```python
replication_password_input: str
```

- *Type:* str

---

##### `replication_username_input`<sup>Optional</sup> <a name="replication_username_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.replicationUsernameInput"></a>

```python
replication_username_input: str
```

- *Type:* str

---

##### `security_protocol_input`<sup>Optional</sup> <a name="security_protocol_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.securityProtocolInput"></a>

```python
security_protocol_input: str
```

- *Type:* str

---

##### `ssh_host_input`<sup>Optional</sup> <a name="ssh_host_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshHostInput"></a>

```python
ssh_host_input: str
```

- *Type:* str

---

##### `ssh_key_input`<sup>Optional</sup> <a name="ssh_key_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshKeyInput"></a>

```python
ssh_key_input: str
```

- *Type:* str

---

##### `ssh_sudo_location_input`<sup>Optional</sup> <a name="ssh_sudo_location_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshSudoLocationInput"></a>

```python
ssh_sudo_location_input: str
```

- *Type:* str

---

##### `ssh_user_input`<sup>Optional</sup> <a name="ssh_user_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshUserInput"></a>

```python
ssh_user_input: str
```

- *Type:* str

---

##### `ssl_ca_input`<sup>Optional</sup> <a name="ssl_ca_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCaInput"></a>

```python
ssl_ca_input: str
```

- *Type:* str

---

##### `ssl_cert_input`<sup>Optional</sup> <a name="ssl_cert_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCertInput"></a>

```python
ssl_cert_input: str
```

- *Type:* str

---

##### `ssl_crl_input`<sup>Optional</sup> <a name="ssl_crl_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCrlInput"></a>

```python
ssl_crl_input: str
```

- *Type:* str

---

##### `ssl_key_input`<sup>Optional</sup> <a name="ssl_key_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslKeyInput"></a>

```python
ssl_key_input: str
```

- *Type:* str

---

##### `ssl_mode_input`<sup>Optional</sup> <a name="ssl_mode_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslModeInput"></a>

```python
ssl_mode_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `technology_type_input`<sup>Optional</sup> <a name="technology_type_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.technologyTypeInput"></a>

```python
technology_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseMigrationConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts">DatabaseMigrationConnectionTimeouts</a>]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `vault_id_input`<sup>Optional</sup> <a name="vault_id_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.vaultIdInput"></a>

```python
vault_id_input: str
```

- *Type:* str

---

##### `wallet_input`<sup>Optional</sup> <a name="wallet_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.walletInput"></a>

```python
wallet_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replication_password`<sup>Required</sup> <a name="replication_password" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.replicationPassword"></a>

```python
replication_password: str
```

- *Type:* str

---

##### `replication_username`<sup>Required</sup> <a name="replication_username" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.replicationUsername"></a>

```python
replication_username: str
```

- *Type:* str

---

##### `security_protocol`<sup>Required</sup> <a name="security_protocol" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.securityProtocol"></a>

```python
security_protocol: str
```

- *Type:* str

---

##### `ssh_host`<sup>Required</sup> <a name="ssh_host" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshHost"></a>

```python
ssh_host: str
```

- *Type:* str

---

##### `ssh_key`<sup>Required</sup> <a name="ssh_key" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshKey"></a>

```python
ssh_key: str
```

- *Type:* str

---

##### `ssh_sudo_location`<sup>Required</sup> <a name="ssh_sudo_location" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshSudoLocation"></a>

```python
ssh_sudo_location: str
```

- *Type:* str

---

##### `ssh_user`<sup>Required</sup> <a name="ssh_user" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshUser"></a>

```python
ssh_user: str
```

- *Type:* str

---

##### `ssl_ca`<sup>Required</sup> <a name="ssl_ca" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCa"></a>

```python
ssl_ca: str
```

- *Type:* str

---

##### `ssl_cert`<sup>Required</sup> <a name="ssl_cert" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCert"></a>

```python
ssl_cert: str
```

- *Type:* str

---

##### `ssl_crl`<sup>Required</sup> <a name="ssl_crl" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCrl"></a>

```python
ssl_crl: str
```

- *Type:* str

---

##### `ssl_key`<sup>Required</sup> <a name="ssl_key" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslKey"></a>

```python
ssl_key: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `technology_type`<sup>Required</sup> <a name="technology_type" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.technologyType"></a>

```python
technology_type: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `wallet`<sup>Required</sup> <a name="wallet" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.wallet"></a>

```python
wallet: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseMigrationConnectionAdditionalAttributes <a name="DatabaseMigrationConnectionAdditionalAttributes" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_connection

databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#name DatabaseMigrationConnection#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#value DatabaseMigrationConnection#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#name DatabaseMigrationConnection#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#value DatabaseMigrationConnection#value}.

---

### DatabaseMigrationConnectionConfig <a name="DatabaseMigrationConnectionConfig" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_connection

databaseMigrationConnection.DatabaseMigrationConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  connection_type: str,
  display_name: str,
  key_id: str,
  password: str,
  technology_type: str,
  username: str,
  vault_id: str,
  additional_attributes: typing.Union[IResolvable, typing.List[DatabaseMigrationConnectionAdditionalAttributes]] = None,
  connection_string: str = None,
  database_id: str = None,
  database_name: str = None,
  db_system_id: str = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  host: str = None,
  id: str = None,
  nsg_ids: typing.List[str] = None,
  port: typing.Union[int, float] = None,
  replication_password: str = None,
  replication_username: str = None,
  security_protocol: str = None,
  ssh_host: str = None,
  ssh_key: str = None,
  ssh_sudo_location: str = None,
  ssh_user: str = None,
  ssl_ca: str = None,
  ssl_cert: str = None,
  ssl_crl: str = None,
  ssl_key: str = None,
  ssl_mode: str = None,
  subnet_id: str = None,
  timeouts: DatabaseMigrationConnectionTimeouts = None,
  wallet: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#compartment_id DatabaseMigrationConnection#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.connectionType">connection_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#connection_type DatabaseMigrationConnection#connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#display_name DatabaseMigrationConnection#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.keyId">key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#key_id DatabaseMigrationConnection#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#password DatabaseMigrationConnection#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.technologyType">technology_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#technology_type DatabaseMigrationConnection#technology_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#username DatabaseMigrationConnection#username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.vaultId">vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#vault_id DatabaseMigrationConnection#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.additionalAttributes">additional_attributes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes">DatabaseMigrationConnectionAdditionalAttributes</a>]]</code> | additional_attributes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#connection_string DatabaseMigrationConnection#connection_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#database_id DatabaseMigrationConnection#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#database_name DatabaseMigrationConnection#database_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.dbSystemId">db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#db_system_id DatabaseMigrationConnection#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#defined_tags DatabaseMigrationConnection#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#description DatabaseMigrationConnection#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#freeform_tags DatabaseMigrationConnection#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#host DatabaseMigrationConnection#host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#id DatabaseMigrationConnection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#nsg_ids DatabaseMigrationConnection#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#port DatabaseMigrationConnection#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.replicationPassword">replication_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#replication_password DatabaseMigrationConnection#replication_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.replicationUsername">replication_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#replication_username DatabaseMigrationConnection#replication_username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.securityProtocol">security_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#security_protocol DatabaseMigrationConnection#security_protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sshHost">ssh_host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_host DatabaseMigrationConnection#ssh_host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sshKey">ssh_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_key DatabaseMigrationConnection#ssh_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sshSudoLocation">ssh_sudo_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_sudo_location DatabaseMigrationConnection#ssh_sudo_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sshUser">ssh_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_user DatabaseMigrationConnection#ssh_user}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslCa">ssl_ca</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_ca DatabaseMigrationConnection#ssl_ca}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslCert">ssl_cert</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_cert DatabaseMigrationConnection#ssl_cert}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslCrl">ssl_crl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_crl DatabaseMigrationConnection#ssl_crl}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslKey">ssl_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_key DatabaseMigrationConnection#ssl_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_mode DatabaseMigrationConnection#ssl_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#subnet_id DatabaseMigrationConnection#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts">DatabaseMigrationConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.wallet">wallet</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#wallet DatabaseMigrationConnection#wallet}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#compartment_id DatabaseMigrationConnection#compartment_id}.

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#connection_type DatabaseMigrationConnection#connection_type}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#display_name DatabaseMigrationConnection#display_name}.

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#key_id DatabaseMigrationConnection#key_id}.

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#password DatabaseMigrationConnection#password}.

---

##### `technology_type`<sup>Required</sup> <a name="technology_type" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.technologyType"></a>

```python
technology_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#technology_type DatabaseMigrationConnection#technology_type}.

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#username DatabaseMigrationConnection#username}.

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#vault_id DatabaseMigrationConnection#vault_id}.

---

##### `additional_attributes`<sup>Optional</sup> <a name="additional_attributes" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.additionalAttributes"></a>

```python
additional_attributes: typing.Union[IResolvable, typing.List[DatabaseMigrationConnectionAdditionalAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes">DatabaseMigrationConnectionAdditionalAttributes</a>]]

additional_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#additional_attributes DatabaseMigrationConnection#additional_attributes}

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#connection_string DatabaseMigrationConnection#connection_string}.

---

##### `database_id`<sup>Optional</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#database_id DatabaseMigrationConnection#database_id}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#database_name DatabaseMigrationConnection#database_name}.

---

##### `db_system_id`<sup>Optional</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#db_system_id DatabaseMigrationConnection#db_system_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#defined_tags DatabaseMigrationConnection#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#description DatabaseMigrationConnection#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#freeform_tags DatabaseMigrationConnection#freeform_tags}.

---

##### `host`<sup>Optional</sup> <a name="host" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#host DatabaseMigrationConnection#host}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#id DatabaseMigrationConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#nsg_ids DatabaseMigrationConnection#nsg_ids}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#port DatabaseMigrationConnection#port}.

---

##### `replication_password`<sup>Optional</sup> <a name="replication_password" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.replicationPassword"></a>

```python
replication_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#replication_password DatabaseMigrationConnection#replication_password}.

---

##### `replication_username`<sup>Optional</sup> <a name="replication_username" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.replicationUsername"></a>

```python
replication_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#replication_username DatabaseMigrationConnection#replication_username}.

---

##### `security_protocol`<sup>Optional</sup> <a name="security_protocol" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.securityProtocol"></a>

```python
security_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#security_protocol DatabaseMigrationConnection#security_protocol}.

---

##### `ssh_host`<sup>Optional</sup> <a name="ssh_host" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sshHost"></a>

```python
ssh_host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_host DatabaseMigrationConnection#ssh_host}.

---

##### `ssh_key`<sup>Optional</sup> <a name="ssh_key" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sshKey"></a>

```python
ssh_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_key DatabaseMigrationConnection#ssh_key}.

---

##### `ssh_sudo_location`<sup>Optional</sup> <a name="ssh_sudo_location" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sshSudoLocation"></a>

```python
ssh_sudo_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_sudo_location DatabaseMigrationConnection#ssh_sudo_location}.

---

##### `ssh_user`<sup>Optional</sup> <a name="ssh_user" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sshUser"></a>

```python
ssh_user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_user DatabaseMigrationConnection#ssh_user}.

---

##### `ssl_ca`<sup>Optional</sup> <a name="ssl_ca" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslCa"></a>

```python
ssl_ca: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_ca DatabaseMigrationConnection#ssl_ca}.

---

##### `ssl_cert`<sup>Optional</sup> <a name="ssl_cert" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslCert"></a>

```python
ssl_cert: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_cert DatabaseMigrationConnection#ssl_cert}.

---

##### `ssl_crl`<sup>Optional</sup> <a name="ssl_crl" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslCrl"></a>

```python
ssl_crl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_crl DatabaseMigrationConnection#ssl_crl}.

---

##### `ssl_key`<sup>Optional</sup> <a name="ssl_key" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslKey"></a>

```python
ssl_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_key DatabaseMigrationConnection#ssl_key}.

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_mode DatabaseMigrationConnection#ssl_mode}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#subnet_id DatabaseMigrationConnection#subnet_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.timeouts"></a>

```python
timeouts: DatabaseMigrationConnectionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts">DatabaseMigrationConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#timeouts DatabaseMigrationConnection#timeouts}

---

##### `wallet`<sup>Optional</sup> <a name="wallet" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.wallet"></a>

```python
wallet: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#wallet DatabaseMigrationConnection#wallet}.

---

### DatabaseMigrationConnectionIngressIps <a name="DatabaseMigrationConnectionIngressIps" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIps.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_connection

databaseMigrationConnection.DatabaseMigrationConnectionIngressIps()
```


### DatabaseMigrationConnectionTimeouts <a name="DatabaseMigrationConnectionTimeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_connection

databaseMigrationConnection.DatabaseMigrationConnectionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#create DatabaseMigrationConnection#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#delete DatabaseMigrationConnection#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#update DatabaseMigrationConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#create DatabaseMigrationConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#delete DatabaseMigrationConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#update DatabaseMigrationConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseMigrationConnectionAdditionalAttributesList <a name="DatabaseMigrationConnectionAdditionalAttributesList" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_connection

databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseMigrationConnectionAdditionalAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes">DatabaseMigrationConnectionAdditionalAttributes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseMigrationConnectionAdditionalAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes">DatabaseMigrationConnectionAdditionalAttributes</a>]]

---


### DatabaseMigrationConnectionAdditionalAttributesOutputReference <a name="DatabaseMigrationConnectionAdditionalAttributesOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_connection

databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes">DatabaseMigrationConnectionAdditionalAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseMigrationConnectionAdditionalAttributes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes">DatabaseMigrationConnectionAdditionalAttributes</a>]

---


### DatabaseMigrationConnectionIngressIpsList <a name="DatabaseMigrationConnectionIngressIpsList" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_connection

databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseMigrationConnectionIngressIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseMigrationConnectionIngressIpsOutputReference <a name="DatabaseMigrationConnectionIngressIpsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_connection

databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.property.ingressIp">ingress_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIps">DatabaseMigrationConnectionIngressIps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingress_ip`<sup>Required</sup> <a name="ingress_ip" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.property.ingressIp"></a>

```python
ingress_ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseMigrationConnectionIngressIps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIps">DatabaseMigrationConnectionIngressIps</a>

---


### DatabaseMigrationConnectionTimeoutsOutputReference <a name="DatabaseMigrationConnectionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_connection

databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts">DatabaseMigrationConnectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseMigrationConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts">DatabaseMigrationConnectionTimeouts</a>]

---



