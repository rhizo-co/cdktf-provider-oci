# `dataOciDatabaseDbSystemComputePerformances` Submodule <a name="`dataOciDatabaseDbSystemComputePerformances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDbSystemComputePerformances <a name="DataOciDatabaseDbSystemComputePerformances" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances oci_database_db_system_compute_performances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_compute_performances

dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  db_system_shape: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseDbSystemComputePerformancesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.dbSystemShape">db_system_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#db_system_shape DataOciDatabaseDbSystemComputePerformances#db_system_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter">DataOciDatabaseDbSystemComputePerformancesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#id DataOciDatabaseDbSystemComputePerformances#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `db_system_shape`<sup>Optional</sup> <a name="db_system_shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.dbSystemShape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#db_system_shape DataOciDatabaseDbSystemComputePerformances#db_system_shape}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter">DataOciDatabaseDbSystemComputePerformancesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#filter DataOciDatabaseDbSystemComputePerformances#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#id DataOciDatabaseDbSystemComputePerformances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.resetDbSystemShape">reset_db_system_shape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseDbSystemComputePerformancesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter">DataOciDatabaseDbSystemComputePerformancesFilter</a>]]

---

##### `reset_db_system_shape` <a name="reset_db_system_shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.resetDbSystemShape"></a>

```python
def reset_db_system_shape() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseDbSystemComputePerformances resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_compute_performances

dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_compute_performances

dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_compute_performances

dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_compute_performances

dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseDbSystemComputePerformances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseDbSystemComputePerformances to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseDbSystemComputePerformances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDbSystemComputePerformances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.dbSystemComputePerformances">db_system_compute_performances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList">DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList">DataOciDatabaseDbSystemComputePerformancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.dbSystemShapeInput">db_system_shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter">DataOciDatabaseDbSystemComputePerformancesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.dbSystemShape">db_system_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `db_system_compute_performances`<sup>Required</sup> <a name="db_system_compute_performances" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.dbSystemComputePerformances"></a>

```python
db_system_compute_performances: DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList">DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.filter"></a>

```python
filter: DataOciDatabaseDbSystemComputePerformancesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList">DataOciDatabaseDbSystemComputePerformancesFilterList</a>

---

##### `db_system_shape_input`<sup>Optional</sup> <a name="db_system_shape_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.dbSystemShapeInput"></a>

```python
db_system_shape_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseDbSystemComputePerformancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter">DataOciDatabaseDbSystemComputePerformancesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `db_system_shape`<sup>Required</sup> <a name="db_system_shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.dbSystemShape"></a>

```python
db_system_shape: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDbSystemComputePerformancesConfig <a name="DataOciDatabaseDbSystemComputePerformancesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_compute_performances

dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  db_system_shape: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseDbSystemComputePerformancesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.dbSystemShape">db_system_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#db_system_shape DataOciDatabaseDbSystemComputePerformances#db_system_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter">DataOciDatabaseDbSystemComputePerformancesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#id DataOciDatabaseDbSystemComputePerformances#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `db_system_shape`<sup>Optional</sup> <a name="db_system_shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.dbSystemShape"></a>

```python
db_system_shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#db_system_shape DataOciDatabaseDbSystemComputePerformances#db_system_shape}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseDbSystemComputePerformancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter">DataOciDatabaseDbSystemComputePerformancesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#filter DataOciDatabaseDbSystemComputePerformances#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#id DataOciDatabaseDbSystemComputePerformances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances <a name="DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_compute_performances

dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances()
```


### DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct <a name="DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_compute_performances

dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct()
```


### DataOciDatabaseDbSystemComputePerformancesFilter <a name="DataOciDatabaseDbSystemComputePerformancesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_compute_performances

dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#name DataOciDatabaseDbSystemComputePerformances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#values DataOciDatabaseDbSystemComputePerformances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#regex DataOciDatabaseDbSystemComputePerformances#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#name DataOciDatabaseDbSystemComputePerformances#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#values DataOciDatabaseDbSystemComputePerformances#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#regex DataOciDatabaseDbSystemComputePerformances#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList <a name="DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_compute_performances

dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference <a name="DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_compute_performances

dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.networkBandwidthInGbps">network_bandwidth_in_gbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.networkIops">network_iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.networkThroughputInMbps">network_throughput_in_mbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct">DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_bandwidth_in_gbps`<sup>Required</sup> <a name="network_bandwidth_in_gbps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.networkBandwidthInGbps"></a>

```python
network_bandwidth_in_gbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_iops`<sup>Required</sup> <a name="network_iops" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.networkIops"></a>

```python
network_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_throughput_in_mbps`<sup>Required</sup> <a name="network_throughput_in_mbps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.networkThroughputInMbps"></a>

```python
network_throughput_in_mbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct">DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct</a>

---


### DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList <a name="DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_compute_performances

dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference <a name="DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_compute_performances

dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.computePerformanceList">compute_performance_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList">DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances">DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_performance_list`<sup>Required</sup> <a name="compute_performance_list" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.computePerformanceList"></a>

```python
compute_performance_list: DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList">DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList</a>

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances">DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances</a>

---


### DataOciDatabaseDbSystemComputePerformancesFilterList <a name="DataOciDatabaseDbSystemComputePerformancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_compute_performances

dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseDbSystemComputePerformancesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter">DataOciDatabaseDbSystemComputePerformancesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseDbSystemComputePerformancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter">DataOciDatabaseDbSystemComputePerformancesFilter</a>]]

---


### DataOciDatabaseDbSystemComputePerformancesFilterOutputReference <a name="DataOciDatabaseDbSystemComputePerformancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_db_system_compute_performances

dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter">DataOciDatabaseDbSystemComputePerformancesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseDbSystemComputePerformancesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter">DataOciDatabaseDbSystemComputePerformancesFilter</a>]

---



