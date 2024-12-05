# `dataOciDatabaseDbNodeConsoleHistories` Submodule <a name="`dataOciDatabaseDbNodeConsoleHistories` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDbNodeConsoleHistories <a name="DataOciDatabaseDbNodeConsoleHistories" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories oci_database_db_node_console_histories}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_node_console_histories

dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  db_node_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseDbNodeConsoleHistoriesFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.dbNodeId">db_node_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#db_node_id DataOciDatabaseDbNodeConsoleHistories#db_node_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#display_name DataOciDatabaseDbNodeConsoleHistories#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter">DataOciDatabaseDbNodeConsoleHistoriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#id DataOciDatabaseDbNodeConsoleHistories#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#state DataOciDatabaseDbNodeConsoleHistories#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `db_node_id`<sup>Required</sup> <a name="db_node_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.dbNodeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#db_node_id DataOciDatabaseDbNodeConsoleHistories#db_node_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#display_name DataOciDatabaseDbNodeConsoleHistories#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter">DataOciDatabaseDbNodeConsoleHistoriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#filter DataOciDatabaseDbNodeConsoleHistories#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#id DataOciDatabaseDbNodeConsoleHistories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#state DataOciDatabaseDbNodeConsoleHistories#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseDbNodeConsoleHistoriesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter">DataOciDatabaseDbNodeConsoleHistoriesFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseDbNodeConsoleHistories resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_node_console_histories

dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_node_console_histories

dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_node_console_histories

dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_node_console_histories

dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseDbNodeConsoleHistories resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseDbNodeConsoleHistories to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseDbNodeConsoleHistories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDbNodeConsoleHistories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.consoleHistoryCollection">console_history_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList">DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList">DataOciDatabaseDbNodeConsoleHistoriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.dbNodeIdInput">db_node_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter">DataOciDatabaseDbNodeConsoleHistoriesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.dbNodeId">db_node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `console_history_collection`<sup>Required</sup> <a name="console_history_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.consoleHistoryCollection"></a>

```python
console_history_collection: DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList">DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.filter"></a>

```python
filter: DataOciDatabaseDbNodeConsoleHistoriesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList">DataOciDatabaseDbNodeConsoleHistoriesFilterList</a>

---

##### `db_node_id_input`<sup>Optional</sup> <a name="db_node_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.dbNodeIdInput"></a>

```python
db_node_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseDbNodeConsoleHistoriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter">DataOciDatabaseDbNodeConsoleHistoriesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `db_node_id`<sup>Required</sup> <a name="db_node_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.dbNodeId"></a>

```python
db_node_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDbNodeConsoleHistoriesConfig <a name="DataOciDatabaseDbNodeConsoleHistoriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_node_console_histories

dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  db_node_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseDbNodeConsoleHistoriesFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.dbNodeId">db_node_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#db_node_id DataOciDatabaseDbNodeConsoleHistories#db_node_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#display_name DataOciDatabaseDbNodeConsoleHistories#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter">DataOciDatabaseDbNodeConsoleHistoriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#id DataOciDatabaseDbNodeConsoleHistories#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#state DataOciDatabaseDbNodeConsoleHistories#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `db_node_id`<sup>Required</sup> <a name="db_node_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.dbNodeId"></a>

```python
db_node_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#db_node_id DataOciDatabaseDbNodeConsoleHistories#db_node_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#display_name DataOciDatabaseDbNodeConsoleHistories#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseDbNodeConsoleHistoriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter">DataOciDatabaseDbNodeConsoleHistoriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#filter DataOciDatabaseDbNodeConsoleHistories#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#id DataOciDatabaseDbNodeConsoleHistories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#state DataOciDatabaseDbNodeConsoleHistories#state}.

---

### DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection <a name="DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_node_console_histories

dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection()
```


### DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems <a name="DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_node_console_histories

dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems()
```


### DataOciDatabaseDbNodeConsoleHistoriesFilter <a name="DataOciDatabaseDbNodeConsoleHistoriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_node_console_histories

dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#name DataOciDatabaseDbNodeConsoleHistories#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#values DataOciDatabaseDbNodeConsoleHistories#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#regex DataOciDatabaseDbNodeConsoleHistories#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#name DataOciDatabaseDbNodeConsoleHistories#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#values DataOciDatabaseDbNodeConsoleHistories#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#regex DataOciDatabaseDbNodeConsoleHistories#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList <a name="DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_node_console_histories

dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference <a name="DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_node_console_histories

dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.dbNodeId">db_node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems">DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `db_node_id`<sup>Required</sup> <a name="db_node_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.dbNodeId"></a>

```python
db_node_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems">DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems</a>

---


### DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList <a name="DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_node_console_histories

dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference <a name="DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_node_console_histories

dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList">DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection">DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList">DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection">DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection</a>

---


### DataOciDatabaseDbNodeConsoleHistoriesFilterList <a name="DataOciDatabaseDbNodeConsoleHistoriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_node_console_histories

dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter">DataOciDatabaseDbNodeConsoleHistoriesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseDbNodeConsoleHistoriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter">DataOciDatabaseDbNodeConsoleHistoriesFilter</a>]]

---


### DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference <a name="DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_node_console_histories

dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter">DataOciDatabaseDbNodeConsoleHistoriesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseDbNodeConsoleHistoriesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter">DataOciDatabaseDbNodeConsoleHistoriesFilter</a>]

---



