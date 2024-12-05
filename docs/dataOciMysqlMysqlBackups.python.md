# `dataOciMysqlMysqlBackups` Submodule <a name="`dataOciMysqlMysqlBackups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMysqlMysqlBackups <a name="DataOciMysqlMysqlBackups" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups oci_mysql_mysql_backups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups(
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
  backup_id: str = None,
  creation_type: str = None,
  db_system_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciMysqlMysqlBackupsFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#compartment_id DataOciMysqlMysqlBackups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.backupId">backup_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#backup_id DataOciMysqlMysqlBackups#backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.creationType">creation_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#creation_type DataOciMysqlMysqlBackups#creation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.dbSystemId">db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#db_system_id DataOciMysqlMysqlBackups#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#display_name DataOciMysqlMysqlBackups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#id DataOciMysqlMysqlBackups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#state DataOciMysqlMysqlBackups#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#compartment_id DataOciMysqlMysqlBackups#compartment_id}.

---

##### `backup_id`<sup>Optional</sup> <a name="backup_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.backupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#backup_id DataOciMysqlMysqlBackups#backup_id}.

---

##### `creation_type`<sup>Optional</sup> <a name="creation_type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.creationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#creation_type DataOciMysqlMysqlBackups#creation_type}.

---

##### `db_system_id`<sup>Optional</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.dbSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#db_system_id DataOciMysqlMysqlBackups#db_system_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#display_name DataOciMysqlMysqlBackups#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#filter DataOciMysqlMysqlBackups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#id DataOciMysqlMysqlBackups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#state DataOciMysqlMysqlBackups#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetBackupId">reset_backup_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetCreationType">reset_creation_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetDbSystemId">reset_db_system_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciMysqlMysqlBackupsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>]]

---

##### `reset_backup_id` <a name="reset_backup_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetBackupId"></a>

```python
def reset_backup_id() -> None
```

##### `reset_creation_type` <a name="reset_creation_type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetCreationType"></a>

```python
def reset_creation_type() -> None
```

##### `reset_db_system_id` <a name="reset_db_system_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetDbSystemId"></a>

```python
def reset_db_system_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciMysqlMysqlBackups resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciMysqlMysqlBackups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciMysqlMysqlBackups to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciMysqlMysqlBackups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMysqlMysqlBackups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.backups">backups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList">DataOciMysqlMysqlBackupsBackupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList">DataOciMysqlMysqlBackupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.backupIdInput">backup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.creationTypeInput">creation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.dbSystemIdInput">db_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.backupId">backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.creationType">creation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `backups`<sup>Required</sup> <a name="backups" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.backups"></a>

```python
backups: DataOciMysqlMysqlBackupsBackupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList">DataOciMysqlMysqlBackupsBackupsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.filter"></a>

```python
filter: DataOciMysqlMysqlBackupsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList">DataOciMysqlMysqlBackupsFilterList</a>

---

##### `backup_id_input`<sup>Optional</sup> <a name="backup_id_input" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.backupIdInput"></a>

```python
backup_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `creation_type_input`<sup>Optional</sup> <a name="creation_type_input" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.creationTypeInput"></a>

```python
creation_type_input: str
```

- *Type:* str

---

##### `db_system_id_input`<sup>Optional</sup> <a name="db_system_id_input" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.dbSystemIdInput"></a>

```python
db_system_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciMysqlMysqlBackupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `backup_id`<sup>Required</sup> <a name="backup_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `creation_type`<sup>Required</sup> <a name="creation_type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.creationType"></a>

```python
creation_type: str
```

- *Type:* str

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMysqlMysqlBackupsBackups <a name="DataOciMysqlMysqlBackupsBackups" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackups()
```


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot()
```


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy()
```


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy()
```


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage()
```


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy()
```


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints()
```


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance()
```


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections()
```


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary()
```


### DataOciMysqlMysqlBackupsBackupsSourceDetails <a name="DataOciMysqlMysqlBackupsBackupsSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetails()
```


### DataOciMysqlMysqlBackupsConfig <a name="DataOciMysqlMysqlBackupsConfig" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  backup_id: str = None,
  creation_type: str = None,
  db_system_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciMysqlMysqlBackupsFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#compartment_id DataOciMysqlMysqlBackups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.backupId">backup_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#backup_id DataOciMysqlMysqlBackups#backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.creationType">creation_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#creation_type DataOciMysqlMysqlBackups#creation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.dbSystemId">db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#db_system_id DataOciMysqlMysqlBackups#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#display_name DataOciMysqlMysqlBackups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#id DataOciMysqlMysqlBackups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#state DataOciMysqlMysqlBackups#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#compartment_id DataOciMysqlMysqlBackups#compartment_id}.

---

##### `backup_id`<sup>Optional</sup> <a name="backup_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#backup_id DataOciMysqlMysqlBackups#backup_id}.

