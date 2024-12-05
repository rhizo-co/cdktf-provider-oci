# `dataOciDatabaseDbSystemStoragePerformances` Submodule <a name="`dataOciDatabaseDbSystemStoragePerformances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDbSystemStoragePerformances <a name="DataOciDatabaseDbSystemStoragePerformances" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances oci_database_db_system_storage_performances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  storage_management: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseDbSystemStoragePerformancesFilter]] = None,
  id: str = None,
  shape_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.storageManagement">storage_management</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#storage_management DataOciDatabaseDbSystemStoragePerformances#storage_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter">DataOciDatabaseDbSystemStoragePerformancesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#id DataOciDatabaseDbSystemStoragePerformances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.shapeType">shape_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#shape_type DataOciDatabaseDbSystemStoragePerformances#shape_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `storage_management`<sup>Required</sup> <a name="storage_management" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.storageManagement"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#storage_management DataOciDatabaseDbSystemStoragePerformances#storage_management}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter">DataOciDatabaseDbSystemStoragePerformancesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#filter DataOciDatabaseDbSystemStoragePerformances#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#id DataOciDatabaseDbSystemStoragePerformances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shape_type`<sup>Optional</sup> <a name="shape_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.shapeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#shape_type DataOciDatabaseDbSystemStoragePerformances#shape_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.resetShapeType">reset_shape_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseDbSystemStoragePerformancesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter">DataOciDatabaseDbSystemStoragePerformancesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_shape_type` <a name="reset_shape_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.resetShapeType"></a>

```python
def reset_shape_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseDbSystemStoragePerformances resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseDbSystemStoragePerformances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseDbSystemStoragePerformances to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseDbSystemStoragePerformances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDbSystemStoragePerformances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.dbSystemStoragePerformances">db_system_storage_performances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList">DataOciDatabaseDbSystemStoragePerformancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter">DataOciDatabaseDbSystemStoragePerformancesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.shapeTypeInput">shape_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.storageManagementInput">storage_management_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.shapeType">shape_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.storageManagement">storage_management</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `db_system_storage_performances`<sup>Required</sup> <a name="db_system_storage_performances" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.dbSystemStoragePerformances"></a>

```python
db_system_storage_performances: DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.filter"></a>

```python
filter: DataOciDatabaseDbSystemStoragePerformancesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList">DataOciDatabaseDbSystemStoragePerformancesFilterList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseDbSystemStoragePerformancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter">DataOciDatabaseDbSystemStoragePerformancesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `shape_type_input`<sup>Optional</sup> <a name="shape_type_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.shapeTypeInput"></a>

```python
shape_type_input: str
```

- *Type:* str

---

##### `storage_management_input`<sup>Optional</sup> <a name="storage_management_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.storageManagementInput"></a>

```python
storage_management_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `shape_type`<sup>Required</sup> <a name="shape_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.shapeType"></a>

```python
shape_type: str
```

- *Type:* str

---

##### `storage_management`<sup>Required</sup> <a name="storage_management" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.storageManagement"></a>

```python
storage_management: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDbSystemStoragePerformancesConfig <a name="DataOciDatabaseDbSystemStoragePerformancesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  storage_management: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseDbSystemStoragePerformancesFilter]] = None,
  id: str = None,
  shape_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.storageManagement">storage_management</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#storage_management DataOciDatabaseDbSystemStoragePerformances#storage_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter">DataOciDatabaseDbSystemStoragePerformancesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#id DataOciDatabaseDbSystemStoragePerformances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.shapeType">shape_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#shape_type DataOciDatabaseDbSystemStoragePerformances#shape_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `storage_management`<sup>Required</sup> <a name="storage_management" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.storageManagement"></a>

```python
storage_management: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#storage_management DataOciDatabaseDbSystemStoragePerformances#storage_management}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseDbSystemStoragePerformancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter">DataOciDatabaseDbSystemStoragePerformancesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#filter DataOciDatabaseDbSystemStoragePerformances#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#id DataOciDatabaseDbSystemStoragePerformances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shape_type`<sup>Optional</sup> <a name="shape_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.shapeType"></a>

```python
shape_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#shape_type DataOciDatabaseDbSystemStoragePerformances#shape_type}.

---

### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances()
```


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance()
```


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance()
```


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct()
```


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance()
```


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance()
```


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct()
```


