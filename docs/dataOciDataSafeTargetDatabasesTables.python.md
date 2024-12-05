# `dataOciDataSafeTargetDatabasesTables` Submodule <a name="`dataOciDataSafeTargetDatabasesTables` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeTargetDatabasesTables <a name="DataOciDataSafeTargetDatabasesTables" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables oci_data_safe_target_databases_tables}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases_tables

dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  target_database_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetDatabasesTablesFilter]] = None,
  id: str = None,
  schema_name: typing.List[str] = None,
  schema_name_contains: str = None,
  table_name: typing.List[str] = None,
  table_name_contains: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.targetDatabaseId">target_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#target_database_id DataOciDataSafeTargetDatabasesTables#target_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilter">DataOciDataSafeTargetDatabasesTablesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#id DataOciDataSafeTargetDatabasesTables#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.schemaName">schema_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#schema_name DataOciDataSafeTargetDatabasesTables#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.schemaNameContains">schema_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#schema_name_contains DataOciDataSafeTargetDatabasesTables#schema_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.tableName">table_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#table_name DataOciDataSafeTargetDatabasesTables#table_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.tableNameContains">table_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#table_name_contains DataOciDataSafeTargetDatabasesTables#table_name_contains}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `target_database_id`<sup>Required</sup> <a name="target_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.targetDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#target_database_id DataOciDataSafeTargetDatabasesTables#target_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilter">DataOciDataSafeTargetDatabasesTablesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#filter DataOciDataSafeTargetDatabasesTables#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#id DataOciDataSafeTargetDatabasesTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.schemaName"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#schema_name DataOciDataSafeTargetDatabasesTables#schema_name}.

---

##### `schema_name_contains`<sup>Optional</sup> <a name="schema_name_contains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.schemaNameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#schema_name_contains DataOciDataSafeTargetDatabasesTables#schema_name_contains}.

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.tableName"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#table_name DataOciDataSafeTargetDatabasesTables#table_name}.

---

##### `table_name_contains`<sup>Optional</sup> <a name="table_name_contains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.Initializer.parameter.tableNameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#table_name_contains DataOciDataSafeTargetDatabasesTables#table_name_contains}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.resetSchemaName">reset_schema_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.resetSchemaNameContains">reset_schema_name_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.resetTableName">reset_table_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.resetTableNameContains">reset_table_name_contains</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetDatabasesTablesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilter">DataOciDataSafeTargetDatabasesTablesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```

##### `reset_schema_name_contains` <a name="reset_schema_name_contains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.resetSchemaNameContains"></a>

```python
def reset_schema_name_contains() -> None
```

##### `reset_table_name` <a name="reset_table_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.resetTableName"></a>

```python
def reset_table_name() -> None
```

##### `reset_table_name_contains` <a name="reset_table_name_contains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.resetTableNameContains"></a>

```python
def reset_table_name_contains() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeTargetDatabasesTables resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases_tables

dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases_tables

dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases_tables

dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases_tables

dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeTargetDatabasesTables resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeTargetDatabasesTables to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeTargetDatabasesTables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeTargetDatabasesTables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList">DataOciDataSafeTargetDatabasesTablesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.tables">tables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesList">DataOciDataSafeTargetDatabasesTablesTablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilter">DataOciDataSafeTargetDatabasesTablesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.schemaNameContainsInput">schema_name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.schemaNameInput">schema_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.tableNameContainsInput">table_name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.tableNameInput">table_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.targetDatabaseIdInput">target_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.schemaName">schema_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.schemaNameContains">schema_name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.tableName">table_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.tableNameContains">table_name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.targetDatabaseId">target_database_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.filter"></a>

```python
filter: DataOciDataSafeTargetDatabasesTablesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList">DataOciDataSafeTargetDatabasesTablesFilterList</a>

---

##### `tables`<sup>Required</sup> <a name="tables" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.tables"></a>

```python
tables: DataOciDataSafeTargetDatabasesTablesTablesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesList">DataOciDataSafeTargetDatabasesTablesTablesList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetDatabasesTablesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilter">DataOciDataSafeTargetDatabasesTablesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `schema_name_contains_input`<sup>Optional</sup> <a name="schema_name_contains_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.schemaNameContainsInput"></a>

```python
schema_name_contains_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.schemaNameInput"></a>

```python
schema_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `table_name_contains_input`<sup>Optional</sup> <a name="table_name_contains_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.tableNameContainsInput"></a>

```python
table_name_contains_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.tableNameInput"></a>

```python
table_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_database_id_input`<sup>Optional</sup> <a name="target_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.targetDatabaseIdInput"></a>

