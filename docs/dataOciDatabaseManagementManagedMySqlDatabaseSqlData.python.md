# `dataOciDatabaseManagementManagedMySqlDatabaseSqlData` Submodule <a name="`dataOciDatabaseManagementManagedMySqlDatabaseSqlData` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedMySqlDatabaseSqlData <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlData" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data oci_database_management_managed_my_sql_database_sql_data}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_sql_data

dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  end_time: str,
  managed_my_sql_database_id: str,
  start_time: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter]] = None,
  filter_column: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.endTime">end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#end_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#end_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.managedMySqlDatabaseId">managed_my_sql_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#managed_my_sql_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#start_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#start_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.filterColumn">filter_column</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#filter_column DataOciDatabaseManagementManagedMySqlDatabaseSqlData#filter_column}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.endTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#end_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#end_time}.

---

##### `managed_my_sql_database_id`<sup>Required</sup> <a name="managed_my_sql_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.managedMySqlDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#managed_my_sql_database_id}.

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.startTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#start_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#start_time}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#filter DataOciDatabaseManagementManagedMySqlDatabaseSqlData#filter}

---

##### `filter_column`<sup>Optional</sup> <a name="filter_column" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.filterColumn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#filter_column DataOciDatabaseManagementManagedMySqlDatabaseSqlData#filter_column}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetFilterColumn">reset_filter_column</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_filter_column` <a name="reset_filter_column" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetFilterColumn"></a>

```python
def reset_filter_column() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedMySqlDatabaseSqlData resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_sql_data

dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_sql_data

dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_sql_data

dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_sql_data

dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedMySqlDatabaseSqlData resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementManagedMySqlDatabaseSqlData to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementManagedMySqlDatabaseSqlData that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedMySqlDatabaseSqlData to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.mySqlDataCollection">my_sql_data_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterColumnInput">filter_column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.managedMySqlDatabaseIdInput">managed_my_sql_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterColumn">filter_column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.managedMySqlDatabaseId">managed_my_sql_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filter"></a>

```python
filter: DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList</a>

---

##### `my_sql_data_collection`<sup>Required</sup> <a name="my_sql_data_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.mySqlDataCollection"></a>

```python
my_sql_data_collection: DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList</a>

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `filter_column_input`<sup>Optional</sup> <a name="filter_column_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterColumnInput"></a>

```python
filter_column_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_my_sql_database_id_input`<sup>Optional</sup> <a name="managed_my_sql_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.managedMySqlDatabaseIdInput"></a>

```python
managed_my_sql_database_id_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `filter_column`<sup>Required</sup> <a name="filter_column" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterColumn"></a>

```python
filter_column: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_my_sql_database_id`<sup>Required</sup> <a name="managed_my_sql_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.managedMySqlDatabaseId"></a>

```python
managed_my_sql_database_id: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_sql_data

dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  end_time: str,
  managed_my_sql_database_id: str,
  start_time: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter]] = None,
  filter_column: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.endTime">end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#end_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#end_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.managedMySqlDatabaseId">managed_my_sql_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#managed_my_sql_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#start_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#start_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.filterColumn">filter_column</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#filter_column DataOciDatabaseManagementManagedMySqlDatabaseSqlData#filter_column}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#end_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#end_time}.

---

##### `managed_my_sql_database_id`<sup>Required</sup> <a name="managed_my_sql_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.managedMySqlDatabaseId"></a>

```python
managed_my_sql_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#managed_my_sql_database_id}.

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#start_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#start_time}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#filter DataOciDatabaseManagementManagedMySqlDatabaseSqlData#filter}

---

##### `filter_column`<sup>Optional</sup> <a name="filter_column" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.filterColumn"></a>

```python
filter_column: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#filter_column DataOciDatabaseManagementManagedMySqlDatabaseSqlData#filter_column}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_sql_data

dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#name DataOciDatabaseManagementManagedMySqlDatabaseSqlData#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#values DataOciDatabaseManagementManagedMySqlDatabaseSqlData#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#regex DataOciDatabaseManagementManagedMySqlDatabaseSqlData#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#name DataOciDatabaseManagementManagedMySqlDatabaseSqlData#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#values DataOciDatabaseManagementManagedMySqlDatabaseSqlData#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#regex DataOciDatabaseManagementManagedMySqlDatabaseSqlData#regex}.

---

### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_sql_data

dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection()
```


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_sql_data

dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_sql_data

dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>]]

---


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_sql_data

dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>]

---


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_sql_data

dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_sql_data

dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.avgTimerWait">avg_timer_wait</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.countStar">count_star</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.digest">digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.digestText">digest_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.firstSeen">first_seen</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.heatWaveOffloaded">heat_wave_offloaded</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.heatWaveOutOfMemory">heat_wave_out_of_memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.lastSeen">last_seen</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.maxTimerWait">max_timer_wait</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.minTimerWait">min_timer_wait</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile95">quantile95</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile99">quantile99</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile999">quantile999</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumCreatedTempDiskTables">sum_created_temp_disk_tables</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumCreatedTempTables">sum_created_temp_tables</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumErrors">sum_errors</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumLockTime">sum_lock_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumNoGoodIndexUsed">sum_no_good_index_used</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumNoIndexUsed">sum_no_index_used</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsAffected">sum_rows_affected</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsExamined">sum_rows_examined</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsSent">sum_rows_sent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectFullJoin">sum_select_full_join</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectFullRangeJoin">sum_select_full_range_join</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectRange">sum_select_range</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectRangeCheck">sum_select_range_check</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectScan">sum_select_scan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortMergePasses">sum_sort_merge_passes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortRange">sum_sort_range</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortRows">sum_sort_rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortScan">sum_sort_scan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumTimerWait">sum_timer_wait</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumWarnings">sum_warnings</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avg_timer_wait`<sup>Required</sup> <a name="avg_timer_wait" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.avgTimerWait"></a>

