# `databaseDatabase` Submodule <a name="`databaseDatabase` Submodule" id="rhizo-co-terraform-provider-oci.databaseDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseDatabase <a name="DatabaseDatabase" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database oci_database_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database

databaseDatabase.DatabaseDatabase(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: DatabaseDatabaseDatabase,
  db_home_id: str,
  source: str,
  db_version: str = None,
  id: str = None,
  key_store_id: str = None,
  kms_key_id: str = None,
  kms_key_migration: typing.Union[bool, IResolvable] = None,
  kms_key_rotation: typing.Union[int, float] = None,
  kms_key_version_id: str = None,
  timeouts: DatabaseDatabaseTimeouts = None,
  vault_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.database">database</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase">DatabaseDatabaseDatabase</a></code> | database block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.dbHomeId">db_home_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_home_id DatabaseDatabase#db_home_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#source DatabaseDatabase#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.dbVersion">db_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_version DatabaseDatabase#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#id DatabaseDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.keyStoreId">key_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#key_store_id DatabaseDatabase#key_store_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_id DatabaseDatabase#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.kmsKeyMigration">kms_key_migration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_migration DatabaseDatabase#kms_key_migration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.kmsKeyRotation">kms_key_rotation</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_rotation DatabaseDatabase#kms_key_rotation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_version_id DatabaseDatabase#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeouts">DatabaseDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.vaultId">vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#vault_id DatabaseDatabase#vault_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.database"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase">DatabaseDatabaseDatabase</a>

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#database DatabaseDatabase#database}

---

##### `db_home_id`<sup>Required</sup> <a name="db_home_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.dbHomeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_home_id DatabaseDatabase#db_home_id}.

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#source DatabaseDatabase#source}.

---

##### `db_version`<sup>Optional</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.dbVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_version DatabaseDatabase#db_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#id DatabaseDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_store_id`<sup>Optional</sup> <a name="key_store_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.keyStoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#key_store_id DatabaseDatabase#key_store_id}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_id DatabaseDatabase#kms_key_id}.

---

##### `kms_key_migration`<sup>Optional</sup> <a name="kms_key_migration" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.kmsKeyMigration"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_migration DatabaseDatabase#kms_key_migration}.

---

##### `kms_key_rotation`<sup>Optional</sup> <a name="kms_key_rotation" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.kmsKeyRotation"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_rotation DatabaseDatabase#kms_key_rotation}.

---

##### `kms_key_version_id`<sup>Optional</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.kmsKeyVersionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_version_id DatabaseDatabase#kms_key_version_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeouts">DatabaseDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#timeouts DatabaseDatabase#timeouts}

---

##### `vault_id`<sup>Optional</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.Initializer.parameter.vaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#vault_id DatabaseDatabase#vault_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putDatabase">put_database</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetDbVersion">reset_db_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetKeyStoreId">reset_key_store_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetKmsKeyMigration">reset_kms_key_migration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetKmsKeyRotation">reset_kms_key_rotation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetKmsKeyVersionId">reset_kms_key_version_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetVaultId">reset_vault_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_database` <a name="put_database" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putDatabase"></a>

```python
def put_database(
  admin_password: str,
  db_name: str,
  backup_id: str = None,
  backup_tde_password: str = None,
  character_set: str = None,
  database_software_image_id: str = None,
  db_backup_config: DatabaseDatabaseDatabaseDbBackupConfig = None,
  db_unique_name: str = None,
  db_workload: str = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  kms_key_id: str = None,
  kms_key_version_id: str = None,
  ncharacter_set: str = None,
  pdb_name: str = None,
  pluggable_databases: typing.List[str] = None,
  sid_prefix: str = None,
  tde_wallet_password: str = None,
  vault_id: str = None
) -> None
```

###### `admin_password`<sup>Required</sup> <a name="admin_password" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putDatabase.parameter.adminPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#admin_password DatabaseDatabase#admin_password}.

---

###### `db_name`<sup>Required</sup> <a name="db_name" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putDatabase.parameter.dbName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_name DatabaseDatabase#db_name}.

---

###### `backup_id`<sup>Optional</sup> <a name="backup_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putDatabase.parameter.backupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#backup_id DatabaseDatabase#backup_id}.

---

###### `backup_tde_password`<sup>Optional</sup> <a name="backup_tde_password" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putDatabase.parameter.backupTdePassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#backup_tde_password DatabaseDatabase#backup_tde_password}.

---

###### `character_set`<sup>Optional</sup> <a name="character_set" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putDatabase.parameter.characterSet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#character_set DatabaseDatabase#character_set}.

---

###### `database_software_image_id`<sup>Optional</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putDatabase.parameter.databaseSoftwareImageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#database_software_image_id DatabaseDatabase#database_software_image_id}.

---

###### `db_backup_config`<sup>Optional</sup> <a name="db_backup_config" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putDatabase.parameter.dbBackupConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig">DatabaseDatabaseDatabaseDbBackupConfig</a>

db_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_backup_config DatabaseDatabase#db_backup_config}

---

###### `db_unique_name`<sup>Optional</sup> <a name="db_unique_name" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putDatabase.parameter.dbUniqueName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_unique_name DatabaseDatabase#db_unique_name}.

---

###### `db_workload`<sup>Optional</sup> <a name="db_workload" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putDatabase.parameter.dbWorkload"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_workload DatabaseDatabase#db_workload}.

---

###### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putDatabase.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#defined_tags DatabaseDatabase#defined_tags}.

---

###### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putDatabase.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#freeform_tags DatabaseDatabase#freeform_tags}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putDatabase.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_id DatabaseDatabase#kms_key_id}.

---

###### `kms_key_version_id`<sup>Optional</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putDatabase.parameter.kmsKeyVersionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_version_id DatabaseDatabase#kms_key_version_id}.

---

###### `ncharacter_set`<sup>Optional</sup> <a name="ncharacter_set" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putDatabase.parameter.ncharacterSet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#ncharacter_set DatabaseDatabase#ncharacter_set}.

---

###### `pdb_name`<sup>Optional</sup> <a name="pdb_name" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putDatabase.parameter.pdbName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#pdb_name DatabaseDatabase#pdb_name}.

---

###### `pluggable_databases`<sup>Optional</sup> <a name="pluggable_databases" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putDatabase.parameter.pluggableDatabases"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#pluggable_databases DatabaseDatabase#pluggable_databases}.

---

###### `sid_prefix`<sup>Optional</sup> <a name="sid_prefix" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putDatabase.parameter.sidPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#sid_prefix DatabaseDatabase#sid_prefix}.

---

###### `tde_wallet_password`<sup>Optional</sup> <a name="tde_wallet_password" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putDatabase.parameter.tdeWalletPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#tde_wallet_password DatabaseDatabase#tde_wallet_password}.

---

###### `vault_id`<sup>Optional</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putDatabase.parameter.vaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#vault_id DatabaseDatabase#vault_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#create DatabaseDatabase#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#delete DatabaseDatabase#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#update DatabaseDatabase#update}.

---

##### `reset_db_version` <a name="reset_db_version" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetDbVersion"></a>

```python
def reset_db_version() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_store_id` <a name="reset_key_store_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetKeyStoreId"></a>

```python
def reset_key_store_id() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_kms_key_migration` <a name="reset_kms_key_migration" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetKmsKeyMigration"></a>

```python
def reset_kms_key_migration() -> None
```

##### `reset_kms_key_rotation` <a name="reset_kms_key_rotation" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetKmsKeyRotation"></a>

```python
def reset_kms_key_rotation() -> None
```

##### `reset_kms_key_version_id` <a name="reset_kms_key_version_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetKmsKeyVersionId"></a>

```python
def reset_kms_key_version_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vault_id` <a name="reset_vault_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.resetVaultId"></a>

```python
def reset_vault_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database

databaseDatabase.DatabaseDatabase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database

databaseDatabase.DatabaseDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database

databaseDatabase.DatabaseDatabase.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database

databaseDatabase.DatabaseDatabase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseDatabase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.characterSet">character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.connectionStrings">connection_strings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList">DatabaseDatabaseConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.database">database</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference">DatabaseDatabaseDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.databaseManagementConfig">database_management_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList">DatabaseDatabaseDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.databaseSoftwareImageId">database_software_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbBackupConfig">db_backup_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList">DatabaseDatabaseDbBackupConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbUniqueName">db_unique_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbWorkload">db_workload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.isCdb">is_cdb</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.keyStoreWalletName">key_store_wallet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.lastBackupDurationInSeconds">last_backup_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.lastBackupTimestamp">last_backup_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.lastFailedBackupTimestamp">last_failed_backup_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.ncharacterSet">ncharacter_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.pdbName">pdb_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.sidPrefix">sid_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.sourceDatabasePointInTimeRecoveryTimestamp">source_database_point_in_time_recovery_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference">DatabaseDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.vmClusterId">vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.databaseInput">database_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase">DatabaseDatabaseDatabase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbHomeIdInput">db_home_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbVersionInput">db_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.keyStoreIdInput">key_store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyMigrationInput">kms_key_migration_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyRotationInput">kms_key_rotation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyVersionIdInput">kms_key_version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeouts">DatabaseDatabaseTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.vaultIdInput">vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbHomeId">db_home_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.keyStoreId">key_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyMigration">kms_key_migration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyRotation">kms_key_rotation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `character_set`<sup>Required</sup> <a name="character_set" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `connection_strings`<sup>Required</sup> <a name="connection_strings" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.connectionStrings"></a>

```python
connection_strings: DatabaseDatabaseConnectionStringsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList">DatabaseDatabaseConnectionStringsList</a>

---

##### `database`<sup>Required</sup> <a name="database" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.database"></a>

```python
database: DatabaseDatabaseDatabaseOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference">DatabaseDatabaseDatabaseOutputReference</a>

---

##### `database_management_config`<sup>Required</sup> <a name="database_management_config" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.databaseManagementConfig"></a>

```python
database_management_config: DatabaseDatabaseDatabaseManagementConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList">DatabaseDatabaseDatabaseManagementConfigList</a>

---

##### `database_software_image_id`<sup>Required</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.databaseSoftwareImageId"></a>

```python
database_software_image_id: str
```

- *Type:* str

---

##### `db_backup_config`<sup>Required</sup> <a name="db_backup_config" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbBackupConfig"></a>

```python
db_backup_config: DatabaseDatabaseDbBackupConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList">DatabaseDatabaseDbBackupConfigList</a>

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `db_unique_name`<sup>Required</sup> <a name="db_unique_name" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbUniqueName"></a>

```python
db_unique_name: str
```

- *Type:* str

---

##### `db_workload`<sup>Required</sup> <a name="db_workload" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbWorkload"></a>

```python
db_workload: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `is_cdb`<sup>Required</sup> <a name="is_cdb" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.isCdb"></a>

```python
is_cdb: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key_store_wallet_name`<sup>Required</sup> <a name="key_store_wallet_name" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.keyStoreWalletName"></a>

```python
key_store_wallet_name: str
```

- *Type:* str

---

##### `last_backup_duration_in_seconds`<sup>Required</sup> <a name="last_backup_duration_in_seconds" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.lastBackupDurationInSeconds"></a>

```python
last_backup_duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_backup_timestamp`<sup>Required</sup> <a name="last_backup_timestamp" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.lastBackupTimestamp"></a>

```python
last_backup_timestamp: str
```

- *Type:* str

---

##### `last_failed_backup_timestamp`<sup>Required</sup> <a name="last_failed_backup_timestamp" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.lastFailedBackupTimestamp"></a>

```python
last_failed_backup_timestamp: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `ncharacter_set`<sup>Required</sup> <a name="ncharacter_set" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.ncharacterSet"></a>

```python
ncharacter_set: str
```

- *Type:* str

---

##### `pdb_name`<sup>Required</sup> <a name="pdb_name" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.pdbName"></a>

```python
pdb_name: str
```

- *Type:* str

---

##### `sid_prefix`<sup>Required</sup> <a name="sid_prefix" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.sidPrefix"></a>

```python
sid_prefix: str
```

- *Type:* str

---

##### `source_database_point_in_time_recovery_timestamp`<sup>Required</sup> <a name="source_database_point_in_time_recovery_timestamp" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.sourceDatabasePointInTimeRecoveryTimestamp"></a>

```python
source_database_point_in_time_recovery_timestamp: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.timeouts"></a>

```python
timeouts: DatabaseDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference">DatabaseDatabaseTimeoutsOutputReference</a>

---

##### `vm_cluster_id`<sup>Required</sup> <a name="vm_cluster_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.vmClusterId"></a>

```python
vm_cluster_id: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.databaseInput"></a>

```python
database_input: DatabaseDatabaseDatabase
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase">DatabaseDatabaseDatabase</a>

---

##### `db_home_id_input`<sup>Optional</sup> <a name="db_home_id_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbHomeIdInput"></a>

```python
db_home_id_input: str
```

- *Type:* str

---

##### `db_version_input`<sup>Optional</sup> <a name="db_version_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbVersionInput"></a>

```python
db_version_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_store_id_input`<sup>Optional</sup> <a name="key_store_id_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.keyStoreIdInput"></a>

```python
key_store_id_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `kms_key_migration_input`<sup>Optional</sup> <a name="kms_key_migration_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyMigrationInput"></a>

```python
kms_key_migration_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key_rotation_input`<sup>Optional</sup> <a name="kms_key_rotation_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyRotationInput"></a>

```python
kms_key_rotation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_version_id_input`<sup>Optional</sup> <a name="kms_key_version_id_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyVersionIdInput"></a>

```python
kms_key_version_id_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseDatabaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeouts">DatabaseDatabaseTimeouts</a>]

---

##### `vault_id_input`<sup>Optional</sup> <a name="vault_id_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.vaultIdInput"></a>

```python
vault_id_input: str
```

- *Type:* str

---

##### `db_home_id`<sup>Required</sup> <a name="db_home_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbHomeId"></a>

```python
db_home_id: str
```

- *Type:* str

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_store_id`<sup>Required</sup> <a name="key_store_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.keyStoreId"></a>

```python
key_store_id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `kms_key_migration`<sup>Required</sup> <a name="kms_key_migration" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyMigration"></a>

```python
kms_key_migration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key_rotation`<sup>Required</sup> <a name="kms_key_rotation" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyRotation"></a>

```python
kms_key_rotation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_version_id`<sup>Required</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.kmsKeyVersionId"></a>

```python
kms_key_version_id: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseDatabaseConfig <a name="DatabaseDatabaseConfig" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database

databaseDatabase.DatabaseDatabaseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: DatabaseDatabaseDatabase,
  db_home_id: str,
  source: str,
  db_version: str = None,
  id: str = None,
  key_store_id: str = None,
  kms_key_id: str = None,
  kms_key_migration: typing.Union[bool, IResolvable] = None,
  kms_key_rotation: typing.Union[int, float] = None,
  kms_key_version_id: str = None,
  timeouts: DatabaseDatabaseTimeouts = None,
  vault_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.database">database</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase">DatabaseDatabaseDatabase</a></code> | database block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.dbHomeId">db_home_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_home_id DatabaseDatabase#db_home_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#source DatabaseDatabase#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.dbVersion">db_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_version DatabaseDatabase#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#id DatabaseDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.keyStoreId">key_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#key_store_id DatabaseDatabase#key_store_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_id DatabaseDatabase#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.kmsKeyMigration">kms_key_migration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_migration DatabaseDatabase#kms_key_migration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.kmsKeyRotation">kms_key_rotation</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_rotation DatabaseDatabase#kms_key_rotation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_version_id DatabaseDatabase#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeouts">DatabaseDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.vaultId">vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#vault_id DatabaseDatabase#vault_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.database"></a>

```python
database: DatabaseDatabaseDatabase
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase">DatabaseDatabaseDatabase</a>

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#database DatabaseDatabase#database}

---

##### `db_home_id`<sup>Required</sup> <a name="db_home_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.dbHomeId"></a>

```python
db_home_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_home_id DatabaseDatabase#db_home_id}.

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#source DatabaseDatabase#source}.

---

##### `db_version`<sup>Optional</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_version DatabaseDatabase#db_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#id DatabaseDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_store_id`<sup>Optional</sup> <a name="key_store_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.keyStoreId"></a>

```python
key_store_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#key_store_id DatabaseDatabase#key_store_id}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_id DatabaseDatabase#kms_key_id}.

---

##### `kms_key_migration`<sup>Optional</sup> <a name="kms_key_migration" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.kmsKeyMigration"></a>

```python
kms_key_migration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_migration DatabaseDatabase#kms_key_migration}.

---

##### `kms_key_rotation`<sup>Optional</sup> <a name="kms_key_rotation" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.kmsKeyRotation"></a>

```python
kms_key_rotation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_rotation DatabaseDatabase#kms_key_rotation}.

---

##### `kms_key_version_id`<sup>Optional</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.kmsKeyVersionId"></a>

```python
kms_key_version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_version_id DatabaseDatabase#kms_key_version_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.timeouts"></a>

```python
timeouts: DatabaseDatabaseTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeouts">DatabaseDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#timeouts DatabaseDatabase#timeouts}

---

##### `vault_id`<sup>Optional</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConfig.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#vault_id DatabaseDatabase#vault_id}.

---

### DatabaseDatabaseConnectionStrings <a name="DatabaseDatabaseConnectionStrings" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStrings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database

databaseDatabase.DatabaseDatabaseConnectionStrings()
```


### DatabaseDatabaseDatabase <a name="DatabaseDatabaseDatabase" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database

databaseDatabase.DatabaseDatabaseDatabase(
  admin_password: str,
  db_name: str,
  backup_id: str = None,
  backup_tde_password: str = None,
  character_set: str = None,
  database_software_image_id: str = None,
  db_backup_config: DatabaseDatabaseDatabaseDbBackupConfig = None,
  db_unique_name: str = None,
  db_workload: str = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  kms_key_id: str = None,
  kms_key_version_id: str = None,
  ncharacter_set: str = None,
  pdb_name: str = None,
  pluggable_databases: typing.List[str] = None,
  sid_prefix: str = None,
  tde_wallet_password: str = None,
  vault_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.adminPassword">admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#admin_password DatabaseDatabase#admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.dbName">db_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_name DatabaseDatabase#db_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.backupId">backup_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#backup_id DatabaseDatabase#backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.backupTdePassword">backup_tde_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#backup_tde_password DatabaseDatabase#backup_tde_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.characterSet">character_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#character_set DatabaseDatabase#character_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.databaseSoftwareImageId">database_software_image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#database_software_image_id DatabaseDatabase#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.dbBackupConfig">db_backup_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig">DatabaseDatabaseDatabaseDbBackupConfig</a></code> | db_backup_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.dbUniqueName">db_unique_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_unique_name DatabaseDatabase#db_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.dbWorkload">db_workload</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_workload DatabaseDatabase#db_workload}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#defined_tags DatabaseDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#freeform_tags DatabaseDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_id DatabaseDatabase#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_version_id DatabaseDatabase#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.ncharacterSet">ncharacter_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#ncharacter_set DatabaseDatabase#ncharacter_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.pdbName">pdb_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#pdb_name DatabaseDatabase#pdb_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.pluggableDatabases">pluggable_databases</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#pluggable_databases DatabaseDatabase#pluggable_databases}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.sidPrefix">sid_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#sid_prefix DatabaseDatabase#sid_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.tdeWalletPassword">tde_wallet_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#tde_wallet_password DatabaseDatabase#tde_wallet_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.vaultId">vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#vault_id DatabaseDatabase#vault_id}. |

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#admin_password DatabaseDatabase#admin_password}.

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_name DatabaseDatabase#db_name}.

---

##### `backup_id`<sup>Optional</sup> <a name="backup_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#backup_id DatabaseDatabase#backup_id}.

---

##### `backup_tde_password`<sup>Optional</sup> <a name="backup_tde_password" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.backupTdePassword"></a>

```python
backup_tde_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#backup_tde_password DatabaseDatabase#backup_tde_password}.

---

##### `character_set`<sup>Optional</sup> <a name="character_set" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#character_set DatabaseDatabase#character_set}.

---

##### `database_software_image_id`<sup>Optional</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.databaseSoftwareImageId"></a>

```python
database_software_image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#database_software_image_id DatabaseDatabase#database_software_image_id}.

---

##### `db_backup_config`<sup>Optional</sup> <a name="db_backup_config" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.dbBackupConfig"></a>

```python
db_backup_config: DatabaseDatabaseDatabaseDbBackupConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig">DatabaseDatabaseDatabaseDbBackupConfig</a>

db_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_backup_config DatabaseDatabase#db_backup_config}

---

##### `db_unique_name`<sup>Optional</sup> <a name="db_unique_name" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.dbUniqueName"></a>

```python
db_unique_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_unique_name DatabaseDatabase#db_unique_name}.

---

##### `db_workload`<sup>Optional</sup> <a name="db_workload" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.dbWorkload"></a>

```python
db_workload: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#db_workload DatabaseDatabase#db_workload}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#defined_tags DatabaseDatabase#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#freeform_tags DatabaseDatabase#freeform_tags}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_id DatabaseDatabase#kms_key_id}.

---

##### `kms_key_version_id`<sup>Optional</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.kmsKeyVersionId"></a>

```python
kms_key_version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#kms_key_version_id DatabaseDatabase#kms_key_version_id}.

---

##### `ncharacter_set`<sup>Optional</sup> <a name="ncharacter_set" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.ncharacterSet"></a>

```python
ncharacter_set: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#ncharacter_set DatabaseDatabase#ncharacter_set}.

---

##### `pdb_name`<sup>Optional</sup> <a name="pdb_name" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.pdbName"></a>

```python
pdb_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#pdb_name DatabaseDatabase#pdb_name}.

---

##### `pluggable_databases`<sup>Optional</sup> <a name="pluggable_databases" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.pluggableDatabases"></a>

```python
pluggable_databases: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#pluggable_databases DatabaseDatabase#pluggable_databases}.

---

##### `sid_prefix`<sup>Optional</sup> <a name="sid_prefix" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.sidPrefix"></a>

```python
sid_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#sid_prefix DatabaseDatabase#sid_prefix}.

---

##### `tde_wallet_password`<sup>Optional</sup> <a name="tde_wallet_password" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.tdeWalletPassword"></a>

```python
tde_wallet_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#tde_wallet_password DatabaseDatabase#tde_wallet_password}.

---

##### `vault_id`<sup>Optional</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#vault_id DatabaseDatabase#vault_id}.

---

### DatabaseDatabaseDatabaseDbBackupConfig <a name="DatabaseDatabaseDatabaseDbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database

databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig(
  auto_backup_enabled: typing.Union[bool, IResolvable] = None,
  auto_backup_window: str = None,
  auto_full_backup_day: str = None,
  auto_full_backup_window: str = None,
  backup_deletion_policy: str = None,
  backup_destination_details: typing.Union[IResolvable, typing.List[DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails]] = None,
  recovery_window_in_days: typing.Union[int, float] = None,
  run_immediate_full_backup: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.autoBackupEnabled">auto_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#auto_backup_enabled DatabaseDatabase#auto_backup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.autoBackupWindow">auto_backup_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#auto_backup_window DatabaseDatabase#auto_backup_window}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.autoFullBackupDay">auto_full_backup_day</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#auto_full_backup_day DatabaseDatabase#auto_full_backup_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.autoFullBackupWindow">auto_full_backup_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#auto_full_backup_window DatabaseDatabase#auto_full_backup_window}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.backupDeletionPolicy">backup_deletion_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#backup_deletion_policy DatabaseDatabase#backup_deletion_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.backupDestinationDetails">backup_destination_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails</a>]]</code> | backup_destination_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.recoveryWindowInDays">recovery_window_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#recovery_window_in_days DatabaseDatabase#recovery_window_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.runImmediateFullBackup">run_immediate_full_backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#run_immediate_full_backup DatabaseDatabase#run_immediate_full_backup}. |

---

##### `auto_backup_enabled`<sup>Optional</sup> <a name="auto_backup_enabled" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.autoBackupEnabled"></a>

```python
auto_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#auto_backup_enabled DatabaseDatabase#auto_backup_enabled}.

---

##### `auto_backup_window`<sup>Optional</sup> <a name="auto_backup_window" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.autoBackupWindow"></a>

```python
auto_backup_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#auto_backup_window DatabaseDatabase#auto_backup_window}.

---

##### `auto_full_backup_day`<sup>Optional</sup> <a name="auto_full_backup_day" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.autoFullBackupDay"></a>

```python
auto_full_backup_day: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#auto_full_backup_day DatabaseDatabase#auto_full_backup_day}.

---

##### `auto_full_backup_window`<sup>Optional</sup> <a name="auto_full_backup_window" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.autoFullBackupWindow"></a>

```python
auto_full_backup_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#auto_full_backup_window DatabaseDatabase#auto_full_backup_window}.

---

##### `backup_deletion_policy`<sup>Optional</sup> <a name="backup_deletion_policy" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.backupDeletionPolicy"></a>

```python
backup_deletion_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#backup_deletion_policy DatabaseDatabase#backup_deletion_policy}.

---

##### `backup_destination_details`<sup>Optional</sup> <a name="backup_destination_details" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.backupDestinationDetails"></a>

```python
backup_destination_details: typing.Union[IResolvable, typing.List[DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails</a>]]

backup_destination_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#backup_destination_details DatabaseDatabase#backup_destination_details}

---

##### `recovery_window_in_days`<sup>Optional</sup> <a name="recovery_window_in_days" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.recoveryWindowInDays"></a>

```python
recovery_window_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#recovery_window_in_days DatabaseDatabase#recovery_window_in_days}.

---

##### `run_immediate_full_backup`<sup>Optional</sup> <a name="run_immediate_full_backup" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig.property.runImmediateFullBackup"></a>

```python
run_immediate_full_backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#run_immediate_full_backup DatabaseDatabase#run_immediate_full_backup}.

---

### DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails <a name="DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database

databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails(
  dbrs_policy_id: str = None,
  id: str = None,
  type: str = None,
  vpc_user: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails.property.dbrsPolicyId">dbrs_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#dbrs_policy_id DatabaseDatabase#dbrs_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#id DatabaseDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#type DatabaseDatabase#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails.property.vpcUser">vpc_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#vpc_user DatabaseDatabase#vpc_user}. |

---

##### `dbrs_policy_id`<sup>Optional</sup> <a name="dbrs_policy_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails.property.dbrsPolicyId"></a>

```python
dbrs_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#dbrs_policy_id DatabaseDatabase#dbrs_policy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#id DatabaseDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#type DatabaseDatabase#type}.

---

##### `vpc_user`<sup>Optional</sup> <a name="vpc_user" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails.property.vpcUser"></a>

```python
vpc_user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#vpc_user DatabaseDatabase#vpc_user}.

---

### DatabaseDatabaseDatabaseManagementConfig <a name="DatabaseDatabaseDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database

databaseDatabase.DatabaseDatabaseDatabaseManagementConfig()
```


### DatabaseDatabaseDbBackupConfig <a name="DatabaseDatabaseDbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database

databaseDatabase.DatabaseDatabaseDbBackupConfig()
```


### DatabaseDatabaseDbBackupConfigBackupDestinationDetails <a name="DatabaseDatabaseDbBackupConfigBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database

databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetails()
```


### DatabaseDatabaseTimeouts <a name="DatabaseDatabaseTimeouts" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database

databaseDatabase.DatabaseDatabaseTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#create DatabaseDatabase#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#delete DatabaseDatabase#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#update DatabaseDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#create DatabaseDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#delete DatabaseDatabase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#update DatabaseDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseDatabaseConnectionStringsList <a name="DatabaseDatabaseConnectionStringsList" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database

databaseDatabase.DatabaseDatabaseConnectionStringsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseDatabaseConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseDatabaseConnectionStringsOutputReference <a name="DatabaseDatabaseConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database

databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.property.allConnectionStrings">all_connection_strings</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.property.cdbDefault">cdb_default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.property.cdbIpDefault">cdb_ip_default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStrings">DatabaseDatabaseConnectionStrings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_connection_strings`<sup>Required</sup> <a name="all_connection_strings" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.property.allConnectionStrings"></a>

```python
all_connection_strings: StringMap
```

- *Type:* cdktf.StringMap

---

##### `cdb_default`<sup>Required</sup> <a name="cdb_default" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.property.cdbDefault"></a>

```python
cdb_default: str
```

- *Type:* str

---

##### `cdb_ip_default`<sup>Required</sup> <a name="cdb_ip_default" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.property.cdbIpDefault"></a>

```python
cdb_ip_default: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStringsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDatabaseConnectionStrings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseConnectionStrings">DatabaseDatabaseConnectionStrings</a>

---


### DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList <a name="DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database

databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails</a>]]

