# `dataOciDataSafeTargetDatabasesColumns` Submodule <a name="`dataOciDataSafeTargetDatabasesColumns` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeTargetDatabasesColumns <a name="DataOciDataSafeTargetDatabasesColumns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns oci_data_safe_target_databases_columns}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases_columns

dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns(
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
  column_name: typing.List[str] = None,
  column_name_contains: str = None,
  datatype: typing.List[str] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetDatabasesColumnsFilter]] = None,
  id: str = None,
  schema_name: typing.List[str] = None,
  schema_name_contains: str = None,
  table_name: typing.List[str] = None,
  table_name_contains: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.targetDatabaseId">target_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#target_database_id DataOciDataSafeTargetDatabasesColumns#target_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.columnName">column_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#column_name DataOciDataSafeTargetDatabasesColumns#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.columnNameContains">column_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#column_name_contains DataOciDataSafeTargetDatabasesColumns#column_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.datatype">datatype</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#datatype DataOciDataSafeTargetDatabasesColumns#datatype}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter">DataOciDataSafeTargetDatabasesColumnsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#id DataOciDataSafeTargetDatabasesColumns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.schemaName">schema_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#schema_name DataOciDataSafeTargetDatabasesColumns#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.schemaNameContains">schema_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#schema_name_contains DataOciDataSafeTargetDatabasesColumns#schema_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.tableName">table_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#table_name DataOciDataSafeTargetDatabasesColumns#table_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.tableNameContains">table_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#table_name_contains DataOciDataSafeTargetDatabasesColumns#table_name_contains}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `target_database_id`<sup>Required</sup> <a name="target_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.targetDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#target_database_id DataOciDataSafeTargetDatabasesColumns#target_database_id}.

---

##### `column_name`<sup>Optional</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.columnName"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#column_name DataOciDataSafeTargetDatabasesColumns#column_name}.

---

##### `column_name_contains`<sup>Optional</sup> <a name="column_name_contains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.columnNameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#column_name_contains DataOciDataSafeTargetDatabasesColumns#column_name_contains}.

---

##### `datatype`<sup>Optional</sup> <a name="datatype" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.datatype"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#datatype DataOciDataSafeTargetDatabasesColumns#datatype}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter">DataOciDataSafeTargetDatabasesColumnsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#filter DataOciDataSafeTargetDatabasesColumns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#id DataOciDataSafeTargetDatabasesColumns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.schemaName"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#schema_name DataOciDataSafeTargetDatabasesColumns#schema_name}.

---

##### `schema_name_contains`<sup>Optional</sup> <a name="schema_name_contains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.schemaNameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#schema_name_contains DataOciDataSafeTargetDatabasesColumns#schema_name_contains}.

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.tableName"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#table_name DataOciDataSafeTargetDatabasesColumns#table_name}.

---

##### `table_name_contains`<sup>Optional</sup> <a name="table_name_contains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.tableNameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#table_name_contains DataOciDataSafeTargetDatabasesColumns#table_name_contains}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetColumnName">reset_column_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetColumnNameContains">reset_column_name_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetDatatype">reset_datatype</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetSchemaName">reset_schema_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetSchemaNameContains">reset_schema_name_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetTableName">reset_table_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetTableNameContains">reset_table_name_contains</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetDatabasesColumnsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter">DataOciDataSafeTargetDatabasesColumnsFilter</a>]]

---

##### `reset_column_name` <a name="reset_column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetColumnName"></a>

```python
def reset_column_name() -> None
```

##### `reset_column_name_contains` <a name="reset_column_name_contains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetColumnNameContains"></a>

```python
def reset_column_name_contains() -> None
```

##### `reset_datatype` <a name="reset_datatype" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetDatatype"></a>

```python
def reset_datatype() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```

##### `reset_schema_name_contains` <a name="reset_schema_name_contains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetSchemaNameContains"></a>

```python
def reset_schema_name_contains() -> None
```

##### `reset_table_name` <a name="reset_table_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetTableName"></a>

```python
def reset_table_name() -> None
```

##### `reset_table_name_contains` <a name="reset_table_name_contains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetTableNameContains"></a>