---

##### `creation_type`<sup>Optional</sup> <a name="creation_type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.creationType"></a>

```python
creation_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#creation_type DataOciMysqlMysqlBackups#creation_type}.

---

##### `db_system_id`<sup>Optional</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#db_system_id DataOciMysqlMysqlBackups#db_system_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#display_name DataOciMysqlMysqlBackups#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciMysqlMysqlBackupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#filter DataOciMysqlMysqlBackups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#id DataOciMysqlMysqlBackups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#state DataOciMysqlMysqlBackups#state}.

---

### DataOciMysqlMysqlBackupsFilter <a name="DataOciMysqlMysqlBackupsFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#name DataOciMysqlMysqlBackups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#values DataOciMysqlMysqlBackups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#regex DataOciMysqlMysqlBackups#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#name DataOciMysqlMysqlBackups#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#values DataOciMysqlMysqlBackups#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#regex DataOciMysqlMysqlBackups#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.pitrPolicy">pitr_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.windowStartTime">window_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `pitr_policy`<sup>Required</sup> <a name="pitr_policy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.pitrPolicy"></a>

```python
pitr_policy: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList</a>

---

##### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `window_start_time`<sup>Required</sup> <a name="window_start_time" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.windowStartTime"></a>

```python
window_start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy</a>

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy</a>

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.allocatedStorageSizeInGbs">allocated_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.dataStorageSizeInGb">data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.dataStorageSizeLimitInGbs">data_storage_size_limit_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.isAutoExpandStorageEnabled">is_auto_expand_storage_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.maxStorageSizeInGbs">max_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocated_storage_size_in_gbs`<sup>Required</sup> <a name="allocated_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.allocatedStorageSizeInGbs"></a>

```python
allocated_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_gb`<sup>Required</sup> <a name="data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.dataStorageSizeInGb"></a>

```python
data_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_limit_in_gbs`<sup>Required</sup> <a name="data_storage_size_limit_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.dataStorageSizeLimitInGbs"></a>

```python
data_storage_size_limit_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_auto_expand_storage_enabled`<sup>Required</sup> <a name="is_auto_expand_storage_enabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.isAutoExpandStorageEnabled"></a>

```python
is_auto_expand_storage_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `max_storage_size_in_gbs`<sup>Required</sup> <a name="max_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.maxStorageSizeInGbs"></a>

```python
max_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage</a>

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.automaticBackupRetention">automatic_backup_retention</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.finalBackup">final_backup</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.isDeleteProtected">is_delete_protected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `automatic_backup_retention`<sup>Required</sup> <a name="automatic_backup_retention" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.automaticBackupRetention"></a>

```python
automatic_backup_retention: str
```

- *Type:* str

---

##### `final_backup`<sup>Required</sup> <a name="final_backup" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.finalBackup"></a>

```python
final_backup: str
```

- *Type:* str

---

##### `is_delete_protected`<sup>Required</sup> <a name="is_delete_protected" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.isDeleteProtected"></a>

```python
is_delete_protected: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy</a>

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.modes">modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.portX">port_x</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.statusDetails">status_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `modes`<sup>Required</sup> <a name="modes" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.modes"></a>

```python
modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_x`<sup>Required</sup> <a name="port_x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.portX"></a>

```python
port_x: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_details`<sup>Required</sup> <a name="status_details" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.statusDetails"></a>

```python
status_details: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints</a>

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.property.windowStartTime">window_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `window_start_time`<sup>Required</sup> <a name="window_start_time" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.property.windowStartTime"></a>

```python
window_start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance</a>

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.adminUsername">admin_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.backupPolicy">backup_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.configurationId">configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.crashRecovery">crash_recovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.databaseManagement">database_management</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.dataStorage">data_storage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.dataStorageSizeInGb">data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.deletionPolicy">deletion_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.faultDomain">fault_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.hostnameLabel">hostname_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.isHighlyAvailable">is_highly_available</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.maintenance">maintenance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.mysqlVersion">mysql_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.portX">port_x</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.secureConnections">secure_connections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.shapeName">shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `backup_policy`<sup>Required</sup> <a name="backup_policy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.backupPolicy"></a>

```python
backup_policy: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `configuration_id`<sup>Required</sup> <a name="configuration_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.configurationId"></a>

```python
configuration_id: str
```

- *Type:* str

---

##### `crash_recovery`<sup>Required</sup> <a name="crash_recovery" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.crashRecovery"></a>

```python
crash_recovery: str
```

- *Type:* str

---

##### `database_management`<sup>Required</sup> <a name="database_management" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.databaseManagement"></a>

```python
database_management: str
```

- *Type:* str

---

##### `data_storage`<sup>Required</sup> <a name="data_storage" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.dataStorage"></a>