---


### DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference <a name="DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database

databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetDbrsPolicyId">reset_dbrs_policy_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetVpcUser">reset_vpc_user</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dbrs_policy_id` <a name="reset_dbrs_policy_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetDbrsPolicyId"></a>

```python
def reset_dbrs_policy_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_type` <a name="reset_type" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_vpc_user` <a name="reset_vpc_user" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetVpcUser"></a>

```python
def reset_vpc_user() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyIdInput">dbrs_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.vpcUserInput">vpc_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId">dbrs_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser">vpc_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dbrs_policy_id_input`<sup>Optional</sup> <a name="dbrs_policy_id_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyIdInput"></a>

```python
dbrs_policy_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vpc_user_input`<sup>Optional</sup> <a name="vpc_user_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.vpcUserInput"></a>

```python
vpc_user_input: str
```

- *Type:* str

---

##### `dbrs_policy_id`<sup>Required</sup> <a name="dbrs_policy_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId"></a>

```python
dbrs_policy_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vpc_user`<sup>Required</sup> <a name="vpc_user" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser"></a>

```python
vpc_user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails</a>]

---


### DatabaseDatabaseDatabaseDbBackupConfigOutputReference <a name="DatabaseDatabaseDatabaseDbBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database

databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.putBackupDestinationDetails">put_backup_destination_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetAutoBackupEnabled">reset_auto_backup_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetAutoBackupWindow">reset_auto_backup_window</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetAutoFullBackupDay">reset_auto_full_backup_day</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetAutoFullBackupWindow">reset_auto_full_backup_window</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetBackupDeletionPolicy">reset_backup_deletion_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetBackupDestinationDetails">reset_backup_destination_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetRecoveryWindowInDays">reset_recovery_window_in_days</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetRunImmediateFullBackup">reset_run_immediate_full_backup</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_backup_destination_details` <a name="put_backup_destination_details" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.putBackupDestinationDetails"></a>

