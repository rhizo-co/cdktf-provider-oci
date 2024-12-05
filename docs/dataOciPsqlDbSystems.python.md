# `dataOciPsqlDbSystems` Submodule <a name="`dataOciPsqlDbSystems` Submodule" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciPsqlDbSystems <a name="DataOciPsqlDbSystems" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems oci_psql_db_systems}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystems(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciPsqlDbSystemsFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#compartment_id DataOciPsqlDbSystems#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#display_name DataOciPsqlDbSystems#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#id DataOciPsqlDbSystems#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#state DataOciPsqlDbSystems#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#compartment_id DataOciPsqlDbSystems#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#display_name DataOciPsqlDbSystems#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#filter DataOciPsqlDbSystems#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#id DataOciPsqlDbSystems#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#state DataOciPsqlDbSystems#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciPsqlDbSystemsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciPsqlDbSystems resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystems.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystems.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystems.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystems.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciPsqlDbSystems resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciPsqlDbSystems to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciPsqlDbSystems that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciPsqlDbSystems to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.dbSystemCollection">db_system_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList">DataOciPsqlDbSystemsDbSystemCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList">DataOciPsqlDbSystemsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `db_system_collection`<sup>Required</sup> <a name="db_system_collection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.dbSystemCollection"></a>

```python
db_system_collection: DataOciPsqlDbSystemsDbSystemCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList">DataOciPsqlDbSystemsDbSystemCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.filter"></a>

```python
filter: DataOciPsqlDbSystemsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList">DataOciPsqlDbSystemsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciPsqlDbSystemsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciPsqlDbSystemsConfig <a name="DataOciPsqlDbSystemsConfig" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciPsqlDbSystemsFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#compartment_id DataOciPsqlDbSystems#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#display_name DataOciPsqlDbSystems#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#id DataOciPsqlDbSystems#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#state DataOciPsqlDbSystems#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#compartment_id DataOciPsqlDbSystems#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#display_name DataOciPsqlDbSystems#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciPsqlDbSystemsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#filter DataOciPsqlDbSystems#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#id DataOciPsqlDbSystems#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#state DataOciPsqlDbSystems#state}.

---

### DataOciPsqlDbSystemsDbSystemCollection <a name="DataOciPsqlDbSystemsDbSystemCollection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollection()
```


### DataOciPsqlDbSystemsDbSystemCollectionItems <a name="DataOciPsqlDbSystemsDbSystemCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItems()
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials()
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails()
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsInstances <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsInstances" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstances.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstances()
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails()
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy()
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy()
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails()
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations()
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsSource <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsSource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSource()
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails()
```


### DataOciPsqlDbSystemsFilter <a name="DataOciPsqlDbSystemsFilter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#name DataOciPsqlDbSystems#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#values DataOciPsqlDbSystems#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#regex DataOciPsqlDbSystems#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#name DataOciPsqlDbSystems#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#values DataOciPsqlDbSystems#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#regex DataOciPsqlDbSystems#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.passwordDetails">password_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_details`<sup>Required</sup> <a name="password_details" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.passwordDetails"></a>

```python
password_details: DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList</a>

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.passwordType">password_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.secretVersion">secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `password_type`<sup>Required</sup> <a name="password_type" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.passwordType"></a>

```python
password_type: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstances">DataOciPsqlDbSystemsDbSystemCollectionItemsInstances</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciPsqlDbSystemsDbSystemCollectionItemsInstances
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstances">DataOciPsqlDbSystemsDbSystemCollectionItemsInstances</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.backupStart">backup_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.daysOfTheMonth">days_of_the_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.daysOfTheWeek">days_of_the_week</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_start`<sup>Required</sup> <a name="backup_start" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.backupStart"></a>

```python
backup_start: str
```

- *Type:* str

---

##### `days_of_the_month`<sup>Required</sup> <a name="days_of_the_month" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.daysOfTheMonth"></a>

```python
days_of_the_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `days_of_the_week`<sup>Required</sup> <a name="days_of_the_week" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.daysOfTheWeek"></a>

```python
days_of_the_week: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.backupPolicy">backup_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.maintenanceWindowStart">maintenance_window_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_policy`<sup>Required</sup> <a name="backup_policy" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.backupPolicy"></a>

```python
backup_policy: DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList</a>

---

##### `maintenance_window_start`<sup>Required</sup> <a name="maintenance_window_start" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.maintenanceWindowStart"></a>

```python
maintenance_window_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.primaryDbEndpointPrivateIp">primary_db_endpoint_private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `primary_db_endpoint_private_ip`<sup>Required</sup> <a name="primary_db_endpoint_private_ip" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.primaryDbEndpointPrivateIp"></a>