```python
avg_timer_wait: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count_star`<sup>Required</sup> <a name="count_star" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.countStar"></a>

```python
count_star: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `digest`<sup>Required</sup> <a name="digest" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.digest"></a>

```python
digest: str
```

- *Type:* str

---

##### `digest_text`<sup>Required</sup> <a name="digest_text" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.digestText"></a>

```python
digest_text: str
```

- *Type:* str

---

##### `first_seen`<sup>Required</sup> <a name="first_seen" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.firstSeen"></a>

```python
first_seen: str
```

- *Type:* str

---

##### `heat_wave_offloaded`<sup>Required</sup> <a name="heat_wave_offloaded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.heatWaveOffloaded"></a>

```python
heat_wave_offloaded: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `heat_wave_out_of_memory`<sup>Required</sup> <a name="heat_wave_out_of_memory" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.heatWaveOutOfMemory"></a>

```python
heat_wave_out_of_memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_seen`<sup>Required</sup> <a name="last_seen" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.lastSeen"></a>

```python
last_seen: str
```

- *Type:* str

---

##### `max_timer_wait`<sup>Required</sup> <a name="max_timer_wait" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.maxTimerWait"></a>

```python
max_timer_wait: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_timer_wait`<sup>Required</sup> <a name="min_timer_wait" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.minTimerWait"></a>

```python
min_timer_wait: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `quantile95`<sup>Required</sup> <a name="quantile95" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile95"></a>

```python
quantile95: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `quantile99`<sup>Required</sup> <a name="quantile99" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile99"></a>

```python
quantile99: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `quantile999`<sup>Required</sup> <a name="quantile999" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile999"></a>

```python
quantile999: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `sum_created_temp_disk_tables`<sup>Required</sup> <a name="sum_created_temp_disk_tables" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumCreatedTempDiskTables"></a>

```python
sum_created_temp_disk_tables: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sum_created_temp_tables`<sup>Required</sup> <a name="sum_created_temp_tables" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumCreatedTempTables"></a>

```python
sum_created_temp_tables: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sum_errors`<sup>Required</sup> <a name="sum_errors" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumErrors"></a>

```python
sum_errors: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sum_lock_time`<sup>Required</sup> <a name="sum_lock_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumLockTime"></a>

```python
sum_lock_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sum_no_good_index_used`<sup>Required</sup> <a name="sum_no_good_index_used" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumNoGoodIndexUsed"></a>

```python
sum_no_good_index_used: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sum_no_index_used`<sup>Required</sup> <a name="sum_no_index_used" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumNoIndexUsed"></a>

```python
sum_no_index_used: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sum_rows_affected`<sup>Required</sup> <a name="sum_rows_affected" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsAffected"></a>

```python
sum_rows_affected: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sum_rows_examined`<sup>Required</sup> <a name="sum_rows_examined" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsExamined"></a>

```python
sum_rows_examined: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sum_rows_sent`<sup>Required</sup> <a name="sum_rows_sent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsSent"></a>

```python
sum_rows_sent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sum_select_full_join`<sup>Required</sup> <a name="sum_select_full_join" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectFullJoin"></a>

```python
sum_select_full_join: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sum_select_full_range_join`<sup>Required</sup> <a name="sum_select_full_range_join" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectFullRangeJoin"></a>

```python
sum_select_full_range_join: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sum_select_range`<sup>Required</sup> <a name="sum_select_range" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectRange"></a>

```python
sum_select_range: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sum_select_range_check`<sup>Required</sup> <a name="sum_select_range_check" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectRangeCheck"></a>

```python
sum_select_range_check: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sum_select_scan`<sup>Required</sup> <a name="sum_select_scan" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectScan"></a>

```python
sum_select_scan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sum_sort_merge_passes`<sup>Required</sup> <a name="sum_sort_merge_passes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortMergePasses"></a>

```python
sum_sort_merge_passes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sum_sort_range`<sup>Required</sup> <a name="sum_sort_range" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortRange"></a>

```python
sum_sort_range: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sum_sort_rows`<sup>Required</sup> <a name="sum_sort_rows" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortRows"></a>

```python
sum_sort_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sum_sort_scan`<sup>Required</sup> <a name="sum_sort_scan" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortScan"></a>

```python
sum_sort_scan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sum_timer_wait`<sup>Required</sup> <a name="sum_timer_wait" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumTimerWait"></a>

```python
sum_timer_wait: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sum_warnings`<sup>Required</sup> <a name="sum_warnings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumWarnings"></a>

```python
sum_warnings: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems</a>

---


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_sql_data

dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_my_sql_database_sql_data

dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection</a>

---