```python
def put_backup_destination_details(
  value: typing.Union[IResolvable, typing.List[DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.putBackupDestinationDetails.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails</a>]]

---

##### `reset_auto_backup_enabled` <a name="reset_auto_backup_enabled" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetAutoBackupEnabled"></a>

```python
def reset_auto_backup_enabled() -> None
```

##### `reset_auto_backup_window` <a name="reset_auto_backup_window" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetAutoBackupWindow"></a>

```python
def reset_auto_backup_window() -> None
```

##### `reset_auto_full_backup_day` <a name="reset_auto_full_backup_day" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetAutoFullBackupDay"></a>

```python
def reset_auto_full_backup_day() -> None
```

##### `reset_auto_full_backup_window` <a name="reset_auto_full_backup_window" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetAutoFullBackupWindow"></a>

```python
def reset_auto_full_backup_window() -> None
```

##### `reset_backup_deletion_policy` <a name="reset_backup_deletion_policy" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetBackupDeletionPolicy"></a>

```python
def reset_backup_deletion_policy() -> None
```

##### `reset_backup_destination_details` <a name="reset_backup_destination_details" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetBackupDestinationDetails"></a>

```python
def reset_backup_destination_details() -> None
```

##### `reset_recovery_window_in_days` <a name="reset_recovery_window_in_days" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetRecoveryWindowInDays"></a>

```python
def reset_recovery_window_in_days() -> None
```

##### `reset_run_immediate_full_backup` <a name="reset_run_immediate_full_backup" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.resetRunImmediateFullBackup"></a>

```python
def reset_run_immediate_full_backup() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.backupDestinationDetails">backup_destination_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList">DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoBackupEnabledInput">auto_backup_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoBackupWindowInput">auto_backup_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoFullBackupDayInput">auto_full_backup_day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindowInput">auto_full_backup_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicyInput">backup_deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.backupDestinationDetailsInput">backup_destination_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDaysInput">recovery_window_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackupInput">run_immediate_full_backup_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoBackupEnabled">auto_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoBackupWindow">auto_backup_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoFullBackupDay">auto_full_backup_day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindow">auto_full_backup_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicy">backup_deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDays">recovery_window_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackup">run_immediate_full_backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig">DatabaseDatabaseDatabaseDbBackupConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_destination_details`<sup>Required</sup> <a name="backup_destination_details" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.backupDestinationDetails"></a>

```python
backup_destination_details: DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList">DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetailsList</a>