```python
primary_db_endpoint_private_ip: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.adminUsername">admin_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.applyConfig">apply_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.configId">config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instanceMemorySizeInGbs">instance_memory_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instanceOcpuCount">instance_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instances">instances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList">DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instancesDetails">instances_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.managementPolicy">management_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.networkDetails">network_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.patchOperations">patch_operations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList">DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList">DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.storageDetails">storage_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.systemType">system_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItems">DataOciPsqlDbSystemsDbSystemCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

---

##### `apply_config`<sup>Required</sup> <a name="apply_config" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.applyConfig"></a>

```python
apply_config: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.configId"></a>

```python
config_id: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.credentials"></a>

```python
credentials: DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList</a>

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_memory_size_in_gbs`<sup>Required</sup> <a name="instance_memory_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instanceMemorySizeInGbs"></a>

```python
instance_memory_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_ocpu_count`<sup>Required</sup> <a name="instance_ocpu_count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instanceOcpuCount"></a>

```python
instance_ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instances`<sup>Required</sup> <a name="instances" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instances"></a>

```python
instances: DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList">DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList</a>

---

##### `instances_details`<sup>Required</sup> <a name="instances_details" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instancesDetails"></a>

```python
instances_details: DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `management_policy`<sup>Required</sup> <a name="management_policy" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.managementPolicy"></a>

```python
management_policy: DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList</a>

---

##### `network_details`<sup>Required</sup> <a name="network_details" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.networkDetails"></a>

```python
network_details: DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList</a>

---

##### `patch_operations`<sup>Required</sup> <a name="patch_operations" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.patchOperations"></a>

```python
patch_operations: DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList">DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList</a>

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.source"></a>

```python
source: DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList">DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_details`<sup>Required</sup> <a name="storage_details" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.storageDetails"></a>

```python
storage_details: DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList</a>

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `system_type`<sup>Required</sup> <a name="system_type" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.systemType"></a>

```python
system_type: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciPsqlDbSystemsDbSystemCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItems">DataOciPsqlDbSystemsDbSystemCollectionItems</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.position">position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.selectedItem">selected_item</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.selection">selection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.value">value</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations">DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.position"></a>

```python
position: str
```

- *Type:* str

---

##### `selected_item`<sup>Required</sup> <a name="selected_item" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.selectedItem"></a>

```python
selected_item: str
```

- *Type:* str

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.selection"></a>

```python
selection: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.value"></a>

```python
value: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations">DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.backupId">backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.isHavingRestoreConfigOverrides">is_having_restore_config_overrides</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSource">DataOciPsqlDbSystemsDbSystemCollectionItemsSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_id`<sup>Required</sup> <a name="backup_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

---

##### `is_having_restore_config_overrides`<sup>Required</sup> <a name="is_having_restore_config_overrides" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.isHavingRestoreConfigOverrides"></a>

```python
is_having_restore_config_overrides: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataOciPsqlDbSystemsDbSystemCollectionItemsSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSource">DataOciPsqlDbSystemsDbSystemCollectionItemsSource</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.iops">iops</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.isRegionallyDurable">is_regionally_durable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.systemType">system_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `iops`<sup>Required</sup> <a name="iops" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.iops"></a>

```python
iops: str
```

- *Type:* str

---

##### `is_regionally_durable`<sup>Required</sup> <a name="is_regionally_durable" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.isRegionallyDurable"></a>

```python
is_regionally_durable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `system_type`<sup>Required</sup> <a name="system_type" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.systemType"></a>

```python
system_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionList <a name="DataOciPsqlDbSystemsDbSystemCollectionList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciPsqlDbSystemsDbSystemCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciPsqlDbSystemsDbSystemCollectionOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList">DataOciPsqlDbSystemsDbSystemCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollection">DataOciPsqlDbSystemsDbSystemCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.items"></a>

```python
items: DataOciPsqlDbSystemsDbSystemCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList">DataOciPsqlDbSystemsDbSystemCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciPsqlDbSystemsDbSystemCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollection">DataOciPsqlDbSystemsDbSystemCollection</a>

---


### DataOciPsqlDbSystemsFilterList <a name="DataOciPsqlDbSystemsFilterList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciPsqlDbSystemsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciPsqlDbSystemsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>]]

---


### DataOciPsqlDbSystemsFilterOutputReference <a name="DataOciPsqlDbSystemsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_systems

dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciPsqlDbSystemsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>]

---



