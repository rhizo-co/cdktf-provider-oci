# `dataOciDatabaseDataGuardAssociations` Submodule <a name="`dataOciDatabaseDataGuardAssociations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDataGuardAssociations <a name="DataOciDatabaseDataGuardAssociations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations oci_database_data_guard_associations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_data_guard_associations

dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseDataGuardAssociationsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#database_id DataOciDatabaseDataGuardAssociations#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter">DataOciDatabaseDataGuardAssociationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#id DataOciDatabaseDataGuardAssociations#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.databaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#database_id DataOciDatabaseDataGuardAssociations#database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter">DataOciDatabaseDataGuardAssociationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#filter DataOciDatabaseDataGuardAssociations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#id DataOciDatabaseDataGuardAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseDataGuardAssociationsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter">DataOciDatabaseDataGuardAssociationsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseDataGuardAssociations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_data_guard_associations

dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_data_guard_associations

dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_data_guard_associations

dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_data_guard_associations

dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseDataGuardAssociations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseDataGuardAssociations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseDataGuardAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDataGuardAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.dataGuardAssociations">data_guard_associations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList">DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList">DataOciDatabaseDataGuardAssociationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.databaseIdInput">database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter">DataOciDatabaseDataGuardAssociationsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.databaseId">database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `data_guard_associations`<sup>Required</sup> <a name="data_guard_associations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.dataGuardAssociations"></a>

```python
data_guard_associations: DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList">DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.filter"></a>

```python
filter: DataOciDatabaseDataGuardAssociationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList">DataOciDatabaseDataGuardAssociationsFilterList</a>

---

##### `database_id_input`<sup>Optional</sup> <a name="database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.databaseIdInput"></a>

```python
database_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseDataGuardAssociationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter">DataOciDatabaseDataGuardAssociationsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDataGuardAssociationsConfig <a name="DataOciDatabaseDataGuardAssociationsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_data_guard_associations

dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseDataGuardAssociationsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#database_id DataOciDatabaseDataGuardAssociations#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter">DataOciDatabaseDataGuardAssociationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#id DataOciDatabaseDataGuardAssociations#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#database_id DataOciDatabaseDataGuardAssociations#database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseDataGuardAssociationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter">DataOciDatabaseDataGuardAssociationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#filter DataOciDatabaseDataGuardAssociations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#id DataOciDatabaseDataGuardAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseDataGuardAssociationsDataGuardAssociations <a name="DataOciDatabaseDataGuardAssociationsDataGuardAssociations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_data_guard_associations

dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociations()
```


### DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions <a name="DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_data_guard_associations

dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions()
```


### DataOciDatabaseDataGuardAssociationsFilter <a name="DataOciDatabaseDataGuardAssociationsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_data_guard_associations

dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#name DataOciDatabaseDataGuardAssociations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#values DataOciDatabaseDataGuardAssociations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#regex DataOciDatabaseDataGuardAssociations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#name DataOciDatabaseDataGuardAssociations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#values DataOciDatabaseDataGuardAssociations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#regex DataOciDatabaseDataGuardAssociations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList <a name="DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_data_guard_associations

dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference <a name="DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_data_guard_associations

dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">is_diagnostics_events_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">is_health_monitoring_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">is_incident_logs_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions">DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_diagnostics_events_enabled`<sup>Required</sup> <a name="is_diagnostics_events_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```python
is_diagnostics_events_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_health_monitoring_enabled`<sup>Required</sup> <a name="is_health_monitoring_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```python
is_health_monitoring_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_incident_logs_enabled`<sup>Required</sup> <a name="is_incident_logs_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```python
is_incident_logs_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions">DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions</a>

---


### DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList <a name="DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_data_guard_associations

dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference <a name="DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_data_guard_associations

dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.applyLag">apply_lag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.applyRate">apply_rate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.backupNetworkNsgIds">backup_network_nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.createAsync">create_async</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.creationType">creation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseAdminPassword">database_admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseDefinedTags">database_defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseFreeformTags">database_freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseId">database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseSoftwareImageId">database_software_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList">DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.dbSystemDefinedTags">db_system_defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.dbSystemFreeformTags">db_system_freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.dbSystemSecurityAttributes">db_system_security_attributes</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.deleteStandbyDbHomeOnDelete">delete_standby_db_home_on_delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.faultDomains">fault_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.isActiveDataGuardEnabled">is_active_data_guard_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDatabaseId">peer_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDataGuardAssociationId">peer_data_guard_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDbHomeId">peer_db_home_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDbSystemId">peer_db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDbUniqueName">peer_db_unique_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerRole">peer_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerSidPrefix">peer_sid_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerVmClusterId">peer_vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.protectionMode">protection_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.storageVolumePerformanceMode">storage_volume_performance_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.transportType">transport_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociations">DataOciDatabaseDataGuardAssociationsDataGuardAssociations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apply_lag`<sup>Required</sup> <a name="apply_lag" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.applyLag"></a>