---

##### `auto_backup_enabled_input`<sup>Optional</sup> <a name="auto_backup_enabled_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoBackupEnabledInput"></a>

```python
auto_backup_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_backup_window_input`<sup>Optional</sup> <a name="auto_backup_window_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoBackupWindowInput"></a>

```python
auto_backup_window_input: str
```

- *Type:* str

---

##### `auto_full_backup_day_input`<sup>Optional</sup> <a name="auto_full_backup_day_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoFullBackupDayInput"></a>

```python
auto_full_backup_day_input: str
```

- *Type:* str

---

##### `auto_full_backup_window_input`<sup>Optional</sup> <a name="auto_full_backup_window_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindowInput"></a>

```python
auto_full_backup_window_input: str
```

- *Type:* str

---

##### `backup_deletion_policy_input`<sup>Optional</sup> <a name="backup_deletion_policy_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicyInput"></a>

```python
backup_deletion_policy_input: str
```

- *Type:* str

---

##### `backup_destination_details_input`<sup>Optional</sup> <a name="backup_destination_details_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.backupDestinationDetailsInput"></a>

```python
backup_destination_details_input: typing.Union[IResolvable, typing.List[DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails</a>]]

---

##### `recovery_window_in_days_input`<sup>Optional</sup> <a name="recovery_window_in_days_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDaysInput"></a>

```python
recovery_window_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `run_immediate_full_backup_input`<sup>Optional</sup> <a name="run_immediate_full_backup_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackupInput"></a>