```python
def reset_table_name_contains() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeTargetDatabasesColumns resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases_columns

dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases_columns

dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases_columns

dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases_columns

dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeTargetDatabasesColumns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeTargetDatabasesColumns to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeTargetDatabasesColumns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeTargetDatabasesColumns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.columns">columns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList">DataOciDataSafeTargetDatabasesColumnsColumnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList">DataOciDataSafeTargetDatabasesColumnsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.columnNameContainsInput">column_name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.columnNameInput">column_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.datatypeInput">datatype_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter">DataOciDataSafeTargetDatabasesColumnsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.schemaNameContainsInput">schema_name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.schemaNameInput">schema_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.tableNameContainsInput">table_name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.tableNameInput">table_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.targetDatabaseIdInput">target_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.columnName">column_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.columnNameContains">column_name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.datatype">datatype</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.schemaName">schema_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.schemaNameContains">schema_name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.tableName">table_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.tableNameContains">table_name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.targetDatabaseId">target_database_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `columns`<sup>Required</sup> <a name="columns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.columns"></a>

```python
columns: DataOciDataSafeTargetDatabasesColumnsColumnsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList">DataOciDataSafeTargetDatabasesColumnsColumnsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.filter"></a>

```python
filter: DataOciDataSafeTargetDatabasesColumnsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList">DataOciDataSafeTargetDatabasesColumnsFilterList</a>

---

##### `column_name_contains_input`<sup>Optional</sup> <a name="column_name_contains_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.columnNameContainsInput"></a>

```python
column_name_contains_input: str
```

- *Type:* str

---

##### `column_name_input`<sup>Optional</sup> <a name="column_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.columnNameInput"></a>

```python
column_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `datatype_input`<sup>Optional</sup> <a name="datatype_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.datatypeInput"></a>

```python
datatype_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetDatabasesColumnsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter">DataOciDataSafeTargetDatabasesColumnsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `schema_name_contains_input`<sup>Optional</sup> <a name="schema_name_contains_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.schemaNameContainsInput"></a>

```python
schema_name_contains_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.schemaNameInput"></a>

```python
schema_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `table_name_contains_input`<sup>Optional</sup> <a name="table_name_contains_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.tableNameContainsInput"></a>

```python
table_name_contains_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.tableNameInput"></a>

```python
table_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_database_id_input`<sup>Optional</sup> <a name="target_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.targetDatabaseIdInput"></a>

```python
target_database_id_input: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.columnName"></a>

```python
column_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `column_name_contains`<sup>Required</sup> <a name="column_name_contains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.columnNameContains"></a>

```python
column_name_contains: str
```

- *Type:* str

---

##### `datatype`<sup>Required</sup> <a name="datatype" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.datatype"></a>

```python
datatype: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.schemaName"></a>

```python
schema_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schema_name_contains`<sup>Required</sup> <a name="schema_name_contains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.schemaNameContains"></a>

```python
schema_name_contains: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.tableName"></a>

```python
table_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `table_name_contains`<sup>Required</sup> <a name="table_name_contains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.tableNameContains"></a>

```python
table_name_contains: str
```

- *Type:* str

---

##### `target_database_id`<sup>Required</sup> <a name="target_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.targetDatabaseId"></a>

```python
target_database_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeTargetDatabasesColumnsColumns <a name="DataOciDataSafeTargetDatabasesColumnsColumns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases_columns

dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumns()
```


### DataOciDataSafeTargetDatabasesColumnsConfig <a name="DataOciDataSafeTargetDatabasesColumnsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases_columns

dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  target_database_id: str,
  column_name: typing.List[str] = None,
  column_name_contains: str = None,
  datatype: typing.List[str] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetDatabasesColumnsFilter]] = None,
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.targetDatabaseId">target_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#target_database_id DataOciDataSafeTargetDatabasesColumns#target_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.columnName">column_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#column_name DataOciDataSafeTargetDatabasesColumns#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.columnNameContains">column_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#column_name_contains DataOciDataSafeTargetDatabasesColumns#column_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.datatype">datatype</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#datatype DataOciDataSafeTargetDatabasesColumns#datatype}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter">DataOciDataSafeTargetDatabasesColumnsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#id DataOciDataSafeTargetDatabasesColumns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.schemaName">schema_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#schema_name DataOciDataSafeTargetDatabasesColumns#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.schemaNameContains">schema_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#schema_name_contains DataOciDataSafeTargetDatabasesColumns#schema_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.tableName">table_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#table_name DataOciDataSafeTargetDatabasesColumns#table_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.tableNameContains">table_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#table_name_contains DataOciDataSafeTargetDatabasesColumns#table_name_contains}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `target_database_id`<sup>Required</sup> <a name="target_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.targetDatabaseId"></a>

```python
target_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#target_database_id DataOciDataSafeTargetDatabasesColumns#target_database_id}.