```python
apply_lag: str
```

- *Type:* str

---

##### `apply_rate`<sup>Required</sup> <a name="apply_rate" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.applyRate"></a>

```python
apply_rate: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `backup_network_nsg_ids`<sup>Required</sup> <a name="backup_network_nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.backupNetworkNsgIds"></a>

```python
backup_network_nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_async`<sup>Required</sup> <a name="create_async" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.createAsync"></a>

```python
create_async: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `creation_type`<sup>Required</sup> <a name="creation_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.creationType"></a>

```python
creation_type: str
```

- *Type:* str

---

##### `database_admin_password`<sup>Required</sup> <a name="database_admin_password" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseAdminPassword"></a>

```python
database_admin_password: str
```

- *Type:* str

---

##### `database_defined_tags`<sup>Required</sup> <a name="database_defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseDefinedTags"></a>

```python
database_defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `database_freeform_tags`<sup>Required</sup> <a name="database_freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseFreeformTags"></a>

```python
database_freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

---

##### `database_software_image_id`<sup>Required</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseSoftwareImageId"></a>

```python
database_software_image_id: str
```

- *Type:* str

---

##### `data_collection_options`<sup>Required</sup> <a name="data_collection_options" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.dataCollectionOptions"></a>

```python
data_collection_options: DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList">DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList</a>

---

##### `db_system_defined_tags`<sup>Required</sup> <a name="db_system_defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.dbSystemDefinedTags"></a>

```python
db_system_defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `db_system_freeform_tags`<sup>Required</sup> <a name="db_system_freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.dbSystemFreeformTags"></a>

```python
db_system_freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `db_system_security_attributes`<sup>Required</sup> <a name="db_system_security_attributes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.dbSystemSecurityAttributes"></a>

```python
db_system_security_attributes: StringMap
```

- *Type:* cdktf.StringMap

---

##### `delete_standby_db_home_on_delete`<sup>Required</sup> <a name="delete_standby_db_home_on_delete" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.deleteStandbyDbHomeOnDelete"></a>

```python
delete_standby_db_home_on_delete: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `fault_domains`<sup>Required</sup> <a name="fault_domains" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.faultDomains"></a>

```python
fault_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_active_data_guard_enabled`<sup>Required</sup> <a name="is_active_data_guard_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.isActiveDataGuardEnabled"></a>

```python
is_active_data_guard_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `peer_database_id`<sup>Required</sup> <a name="peer_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDatabaseId"></a>

```python
peer_database_id: str
```

- *Type:* str

---

##### `peer_data_guard_association_id`<sup>Required</sup> <a name="peer_data_guard_association_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDataGuardAssociationId"></a>

```python
peer_data_guard_association_id: str
```

- *Type:* str

---

##### `peer_db_home_id`<sup>Required</sup> <a name="peer_db_home_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDbHomeId"></a>

```python
peer_db_home_id: str
```

- *Type:* str

---

##### `peer_db_system_id`<sup>Required</sup> <a name="peer_db_system_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDbSystemId"></a>

```python
peer_db_system_id: str
```

- *Type:* str

---

##### `peer_db_unique_name`<sup>Required</sup> <a name="peer_db_unique_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDbUniqueName"></a>

```python
peer_db_unique_name: str
```

- *Type:* str

---

##### `peer_role`<sup>Required</sup> <a name="peer_role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerRole"></a>

```python
peer_role: str
```

- *Type:* str

---

##### `peer_sid_prefix`<sup>Required</sup> <a name="peer_sid_prefix" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerSidPrefix"></a>

```python
peer_sid_prefix: str
```

- *Type:* str

---

##### `peer_vm_cluster_id`<sup>Required</sup> <a name="peer_vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerVmClusterId"></a>

```python
peer_vm_cluster_id: str
```

- *Type:* str

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `protection_mode`<sup>Required</sup> <a name="protection_mode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.protectionMode"></a>

```python
protection_mode: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_volume_performance_mode`<sup>Required</sup> <a name="storage_volume_performance_mode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.storageVolumePerformanceMode"></a>

```python
storage_volume_performance_mode: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `transport_type`<sup>Required</sup> <a name="transport_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.transportType"></a>

```python
transport_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseDataGuardAssociationsDataGuardAssociations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociations">DataOciDatabaseDataGuardAssociationsDataGuardAssociations</a>

---


### DataOciDatabaseDataGuardAssociationsFilterList <a name="DataOciDatabaseDataGuardAssociationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_data_guard_associations

dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseDataGuardAssociationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter">DataOciDatabaseDataGuardAssociationsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseDataGuardAssociationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter">DataOciDatabaseDataGuardAssociationsFilter</a>]]

---


### DataOciDatabaseDataGuardAssociationsFilterOutputReference <a name="DataOciDatabaseDataGuardAssociationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_data_guard_associations

dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter">DataOciDatabaseDataGuardAssociationsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseDataGuardAssociationsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter">DataOciDatabaseDataGuardAssociationsFilter</a>]

---