```python
run_immediate_full_backup_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_backup_enabled`<sup>Required</sup> <a name="auto_backup_enabled" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoBackupEnabled"></a>

```python
auto_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_backup_window`<sup>Required</sup> <a name="auto_backup_window" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoBackupWindow"></a>

```python
auto_backup_window: str
```

- *Type:* str

---

##### `auto_full_backup_day`<sup>Required</sup> <a name="auto_full_backup_day" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoFullBackupDay"></a>

```python
auto_full_backup_day: str
```

- *Type:* str

---

##### `auto_full_backup_window`<sup>Required</sup> <a name="auto_full_backup_window" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindow"></a>

```python
auto_full_backup_window: str
```

- *Type:* str

---

##### `backup_deletion_policy`<sup>Required</sup> <a name="backup_deletion_policy" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicy"></a>

```python
backup_deletion_policy: str
```

- *Type:* str

---

##### `recovery_window_in_days`<sup>Required</sup> <a name="recovery_window_in_days" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDays"></a>

```python
recovery_window_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `run_immediate_full_backup`<sup>Required</sup> <a name="run_immediate_full_backup" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackup"></a>

```python
run_immediate_full_backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDatabaseDatabaseDbBackupConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig">DatabaseDatabaseDatabaseDbBackupConfig</a>