```python
target_database_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.schemaName"></a>

```python
schema_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schema_name_contains`<sup>Required</sup> <a name="schema_name_contains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.schemaNameContains"></a>

```python
schema_name_contains: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.tableName"></a>

```python
table_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `table_name_contains`<sup>Required</sup> <a name="table_name_contains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.tableNameContains"></a>

```python
table_name_contains: str
```

- *Type:* str

---

##### `target_database_id`<sup>Required</sup> <a name="target_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.targetDatabaseId"></a>

```python
target_database_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTables.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeTargetDatabasesTablesConfig <a name="DataOciDataSafeTargetDatabasesTablesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases_tables

dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  target_database_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetDatabasesTablesFilter]] = None,
  id: str = None,
  schema_name: typing.List[str] = None,
  schema_name_contains: str = None,
  table_name: typing.List[str] = None,
  table_name_contains: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.property.targetDatabaseId">target_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#target_database_id DataOciDataSafeTargetDatabasesTables#target_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilter">DataOciDataSafeTargetDatabasesTablesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#id DataOciDataSafeTargetDatabasesTables#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.property.schemaName">schema_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#schema_name DataOciDataSafeTargetDatabasesTables#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.property.schemaNameContains">schema_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#schema_name_contains DataOciDataSafeTargetDatabasesTables#schema_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.property.tableName">table_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#table_name DataOciDataSafeTargetDatabasesTables#table_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.property.tableNameContains">table_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#table_name_contains DataOciDataSafeTargetDatabasesTables#table_name_contains}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `target_database_id`<sup>Required</sup> <a name="target_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.property.targetDatabaseId"></a>

```python
target_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#target_database_id DataOciDataSafeTargetDatabasesTables#target_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetDatabasesTablesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilter">DataOciDataSafeTargetDatabasesTablesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#filter DataOciDataSafeTargetDatabasesTables#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#id DataOciDataSafeTargetDatabasesTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.property.schemaName"></a>

```python
schema_name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#schema_name DataOciDataSafeTargetDatabasesTables#schema_name}.

---

##### `schema_name_contains`<sup>Optional</sup> <a name="schema_name_contains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.property.schemaNameContains"></a>

```python
schema_name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#schema_name_contains DataOciDataSafeTargetDatabasesTables#schema_name_contains}.

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.property.tableName"></a>

```python
table_name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#table_name DataOciDataSafeTargetDatabasesTables#table_name}.

---

##### `table_name_contains`<sup>Optional</sup> <a name="table_name_contains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesConfig.property.tableNameContains"></a>

```python
table_name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#table_name_contains DataOciDataSafeTargetDatabasesTables#table_name_contains}.

---

### DataOciDataSafeTargetDatabasesTablesFilter <a name="DataOciDataSafeTargetDatabasesTablesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases_tables

dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#name DataOciDataSafeTargetDatabasesTables#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#values DataOciDataSafeTargetDatabasesTables#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#regex DataOciDataSafeTargetDatabasesTables#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#name DataOciDataSafeTargetDatabasesTables#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#values DataOciDataSafeTargetDatabasesTables#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_tables#regex DataOciDataSafeTargetDatabasesTables#regex}.

---

### DataOciDataSafeTargetDatabasesTablesTables <a name="DataOciDataSafeTargetDatabasesTablesTables" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTables.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases_tables

dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTables()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeTargetDatabasesTablesFilterList <a name="DataOciDataSafeTargetDatabasesTablesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases_tables

dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasesTablesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilter">DataOciDataSafeTargetDatabasesTablesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetDatabasesTablesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilter">DataOciDataSafeTargetDatabasesTablesFilter</a>]]

---


### DataOciDataSafeTargetDatabasesTablesFilterOutputReference <a name="DataOciDataSafeTargetDatabasesTablesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases_tables

dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilter">DataOciDataSafeTargetDatabasesTablesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeTargetDatabasesTablesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesFilter">DataOciDataSafeTargetDatabasesTablesFilter</a>]

---


### DataOciDataSafeTargetDatabasesTablesTablesList <a name="DataOciDataSafeTargetDatabasesTablesTablesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases_tables

dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasesTablesTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabasesTablesTablesOutputReference <a name="DataOciDataSafeTargetDatabasesTablesTablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases_tables

dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTables">DataOciDataSafeTargetDatabasesTablesTables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTablesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabasesTablesTables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesTables.DataOciDataSafeTargetDatabasesTablesTables">DataOciDataSafeTargetDatabasesTablesTables</a>

---



