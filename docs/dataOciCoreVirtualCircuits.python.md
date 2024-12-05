# `dataOciCoreVirtualCircuits` Submodule <a name="`dataOciCoreVirtualCircuits` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreVirtualCircuits <a name="DataOciCoreVirtualCircuits" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits oci_core_virtual_circuits}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuits

dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits(
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
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreVirtualCircuitsFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#compartment_id DataOciCoreVirtualCircuits#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#display_name DataOciCoreVirtualCircuits#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter">DataOciCoreVirtualCircuitsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#id DataOciCoreVirtualCircuits#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#state DataOciCoreVirtualCircuits#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#compartment_id DataOciCoreVirtualCircuits#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#display_name DataOciCoreVirtualCircuits#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter">DataOciCoreVirtualCircuitsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#filter DataOciCoreVirtualCircuits#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#id DataOciCoreVirtualCircuits#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#state DataOciCoreVirtualCircuits#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreVirtualCircuitsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter">DataOciCoreVirtualCircuitsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreVirtualCircuits resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuits

dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuits

dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuits

dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuits

dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreVirtualCircuits resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreVirtualCircuits to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreVirtualCircuits that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreVirtualCircuits to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList">DataOciCoreVirtualCircuitsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.virtualCircuits">virtual_circuits</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList">DataOciCoreVirtualCircuitsVirtualCircuitsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter">DataOciCoreVirtualCircuitsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.filter"></a>

```python
filter: DataOciCoreVirtualCircuitsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList">DataOciCoreVirtualCircuitsFilterList</a>

---

##### `virtual_circuits`<sup>Required</sup> <a name="virtual_circuits" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.virtualCircuits"></a>

```python
virtual_circuits: DataOciCoreVirtualCircuitsVirtualCircuitsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList">DataOciCoreVirtualCircuitsVirtualCircuitsList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreVirtualCircuitsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter">DataOciCoreVirtualCircuitsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreVirtualCircuitsConfig <a name="DataOciCoreVirtualCircuitsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuits

dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreVirtualCircuitsFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#compartment_id DataOciCoreVirtualCircuits#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#display_name DataOciCoreVirtualCircuits#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter">DataOciCoreVirtualCircuitsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#id DataOciCoreVirtualCircuits#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#state DataOciCoreVirtualCircuits#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#compartment_id DataOciCoreVirtualCircuits#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#display_name DataOciCoreVirtualCircuits#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreVirtualCircuitsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter">DataOciCoreVirtualCircuitsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#filter DataOciCoreVirtualCircuits#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#id DataOciCoreVirtualCircuits#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#state DataOciCoreVirtualCircuits#state}.

---

### DataOciCoreVirtualCircuitsFilter <a name="DataOciCoreVirtualCircuitsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuits

dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#name DataOciCoreVirtualCircuits#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#values DataOciCoreVirtualCircuits#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#regex DataOciCoreVirtualCircuits#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#name DataOciCoreVirtualCircuits#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#values DataOciCoreVirtualCircuits#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#regex DataOciCoreVirtualCircuits#regex}.

---

### DataOciCoreVirtualCircuitsVirtualCircuits <a name="DataOciCoreVirtualCircuitsVirtualCircuits" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuits"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuits.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuits

dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuits()
```


### DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings <a name="DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuits

dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings()
```


### DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes <a name="DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuits

dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes()
```


### DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata <a name="DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuits

dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreVirtualCircuitsFilterList <a name="DataOciCoreVirtualCircuitsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuits

dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVirtualCircuitsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter">DataOciCoreVirtualCircuitsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreVirtualCircuitsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter">DataOciCoreVirtualCircuitsFilter</a>]]

---


### DataOciCoreVirtualCircuitsFilterOutputReference <a name="DataOciCoreVirtualCircuitsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuits

dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter">DataOciCoreVirtualCircuitsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreVirtualCircuitsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter">DataOciCoreVirtualCircuitsFilter</a>]

---


### DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList <a name="DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuits

dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference <a name="DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuits

dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.bgpMd5AuthKey">bgp_md5_auth_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.crossConnectOrCrossConnectGroupId">cross_connect_or_cross_connect_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.customerBgpPeeringIp">customer_bgp_peering_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.customerBgpPeeringIpv6">customer_bgp_peering_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.oracleBgpPeeringIp">oracle_bgp_peering_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpv6">oracle_bgp_peering_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings">DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bgp_md5_auth_key`<sup>Required</sup> <a name="bgp_md5_auth_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.bgpMd5AuthKey"></a>

```python
bgp_md5_auth_key: str
```

- *Type:* str

---

##### `cross_connect_or_cross_connect_group_id`<sup>Required</sup> <a name="cross_connect_or_cross_connect_group_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.crossConnectOrCrossConnectGroupId"></a>

```python
cross_connect_or_cross_connect_group_id: str
```

- *Type:* str

---

##### `customer_bgp_peering_ip`<sup>Required</sup> <a name="customer_bgp_peering_ip" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.customerBgpPeeringIp"></a>

```python
customer_bgp_peering_ip: str
```

- *Type:* str

---

##### `customer_bgp_peering_ipv6`<sup>Required</sup> <a name="customer_bgp_peering_ipv6" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.customerBgpPeeringIpv6"></a>

```python
customer_bgp_peering_ipv6: str
```

- *Type:* str

---

##### `oracle_bgp_peering_ip`<sup>Required</sup> <a name="oracle_bgp_peering_ip" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.oracleBgpPeeringIp"></a>

```python
oracle_bgp_peering_ip: str
```

- *Type:* str

---

##### `oracle_bgp_peering_ipv6`<sup>Required</sup> <a name="oracle_bgp_peering_ipv6" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpv6"></a>

```python
oracle_bgp_peering_ipv6: str
```

- *Type:* str

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings">DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings</a>

---


### DataOciCoreVirtualCircuitsVirtualCircuitsList <a name="DataOciCoreVirtualCircuitsVirtualCircuitsList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuits

dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference <a name="DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuits

dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bandwidthShapeName">bandwidth_shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bgpAdminState">bgp_admin_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bgpIpv6SessionState">bgp_ipv6_session_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bgpManagement">bgp_management</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bgpSessionState">bgp_session_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.crossConnectMappings">cross_connect_mappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList">DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.customerAsn">customer_asn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.customerBgpAsn">customer_bgp_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.ipMtu">ip_mtu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.isBfdEnabled">is_bfd_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.isTransportMode">is_transport_mode</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.oracleBgpAsn">oracle_bgp_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.providerServiceId">provider_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.providerServiceKeyName">provider_service_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.providerState">provider_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.publicPrefixes">public_prefixes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList">DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.referenceComment">reference_comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.routingPolicy">routing_policy</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.virtualCircuitId">virtual_circuit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.virtualCircuitRedundancyMetadata">virtual_circuit_redundancy_metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList">DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuits">DataOciCoreVirtualCircuitsVirtualCircuits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bandwidth_shape_name`<sup>Required</sup> <a name="bandwidth_shape_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bandwidthShapeName"></a>

```python
bandwidth_shape_name: str
```

- *Type:* str

---

##### `bgp_admin_state`<sup>Required</sup> <a name="bgp_admin_state" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bgpAdminState"></a>

```python
bgp_admin_state: str
```

- *Type:* str

---

##### `bgp_ipv6_session_state`<sup>Required</sup> <a name="bgp_ipv6_session_state" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bgpIpv6SessionState"></a>

```python
bgp_ipv6_session_state: str
```

- *Type:* str

---

##### `bgp_management`<sup>Required</sup> <a name="bgp_management" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bgpManagement"></a>

```python
bgp_management: str
```

- *Type:* str

---

##### `bgp_session_state`<sup>Required</sup> <a name="bgp_session_state" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bgpSessionState"></a>

```python
bgp_session_state: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `cross_connect_mappings`<sup>Required</sup> <a name="cross_connect_mappings" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.crossConnectMappings"></a>

```python
cross_connect_mappings: DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList">DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList</a>

---

##### `customer_asn`<sup>Required</sup> <a name="customer_asn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.customerAsn"></a>

```python
customer_asn: str
```

- *Type:* str

---

##### `customer_bgp_asn`<sup>Required</sup> <a name="customer_bgp_asn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.customerBgpAsn"></a>

```python
customer_bgp_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_mtu`<sup>Required</sup> <a name="ip_mtu" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.ipMtu"></a>

```python
ip_mtu: str
```

- *Type:* str

---

##### `is_bfd_enabled`<sup>Required</sup> <a name="is_bfd_enabled" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.isBfdEnabled"></a>

```python
is_bfd_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_transport_mode`<sup>Required</sup> <a name="is_transport_mode" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.isTransportMode"></a>

```python
is_transport_mode: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `oracle_bgp_asn`<sup>Required</sup> <a name="oracle_bgp_asn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.oracleBgpAsn"></a>

```python
oracle_bgp_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_service_id`<sup>Required</sup> <a name="provider_service_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.providerServiceId"></a>

```python
provider_service_id: str
```

- *Type:* str

---

##### `provider_service_key_name`<sup>Required</sup> <a name="provider_service_key_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.providerServiceKeyName"></a>

```python
provider_service_key_name: str
```

- *Type:* str

---

##### `provider_state`<sup>Required</sup> <a name="provider_state" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.providerState"></a>

```python
provider_state: str
```

- *Type:* str

---

##### `public_prefixes`<sup>Required</sup> <a name="public_prefixes" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.publicPrefixes"></a>

```python
public_prefixes: DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList">DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList</a>

---

##### `reference_comment`<sup>Required</sup> <a name="reference_comment" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.referenceComment"></a>

```python
reference_comment: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `routing_policy`<sup>Required</sup> <a name="routing_policy" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.routingPolicy"></a>

```python
routing_policy: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `virtual_circuit_id`<sup>Required</sup> <a name="virtual_circuit_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.virtualCircuitId"></a>

```python
virtual_circuit_id: str
```

- *Type:* str

---

##### `virtual_circuit_redundancy_metadata`<sup>Required</sup> <a name="virtual_circuit_redundancy_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.virtualCircuitRedundancyMetadata"></a>

```python
virtual_circuit_redundancy_metadata: DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList">DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreVirtualCircuitsVirtualCircuits
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuits">DataOciCoreVirtualCircuitsVirtualCircuits</a>

---


### DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList <a name="DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuits

dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference <a name="DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuits

dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes">DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes">DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes</a>

---


### DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList <a name="DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuits

dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference <a name="DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuits

dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.configuredRedundancyLevel">configured_redundancy_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.ipv4BgpSessionRedundancyStatus">ipv4_bgp_session_redundancy_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.ipv6BgpSessionRedundancyStatus">ipv6_bgp_session_redundancy_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata">DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configured_redundancy_level`<sup>Required</sup> <a name="configured_redundancy_level" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.configuredRedundancyLevel"></a>

```python
configured_redundancy_level: str
```

- *Type:* str

---

##### `ipv4_bgp_session_redundancy_status`<sup>Required</sup> <a name="ipv4_bgp_session_redundancy_status" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.ipv4BgpSessionRedundancyStatus"></a>

```python
ipv4_bgp_session_redundancy_status: str
```

- *Type:* str

---

##### `ipv6_bgp_session_redundancy_status`<sup>Required</sup> <a name="ipv6_bgp_session_redundancy_status" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.ipv6BgpSessionRedundancyStatus"></a>

```python
ipv6_bgp_session_redundancy_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata">DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata</a>

---