---


### DatabaseDatabaseDatabaseManagementConfigList <a name="DatabaseDatabaseDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database

databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseDatabaseDatabaseManagementConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseDatabaseDatabaseManagementConfigOutputReference <a name="DatabaseDatabaseDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database

databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.property.managementStatus">management_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.property.managementType">management_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfig">DatabaseDatabaseDatabaseManagementConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `management_status`<sup>Required</sup> <a name="management_status" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.property.managementStatus"></a>

```python
management_status: str
```

- *Type:* str

---

##### `management_type`<sup>Required</sup> <a name="management_type" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.property.managementType"></a>

```python
management_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfigOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDatabaseDatabaseManagementConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseManagementConfig">DatabaseDatabaseDatabaseManagementConfig</a>

---


### DatabaseDatabaseDatabaseOutputReference <a name="DatabaseDatabaseDatabaseOutputReference" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database

databaseDatabase.DatabaseDatabaseDatabaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.putDbBackupConfig">put_db_backup_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetBackupId">reset_backup_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetBackupTdePassword">reset_backup_tde_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetCharacterSet">reset_character_set</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetDatabaseSoftwareImageId">reset_database_software_image_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetDbBackupConfig">reset_db_backup_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetDbUniqueName">reset_db_unique_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetDbWorkload">reset_db_workload</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetKmsKeyVersionId">reset_kms_key_version_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetNcharacterSet">reset_ncharacter_set</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetPdbName">reset_pdb_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetPluggableDatabases">reset_pluggable_databases</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetSidPrefix">reset_sid_prefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetTdeWalletPassword">reset_tde_wallet_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetVaultId">reset_vault_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_db_backup_config` <a name="put_db_backup_config" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.putDbBackupConfig"></a>

```python
def put_db_backup_config(
  auto_backup_enabled: typing.Union[bool, IResolvable] = None,
  auto_backup_window: str = None,
  auto_full_backup_day: str = None,
  auto_full_backup_window: str = None,
  backup_deletion_policy: str = None,
  backup_destination_details: typing.Union[IResolvable, typing.List[DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails]] = None,
  recovery_window_in_days: typing.Union[int, float] = None,
  run_immediate_full_backup: typing.Union[bool, IResolvable] = None
) -> None
```

###### `auto_backup_enabled`<sup>Optional</sup> <a name="auto_backup_enabled" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.putDbBackupConfig.parameter.autoBackupEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#auto_backup_enabled DatabaseDatabase#auto_backup_enabled}.

---