---

##### `column_name`<sup>Optional</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.columnName"></a>

```python
column_name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#column_name DataOciDataSafeTargetDatabasesColumns#column_name}.

---

##### `column_name_contains`<sup>Optional</sup> <a name="column_name_contains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.columnNameContains"></a>

```python
column_name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#column_name_contains DataOciDataSafeTargetDatabasesColumns#column_name_contains}.

---

##### `datatype`<sup>Optional</sup> <a name="datatype" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.datatype"></a>

```python
datatype: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#datatype DataOciDataSafeTargetDatabasesColumns#datatype}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetDatabasesColumnsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter">DataOciDataSafeTargetDatabasesColumnsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#filter DataOciDataSafeTargetDatabasesColumns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#id DataOciDataSafeTargetDatabasesColumns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.schemaName"></a>

```python
schema_name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#schema_name DataOciDataSafeTargetDatabasesColumns#schema_name}.

---

##### `schema_name_contains`<sup>Optional</sup> <a name="schema_name_contains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.schemaNameContains"></a>

```python
schema_name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#schema_name_contains DataOciDataSafeTargetDatabasesColumns#schema_name_contains}.

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.tableName"></a>

```python
table_name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#table_name DataOciDataSafeTargetDatabasesColumns#table_name}.

---

##### `table_name_contains`<sup>Optional</sup> <a name="table_name_contains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.tableNameContains"></a>

```python
table_name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#table_name_contains DataOciDataSafeTargetDatabasesColumns#table_name_contains}.

---

### DataOciDataSafeTargetDatabasesColumnsFilter <a name="DataOciDataSafeTargetDatabasesColumnsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases_columns

dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#name DataOciDataSafeTargetDatabasesColumns#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#values DataOciDataSafeTargetDatabasesColumns#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#regex DataOciDataSafeTargetDatabasesColumns#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#name DataOciDataSafeTargetDatabasesColumns#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#values DataOciDataSafeTargetDatabasesColumns#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#regex DataOciDataSafeTargetDatabasesColumns#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeTargetDatabasesColumnsColumnsList <a name="DataOciDataSafeTargetDatabasesColumnsColumnsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases_columns

dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference <a name="DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases_columns

dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.characterLength">character_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.length">length</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.precision">precision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.scale">scale</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumns">DataOciDataSafeTargetDatabasesColumnsColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `character_length`<sup>Required</sup> <a name="character_length" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.characterLength"></a>

```python
character_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.length"></a>

```python
length: str
```

- *Type:* str

---

##### `precision`<sup>Required</sup> <a name="precision" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.precision"></a>

```python
precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale`<sup>Required</sup> <a name="scale" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.scale"></a>

```python
scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabasesColumnsColumns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumns">DataOciDataSafeTargetDatabasesColumnsColumns</a>

---


### DataOciDataSafeTargetDatabasesColumnsFilterList <a name="DataOciDataSafeTargetDatabasesColumnsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases_columns

dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasesColumnsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter">DataOciDataSafeTargetDatabasesColumnsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetDatabasesColumnsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter">DataOciDataSafeTargetDatabasesColumnsFilter</a>]]

---


### DataOciDataSafeTargetDatabasesColumnsFilterOutputReference <a name="DataOciDataSafeTargetDatabasesColumnsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases_columns

dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter">DataOciDataSafeTargetDatabasesColumnsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeTargetDatabasesColumnsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter">DataOciDataSafeTargetDatabasesColumnsFilter</a>]

---