```python
data_storage: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList</a>

---

##### `data_storage_size_in_gb`<sup>Required</sup> <a name="data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.dataStorageSizeInGb"></a>

```python
data_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.deletionPolicy"></a>

```python
deletion_policy: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.endpoints"></a>

```python
endpoints: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList</a>

---

##### `fault_domain`<sup>Required</sup> <a name="fault_domain" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.faultDomain"></a>

```python
fault_domain: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `hostname_label`<sup>Required</sup> <a name="hostname_label" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.hostnameLabel"></a>

```python
hostname_label: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `is_highly_available`<sup>Required</sup> <a name="is_highly_available" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.isHighlyAvailable"></a>

```python
is_highly_available: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `maintenance`<sup>Required</sup> <a name="maintenance" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.maintenance"></a>

```python
maintenance: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList</a>

---

##### `mysql_version`<sup>Required</sup> <a name="mysql_version" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.mysqlVersion"></a>

```python
mysql_version: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_x`<sup>Required</sup> <a name="port_x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.portX"></a>

```python
port_x: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `secure_connections`<sup>Required</sup> <a name="secure_connections" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.secureConnections"></a>

```python
secure_connections: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList</a>

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot</a>

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.certificateGenerationType">certificate_generation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_generation_type`<sup>Required</sup> <a name="certificate_generation_type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.certificateGenerationType"></a>

```python
certificate_generation_type: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections</a>

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary</a>

---


### DataOciMysqlMysqlBackupsBackupsList <a name="DataOciMysqlMysqlBackupsBackupsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMysqlMysqlBackupsBackupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMysqlMysqlBackupsBackupsOutputReference <a name="DataOciMysqlMysqlBackupsBackupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.backupSizeInGbs">backup_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.backupType">backup_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.creationType">creation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.dataStorageSizeInGb">data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.dbSystemSnapshot">db_system_snapshot</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.dbSystemSnapshotSummary">db_system_snapshot_summary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.immediateSourceBackupId">immediate_source_backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.mysqlVersion">mysql_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.originalSourceBackupId">original_source_backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.shapeName">shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.sourceDetails">source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList">DataOciMysqlMysqlBackupsBackupsSourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.timeCopyCreated">time_copy_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackups">DataOciMysqlMysqlBackupsBackups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_size_in_gbs`<sup>Required</sup> <a name="backup_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.backupSizeInGbs"></a>

```python
backup_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_type`<sup>Required</sup> <a name="backup_type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.backupType"></a>

```python
backup_type: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `creation_type`<sup>Required</sup> <a name="creation_type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.creationType"></a>

```python
creation_type: str
```

- *Type:* str

---

##### `data_storage_size_in_gb`<sup>Required</sup> <a name="data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.dataStorageSizeInGb"></a>

```python
data_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `db_system_snapshot`<sup>Required</sup> <a name="db_system_snapshot" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.dbSystemSnapshot"></a>

```python
db_system_snapshot: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList</a>

---

##### `db_system_snapshot_summary`<sup>Required</sup> <a name="db_system_snapshot_summary" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.dbSystemSnapshotSummary"></a>

```python
db_system_snapshot_summary: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `immediate_source_backup_id`<sup>Required</sup> <a name="immediate_source_backup_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.immediateSourceBackupId"></a>

```python
immediate_source_backup_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `mysql_version`<sup>Required</sup> <a name="mysql_version" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.mysqlVersion"></a>

```python
mysql_version: str
```

- *Type:* str

---

##### `original_source_backup_id`<sup>Required</sup> <a name="original_source_backup_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.originalSourceBackupId"></a>

```python
original_source_backup_id: str
```

- *Type:* str

---

##### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

---

##### `source_details`<sup>Required</sup> <a name="source_details" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.sourceDetails"></a>

```python
source_details: DataOciMysqlMysqlBackupsBackupsSourceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList">DataOciMysqlMysqlBackupsBackupsSourceDetailsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_copy_created`<sup>Required</sup> <a name="time_copy_created" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.timeCopyCreated"></a>

```python
time_copy_created: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMysqlMysqlBackupsBackups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackups">DataOciMysqlMysqlBackupsBackups</a>

---


### DataOciMysqlMysqlBackupsBackupsSourceDetailsList <a name="DataOciMysqlMysqlBackupsBackupsSourceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference <a name="DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.backupId">backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetails">DataOciMysqlMysqlBackupsBackupsSourceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_id`<sup>Required</sup> <a name="backup_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMysqlMysqlBackupsBackupsSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetails">DataOciMysqlMysqlBackupsBackupsSourceDetails</a>

---


### DataOciMysqlMysqlBackupsFilterList <a name="DataOciMysqlMysqlBackupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMysqlMysqlBackupsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciMysqlMysqlBackupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>]]

---


### DataOciMysqlMysqlBackupsFilterOutputReference <a name="DataOciMysqlMysqlBackupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_backups

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciMysqlMysqlBackupsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>]

---