###### `auto_backup_window`<sup>Optional</sup> <a name="auto_backup_window" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.putDbBackupConfig.parameter.autoBackupWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#auto_backup_window DatabaseDatabase#auto_backup_window}.

---

###### `auto_full_backup_day`<sup>Optional</sup> <a name="auto_full_backup_day" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.putDbBackupConfig.parameter.autoFullBackupDay"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#auto_full_backup_day DatabaseDatabase#auto_full_backup_day}.

---

###### `auto_full_backup_window`<sup>Optional</sup> <a name="auto_full_backup_window" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.putDbBackupConfig.parameter.autoFullBackupWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#auto_full_backup_window DatabaseDatabase#auto_full_backup_window}.

---

###### `backup_deletion_policy`<sup>Optional</sup> <a name="backup_deletion_policy" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.putDbBackupConfig.parameter.backupDeletionPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#backup_deletion_policy DatabaseDatabase#backup_deletion_policy}.

---

###### `backup_destination_details`<sup>Optional</sup> <a name="backup_destination_details" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.putDbBackupConfig.parameter.backupDestinationDetails"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails</a>]]

backup_destination_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#backup_destination_details DatabaseDatabase#backup_destination_details}

---

###### `recovery_window_in_days`<sup>Optional</sup> <a name="recovery_window_in_days" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.putDbBackupConfig.parameter.recoveryWindowInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#recovery_window_in_days DatabaseDatabase#recovery_window_in_days}.

---

###### `run_immediate_full_backup`<sup>Optional</sup> <a name="run_immediate_full_backup" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.putDbBackupConfig.parameter.runImmediateFullBackup"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database#run_immediate_full_backup DatabaseDatabase#run_immediate_full_backup}.

---

##### `reset_backup_id` <a name="reset_backup_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetBackupId"></a>

```python
def reset_backup_id() -> None
```

##### `reset_backup_tde_password` <a name="reset_backup_tde_password" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetBackupTdePassword"></a>

```python
def reset_backup_tde_password() -> None
```

##### `reset_character_set` <a name="reset_character_set" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetCharacterSet"></a>

```python
def reset_character_set() -> None
```

##### `reset_database_software_image_id` <a name="reset_database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetDatabaseSoftwareImageId"></a>

```python
def reset_database_software_image_id() -> None
```

##### `reset_db_backup_config` <a name="reset_db_backup_config" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetDbBackupConfig"></a>

```python
def reset_db_backup_config() -> None
```

##### `reset_db_unique_name` <a name="reset_db_unique_name" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetDbUniqueName"></a>

```python
def reset_db_unique_name() -> None
```

##### `reset_db_workload` <a name="reset_db_workload" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetDbWorkload"></a>

```python
def reset_db_workload() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_kms_key_version_id` <a name="reset_kms_key_version_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetKmsKeyVersionId"></a>

```python
def reset_kms_key_version_id() -> None
```

##### `reset_ncharacter_set` <a name="reset_ncharacter_set" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetNcharacterSet"></a>

```python
def reset_ncharacter_set() -> None
```

##### `reset_pdb_name` <a name="reset_pdb_name" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetPdbName"></a>

```python
def reset_pdb_name() -> None
```

##### `reset_pluggable_databases` <a name="reset_pluggable_databases" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetPluggableDatabases"></a>

```python
def reset_pluggable_databases() -> None
```

##### `reset_sid_prefix` <a name="reset_sid_prefix" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetSidPrefix"></a>

```python
def reset_sid_prefix() -> None
```

##### `reset_tde_wallet_password` <a name="reset_tde_wallet_password" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetTdeWalletPassword"></a>

```python
def reset_tde_wallet_password() -> None
```

##### `reset_vault_id` <a name="reset_vault_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.resetVaultId"></a>

```python
def reset_vault_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbBackupConfig">db_backup_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference">DatabaseDatabaseDatabaseDbBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.adminPasswordInput">admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.backupIdInput">backup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.backupTdePasswordInput">backup_tde_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.characterSetInput">character_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.databaseSoftwareImageIdInput">database_software_image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbBackupConfigInput">db_backup_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig">DatabaseDatabaseDatabaseDbBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbNameInput">db_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbUniqueNameInput">db_unique_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbWorkloadInput">db_workload_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.kmsKeyVersionIdInput">kms_key_version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.ncharacterSetInput">ncharacter_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.pdbNameInput">pdb_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.pluggableDatabasesInput">pluggable_databases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.sidPrefixInput">sid_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.tdeWalletPasswordInput">tde_wallet_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.vaultIdInput">vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.adminPassword">admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.backupId">backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.backupTdePassword">backup_tde_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.characterSet">character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.databaseSoftwareImageId">database_software_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbUniqueName">db_unique_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbWorkload">db_workload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.ncharacterSet">ncharacter_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.pdbName">pdb_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.pluggableDatabases">pluggable_databases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.sidPrefix">sid_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.tdeWalletPassword">tde_wallet_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase">DatabaseDatabaseDatabase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_backup_config`<sup>Required</sup> <a name="db_backup_config" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbBackupConfig"></a>

```python
db_backup_config: DatabaseDatabaseDatabaseDbBackupConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfigOutputReference">DatabaseDatabaseDatabaseDbBackupConfigOutputReference</a>

---

##### `admin_password_input`<sup>Optional</sup> <a name="admin_password_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.adminPasswordInput"></a>

```python
admin_password_input: str
```

- *Type:* str

---

##### `backup_id_input`<sup>Optional</sup> <a name="backup_id_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.backupIdInput"></a>

```python
backup_id_input: str
```

- *Type:* str

---

##### `backup_tde_password_input`<sup>Optional</sup> <a name="backup_tde_password_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.backupTdePasswordInput"></a>

```python
backup_tde_password_input: str
```

- *Type:* str

---

##### `character_set_input`<sup>Optional</sup> <a name="character_set_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.characterSetInput"></a>

```python
character_set_input: str
```

- *Type:* str

---

##### `database_software_image_id_input`<sup>Optional</sup> <a name="database_software_image_id_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.databaseSoftwareImageIdInput"></a>

```python
database_software_image_id_input: str
```

- *Type:* str

---

##### `db_backup_config_input`<sup>Optional</sup> <a name="db_backup_config_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbBackupConfigInput"></a>

```python
db_backup_config_input: DatabaseDatabaseDatabaseDbBackupConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseDbBackupConfig">DatabaseDatabaseDatabaseDbBackupConfig</a>

---

##### `db_name_input`<sup>Optional</sup> <a name="db_name_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbNameInput"></a>

```python
db_name_input: str
```