### DataOciDatabaseDbSystemStoragePerformancesFilter <a name="DataOciDatabaseDbSystemStoragePerformancesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#name DataOciDatabaseDbSystemStoragePerformances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#values DataOciDatabaseDbSystemStoragePerformances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#regex DataOciDatabaseDbSystemStoragePerformances#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#name DataOciDatabaseDbSystemStoragePerformances#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#values DataOciDatabaseDbSystemStoragePerformances#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#regex DataOciDatabaseDbSystemStoragePerformances#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.diskIops">disk_iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.diskThroughputInMbps">disk_throughput_in_mbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_iops`<sup>Required</sup> <a name="disk_iops" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.diskIops"></a>

```python
disk_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_throughput_in_mbps`<sup>Required</sup> <a name="disk_throughput_in_mbps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.diskThroughputInMbps"></a>

```python
disk_throughput_in_mbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance</a>

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.diskIops">disk_iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.diskThroughputInMbps">disk_throughput_in_mbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_iops`<sup>Required</sup> <a name="disk_iops" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.diskIops"></a>

```python
disk_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_throughput_in_mbps`<sup>Required</sup> <a name="disk_throughput_in_mbps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.diskThroughputInMbps"></a>

```python
disk_throughput_in_mbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance</a>

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.balancedDiskPerformance">balanced_disk_performance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.highDiskPerformance">high_disk_performance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.sizeInGbs">size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `balanced_disk_performance`<sup>Required</sup> <a name="balanced_disk_performance" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.balancedDiskPerformance"></a>

```python
balanced_disk_performance: DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList</a>

---

##### `high_disk_performance`<sup>Required</sup> <a name="high_disk_performance" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.highDiskPerformance"></a>

```python
high_disk_performance: DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList</a>

---

##### `size_in_gbs`<sup>Required</sup> <a name="size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.sizeInGbs"></a>

```python
size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct</a>

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.dataStoragePerformanceList">data_storage_performance_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.recoStoragePerformanceList">reco_storage_performance_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.shapeType">shape_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_storage_performance_list`<sup>Required</sup> <a name="data_storage_performance_list" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.dataStoragePerformanceList"></a>

```python
data_storage_performance_list: DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList</a>

---

##### `reco_storage_performance_list`<sup>Required</sup> <a name="reco_storage_performance_list" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.recoStoragePerformanceList"></a>

```python
reco_storage_performance_list: DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList</a>

---

##### `shape_type`<sup>Required</sup> <a name="shape_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.shapeType"></a>

```python
shape_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances</a>

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.diskIops">disk_iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.diskThroughputInMbps">disk_throughput_in_mbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_iops`<sup>Required</sup> <a name="disk_iops" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.diskIops"></a>

```python
disk_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_throughput_in_mbps`<sup>Required</sup> <a name="disk_throughput_in_mbps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.diskThroughputInMbps"></a>

```python
disk_throughput_in_mbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance</a>

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.diskIops">disk_iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.diskThroughputInMbps">disk_throughput_in_mbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_iops`<sup>Required</sup> <a name="disk_iops" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.diskIops"></a>

```python
disk_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_throughput_in_mbps`<sup>Required</sup> <a name="disk_throughput_in_mbps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.diskThroughputInMbps"></a>

```python
disk_throughput_in_mbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance</a>

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.balancedDiskPerformance">balanced_disk_performance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.highDiskPerformance">high_disk_performance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.sizeInGbs">size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `balanced_disk_performance`<sup>Required</sup> <a name="balanced_disk_performance" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.balancedDiskPerformance"></a>

```python
balanced_disk_performance: DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList</a>

---

##### `high_disk_performance`<sup>Required</sup> <a name="high_disk_performance" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.highDiskPerformance"></a>

```python
high_disk_performance: DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList</a>

---

##### `size_in_gbs`<sup>Required</sup> <a name="size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.sizeInGbs"></a>

```python
size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct</a>

---


### DataOciDatabaseDbSystemStoragePerformancesFilterList <a name="DataOciDatabaseDbSystemStoragePerformancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter">DataOciDatabaseDbSystemStoragePerformancesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseDbSystemStoragePerformancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter">DataOciDatabaseDbSystemStoragePerformancesFilter</a>]]

---


### DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference <a name="DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_storage_performances

dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter">DataOciDatabaseDbSystemStoragePerformancesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseDbSystemStoragePerformancesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter">DataOciDatabaseDbSystemStoragePerformancesFilter</a>]

---