- *Type:* str

---

##### `db_unique_name_input`<sup>Optional</sup> <a name="db_unique_name_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbUniqueNameInput"></a>

```python
db_unique_name_input: str
```

- *Type:* str

---

##### `db_workload_input`<sup>Optional</sup> <a name="db_workload_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbWorkloadInput"></a>

```python
db_workload_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `kms_key_version_id_input`<sup>Optional</sup> <a name="kms_key_version_id_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.kmsKeyVersionIdInput"></a>

```python
kms_key_version_id_input: str
```

- *Type:* str

---

##### `ncharacter_set_input`<sup>Optional</sup> <a name="ncharacter_set_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.ncharacterSetInput"></a>

```python
ncharacter_set_input: str
```

- *Type:* str

---

##### `pdb_name_input`<sup>Optional</sup> <a name="pdb_name_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.pdbNameInput"></a>

```python
pdb_name_input: str
```

- *Type:* str

---

##### `pluggable_databases_input`<sup>Optional</sup> <a name="pluggable_databases_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.pluggableDatabasesInput"></a>

```python
pluggable_databases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sid_prefix_input`<sup>Optional</sup> <a name="sid_prefix_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.sidPrefixInput"></a>

```python
sid_prefix_input: str
```

- *Type:* str

---

##### `tde_wallet_password_input`<sup>Optional</sup> <a name="tde_wallet_password_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.tdeWalletPasswordInput"></a>

```python
tde_wallet_password_input: str
```

- *Type:* str

---

##### `vault_id_input`<sup>Optional</sup> <a name="vault_id_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.vaultIdInput"></a>

```python
vault_id_input: str
```

- *Type:* str

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

---

##### `backup_id`<sup>Required</sup> <a name="backup_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

---

##### `backup_tde_password`<sup>Required</sup> <a name="backup_tde_password" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.backupTdePassword"></a>

```python
backup_tde_password: str
```

- *Type:* str

---

##### `character_set`<sup>Required</sup> <a name="character_set" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

---

##### `database_software_image_id`<sup>Required</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.databaseSoftwareImageId"></a>

```python
database_software_image_id: str
```

- *Type:* str

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `db_unique_name`<sup>Required</sup> <a name="db_unique_name" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbUniqueName"></a>

```python
db_unique_name: str
```

- *Type:* str

---

##### `db_workload`<sup>Required</sup> <a name="db_workload" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.dbWorkload"></a>

```python
db_workload: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `kms_key_version_id`<sup>Required</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.kmsKeyVersionId"></a>

```python
kms_key_version_id: str
```

- *Type:* str

---

##### `ncharacter_set`<sup>Required</sup> <a name="ncharacter_set" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.ncharacterSet"></a>

```python
ncharacter_set: str
```

- *Type:* str

---

##### `pdb_name`<sup>Required</sup> <a name="pdb_name" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.pdbName"></a>

```python
pdb_name: str
```

- *Type:* str

---

##### `pluggable_databases`<sup>Required</sup> <a name="pluggable_databases" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.pluggableDatabases"></a>

```python
pluggable_databases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sid_prefix`<sup>Required</sup> <a name="sid_prefix" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.sidPrefix"></a>

```python
sid_prefix: str
```

- *Type:* str

---

##### `tde_wallet_password`<sup>Required</sup> <a name="tde_wallet_password" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.tdeWalletPassword"></a>

```python
tde_wallet_password: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabaseOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDatabaseDatabase
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDatabase">DatabaseDatabaseDatabase</a>

---


### DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList <a name="DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database

databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference <a name="DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database

databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId">dbrs_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser">vpc_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDatabaseDbBackupConfigBackupDestinationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dbrs_policy_id`<sup>Required</sup> <a name="dbrs_policy_id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId"></a>

```python
dbrs_policy_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vpc_user`<sup>Required</sup> <a name="vpc_user" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser"></a>

```python
vpc_user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDatabaseDbBackupConfigBackupDestinationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDatabaseDbBackupConfigBackupDestinationDetails</a>

---


### DatabaseDatabaseDbBackupConfigList <a name="DatabaseDatabaseDbBackupConfigList" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database

databaseDatabase.DatabaseDatabaseDbBackupConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseDatabaseDbBackupConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseDatabaseDbBackupConfigOutputReference <a name="DatabaseDatabaseDbBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database

databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.autoBackupEnabled">auto_backup_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.autoBackupWindow">auto_backup_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.autoFullBackupDay">auto_full_backup_day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindow">auto_full_backup_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicy">backup_deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.backupDestinationDetails">backup_destination_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList">DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDays">recovery_window_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackup">run_immediate_full_backup</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfig">DatabaseDatabaseDbBackupConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_backup_enabled`<sup>Required</sup> <a name="auto_backup_enabled" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.autoBackupEnabled"></a>

```python
auto_backup_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `auto_backup_window`<sup>Required</sup> <a name="auto_backup_window" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.autoBackupWindow"></a>

```python
auto_backup_window: str
```

- *Type:* str

---

##### `auto_full_backup_day`<sup>Required</sup> <a name="auto_full_backup_day" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.autoFullBackupDay"></a>

```python
auto_full_backup_day: str
```

- *Type:* str

---

##### `auto_full_backup_window`<sup>Required</sup> <a name="auto_full_backup_window" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindow"></a>

```python
auto_full_backup_window: str
```

- *Type:* str

---

##### `backup_deletion_policy`<sup>Required</sup> <a name="backup_deletion_policy" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicy"></a>

```python
backup_deletion_policy: str
```

- *Type:* str

---

##### `backup_destination_details`<sup>Required</sup> <a name="backup_destination_details" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.backupDestinationDetails"></a>

```python
backup_destination_details: DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList">DatabaseDatabaseDbBackupConfigBackupDestinationDetailsList</a>

---

##### `recovery_window_in_days`<sup>Required</sup> <a name="recovery_window_in_days" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDays"></a>

```python
recovery_window_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `run_immediate_full_backup`<sup>Required</sup> <a name="run_immediate_full_backup" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackup"></a>

```python
run_immediate_full_backup: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfigOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDatabaseDbBackupConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseDbBackupConfig">DatabaseDatabaseDbBackupConfig</a>

---


### DatabaseDatabaseTimeoutsOutputReference <a name="DatabaseDatabaseTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database

databaseDatabase.DatabaseDatabaseTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeouts">DatabaseDatabaseTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseDatabaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDatabase.DatabaseDatabaseTimeouts">DatabaseDatabaseTimeouts</a>]

---



